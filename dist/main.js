!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.nativeSuggestions=e():t.nativeSuggestions=e()}(self,(function(){return(()=>{"use strict";var t={701:(t,e,n)=>{function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){var e=localStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}}function r(t,e){if(void 0===t){for(var n={},r=0,s=Object.keys(localStorage);r<s.length;r++){var u=s[r];n[u]=o(u)}return n}return void 0===e?o(t):(function(t,e){"object"===i(e)?localStorage.setItem(t,JSON.stringify(e)):localStorage.setItem(t,e)}(t,e),e)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config={storageKey:"native-suggestions",folder:"all",inputKey:null,listLength:10,saveLength:10,mobileOnly:!0,inputTypes:["text","number","search","email","tel"]},this.store=null,this.input=null,this.datalist=null,e instanceof HTMLInputElement?this.config.inputTypes.includes(e.type)&&(this.init(e,n),this.config.inputKey?(this.retrieveStorage(),this.setupListeners(),this.updateDatalist()):console.warn('An input has no identification attribute. Use "name" for input or provide own "key".',e)):console.warn("Element must be an input.",e)}var e,n;return e=t,(n=[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.input=t;var n=a(a({},this.config),e);n.inputKey=e.inputKey||(t.name&&t.name===t.id?"".concat(t.name,"_").concat(t.id):t.name),n.folder=e.folder||this.config.folder,this.config=n}},{key:"retrieveStorage",value:function(){var t=r(this.config.storageKey);this.store=this.isObject(t)?t:{}}},{key:"onInputChange",value:function(t){var e=this.getValueFromEvent(t);e&&(this.addValueToStore(e),this.updateDatalist())}},{key:"updateDatalist",value:function(){if(!this.config.mobileOnly||this.isMobile){var t="".concat(this.config.folder,".").concat(this.config.inputKey);this.input.setAttribute("list",t),this.input.setAttribute("autocomplete","on");var e=!!this.datalist;this.datalist=this.datalist||document.createElement("datalist"),this.datalist.id=t,!e&&this.input.after(this.datalist),this.datalist.innerHTML=this.options}}},{key:"addValueToStore",value:function(t){this.retrieveStorage();var e=this.list.filter((function(e){return(null==e?void 0:e.trim())!==(null==t?void 0:t.trim())}));e.unshift(t),this.store[this.config.folder]=this.store[this.config.folder]||{},this.store[this.config.folder][this.config.inputKey]=e.slice(0,this.config.saveLength),r(this.config.storageKey,this.store)}},{key:"setupListeners",value:function(){var t=this;this.input.addEventListener("change",this.onInputChange.bind(this)),this.input.addEventListener("DOMNodeRemoved",(function(){t.input.removeEventListener("change",t.onInputChange.bind(t))}),!1),this.input.addEventListener("DOMNodeRemovedFromDocument",(function(){t.input.removeEventListener("change",t.onInputChange.bind(t))}),!1)}},{key:"getValueFromEvent",value:function(t){var e,n;return null!==(e=null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&void 0!==e?e:""}},{key:"castArray",value:function(t){return Array.isArray(t)?t:[]}},{key:"isObject",value:function(t){return"object"===s(t)&&!Array.isArray(t)&&null!==t}},{key:"isMobile",get:function(){return window.innerWidth<=768}},{key:"list",get:function(){var t,e;return this.castArray(null===(t=this.store)||void 0===t||null===(e=t[this.config.folder])||void 0===e?void 0:e[this.config.inputKey])}},{key:"options",get:function(){return this.list.slice(0,this.config.listLength).map((function(t){return'<option value="'.concat(t,'">').concat(t,"</option>")})).join("")}}])&&c(e.prototype,n),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("form"),e=Array.from(t.querySelectorAll("input"));console.log(e),e.forEach((function(t,e){return new f(t,{folder:e?null:"personal"})}))}))}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}return n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(701)})()}));