import{B as I}from"./index.4d6000dd.entry.js";import{b as W,a as F,c as j,d as D}from"./index-c3455229.js";import{i as E}from"./index-0c6974ab.js";function V(a,e){for(var t=0;t<e.length;t++){const d=e[t];if(typeof d!="string"&&!Array.isArray(d)){for(const o in d)if(o!=="default"&&!(o in a)){const s=Object.getOwnPropertyDescriptor(d,o);s&&Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:()=>d[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var z={},O={get exports(){return z},set exports(a){z=a}},y={},C={get exports(){return y},set exports(a){y=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godziny",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"około tygodnia",twoFour:"około {{count}} tygodni",other:"około {{count}} tygodni"},xWeeks:{one:"tydzień",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};function d(i,u){if(u===1)return i.one;var n=u%100;if(n<=20&&n>10)return i.other;var r=n%10;return r>=2&&r<=4?i.twoFour:i.other}function o(i,u,n){var r=d(i,u),f=typeof r=="string"?r:r[n];return f.replace("{{count}}",String(u))}var s=function(u,n,r){var f=t[u];return r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"za "+o(f,n,"future"):o(f,n,"past")+" temu":o(f,n,"regular")},p=s;e.default=p,a.exports=e.default})(C,y);var k={},L={get exports(){return k},set exports(a){k=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(W);function d(n){return n&&n.__esModule?n:{default:n}}var o={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},p={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},i={date:(0,t.default)({formats:o,defaultWidth:"full"}),time:(0,t.default)({formats:s,defaultWidth:"full"}),dateTime:(0,t.default)({formats:p,defaultWidth:"full"})},u=i;e.default=u,a.exports=e.default})(L,k);var b={},S={get exports(){return b},set exports(a){b=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(E);function d(l){return l&&l.__esModule?l:{default:l}}var o={masculine:"ostatni",feminine:"ostatnia"},s={masculine:"ten",feminine:"ta"},p={masculine:"następny",feminine:"następna"},i={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function u(l,w,h,c){var m;if((0,t.default)(w,h,c))m=s;else if(l==="lastWeek")m=o;else if(l==="nextWeek")m=p;else throw new Error("Cannot determine adjectives for token ".concat(l));var v=w.getUTCDay(),_=i[v],g=m[_];return"'".concat(g,"' eeee 'o' p")}var n={lastWeek:u,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:u,other:"P"},r=function(w,h,c,m){var v=n[w];return typeof v=="function"?v(w,h,c,m):v},f=r;e.default=f,a.exports=e.default})(S,b);var P={},R={get exports(){return P},set exports(a){P=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(F);function d(c){return c&&c.__esModule?c:{default:c}}var o={narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},s={narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},p={narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},i={narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},u={narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},n={narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},r={narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},f={narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},l=function(m,v){return String(m)},w={ordinalNumber:l,era:(0,t.default)({values:o,defaultWidth:"wide"}),quarter:(0,t.default)({values:s,defaultWidth:"wide",argumentCallback:function(m){return m-1}}),month:(0,t.default)({values:p,defaultWidth:"wide",formattingValues:i,defaultFormattingWidth:"wide"}),day:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"}),dayPeriod:(0,t.default)({values:r,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=w;e.default=h,a.exports=e.default})(R,P);var M={},H={get exports(){return M},set exports(a){M=a}};(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(j),d=o(D);function o(g){return g&&g.__esModule?g:{default:g}}var s=/^(\d+)?/i,p=/\d+/i,i={narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i},u={any:[/^p/i,/^n/i]},n={narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(ł|l)/i},r={narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},f={narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,wide:/^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i},l={narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},w={narrow:/^[npwścs]/i,short:/^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i},h={narrow:[/^n/i,/^p/i,/^w/i,/^ś/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pi/i,/^so/i]},c={narrow:/^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i},m={narrow:{am:/^a$/i,pm:/^p$/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i}},v={ordinalNumber:(0,d.default)({matchPattern:s,parsePattern:p,valueCallback:function(x){return parseInt(x,10)}}),era:(0,t.default)({matchPatterns:i,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:r,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,t.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:c,defaultMatchWidth:"any",parsePatterns:m,defaultParseWidth:"any"})},_=v;e.default=_,a.exports=e.default})(H,M);(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(y),d=i(k),o=i(b),s=i(P),p=i(M);function i(r){return r&&r.__esModule?r:{default:r}}var u={code:"pl",formatDistance:t.default,formatLong:d.default,formatRelative:o.default,localize:s.default,match:p.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},n=u;e.default=n,a.exports=e.default})(O,z);const T=I(z),X=V({__proto__:null,default:T},[z]);export{X as i};