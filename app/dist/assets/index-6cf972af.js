import{B as W}from"./index.58a65be4.entry.js";import{b as D,a as F,c as E,d as K}from"./index-c3455229.js";function O(t,e){for(var a=0;a<e.length;a++){const i=e[a];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var g={},z={get exports(){return g},set exports(t){g=t}},h={},H={get exports(){return h},set exports(t){h=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}},i=function(s,u,d){var n,l=a[s];return typeof l=="string"?n=l:u===1?n=l.one:n=l.other.replace("{{count}}",u.toString()),d!=null&&d.addSuffix?d.comparison&&d.comparison>0?"í "+n:n+" síðan":n},r=i;e.default=r,t.exports=e.default})(H,h);var c={},L={get exports(){return c},set exports(t){c=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(D);function i(n){return n&&n.__esModule?n:{default:n}}var r={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},o={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},s={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:o,defaultWidth:"full"}),dateTime:(0,a.default)({formats:s,defaultWidth:"full"})},d=u;e.default=d,t.exports=e.default})(L,c);var p={},R={get exports(){return p},set exports(t){p=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"},i=function(s,u,d,n){return a[s]},r=i;e.default=r,t.exports=e.default})(R,p);var b={},S={get exports(){return b},set exports(t){b=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(F);function i(m){return m&&m.__esModule?m:{default:m}}var r={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},o={narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},s={narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},u={narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},d={narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},n={narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}},l=function(v,w){var P=Number(v);return P+"."},y={ordinalNumber:l,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:o,defaultWidth:"wide",argumentCallback:function(v){return v-1}}),month:(0,a.default)({values:s,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:d,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},_=y;e.default=_,t.exports=e.default})(S,b);var k={},N={get exports(){return k},set exports(t){k=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(E),i=r(K);function r(f){return f&&f.__esModule?f:{default:f}}var o=/^(\d+)(\.)?/i,s=/\d+(\.)?/i,u={narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},d={any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},n={narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fjórðungur/i},l={any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},y={narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},m={narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},v={narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},w={narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},P={any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},x={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(M){return parseInt(M,10)}}),era:(0,a.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(M){return M+1}}),month:(0,a.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:P,defaultParseWidth:"any"})},j=x;e.default=j,t.exports=e.default})(N,k);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(h),i=u(c),r=u(p),o=u(b),s=u(k);function u(l){return l&&l.__esModule?l:{default:l}}var d={code:"is",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},n=d;e.default=n,t.exports=e.default})(z,g);const q=W(g),X=O({__proto__:null,default:q},[g]);export{X as i};
