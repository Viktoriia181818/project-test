/*! For license information please see 797.e50f0946.chunk.js.LICENSE.txt */
(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[797],{6399:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.HandySvg=void 0;var u=i(n(2791)),c=n(4819);t.HandySvg=function(e){var t=e.src,n=e.loadTimeot,r=e.loadRetryCount,o=a(e,["src","loadTimeot","loadRetryCount"]),i=(0,u.useRef)(!0);return(0,u.useEffect)((function(){if(i.current)return c.injector.load(t,{timeout:n,retryCount:r}),void(i.current=!1);c.injector.load(t,{timeout:n,retryCount:r,flushImmediate:!0})}),[t]),u.default.createElement("svg",Object.assign({},o),u.default.createElement("use",{href:"#".concat(c.injector.getId(t))}))}},4643:function(e,t,n){"use strict";var r=n(4687),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSvg=void 0;var i=n(6501);t.fetchSvg=function(e,t){var n=void 0===(null===t||void 0===t?void 0:t.retryCount)?2:null===t||void 0===t?void 0:t.retryCount;return function e(t,i){return function(e,t){return o(this,void 0,void 0,r.mark((function n(){var o,i,a;return r.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(null===t||void 0===t?void 0:t.timeout)||4800,i=new AbortController,a=setTimeout((function(){return i.abort()}),o),n.abrupt("return",fetch(e,Object.assign(Object.assign({},t),{signal:i.signal})).then((function(e){return clearTimeout(a),e})).catch((function(e){throw clearTimeout(a),e})));case 4:case"end":return n.stop()}}),n)})))}(t,i).then((function(e){if(e.ok)return e.text();throw new Error("Unable to load SVG file: ".concat(t))})).catch((function(r){if(n>0)return n--,e(t,i);throw r}))}(e,t).then((function(e){return(0,i.checkSvgContent)(e),e}))}},4819:function(e,t,n){"use strict";var r=n(4687),o=n(6690).default,i=n(9728).default,a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.injector=void 0;var c=u(n(5095)),s=n(4643),f=n(6501),l="http://www.w3.org/2000/svg",d=function(){function e(){var t=this;o(this,e),this.fragment=null,this.cache=new Set,this.accumulateSvg=function(e){var n=e.url,r=e.svgString,o=t.getId(n),i=t.svgToSymbol({id:o,svgString:r});t.fragment=t.fragment||document.createDocumentFragment(),t.fragment.append(i)},this.flushSvg=function(){var e=t.getSymbolMountPoint();t.fragment&&(e.appendChild(t.fragment),t.fragment=null)},this.deboucedflushSvg=(0,c.default)(this.flushSvg,20)}return i(e,[{key:"parseSvgString",value:function(e){return(new DOMParser).parseFromString(e,"image/svg+xml").children[0]}},{key:"svgToSymbol",value:function(e){var t=e.id,n=e.svgString,r=this.parseSvgString(n),o=r.getAttribute("viewBox"),i=document.createElementNS(l,"symbol");return o&&i.setAttributeNS(null,"viewBox",o),i.setAttributeNS(null,"id",t),i.innerHTML=r.innerHTML,i}},{key:"getSymbolMountPoint",value:function(){if(!this.symbolsMountingPoint){var e=document.createElementNS(l,"svg");this.symbolsMountingPoint=e,e.ariaHidden="true",e.style.width="0",e.style.height="0",e.style.overflow="hidden",document.body.appendChild(e)}return this.symbolsMountingPoint}},{key:"getId",value:function(e){return(0,f.extractFileName)(e)}},{key:"load",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.flushImmediate,o=t.timeout,i=t.retryCount;return a(this,void 0,void 0,r.mark((function t(){var a=this;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.cache.has(e)){t.next=2;break}return t.abrupt("return");case 2:return this.cache.add(e),t.abrupt("return",(0,s.fetchSvg)(e,{timeout:o,retryCount:i}).then((function(t){a.accumulateSvg({url:e,svgString:t}),n?a.flushSvg():a.deboucedflushSvg()})).catch((function(t){throw a.cache.delete(e),t})));case 4:case"end":return t.stop()}}),t,this)})))}}]),e}();t.injector=new d},6501:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSvgContent=t.extractFileName=void 0,t.extractFileName=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=/([0-9a-zA-z\-_.]+)\.svg$/i,n=e.match(t);if(!n)throw new Error("svg url does not match pattern");return n[1]},t.checkSvgContent=function(e){var t=["javascript","onload","onerror","iframe","script"].join("|");if(new RegExp(t,"gim").test(e))throw new Error("Possible XSS attack")}},5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=c||s||Function("return this")(),l=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return f.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,a,u,c,s=0,f=!1,l=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function g(e){return s=e,u=setTimeout(x,t),f?b(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||l&&e-s>=i}function x(){var e=y();if(j(e))return w(e);u=setTimeout(x,function(e){var n=t-(e-c);return l?p(n,i-(e-s)):n}(e))}function w(e){return u=void 0,h&&r?b(e):(r=o=void 0,a)}function O(){var e=y(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return g(c);if(l)return u=setTimeout(x,t),b(c)}return void 0===u&&(u=setTimeout(x,t)),a}return t=v(t)||0,m(n)&&(f=!!n.leading,i=(l="maxWait"in n)?d(v(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=o=u=void 0},O.flush=function(){return void 0===u?a:w(y())},O}},4805:function(e,t,n){var r;r=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return u(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=f(o),i=f(i);break;case"resolution":o=s(o),i=s(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=u;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function u(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],u=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=a?a.toLowerCase():"all",u=u.match(/\([^\)]+\)/g)||[],c.expressions=u.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function s(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function f(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}var u=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,n){"use strict";var r=n("./node_modules/css-mediaquery/index.js").match,o="undefined"!==typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(u)}else this.matches=r(e,t),this.media=e;function u(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(u)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))n.call(a,f)&&(c[f]=a[f]);if(t){u=t(a);for(var l=0;l<u.length;l++)r.call(a,u[l])&&(c[u[l]]=a[u[l]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,n){"use strict";var r=function(){},o=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n("./node_modules/prop-types/lib/has.js");function u(e,t,n,u,c){for(var s in e)if(a(e,s)){var f;try{if("function"!==typeof e[s]){var l=Error((u||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}f=e[s](t,s,u,n,null,o)}catch(p){f=p}if(!f||f instanceof Error||r((u||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+f.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},u.resetWarningCache=function(){i={}},e.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,n){"use strict";var r=n("./node_modules/react-is/index.js"),o=n("./node_modules/object-assign/index.js"),i=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=n("./node_modules/prop-types/lib/has.js"),u=n("./node_modules/prop-types/checkPropTypes.js"),c=function(){};function s(){return null}c=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){var n="function"===typeof Symbol&&Symbol.iterator,f="<<anonymous>>",l={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(s),arrayOf:function(e){return y((function(t,n,r,o,a){if("function"!==typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new p("Invalid "+o+" `"+a+"` of type `"+b(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,r,o,a+"["+c+"]",i);if(s instanceof Error)return s}return null}))},element:y((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(e,t,n,o,i){var a=e[t];return r.isValidElementType(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||f;return new p("Invalid "+o+" `"+i+"` of type `"+((u=t[n]).constructor&&u.constructor.name?u.constructor.name:f)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var u;return null}))},node:y((function(e,t,n,r,o){return h(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,u){if("function"!==typeof e)return new p("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=b(c);if("object"!==s)return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var f in c)if(a(c,f)){var l=e(c,f,r,o,u+"."+f,i);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s;function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(d(a,e[u]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")}return y(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!==typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(n)+" at index "+t+"."),s}return y((function(t,n,r,o,u){for(var c=[],s=0;s<e.length;s++){var f=(0,e[s])(t,n,r,o,u,i);if(null==f)return null;f.data&&a(f.data,"expectedType")&&c.push(f.data.expectedType)}return new p("Invalid "+o+" `"+u+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,n,r,o,a){var u=t[n],c=b(u);if("object"!==c)return new p("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if("function"!==typeof f)return v(r,o,a,s,g(f));var l=f(u,s,r,o,a+"."+s,i);if(l)return l}return null}))},exact:function(e){return y((function(t,n,r,u,c){var s=t[n],f=b(s);if("object"!==f)return new p("Invalid "+u+" `"+c+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var d in l){var y=e[d];if(a(e,d)&&"function"!==typeof y)return v(r,u,c,d,g(y));if(!y)return new p("Invalid "+u+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(s,d,r,u,c+"."+d,i);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function p(e,t){this.message=e,this.data=t&&"object"===typeof t?t:{},this.stack=""}function y(e){var n={},r=0;function o(o,a,u,s,l,d,y){if(s=s||f,d=d||u,y!==i){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!==typeof console){var v=s+":"+u;!n[v]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null==a[u]?o?null===a[u]?new p("The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`."):new p("The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,u,s,l,d)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return y((function(t,n,r,o,i,a){var u=t[n];return b(u)!==e?new p("Invalid "+o+" `"+i+"` of type `"+g(u)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!h(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!h(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,l.checkPropTypes=u,l.resetWarningCache=u.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":function(e,t,n){var r=n("./node_modules/react-is/index.js");e.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"===typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case f:case o:case a:case i:case d:return p;default:var v=p&&p.$$typeof;switch(v){case c:case l:case m:case y:case u:return v;default:return t}}case r:return t}}}var x=s,w=f,O=c,_=u,S=n,P=l,T=o,C=m,E=y,M=r,k=a,I=i,R=d,$=!1;function A(e){return j(e)===f}t.AsyncMode=x,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=_,t.Element=S,t.ForwardRef=P,t.Fragment=T,t.Lazy=C,t.Memo=E,t.Portal=M,t.Profiler=k,t.StrictMode=I,t.Suspense=R,t.isAsyncMode=function(e){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||j(e)===s},t.isConcurrentMode=A,t.isContextConsumer=function(e){return j(e)===c},t.isContextProvider=function(e){return j(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===l},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===y},t.isPortal=function(e){return j(e)===r},t.isProfiler=function(e){return j(e)===a},t.isStrictMode=function(e){return j(e)===i},t.isSuspense=function(e){return j(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===a||e===i||e===d||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},t.typeOf=j}()},"./node_modules/react-is/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:function(){return o},shallowEqualObjects:function(){return r}})},"./src/Component.ts":function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),u=(0,i.default)(a,n,o);return"function"===typeof t?t(u):u?t:null}},"./src/Context.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n("react").createContext)(void 0);t.default=r},"./src/index.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n("./src/Component.ts"));t.default=i.default;var a=r(n("./src/toQuery.ts"));t.toQuery=a.default;var u=r(n("./src/Context.ts"));t.Context=u.default},"./src/mediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("./node_modules/prop-types/index.js")),u=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},s={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:u,type:Object.keys(c)},f=o(s,["type"]),l=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:u,maxResolution:u},f),d=r(r({},c),l);t.default={all:d,types:c,matchers:s,features:l}},"./src/toQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("./node_modules/hyphenate-style-name/index.js")),i=r(n("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n("react"),i=r(n("./node_modules/matchmediaquery/index.js")),a=r(n("./node_modules/hyphenate-style-name/index.js")),u=n("./node_modules/shallow-equal/dist/index.esm.js"),c=r(n("./src/toQuery.ts")),s=r(n("./src/Context.ts")),f=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},l=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(s.default),n=function(){return f(e)||f(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,u.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=d(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],u=r[1],c=l();return(0,o.useEffect)((function(){if(c){var e=n();return u(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),y=l();return(0,o.useEffect)((function(){y&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")}()},e.exports=r(n(2791))},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,n){var r=n(4062);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=797.e50f0946.chunk.js.map