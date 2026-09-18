import {modules,steps,reflectionPrompts} from './course-data.js';
import {KEY,initialState,loadState,saveState,completeStep} from './state.js';
import {loadResources,safeSisUrl} from './resources.js';
const $=selector=>document.querySelector(selector);
const esc=(v='')=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
let storage;try{storage=window.localStorage;}catch{storage=null;}
let {state}=loadState(storage,steps.length);
let resources={};let resourceError=false;
const el={content:$('#section-content'),main:$('#course-content'),next:$('#next'),back:$('#back'),list:$('#module-list'),status:$('#save-status'),dialog:$('#notes-dialog')};
function persist(){const ok=saveState(storage,state);el.status.textContent=ok?'Place and reflections saved on this browser.':'Storage unavailable. Keep this tab open; download reflections before leaving.';return ok;}
function external(url,title){const safe=safeSisUrl(url);return safe?`<a href="${esc(safe)}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a>`:esc(title);}
function scripture(b,index){
 const r=resources[b.key];
 if(!r)return `<div class="content-block"><h2>Scripture could not load</h2><p>Reconnect and retry before continuing this study step.</p><button class="button button--secondary" data-retry>Retry Scripture</button></div>`;
 const id=`${steps[state.current].id}-scripture-${index}`;
 return `<details class="scripture-reveal" data-disclosure="${id}" ${state.revealed[id]?'open':''}><summary>Read ${esc(r.reference)}</summary><p class="why">${esc(b.why)}</p><blockquote>${esc(r.text)}</blockquote><details class="context-detail"><summary>Read the immediate context</summary><p>${esc(r.context)}</p></details>${r.url?external(r.url,'View full Scripture Block'):''}<p class="source-note">${r.source==='sis-snapshot'?'Scripture text from SIS · ESV as labeled on SIS · snapshot retrieved 18 September 2026.':esc(r.sourceNote)}</p></details>`;
}
function activity(b){
 const checked=state.revealed[`checked-${b.id}`];
 const complete=b.items.every((_,i)=>state.answers[`${b.id}-${i}`]);
 const right=b.items.every((x,i)=>state.answers[`${b.id}-${i}`]===x[1]);
 return `<section class="content-block"><p class="block-label">${b.type==='matching'?'Guided comparison':'Check the connection'}</p><h2>${esc(b.title)}</h2>${b.items.map(([label],i)=>`<div class="activity-row"><label for="${b.id}-${i}">${esc(label)}</label><select id="${b.id}-${i}" data-answer="${b.id}-${i}"><option value="">Choose an observation</option>${b.options.map(o=>`<option ${state.answers[`${b.id}-${i}`]===o?'selected':''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="button button--secondary" data-check="${b.id}">Compare with the passages</button><div class="activity-feedback ${checked?'':'hidden'}" id="feedback-${b.id}" role="status">${checked?activityFeedback(b,complete,right):''}</div><p class="answer-hint">This is practice, not a grade. You can revise your choices.</p></section>`;
}
function activityFeedback(b,complete,right){return !complete?'Choose an observation for each line, then compare.':`${right?'Your observations match the comparison.':'Revisit the passages and compare the relationships below.'} ${esc(b.feedback)}<ul>${b.items.map(([label,answer])=>`<li>${esc(label)}: <strong>${esc(answer)}</strong></li>`).join('')}</ul>`;}
function block(b,i){switch(b.type){
 case 'prose':return `<div class="prose">${b.paragraphs.map(t=>`<p>${esc(t)}</p>`).join('')}</div>`;
 case 'scripture':return scripture(b,i);
 case 'reflection':return `<section class="content-block prompt-block"><p class="block-label">Pause & reflect</p><h2>${esc(b.title)}</h2><p>${esc(b.prompt)}</p><label for="note-${b.id}">Your reflection (optional)</label><textarea id="note-${b.id}" data-response="${b.id}" placeholder="Write a thought, a question, or ‘I don’t know yet.’">${esc(state.responses[b.id]||'')}</textarea></section>`;
 case 'reveal':{const key=`${steps[state.current].id}-reveal-${i}`;return `<details class="reveal-block" data-disclosure="${key}" ${state.revealed[key]?'open':''}><summary>${esc(b.label)}: ${esc(b.title)}</summary><p>${esc(b.text)}</p></details>`;}
 case 'note':return `<section class="content-block note-block"><p class="block-label">${esc(b.label)}</p><h2>${esc(b.title)}</h2><p>${esc(b.text)}</p></section>`;
 case 'compare':return `<section class="content-block"><h2>${esc(b.title)}</h2><div class="compare-grid">${b.columns.map(([title,text])=>`<div><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('')}</div></section>`;
 case 'matching':case 'classify':return activity(b);
 case 'deeper':return deeperBlock(b);
 case 'deeperFrom':{const r=resources[b.key]?.related?.find(r=>r.title.includes(b.match));return r?deeperBlock({...r,why:b.why}):'';}
 case 'standard':return `<section class="content-block"><p class="block-label">A recurring study tool</p><ol class="standard-list">${b.items.map(([title,text],n)=>`<li><span>${n+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol></section>`;
 case 'timeline':return `<section class="timeline" aria-label="A change in emphasis across the Bible">${b.items.map(([period,title,text])=>`<article><p class="time-label">${esc(period)}</p><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join('')}</section>`;
 case 'phrases':return `<section class="phrase-list" aria-label="Questions to carry forward">${b.items.map(([title,ref,q])=>`<details><summary>${esc(title)}</summary><small>${esc(ref)}</small><p>${esc(q)}</p></details>`).join('')}</section>`;
 case 'anchors':return `<section class="anchors" aria-label="Four anchors">${b.items.map(([title,text,q])=>`<article><h2>${esc(title)}</h2><p>${esc(text)}</p><p class="anchor-question">${esc(q)}</p></article>`).join('')}</section>`;
 case 'revisit':return `<section><p class="block-label">Your starting point · preserved for comparison</p>${b.ids.map(id=>`<div class="earlier-note"><h3>${esc(reflectionPrompts[id])}</h3><blockquote>${esc(state.responses[id]||'You did not record a written response. Recall your starting thoughts before answering below.')}</blockquote></div>`).join('')}</section>`;
 case 'finish':return `<div id="finish-status" class="finish-message">${state.completed.length===steps.length?'You have completed every step in Part One. Your reflections remain available.':`You have marked ${state.completed.length} of ${steps.length} steps complete. Use the study map to revisit any open steps.`}</div>`;
 default:throw Error(`Unknown component ${b.type}`);
}}
function deeperBlock(b){return `<aside class="deeper-block"><p class="block-label">Deeper Study · optional</p>${external(b.url,b.title)}<p>${esc(b.why)}</p><small>Opens on SIS in a new tab. Close that tab to return to this exact place. This exploration does not change your completion progress.</small></aside>`;}
function render(focus=false){
 const s=steps[state.current],m=modules[s.moduleIndex];
 el.content.className='lesson-section';
 el.content.innerHTML=`<header class="section-header"><p class="eyebrow">${s.moduleIndex===0?'Course opening':`Investigation ${s.moduleIndex} of 5`} · ${esc(m.title)}</p><h1>${esc(s.title)}</h1><p class="section-lead">${esc(s.question)}</p></header><div class="section-body">${s.blocks.map(block).join('')}</div><aside class="bridge"><span class="block-label">${state.current===steps.length-1?'Looking ahead':'The next connection'}</span><p>${esc(s.bridge)}</p></aside><details class="source-details"><summary>Course source</summary><p>Filled with the Holy Spirit · ${esc(s.source)}. Teaching adapted for self-paced study; Scripture quotations are identified separately.</p></details>`;
 $('#progress-label').textContent=`${m.title} · Step ${s.withinModule+1} of ${m.steps.length}`;
 $('#completed-label').textContent=`${state.completed.length} / ${steps.length} complete`;
 $('#thread').textContent=m.thread;
 const percentage=Math.round(state.completed.length/steps.length*100);$('#progress-bar').style.width=`${percentage}%`;$('.progress-track').setAttribute('aria-valuenow',percentage);
 el.back.disabled=state.current===0;
 el.next.textContent=state.current===steps.length-1?'Finish Part One':s.withinModule===m.steps.length-1?'Continue to next investigation':'Continue';
 renderMap();bindContent();persist();
 document.title=`${s.title} | Filled with the Holy Spirit`;
 if(focus){el.main.focus({preventScroll:true});el.main.scrollIntoView({behavior:'instant',block:'start'});}
}
function renderMap(){el.list.innerHTML=modules.map((m,mi)=>{
 const first=steps.findIndex(s=>s.moduleIndex===mi),done=m.steps.filter((_,i)=>state.completed.includes(first+i)).length,current=steps[state.current].moduleIndex===mi;
 return `<li><button data-go="${first}" ${current?'aria-current="step"':''}><span class="module-status">${done===m.steps.length?'✓':mi===0?'○':String(mi).padStart(2,'0')}</span><div>${esc(m.title)}<small>${esc(m.time)} · ${done}/${m.steps.length} complete</small></div></button>${current?`<ol class="module-step-list">${m.steps.map((s,i)=>`<li><button data-go="${first+i}" ${state.current===first+i?'aria-current="step"':''}>${state.completed.includes(first+i)?'✓ ':''}${esc(s.title)}</button></li>`).join('')}</ol>`:''}</li>`;
}).join('');el.list.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.go))));}
function go(index){if(index<0||index>=steps.length)return;state.current=index;history.pushState(null,'',`#${steps[index].id}`);el.list.classList.remove('is-open');$('#map-toggle').setAttribute('aria-expanded','false');render(true);}
function bindContent(){
 el.content.querySelectorAll('[data-response]').forEach(t=>t.addEventListener('input',()=>{state.responses[t.dataset.response]=t.value;persist();}));
 el.content.querySelectorAll('[data-answer]').forEach(s=>s.addEventListener('change',()=>{state.answers[s.dataset.answer]=s.value;const b=steps[state.current].blocks.find(b=>b.id&&s.dataset.answer.startsWith(b.id+'-'));if(b){state.revealed[`checked-${b.id}`]=false;$(`#feedback-${b.id}`).classList.add('hidden');}persist();}));
 el.content.querySelectorAll('[data-check]').forEach(button=>button.addEventListener('click',()=>{const b=steps[state.current].blocks.find(b=>b.id===button.dataset.check);state.revealed[`checked-${b.id}`]=true;const f=$(`#feedback-${b.id}`);f.innerHTML=activityFeedback(b,b.items.every((_,i)=>state.answers[`${b.id}-${i}`]),b.items.every((x,i)=>state.answers[`${b.id}-${i}`]===x[1]));f.classList.remove('hidden');persist();}));
 el.content.querySelectorAll('[data-disclosure]').forEach(d=>d.addEventListener('toggle',()=>{if(!d.isConnected)return;state.revealed[d.dataset.disclosure]=d.open;persist();}));
 el.content.querySelectorAll('[data-retry]').forEach(b=>b.addEventListener('click',async()=>{try{resources=await loadResources();resourceError=false;render();}catch{el.status.textContent='Scripture is still unavailable. Please reconnect and retry.';}}));
}
el.next.addEventListener('click',()=>{
 if(resourceError&&steps[state.current].blocks.some(b=>b.type==='scripture')){el.status.textContent='Load the Scripture before marking this step complete.';return;}
 state=completeStep(state,state.current);
 if(state.current<steps.length-1)go(state.current+1);else{render();$('#finish-status').setAttribute('role','status');$('#finish-status').scrollIntoView({behavior:'instant',block:'center'});}
});
el.back.addEventListener('click',()=>go(state.current-1));
$('#map-toggle').addEventListener('click',()=>{const open=el.list.classList.toggle('is-open');$('#map-toggle').setAttribute('aria-expanded',String(open));});
$('#notebook').addEventListener('click',()=>{$('#all-notes').innerHTML=Object.entries(reflectionPrompts).filter(([id])=>state.responses[id]).map(([id,title])=>`<section class="earlier-note"><h3>${esc(title)}</h3><blockquote>${esc(state.responses[id])}</blockquote></section>`).join('')||'<p class="notes-empty">No written reflections yet. Your prompts are waiting in the study.</p>';el.dialog.showModal();});
$('.close-dialog').addEventListener('click',()=>el.dialog.close());
$('#export-notes').addEventListener('click',()=>{const text=['Filled with the Holy Spirit — Part One reflections','',...Object.entries(reflectionPrompts).filter(([id])=>state.responses[id]).map(([id,title])=>`${title}\n${state.responses[id]}\n`) ].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Holy-Spirit-Part-One-Reflections.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$('#reset').addEventListener('click',()=>{try{storage?.removeItem(KEY);}catch{}state=initialState();el.dialog.close();go(0);});
window.addEventListener('popstate',()=>{const i=steps.findIndex(s=>`#${s.id}`===location.hash);if(i>=0){state.current=i;render(true);}});
window.addEventListener('pagehide',persist);
const hashIndex=steps.findIndex(s=>`#${s.id}`===location.hash);if(hashIndex>=0)state.current=hashIndex;
history.replaceState(null,'',`#${steps[state.current].id}`);
try{resources=await loadResources();}catch{resourceError=true;}
render();
