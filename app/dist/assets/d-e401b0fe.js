import{C as j}from"./index.2ac03bce.entry.js";function P(m,h){for(var c=0;c<h.length;c++){const u=h[c];if(typeof u!="string"&&!Array.isArray(u)){for(const a in u)if(a!=="default"&&!(a in m)){const f=Object.getOwnPropertyDescriptor(u,a);f&&Object.defineProperty(m,a,f.get?f:{enumerable:!0,get:()=>u[a]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var E={};(function(m,h){(function(c){c(j)})(function(c){c.defineMode("d",function(f,l){var d=f.indentUnit,s=l.statementIndentUnit||d,I=l.keywords||{},O=l.builtin||{},b=l.blockKeywords||{},S=l.atoms||{},k=l.hooks||{},L=l.multiLineStrings,v=/[+\-*&%=<>!?|\/]/,i;function w(e,n){var t=e.next();if(k[t]){var r=k[t](e,n);if(r!==!1)return r}if(t=='"'||t=="'"||t=="`")return n.tokenize=C(t),n.tokenize(e,n);if(/[\[\]{}\(\),;\:\.]/.test(t))return i=t,null;if(/\d/.test(t))return e.eatWhile(/[\w\.]/),"number";if(t=="/"){if(e.eat("+"))return n.tokenize=_,_(e,n);if(e.eat("*"))return n.tokenize=x,x(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}if(v.test(t))return e.eatWhile(v),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var o=e.current();return I.propertyIsEnumerable(o)?(b.propertyIsEnumerable(o)&&(i="newstatement"),"keyword"):O.propertyIsEnumerable(o)?(b.propertyIsEnumerable(o)&&(i="newstatement"),"builtin"):S.propertyIsEnumerable(o)?"atom":"variable"}function C(e){return function(n,t){for(var r=!1,o,z=!1;(o=n.next())!=null;){if(o==e&&!r){z=!0;break}r=!r&&o=="\\"}return(z||!(r||L))&&(t.tokenize=null),"string"}}function x(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize=null;break}t=r=="*"}return"comment"}function _(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize=null;break}t=r=="+"}return"comment"}function g(e,n,t,r,o){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=o}function y(e,n,t){var r=e.indented;return e.context&&e.context.type=="statement"&&(r=e.context.indented),e.context=new g(r,n,t,null,e.context)}function p(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new g((e||0)-d,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;i=null;var r=(n.tokenize||w)(e,n);if(r=="comment"||r=="meta")return r;if(t.align==null&&(t.align=!0),(i==";"||i==":"||i==",")&&t.type=="statement")p(n);else if(i=="{")y(n,e.column(),"}");else if(i=="[")y(n,e.column(),"]");else if(i=="(")y(n,e.column(),")");else if(i=="}"){for(;t.type=="statement";)t=p(n);for(t.type=="}"&&(t=p(n));t.type=="statement";)t=p(n)}else i==t.type?p(n):((t.type=="}"||t.type=="top")&&i!=";"||t.type=="statement"&&i=="newstatement")&&y(n,e.column(),"statement");return n.startOfLine=!1,r},indent:function(e,n){if(e.tokenize!=w&&e.tokenize!=null)return c.Pass;var t=e.context,r=n&&n.charAt(0);t.type=="statement"&&r=="}"&&(t=t.prev);var o=r==t.type;return t.type=="statement"?t.indented+(r=="{"?0:s):t.align?t.column+(o?0:1):t.indented+(o?0:d)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function u(f){for(var l={},d=f.split(" "),s=0;s<d.length;++s)l[d[s]]=!0;return l}var a="body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";c.defineMIME("text/x-d",{name:"d",keywords:u("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters "+a),blockKeywords:u(a),builtin:u("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:u("exit failure success true false null"),hooks:{"@":function(f,l){return f.eatWhile(/[\w\$_]/),"meta"}}})})})();const U=P({__proto__:null,default:E},[E]);export{U as d};