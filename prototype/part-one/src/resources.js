// Course components depend on this read boundary, never on WordPress field names.
// No SIS REST endpoint or ACF exposure has been assumed. This is a verified snapshot provider.
let cache;
export async function loadResources(){
 if(!cache)cache=fetch(new URL('./resources.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Scripture data unavailable');return r.json();}).catch(e=>{cache=null;throw e;});
 return cache;
}
export async function getResource(key){const all=await loadResources();if(!all[key])throw Error(`Unknown resource: ${key}`);return all[key];}
export function safeSisUrl(value){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='scriptureinterpretsscripture.com'?u.href:null;}catch{return null;}}
