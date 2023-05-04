import{C as w}from"./index.58a65be4.entry.js";function k(a,p){for(var o=0;o<p.length;o++){const u=p[o];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in a)){const i=Object.getOwnPropertyDescriptor(u,c);i&&Object.defineProperty(a,c,i.get?i:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var h={};(function(a,p){(function(o){o(w)})(function(o){o.defineMode("sparql",function(u){var c=u.indentUnit,i;function d(n){return new RegExp("^(?:"+n.join("|")+")$","i")}var v=d(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),y=d(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load","into"]),m=/[*+\-<>=&|\^\/!\?]/,x="[A-Za-z_\\-0-9]",b=new RegExp("[A-Za-z]"),D=new RegExp("(("+x+"|\\.)*("+x+"))?:");function F(n,e){var t=n.next();if(i=null,t=="$"||t=="?")return t=="?"&&n.match(/\s/,!1)?"operator":(n.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variable-2");if(t=="<"&&!n.match(/^[\s\u00a0=]/,!1))return n.match(/^[^\s\u00a0>]*>?/),"atom";if(t=='"'||t=="'")return e.tokenize=_(t),e.tokenize(n,e);if(/[{}\(\),\.;\[\]]/.test(t))return i=t,"bracket";if(t=="#")return n.skipToEnd(),"comment";if(m.test(t))return"operator";if(t==":")return g(n),"atom";if(t=="@")return n.eatWhile(/[a-z\d\-]/i),"meta";if(b.test(t)&&n.match(D))return g(n),"atom";n.eatWhile(/[_\w\d]/);var r=n.current();return v.test(r)?"builtin":y.test(r)?"keyword":"variable"}function g(n){n.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function _(n){return function(e,t){for(var r=!1,l;(l=e.next())!=null;){if(l==n&&!r){t.tokenize=F;break}r=!r&&l=="\\"}return"string"}}function f(n,e,t){n.context={prev:n.context,indent:n.indent,col:t,type:e}}function s(n){n.indent=n.context.indent,n.context=n.context.prev}return{startState:function(){return{tokenize:F,context:null,indent:0,col:0}},token:function(n,e){if(n.sol()&&(e.context&&e.context.align==null&&(e.context.align=!1),e.indent=n.indentation()),n.eatSpace())return null;var t=e.tokenize(n,e);if(t!="comment"&&e.context&&e.context.align==null&&e.context.type!="pattern"&&(e.context.align=!0),i=="(")f(e,")",n.column());else if(i=="[")f(e,"]",n.column());else if(i=="{")f(e,"}",n.column());else if(/[\]\}\)]/.test(i)){for(;e.context&&e.context.type=="pattern";)s(e);e.context&&i==e.context.type&&(s(e),i=="}"&&e.context&&e.context.type=="pattern"&&s(e))}else i=="."&&e.context&&e.context.type=="pattern"?s(e):/atom|string|variable/.test(t)&&e.context&&(/[\}\]]/.test(e.context.type)?f(e,"pattern",n.column()):e.context.type=="pattern"&&!e.context.align&&(e.context.align=!0,e.context.col=n.column()));return t},indent:function(n,e){var t=e&&e.charAt(0),r=n.context;if(/[\]\}]/.test(t))for(;r&&r.type=="pattern";)r=r.prev;var l=r&&t==r.type;return r?r.type=="pattern"?r.col:r.align?r.col+(l?0:1):r.indent+(l?0:c):0},lineComment:"#"}}),o.defineMIME("application/sparql-query","sparql")})})();const z=k({__proto__:null,default:h},[h]);export{z as s};
