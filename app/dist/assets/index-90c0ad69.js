import{B as c}from"./index.4d6000dd.entry.js";import{f as p}from"./index-6eb39ce0.js";import{b as v}from"./index-c3455229.js";import{f as y,l as _,m as g}from"./index-fcbe91b3.js";function M(t,e){for(var a=0;a<e.length;a++){const r=e[a];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const f=Object.getOwnPropertyDescriptor(r,o);f&&Object.defineProperty(t,o,f.get?f:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var u={},x={get exports(){return u},set exports(t){u=t}},n={},h={get exports(){return n},set exports(t){n=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(v);function r(l){return l&&l.__esModule?l:{default:l}}var o={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},f={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},m={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,a.default)({formats:o,defaultWidth:"full"}),time:(0,a.default)({formats:f,defaultWidth:"full"}),dateTime:(0,a.default)({formats:m,defaultWidth:"full"})},s=d;e.default=s,t.exports=e.default})(h,n);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(p),r=d(n),o=d(y),f=d(_),m=d(g);function d(i){return i&&i.__esModule?i:{default:i}}var s={code:"en-AU",formatDistance:a.default,formatLong:r.default,formatRelative:o.default,localize:f.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},l=s;e.default=l,t.exports=e.default})(x,u);const E=c(u),A=M({__proto__:null,default:E},[u]);export{A as i};