import{B as E}from"./index.b0c463e5.entry.js";import{b as D,a as j,c as O,d as K}from"./index-c3455229.js";function z(t,e){for(var a=0;a<e.length;a++){const i=e[a];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in t)){const d=Object.getOwnPropertyDescriptor(i,n);d&&Object.defineProperty(t,n,d.get?d:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var p={},F={get exports(){return p},set exports(t){p=t}},g={},H={get exports(){return g},set exports(t){g=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},i=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],n=function(u,l,r){var o,m=a[u];return typeof m=="string"?o=m:l===1?o=m.one:r&&r.onlyNumeric?o=m.other.replace("{{count}}",String(l)):o=m.other.replace("{{count}}",l<13?i[l]:String(l)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+o:o+" sidan":o},d=n;e.default=d,t.exports=e.default})(H,g);var h={},N={get exports(){return h},set exports(t){h=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(D);function i(r){return r&&r.__esModule?r:{default:r}}var n={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},d={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},s={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,a.default)({formats:n,defaultWidth:"full"}),time:(0,a.default)({formats:d,defaultWidth:"full"}),dateTime:(0,a.default)({formats:s,defaultWidth:"full"})},l=u;e.default=l,t.exports=e.default})(N,h);var b={},R={get exports(){return b},set exports(t){b=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},i=function(s,u,l,r){return a[s]},n=i;e.default=n,t.exports=e.default})(R,b);var y={},S={get exports(){return y},set exports(t){y=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(j);function i(f){return f&&f.__esModule?f:{default:f}}var n={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},d={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},u={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},l={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},r=function(c,M){var k=Number(c);return k+"."},o={ordinalNumber:r,era:(0,a.default)({values:n,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(c){return c-1}}),month:(0,a.default)({values:s,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:l,defaultWidth:"wide"})},m=o;e.default=m,t.exports=e.default})(S,y);var _={},L={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(O),i=n(K);function n(v){return v&&v.__esModule?v:{default:v}}var d=/^(\d+)\.?/i,s=/\d+/i,u={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},l={any:[/^f/i,/^e/i]},r={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},o={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},f={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},c={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},M={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},k={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},w={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},x={ordinalNumber:(0,i.default)({matchPattern:d,parsePattern:s,valueCallback:function(P){return parseInt(P,10)}}),era:(0,a.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(P){return P+1}}),month:(0,a.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:k,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},W=x;e.default=W,t.exports=e.default})(L,_);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(g),i=u(h),n=u(b),d=u(y),s=u(_);function u(o){return o&&o.__esModule?o:{default:o}}var l={code:"nn",formatDistance:a.default,formatLong:i.default,formatRelative:n.default,localize:d.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},r=l;e.default=r,t.exports=e.default})(F,p);const q=E(p),T=z({__proto__:null,default:q},[p]);export{T as i};
