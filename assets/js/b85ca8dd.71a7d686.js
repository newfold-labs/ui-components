"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[4775],{1096:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294);const i=(e=!0)=>{const[n,t]=(0,a.useState)(e),i=(0,a.useCallback)((()=>t(!n)),[n,t]),l=(0,a.useCallback)((()=>t(!0)),[t]),o=(0,a.useCallback)((()=>t(!1)),[t]);return[n,i,t,l,o]}},9510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>V,contentTitle:()=>R,default:()=>_,frontMatter:()=>O,metadata:()=>B,toc:()=>Z});var a=t(7462),i=t(7294),l=t(3905),o=t(2504),r=t(1629),d=t(6486),s=t(5697),u=t.n(s);const m=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"}))}));const b=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"}))}));var p=t(1096);const c=({label:e,icon:n=null,children:t=null,defaultOpen:a=!0,...l})=>{const[o,r]=(0,p.Z)(a),d=o?m:b;return(0,i.createElement)("div",null,(0,i.createElement)("button",{className:"nfd-group nfd-flex nfd-w-full nfd-items-center nfd-justify-between nfd-gap-3 nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-text-slate-800 nfd-rounded-md nfd-no-underline hover:nfd-text-slate-900 hover:nfd-bg-slate-50 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-primary-500",onClick:r,"aria-expanded":o,...l},(0,i.createElement)("span",{className:"nfd-flex nfd-items-center nfd-gap-3"},n&&(0,i.createElement)(n,{className:"nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500"}),e),(0,i.createElement)(d,{className:"nfd-h-4 nfd-w-4 nfd-text-slate-400 group-hover:nfd-text-slate-500 nfd-stroke-3"})),o&&t&&(0,i.createElement)("ul",{className:"nfd-ml-8 nfd-mt-1 nfd-space-y-1"},t))};c.propTypes={label:u().string.isRequired,icon:u().elementType,defaultOpen:u().bool,children:u().node};const f=c;var g=t(2796),v=t(5506);const S=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h7"}))})),h=({children:e,openButtonId:n,closeButtonId:t,openButtonScreenReaderText:a="Open",closeButtonScreenReaderText:l="Close","aria-label":o})=>{const{isMobileMenuOpen:r,setMobileMenuOpen:d}=E(),s=(0,i.useCallback)((()=>d(!0)),[d]),u=(0,i.useCallback)((()=>d(!1)),[d]);return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(g.V,{className:"nfd-root",open:r,onClose:u,"aria-label":o},(0,i.createElement)("div",{className:"nfd-mobile-navigation__dialog"},(0,i.createElement)("div",{className:"nfd-fixed nfd-inset-0 nfd-bg-slate-600 nfd-bg-opacity-75 nfd-z-30","aria-hidden":"true"}),(0,i.createElement)(g.V.Panel,{className:"nfd-relative nfd-flex nfd-flex-1 nfd-flex-col nfd-max-w-xs nfd-w-full nfd-z-40 nfd-bg-slate-100"},(0,i.createElement)("div",{className:"nfd-absolute nfd-top-0 nfd-right-0 nfd--mr-14 nfd-p-1"},(0,i.createElement)("button",{id:t,className:"nfd-flex nfd-h-12 nfd-w-12 nfd-items-center nfd-justify-center nfd-rounded-full focus:nfd-outline-none nfd-bg-slate-600 focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary-500",onClick:u},(0,i.createElement)("span",{className:"nfd-sr-only"},l),(0,i.createElement)(v.Z,{className:"nfd-h-6 nfd-w-6 nfd-text-white"}))),(0,i.createElement)("div",{className:"nfd-flex-1 nfd-h-0 nfd-overflow-y-auto"},(0,i.createElement)("nav",{className:"nfd-h-full nfd-flex nfd-flex-col nfd-py-6 nfd-px-2"},e))))),(0,i.createElement)("div",{className:"nfd-mobile-navigation__top"},(0,i.createElement)("div",{className:"nfd-flex nfd-relative nfd-flex-shrink-0 nfd-h-16 nfd-z-10 nfd-bg-white nfd-border-b nfd-border-slate-200"},(0,i.createElement)("button",{id:n,className:"nfd-px-4 nfd-border-r nfd-border-slate-200 nfd-text-slate-500 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary-500",onClick:s},(0,i.createElement)("span",{className:"nfd-sr-only"},a),(0,i.createElement)(S,{className:"nfd-w-6 nfd-h-6"})))))};h.propTypes={children:u().node.isRequired,openButtonId:u().string,closeButtonId:u().string,openButtonScreenReaderText:u().string,closeButtonScreenReaderText:u().string,"aria-label":u().string};const N=h,k=({children:e,className:n=""})=>(0,i.createElement)("nav",{className:n},e);k.propTypes={children:u().node.isRequired,className:u().string};const I=k;var x=t(4184),M=t.n(x);const y=({as:e="a",pathProp:n="href",label:t,...a})=>{const{activePath:l,setMobileMenuOpen:o}=E(),r=(0,i.useCallback)((()=>o(!1)),[o]);return(0,i.createElement)("li",{className:"nfd-m-0 nfd-pb-1"},(0,i.createElement)(e,{className:M()("nfd-group nfd-flex nfd-items-center nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-rounded-md nfd-no-underline focus:nfd-outline-none focus:nfd-ring-1 focus:nfd-ring-offset-1 focus:nfd-ring-offset-transparent focus:nfd-ring-primary-500",l===a[n]?"nfd-bg-slate-200 nfd-text-slate-900":"nfd-text-slate-600 hover:nfd-text-slate-900 hover:nfd-bg-slate-50"),"aria-current":l===a[n]?"page":null,onClick:r,...a},t))};y.propTypes={as:u().elementType,pathProp:u().string,label:u().node.isRequired,isActive:u().bool};const w=y,C=(0,i.createContext)({activePath:"",isMobileMenuOpen:!1,setMobileMenuOpen:d.noop}),E=()=>(0,i.useContext)(C),T=({activePath:e="",children:n})=>{const[t,a]=(0,i.useState)(!1);return(0,i.createElement)(C.Provider,{value:{activePath:e,isMobileMenuOpen:t,setMobileMenuOpen:a}},n)};T.propTypes={activePath:u().string,children:u().node.isRequired},(T.Sidebar=I).displayName="SidebarNavigation.Sidebar",(T.Mobile=N).displayName="SidebarNavigation.Mobile",(T.MenuItem=f).displayName="SidebarNavigation.MenuItem",(T.SubmenuItem=w).displayName="SidebarNavigation.SubmenuItem";const P=T,O={},R="SidebarNavigation",B={unversionedId:"components/SidebarNavigation",id:"components/SidebarNavigation",title:"SidebarNavigation",description:"A sidebar navigation component. Contains the subcomponents Sidebar, Mobile, MenuItem and SubmenuItem and contains the hook useNavigationContext.",source:"@site/docs/components/SidebarNavigation.mdx",sourceDirName:"components",slug:"/components/SidebarNavigation",permalink:"/npm-ui-component-library/docs/components/SidebarNavigation",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/SidebarNavigation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"SelectField",permalink:"/npm-ui-component-library/docs/components/SelectField"},next:{title:"Tag Field",permalink:"/npm-ui-component-library/docs/components/TagField"}},V={},Z=[{value:"Usage",id:"usage",level:3},{value:"SidebarNavigation Props",id:"sidebarnavigation-props",level:3},{value:"MenuItem",id:"menuitem",level:2},{value:"MenuItem Props",id:"menuitem-props",level:3},{value:"SubmenuItem",id:"submenuitem",level:2},{value:"SubmeunItem Props",id:"submeunitem-props",level:3},{value:"Sidebar",id:"sidebar",level:2},{value:"Sidebar Props",id:"sidebar-props",level:3},{value:"Mobile",id:"mobile",level:2},{value:"Mobile Props",id:"mobile-props",level:3},{value:"Variants",id:"variants",level:3}],j={toc:Z},L="wrapper";function _(e){let{components:n,...t}=e;return(0,l.kt)(L,(0,a.Z)({},j,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sidebarnavigation"},"SidebarNavigation"),(0,l.kt)("p",null,"A sidebar navigation component. Contains the subcomponents ",(0,l.kt)("inlineCode",{parentName:"p"},"Sidebar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mobile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MenuItem")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"SubmenuItem")," and contains the hook ",(0,l.kt)("inlineCode",{parentName:"p"},"useNavigationContext"),"."),(0,l.kt)(r.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(P,{mdxType:"SidebarNavigation"},(0,l.kt)(P.Sidebar,{className:"yst-w-1/3"},(0,l.kt)(P.MenuItem,{id:"menu-item-default-1",label:"MenuItem 1 label"},(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 1 label",to:"#sub1"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 2 label",to:"#sub2"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 3 label",to:"#sub3"})),(0,l.kt)(P.MenuItem,{id:"menu-item-default-2",label:"MenuItem 2 label"},(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 1 label",to:"#sub1"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 2 label",to:"#sub2"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 3 label",to:"#sub3"})),(0,l.kt)(P.MenuItem,{id:"menu-item-default-3",label:"MenuItem 3 label"},(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 1 label",to:"#sub1"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 2 label",to:"#sub2"}),(0,l.kt)(P.SubmenuItem,{label:"SubmenuItem 3 label",to:"#sub3"}))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { SidebarNavigation } from "@newfold/ui-component-library";\n\n<SidebarNavigation>\n    <SidebarNavigation.Sidebar className="yst-w-1/3">\n        <SidebarNavigation.MenuItem\n            id="menu-item-default-1"\n            label="MenuItem 1 label"\n        >\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 1 label"\n            to="#sub1"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 2 label"\n            to="#sub2"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 3 label"\n            to="#sub3"\n        />\n        </SidebarNavigation.MenuItem>\n        <SidebarNavigation.MenuItem\n            id="menu-item-default-2"\n            label="MenuItem 2 label"\n        >\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 1 label"\n            to="#sub1"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 2 label"\n            to="#sub2"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 3 label"\n            to="#sub3"\n        />\n        </SidebarNavigation.MenuItem>\n        <SidebarNavigation.MenuItem\n            id="menu-item-default-3"\n            label="MenuItem 3 label"\n        >\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 1 label"\n            to="#sub1"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 2 label"\n            to="#sub2"\n        />\n        <SidebarNavigation.SubmenuItem\n            label="SubmenuItem 3 label"\n            to="#sub3"\n        />\n        </SidebarNavigation.MenuItem>\n    </SidebarNavigation.Sidebar>\n</SidebarNavigation>\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sidebarnavigation-props"},"SidebarNavigation Props"),(0,l.kt)(o.Z.Table,{docs:{children:{type:"node"},activePath:{type:"string",description:"Active path",defaultValue:'""'}}}),(0,l.kt)("h2",{id:"menuitem"},"MenuItem"),(0,l.kt)("p",null,"The subcomponent ",(0,l.kt)("inlineCode",{parentName:"p"},"SidebarNavigation.MenuItem")," accepts the subcomponents ",(0,l.kt)("inlineCode",{parentName:"p"},"SidebarNavigation.SubmenuItem")," as children."),(0,l.kt)("h3",{id:"menuitem-props"},"MenuItem Props"),(0,l.kt)(o.Z.Table,{docs:{children:{type:"node"},defaultOpen:{type:"boolean",description:"Default open flag",defaultValue:"false"},icon:{type:"node",description:"Icon"},label:{type:"string",description:"Form label for whole checkbox group",defaultValue:'""'}}}),(0,l.kt)("h2",{id:"submenuitem"},"SubmenuItem"),(0,l.kt)("p",null,"The subcomponent ",(0,l.kt)("inlineCode",{parentName:"p"},"SidebarNavigation.SubmenuItem"),"."),(0,l.kt)("h3",{id:"submeunitem-props"},"SubmeunItem Props"),(0,l.kt)(o.Z.Table,{docs:{as:{type:"elementType",description:"Element type of the Card",defaultValue:"div",isRequired:!1},isActive:{type:"boolean",description:"Active menu item flag",defaultValue:"false"},label:{type:"string",description:"Label for submenu item",defaultValue:'""',isRequired:!0},pathProp:{type:"string",description:"Path"}}}),(0,l.kt)("h2",{id:"sidebar"},"Sidebar"),(0,l.kt)("p",null,"The subcomponent ",(0,l.kt)("inlineCode",{parentName:"p"},"SidebarNavigation.Sidebar")," is a ",(0,l.kt)("inlineCode",{parentName:"p"},"<nav>")," wrapper component. It's props are ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," (",(0,l.kt)("inlineCode",{parentName:"p"},"MenuItem")," subomponents)."),(0,l.kt)("h3",{id:"sidebar-props"},"Sidebar Props"),(0,l.kt)(o.Z.Table,{docs:{className:{type:"string",description:"Class attribute to add to the element",defaultValue:'""'},children:{type:"node"}}}),(0,l.kt)("h2",{id:"mobile"},"Mobile"),(0,l.kt)("p",null,"The subcomponent ",(0,l.kt)("inlineCode",{parentName:"p"},"SidebarNavigation.Mobile")," is a wrapper component over the ",(0,l.kt)("inlineCode",{parentName:"p"},"MenuItem")," subcomponents for mobile view."),(0,l.kt)("h3",{id:"mobile-props"},"Mobile Props"),(0,l.kt)(o.Z.Table,{docs:{children:{type:"node"},openButtonId:{type:"string",description:"Open button id"},closeButtonId:{type:"string",description:"Close button id"},openButtonScreenReaderText:{type:"string",description:"Open button screen reader text",defaultValue:"Open"},closeButtonScreenReaderText:{type:"string",description:"Close button screen reader text",defaultValue:"Close"},"aria-label":{type:"string"}}}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"variants"},"Variants"))}_.isMDXComponent=!0}}]);