import{as as w,_ as f,ae as C,aL as n,bA as e,bB as N,bC as c}from"./index-OE56k1X-.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),h=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:e.nullable().optional(),animation_url:e.optional().nullable()}),p=h.extend({external_url:e.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),O=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function B(a,t,l,o){if(w(l))o.value=t;else{const b=(await f(()=>import("./index-OE56k1X-.js").then(_=>_.eu),__vite__mapDeps([0,1]))).default,g=a.getSigner(),m=a.getProvider(),i=new C(g||m,l,b,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{h as B,p as C,O as N,S as a,B as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-OE56k1X-.js","assets/index-Zpn9ZsWz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}