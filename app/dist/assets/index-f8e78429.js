import{B as E}from"./index.b0c463e5.entry.js";import{b as S,a as k,d as O,c as C}from"./index-c3455229.js";function z(t,e){for(var a=0;a<e.length;a++){const r=e[a];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var g={},F={get exports(){return g},set exports(t){g=t}},p={},R={get exports(){return p},set exports(t){p=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},r=function(f,u,d){d=d||{};var n,i=a[f];return typeof i=="string"?n=i:u===1?d.addSuffix&&i.oneWithSuffix?n=i.oneWithSuffix:n=i.one:d.addSuffix&&i.otherWithSuffix?n=i.otherWithSuffix.replace("{{count}}",String(u)):n=i.other.replace("{{count}}",String(u)),d.addSuffix?d.comparison&&d.comparison>0?n+"後":n+"前":n},o=r;e.default=o,t.exports=e.default})(R,p);var P={},A={get exports(){return P},set exports(t){P=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(S);function r(n){return n&&n.__esModule?n:{default:n}}var o={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},l={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},f={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,a.default)({formats:o,defaultWidth:"full"}),time:(0,a.default)({formats:l,defaultWidth:"full"}),dateTime:(0,a.default)({formats:f,defaultWidth:"full"})},d=u;e.default=d,t.exports=e.default})(A,P);var _={},N={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},r=function(f,u,d,n){return a[f]},o=r;e.default=o,t.exports=e.default})(N,_);var y={},q={get exports(){return y},set exports(t){y=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(k);function r(c){return c&&c.__esModule?c:{default:c}}var o={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},l={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},f={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},u={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},d={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},n={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},i=function(v,h){var s=Number(v),M=String(h==null?void 0:h.unit);switch(M){case"year":return"".concat(s,"年");case"quarter":return"第".concat(s,"四半期");case"month":return"".concat(s,"月");case"week":return"第".concat(s,"週");case"date":return"".concat(s,"日");case"hour":return"".concat(s,"時");case"minute":return"".concat(s,"分");case"second":return"".concat(s,"秒");default:return"".concat(s)}},x={ordinalNumber:i,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:l,defaultWidth:"wide",argumentCallback:function(v){return Number(v)-1}}),month:(0,a.default)({values:f,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:d,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},w=x;e.default=w,t.exports=e.default})(q,y);var b={},L={get exports(){return b},set exports(t){b=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(O),r=o(C);function o(m){return m&&m.__esModule?m:{default:m}}var l=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,f=/\d+/i,u={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},d={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},n={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},i={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},x={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},w={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},c={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},v={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},h={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},s={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},M={ordinalNumber:(0,a.default)({matchPattern:l,parsePattern:f,valueCallback:function(W){return parseInt(W,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:i,defaultParseWidth:"any",valueCallback:function(W){return W+1}}),month:(0,r.default)({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:s,defaultParseWidth:"any"})},D=M;e.default=D,t.exports=e.default})(L,b);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(p),r=u(P),o=u(_),l=u(y),f=u(b);function u(i){return i&&i.__esModule?i:{default:i}}var d={code:"ja",formatDistance:a.default,formatLong:r.default,formatRelative:o.default,localize:l.default,match:f.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},n=d;e.default=n,t.exports=e.default})(F,g);const V=E(g),Q=z({__proto__:null,default:V},[g]);export{Q as i};
