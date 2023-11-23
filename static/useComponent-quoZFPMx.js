import{v as se,x as de,c as J}from"./index-CtRE8YnM.js";function _(r){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(r)}function C(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function f(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function w(r){f(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||_(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function le(r,t){f(2,arguments);var e=w(r).getTime(),a=C(t);return new Date(e+a)}var ce={};function $(){return ce}function Q(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function X(r){f(1,arguments);var t=w(r);return t.setHours(0,0,0,0),t}var fe=864e5;function me(r,t){f(2,arguments);var e=X(r),a=X(t),n=e.getTime()-Q(e),i=a.getTime()-Q(a);return Math.round((n-i)/fe)}var he=6e4,ve=36e5;function ge(r){return f(1,arguments),r instanceof Date||_(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function we(r){if(f(1,arguments),!ge(r)&&typeof r!="number")return!1;var t=w(r);return!isNaN(Number(t))}function z(r,t){return f(2,arguments),w(r).getTime()-w(t).getTime()}var B={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},be="trunc";function K(r){return r?B[r]:B[be]}function ye(r,t,e){f(2,arguments);var a=z(r,t)/ve;return K(e==null?void 0:e.roundingMethod)(a)}function Te(r,t,e){f(2,arguments);var a=z(r,t)/he;return K(e==null?void 0:e.roundingMethod)(a)}function pe(r,t){f(2,arguments);var e=C(t);return le(r,-e)}var Me=864e5;function Ce(r){f(1,arguments);var t=w(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/Me)+1}function E(r){f(1,arguments);var t=1,e=w(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function Z(r){f(1,arguments);var t=w(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=E(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function De(r){f(1,arguments);var t=Z(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=E(e);return a}var Oe=6048e5;function Pe(r){f(1,arguments);var t=w(r),e=E(t).getTime()-De(t).getTime();return Math.round(e/Oe)+1}function N(r,t){var e,a,n,i,o,s,l,d;f(1,arguments);var m=$(),c=C((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:m.weekStartsOn)!==null&&a!==void 0?a:(l=m.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=w(r),h=v.getUTCDay(),b=(h<c?7:0)+h-c;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function ee(r,t){var e,a,n,i,o,s,l,d;f(1,arguments);var m=w(r),c=m.getUTCFullYear(),v=$(),h=C((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&a!==void 0?a:(l=v.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(c+1,0,h),b.setUTCHours(0,0,0,0);var O=N(b,t),p=new Date(0);p.setUTCFullYear(c,0,h),p.setUTCHours(0,0,0,0);var P=N(p,t);return m.getTime()>=O.getTime()?c+1:m.getTime()>=P.getTime()?c:c-1}function Se(r,t){var e,a,n,i,o,s,l,d;f(1,arguments);var m=$(),c=C((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&a!==void 0?a:(l=m.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=ee(r,t),h=new Date(0);h.setUTCFullYear(v,0,c),h.setUTCHours(0,0,0,0);var b=N(h,t);return b}var ke=6048e5;function We(r,t){f(1,arguments);var e=w(r),a=N(e,t).getTime()-Se(e,t).getTime();return Math.round(a/ke)+1}function u(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var xe={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return u(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):u(a+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return u(i,e.length)}};const T=xe;var D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ue={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,a,n){var i=ee(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var a=Z(t);return u(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return u(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=We(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,a){var n=Pe(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,a){var n=Ce(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=D.noon:n===0?i=D.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=D.evening:n>=12?i=D.afternoon:n>=4?i=D.morning:i=D.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return T.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return G(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return G(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+A(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+A(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return u(o,e.length)}};function A(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function G(r,t){if(r%60===0){var e=r>0?"-":"+";return e+u(Math.abs(r)/60,2)}return M(r,t)}function M(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=u(Math.floor(n/60),2),o=u(n%60,2);return a+i+e+o}const Ye=Ue;var j=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},te=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},_e=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return j(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",j(n,e)).replace("{{time}}",te(i,e))},Ee={p:te,P:_e};const Ne=Ee;var $e=["D","DD"],Fe=["YY","YYYY"];function Le(r){return $e.indexOf(r)!==-1}function qe(r){return Fe.indexOf(r)!==-1}function V(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var He={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Re=function(t,e,a){var n,i=He[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const Ie=Re;function I(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var Qe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Be={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ae={date:I({formats:Qe,defaultWidth:"full"}),time:I({formats:Xe,defaultWidth:"full"}),dateTime:I({formats:Be,defaultWidth:"full"})};const Ge=Ae;var je={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ve=function(t,e,a,n){return je[t]};const Je=Ve;function W(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,l=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[l]||r.values[s]}var d=r.argumentCallback?r.argumentCallback(t):t;return n[d]}}var ze={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ke={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},et={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},tt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},at=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},nt={ordinalNumber:at,era:W({values:ze,defaultWidth:"wide"}),quarter:W({values:Ke,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:W({values:Ze,defaultWidth:"wide"}),day:W({values:et,defaultWidth:"wide"}),dayPeriod:W({values:tt,defaultWidth:"wide",formattingValues:rt,defaultFormattingWidth:"wide"})};const it=nt;function x(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?ut(s,function(c){return c.test(o)}):ot(s,function(c){return c.test(o)}),d;d=r.valueCallback?r.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var m=t.slice(o.length);return{value:d,rest:m}}}function ot(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function ut(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function st(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var dt=/^(\d+)(th|st|nd|rd)?/i,lt=/\d+/i,ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ft={any:[/^b/i,/^(a|c)/i]},mt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ht={any:[/1/i,/2/i,/3/i,/4/i]},vt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},gt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pt={ordinalNumber:st({matchPattern:dt,parsePattern:lt,valueCallback:function(t){return parseInt(t,10)}}),era:x({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:x({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:x({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),day:x({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:yt,defaultMatchWidth:"any",parsePatterns:Tt,defaultParseWidth:"any"})};const Mt=pt;var Ct={code:"en-US",formatDistance:Ie,formatLong:Ge,formatRelative:Je,localize:it,match:Mt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Dt=Ct;var Ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,St=/^'([^]*?)'?$/,kt=/''/g,Wt=/[a-zA-Z]/;function re(r,t,e){var a,n,i,o,s,l,d,m,c,v,h,b,O,p,P,F,L,q;f(2,arguments);var ae=String(t),S=$(),k=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:S.locale)!==null&&a!==void 0?a:Dt,H=C((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(m=d.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&o!==void 0?o:(c=S.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=C((h=(b=(O=(p=e==null?void 0:e.weekStartsOn)!==null&&p!==void 0?p:e==null||(P=e.locale)===null||P===void 0||(F=P.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&O!==void 0?O:S.weekStartsOn)!==null&&b!==void 0?b:(L=S.locale)===null||L===void 0||(q=L.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&h!==void 0?h:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var U=w(r);if(!we(U))throw new RangeError("Invalid time value");var ne=Q(U),ie=pe(U,ne),oe={firstWeekContainsDate:H,weekStartsOn:R,locale:k,_originalDate:U},ue=ae.match(Pt).map(function(g){var y=g[0];if(y==="p"||y==="P"){var Y=Ne[y];return Y(g,k.formatLong)}return g}).join("").match(Ot).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return xt(g);var Y=Ye[y];if(Y)return!(e!=null&&e.useAdditionalWeekYearTokens)&&qe(g)&&V(g,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Le(g)&&V(g,t,String(r)),Y(ie,g,k.localize,oe);if(y.match(Wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return ue}function xt(r){var t=r.match(St);return t?t[1].replace(kt,"'"):r}function Ut(r,t){if(!r)return"";const e=typeof r=="number"?r*1e3:r;return re(e,t||"yyyy-MM-dd HH:mm:ss")}function Yt(r){let t="";if(!r)return t;const e=me(new Date,r*1e3);if(e>=7)t=re(r*1e3,"MM-dd");else if(e>0&&e<7)t=`${e}天前`;else if(e===0){const a=ye(new Date,r*1e3);if(a>0)t=`${a}小时前`;else if(a===0){const n=Te(new Date,r*1e3);t=`${n}分钟前`,n===0&&(t="刚刚")}}return t}function _t(r){document.body.classList.add(r)}function Et(r){document.body.classList.remove(r)}function $t(r){se(()=>_t(r)),de(()=>Et(r))}function Ft(r){return J(()=>Yt(r))}function Lt(r,t=""){return J(()=>Ut(r,t))}export{$t as a,Lt as b,Ft as u};
