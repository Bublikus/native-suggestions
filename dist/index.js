!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(self,(function(){return(()=>{"use strict";var t={139:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){var e=localStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}}function o(t,e){if(void 0===t){for(var n={},o=0,a=Object.keys(localStorage);o<a.length;o++){var s=a[o];n[s]=i(s)}return n}return void 0===e?i(t):(function(t,e){"object"===r(e)?localStorage.setItem(t,JSON.stringify(e)):localStorage.setItem(t,e)}(t,e),e)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,{default:()=>g});var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=null,this.element=e}var e,n;return e=t,(n=[{key:"onChange",value:function(t){var e=this;return this.element.addEventListener("change",t),this.onRemove((function(){return e.element.removeEventListener("change",t)})),this}},{key:"onFocus",value:function(t){var e=this;return this.element.addEventListener("focus",t),this.onRemove((function(){return e.element.removeEventListener("focus",t)})),this}},{key:"onRemove",value:function(t){var e=this,n=new MutationObserver((function(r){r.forEach((function(r){r.removedNodes.forEach((function(r){e._isDescendant(e.element,r)&&(t(),n.disconnect(),n=void 0)}))}))}));return n.observe(document,{childList:!0,subtree:!0}),this}},{key:"_isDescendant",value:function(t,e){return!!t&&(t===e||this._isDescendant(t.parentNode,e))}}])&&a(e.prototype,n),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const l=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"getValueFromEvent",value:function(t){var e,n;return null!==(e=null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&void 0!==e?e:""}},{key:"castArray",value:function(t){return Array.isArray(t)?t:[]}},{key:"isObject",value:function(t){return"object"===u(t)&&!Array.isArray(t)&&null!==t}}])&&c(e.prototype,n),t}());function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config={storageKey:"native-suggestions",folder:"other",inputKey:null,listLength:10,saveLength:10,mobileOnly:!0,addOnInput:!0,inputTypes:["text","number","search","email","tel"]},this.store=null,this.input=null,this.datalist=null,e instanceof HTMLInputElement?this.config.inputTypes.includes(e.type)&&(this.init(e,n),this.config.inputKey?(this.retrieveStorage(),this.config.addOnInput&&this.setupListeners(),this.updateDatalist()):console.warn('An input has no identification attribute. Use "name" for input or provide own "key".',e)):console.warn("Element must be an input.",e)}var e,n;return e=t,(n=[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.input=t;var n=v(v({},this.config),e);n.inputKey=e.inputKey||(t.name&&t.name===t.id?"".concat(t.name,"_").concat(t.id):t.name),n.folder=e.folder||this.config.folder,this.config=n}},{key:"retrieveStorage",value:function(){var t=o(this.config.storageKey);this.store=l.isObject(t)?t:{}}},{key:"setupListeners",value:function(){var t=new s(this.input);t.onChange(this.onInputChange.bind(this)),t.onFocus(this.updateDatalist.bind(this))}},{key:"onInputChange",value:function(t){var e=l.getValueFromEvent(t);e&&(this.addValueToStore(e),this.updateDatalist())}},{key:"addValueToStore",value:function(t){this.retrieveStorage();var e=this.list.filter((function(e){return(null==e?void 0:e.trim())!==(null==t?void 0:t.trim())}));e.unshift(t),this.store[this.config.folder]=this.store[this.config.folder]||{},this.store[this.config.folder][this.config.inputKey]=e.slice(0,this.config.saveLength),o(this.config.storageKey,this.store)}},{key:"updateDatalist",value:function(){if(!this.config.mobileOnly||this.isMobile){this.retrieveStorage();var t="".concat(this.config.folder,".").concat(this.config.inputKey);this.input.setAttribute("list",t),this.input.setAttribute("autocomplete","on");var e=!!this.datalist;this.datalist=this.datalist||document.createElement("datalist"),this.datalist.id=t,!e&&this.input.after(this.datalist),this.datalist.innerHTML=this.options}}},{key:"isMobile",get:function(){return window.innerWidth<=768}},{key:"list",get:function(){var t,e;return l.castArray(null===(t=this.store)||void 0===t||null===(e=t[this.config.folder])||void 0===e?void 0:e[this.config.inputKey])}},{key:"options",get:function(){return this.list.slice(0,this.config.listLength).map((function(t){return'<option value="'.concat(t,'">').concat(t,"</option>")})).join("")}}])&&d(e.prototype,n),t}();g.setStore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.storageKey||"native-suggestions",r=e.folder||"other";if(l.isObject(t)){var i=o(n)||{};i[r]=p(p({},i[r]),t),o(n,i)}}}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}return n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(139)})().default}));