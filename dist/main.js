!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.nativeSuggestions=t():e.nativeSuggestions=t()}(self,(function(){return(()=>{"use strict";var e={139:(e,t,n)=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}function i(e,t){if(void 0===e){for(var n={},i=0,a=Object.keys(localStorage);i<a.length;i++){var u=a[i];n[u]=r(u)}return n}return void 0===t?r(e):(function(e,t){"object"===o(t)?localStorage.setItem(e,JSON.stringify(t)):localStorage.setItem(e,t)}(e,t),t)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,{default:()=>g});var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=null,this.element=t}var t,n;return t=e,(n=[{key:"onChange",value:function(e){var t=this;return this.element.addEventListener("change",e),this.onRemove((function(){return t.element.removeEventListener("change",e)})),this}},{key:"onRemove",value:function(e){var t=this,n=new MutationObserver((function(o){o.forEach((function(o){o.removedNodes.forEach((function(o){t._isDescendant(t.element,o)&&(e(),n.disconnect(),n=void 0)}))}))}));return n.observe(document,{childList:!0,subtree:!0}),this}},{key:"_isDescendant",value:function(e,t){return!!e&&(e===t||this._isDescendant(e.parentNode,t))}}])&&a(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const l=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getValueFromEvent",value:function(e){var t,n;return null!==(t=null==e||null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==t?t:""}},{key:"castArray",value:function(e){return Array.isArray(e)?e:[]}},{key:"isObject",value:function(e){return"object"===s(e)&&!Array.isArray(e)&&null!==e}}])&&c(t.prototype,n),e}());function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={storageKey:"native-suggestions",folder:"other",inputKey:null,listLength:10,saveLength:10,mobileOnly:!0,addOnInput:!0,inputTypes:["text","number","search","email","tel"]},this.store=null,this.input=null,this.datalist=null,t instanceof HTMLInputElement?this.config.inputTypes.includes(t.type)&&(this.init(t,n),this.config.inputKey?(this.retrieveStorage(),this.config.addOnInput&&this.setupListeners(),this.updateDatalist()):console.warn('An input has no identification attribute. Use "name" for input or provide own "key".',t)):console.warn("Element must be an input.",t)}var t,n;return t=e,(n=[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.input=e;var n=h(h({},this.config),t);n.inputKey=t.inputKey||(e.name&&e.name===e.id?"".concat(e.name,"_").concat(e.id):e.name),n.folder=t.folder||this.config.folder,this.config=n}},{key:"retrieveStorage",value:function(){var e=i(this.config.storageKey);this.store=l.isObject(e)?e:{}}},{key:"setupListeners",value:function(){new u(this.input).onChange(this.onInputChange.bind(this))}},{key:"onInputChange",value:function(e){var t=l.getValueFromEvent(e);t&&(this.addValueToStore(t),this.updateDatalist())}},{key:"addValueToStore",value:function(e){this.retrieveStorage();var t=this.list.filter((function(t){return(null==t?void 0:t.trim())!==(null==e?void 0:e.trim())}));t.unshift(e),this.store[this.config.folder]=this.store[this.config.folder]||{},this.store[this.config.folder][this.config.inputKey]=t.slice(0,this.config.saveLength),i(this.config.storageKey,this.store)}},{key:"updateDatalist",value:function(){if(!this.config.mobileOnly||this.isMobile){var e="".concat(this.config.folder,".").concat(this.config.inputKey);this.input.setAttribute("list",e),this.input.setAttribute("autocomplete","on");var t=!!this.datalist;this.datalist=this.datalist||document.createElement("datalist"),this.datalist.id=e,!t&&this.input.after(this.datalist),this.datalist.innerHTML=this.options}}},{key:"isMobile",get:function(){return window.innerWidth<=768}},{key:"list",get:function(){var e,t;return l.castArray(null===(e=this.store)||void 0===e||null===(t=e[this.config.folder])||void 0===t?void 0:t[this.config.inputKey])}},{key:"options",get:function(){return this.list.slice(0,this.config.listLength).map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")})).join("")}}])&&b(t.prototype,n),e}();g.setStore=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.storageKey||"native-suggestions",o=t.folder||"other";if(l.isObject(e)){var r=i(n)||{};r[o]=p(p({},r[o]),e),i(n,r)}}},880:(e,t,n)=>{n.r(t);var o=n(139);document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("form"),t=e.querySelectorAll("input");o.default.setStore({inp_1:["my value","second one"]},{folder:"personal"}),o.default.setStore({inp_2:["my value","second one"]}),t.forEach((function(e,t){return new o.default(e,{folder:t?null:"personal"})})),document.getElementById("btn").addEventListener("click",(function(){return e.remove()}))}))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(880)})()}));