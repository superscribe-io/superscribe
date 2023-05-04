import{C as O}from"./index.58a65be4.entry.js";function j(k,d){for(var o=0;o<d.length;o++){const c=d[o];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in k)){const l=Object.getOwnPropertyDescriptor(c,f);l&&Object.defineProperty(k,f,l.get?l:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var a={};(function(k,d){(function(o){o(O)})(function(o){o.defineMode("tiddlywiki",function(){var c={},f={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},l=/[\w_\-]/i,p=/^\-\-\-\-+$/,w=/^\/\*\*\*$/,b=/^\*\*\*\/$/,y=/^<<<$/,g=/^\/\/\{\{\{$/,v=/^\/\/\}\}\}$/,x=/^<!--\{\{\{-->$/,S=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,_=/^\}\}\}$/,$=/.*?\}\}\}/;function u(e,n,r){return n.tokenize=r,r(e,n)}function i(e,n){var r=e.sol(),t=e.peek();if(n.block=!1,r&&/[<\/\*{}\-]/.test(t)){if(e.match(m))return n.block=!0,u(e,n,h);if(e.match(y))return"quote";if(e.match(w)||e.match(b)||e.match(g)||e.match(v)||e.match(x)||e.match(S))return"comment";if(e.match(p))return"hr"}if(e.next(),r&&/[\/\*!#;:>|]/.test(t)){if(t=="!")return e.skipToEnd(),"header";if(t=="*")return e.eatWhile("*"),"comment";if(t=="#")return e.eatWhile("#"),"comment";if(t==";")return e.eatWhile(";"),"comment";if(t==":")return e.eatWhile(":"),"comment";if(t==">")return e.eatWhile(">"),"quote";if(t=="|")return"header"}if(t=="{"&&e.match("{{"))return u(e,n,h);if(/[hf]/i.test(t)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if(t=='"')return"string";if(t=="~"||/[\[\]]/.test(t)&&e.match(t))return"brace";if(t=="@")return e.eatWhile(l),"link";if(/\d/.test(t))return e.eatWhile(/\d/),"number";if(t=="/"){if(e.eat("%"))return u(e,n,z);if(e.eat("/"))return u(e,n,E)}if(t=="_"&&e.eat("_"))return u(e,n,T);if(t=="-"&&e.eat("-")){if(e.peek()!=" ")return u(e,n,W);if(e.peek()==" ")return"brace"}return t=="'"&&e.eat("'")?u(e,n,C):t=="<"&&e.eat("<")?u(e,n,A):(e.eatWhile(/[\w\$_]/),c.propertyIsEnumerable(e.current())?"keyword":null)}function z(e,n){for(var r=!1,t;t=e.next();){if(t=="/"&&r){n.tokenize=i;break}r=t=="%"}return"comment"}function C(e,n){for(var r=!1,t;t=e.next();){if(t=="'"&&r){n.tokenize=i;break}r=t=="'"}return"strong"}function h(e,n){var r=n.block;return r&&e.current()?"comment":!r&&e.match($)||r&&e.sol()&&e.match(_)?(n.tokenize=i,"comment"):(e.next(),"comment")}function E(e,n){for(var r=!1,t;t=e.next();){if(t=="/"&&r){n.tokenize=i;break}r=t=="/"}return"em"}function T(e,n){for(var r=!1,t;t=e.next();){if(t=="_"&&r){n.tokenize=i;break}r=t=="_"}return"underlined"}function W(e,n){for(var r=!1,t;t=e.next();){if(t=="-"&&r){n.tokenize=i;break}r=t=="-"}return"strikethrough"}function A(e,n){if(e.current()=="<<")return"macro";var r=e.next();return r?r==">"&&e.peek()==">"?(e.next(),n.tokenize=i,"macro"):(e.eatWhile(/[\w\$_]/),f.propertyIsEnumerable(e.current())?"keyword":null):(n.tokenize=i,null)}return{startState:function(){return{tokenize:i}},token:function(e,n){if(e.eatSpace())return null;var r=n.tokenize(e,n);return r}}}),o.defineMIME("text/x-tiddlywiki","tiddlywiki")})})();const M=j({__proto__:null,default:a},[a]);export{M as t};
