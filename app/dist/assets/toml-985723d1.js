import{C as u}from"./index.58a65be4.entry.js";function t(l,o){for(var i=0;i<o.length;i++){const e=o[i];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in l)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(l,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var f={};(function(l,o){(function(i){i(u)})(function(i){i.defineMode("toml",function(){return{startState:function(){return{inString:!1,stringType:"",lhs:!0,inArray:0}},token:function(e,n){if(!n.inString&&(e.peek()=='"'||e.peek()=="'")&&(n.stringType=e.peek(),e.next(),n.inString=!0),e.sol()&&n.inArray===0&&(n.lhs=!0),n.inString){for(;n.inString&&!e.eol();)e.peek()===n.stringType?(e.next(),n.inString=!1):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return n.lhs?"property string":"string"}else{if(n.inArray&&e.peek()==="]")return e.next(),n.inArray--,"bracket";if(n.lhs&&e.peek()==="["&&e.skipTo("]"))return e.next(),e.peek()==="]"&&e.next(),"atom";if(e.peek()==="#")return e.skipToEnd(),"comment";if(e.eatSpace())return null;if(n.lhs&&e.eatWhile(function(r){return r!="="&&r!=" "}))return"property";if(n.lhs&&e.peek()==="=")return e.next(),n.lhs=!1,null;if(!n.lhs&&e.match(/^\d\d\d\d[\d\-\:\.T]*Z/))return"atom";if(!n.lhs&&(e.match("true")||e.match("false")))return"atom";if(!n.lhs&&e.peek()==="[")return n.inArray++,e.next(),"bracket";if(!n.lhs&&e.match(/^\-?\d+(?:\.\d+)?/))return"number";e.eatSpace()||e.next()}return null}}}),i.defineMIME("text/x-toml","toml")})})();const c=t({__proto__:null,default:f},[f]);export{c as t};
