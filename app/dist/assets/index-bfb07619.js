import{B as E}from"./index.58a65be4.entry.js";import{b as k,a as O,c as z,d as F}from"./index-c3455229.js";function R(t,e){for(var a=0;a<e.length;a++){const n=e[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const d=Object.getOwnPropertyDescriptor(n,r);d&&Object.defineProperty(t,r,d.get?d:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var y={},C={get exports(){return y},set exports(t){y=t}},g={},L={get exports(){return g},set exports(t){g=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"λιγότερο από ένα δευτερόλεπτο",other:"λιγότερο από {{count}} δευτερόλεπτα"},xSeconds:{one:"1 δευτερόλεπτο",other:"{{count}} δευτερόλεπτα"},halfAMinute:"μισό λεπτό",lessThanXMinutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από {{count}} λεπτά"},xMinutes:{one:"1 λεπτό",other:"{{count}} λεπτά"},aboutXHours:{one:"περίπου 1 ώρα",other:"περίπου {{count}} ώρες"},xHours:{one:"1 ώρα",other:"{{count}} ώρες"},xDays:{one:"1 ημέρα",other:"{{count}} ημέρες"},aboutXWeeks:{one:"περίπου 1 εβδομάδα",other:"περίπου {{count}} εβδομάδες"},xWeeks:{one:"1 εβδομάδα",other:"{{count}} εβδομάδες"},aboutXMonths:{one:"περίπου 1 μήνας",other:"περίπου {{count}} μήνες"},xMonths:{one:"1 μήνας",other:"{{count}} μήνες"},aboutXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"},xYears:{one:"1 χρόνο",other:"{{count}} χρόνια"},overXYears:{one:"πάνω από 1 χρόνο",other:"πάνω από {{count}} χρόνια"},almostXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"}},n=function(l,u,i){var o,f=a[l];return typeof f=="string"?o=f:u===1?o=f.one:o=f.other.replace("{{count}}",String(u)),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"σε "+o:o+" πριν":o},r=n;e.default=r,t.exports=e.default})(L,g);var P={},N={get exports(){return P},set exports(t){P=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(k);function n(o){return o&&o.__esModule?o:{default:o}}var r={full:"EEEE, d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"d/M/yy"},d={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},l={full:"{{date}} - {{time}}",long:"{{date}} - {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:d,defaultWidth:"full"}),dateTime:(0,a.default)({formats:l,defaultWidth:"full"})},i=u;e.default=i,t.exports=e.default})(N,P);var _={},V={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:function(l){switch(l.getUTCDay()){case 6:return"'το προηγούμενο' eeee 'στις' p";default:return"'την προηγούμενη' eeee 'στις' p"}},yesterday:"'χθες στις' p",today:"'σήμερα στις' p",tomorrow:"'αύριο στις' p",nextWeek:"eeee 'στις' p",other:"P"},n=function(l,u){var i=a[l];return typeof i=="function"?i(u):i},r=n;e.default=r,t.exports=e.default})(V,_);var b={},X={get exports(){return b},set exports(t){b=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(O);function n(v){return v&&v.__esModule?v:{default:v}}var r={narrow:["πΧ","μΧ"],abbreviated:["π.Χ.","μ.Χ."],wide:["προ Χριστού","μετά Χριστόν"]},d={narrow:["1","2","3","4"],abbreviated:["Τ1","Τ2","Τ3","Τ4"],wide:["1ο τρίμηνο","2ο τρίμηνο","3ο τρίμηνο","4ο τρίμηνο"]},l={narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],wide:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},u={narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],wide:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},i={narrow:["Κ","Δ","T","Τ","Π","Π","Σ"],short:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],abbreviated:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],wide:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},o={narrow:{am:"πμ",pm:"μμ",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},abbreviated:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},wide:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"}},f=function(h,p){var W=Number(h),s=p==null?void 0:p.unit,m;return s==="year"||s==="month"?m="ος":s==="week"||s==="dayOfYear"||s==="day"||s==="hour"||s==="date"?m="η":m="ο",W+m},M={ordinalNumber:f,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(h){return h-1}}),month:(0,a.default)({values:l,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:i,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:o,defaultWidth:"wide"})},x=M;e.default=x,t.exports=e.default})(X,b);var w={},q={get exports(){return w},set exports(t){w=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(z),n=r(F);function r(c){return c&&c.__esModule?c:{default:c}}var d=/^(\d+)(ος|η|ο)?/i,l=/\d+/i,u={narrow:/^(πΧ|μΧ)/i,abbreviated:/^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,wide:/^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i},i={any:[/^π/i,/^(μ|κ)/i]},o={narrow:/^[1234]/i,abbreviated:/^τ[1234]/i,wide:/^[1234]ο? τρ(ί|ι)μηνο/i},f={any:[/1/i,/2/i,/3/i,/4/i]},M={narrow:/^[ιφμαμιιασονδ]/i,abbreviated:/^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,wide:/^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i},x={narrow:[/^ι/i,/^φ/i,/^μ/i,/^α/i,/^μ/i,/^ι/i,/^ι/i,/^α/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i],any:[/^ια/i,/^φ/i,/^μ[άα]ρ/i,/^απ/i,/^μ[άα][ιΐ]/i,/^ιο[ύυ]ν/i,/^ιο[ύυ]λ/i,/^α[ύυ]/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i]},v={narrow:/^[κδτπσ]/i,short:/^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,abbreviated:/^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,wide:/^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i},h={narrow:[/^κ/i,/^δ/i,/^τ/i,/^τ/i,/^π/i,/^π/i,/^σ/i],any:[/^κ/i,/^δ/i,/^τρ/i,/^τε/i,/^π[εέ]/i,/^π[αά]/i,/^σ/i]},p={narrow:/^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,any:/^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i},W={any:{am:/^πμ|π\.\s?μ\./i,pm:/^μμ|μ\.\s?μ\./i,midnight:/^μεσάν/i,noon:/^μεσημ(έ|ε)/i,morning:/πρω(ί|ι)/i,afternoon:/απ(ό|ο)γευμα/i,evening:/βρ(ά|α)δυ/i,night:/ν(ύ|υ)χτα/i}},s={ordinalNumber:(0,n.default)({matchPattern:d,parsePattern:l,valueCallback:function(D){return parseInt(D,10)}}),era:(0,a.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:i,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(D){return D+1}}),month:(0,a.default)({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:W,defaultParseWidth:"any"})},m=s;e.default=m,t.exports=e.default})(q,w);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(g),n=u(P),r=u(_),d=u(b),l=u(w);function u(f){return f&&f.__esModule?f:{default:f}}var i={code:"el",formatDistance:a.default,formatLong:n.default,formatRelative:r.default,localize:d.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},o=i;e.default=o,t.exports=e.default})(C,y);const S=E(y),A=R({__proto__:null,default:S},[y]);export{A as i};
