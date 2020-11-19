(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(106)),o={title:"Environment Functions",slug:"/basics/environment-functions"},c={unversionedId:"basics/env-functions",id:"basics/env-functions",isDocsHomePage:!1,title:"Environment Functions",description:"ink! exposes a number of handy environment functions.",source:"@site/docs/basics/env-functions.md",slug:"/basics/environment-functions",permalink:"/ink-docs/basics/environment-functions",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/env-functions.md",version:"current",sidebar:"reference",previous:{title:"Contract Testing",permalink:"/ink-docs/basics/contract-testing"},next:{title:"Cargo.toml",permalink:"/ink-docs/basics/cargo-toml"}},l=[],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ink! exposes a number of handy environment functions."),Object(i.b)("p",null,"In an ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"  use ",Object(i.b)("inlineCode",{parentName:"p"},"Self::env()")," to access those,\nin an ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," use ",Object(i.b)("inlineCode",{parentName:"p"},"self.env()"),".\nSo e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Self::env().caller()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"self.env().caller()"),"."),Object(i.b)("p",null,"Some handy functions include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"caller()"),": Returns the address of the caller of the executed contract. An example\nof how to utilize this particular call is ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/datastructures/hashmap#contract-caller"}),"found here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"account_id()"),": Returns the account ID of the executed contract."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"balance()"),": Returns the balance of the executed contract."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"block_number()"),": Returns the current block number."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"random()"),": Returns a random hash seed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"emit_event(\u2026)"),": Emits an event with the given event data."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"transfer(\u2026)"),": Transfers value from the contract to the destination account ID."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hash_bytes(\u2026)"),": Conducts the crypto hash of the given input and stores the result in output."),Object(i.b)("li",{parentName:"ul"},"\u2026and many more \u2012 ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_env/#functions"}),"see here for a complete list"),".")))}u.isMDXComponent=!0},106:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);