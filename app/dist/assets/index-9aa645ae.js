import{B as j}from"./index.58a65be4.entry.js";import{b as W,a as D,c as O,d as F}from"./index-c3455229.js";function K(t,e){for(var a=0;a<e.length;a++){const i=e[a];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in t)){const d=Object.getOwnPropertyDescriptor(i,n);d&&Object.defineProperty(t,n,d.get?d:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var p={},z={get exports(){return p},set exports(t){p=t}},b={},H={get exports(){return b},set exports(t){b=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} vecka"},xWeeks:{one:"en vecka",other:"{{count}} vecka"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},i=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],n=function(u,l,r){var o,f=a[u];return typeof f=="string"?o=f:l===1?o=f.one:r&&r.onlyNumeric?o=f.other.replace("{{count}}",String(l)):o=f.other.replace("{{count}}",l<13?i[l]:String(l)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+o:o+" sedan":o},d=n;e.default=d,t.exports=e.default})(H,b);var _={},N={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(W);function i(r){return r&&r.__esModule?r:{default:r}}var n={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},d={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},m={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,a.default)({formats:n,defaultWidth:"full"}),time:(0,a.default)({formats:d,defaultWidth:"full"}),dateTime:(0,a.default)({formats:m,defaultWidth:"full"})},l=u;e.default=l,t.exports=e.default})(N,_);var k={},R={get exports(){return k},set exports(t){k=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},i=function(m,u,l,r){return a[m]},n=i;e.default=n,t.exports=e.default})(R,k);var y={},S={get exports(){return y},set exports(t){y=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(D);function i(s){return s&&s.__esModule?s:{default:s}}var n={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},d={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},m={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},u={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},l={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},r={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},o=function(g,x){var c=Number(g),h=c%100;if(h>20||h<10)switch(h%10){case 1:case 2:return c+":a"}return c+":e"},f={ordinalNumber:o,era:(0,a.default)({values:n,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(g){return g-1}}),month:(0,a.default)({values:m,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:l,defaultWidth:"wide",formattingValues:r,defaultFormattingWidth:"wide"})},M=f;e.default=M,t.exports=e.default})(S,y);var P={},L={get exports(){return P},set exports(t){P=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(O),i=n(F);function n(v){return v&&v.__esModule?v:{default:v}}var d=/^(\d+)(:a|:e)?/i,m=/\d+/i,u={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},l={any:[/^f/i,/^[ev]/i]},r={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},o={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},M={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},s={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},g={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},x={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},c={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},h={ordinalNumber:(0,i.default)({matchPattern:d,parsePattern:m,valueCallback:function(w){return parseInt(w,10)}}),era:(0,a.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(w){return w+1}}),month:(0,a.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:x,defaultMatchWidth:"any",parsePatterns:c,defaultParseWidth:"any"})},E=h;e.default=E,t.exports=e.default})(L,P);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(b),i=u(_),n=u(k),d=u(y),m=u(P);function u(o){return o&&o.__esModule?o:{default:o}}var l={code:"sv",formatDistance:a.default,formatLong:i.default,formatRelative:n.default,localize:d.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},r=l;e.default=r,t.exports=e.default})(z,p);const q=j(p),X=K({__proto__:null,default:q},[p]);export{X as i};
