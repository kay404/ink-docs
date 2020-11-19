(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{106:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),u=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},h=function(t){var e=u(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),h=u(n),b=o,f=h["".concat(i,".").concat(b)]||h[b]||d[b]||a;return n?r.a.createElement(f,c(c({ref:e},l),{},{components:n})):r.a.createElement(f,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(106)),i={title:"Frequently Asked Questions",slug:"/faq",hide_table_of_contents:!0},c={unversionedId:"faq/intro",id:"faq/intro",isDocsHomePage:!1,title:"Frequently Asked Questions",description:'Is it "ink" or "ink!"? What does the "!" stand for?',source:"@site/docs/faq/intro.md",slug:"/faq",permalink:"/ink-docs/faq",editUrl:"https://github.com/ink-docs/edit/master/docs/faq/intro.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/canvas"}},s=[{value:"Is it &quot;ink&quot; or &quot;ink!&quot;? What does the &quot;!&quot; stand for?",id:"is-it-ink-or-ink-what-does-the--stand-for",children:[]},{value:"Who is &quot;Squink&quot;?",id:"who-is-squink",children:[]},{value:"What&#39;s ink!&#39;s relationship to Substrate/Polkadot?",id:"whats-inks-relationship-to-substratepolkadot",children:[]},{value:"How to do cross-contract calling?",id:"how-to-do-cross-contract-calling",children:[]},{value:"What is a contract&#39;s ABI or Metadata?",id:"what-is-a-contracts-abi-or-metadata",children:[]},{value:"Can a re-entrancy bug occur in ink! contracts?",id:"can-a-re-entrancy-bug-occur-in-ink-contracts",children:[]},{value:"What are chain-extensions?",id:"what-are-chain-extensions",children:[]},{value:"How can I use ink! with a Substrate chain with a custom chain config?",id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config",children:[]},{value:"What does the <code>#![cfg_attr(not(feature = &quot;std&quot;), no_std)]</code> at the beginning of each contract mean?",id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",children:[]},{value:"Overflow Safety?",id:"overflow-safety",children:[]},{value:"What is the difference between memory and storage?",id:"what-is-the-difference-between-memory-and-storage",children:[]},{value:"How do I print something to the console from the runtime? Is it possible to do <code>println!(&quot;{:?}&quot;, foo)</code>?",id:"how-do-i-print-something-to-the-console-from-the-runtime-is-it-possible-to-do-println-foo",children:[]}],l={rightToc:s};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"is-it-ink-or-ink-what-does-the--stand-for"},'Is it "ink" or "ink!"? What does the "!" stand for?'),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"who-is-squink"},'Who is "Squink"?'),Object(a.b)("div",{class:"squid-container"},Object(a.b)("img",{src:"./img/ink-squid.svg",alt:"Squink \u2012 the ink! mascot",class:"squid"}),"This is Squink",Object(a.b)("br",null),"todo",Object(a.b)("br",null),"todo"),Object(a.b)("h3",{id:"whats-inks-relationship-to-substratepolkadot"},"What's ink!'s relationship to Substrate/Polkadot?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"how-to-do-cross-contract-calling"},"How to do cross-contract calling?"),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/basics/cross-contract-calling"}),"Cross-contract calling")," section."),Object(a.b)("h3",{id:"what-is-a-contracts-abi-or-metadata"},"What is a contract's ABI or Metadata?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"can-a-re-entrancy-bug-occur-in-ink-contracts"},"Can a re-entrancy bug occur in ink! contracts?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"what-are-chain-extensions"},"What are chain-extensions?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config"},"How can I use ink! with a Substrate chain with a custom chain config?"),Object(a.b)("p",null,"Please see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_lang_macro/attr.contract.html#header-arguments"}),"the ",Object(a.b)("inlineCode",{parentName:"a"},"env_types")," argument"),"\nfor the contract macro. It allows you to specify your environment a la\n",Object(a.b)("inlineCode",{parentName:"p"},"#[ink::contract(env_types = MyEnvironment)]"),"."),Object(a.b)("h3",{id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean"},"What does the ",Object(a.b)("inlineCode",{parentName:"h3"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the beginning of each contract mean?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h3",{id:"overflow-safety"},"Overflow Safety?"),Object(a.b)("p",null,'Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/primitive.u32.html"}),"integrated checked, wrapped, and saturated math functions"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future.")),Object(a.b)("h3",{id:"what-is-the-difference-between-memory-and-storage"},"What is the difference between memory and storage?"),Object(a.b)("p",null,"In ink!, memory refers to computer memory, while storage refers to the on-chain storage\nused by a contract instance. Memory is temporary and only lasts until the contract\nexecution is done, while storage is persistent and lasts over many contract executions.\nThe contract storage is built on top of the runtime storage, and access is considered to be slow."),Object(a.b)("h3",{id:"how-do-i-print-something-to-the-console-from-the-runtime-is-it-possible-to-do-println-foo"},"How do I print something to the console from the runtime? Is it possible to do ",Object(a.b)("inlineCode",{parentName:"h3"},'println!("{:?}", foo)'),"?"),Object(a.b)("p",null,"TODO"))}u.isMDXComponent=!0}}]);