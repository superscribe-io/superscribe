import{C as _}from"./index.58a65be4.entry.js";function g(c,a){for(var o=0;o<a.length;o++){const i=a[o];if(typeof i!="string"&&!Array.isArray(i)){for(const u in i)if(u!=="default"&&!(u in c)){const f=Object.getOwnPropertyDescriptor(i,u);f&&Object.defineProperty(c,u,f.get?f:{enumerable:!0,get:()=>i[u]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var s={};(function(c,a){(function(o){o(_)})(function(o){o.defineMode("fcl",function(i){var u=i.indentUnit,f={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},b={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},d={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},v={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},m=/[+\-*&^%:=<>!|\/]/;function p(e,t){var n=e.next();if(/[\d\.]/.test(n))return n=="."?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):n=="0"?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(n=="/"||n=="("){if(e.eat("*"))return t.tokenize=x,x(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(m.test(n))return e.eatWhile(m),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current().toLowerCase();return f.propertyIsEnumerable(r)||b.propertyIsEnumerable(r)||d.propertyIsEnumerable(r)?"keyword":v.propertyIsEnumerable(r)?"atom":"variable"}function x(e,t){for(var n=!1,r;r=e.next();){if((r=="/"||r==")")&&n){t.tokenize=p;break}n=r=="*"}return"comment"}function k(e,t,n,r,l){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=l}function y(e,t,n){return e.context=new k(e.indented,t,n,null,e.context)}function h(e){if(e.context.prev){var t=e.context.type;return t=="end_block"&&(e.indented=e.context.indented),e.context=e.context.prev}}return{startState:function(e){return{tokenize:null,context:new k((e||0)-u,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;var r=(t.tokenize||p)(e,t);if(r=="comment")return r;n.align==null&&(n.align=!0);var l=e.current().toLowerCase();return b.propertyIsEnumerable(l)?y(t,e.column(),"end_block"):d.propertyIsEnumerable(l)&&h(t),t.startOfLine=!1,r},indent:function(e,t){if(e.tokenize!=p&&e.tokenize!=null)return 0;var n=e.context,r=d.propertyIsEnumerable(t);return n.align?n.column+(r?0:1):n.indented+(r?0:u)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}}),o.defineMIME("text/x-fcl","fcl")})})();const E=g({__proto__:null,default:s},[s]);export{E as f};
