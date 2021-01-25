(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),i=(t(0),t(109)),o={title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension"},s={unversionedId:"macros-attributes/chain-extension",id:"macros-attributes/chain-extension",isDocsHomePage:!1,title:"#[ink::chain_extension]",description:"In the default configuration of the contracts-pallet a smart contract can only interact with the runtime",source:"@site/docs/macros-attributes/chain-extension.md",slug:"/macros-attributes/chain-extension",permalink:"/ink-docs/macros-attributes/chain-extension",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/chain-extension.md",version:"current",sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/ink-docs/macros-attributes/topic"},next:{title:"Overview",permalink:"/ink-docs/datastructures/custom"}},c=[{value:"Structure",id:"structure",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Details: <code>handle_status</code>",id:"details-handle_status",children:[]},{value:"Details: <code>returns_result</code>",id:"details-returns_result",children:[]},{value:"Usage: <code>handle_status</code> + <code>returns_result</code>",id:"usage-handle_status--returns_result",children:[]},{value:"Combinations",id:"combinations",children:[]},{value:"Error Code",id:"error-code",children:[]},{value:"Example: Definition",id:"example-definition",children:[]},{value:"Example: Environment",id:"example-environment",children:[]},{value:"Example: Usage",id:"example-usage",children:[]},{value:"Technical Limitations",id:"technical-limitations",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the default configuration of the ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet")," a smart contract can only interact with the runtime\nvia its well defined set of basic smart contract interface. This API already allows a whole variety of\ninteraction between the ",Object(i.b)("inlineCode",{parentName:"p"},"contracts-pallet")," and the executed smart contract. For example it is possible\nto call and instantiate other smart contracts on the same chain, emit events, query context information\nor run built-in cryptographic hashing procedures."),Object(i.b)("p",null,"If this basic set of features is not enough for a particular Substrate built blockchain it is possible\nto easily extend this API using the so-called chain extension feature."),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"The interface consists of an error code that indicates lightweight errors\nas well as the definition of some chain extension methods."),Object(i.b)("p",null,"The overall structure follows that of a simple Rust trait definition.\nThe error code is defined as an associated type definition of the trait definition.\nThe methods are defined as associated trait methods without implementation."),Object(i.b)("p",null,"Chain extension methods must not have a ",Object(i.b)("inlineCode",{parentName:"p"},"self")," receiver such as ",Object(i.b)("inlineCode",{parentName:"p"},"&self")," or ",Object(i.b)("inlineCode",{parentName:"p"},"&mut self"),"\nand must have inputs and output that implement SCALE codec. Their return value follows\nspecific rules that can be altered using the ",Object(i.b)("inlineCode",{parentName:"p"},"handle_status")," and ",Object(i.b)("inlineCode",{parentName:"p"},"returns_result")," attributes\nwhich are described in more detail below."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Usually the chain extension definition using this proc. macro is provided\nby the author of the chain extension in a separate crate.\nink! smart contracts using this chain extension simply depend on this crate\nand use its associated environment definition in order to make use of\nthe methods provided by the chain extension."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"There are three different attributes with which the chain extension methods\ncan be flagged:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Attribute"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"ink(extension = N: u32)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"-"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Determines the unique function ID of the chain extension method.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"ink(handle_status = flag: bool)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Assumes that the returned status code of the chain extension method always indicates success and therefore always loads and decodes the output buffer of the call.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"ink(returns_result = flag: bool)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"By default chain extension methods are assumed to return a ",Object(i.b)("inlineCode",{parentName:"td"},"Result<T, E>")," in the output buffer. Using ",Object(i.b)("inlineCode",{parentName:"td"},"returns_result = false")," this check is disabled and the chain extension method may return any other type.")))),Object(i.b)("p",null,"As with all ink! attributes multiple of them can either appear in a contiguous list:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"type Access = i32;\nuse ink_lang as ink;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = i32;\n  \n    #[ink(extension = 5, handle_status = false, returns_result = false)]\n    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),Object(i.b)("p",null,"\u2026or as multiple standalone ink! attributes applied to the same item:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"type Access = i32;\nuse ink_lang as ink;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n  type ErrorCode = i32;\n  \n  #[ink(extension = 5)]\n  #[ink(handle_status = false)]\n  #[ink(returns_result = false)]\n  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),Object(i.b)("h2",{id:"details-handle_status"},"Details: ",Object(i.b)("inlineCode",{parentName:"h2"},"handle_status")),Object(i.b)("p",null,"Default value: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"By default all chain extension methods return a ",Object(i.b)("inlineCode",{parentName:"p"},"Result<T, E>")," where ",Object(i.b)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode>"),".\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"Self::ErrorCode")," represents the error code of the chain extension.\nThis means that a smart contract calling such a chain extension method first queries the returned\nstatus code of the chain extension method and only loads and decodes the output if the returned\nstatus code indicates a successful call.\nThis design was chosen as it is more efficient when no output besides the error\ncode is required for a chain extension call. When designing a chain extension try to utilize the\nerror code to return errors and only use the output buffer for information that does not fit in\na single ",Object(i.b)("inlineCode",{parentName:"p"},"u32")," value."),Object(i.b)("p",null,"A chain extension method that is flagged with ",Object(i.b)("inlineCode",{parentName:"p"},"handle_status = false")," assumes that the returned error code\nwill always indicate success. Therefore it will always load and decode the output buffer and loses\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode")," constraint for the call."),Object(i.b)("h2",{id:"details-returns_result"},"Details: ",Object(i.b)("inlineCode",{parentName:"h2"},"returns_result")),Object(i.b)("p",null,"Default value: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"By default chain extension methods are assumed to return a value of type ",Object(i.b)("inlineCode",{parentName:"p"},"Result<T, E>")," through the\noutput buffer. Using ",Object(i.b)("inlineCode",{parentName:"p"},"returns_result = false")," this check is disabled and the chain extension method may return\nany other type."),Object(i.b)("p",null,"Note that if a chain extension method is attributed with ",Object(i.b)("inlineCode",{parentName:"p"},"returns_result = false"),"\nand with ",Object(i.b)("inlineCode",{parentName:"p"},"handle_status = true")," it will still return a value of type ",Object(i.b)("inlineCode",{parentName:"p"},"Result<T, Self::ErrorCode>"),"."),Object(i.b)("h2",{id:"usage-handle_status--returns_result"},"Usage: ",Object(i.b)("inlineCode",{parentName:"h2"},"handle_status")," + ",Object(i.b)("inlineCode",{parentName:"h2"},"returns_result")),Object(i.b)("p",null,"Use both ",Object(i.b)("inlineCode",{parentName:"p"},"handle_status = false")," and ",Object(i.b)("inlineCode",{parentName:"p"},"returns_result = false")," for the same chain extension method\nif a call to it may never fail and never returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," type."),Object(i.b)("h2",{id:"combinations"},"Combinations"),Object(i.b)("p",null,"Due to the possibility to flag a chain extension method with ",Object(i.b)("inlineCode",{parentName:"p"},"handle_status")," and ",Object(i.b)("inlineCode",{parentName:"p"},"returns_result"),"\nthere are 4 different cases with slightly varying semantics:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"th"},"handle_status")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"th"},"returns_result")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Effects"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The chain extension method is required to return a value of type ",Object(i.b)("inlineCode",{parentName:"td"},"Result<T, E>")," where ",Object(i.b)("inlineCode",{parentName:"td"},"E: From<Self::ErrorCode>"),". A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The chain extension method may return any non-",Object(i.b)("inlineCode",{parentName:"td"},"Result")," type. A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer. The actual return type of the chain extension method is still ",Object(i.b)("inlineCode",{parentName:"td"},"Result<T, Self::ErrorCode>")," when the chain extension method was defined to return a value of type ",Object(i.b)("inlineCode",{parentName:"td"},"T"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The chain extension method is required to return a value of type ",Object(i.b)("inlineCode",{parentName:"td"},"Result<T, E>"),". A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The chain extension method may return any non-",Object(i.b)("inlineCode",{parentName:"td"},"Result")," type. A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly.")))),Object(i.b)("h2",{id:"error-code"},"Error Code"),Object(i.b)("p",null,"Every chain extension defines exactly one ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorCode")," using the following syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = MyErrorCode;\n\n    // more definitions ...\n}\n")),Object(i.b)("p",null,"The defined ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorCode")," must implement ",Object(i.b)("inlineCode",{parentName:"p"},"FromStatusCode")," which should be implemented as a\nmore or less trivial conversion from the ",Object(i.b)("inlineCode",{parentName:"p"},"u32")," status code to a ",Object(i.b)("inlineCode",{parentName:"p"},"Result<(), Self::ErrorCode>"),".\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"Ok(())")," value indicates that the call to the chain extension method was successful."),Object(i.b)("p",null,"By convention an error code of ",Object(i.b)("inlineCode",{parentName:"p"},"0")," represents success.\nHowever, chain extension authors may use whatever suits their needs."),Object(i.b)("h2",{id:"example-definition"},"Example: Definition"),Object(i.b)("p",null,"In the below example a chain extension is defined that allows its users to read and write\nfrom and to the runtime storage using access privileges:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'use ink_lang as ink;\n\n/// Custom chain extension to read to and write from the runtime.\n#[ink::chain_extension]\npub trait RuntimeReadWrite {\n    type ErrorCode = ReadWriteErrorCode;\n\n    /// Reads from runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.\n    /// #[ink(extension = 1, returns_result = false)]\n    /// fn read(key: &[u8]) -> Vec<u8>;\n    ///\n    /// Reads from runtime storage.\n    ///\n    /// Returns the number of bytes read and up to 32 bytes of the\n    /// read value. Unused bytes in the output are set to 0.\n    ///\n    /// # Errors\n    ///\n    /// If the runtime storage cell stores a value that requires more than\n    /// 32 bytes.\n    ///\n    /// # Note\n    ///\n    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`\n    /// and may potentially return any `Self::ErrorCode` through its return value.\n    #[ink(extension = 2)]\n    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n\n    /// Writes into runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.\n    #[ink(extension = 3, returns_result = false)]\n    fn write(key: &[u8], value: &[u8]);\n\n    /// Returns the access allowed for the key for the caller.\n    ///\n    /// # Note\n    ///\n    /// Assumes to never fail the call and therefore always returns `Option<Access>`.\n    #[ink(extension = 4, returns_result = false, handle_status = false)]\n    fn access(key: &[u8]) -> Option<Access>;\n\n    /// Unlocks previously aquired permission to access key.\n    ///\n    /// # Errors\n    ///\n    /// If the permission was not granted.\n    ///\n    /// # Note\n    ///\n    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`\n    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.\n    #[ink(extension = 5, handle_status = false)]\n    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteErrorCode {\n  InvalidKey,\n  CannotWriteToKey,\n  CannotReadFromKey,\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteError {\n  ErrorCode(ReadWriteErrorCode),\n  BufferTooSmall { required_bytes: u32 },\n}\n\nimpl From<ReadWriteErrorCode> for ReadWriteError {\n  fn from(error_code: ReadWriteErrorCode) -> Self {\n    Self::ErrorCode(error_code)\n  }\n}\n\nimpl From<scale::Error> for ReadWriteError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub struct UnlockAccessError {\n  reason: String,\n}\n\nimpl From<scale::Error> for UnlockAccessError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum Access {\n  ReadWrite,\n  ReadOnly,\n  WriteOnly,\n}\n\nimpl ink_env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n  fn from_status_code(status_code: u32) -> Result<(), Self> {\n    match status_code {\n      0 => Ok(()),\n      1 => Err(Self::InvalidKey),\n      2 => Err(Self::CannotWriteToKey),\n      3 => Err(Self::CannotReadFromKey),\n      _ => panic!("encountered unknown status code"),\n    }\n  }\n}\n')),Object(i.b)("p",null,"All the error types and other utility types used in the chain extension definition\nabove are often required to implement various traits such as SCALE's ",Object(i.b)("inlineCode",{parentName:"p"},"Encode")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Decode"),"\nas well as ",Object(i.b)("inlineCode",{parentName:"p"},"scale-info"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"TypeInfo")," trait."),Object(i.b)("p",null,"A full example of the above chain extension definition can be seen\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs"}),"here"),"."),Object(i.b)("h2",{id:"example-environment"},"Example: Environment"),Object(i.b)("p",null,"In order to allow ink! smart contracts to use the above defined chain extension it needs\nto be integrated into an ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," definition as shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"type RuntimeReadWrite = i32;\n\nuse ink_env::{Environment, DefaultEnvironment};\n\npub enum CustomEnvironment {}\n\nimpl Environment for CustomEnvironment {\n    const MAX_EVENT_TOPICS: usize =\n        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;\n\n    type AccountId = <DefaultEnvironment as Environment>::AccountId;\n    type Balance = <DefaultEnvironment as Environment>::Balance;\n    type Hash = <DefaultEnvironment as Environment>::Hash;\n    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;\n    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;\n\n    type ChainExtension = RuntimeReadWrite;\n}\n")),Object(i.b)("p",null,"Above we defined the ",Object(i.b)("inlineCode",{parentName:"p"},"CustomEnvironment")," which defaults to ink!'s ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultEnvironment"),"\nfor all constants and types but the ",Object(i.b)("inlineCode",{parentName:"p"},"ChainExtension")," type which is assigned to our newly\ndefined chain extension."),Object(i.b)("h2",{id:"example-usage"},"Example: Usage"),Object(i.b)("p",null,"An ink! smart contract can use the above defined chain extension through the ",Object(i.b)("inlineCode",{parentName:"p"},"Environment"),"\ndefinition defined in the last example section using the ",Object(i.b)("inlineCode",{parentName:"p"},"env")," macro parameter as\nshown below."),Object(i.b)("p",null,"Note that chain extension methods are accessible through ",Object(i.b)("inlineCode",{parentName:"p"},"Self::extension()")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"self.extension()"),". For example as in ",Object(i.b)("inlineCode",{parentName:"p"},"Self::extension().read(..)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"self.extension().read(..)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'use ink_lang as ink;\n\n#[ink::contract(env = CustomEnvironment)]\nmod read_writer {\n    use ink_lang as ink;\n    \n    #[ink(storage)]\n    pub struct ReadWriter {}\n\n    impl ReadWriter {\n        #[ink(constructor)]\n        pub fn new() -> Self { Self {} }\n\n        #[ink(message)]\n        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .read(&key)\n        }\n\n        #[ink(message)]\n        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {\n            self.env()\n                .extension()\n                .read_small(&key)\n        }\n\n        #[ink(message)]\n        pub fn write(\n            &self,\n            key: Vec<u8>,\n            value: Vec<u8>,\n        ) -> Result<(), ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .write(&key, &value)\n        }\n\n        #[ink(message)]\n        pub fn access(&self, key: Vec<u8>) -> Option<Access> {\n            self.env()\n                .extension()\n                .access(&key)\n        }\n\n        #[ink(message)]\n        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {\n            self.env()\n                .extension()\n                .unlock_access(&key, access)\n        }\n    }\n    \n    /// Custom chain extension to read to and write from the runtime.\n    #[ink::chain_extension]\n    pub trait RuntimeReadWrite {\n          type ErrorCode = ReadWriteErrorCode;\n          #[ink(extension = 1, returns_result = false)]\n          fn read(key: &[u8]) -> Vec<u8>;\n          #[ink(extension = 2)]\n          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n          #[ink(extension = 3, returns_result = false)]\n          fn write(key: &[u8], value: &[u8]);\n          #[ink(extension = 4, returns_result = false, handle_status = false)]\n          fn access(key: &[u8]) -> Option<Access>;\n          #[ink(extension = 5, handle_status = false)]\n          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteErrorCode {\n          InvalidKey,\n          CannotWriteToKey,\n          CannotReadFromKey,\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteError {\n          ErrorCode(ReadWriteErrorCode),\n          BufferTooSmall { required_bytes: u32 },\n    }\n    impl From<ReadWriteErrorCode> for ReadWriteError {\n         fn from(error_code: ReadWriteErrorCode) -> Self {\n             Self::ErrorCode(error_code)\n         }\n    }\n    impl From<scale::Error> for ReadWriteError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n  \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub struct UnlockAccessError {\n         reason: String,\n    }\n    impl From<scale::Error> for UnlockAccessError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum Access {\n         ReadWrite,\n         ReadOnly,\n         WriteOnly,\n    }\n    impl ink_env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n         fn from_status_code(status_code: u32) -> Result<(), Self> {\n             match status_code {\n                 0 => Ok(()),\n                 1 => Err(Self::InvalidKey),\n                 2 => Err(Self::CannotWriteToKey),\n                 3 => Err(Self::CannotReadFromKey),\n                 _ => panic!("encountered unknown status code"),\n             }\n         }\n    }\n    pub enum CustomEnvironment {}\n    impl ink_env::Environment for CustomEnvironment {\n         const MAX_EVENT_TOPICS: usize =\n             <ink_env::DefaultEnvironment as ink_env::Environment>::MAX_EVENT_TOPICS;\n    \n         type AccountId = <ink_env::DefaultEnvironment as ink_env::Environment>::AccountId;\n         type Balance = <ink_env::DefaultEnvironment as ink_env::Environment>::Balance;\n         type Hash = <ink_env::DefaultEnvironment as ink_env::Environment>::Hash;\n         type BlockNumber = <ink_env::DefaultEnvironment as ink_env::Environment>::BlockNumber;\n         type Timestamp = <ink_env::DefaultEnvironment as ink_env::Environment>::Timestamp;\n    \n         type ChainExtension = RuntimeReadWrite;\n    }\n}\n')),Object(i.b)("h2",{id:"technical-limitations"},"Technical Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Due to technical limitations it is not possible to refer to the ",Object(i.b)("inlineCode",{parentName:"li"},"ErrorCode")," associated type\nusing ",Object(i.b)("inlineCode",{parentName:"li"},"Self::ErrorCode")," anywhere within the chain extension and its defined methods.\nInstead chain extension authors should directly use the error code type when required.\nThis limitation might be lifted in future versions of ink!."),Object(i.b)("li",{parentName:"ul"},"It is not possible to declare other chain extension traits as super traits or super\nchain extensions of another.")))}d.isMDXComponent=!0}}]);