import{B as W}from"./index.b0c463e5.entry.js";import{b as D,a as E,c as H,d as O}from"./index-c3455229.js";function R(e,a){for(var t=0;t<a.length;t++){const i=a[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const d=Object.getOwnPropertyDescriptor(i,r);d&&Object.defineProperty(e,r,d.get?d:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var h={},F={get exports(){return h},set exports(e){h=e}},v={},L={get exports(){return v},set exports(e){v=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"segundo bat baino gutxiago",other:"{{count}} segundo baino gutxiago"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"minutu erdi",lessThanXMinutes:{one:"minutu bat baino gutxiago",other:"{{count}} minutu baino gutxiago"},xMinutes:{one:"1 minutu",other:"{{count}} minutu"},aboutXHours:{one:"1 ordu gutxi gorabehera",other:"{{count}} ordu gutxi gorabehera"},xHours:{one:"1 ordu",other:"{{count}} ordu"},xDays:{one:"1 egun",other:"{{count}} egun"},aboutXWeeks:{one:"aste 1 inguru",other:"{{count}} aste inguru"},xWeeks:{one:"1 aste",other:"{{count}} astean"},aboutXMonths:{one:"1 hilabete gutxi gorabehera",other:"{{count}} hilabete gutxi gorabehera"},xMonths:{one:"1 hilabete",other:"{{count}} hilabete"},aboutXYears:{one:"1 urte gutxi gorabehera",other:"{{count}} urte gutxi gorabehera"},xYears:{one:"1 urte",other:"{{count}} urte"},overXYears:{one:"1 urte baino gehiago",other:"{{count}} urte baino gehiago"},almostXYears:{one:"ia 1 urte",other:"ia {{count}} urte"}},i=function(s,n,u){var o,l=t[s];return typeof l=="string"?o=l:n===1?o=l.one:o=l.other.replace("{{count}}",String(n)),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"en "+o:"duela "+o:o},r=i;a.default=r,e.exports=a.default})(L,v);var c={},C={get exports(){return c},set exports(e){c=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=i(D);function i(o){return o&&o.__esModule?o:{default:o}}var r={full:"EEEE, y'ko' MMMM'ren' d'a' y'ren'",long:"y'ko' MMMM'ren' d'a'",medium:"y MMM d",short:"yy/MM/dd"},d={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},s={full:"{{date}} 'tan' {{time}}",long:"{{date}} 'tan' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},n={date:(0,t.default)({formats:r,defaultWidth:"full"}),time:(0,t.default)({formats:d,defaultWidth:"full"}),dateTime:(0,t.default)({formats:s,defaultWidth:"full"})},u=n;a.default=u,e.exports=a.default})(C,c);var b={},N={get exports(){return b},set exports(e){b=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'joan den' eeee, LT",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},i={lastWeek:"'joan den' eeee, p",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},r=function(n,u){return u.getUTCHours()!==1?i[n]:t[n]},d=r;a.default=d,e.exports=a.default})(N,b);var p={},V={get exports(){return p},set exports(e){p=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=i(E);function i(g){return g&&g.__esModule?g:{default:g}}var r={narrow:["k.a.","k.o."],abbreviated:["k.a.","k.o."],wide:["kristo aurretik","kristo ondoren"]},d={narrow:["1","2","3","4"],abbreviated:["1H","2H","3H","4H"],wide:["1. hiruhilekoa","2. hiruhilekoa","3. hiruhilekoa","4. hiruhilekoa"]},s={narrow:["u","o","m","a","m","e","u","a","i","u","a","a"],abbreviated:["urt","ots","mar","api","mai","eka","uzt","abu","ira","urr","aza","abe"],wide:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},n={narrow:["i","a","a","a","o","o","l"],short:["ig","al","as","az","og","or","lr"],abbreviated:["iga","ast","ast","ast","ost","ost","lar"],wide:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"]},u={narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"}},o={narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"}},l=function(m,_){var x=Number(m);return x+"."},P={ordinalNumber:l,era:(0,t.default)({values:r,defaultWidth:"wide"}),quarter:(0,t.default)({values:d,defaultWidth:"wide",argumentCallback:function(m){return m-1}}),month:(0,t.default)({values:s,defaultWidth:"wide"}),day:(0,t.default)({values:n,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:o,defaultFormattingWidth:"wide"})},y=P;a.default=y,e.exports=a.default})(V,p);var k={},X={get exports(){return k},set exports(e){k=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(H),i=r(O);function r(f){return f&&f.__esModule?f:{default:f}}var d=/^(\d+)(.)?/i,s=/\d+/i,n={narrow:/^(k.a.|k.o.)/i,abbreviated:/^(k.a.|k.o.)/i,wide:/^(kristo aurretik|kristo ondoren)/i},u={narrow:[/^k.a./i,/^k.o./i],abbreviated:[/^(k.a.)/i,/^(k.o.)/i],wide:[/^(kristo aurretik)/i,/^(kristo ondoren)/i]},o={narrow:/^[1234]/i,abbreviated:/^[1234]H/i,wide:/^[1234](.)? hiruhilekoa/i},l={any:[/1/i,/2/i,/3/i,/4/i]},P={narrow:/^[uomaei]/i,abbreviated:/^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,wide:/^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i},y={narrow:[/^u/i,/^o/i,/^m/i,/^a/i,/^m/i,/^e/i,/^u/i,/^a/i,/^i/i,/^u/i,/^a/i,/^a/i],any:[/^urt/i,/^ots/i,/^mar/i,/^api/i,/^mai/i,/^eka/i,/^uzt/i,/^abu/i,/^ira/i,/^urr/i,/^aza/i,/^abe/i]},g={narrow:/^[iaol]/i,short:/^(ig|al|as|az|og|or|lr)/i,abbreviated:/^(iga|ast|ast|ast|ost|ost|lar)/i,wide:/^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i},m={narrow:[/^i/i,/^a/i,/^a/i,/^a/i,/^o/i,/^o/i,/^l/i],short:[/^ig/i,/^al/i,/^as/i,/^az/i,/^og/i,/^or/i,/^lr/i],abbreviated:[/^iga/i,/^ast/i,/^ast/i,/^ast/i,/^ost/i,/^ost/i,/^lar/i],wide:[/^igandea/i,/^astelehena/i,/^asteartea/i,/^asteazkena/i,/^osteguna/i,/^ostirala/i,/^larunbata/i]},_={narrow:/^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,any:/^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i},x={narrow:{am:/^a/i,pm:/^p/i,midnight:/^ge/i,noon:/^eg/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i},any:{am:/^a/i,pm:/^p/i,midnight:/^gauerdia/i,noon:/^eguerdia/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i}},w={ordinalNumber:(0,i.default)({matchPattern:d,parsePattern:s,valueCallback:function(z){return parseInt(z,10)}}),era:(0,t.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"wide"}),quarter:(0,t.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(z){return z+1}}),month:(0,t.default)({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"wide"}),dayPeriod:(0,t.default)({matchPatterns:_,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})},M=w;a.default=M,e.exports=a.default})(X,k);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(v),i=n(c),r=n(b),d=n(p),s=n(k);function n(l){return l&&l.__esModule?l:{default:l}}var u={code:"eu",formatDistance:t.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},o=u;a.default=o,e.exports=a.default})(F,h);const q=W(h),A=R({__proto__:null,default:q},[h]);export{A as i};
