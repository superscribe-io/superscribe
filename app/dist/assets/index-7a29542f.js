import{B as x}from"./index.1ea360c2.entry.js";import{b as S,a as J,c as O,d as A}from"./index-c3455229.js";function C(a,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in a)){const u=Object.getOwnPropertyDescriptor(i,r);u&&Object.defineProperty(a,r,u.get?u:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c={},E={get exports(){return c},set exports(a){c=a}},p={},F={get exports(){return p},set exports(a){p=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}},i=function(m,d,o){var n,l=t[m];return typeof l=="string"?n=l:d===1?n=l.one:n=l.other.replace("{{count}}",String(d)),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"oor "+n:n+" gelede":n},r=i;e.default=r,a.exports=e.default})(F,p);var y={},V={get exports(){return y},set exports(a){y=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(S);function i(n){return n&&n.__esModule?n:{default:n}}var r={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},m={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,t.default)({formats:r,defaultWidth:"full"}),time:(0,t.default)({formats:u,defaultWidth:"full"}),dateTime:(0,t.default)({formats:m,defaultWidth:"full"})},o=d;e.default=o,a.exports=e.default})(V,y);var M={},N={get exports(){return M},set exports(a){M=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"},i=function(m,d,o,n){return t[m]},r=i;e.default=r,a.exports=e.default})(N,M);var b={},z={get exports(){return b},set exports(a){b=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(J);function i(s){return s&&s.__esModule?s:{default:s}}var r={narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},u={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},m={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},d={narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},o={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},n={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},l=function(g){var f=Number(g),h=f%100;if(h<20)switch(h){case 1:case 8:return f+"ste";default:return f+"de"}return f+"ste"},_={ordinalNumber:l,era:(0,t.default)({values:r,defaultWidth:"wide"}),quarter:(0,t.default)({values:u,defaultWidth:"wide",argumentCallback:function(g){return g-1}}),month:(0,t.default)({values:m,defaultWidth:"wide"}),day:(0,t.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:o,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},P=_;e.default=P,a.exports=e.default})(z,b);var w={},H={get exports(){return w},set exports(a){w=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(O),i=r(A);function r(v){return v&&v.__esModule?v:{default:v}}var u=/^(\d+)(ste|de)?/i,m=/\d+/i,d={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},o={any:[/^v/,/^n/]},n={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},l={any:[/1/i,/2/i,/3/i,/4/i]},_={narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},P={narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},s={narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},g={narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},f={any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},h={any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},W={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:m,valueCallback:function(D){return parseInt(D,10)}}),era:(0,t.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(D){return D+1}}),month:(0,t.default)({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:f,defaultMatchWidth:"any",parsePatterns:h,defaultParseWidth:"any"})},k=W;e.default=k,a.exports=e.default})(H,w);(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(p),i=d(y),r=d(M),u=d(b),m=d(w);function d(l){return l&&l.__esModule?l:{default:l}}var o={code:"af",formatDistance:t.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:m.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},n=o;e.default=n,a.exports=e.default})(E,c);const R=x(c),X=C({__proto__:null,default:R},[c]);export{X as i};