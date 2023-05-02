import{B as W}from"./index.b0c463e5.entry.js";import{b as j,a as D,c as E,d as H}from"./index-c3455229.js";function O(a,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const u in r)if(u!=="default"&&!(u in a)){const o=Object.getOwnPropertyDescriptor(r,u);o&&Object.defineProperty(a,u,o.get?o:{enumerable:!0,get:()=>r[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var b={},z={get exports(){return b},set exports(a){b=a}},_={},F={get exports(){return _},set exports(a){_=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function t(i){return i.replace(/sekuntia?/,"sekunnin")}function r(i){return i.replace(/minuuttia?/,"minuutin")}function u(i){return i.replace(/tuntia?/,"tunnin")}function o(i){return i.replace(/päivää?/,"päivän")}function s(i){return i.replace(/(viikko|viikkoa)/,"viikon")}function l(i){return i.replace(/(kuukausi|kuukautta)/,"kuukauden")}function n(i){return i.replace(/(vuosi|vuotta)/,"vuoden")}var d={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:t},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:t},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(h){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:r},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:r},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:o},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:s},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:s},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:l},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:l},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:n},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:n},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:n},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:n}},m=function(h,f,k){var c=d[h],v=f===1?c.one:c.other.replace("{{count}}",String(f));return k!=null&&k.addSuffix?k.comparison&&k.comparison>0?c.futureTense(v)+" kuluttua":v+" sitten":v},y=m;e.default=y,a.exports=e.default})(F,_);var g={},L={get exports(){return g},set exports(a){g=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(j);function r(d){return d&&d.__esModule?d:{default:d}}var u={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},o={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},s={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},l={date:(0,t.default)({formats:u,defaultWidth:"full"}),time:(0,t.default)({formats:o,defaultWidth:"full"}),dateTime:(0,t.default)({formats:s,defaultWidth:"full"})},n=l;e.default=n,a.exports=e.default})(L,g);var P={},R={get exports(){return P},set exports(a){P=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},r=function(s,l,n,d){return t[s]},u=r;e.default=u,a.exports=e.default})(R,P);var M={},S={get exports(){return M},set exports(a){M=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(D);function r(f){return f&&f.__esModule?f:{default:f}}var u={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},s={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},l={narrow:s.narrow,abbreviated:s.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},n={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},d={narrow:n.narrow,short:n.short,abbreviated:n.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},m={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},y=function(k,c){var v=Number(k);return v+"."},i={ordinalNumber:y,era:(0,t.default)({values:u,defaultWidth:"wide"}),quarter:(0,t.default)({values:o,defaultWidth:"wide",argumentCallback:function(k){return k-1}}),month:(0,t.default)({values:s,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),day:(0,t.default)({values:n,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"}),dayPeriod:(0,t.default)({values:m,defaultWidth:"wide"})},h=i;e.default=h,a.exports=e.default})(S,M);var w={},V={get exports(){return w},set exports(a){w=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u(E),r=u(H);function u(p){return p&&p.__esModule?p:{default:p}}var o=/^(\d+)(\.)/i,s=/\d+/i,l={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},n={any:[/^e/i,/^j/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},m={any:[/1/i,/2/i,/3/i,/4/i]},y={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},i={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},h={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},f={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},k={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},c={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},v={ordinalNumber:(0,r.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,t.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:n,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,t.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:i,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:k,defaultMatchWidth:"any",parsePatterns:c,defaultParseWidth:"any"})},T=v;e.default=T,a.exports=e.default})(V,w);(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(_),r=l(g),u=l(P),o=l(M),s=l(w);function l(m){return m&&m.__esModule?m:{default:m}}var n={code:"fi",formatDistance:t.default,formatLong:r.default,formatRelative:u.default,localize:o.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},d=n;e.default=d,a.exports=e.default})(z,b);const q=W(b),X=O({__proto__:null,default:q},[b]);export{X as i};
