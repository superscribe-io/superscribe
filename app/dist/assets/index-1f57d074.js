import{B as k}from"./index.4d6000dd.entry.js";import{b as E,a as O,c as z,d as F}from"./index-c3455229.js";function R(t,e){for(var a=0;a<e.length;a++){const n=e[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const l=Object.getOwnPropertyDescriptor(n,r);l&&Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var p={},S={get exports(){return p},set exports(t){p=t}},h={},C={get exports(){return h},set exports(t){h=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{past:"{{count}} წამზე ნაკლები ხნის წინ",present:"{{count}} წამზე ნაკლები",future:"{{count}} წამზე ნაკლებში"},xSeconds:{past:"{{count}} წამის წინ",present:"{{count}} წამი",future:"{{count}} წამში"},halfAMinute:{past:"ნახევარი წუთის წინ",present:"ნახევარი წუთი",future:"ნახევარი წუთში"},lessThanXMinutes:{past:"{{count}} წუთზე ნაკლები ხნის წინ",present:"{{count}} წუთზე ნაკლები",future:"{{count}} წუთზე ნაკლებში"},xMinutes:{past:"{{count}} წუთის წინ",present:"{{count}} წუთი",future:"{{count}} წუთში"},aboutXHours:{past:"დაახლოებით {{count}} საათის წინ",present:"დაახლოებით {{count}} საათი",future:"დაახლოებით {{count}} საათში"},xHours:{past:"{{count}} საათის წინ",present:"{{count}} საათი",future:"{{count}} საათში"},xDays:{past:"{{count}} დღის წინ",present:"{{count}} დღე",future:"{{count}} დღეში"},aboutXWeeks:{past:"დაახლოებით {{count}} კვირას წინ",present:"დაახლოებით {{count}} კვირა",future:"დაახლოებით {{count}} კვირაში"},xWeeks:{past:"{{count}} კვირას კვირა",present:"{{count}} კვირა",future:"{{count}} კვირაში"},aboutXMonths:{past:"დაახლოებით {{count}} თვის წინ",present:"დაახლოებით {{count}} თვე",future:"დაახლოებით {{count}} თვეში"},xMonths:{past:"{{count}} თვის წინ",present:"{{count}} თვე",future:"{{count}} თვეში"},aboutXYears:{past:"დაახლოებით {{count}} წლის წინ",present:"დაახლოებით {{count}} წელი",future:"დაახლოებით {{count}} წელში"},xYears:{past:"{{count}} წლის წინ",present:"{{count}} წელი",future:"{{count}} წელში"},overXYears:{past:"{{count}} წელზე მეტი ხნის წინ",present:"{{count}} წელზე მეტი",future:"{{count}} წელზე მეტი ხნის შემდეგ"},almostXYears:{past:"თითქმის {{count}} წლის წინ",present:"თითქმის {{count}} წელი",future:"თითქმის {{count}} წელში"}},n=function(s,o,u){var i,d=a[s];return typeof d=="string"?i=d:u!=null&&u.addSuffix&&u.comparison&&u.comparison>0?i=d.future.replace("{{count}}",String(o)):u!=null&&u.addSuffix?i=d.past.replace("{{count}}",String(o)):i=d.present.replace("{{count}}",String(o)),i},r=n;e.default=r,t.exports=e.default})(C,h);var g={},L={get exports(){return g},set exports(t){g=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(E);function n(i){return i&&i.__esModule?i:{default:i}}var r={full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},l={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} {{time}}'-ზე'",long:"{{date}} {{time}}'-ზე'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:l,defaultWidth:"full"}),dateTime:(0,a.default)({formats:s,defaultWidth:"full"})},u=o;e.default=u,t.exports=e.default})(L,g);var y={},N={get exports(){return y},set exports(t){y=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'წინა' eeee p'-ზე'",yesterday:"'გუშინ' p'-ზე'",today:"'დღეს' p'-ზე'",tomorrow:"'ხვალ' p'-ზე'",nextWeek:"'შემდეგი' eeee p'-ზე'",other:"P"},n=function(s,o,u,i){return a[s]},r=n;e.default=r,t.exports=e.default})(N,y);var P={},V={get exports(){return P},set exports(t){P=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(O);function n(f){return f&&f.__esModule?f:{default:f}}var r={narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]},l={narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]},s={narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},o={narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},u={narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}},i={narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}},d=function(m){var v=Number(m);return v===1?v+"-ლი":v+"-ე"},M={ordinalNumber:d,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:l,defaultWidth:"wide",argumentCallback:function(m){return m-1}}),month:(0,a.default)({values:s,defaultWidth:"wide"}),day:(0,a.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:u,defaultWidth:"wide",formattingValues:i,defaultFormattingWidth:"wide"})},b=M;e.default=b,t.exports=e.default})(V,P);var _={},X={get exports(){return _},set exports(t){_=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(z),n=r(F);function r(c){return c&&c.__esModule?c:{default:c}}var l=/^(\d+)(-ლი|-ე)?/i,s=/\d+/i,o={narrow:/^(ჩვ?\.წ)/i,abbreviated:/^(ჩვ?\.წ)/i,wide:/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i},u={any:[/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,/^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]},i={narrow:/^[1234]/i,abbreviated:/^[1234]-(ლი|ე)? კვ/i,wide:/^[1234]-(ლი|ე)? კვარტალი/i},d={any:[/1/i,/2/i,/3/i,/4/i]},M={any:/^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i},b={any:[/^ია/i,/^თ/i,/^მარ/i,/^აპ/i,/^მაი/i,/^ი?ვნ/i,/^ი?ვლ/i,/^აგ/i,/^ს/i,/^ო/i,/^ნ/i,/^დ/i]},f={narrow:/^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,short:/^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,wide:/^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i},m={any:[/^კვ/i,/^ორ/i,/^სა/i,/^ოთ/i,/^ხუ/i,/^პა/i,/^შა/i]},v={any:/^([ap]\.?\s?m\.?|შუაღ|დილ)/i},w={any:{am:/^a/i,pm:/^p/i,midnight:/^შუაღ/i,noon:/^შუადღ/i,morning:/^დილ/i,afternoon:/ნაშუადღევს/i,evening:/საღამო/i,night:/ღამ/i}},W={ordinalNumber:(0,n.default)({matchPattern:l,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,a.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:i,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,a.default)({matchPatterns:M,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},D=W;e.default=D,t.exports=e.default})(X,_);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(h),n=o(g),r=o(y),l=o(P),s=o(_);function o(d){return d&&d.__esModule?d:{default:d}}var u={code:"ka",formatDistance:a.default,formatLong:n.default,formatRelative:r.default,localize:l.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},i=u;e.default=i,t.exports=e.default})(S,p);const q=k(p),Y=R({__proto__:null,default:q},[p]);export{Y as i};