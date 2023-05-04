import{B as W}from"./index.58a65be4.entry.js";import{b as k,a as D,c as E,d as F}from"./index-c3455229.js";import{d as O}from"./index-82815fd9.js";import{i as z}from"./index-0c6974ab.js";function S(i,e){for(var a=0;a<e.length;a++){const t=e[a];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in i)){const v=Object.getOwnPropertyDescriptor(t,s);v&&Object.defineProperty(i,s,v.get?v:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var _={},C={get exports(){return _},set exports(i){_=i}},b={},R={get exports(){return b},set exports(i){b=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;function a(u,r){if(u.one!==void 0&&r===1)return u.one;var n=r%10,m=r%100;return n===1&&m!==11?u.singularNominative.replace("{{count}}",String(r)):n>=2&&n<=4&&(m<10||m>20)?u.singularGenitive.replace("{{count}}",String(r)):u.pluralGenitive.replace("{{count}}",String(r))}function t(u){return function(r,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?u.future?a(u.future,r):"праз "+a(u.regular,r):u.past?a(u.past,r):a(u.regular,r)+" таму":a(u.regular,r)}}var s=function(r,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?"праз паўхвіліны":"паўхвіліны таму":"паўхвіліны"},v={lessThanXSeconds:t({regular:{one:"менш за секунду",singularNominative:"менш за {{count}} секунду",singularGenitive:"менш за {{count}} секунды",pluralGenitive:"менш за {{count}} секунд"},future:{one:"менш, чым праз секунду",singularNominative:"менш, чым праз {{count}} секунду",singularGenitive:"менш, чым праз {{count}} секунды",pluralGenitive:"менш, чым праз {{count}} секунд"}}),xSeconds:t({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду таму",singularGenitive:"{{count}} секунды таму",pluralGenitive:"{{count}} секунд таму"},future:{singularNominative:"праз {{count}} секунду",singularGenitive:"праз {{count}} секунды",pluralGenitive:"праз {{count}} секунд"}}),halfAMinute:s,lessThanXMinutes:t({regular:{one:"менш за хвіліну",singularNominative:"менш за {{count}} хвіліну",singularGenitive:"менш за {{count}} хвіліны",pluralGenitive:"менш за {{count}} хвілін"},future:{one:"менш, чым праз хвіліну",singularNominative:"менш, чым праз {{count}} хвіліну",singularGenitive:"менш, чым праз {{count}} хвіліны",pluralGenitive:"менш, чым праз {{count}} хвілін"}}),xMinutes:t({regular:{singularNominative:"{{count}} хвіліна",singularGenitive:"{{count}} хвіліны",pluralGenitive:"{{count}} хвілін"},past:{singularNominative:"{{count}} хвіліну таму",singularGenitive:"{{count}} хвіліны таму",pluralGenitive:"{{count}} хвілін таму"},future:{singularNominative:"праз {{count}} хвіліну",singularGenitive:"праз {{count}} хвіліны",pluralGenitive:"праз {{count}} хвілін"}}),aboutXHours:t({regular:{singularNominative:"каля {{count}} гадзіны",singularGenitive:"каля {{count}} гадзін",pluralGenitive:"каля {{count}} гадзін"},future:{singularNominative:"прыблізна праз {{count}} гадзіну",singularGenitive:"прыблізна праз {{count}} гадзіны",pluralGenitive:"прыблізна праз {{count}} гадзін"}}),xHours:t({regular:{singularNominative:"{{count}} гадзіна",singularGenitive:"{{count}} гадзіны",pluralGenitive:"{{count}} гадзін"},past:{singularNominative:"{{count}} гадзіну таму",singularGenitive:"{{count}} гадзіны таму",pluralGenitive:"{{count}} гадзін таму"},future:{singularNominative:"праз {{count}} гадзіну",singularGenitive:"праз {{count}} гадзіны",pluralGenitive:"праз {{count}} гадзін"}}),xDays:t({regular:{singularNominative:"{{count}} дзень",singularGenitive:"{{count}} дні",pluralGenitive:"{{count}} дзён"}}),aboutXWeeks:t({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xWeeks:t({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXMonths:t({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xMonths:t({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXYears:t({regular:{singularNominative:"каля {{count}} года",singularGenitive:"каля {{count}} гадоў",pluralGenitive:"каля {{count}} гадоў"},future:{singularNominative:"прыблізна праз {{count}} год",singularGenitive:"прыблізна праз {{count}} гады",pluralGenitive:"прыблізна праз {{count}} гадоў"}}),xYears:t({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} гады",pluralGenitive:"{{count}} гадоў"}}),overXYears:t({regular:{singularNominative:"больш за {{count}} год",singularGenitive:"больш за {{count}} гады",pluralGenitive:"больш за {{count}} гадоў"},future:{singularNominative:"больш, чым праз {{count}} год",singularGenitive:"больш, чым праз {{count}} гады",pluralGenitive:"больш, чым праз {{count}} гадоў"}}),almostXYears:t({regular:{singularNominative:"амаль {{count}} год",singularGenitive:"амаль {{count}} гады",pluralGenitive:"амаль {{count}} гадоў"},future:{singularNominative:"амаль праз {{count}} год",singularGenitive:"амаль праз {{count}} гады",pluralGenitive:"амаль праз {{count}} гадоў"}})},p=function(r,n,m){return m=m||{},v[r](n,m)},f=p;e.default=f,i.exports=e.default})(R,b);var P={},L={get exports(){return P},set exports(i){P=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(k);function t(r){return r&&r.__esModule?r:{default:r}}var s={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},v={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},p={any:"{{date}}, {{time}}"},f={date:(0,a.default)({formats:s,defaultWidth:"full"}),time:(0,a.default)({formats:v,defaultWidth:"full"}),dateTime:(0,a.default)({formats:p,defaultWidth:"any"})},u=f;e.default=u,i.exports=e.default})(L,P);var w={},T={get exports(){return w},set exports(i){w=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=O,t=s(z);function s(l){return l&&l.__esModule?l:{default:l}}var v=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function p(l){var d=v[l];switch(l){case 0:case 3:case 5:case 6:return"'у мінулую "+d+" а' p";case 1:case 2:case 4:return"'у мінулы "+d+" а' p"}}function f(l){var d=v[l];return"'у "+d+" а' p"}function u(l){var d=v[l];switch(l){case 0:case 3:case 5:case 6:return"'у наступную "+d+" а' p";case 1:case 2:case 4:return"'у наступны "+d+" а' p"}}var r=function(d,h,g){var c=(0,a.toDate)(d),o=c.getUTCDay();return(0,t.default)(c,h,g)?f(o):p(o)},n=function(d,h,g){var c=(0,a.toDate)(d),o=c.getUTCDay();return(0,t.default)(c,h,g)?f(o):u(o)},m={lastWeek:r,yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:n,other:"P"},G=function(d,h,g,c){var o=m[d];return typeof o=="function"?o(h,g,c):o},y=G;e.default=y,i.exports=e.default})(T,w);var M={},V={get exports(){return M},set exports(i){M=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(D);function t(l){return l&&l.__esModule?l:{default:l}}var s={narrow:["да н.э.","н.э."],abbreviated:["да н. э.","н. э."],wide:["да нашай эры","нашай эры"]},v={narrow:["1","2","3","4"],abbreviated:["1-ы кв.","2-і кв.","3-і кв.","4-ы кв."],wide:["1-ы квартал","2-і квартал","3-і квартал","4-ы квартал"]},p={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","май","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань"]},f={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","мая","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня"]},u={narrow:["Н","П","А","С","Ч","П","С"],short:["нд","пн","аў","ср","чц","пт","сб"],abbreviated:["нядз","пан","аўт","сер","чац","пят","суб"],wide:["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"]},r={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніца",afternoon:"дзень",evening:"вечар",night:"ноч"}},n={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніцы",afternoon:"дня",evening:"вечара",night:"ночы"}},m=function(d,h){var g=String(h==null?void 0:h.unit),c=Number(d),o;return g==="date"?o="-га":g==="hour"||g==="minute"||g==="second"?o="-я":o=(c%10===2||c%10===3)&&c%100!==12&&c%100!==13?"-і":"-ы",c+o},G={ordinalNumber:m,era:(0,a.default)({values:s,defaultWidth:"wide"}),quarter:(0,a.default)({values:v,defaultWidth:"wide",argumentCallback:function(d){return d-1}}),month:(0,a.default)({values:p,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:r,defaultWidth:"any",formattingValues:n,defaultFormattingWidth:"wide"})},y=G;e.default=y,i.exports=e.default})(V,M);var x={},q={get exports(){return x},set exports(i){x=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(E),t=s(F);function s(o){return o&&o.__esModule?o:{default:o}}var v=/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,p=/\d+/i,f={narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},u={any:[/^д/i,/^н/i]},r={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},n={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i},G={narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^м/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^ма/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},y={narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i},l={narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},d={narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},h={any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},g={ordinalNumber:(0,t.default)({matchPattern:v,parsePattern:p,valueCallback:function(N){return parseInt(N,10)}}),era:(0,a.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:n,defaultParseWidth:"any",valueCallback:function(N){return N+1}}),month:(0,a.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"})},c=g;e.default=c,i.exports=e.default})(q,x);(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=f(b),t=f(P),s=f(w),v=f(M),p=f(x);function f(n){return n&&n.__esModule?n:{default:n}}var u={code:"be",formatDistance:a.default,formatLong:t.default,formatRelative:s.default,localize:v.default,match:p.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},r=u;e.default=r,i.exports=e.default})(C,_);const X=W(_),Q=S({__proto__:null,default:X},[_]);export{Q as i};
