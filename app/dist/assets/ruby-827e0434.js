import{C as I}from"./index.58a65be4.entry.js";var z={},_;function Z(){return _||(_=1,function(A,q){(function(d){d(I)})(function(d){function h(c){for(var t={},u=0,p=c.length;u<p;++u)t[c[u]]=!0;return t}var x=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],y=h(x),g=h(["def","class","case","for","while","until","module","catch","loop","proc","begin"]),s=h(["end","until"]),b={"[":"]","{":"}","(":")"},w={"]":"[","}":"{",")":"("};d.defineMode("ruby",function(c){var t;function u(e,i,n){return n.tokenize.push(e),e(i,n)}function p(e,i){if(e.sol()&&e.match("=begin")&&e.eol())return i.tokenize.push(T),"comment";if(e.eatSpace())return null;var n=e.next(),r;if(n=="`"||n=="'"||n=='"')return u(k(n,"string",n=='"'||n=="`"),e,i);if(n=="/")return E(e)?u(k(n,"string-2",!0),e,i):"operator";if(n=="%"){var f="string",o=!0;e.eat("s")?f="atom":e.eat(/[WQ]/)?f="string":e.eat(/[r]/)?f="string-2":e.eat(/[wxq]/)&&(f="string",o=!1);var l=e.eat(/[^\w\s=]/);return l?(b.propertyIsEnumerable(l)&&(l=b[l]),u(k(l,f,o,!0),e,i)):"operator"}else{if(n=="#")return e.skipToEnd(),"comment";if(n=="<"&&(r=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return u(L(r[2],r[1]),e,i);if(n=="0")return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(n))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if(n=="?"){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}else{if(n==":")return e.eat("'")?u(k("'","atom",!1),e,i):e.eat('"')?u(k('"',"atom",!0),e,i):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if(n=="@"&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"variable-2";if(n=="$")return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variable-3";if(/[a-zA-Z_\xa1-\uffff]/.test(n))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"ident";if(n=="|"&&(i.varList||i.lastTok=="{"||i.lastTok=="do"))return t="|",null;if(/[\(\)\[\]{}\\;]/.test(n))return t=n,null;if(n=="-"&&e.eat(">"))return"arrow";if(/[=+\-\/*:\.^%<>~|]/.test(n)){var a=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return n=="."&&!a&&(t="."),"operator"}else return null}}}function E(e){for(var i=e.pos,n=0,r,f=!1,o=!1;(r=e.next())!=null;)if(o)o=!1;else{if("[{(".indexOf(r)>-1)n++;else if("]})".indexOf(r)>-1){if(n--,n<0)break}else if(r=="/"&&n==0){f=!0;break}o=r=="\\"}return e.backUp(e.pos-i),f}function v(e){return e||(e=1),function(i,n){if(i.peek()=="}"){if(e==1)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](i,n);n.tokenize[n.tokenize.length-1]=v(e-1)}else i.peek()=="{"&&(n.tokenize[n.tokenize.length-1]=v(e+1));return p(i,n)}}function W(){var e=!1;return function(i,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](i,n)):(e=!0,p(i,n))}}function k(e,i,n,r){return function(f,o){var l=!1,a;for(o.context.type==="read-quoted-paused"&&(o.context=o.context.prev,f.eat("}"));(a=f.next())!=null;){if(a==e&&(r||!l)){o.tokenize.pop();break}if(n&&a=="#"&&!l){if(f.eat("{")){e=="}"&&(o.context={prev:o.context,type:"read-quoted-paused"}),o.tokenize.push(v());break}else if(/[@\$]/.test(f.peek())){o.tokenize.push(W());break}}l=!l&&a=="\\"}return i}}function L(e,i){return function(n,r){return i&&n.eatSpace(),n.match(e)?r.tokenize.pop():n.skipToEnd(),"string"}}function T(e,i){return e.sol()&&e.match("=end")&&e.eol()&&i.tokenize.pop(),e.skipToEnd(),"comment"}return{startState:function(){return{tokenize:[p],indented:0,context:{type:"top",indented:-c.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,i){t=null,e.sol()&&(i.indented=e.indentation());var n=i.tokenize[i.tokenize.length-1](e,i),r,f=t;if(n=="ident"){var o=e.current();n=i.lastTok=="."?"property":y.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(o)?"tag":i.lastTok=="def"||i.lastTok=="class"||i.varList?"def":"variable",n=="keyword"&&(f=o,g.propertyIsEnumerable(o)?r="indent":s.propertyIsEnumerable(o)?r="dedent":((o=="if"||o=="unless")&&e.column()==e.indentation()||o=="do"&&i.context.indented<i.indented)&&(r="indent"))}return(t||n&&n!="comment")&&(i.lastTok=f),t=="|"&&(i.varList=!i.varList),r=="indent"||/[\(\[\{]/.test(t)?i.context={prev:i.context,type:t||n,indented:i.indented}:(r=="dedent"||/[\)\]\}]/.test(t))&&i.context.prev&&(i.context=i.context.prev),e.eol()&&(i.continuedLine=t=="\\"||n=="operator"),n},indent:function(e,i){if(e.tokenize[e.tokenize.length-1]!=p)return d.Pass;var n=i&&i.charAt(0),r=e.context,f=r.type==w[n]||r.type=="keyword"&&/^(?:end|until|else|elsif|when|rescue)\b/.test(i);return r.indented+(f?0:c.indentUnit)+(e.continuedLine?c.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}}),d.defineMIME("text/x-ruby","ruby"),d.registerHelper("hintWords","ruby",x)})}()),z}export{Z as r};
