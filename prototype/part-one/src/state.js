export const KEY='sis-filled-spirit-part-one-v2';
export const initialState=()=>({version:2,current:0,completed:[],responses:{},answers:{},revealed:{}});
export function normalize(raw,count){
 const fresh=initialState();
 if(!raw||raw.version!==2)return fresh;
 const strings=o=>Object.fromEntries(Object.entries(o&&typeof o==='object'&&!Array.isArray(o)?o:{}).filter(([k,v])=>k!=='__proto__'&&typeof v==='string'));
 return {...fresh,current:Number.isInteger(raw.current)?Math.max(0,Math.min(count-1,raw.current)):0,completed:[...new Set(Array.isArray(raw.completed)?raw.completed.filter(x=>Number.isInteger(x)&&x>=0&&x<count):[])],responses:strings(raw.responses),answers:strings(raw.answers),revealed:Object.fromEntries(Object.entries(raw.revealed&&typeof raw.revealed==='object'?raw.revealed:{}).filter(([k,v])=>k!=='__proto__'&&typeof v==='boolean'))};
}
export function loadState(storage,count){try{return {state:normalize(JSON.parse(storage.getItem(KEY)),count),available:true};}catch{return {state:initialState(),available:false};}}
export function saveState(storage,state){try{storage.setItem(KEY,JSON.stringify(state));return true;}catch{return false;}}
export function completeStep(state,index){return {...state,completed:[...new Set([...state.completed,index])]};}
