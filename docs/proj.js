(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}}(r(0)),n=o(r(1)),i=o(r(50)),l=r(141);function o(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,d,b,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a.Component),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var n=this,e=this.props.children;if(!this.context.extract&&e){var t=a.default.createElement("div",{className:"react-head-temp"},e);i.default.render(t,this.temporaryElement,function(){var e=n.temporaryElement.innerHTML;if(n.lastChildStr!==e){n.lastChildStr=e;var t=Array.prototype.slice.call(n.temporaryElement.querySelector(".react-head-temp").children),a=document.head,r=a.innerHTML;(t=(t=t.filter(function(e){return-1===r.indexOf(e.outerHTML)})).map(function(e){return e.cloneNode(!0)})).forEach(function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,l.getDuplicateTitle)();r&&(0,l.removeChild)(a,r)}else if("meta"===t){var n=(0,l.getDuplicateMeta)(e);n&&(0,l.removeChild)(a,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,l.getDuplicateCanonical)(e);o&&(0,l.removeChild)(a,o)}}),(0,l.appendChild)(document.head,t)}})}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&c(r.prototype,n),o&&c(r,o),t}();y=m,d="contextTypes",b={extract:n.default.func},d in y?Object.defineProperty(y,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[d]=b;var h=m;t.default=h,e.exports=t.default},139:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(140)),o=i(r(138)),a=i(r(142));function i(e){return e&&e.__esModule?e:{default:e}}var l=o.default;t.default=l},140:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(0),o=(n=r(1))&&n.__esModule?n:{default:n};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,s,y,d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.Component),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&l(r.prototype,n),o&&l(r,o),t}();p=d,s="childContextTypes",y={extract:o.default.func},s in p?Object.defineProperty(p,s,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[s]=y;var b=d;t.default=b,e.exports=t.default},141:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var n=null,o=null,a=[],i=[];return e.forEach(function(e){var t=e.type,r=e.props;"title"===t?n=e:"link"===t&&"canonical"===r.rel?o=e:"meta"===t?a.push(e):i.push(e)}),[n].concat((t=function(r){var o={};u.forEach(function(e){o[e]=[]});for(var a=[],e=function(e){var n=r[e],t=n.props.id;(t?!o.id[t]:0===l.filter(function(e){var t=n.props[e],r=o[e][t];return r&&!r.props.id}).length)&&(a.unshift(n),u.forEach(function(e){var t=n.props[e];t&&(o[e][t]=n)}))},t=r.length-1;0<=t;t--)e(t);return a}(a),function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[o],i);var t},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(o){var a=document.head,e=o.id;if(e)return e&&a.querySelector("#".concat(e));return n.reduce(function(e,t){var r,n=o.getAttribute(t);return n?e.concat((r=a.querySelectorAll("[".concat(t,' = "').concat(n,'"]')),(r=Array.prototype.slice.call(r||[])).filter(function(e){return!e.id}))):e},[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],l=n.concat(["itemProp"]),u=l.concat(["id"])},142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}}(r(0)),n=o(r(1)),i=o(r(138));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s,y,d,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,f(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.Component),r=t,(n=[{key:"render",value:function(){return a.default.createElement(i.default,null,a.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,n),o&&u(r,o),t}();s=b,y="propTypes",d={title:n.default.string},y in s?Object.defineProperty(s,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[y]=d;var m=b;t.default=m,e.exports=t.default},226:function(e,t,r){e.exports={projectbox:"styles__projectbox___Yk793",tag:"styles__tag___1Kl8h",link:"styles__link___2SzNN",fb:"styles__fb___1_oHg",wrapper:"styles__wrapper___2fNee",banner:"styles__banner___28dZC",moving:"styles__moving___tLM2H",load:"styles__load___3Zb7G",loader:"styles__loader___3MDQQ",vimeowrapper:"styles__vimeowrapper___1aQeU",share:"styles__share___ayfTz",desc:"styles__desc___3yRdQ",location:"styles__location___2YDiV",artists:"styles__artists___1U5uW"}},233:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(226),i=r.n(o),l=r(49),u=r.n(l),c=r(139);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,y(r).call(this,e))).state={img:null},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,a.a.Component),t=r,(n=[{key:"componentDidMount",value:function(){this.props.change(this.props.work.color)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(c.ReactTitle,{title:"toplap > montreal > "+this.props.work.urlTitle.toLowerCase()}),"null"==this.props.work.bgvideo?a.a.createElement("div",{className:i.a.vimeowrapper,style:{backgroundImage:'url("'+this.props.work.banner[0].url+'")',opacity:.25,filter:"invert(100%) grayscale(100%)",zIndex:-1,backgroundPosition:"center"}}):a.a.createElement("div",{className:i.a.vimeowrapper},a.a.createElement("iframe",{src:"https://player.vimeo.com/video/"+this.props.work.bgvideo+"?background=1&muted=1&autoplay=1&loop=1&byline=0&title=0",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),"banner"in this.props?null==this.state.img?a.a.createElement("div",{className:i.a.load},a.a.createElement(u.a,{type:"bubbles",color:"#FFF",height:"15%",width:"15%",className:i.a.loader})):a.a.createElement("div",{className:i.a.wrapper},a.a.createElement("img",{alt:"",className:i.a.banner,src:this.state.img})):null,a.a.createElement("div",{className:i.a.projectbox},a.a.createElement("h3",null,this.props.work.date.split("T")[0]," /"," ",this.props.work.title.toUpperCase()),a.a.createElement("div",{className:i.a.tag},this.props.work.tags?this.props.work.tags.map(function(e,t){return a.a.createElement("span",{key:t},"#",e)}):null),a.a.createElement("p",{className:i.a.location},"null"!=this.props.work.facebook?a.a.createElement("a",{className:i.a.fb,href:this.props.work.facebook,target:"blank",rel:"nofollow"},a.a.createElement("img",{alt:"",src:"img/icons/facebook2.png"})):null," ","@",this.props.work.location," / ",this.props.work.start," /"," ",0==this.props.work.price?"free":this.props.work.price),a.a.createElement("div",{className:i.a.link},this.props.work.links?this.props.work.links.map(function(e,t){return a.a.createElement("a",{key:t,href:e.url,target:"blank",ref:"nofollow"},"> ",e.urlTitle)}):null),a.a.createElement("p",{className:i.a.desc},this.props.work.description)))}}])&&p(t.prototype,n),o&&p(t,o),r}();t.default=b}}]);
//# sourceMappingURL=proj.js.map