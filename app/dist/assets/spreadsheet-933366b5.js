import{C as s}from"./index.58a65be4.entry.js";function f(c,i){for(var t=0;t<i.length;t++){const e=i[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in c)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(c,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var o={};(function(c,i){(function(t){t(s)})(function(t){t.defineMode("spreadsheet",function(){return{startState:function(){return{stringType:null,stack:[]}},token:function(e,n){if(e){switch(n.stack.length===0&&(e.peek()=='"'||e.peek()=="'")&&(n.stringType=e.peek(),e.next(),n.stack.unshift("string")),n.stack[0]){case"string":for(;n.stack[0]==="string"&&!e.eol();)e.peek()===n.stringType?(e.next(),n.stack.shift()):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return"string";case"characterClass":for(;n.stack[0]==="characterClass"&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||n.stack.shift();return"operator"}var r=e.peek();switch(r){case"[":return e.next(),n.stack.unshift("characterClass"),"bracket";case":":return e.next(),"operator";case"\\":return e.match(/\\[a-z]+/)?"string-2":(e.next(),"atom");case".":case",":case";":case"*":case"-":case"+":case"^":case"<":case"/":case"=":return e.next(),"atom";case"$":return e.next(),"builtin"}return e.match(/\d+/)?e.match(/^\w+/)?"error":"number":e.match(/^[a-zA-Z_]\w*/)?e.match(/(?=[\(.])/,!1)?"keyword":"variable-2":["[","]","(",")","{","}"].indexOf(r)!=-1?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}),t.defineMIME("text/x-spreadsheet","spreadsheet")})})();const u=f({__proto__:null,default:o},[o]);export{u as s};
