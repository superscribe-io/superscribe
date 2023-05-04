import{B as j}from"./index.58a65be4.entry.js";import{b as D,a as E,c as k,d as z}from"./index-c3455229.js";function C(a,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in a)){const s=Object.getOwnPropertyDescriptor(o,i);s&&Object.defineProperty(a,i,s.get?s:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c={},O={get exports(){return c},set exports(a){c=a}},h={},T={get exports(){return h},set exports(a){h=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},o=function(m,r,u){var n,d=t[m];return typeof d=="string"?n=d:r===1?n=d.one:n=d.other.replace("{{count}}",String(r)),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"daqui a "+n:"há "+n:n},i=o;e.default=i,a.exports=e.default})(T,h);var g={},F={get exports(){return g},set exports(a){g=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(D);function o(n){return n&&n.__esModule?n:{default:n}}var i={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},m={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},r={date:(0,t.default)({formats:i,defaultWidth:"full"}),time:(0,t.default)({formats:s,defaultWidth:"full"}),dateTime:(0,t.default)({formats:m,defaultWidth:"full"})},u=r;e.default=u,a.exports=e.default})(F,g);var p={},H={get exports(){return p},set exports(a){p=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:function(m){var r=m.getUTCDay(),u=r===0||r===6?"último":"última";return"'"+u+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},o=function(m,r,u,n){var d=t[m];return typeof d=="function"?d(r):d},i=o;e.default=i,a.exports=e.default})(H,p);var b={},R={get exports(){return b},set exports(a){b=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(E);function o(l){return l&&l.__esModule?l:{default:l}}var i={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},s={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},m={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},r={narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},u={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},n={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},d=function(v,w){var x=Number(v);return x+"º"},M={ordinalNumber:d,era:(0,t.default)({values:i,defaultWidth:"wide"}),quarter:(0,t.default)({values:s,defaultWidth:"wide",argumentCallback:function(v){return v-1}}),month:(0,t.default)({values:m,defaultWidth:"wide"}),day:(0,t.default)({values:r,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},y=M;e.default=y,a.exports=e.default})(R,b);var P={},A={get exports(){return P},set exports(a){P=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(k),o=i(z);function i(f){return f&&f.__esModule?f:{default:f}}var s=/^(\d+)(º|ª)?/i,m=/\d+/i,r={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},u={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},n={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},d={any:[/1/i,/2/i,/3/i,/4/i]},M={narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},y={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},l={narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},v={narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},w={narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},x={any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},q={ordinalNumber:(0,o.default)({matchPattern:s,parsePattern:m,valueCallback:function(_){return parseInt(_,10)}}),era:(0,t.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:function(_){return _+1}}),month:(0,t.default)({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})},W=q;e.default=W,a.exports=e.default})(A,P);(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(h),o=r(g),i=r(p),s=r(b),m=r(P);function r(d){return d&&d.__esModule?d:{default:d}}var u={code:"pt",formatDistance:t.default,formatLong:o.default,formatRelative:i.default,localize:s.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},n=u;e.default=n,a.exports=e.default})(O,c);const L=j(c),X=C({__proto__:null,default:L},[c]);export{X as i};
