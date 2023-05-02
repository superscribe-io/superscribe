import{B as D}from"./index.b0c463e5.entry.js";import{b as E,a as O,c as S,d as k}from"./index-c3455229.js";function R(a,e){for(var t=0;t<e.length;t++){const d=e[t];if(typeof d!="string"&&!Array.isArray(d)){for(const n in d)if(n!=="default"&&!(n in a)){const s=Object.getOwnPropertyDescriptor(d,n);s&&Object.defineProperty(a,n,s.get?s:{enumerable:!0,get:()=>d[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c={},L={get exports(){return c},set exports(a){c=a}},w={},z={get exports(){return w},set exports(a){w=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},d=function(h,o,l){var r,u=t[h];return typeof u=="string"?r=u:o===1?r=u.one:o===2&&u.two?r=u.two:r=u.other.replace("{{count}}",String(o)),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"mewn "+r:r+" yn ôl":r},n=d;e.default=n,a.exports=e.default})(z,w);var v={},F={get exports(){return v},set exports(a){v=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(E);function d(r){return r&&r.__esModule?r:{default:r}}var n={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},s={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},h={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,t.default)({formats:n,defaultWidth:"full"}),time:(0,t.default)({formats:s,defaultWidth:"full"}),dateTime:(0,t.default)({formats:h,defaultWidth:"full"})},l=o;e.default=l,a.exports=e.default})(F,v);var g={},I={get exports(){return g},set exports(a){g=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},d=function(h,o,l,r){return t[h]},n=d;e.default=n,a.exports=e.default})(I,g);var b={},N={get exports(){return b},set exports(a){b=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(O);function d(f){return f&&f.__esModule?f:{default:f}}var n={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},s={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},h={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},o={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},l={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},r={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},u=function(m,x){var i=Number(m);if(i<20)switch(i){case 0:return i+"fed";case 1:return i+"af";case 2:return i+"ail";case 3:case 4:return i+"ydd";case 5:case 6:return i+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return i+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return i+"eg"}else if(i>=50&&i<=60||i===80||i>=100)return i+"fed";return i+"ain"},M={ordinalNumber:u,era:(0,t.default)({values:n,defaultWidth:"wide"}),quarter:(0,t.default)({values:s,defaultWidth:"wide",argumentCallback:function(m){return m-1}}),month:(0,t.default)({values:h,defaultWidth:"wide"}),day:(0,t.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:l,defaultWidth:"wide",formattingValues:r,defaultFormattingWidth:"wide"})},_=M;e.default=_,a.exports=e.default})(N,b);var p={},T={get exports(){return p},set exports(a){p=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(S),d=n(k);function n(y){return y&&y.__esModule?y:{default:y}}var s=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,h=/\d+/i,o={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},l={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},r={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},u={any:[/1/i,/2/i,/3/i,/4/i]},M={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},_={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},f={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},m={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},x={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},i={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},W={ordinalNumber:(0,d.default)({matchPattern:s,parsePattern:h,valueCallback:function(P){return parseInt(P,10)}}),era:(0,t.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any",valueCallback:function(P){return P+1}}),month:(0,t.default)({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:x,defaultMatchWidth:"any",parsePatterns:i,defaultParseWidth:"any"})},C=W;e.default=C,a.exports=e.default})(T,p);(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(w),d=o(v),n=o(g),s=o(b),h=o(p);function o(u){return u&&u.__esModule?u:{default:u}}var l={code:"cy",formatDistance:t.default,formatLong:d.default,formatRelative:n.default,localize:s.default,match:h.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},r=l;e.default=r,a.exports=e.default})(L,c);const V=D(c),A=R({__proto__:null,default:V},[c]);export{A as i};
