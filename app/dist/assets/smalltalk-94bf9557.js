import{C as g}from"./index.1ea360c2.entry.js";function m(c,d){for(var a=0;a<d.length;a++){const l=d[a];if(typeof l!="string"&&!Array.isArray(l)){for(const o in l)if(o!=="default"&&!(o in c)){const u=Object.getOwnPropertyDescriptor(l,o);u&&Object.defineProperty(c,o,u.get?u:{enumerable:!0,get:()=>l[o]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var w={};(function(c,d){(function(a){a(g())})(function(a){a.defineMode("smalltalk",function(l){var o=/[+\-\/\\*~<>=@%|&?!.,:;^]/,u=/true|false|nil|self|super|thisContext/,f=function(e,n){this.next=e,this.parent=n},s=function(e,n,t){this.name=e,this.context=n,this.eos=t},p=function(){this.context=new f(h,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};p.prototype.userIndent=function(e){this.userIndentationDelta=e>0?e/l.indentUnit-this.indentation:0};var h=function(e,n,t){var i=new s(null,n,!1),r=e.next();return r==='"'?i=x(e,new f(x,n)):r==="'"?i=v(e,new f(v,n)):r==="#"?e.peek()==="'"?(e.next(),i=b(e,new f(b,n))):e.eatWhile(/[^\s.{}\[\]()]/)?i.name="string-2":i.name="meta":r==="$"?(e.next()==="<"&&(e.eatWhile(/[^\s>]/),e.next()),i.name="string-2"):r==="|"&&t.expectVariable?i.context=new f(k,n):/[\[\]{}()]/.test(r)?(i.name="bracket",i.eos=/[\[{(]/.test(r),r==="["?t.indentation++:r==="]"&&(t.indentation=Math.max(0,t.indentation-1))):o.test(r)?(e.eatWhile(o),i.name="operator",i.eos=r!==";"):/\d/.test(r)?(e.eatWhile(/[\w\d]/),i.name="number"):/[\w_]/.test(r)?(e.eatWhile(/[\w\d_]/),i.name=t.expectVariable?u.test(e.current())?"keyword":"variable":null):i.eos=t.expectVariable,i},x=function(e,n){return e.eatWhile(/[^"]/),new s("comment",e.eat('"')?n.parent:n,!0)},v=function(e,n){return e.eatWhile(/[^']/),new s("string",e.eat("'")?n.parent:n,!1)},b=function(e,n){return e.eatWhile(/[^']/),new s("string-2",e.eat("'")?n.parent:n,!1)},k=function(e,n){var t=new s(null,n,!1),i=e.next();return i==="|"?(t.context=n.parent,t.eos=!0):(e.eatWhile(/[^|]/),t.name="variable"),t};return{startState:function(){return new p},token:function(e,n){if(n.userIndent(e.indentation()),e.eatSpace())return null;var t=n.context.next(e,n.context,n);return n.context=t.context,n.expectVariable=t.eos,t.name},blankLine:function(e){e.userIndent(0)},indent:function(e,n){var t=e.context.next===h&&n&&n.charAt(0)==="]"?-1:e.userIndentationDelta;return(e.indentation+t)*l.indentUnit},electricChars:"]"}}),a.defineMIME("text/x-stsrc",{name:"smalltalk"})})})();const W=m({__proto__:null,default:w},[w]);export{W as s};