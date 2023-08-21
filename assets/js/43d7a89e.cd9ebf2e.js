"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[8463],{1285:(e,t,a)=>{a.d(t,{ZP:()=>g});var n=a(7294),o=a(4184),r=a.n(o),l=a(6486),s=a(5697),i=a.n(s),d=a(7201);const u={variant:{default:"",primary:"nfd-text-primary-500",white:"nfd-text-white"},size:{3:"nfd-w-3 nfd-h-3",4:"nfd-w-4 nfd-h-4",8:"nfd-w-8 nfd-h-8"}},p=(0,n.forwardRef)((({variant:e,size:t,className:a},o)=>{const l=(0,d.Z)();return(0,n.createElement)("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:r()("nfd-animate-spin",u.variant[e],u.size[t],a),...l},(0,n.createElement)("circle",{className:"nfd-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.createElement)("path",{className:"nfd-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))})),m={variant:i().oneOf((0,l.keys)(u.variant)),size:i().oneOf((0,l.keys)(u.size)),className:i().string};p.propTypes=m,p.defaultProps={variant:"default",size:"4",className:""};const c=e=>(0,n.createElement)(p,{...e});c.propTypes=m,c.defaultProps=p.defaultProps,c.displayName="Spinner";const f=p,y={variant:{primary:"nfd-button--primary",secondary:"nfd-button--secondary",error:"nfd-button--error",upsell:"nfd-button--upsell"},size:{default:"",small:"nfd-button--small",large:"nfd-button--large"}},k=(0,n.forwardRef)((({children:e,as:t,type:a,variant:o,size:l,isLoading:s,disabled:i,className:d,...u},p)=>(0,n.createElement)(t,{type:a||"button"===t&&"button"||void 0,disabled:i,ref:p,className:r()("nfd-button",y.variant[o],y.size[l],s&&"nfd-cursor-wait",i&&"nfd-button--disabled",d),...u},s&&(0,n.createElement)(f,{size:"small"===l?"3":"4",className:"nfd-mr-2"}),e))),v={children:i().node.isRequired,as:i().elementType,type:i().oneOf(["button","submit"]),variant:i().oneOf((0,l.keys)(y.variant)),size:i().oneOf((0,l.keys)(y.size)),isLoading:i().bool,disabled:i().bool,className:i().string};k.propTypes=v,k.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const g=k,h=e=>(0,n.createElement)(k,{...e});h.propTypes=v,h.defaultProps=k.defaultProps,h.displayName="Button"},1369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>B,contentTitle:()=>h,default:()=>w,frontMatter:()=>g,metadata:()=>b,toc:()=>x});var n=a(7462),o=(a(7294),a(3905)),r=a(2504),l=a(1629),s=a(1285);const i={toc:[{value:"1. Large",id:"1-large",level:4},{value:"2. Default",id:"2-default",level:4},{value:"3. Small",id:"3-small",level:4}]},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"1-large"},"1. Large"),(0,o.kt)("p",null,"The large button size is often used ads and upsells that require significant user attention.\nIt can also be useful for touch interfaces, where larger buttons are easier to tap."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)("div",{className:"nfd-flex nfd-gap-3"},(0,o.kt)(s.ZP,{size:"large",mdxType:"Button"},"Primary Large"),(0,o.kt)(s.ZP,{size:"large",variant:"secondary",mdxType:"Button"},"Secondary Large"),(0,o.kt)(s.ZP,{size:"large",variant:"error",mdxType:"Button"},"Error Large"),(0,o.kt)(s.ZP,{size:"large",variant:"upsell",mdxType:"Button"},"Upsell Large"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="nfd-flex nfd-gap-3">\n    <Button size="large">Primary Large</Button>\n    <Button size="large" variant="secondary">Secondary Large</Button>\n    <Button size="large" variant="error">Error Large</Button>\n    <Button size="large" variant="upsell">Upsell Large</Button>\n</div>\n')),(0,o.kt)("h4",{id:"2-default"},"2. Default"),(0,o.kt)("p",null,"The default button size is used for the vast majority of actions."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)("div",{className:"nfd-flex nfd-gap-2.5"},(0,o.kt)(s.ZP,{mdxType:"Button"},"Primary Default"),(0,o.kt)(s.ZP,{variant:"secondary",mdxType:"Button"},"Secondary Default"),(0,o.kt)(s.ZP,{variant:"error",mdxType:"Button"},"Error Default"),(0,o.kt)(s.ZP,{variant:"upsell",mdxType:"Button"},"Upsell Default"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="nfd-flex nfd-gap-2.5">\n    <Button>Primary Default</Button>\n    <Button variant="secondary">Secondary Default</Button>\n    <Button variant="error">Error Default</Button>\n    <Button variant="upsell">Upsell Default</Button>\n</div>\n')),(0,o.kt)("h4",{id:"3-small"},"3. Small"),(0,o.kt)("p",null,"The small button size is very useful for fitting more actions in a smaller space, like in tables.\nThis approach ensures that the user interface remains tidy and uncluttered."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)("div",{className:"nfd-flex nfd-gap-2"},(0,o.kt)(s.ZP,{size:"small",mdxType:"Button"},"Small Default"),(0,o.kt)(s.ZP,{size:"small",variant:"secondary",mdxType:"Button"},"Small Secondary"),(0,o.kt)(s.ZP,{size:"small",variant:"error",mdxType:"Button"},"Small Error"),(0,o.kt)(s.ZP,{size:"small",variant:"upsell",mdxType:"Button"},"Small Upsell"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="nfd-flex nfd-gap-2">\n    <Button size="small">Small Default</Button>\n    <Button size="small" variant="secondary">Small Secondary</Button>\n    <Button size="small" variant="error">Small Error</Button>\n    <Button size="small" variant="upsell">Small Upsell</Button>\n</div>\n')))}u.isMDXComponent=!0;const p={toc:[{value:"1. Loading State",id:"1-loading-state",level:4},{value:"2. Disabled State",id:"2-disabled-state",level:4}]},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"1-loading-state"},"1. Loading State"),(0,o.kt)("p",null,"The loading state is used when a button click triggers a process that takes some time to complete,\nsuch as running a data optimization or uploading a file."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{isLoading:!0,mdxType:"Button"},"Loading...")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button isLoading>\n    Loading...\n</Button>\n")),(0,o.kt)("h4",{id:"2-disabled-state"},"2. Disabled State"),(0,o.kt)("p",null,"The disabled state, represented by a transparent button, is used when the button cannot be clicked due to a certain condition."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{disabled:!0,mdxType:"Button"},"Disabled")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button disabled>\n    Disabled\n</Button>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The disabled state does not remove pointer-events. If you want to remove pointer-events, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to add a class that sets pointer-events to none.")),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{className:"nfd-pointer-events-none",disabled:!0,mdxType:"Button"},"Disabled & without pointer-events")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button\n    className="nfd-pointer-events-none"\n    disabled\n>\n    Disabled & without pointer-events\n</Button>\n')))}c.isMDXComponent=!0;const f={toc:[{value:"1. Primary (default)",id:"1-primary-default",level:4},{value:"2. Secondary",id:"2-secondary",level:4},{value:"3. Error",id:"3-error",level:4},{value:"4. Upsell",id:"4-upsell",level:4}]},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"1-primary-default"},"1. Primary (default)"),(0,o.kt)("p",null,"Primary buttons are used to highlight the most important action or call to action on a page or screen."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{mdxType:"Button"},"Primary (default)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button>\n    Primary (default)\n</Button>\n")),(0,o.kt)("h4",{id:"2-secondary"},"2. Secondary"),(0,o.kt)("p",null,"Secondary buttons are used to offer secondary or supplementary actions to users that are less important than the primary action."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{variant:"secondary",mdxType:"Button"},"Secondary")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="secondary">\n    Secondary\n</Button>\n')),(0,o.kt)("h4",{id:"3-error"},"3. Error"),(0,o.kt)("p",null,"Error buttons are used to warn users of potentially hazardous or irreversible actions."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{variant:"error",mdxType:"Button"},"Error")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="error">\n    Error\n</Button>\n')),(0,o.kt)("h4",{id:"4-upsell"},"4. Upsell"),(0,o.kt)("p",null,"Upsell buttons are used to indicate the start of a flow that eventually leads to a purchase, subscription or upgrade."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{variant:"upsell",mdxType:"Button"},"Upsell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="Upsell">\n    Upsell\n</Button>\n')))}k.isMDXComponent=!0;const v={children:{type:"node",description:"Button content.",isRequired:!0},as:{type:["button","a","span","div"],description:"The HTML element to render.",defaultValue:"button"},type:{type:["button","submit"]},variant:{type:["primary","secondary","error","upsell"],description:"The variant of the button.",defaultValue:"primary"},size:{type:["default","small","large"],defaultValue:"default"},isLoading:{type:"bool",defaultValue:!1},disabled:{type:"bool",defaultValue:!1},className:{type:"string"}},g={},h="Button",b={unversionedId:"elements/button",id:"elements/button",title:"Button",description:"Buttons are essential components in a user interface. They are used to trigger actions and provide users with feedback.",source:"@site/docs/elements/button.mdx",sourceDirName:"elements",slug:"/elements/button",permalink:"/npm-ui-component-library/docs/elements/button",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/button.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Badge",permalink:"/npm-ui-component-library/docs/elements/badge"},next:{title:"Checkbox",permalink:"/npm-ui-component-library/docs/elements/checkbox"}},B={},x=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Sizes",id:"sizes",level:3},{value:"States",id:"states",level:3},{value:"Props",id:"props",level:3}],N={toc:x},T="wrapper";function w(e){let{components:t,...a}=e;return(0,o.kt)(T,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"button"},"Button"),(0,o.kt)("p",null,"Buttons are essential components in a user interface. They are used to trigger actions and provide users with feedback.\nA button should immediately trigger an action on a page or screen when clicked or tapped."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(s.ZP,{mdxType:"Button"},"Button \ud83e\udd1f")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@newfold/ui-component-library";\n\n<Button>Button \ud83e\udd1f</Button>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"variants"},"Variants"),(0,o.kt)("p",null,"The Button provides four variants, each with a unique color scheme and intent."),(0,o.kt)(k,{mdxType:"ButtonVariants"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("p",null,"The Button variants can be used in three different sizes."),(0,o.kt)(u,{mdxType:"ButtonSizes"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)("p",null,"In addition to the default, hover, and focus states, two other button states have been specified."),(0,o.kt)(c,{mdxType:"ButtonStates"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(r.Z.Table,{docs:v}))}w.isMDXComponent=!0}}]);