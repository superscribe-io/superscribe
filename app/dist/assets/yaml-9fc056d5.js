import{B as s}from"./index.2ac03bce.entry.js";import{r as l}from"./yaml-dd3dc30f.js";function i(t,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var f=l();const c=s(f),u=i({__proto__:null,default:c},[f]);export{u as y};