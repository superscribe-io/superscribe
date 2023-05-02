import{B as E}from"./index.4d6000dd.entry.js";import{b as k,a as O,c as z,d as F}from"./index-c3455229.js";function R(t,e){for(var a=0;a<e.length;a++){const i=e[a];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const d=Object.getOwnPropertyDescriptor(i,r);d&&Object.defineProperty(t,r,d.get?d:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var c={},C={get exports(){return c},set exports(t){c=t}},h={},L={get exports(){return h},set exports(t){h=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"بىر سىكۇنت ئىچىدە",other:"سىكۇنت ئىچىدە {{count}}"},xSeconds:{one:"بىر سىكۇنت",other:"سىكۇنت {{count}}"},halfAMinute:"يىرىم مىنۇت",lessThanXMinutes:{one:"بىر مىنۇت ئىچىدە",other:"مىنۇت ئىچىدە {{count}}"},xMinutes:{one:"بىر مىنۇت",other:"مىنۇت {{count}}"},aboutXHours:{one:"تەخمىنەن بىر سائەت",other:"سائەت {{count}} تەخمىنەن"},xHours:{one:"بىر سائەت",other:"سائەت {{count}}"},xDays:{one:"بىر كۈن",other:"كۈن {{count}}"},aboutXWeeks:{one:"تەخمىنەن بىرھەپتە",other:"ھەپتە {{count}} تەخمىنەن"},xWeeks:{one:"بىرھەپتە",other:"ھەپتە {{count}}"},aboutXMonths:{one:"تەخمىنەن بىر ئاي",other:"ئاي {{count}} تەخمىنەن"},xMonths:{one:"بىر ئاي",other:"ئاي {{count}}"},aboutXYears:{one:"تەخمىنەن بىر يىل",other:"يىل {{count}} تەخمىنەن"},xYears:{one:"بىر يىل",other:"يىل {{count}}"},overXYears:{one:"بىر يىلدىن ئارتۇق",other:"يىلدىن ئارتۇق {{count}}"},almostXYears:{one:"ئاساسەن بىر يىل",other:"يىل {{count}} ئاساسەن"}},i=function(f,o,u){var n,l=a[f];return typeof l=="string"?n=l:o===1?n=l.one:n=l.other.replace("{{count}}",String(o)),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?n:n+" بولدى":n},r=i;e.default=r,t.exports=e.default})(L,h);var g={},S={get exports(){return g},set exports(t){g=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(k);function i(n){return n&&n.__esModule?n:{default:n}}var r={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},d={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'دە' {{time}}",long:"{{date}} 'دە' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:d,defaultWidth:"full"}),dateTime:(0,a.default)({formats:f,defaultWidth:"full"})},u=o;e.default=u,t.exports=e.default})(S,g);var p={},V={get exports(){return p},set exports(t){p=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'ئ‍ۆتكەن' eeee 'دە' p",yesterday:"'تۈنۈگۈن دە' p",today:"'بۈگۈن دە' p",tomorrow:"'ئەتە دە' p",nextWeek:"eeee 'دە' p",other:"P"},i=function(f,o,u,n){return a[f]},r=i;e.default=r,t.exports=e.default})(V,p);var y={},X={get exports(){return y},set exports(t){y=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(O);function i(s){return s&&s.__esModule?s:{default:s}}var r={narrow:["ب","ك"],abbreviated:["ب","ك"],wide:["مىيلادىدىن بۇرۇن","مىيلادىدىن كىيىن"]},d={narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["بىرىنجى چارەك","ئىككىنجى چارەك","ئۈچىنجى چارەك","تۆتىنجى چارەك"]},f={narrow:["ي","ف","م","ا","م","ى","ى","ا","س","ۆ","ن","د"],abbreviated:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"],wide:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"]},o={narrow:["ي","د","س","چ","پ","ج","ش"],short:["ي","د","س","چ","پ","ج","ش"],abbreviated:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],wide:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},u={narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"}},n={narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"}},l=function(v,w){return String(v)},P={ordinalNumber:l,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(v){return v-1}}),month:(0,a.default)({values:f,defaultWidth:"wide"}),day:(0,a.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:u,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},b=P;e.default=b,t.exports=e.default})(X,y);var _={},q={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(z),i=r(F);function r(m){return m&&m.__esModule?m:{default:m}}var d=/^(\d+)(th|st|nd|rd)?/i,f=/\d+/i,o={narrow:/^(ب|ك)/i,wide:/^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i},u={any:[/^بۇرۇن/i,/^كىيىن/i]},n={narrow:/^[1234]/i,abbreviated:/^چ[1234]/i,wide:/^چارەك [1234]/i},l={any:[/1/i,/2/i,/3/i,/4/i]},P={narrow:/^[يفمئامئ‍ئاسۆند]/i,abbreviated:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,wide:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i},b={narrow:[/^ي/i,/^ف/i,/^م/i,/^ا/i,/^م/i,/^ى‍/i,/^ى‍/i,/^ا‍/i,/^س/i,/^ۆ/i,/^ن/i,/^د/i],any:[/^يان/i,/^فېۋ/i,/^مار/i,/^ئاپ/i,/^ماي/i,/^ئىيۇن/i,/^ئىيول/i,/^ئاۋ/i,/^سىن/i,/^ئۆك/i,/^نوي/i,/^دىك/i]},s={narrow:/^[دسچپجشي]/i,short:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,abbreviated:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,wide:/^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i},v={narrow:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i]},w={narrow:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,any:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i},x={any:{am:/^ئە/i,pm:/^چ/i,midnight:/^ك/i,noon:/^چ/i,morning:/ئەتىگەن/i,afternoon:/چۈشتىن كىيىن/i,evening:/ئاخشىم/i,night:/كىچە/i}},W={ordinalNumber:(0,i.default)({matchPattern:d,parsePattern:f,valueCallback:function(M){return parseInt(M,10)}}),era:(0,a.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(M){return M+1}}),month:(0,a.default)({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})},D=W;e.default=D,t.exports=e.default})(q,_);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(h),i=o(g),r=o(p),d=o(y),f=o(_);function o(l){return l&&l.__esModule?l:{default:l}}var u={code:"ug",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:f.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},n=u;e.default=n,t.exports=e.default})(C,c);const N=E(c),A=R({__proto__:null,default:N},[c]);export{A as i};