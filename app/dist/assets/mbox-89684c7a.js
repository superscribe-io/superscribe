import{C as k}from"./index.b0c463e5.entry.js";function S(u,f){for(var n=0;n<f.length;n++){const i=f[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in u)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(u,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var c={};(function(u,f){(function(n){n(k())})(function(n){var i=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],a=["Date","Subject","Comments","Keywords","Resent-Date"];n.registerHelper("hintWords","mbox",i.concat(a));var o=/^[ \t]/,p=/^From /,m=new RegExp("^("+i.join("|")+"): "),s=new RegExp("^("+a.join("|")+"): "),v=/^[^:]+:/,H=/^[^ ]+@[^ ]+/,b=/^.*?(?=[^ ]+?@[^ ]+)/,h=/^<.*?>/,g=/^.*?(?=<.*>)/;function R(e){return e==="Subject"?"header":"string"}function E(e,r){if(e.sol()){if(r.inSeparator=!1,r.inHeader&&e.match(o))return null;if(r.inHeader=!1,r.header=null,e.match(p))return r.inHeaders=!0,r.inSeparator=!0,"atom";var t,d=!1;return(t=e.match(s))||(d=!0)&&(t=e.match(m))?(r.inHeaders=!0,r.inHeader=!0,r.emailPermitted=d,r.header=t[1],"atom"):r.inHeaders&&(t=e.match(v))?(r.inHeader=!0,r.emailPermitted=!0,r.header=t[1],"atom"):(r.inHeaders=!1,e.skipToEnd(),null)}if(r.inSeparator)return e.match(H)?"link":(e.match(b)||e.skipToEnd(),"atom");if(r.inHeader){var l=R(r.header);if(r.emailPermitted){if(e.match(h))return l+" link";if(e.match(g))return l}return e.skipToEnd(),l}return e.skipToEnd(),null}n.defineMode("mbox",function(){return{startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:E,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1}}}),n.defineMIME("application/mbox","mbox")})})();const T=S({__proto__:null,default:c},[c]);export{T as m};
