import{C as w}from"./index.4d6000dd.entry.js";function y(c,f){for(var b=0;b<f.length;b++){const o=f[b];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in c)){const u=Object.getOwnPropertyDescriptor(o,a);u&&Object.defineProperty(c,a,u.get?u:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var m={};(function(c,f){(function(b){b(w())})(function(b){b.defineMode("gas",function(o,a){var u=[],v="",p={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},i={};function x(l){v="#",i.al="variable",i.ah="variable",i.ax="variable",i.eax="variable-2",i.rax="variable-3",i.bl="variable",i.bh="variable",i.bx="variable",i.ebx="variable-2",i.rbx="variable-3",i.cl="variable",i.ch="variable",i.cx="variable",i.ecx="variable-2",i.rcx="variable-3",i.dl="variable",i.dh="variable",i.dx="variable",i.edx="variable-2",i.rdx="variable-3",i.si="variable",i.esi="variable-2",i.rsi="variable-3",i.di="variable",i.edi="variable-2",i.rdi="variable-3",i.sp="variable",i.esp="variable-2",i.rsp="variable-3",i.bp="variable",i.ebp="variable-2",i.rbp="variable-3",i.ip="variable",i.eip="variable-2",i.rip="variable-3",i.cs="keyword",i.ds="keyword",i.ss="keyword",i.es="keyword",i.fs="keyword",i.gs="keyword"}function k(l){v="@",p.syntax="builtin",i.r0="variable",i.r1="variable",i.r2="variable",i.r3="variable",i.r4="variable",i.r5="variable",i.r6="variable",i.r7="variable",i.r8="variable",i.r9="variable",i.r10="variable",i.r11="variable",i.r12="variable",i.sp="variable-2",i.lr="variable-2",i.pc="variable-2",i.r13=i.sp,i.r14=i.lr,i.r15=i.pc,u.push(function(n,e){if(n==="#")return e.eatWhile(/\w/),"number"})}var s=(a.architecture||"x86").toLowerCase();s==="x86"?x():(s==="arm"||s==="armv6")&&k();function h(l,n){for(var e=!1,t;(t=l.next())!=null;){if(t===n&&!e)return!1;e=!e&&t==="\\"}return e}function g(l,n){for(var e=!1,t;(t=l.next())!=null;){if(t==="/"&&e){n.tokenize=null;break}e=t==="*"}return"comment"}return{startState:function(){return{tokenize:null}},token:function(l,n){if(n.tokenize)return n.tokenize(l,n);if(l.eatSpace())return null;var e,t,r=l.next();if(r==="/"&&l.eat("*"))return n.tokenize=g,g(l,n);if(r===v)return l.skipToEnd(),"comment";if(r==='"')return h(l,'"'),"string";if(r===".")return l.eatWhile(/\w/),t=l.current().toLowerCase(),e=p[t],e||null;if(r==="=")return l.eatWhile(/\w/),"tag";if(r==="{"||r==="}")return"bracket";if(/\d/.test(r))return r==="0"&&l.eat("x")?(l.eatWhile(/[0-9a-fA-F]/),"number"):(l.eatWhile(/\d/),"number");if(/\w/.test(r))return l.eatWhile(/\w/),l.eat(":")?"tag":(t=l.current().toLowerCase(),e=i[t],e||null);for(var d=0;d<u.length;d++)if(e=u[d](r,l,n),e)return e},lineComment:v,blockCommentStart:"/*",blockCommentEnd:"*/"}})})})();const C=y({__proto__:null,default:m},[m]);export{C as g};