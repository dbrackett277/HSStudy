import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
const root=resolve(import.meta.dirname,'..');
await rm(resolve(root,'dist'),{recursive:true,force:true});
await mkdir(resolve(root,'dist'),{recursive:true});
await cp(resolve(root,'index.html'),resolve(root,'dist/index.html'));
await cp(resolve(root,'src'),resolve(root,'dist/src'),{recursive:true});
// Keep Prototype 1 intact and available within the same preview.
await mkdir(resolve(root,'dist/prototype-1'),{recursive:true});
await cp(resolve(root,'../lesson-7/index.html'),resolve(root,'dist/prototype-1/index.html'));
await cp(resolve(root,'../lesson-7/src'),resolve(root,'dist/prototype-1/src'),{recursive:true});
console.log('Built Part One and unchanged Prototype 1 in dist/');
