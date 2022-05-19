"use strict";(self.webpackChunktuva_docs=self.webpackChunktuva_docs||[]).push([[2298],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(h,s(s({ref:t},p),{},{components:a})):i.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1287:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),s=["components"],o={sidebar_position:1},l="Claims",c={unversionedId:"preprocessing/claims",id:"preprocessing/claims",title:"Claims",description:"What is Claims Data?",source:"@site/docs/preprocessing/claims.md",sourceDirName:"preprocessing",slug:"/preprocessing/claims",permalink:"/docs/preprocessing/claims",draft:!1,editUrl:"https://github.com/tuva-health/thetuvaproject.com/tree/main/packages/create-docusaurus/templates/shared/docs/preprocessing/claims.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pre-processing",permalink:"/docs/category/pre-processing"},next:{title:"FHIR",permalink:"/docs/preprocessing/fhir"}},p={},u=[{value:"What is Claims Data?",id:"what-is-claims-data",level:2},{value:"Claims Data Pre-processing",id:"claims-data-pre-processing",level:2},{value:"Analytic Uses of Claims Data",id:"analytic-uses-of-claims-data",level:2},{value:"References",id:"references",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"claims"},"Claims"),(0,n.kt)("h2",{id:"what-is-claims-data"},"What is Claims Data?"),(0,n.kt)("p",null,"Claims data is the data that is generated when medical providers bill insurance companies for medical services.  There are two types of paper claims forms: UB-04 and CMS-1500.  Each paper claim form has a corresponding digial claim form: UB-04 is the 837i and CMS-1500 the 837p.  "),(0,n.kt)("p",null,"The following types of organizations use the UB-04 (837i) claim form: hospitals, skilled nursing facilities, hospice, and home health."),(0,n.kt)("p",null,"The following types of organizations use the CMS-1500 (837p) claim form: physician, labs, durable medical equipment, etc."),(0,n.kt)("p",null,"Claims are submitted by providers and organizations that bill on their behalf to clearing houses.  Clearing houses process the claims are perform basic checks to make sure the claim being submitted has been filled out properly.  The clearing house then passes the claim to the insurance company for final processing and adjudication (i.e. the process of determine a claim payment should or should not be made).  A resulting billing form is shared back with the provider, indicating whether payment will be made or the claim was denied."),(0,n.kt)("p",null,"Patient eligibility data is an additional critical subset of claims data.  It provides exact start and end dates indicating the specific time period a patient was eligible for insurance and therefore insurance would have paid for covered medical expenses.  Eligibility data is critical - without it you can't calculate population-level financial (PMPM) or utilization (PKPY) measures, which is of primary interest in most of value-based care analytics."),(0,n.kt)("p",null,"Almost all insurance companies retain a copy of the claims (and eligibility) data in a database.  Each company decides how to model this data on their own, and while the basic data elements are common, most of the schemas (i.e. how the data are modeled in tables in a database) for these datasets vary."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1TMMM1u8GTdWqxGcHALRtGMjcxBXQwBbWUW8pHL66W_E/edit?usp=sharing%C3%9F"},"input layer")," of the Claims Pre-processing Package from the Tuva Project to see what a relatively common claims data schema looks like."),(0,n.kt)("h2",{id:"claims-data-pre-processing"},"Claims Data Pre-processing"),(0,n.kt)("p",null,"Before claims data can be used in many of the most common value-based care or population-level use cases, it must first go through a transformation process.  This process involves the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creating a member months table from eligibility data"),(0,n.kt)("li",{parentName:"ul"},"Adjusting and reversing claims"),(0,n.kt)("li",{parentName:"ul"},"Merging claims into encounters"),(0,n.kt)("li",{parentName:"ul"},"Assigning encounter types")),(0,n.kt)("p",null,"Creating the member months table..."),(0,n.kt)("p",null,"Adjusting and reversing claims..."),(0,n.kt)("p",null,"Merging claims into encounters..."),(0,n.kt)("h2",{id:"analytic-uses-of-claims-data"},"Analytic Uses of Claims Data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Value-based Care Analytics"),(0,n.kt)("li",{parentName:"ul"},"Fraud, Waste, and Abuse"),(0,n.kt)("li",{parentName:"ul"},"Health Economics and Outcomes Research (HEOR) Studies"),(0,n.kt)("li",{parentName:"ul"},"Drug Development and Commercialization")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6wTohlWfwAo"},"Claims Data: Source and Processing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/datavant/the-fragmentation-of-health-data-8fa708109e13"},"The Fragmentation of Health Data by Travis May"))))}d.isMDXComponent=!0}}]);