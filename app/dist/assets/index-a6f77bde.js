import{B as W}from"./index.2ac03bce.entry.js";import{b as k,a as D,c as E,d as F}from"./index-c3455229.js";import{d as O}from"./index-44cd66ea.js";import{i as z}from"./index-0c6974ab.js";function S(i,e){for(var a=0;a<e.length;a++){const t=e[a];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in i)){const v=Object.getOwnPropertyDescriptor(t,s);v&&Object.defineProperty(i,s,v.get?v:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var _={},C={get exports(){return _},set exports(i){_=i}},P={},R={get exports(){return P},set exports(i){P=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function a(u,r){if(u.one!==void 0&&r===1)return u.one;var n=r%10,c=r%100;return n===1&&c!==11?u.singularNominative.replace("{{count}}",String(r)):n>=2&&n<=4&&(c<10||c>20)?u.singularGenitive.replace("{{count}}",String(r)):u.pluralGenitive.replace("{{count}}",String(r))}function t(u){return function(r,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?u.future?a(u.future,r):"за "+a(u.regular,r):u.past?a(u.past,r):a(u.regular,r)+" тому":a(u.regular,r)}}var s=function(r,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},v={lessThanXSeconds:t({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:t({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:s,lessThanXMinutes:t({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:t({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:t({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:t({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:t({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:t({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:t({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:t({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:t({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:t({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:t({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:t({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:t({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},p=function(r,n,c){return c=c||{},v[r](n,c)},f=p;e.default=f,i.exports=e.default})(R,P);var b={},L={get exports(){return b},set exports(i){b=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(k);function t(r){return r&&r.__esModule?r:{default:r}}var s={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},v={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},p={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},f={date:(0,a.default)({formats:s,defaultWidth:"full"}),time:(0,a.default)({formats:v,defaultWidth:"full"}),dateTime:(0,a.default)({formats:p,defaultWidth:"full"})},u=f;e.default=u,i.exports=e.default})(L,b);var w={},T={get exports(){return w},set exports(i){w=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=O,t=s(z);function s(l){return l&&l.__esModule?l:{default:l}}var v=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function p(l){var d=v[l];switch(l){case 0:case 3:case 5:case 6:return"'у минулу "+d+" о' p";case 1:case 2:case 4:return"'у минулий "+d+" о' p"}}function f(l){var d=v[l];return"'у "+d+" о' p"}function u(l){var d=v[l];switch(l){case 0:case 3:case 5:case 6:return"'у наступну "+d+" о' p";case 1:case 2:case 4:return"'у наступний "+d+" о' p"}}var r=function(d,h,g){var m=(0,a.toDate)(d),o=m.getUTCDay();return(0,t.default)(m,h,g)?f(o):p(o)},n=function(d,h,g){var m=(0,a.toDate)(d),o=m.getUTCDay();return(0,t.default)(m,h,g)?f(o):u(o)},c={lastWeek:r,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:n,other:"P"},G=function(d,h,g,m){var o=c[d];return typeof o=="function"?o(h,g,m):o},y=G;e.default=y,i.exports=e.default})(T,w);var M={},V={get exports(){return M},set exports(i){M=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(D);function t(l){return l&&l.__esModule?l:{default:l}}var s={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},v={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},p={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},f={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},u={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},r={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},n={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},c=function(d,h){var g=String(h==null?void 0:h.unit),m=Number(d),o;return g==="date"?m===3||m===23?o="-є":o="-е":g==="minute"||g==="second"||g==="hour"?o="-а":o="-й",m+o},G={ordinalNumber:c,era:(0,a.default)({values:s,defaultWidth:"wide"}),quarter:(0,a.default)({values:v,defaultWidth:"wide",argumentCallback:function(d){return d-1}}),month:(0,a.default)({values:p,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:r,defaultWidth:"any",formattingValues:n,defaultFormattingWidth:"wide"})},y=G;e.default=y,i.exports=e.default})(V,M);var x={},q={get exports(){return x},set exports(i){x=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(E),t=s(F);function s(o){return o&&o.__esModule?o:{default:o}}var v=/^(\d+)(-?(е|й|є|а|я))?/i,p=/\d+/i,f={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},u={any:[/^д/i,/^н/i]},r={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},n={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},G={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},y={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},l={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},d={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},h={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},g={ordinalNumber:(0,t.default)({matchPattern:v,parsePattern:p,valueCallback:function(N){return parseInt(N,10)}}),era:(0,a.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:n,defaultParseWidth:"any",valueCallback:function(N){return N+1}}),month:(0,a.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"})},m=g;e.default=m,i.exports=e.default})(q,x);(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=f(P),t=f(b),s=f(w),v=f(M),p=f(x);function f(n){return n&&n.__esModule?n:{default:n}}var u={code:"uk",formatDistance:a.default,formatLong:t.default,formatRelative:s.default,localize:v.default,match:p.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},r=u;e.default=r,i.exports=e.default})(C,_);const X=W(_),Q=S({__proto__:null,default:X},[_]);export{Q as i};