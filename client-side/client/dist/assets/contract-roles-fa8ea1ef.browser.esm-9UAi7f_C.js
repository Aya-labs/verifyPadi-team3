var P=Object.defineProperty;var W=(c,e,t)=>e in c?P(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var p=(c,e,t)=>(W(c,typeof e!="symbol"?e+"":e,t),t);import{bf as E,ap as i,ai as m,ak as f,ah as F,aq as l,al as w,bg as N}from"./index-OE56k1X-.js";import{h as b}from"./contract-appuri-2a88c8fb.browser.esm-fIMgWqzA.js";class I{constructor(e,t){p(this,"featureName",E.name);p(this,"setAll",f(async e=>{var R,v;const t=new F(this.contractWrapper),r=Object.keys(e);i(r.length,"you must provide at least one role to set"),i(r.every(n=>this.roles.includes(n)),"this contract does not support the given role");const o=await this.getAll(),a=[],d=r.sort(n=>n==="admin"?1:-1);for(let n=0;n<d.length;n++){const h=d[n],[y,A]=await Promise.all([Promise.all(((R=e[h])==null?void 0:R.map(s=>l(s)))||[]),Promise.all(((v=o[h])==null?void 0:v.map(s=>l(s)))||[])]),C=y.filter(s=>!A.includes(s)),u=A.filter(s=>!y.includes(s));C.length&&C.forEach(s=>{a.push(t.encode("grantRole",[m(h),s]))}),u.length&&(await Promise.all(u.map(g=>this.getRevokeRoleFunctionName(g)))).forEach((g,k)=>a.push(t.encode(g,[m(h),u[k]])))}return w.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a]})}));p(this,"grant",f(async(e,t)=>{i(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await l(t);return w.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[m(e),r]})}));p(this,"revoke",f(async(e,t)=>{i(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await l(t),o=await this.getRevokeRoleFunctionName(r);return w.fromContractWrapper({contractWrapper:this.contractWrapper,method:o,args:[m(e),r]})}));this.contractWrapper=e,this.roles=t}async getAll(){i(this.roles.length,"this contract has no support for roles");const e={},t=Object.entries(this.roles);return(await Promise.all(t.map(r=>{let[,o]=r;return this.get(o)}))).forEach((r,o)=>e[t[o][1]]=r),e}async get(e){i(this.roles.includes(e),`this contract does not support the "${e}" role`);const t=this.contractWrapper;if(b("getRoleMemberCount",t)&&b("getRoleMember",t)){const r=m(e),o=(await t.read("getRoleMemberCount",[r])).toNumber();return await Promise.all(Array.from(Array(o).keys()).map(a=>t.read("getRoleMember",[r,a])))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(e,t){await Promise.all(e.map(async r=>{const[o,a]=await Promise.all([this.get(r),l(t)]);if(!o.map(d=>d.toLowerCase()).includes(a.toLowerCase()))throw new N(a,r)}))}async getRevokeRoleFunctionName(e){const[t,r]=await Promise.all([l(e),this.contractWrapper.getSignerAddress()]);return r.toLowerCase()===t.toLowerCase()?"renounceRole":"revokeRole"}}export{I as C};