"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[7546],{8171:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>N,contentTitle:()=>x,default:()=>Z,frontMatter:()=>g,metadata:()=>w,toc:()=>T});var n=o(7462),l=o(7294),d=o(3905),a=o(2504),s=o(1629),i=o(4184),r=o.n(i),c=o(5697),p=o.n(c);const m={variant:{default:"",block:"nfd-code--block"}},u=(0,l.forwardRef)((({children:e,variant:t="default",className:o="",...n},d)=>(0,l.createElement)("code",{ref:d,className:r()("nfd-code",m.variant[t],o),...n},e))),f={children:p().node.isRequired,variant:p().oneOf(Object.keys(m.variant)),className:p().string};u.propTypes=f;const k=e=>(0,l.createElement)(u,{...e});k.propTypes=f,k.defaultProps=u.defaultProps,k.displayName="Code";const h=u,y={toc:[{value:"1. Default (default)",id:"1-default-default",level:4},{value:"2. Block",id:"2-block",level:4}]},C="wrapper";function v(e){let{components:t,...o}=e;return(0,d.kt)(C,(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h4",{id:"1-default-default"},"1. Default (default)"),(0,d.kt)("p",null,"The default variant renders an inline code element."),(0,d.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,d.kt)(h,{mdxType:"Code"},"console.log('default');")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code>\n    console.log('default');\n</Code>\n")),(0,d.kt)("admonition",{type:"info"},(0,d.kt)("p",{parentName:"admonition"},"If the parent element has a display flex property with column direction,\nthe code element will be streched to full width. To avoid this,\nadd ",(0,d.kt)("inlineCode",{parentName:"p"},"nfd-w-fit")," class to the code element.")),(0,d.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,d.kt)("div",{className:"nfd-flex nfd-flex-col nfd-gap-2"},(0,d.kt)(h,{mdxType:"Code"},"console.log('default but full width');"),(0,d.kt)(h,{className:"nfd-w-fit",mdxType:"Code"},"console.log('default with `nfd-w-fit` class');"))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},"<div className=\"nfd-flex nfd-flex-col nfd-gap-2\">\n    <Code>console.log('default but full width');</Code>\n    <Code className=\"nfd-w-fit\">console.log('default with `nfd-w-fit` class');</Code>\n</div>\n")),(0,d.kt)("h4",{id:"2-block"},"2. Block"),(0,d.kt)("p",null,"The block variant renders a block (full width) code element."),(0,d.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,d.kt)(h,{variant:"block",mdxType:"Code"},"console.log('block');")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code variant=\"block\">\n    console.log('block');\n</Code>\n")))}v.isMDXComponent=!0;const b={children:{type:"node",description:"The content of the code element.",isRequired:!0},variant:{type:["default","block"],description:"The variant of the code element.",defaultValue:"default"},className:{type:"string"}},g={},x="Code",w={unversionedId:"elements/code",id:"elements/code",title:"Code",description:"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.",source:"@site/docs/elements/code.mdx",sourceDirName:"elements",slug:"/elements/code",permalink:"/npm-ui-component-library/docs/elements/code",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/code.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Checkbox",permalink:"/npm-ui-component-library/docs/elements/checkbox"},next:{title:"Error Boundary",permalink:"/npm-ui-component-library/docs/elements/error-boundary"}},N={},T=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],D={toc:T},R="wrapper";function Z(e){let{components:t,...o}=e;return(0,d.kt)(R,(0,n.Z)({},D,o,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"code"},"Code"),(0,d.kt)("p",null,"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."),(0,d.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,d.kt)(h,{mdxType:"Code"},"CodeContent();")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"usage"},"Usage"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Code } from "@newfold/ui-component-library";\n\n<Code>\n    CodeContent();\n</Code>\n')),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"variants"},"Variants"),(0,d.kt)("p",null,"The Code provides two variants."),(0,d.kt)(v,{mdxType:"CodeVariants"}),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"props"},"Props"),(0,d.kt)(a.Z.Table,{docs:b}))}Z.isMDXComponent=!0}}]);