import{Z as le,b as H,a4 as ce,d as Y,h as W,a5 as de,o as _,c as T,E as ue,B as M,z as p,t as w,F as fe,N as pe,a6 as he,a7 as ge,T as ye,O as me,Q as _e,_ as Z,u as X,x as be,l as U,A as j,n as ve,K as V,C as q,a as ke,M as R,a8 as Te,p as He,k as Ce,a9 as $e,aa as we,ab as Pe,ac as Ae,ad as Se,ae as Ee,af as Oe,ag as Me,ah as je,ai as Le,aj as Ie,ak as We,al as De,J as xe}from"./chunks/framework.70e71619.js";import{t as F}from"./chunks/theme.8398ceab.js";function K(t,e={},n){for(const s in t){const r=t[s],o=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?K(r,e,o):typeof r=="function"&&(e[o]=r)}return e}const Re={run:t=>t()},Fe=()=>Re,ee=typeof console.createTask<"u"?console.createTask:Fe;function Ke(t,e){const n=e.shift(),s=ee(n);return t.reduce((r,o)=>r.then(()=>s.run(()=>o(...e))),Promise.resolve())}function Ne(t,e){const n=e.shift(),s=ee(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function D(t,e){for(const n of[...t])n(e)}class Be{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let o;for(;this._deprecatedHooks[e];)o=this._deprecatedHooks[e],e=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${r} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...o)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...o));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=K(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=K(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Ke,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Ne,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&D(this._before,r);const o=e(n in this._hooks?[...this._hooks[n]]:[],s);return o instanceof Promise?o.finally(()=>{this._after&&r&&D(this._after,r)}):(this._after&&r&&D(this._after,r),o)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Ue(){return new Be}function Ve(t){return Array.isArray(t)?t:[t]}const te=["title","script","style","noscript"],ne=["base","meta","link","style","script","noscript"],qe=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Je=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Ge=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function se(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function N(t){return se(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Qe(t){let e=9;for(const n of t)for(let s=0;s<n.length;)e=Math.imul(e^n.charCodeAt(s++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function re(t,e){const{props:n,tag:s}=t;if(Je.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const o of r)if(typeof n[o]<"u"){const i=String(n[o]);return e&&!e(i)?!1:`${s}:${o}:${i}`}return!1}function J(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function E(t,e=!1,n){const{tag:s,$el:r}=t;r&&(Object.entries(s.props).forEach(([o,i])=>{i=String(i);const c=`attr:${o}`;if(o==="class"){if(!i)return;for(const l of i.split(" ")){const u=`${c}:${l}`;n&&n(t,u,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!o.startsWith("data-h-")&&n(t,c,()=>r.removeAttribute(o)),(e||r.getAttribute(o)!==i)&&r.setAttribute(o,i)}),te.includes(s.tag)&&(s.textContent&&s.textContent!==r.textContent?r.textContent=s.textContent:s.innerHTML&&s.innerHTML!==r.innerHTML&&(r.innerHTML=s.innerHTML)))}let S=!1;async function ze(t,e={}){var y,v;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(c);if(t.resolvedOptions.experimentalHashHydration&&(S=S||t._hash||!1,S)){const a=Qe(r.map(d=>d.tag._h));if(S===a)return;S=a}const o=t._popSideEffectQueue();t.headEntries().map(a=>a._sde).forEach(a=>{Object.entries(a).forEach(([d,b])=>{o[d]=b})});const i=(a,d,b)=>{d=`${a.renderId}:${d}`,a.entry&&(a.entry._sde[d]=b),delete o[d]};function c(a){const d=t.headEntries().find(C=>C._i===a._e),b={renderId:a._d||N(a),$el:null,shouldRender:!0,tag:a,entry:d,markSideEffect:(C,g)=>i(b,C,g)};return b}const l=[],u={body:[],head:[]},h=a=>{t._elMap[a.renderId]=a.$el,l.push(a),i(a,"el",()=>{var d;(d=a.$el)==null||d.remove(),delete t._elMap[a.renderId]})};for(const a of r){if(await t.hooks.callHook("dom:beforeRenderTag",a),!a.shouldRender)continue;const{tag:d}=a;if(d.tag==="title"){s.title=d.textContent||"",l.push(a);continue}if(d.tag==="htmlAttrs"||d.tag==="bodyAttrs"){a.$el=s[d.tag==="htmlAttrs"?"documentElement":"body"],E(a,!1,i),l.push(a);continue}if(a.$el=t._elMap[a.renderId],!a.$el&&d.key&&(a.$el=s.querySelector(`${(y=d.tagPosition)!=null&&y.startsWith("body")?"body":"head"} > ${d.tag}[data-h-${d._h}]`)),a.$el){a.tag._d&&E(a),h(a);continue}u[(v=d.tagPosition)!=null&&v.startsWith("body")?"body":"head"].push(a)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([a,d])=>{var C;if(!d.length)return;const b=(C=s==null?void 0:s[a])==null?void 0:C.children;if(b){for(const g of[...b].reverse()){const $=g.tagName.toLowerCase();if(!ne.includes($))continue;const ie=g.getAttributeNames().reduce((m,k)=>({...m,[k]:g.getAttribute(k)}),{}),I={tag:$,props:ie};g.innerHTML&&(I.innerHTML=g.innerHTML);const ae=N(I);let A=d.findIndex(m=>(m==null?void 0:m.renderId)===ae);if(A===-1){const m=re(I);A=d.findIndex(k=>(k==null?void 0:k.tag._d)&&k.tag._d===m)}if(A!==-1){const m=d[A];m.$el=g,E(m),h(m),delete d[A]}}d.forEach(g=>{const $=g.tag.tagPosition||"head";f[$]=f[$]||s.createDocumentFragment(),g.$el||(g.$el=s.createElement(g.tag.tag),E(g,!0)),f[$].appendChild(g.$el),h(g)})}}),f.head&&s.head.appendChild(f.head),f.bodyOpen&&s.body.insertBefore(f.bodyOpen,s.body.firstChild),f.bodyClose&&s.body.appendChild(f.bodyClose);for(const a of l)await t.hooks.callHook("dom:renderTag",a);Object.values(o).forEach(a=>a())}let x=null;async function Ye(t,e={}){function n(){return x=null,ze(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return x=x||new Promise(r=>s(()=>r(n())))}function Ze(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Ye(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function Xe(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const G={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Q(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in G?G[e]:10}const et=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function tt(){return{hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of et)for(const r of t.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=e(r.tagPriority.replace(n,""));typeof o<"u"&&(r._p=o+s)}t.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Q(n)-Q(s))}}}}function nt(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=J(e[n].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(n!==-1){const r=J(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function st(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const rt=["link","style","script","noscript"];function ot(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=N(t)),t.key&&rt.includes(t.tag)&&(t._h=se(t.key),t.props[`data-h-${t._h}`]="")}}}}const z=["script","link","bodyAttrs"];function it(){const t=(e,n)=>{const s={},r={};Object.entries(n.props).forEach(([i,c])=>{i.startsWith("on")&&typeof c=="function"?r[i]=c:s[i]=c});let o;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:o}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!z.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!z.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=t("dom",e.tag);Object.keys(s).length&&(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,o])=>{const i=`${e.tag._d||e.tag._p}:${r}`,c=r.slice(2).toLowerCase(),l=`data-h-${c}`;if(e.markSideEffect(i,()=>{}),n.hasAttribute(l))return;const u=o;n.setAttribute(l,""),s.addEventListener(c,u),e.entry&&(e.entry._sde[i]=()=>{s.removeEventListener(c,u),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const at=["templateParams","htmlAttrs","bodyAttrs"];function lt(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const n=re(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,o=e[r];if(o){let c=s==null?void 0:s.tagDuplicateStrategy;if(!c&&at.includes(s.tag)&&(c="merge"),c==="merge"){const l=o.props;["class","style"].forEach(u=>{s.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),s.props[u]=`${l[u]} ${s.props[u]}`)}),e[r].props={...l,...s.props};return}else if(s._e===o._e){o._duped=o._duped||[],s._d=`${o._d}:${o._duped.length+1}`,o._duped.push(s);return}}const i=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(ne.includes(s.tag)&&i===0){delete e[r];return}e[r]=s});const n=[];Object.values(e).forEach(s=>{const r=s._duped;delete s._duped,n.push(s),r&&n.push(...r)}),t.tags=n}}}}function O(t,e){function n(o){if(["s","pageTitle"].includes(o))return e.pageTitle;let i;return o.includes(".")?i=o.split(".").reduce((c,l)=>c&&c[l]||void 0,e):i=e[o],typeof i<"u"?i||"":!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=n(o.slice(1));typeof i=="string"&&(t=t.replaceAll(new RegExp(`\\${o}(\\W|$)`,"g"),`${i}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function ct(){return{hooks:{"tags:resolve":t=>{var o;const{tags:e}=t,n=(o=e.find(i=>i.tag==="title"))==null?void 0:o.textContent,s=e.findIndex(i=>i.tag==="templateParams"),r=s!==-1?e[s].props:{};r.pageTitle=r.pageTitle||n||"";for(const i of e)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=O(i.textContent,r);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=O(i.props.content,r);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=O(i.props.href,r);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(c,l)=>typeof l=="string"?O(l,r):l)}catch{}t.tags=e.filter(i=>i.tag!=="templateParams")}}}}const dt=typeof window<"u";async function ut(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await pt(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>Ge.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||te.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=ft(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function ft(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function pt(t,e){for(const n of Object.keys(e)){const s=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=s?"true":"":String(e[n])==="false"&&(s?e[n]="false":delete e[n])}return e}const ht=10;async function gt(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,s])=>typeof s<"u"&&qe.includes(n)).forEach(([n,s])=>{const r=Ve(s);e.push(...r.map(o=>ut(n,o)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,s)=>(n._e=t._i,n._p=(t._i<<ht)+s,n))}function yt(){return[lt(),tt(),ct(),nt(),ot(),it(),st()]}function mt(t={}){return[Ze({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function _t(t={}){const e=bt({...t,plugins:[...mt(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=Xe(e.resolvedOptions.document)),e}function bt(t={}){let e=[],n={},s=0;const r=Ue();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...yt(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(c=>c.hooks&&r.addHooks(c.hooks)),t.document=t.document||(dt?document:void 0);const o=()=>r.callHook("entries:updated",i),i={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(c){c.hooks&&r.addHooks(c.hooks)},push(c,l){const u={_i:s++,input:c,_sde:{}};return l!=null&&l.mode&&(u._m=l==null?void 0:l.mode),l!=null&&l.transform&&(u._t=l==null?void 0:l.transform),e.push(u),o(),{dispose(){e=e.filter(h=>h._i!==u._i?!0:(n={...n,...h._sde||{}},h._sde={},o(),!1))},patch(h){e=e.map(f=>(f._i===u._i&&(u.input=f.input=h,o()),f))}}},async resolveTags(){const c={tags:[],entries:[...e]};await r.callHook("entries:resolve",c);for(const l of c.entries){const u=l._t||(h=>h);if(l.resolvedInput=u(l.resolvedInput||l.input),l.resolvedInput)for(const h of await gt(l)){const f={tag:h,entry:l,resolvedOptions:i.resolvedOptions};await r.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await r.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...n};return n={},c},_elMap:{}};return i.hooks.callHook("init",i),i}function vt(t){return typeof t=="function"?t():H(t)}function B(t,e=""){if(t instanceof Promise)return t;const n=vt(t);return!t||!n?n:Array.isArray(n)?n.map(s=>B(s,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,H(r)]:[s,B(r,s)])):n}const kt=ce.startsWith("3"),Tt="usehead";function Ht(t){return{install(n){kt&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Tt,t))}}.install}function Ct(t={}){const e=_t({...t,domDelayFn:n=>setTimeout(()=>le(()=>n()),10),plugins:[$t(),...(t==null?void 0:t.plugins)||[]]});return e.install=Ht(e),e}function $t(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=B(e.input)}}}}const L=t=>(me("data-v-e30bf566"),t=t(),_e(),t),wt={class:"wrapper"},Pt={key:0,class:"step"},At={class:"desc"},St=L(()=>p("p",{class:"heading"},"How helpful was this article?",-1)),Et={class:"button-container"},Ot=["onClick"],Mt={key:1,class:"step"},jt=L(()=>p("p",{class:"desc"},"This article is",-1)),Lt=L(()=>p("span",{mi:"",icon:""},"close",-1)),It=[Lt],Wt={class:"heading"},Dt=["disabled"],xt={key:2,class:"step"},Rt=L(()=>p("p",{class:"heading"},"Thanks for your feedback!",-1)),Ft=[Rt],Kt=Y({__name:"ArticleFeedback",props:{title:{type:String,required:!0},url:{type:String,required:!0}},setup(t){const e=t,n=W(!1),s=W(null),r=W(!1),o=de({id:void 0,rating:void 0,comments:void 0}),i=["Make it count","Leave some feedback","Help us improve","We're all ears 🐰","Tell us what is missing","Your thoughts matter to us","Feedback is a gift","What do you think?"];function c(){return i[Math.floor(Math.random()*i.length)]}const l=[{label:"Worst Doc Ever 🗑️",value:1,message:"Woof! 🤦‍♂️ Sorry about that. How do we fix it?"},{label:"Not Helpful 😡",value:2,message:"🧐 Help us do better. How can we improve this article?"},{label:"Helpful 😃",value:3,message:"Nice! 👍 Anything we can improve upon?"},{label:"Super Helpful 🤩",value:4,message:"Awesome! The whole team is rejoicing in celebration! 🥳🎉🎊 Anything you'd like to say to them?"}];function u(f){return l.find(y=>y.value===f)}async function h(f){n.value=!0,f&&(o.rating=f);const y={id:o.id,rating:o.rating,comments:o.comments,title:e.title,url:e.url};try{const a=await(await fetch("/api/feedback",{method:"POST",body:JSON.stringify(y)})).json();o.id=a.id,a.comments&&(r.value=!0)}catch(v){s.value=v,console.error(v)}finally{n.value=!1}}return(f,y)=>(_(),T("div",wt,[ue(ye,{name:"fade",mode:"out-in"},{default:M(()=>{var v,a;return[o.rating?o.rating&&!r.value?(_(),T("div",Mt,[p("div",null,[jt,p("div",null,[p("span",null,w((v=u(o.rating))==null?void 0:v.label),1),p("button",{style:{"margin-left":"0.5rem"},class:"btn",onClick:y[0]||(y[0]=d=>o.rating=void 0)},It)])]),p("p",Wt,w((a=u(o.rating))==null?void 0:a.message),1),he(p("textarea",{"onUpdate:modelValue":y[1]||(y[1]=d=>o.comments=d),autofocus:"",class:"input"},null,512),[[ge,o.comments]]),p("button",{class:"btn btn-primary",disabled:!o.comments,onClick:y[2]||(y[2]=d=>h())}," Send Us Your Feedback ",8,Dt)])):(_(),T("div",xt,Ft)):(_(),T("div",Pt,[p("div",null,[p("div",null,[p("p",At,w(c()),1),St])]),p("div",Et,[(_(),T(fe,null,pe(l,d=>p("button",{key:d.value,class:"btn",onClick:b=>h(d.value)},[p("span",null,w(d.label),1)],8,Ot)),64))])]))]}),_:1})]))}});const Nt=Z(Kt,[["__scopeId","data-v-e30bf566"]]),Bt={__name:"DocLayout",setup(t){const{Layout:e}=F,{page:n}=X(),s=be(),r=U(()=>n.value.title),o=U(()=>s.path);return(i,c)=>(_(),j(H(e),null,{"doc-footer-before":M(()=>[(_(),j(Nt,{key:H(o),url:H(o),title:H(r)},null,8,["url","title"]))]),_:1}))}};const Ut={key:0,class:"icon"},Vt=["src"],qt={class:"text"},Jt={__name:"Card",props:{title:{type:String,required:!0},h:{type:String,required:!1,default:"2"},text:{type:String,required:!0},icon:{type:String,required:!1,default:null},url:{type:String,required:!1,default:null}},setup(t){const e=t,n=e.url?"a":"div",s="h"+e.h;return(r,o)=>(_(),j(V(H(n)),{href:t.url,class:ve(["card",{"no-icon":!t.icon}])},{default:M(()=>[t.icon?(_(),T("div",Ut,[t.icon?(_(),T("img",{key:0,src:t.icon,alt:""},null,8,Vt)):q("",!0)])):q("",!0),p("div",qt,[(_(),j(V(s),null,{default:M(()=>[ke(w(t.title),1)]),_:1})),p("p",null,w(t.text),1)])]),_:1},8,["href","class"]))}},Gt=Z(Jt,[["__scopeId","data-v-f547067e"]]);const Qt={...F,Layout:Bt,enhanceApp(t){F.enhanceApp(t);const e=Ct();t.app.use(e),t.app.component("Card",Gt)}};function oe(t){if(t.extends){const e=oe(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const P=oe(Qt),zt=Y({name:"VitePressApp",setup(){const{site:t}=X();return He(()=>{Ce(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),$e(),we(),Pe(),P.setup&&P.setup(),()=>Ae(P.Layout)}});async function Yt(){const t=Xt(),e=Zt();e.provide(Se,t);const n=Ee(t.route);return e.provide(Oe,n),e.component("Content",Me),e.component("ClientOnly",je),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),P.enhanceApp&&await P.enhanceApp({app:e,router:t,siteData:Le}),{app:e,router:t,data:n}}function Zt(){return Ie(zt)}function Xt(){let t=R,e;return We(n=>{let s=De(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),R&&(t=!1),xe(()=>import(s),[])},P.NotFound)}R&&Yt().then(({app:t,router:e,data:n})=>{e.go().then(()=>{Te(e.route,n.site),t.mount("#app")})});export{Yt as createApp};
