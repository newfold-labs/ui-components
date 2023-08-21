"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[1471],{1471:(e,t,o)=>{o.d(t,{Z:()=>fe});var n=o(7294),r=o(5697),a=o.n(r),l=o(1646),i=o(4192),u=o(3781),s=o(9946),c=o(6723),d=o(3855),p=o(9650),f=o(4157),b=o(3784),m=o(5466);var v,x,g=o(1497),R=o(9362),O=o(2351),C=o(4103),T=o(2984),h=o(8689),S=o(4575),I=o(6045),E=o(6567),P=o(1363),y=o(1147),w=o(6599),_=o(476),M=o(8657),k=((x=k||{})[x.Open=0]="Open",x[x.Closed=1]="Closed",x),N=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(N||{}),A=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(A||{}),F=((v=F||{})[v.OpenCombobox=0]="OpenCombobox",v[v.CloseCombobox=1]="CloseCombobox",v[v.GoToOption=2]="GoToOption",v[v.RegisterOption=3]="RegisterOption",v[v.UnregisterOption=4]="UnregisterOption",v[v.RegisterLabel=5]="RegisterLabel",v);function L(e,t=(e=>e)){let o=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,n=(0,S.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),r=o?n.indexOf(o):null;return-1===r&&(r=null),{options:n,activeOptionIndex:r}}let z={1(e){var t;return null!=(t=e.dataRef.current)&&t.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var t;if(null!=(t=e.dataRef.current)&&t.disabled||0===e.comboboxState)return e;let o=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,n=e.options.findIndex((e=>t(e.dataRef.current.value)));-1!==n&&(o=n)}return{...e,comboboxState:0,activeOptionIndex:o}},2(e,t){var o,n,r,a;if(null!=(o=e.dataRef.current)&&o.disabled||null!=(n=e.dataRef.current)&&n.optionsRef.current&&(null==(r=e.dataRef.current)||!r.optionsPropsRef.current.static)&&1===e.comboboxState)return e;let l=L(e);if(null===l.activeOptionIndex){let e=l.options.findIndex((e=>!e.dataRef.current.disabled));-1!==e&&(l.activeOptionIndex=e)}let i=(0,g.d)(t,{resolveItems:()=>l.options,resolveActiveIndex:()=>l.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...l,activeOptionIndex:i,activationTrigger:null!=(a=t.trigger)?a:1}},3:(e,t)=>{var o,n;let r={id:t.id,dataRef:t.dataRef},a=L(e,(e=>[...e,r]));null===e.activeOptionIndex&&null!=(o=e.dataRef.current)&&o.isSelected(t.dataRef.current.value)&&(a.activeOptionIndex=a.options.indexOf(r));let l={...e,...a,activationTrigger:1};return null!=(n=e.dataRef.current)&&n.__demoMode&&void 0===e.dataRef.current.value&&(l.activeOptionIndex=0),l},4:(e,t)=>{let o=L(e,(e=>{let o=e.findIndex((e=>e.id===t.id));return-1!==o&&e.splice(o,1),e}));return{...e,...o,activationTrigger:1}},5:(e,t)=>({...e,labelId:t.id})},D=(0,n.createContext)(null);function q(e){let t=(0,n.useContext)(D);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}D.displayName="ComboboxActionsContext";let V=(0,n.createContext)(null);function Z(e){let t=(0,n.useContext)(V);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}function B(e,t){return(0,T.E)(t.type,z,e,t)}V.displayName="ComboboxDataContext";let j=n.Fragment;let $=O.AN.RenderStrategy|O.AN.Static;let Y=(0,O.yV)((function(e,t){let{value:o,defaultValue:r,onChange:a,form:l,name:s,by:d=((e,t)=>e===t),disabled:f=!1,__demoMode:b=!1,nullable:m=!1,multiple:v=!1,...x}=e,[R=(v?[]:void 0),C]=(0,y.q)(o,a,r),[S,P]=(0,n.useReducer)(B,{dataRef:(0,n.createRef)(),comboboxState:b?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),w=(0,n.useRef)(!1),_=(0,n.useRef)({static:!1,hold:!1}),M=(0,n.useRef)(null),k=(0,n.useRef)(null),N=(0,n.useRef)(null),A=(0,n.useRef)(null),F=(0,u.z)("string"==typeof d?(e,t)=>{let o=d;return(null==e?void 0:e[o])===(null==t?void 0:t[o])}:d),L=(0,n.useCallback)((e=>(0,T.E)(z.mode,{1:()=>R.some((t=>F(t,e))),0:()=>F(R,e)})),[R]),z=(0,n.useMemo)((()=>({...S,optionsPropsRef:_,labelRef:M,inputRef:k,buttonRef:N,optionsRef:A,value:R,defaultValue:r,disabled:f,mode:v?1:0,get activeOptionIndex(){if(w.current&&null===S.activeOptionIndex&&S.options.length>0){let e=S.options.findIndex((e=>!e.dataRef.current.disabled));if(-1!==e)return e}return S.activeOptionIndex},compare:F,isSelected:L,nullable:m,__demoMode:b})),[R,r,f,v,m,b,S]),q=(0,n.useRef)(null!==z.activeOptionIndex?z.options[z.activeOptionIndex]:null);(0,n.useEffect)((()=>{let e=null!==z.activeOptionIndex?z.options[z.activeOptionIndex]:null;q.current!==e&&(q.current=e)})),(0,c.e)((()=>{S.dataRef.current=z}),[z]),(0,p.O)([z.buttonRef,z.inputRef,z.optionsRef],(()=>Q.closeCombobox()),0===z.comboboxState);let Z=(0,n.useMemo)((()=>({open:0===z.comboboxState,disabled:f,activeIndex:z.activeOptionIndex,activeOption:null===z.activeOptionIndex?null:z.options[z.activeOptionIndex].dataRef.current.value,value:R})),[z,f,R]),$=(0,u.z)((e=>{let t=z.options.find((t=>t.id===e));t&&J(t.dataRef.current.value)})),Y=(0,u.z)((()=>{if(null!==z.activeOptionIndex){let{dataRef:e,id:t}=z.options[z.activeOptionIndex];J(e.current.value),Q.goToOption(g.T.Specific,t)}})),G=(0,u.z)((()=>{P({type:0}),w.current=!0})),K=(0,u.z)((()=>{P({type:1}),w.current=!1})),U=(0,u.z)(((e,t,o)=>(w.current=!1,e===g.T.Specific?P({type:2,focus:g.T.Specific,id:t,trigger:o}):P({type:2,focus:e,trigger:o})))),H=(0,u.z)(((e,t)=>(P({type:3,id:e,dataRef:t}),()=>{var t;(null==(t=q.current)?void 0:t.id)===e&&(w.current=!0),P({type:4,id:e})}))),W=(0,u.z)((e=>(P({type:5,id:e}),()=>P({type:5,id:null})))),J=(0,u.z)((e=>(0,T.E)(z.mode,{0:()=>null==C?void 0:C(e),1(){let t=z.value.slice(),o=t.findIndex((t=>F(t,e)));return-1===o?t.push(e):t.splice(o,1),null==C?void 0:C(t)}}))),Q=(0,n.useMemo)((()=>({onChange:J,registerOption:H,registerLabel:W,goToOption:U,closeCombobox:K,openCombobox:G,selectActiveOption:Y,selectOption:$})),[]),X=null===t?{}:{ref:t},ee=(0,n.useRef)(null),te=(0,i.G)();return(0,n.useEffect)((()=>{ee.current&&void 0!==r&&te.addEventListener(ee.current,"reset",(()=>{J(r)}))}),[ee,J]),n.createElement(D.Provider,{value:Q},n.createElement(V.Provider,{value:z},n.createElement(E.up,{value:(0,T.E)(z.comboboxState,{0:E.ZM.Open,1:E.ZM.Closed})},null!=s&&null!=R&&(0,h.t)({[s]:R}).map((([e,t],o)=>n.createElement(I._,{features:I.A.Hidden,ref:0===o?e=>{var t;ee.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,O.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:e,value:t})}))),(0,O.sY)({ourProps:X,theirProps:x,slot:Z,defaultTag:j,name:"Combobox"}))))})),G=(0,O.yV)((function(e,t){var o;let r=Z("Combobox.Button"),a=q("Combobox.Button"),c=(0,b.T)(r.buttonRef,t),d=(0,s.M)(),{id:p=`headlessui-combobox-button-${d}`,...m}=e,v=(0,i.G)(),x=(0,u.z)((e=>{switch(e.key){case P.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&a.openCombobox(),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(a.openCombobox(),v.nextFrame((()=>{r.value||a.goToOption(g.T.Last)}))),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),a.closeCombobox(),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})));default:return}})),R=(0,u.z)((e=>{if((0,C.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?a.closeCombobox():(e.preventDefault(),a.openCombobox()),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}))})),T=(0,l.v)((()=>{if(r.labelId)return[r.labelId,p].join(" ")}),[r.labelId,p]),h=(0,n.useMemo)((()=>({open:0===r.comboboxState,disabled:r.disabled,value:r.value})),[r]),S={ref:c,id:p,type:(0,f.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":null==(o=r.optionsRef.current)?void 0:o.id,"aria-expanded":0===r.comboboxState,"aria-labelledby":T,disabled:r.disabled,onClick:R,onKeyDown:x};return(0,O.sY)({ourProps:S,theirProps:m,slot:h,defaultTag:"button",name:"Combobox.Button"})})),K=(0,O.yV)((function(e,t){var o,r,a,c;let d=(0,s.M)(),{id:p=`headlessui-combobox-input-${d}`,onChange:f,displayValue:m,type:v="text",...x}=e,R=Z("Combobox.Input"),C=q("Combobox.Input"),h=(0,b.T)(R.inputRef,t),S=(0,n.useRef)(!1),I=(0,i.G)(),E="function"==typeof m&&void 0!==R.value?null!=(y=m(R.value))?y:"":"string"==typeof R.value?R.value:"";var y;(0,w.q)((([e,t],[o,n])=>{if(S.current)return;let r=R.inputRef.current;r&&((0===n&&1===t||e!==o)&&(r.value=e),requestAnimationFrame((()=>{if(S.current||!r)return;let{selectionStart:e,selectionEnd:t}=r;0===Math.abs((null!=t?t:0)-(null!=e?e:0))&&0===e&&r.setSelectionRange(r.value.length,r.value.length)})))}),[E,R.comboboxState]),(0,w.q)((([e],[t])=>{if(0===e&&1===t){if(S.current)return;let e=R.inputRef.current;if(!e)return;let t=e.value,{selectionStart:o,selectionEnd:n,selectionDirection:r}=e;e.value="",e.value=t,null!==r?e.setSelectionRange(o,n,r):e.setSelectionRange(o,n)}}),[R.comboboxState]);let _=(0,n.useRef)(!1),M=(0,u.z)((()=>{_.current=!0})),k=(0,u.z)((()=>{I.nextFrame((()=>{_.current=!1}))})),N=(0,u.z)((e=>{switch(S.current=!0,e.key){case P.R.Backspace:case P.R.Delete:if(0!==R.mode||!R.nullable)return;let t=e.currentTarget;I.requestAnimationFrame((()=>{""===t.value&&(C.onChange(null),R.optionsRef.current&&(R.optionsRef.current.scrollTop=0),C.goToOption(g.T.Nothing))}));break;case P.R.Enter:if(S.current=!1,0!==R.comboboxState||_.current)return;if(e.preventDefault(),e.stopPropagation(),null===R.activeOptionIndex)return void C.closeCombobox();C.selectActiveOption(),0===R.mode&&C.closeCombobox();break;case P.R.ArrowDown:return S.current=!1,e.preventDefault(),e.stopPropagation(),(0,T.E)(R.comboboxState,{0:()=>{C.goToOption(g.T.Next)},1:()=>{C.openCombobox()}});case P.R.ArrowUp:return S.current=!1,e.preventDefault(),e.stopPropagation(),(0,T.E)(R.comboboxState,{0:()=>{C.goToOption(g.T.Previous)},1:()=>{C.openCombobox(),I.nextFrame((()=>{R.value||C.goToOption(g.T.Last)}))}});case P.R.Home:if(e.shiftKey)break;return S.current=!1,e.preventDefault(),e.stopPropagation(),C.goToOption(g.T.First);case P.R.PageUp:return S.current=!1,e.preventDefault(),e.stopPropagation(),C.goToOption(g.T.First);case P.R.End:if(e.shiftKey)break;return S.current=!1,e.preventDefault(),e.stopPropagation(),C.goToOption(g.T.Last);case P.R.PageDown:return S.current=!1,e.preventDefault(),e.stopPropagation(),C.goToOption(g.T.Last);case P.R.Escape:return S.current=!1,0!==R.comboboxState?void 0:(e.preventDefault(),R.optionsRef.current&&!R.optionsPropsRef.current.static&&e.stopPropagation(),C.closeCombobox());case P.R.Tab:if(S.current=!1,0!==R.comboboxState)return;0===R.mode&&C.selectActiveOption(),C.closeCombobox()}})),A=(0,u.z)((e=>{null==f||f(e),C.openCombobox()})),F=(0,u.z)((()=>{S.current=!1})),L=(0,l.v)((()=>{if(R.labelId)return[R.labelId].join(" ")}),[R.labelId]),z=(0,n.useMemo)((()=>({open:0===R.comboboxState,disabled:R.disabled})),[R]),D={ref:h,id:p,role:"combobox",type:v,"aria-controls":null==(o=R.optionsRef.current)?void 0:o.id,"aria-expanded":0===R.comboboxState,"aria-activedescendant":null===R.activeOptionIndex||null==(r=R.options[R.activeOptionIndex])?void 0:r.id,"aria-labelledby":L,"aria-autocomplete":"list",defaultValue:null!=(c=null!=(a=e.defaultValue)?a:void 0!==R.defaultValue?null==m?void 0:m(R.defaultValue):null)?c:R.defaultValue,disabled:R.disabled,onCompositionStart:M,onCompositionEnd:k,onKeyDown:N,onChange:A,onBlur:F};return(0,O.sY)({ourProps:D,theirProps:x,slot:z,defaultTag:"input",name:"Combobox.Input"})})),U=(0,O.yV)((function(e,t){let o=(0,s.M)(),{id:r=`headlessui-combobox-label-${o}`,...a}=e,l=Z("Combobox.Label"),i=q("Combobox.Label"),d=(0,b.T)(l.labelRef,t);(0,c.e)((()=>i.registerLabel(r)),[r]);let p=(0,u.z)((()=>{var e;return null==(e=l.inputRef.current)?void 0:e.focus({preventScroll:!0})})),f=(0,n.useMemo)((()=>({open:0===l.comboboxState,disabled:l.disabled})),[l]);return(0,O.sY)({ourProps:{ref:d,id:r,onClick:p},theirProps:a,slot:f,defaultTag:"label",name:"Combobox.Label"})})),H=(0,O.yV)((function(e,t){let o=(0,s.M)(),{id:r=`headlessui-combobox-options-${o}`,hold:a=!1,...i}=e,u=Z("Combobox.Options"),d=(0,b.T)(u.optionsRef,t),p=(0,E.oJ)(),f=null!==p?(p&E.ZM.Open)===E.ZM.Open:0===u.comboboxState;(0,c.e)((()=>{var t;u.optionsPropsRef.current.static=null!=(t=e.static)&&t}),[u.optionsPropsRef,e.static]),(0,c.e)((()=>{u.optionsPropsRef.current.hold=a}),[u.optionsPropsRef,a]),function({container:e,accept:t,walk:o,enabled:r=!0}){let a=(0,n.useRef)(t),l=(0,n.useRef)(o);(0,n.useEffect)((()=>{a.current=t,l.current=o}),[t,o]),(0,c.e)((()=>{if(!e||!r)return;let t=(0,m.r)(e);if(!t)return;let o=a.current,n=l.current,i=Object.assign((e=>o(e)),{acceptNode:o}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;u.nextNode();)n(u.currentNode)}),[e,r,a,l])}({container:u.optionsRef.current,enabled:0===u.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=(0,l.v)((()=>{var e,t;return null!=(t=u.labelId)?t:null==(e=u.buttonRef.current)?void 0:e.id}),[u.labelId,u.buttonRef.current]),x=(0,n.useMemo)((()=>({open:0===u.comboboxState})),[u]),g={"aria-labelledby":v,role:"listbox","aria-multiselectable":1===u.mode||void 0,id:r,ref:d};return(0,O.sY)({ourProps:g,theirProps:i,slot:x,defaultTag:"ul",features:$,visible:f,name:"Combobox.Options"})})),W=(0,O.yV)((function(e,t){var o,r;let a=(0,s.M)(),{id:l=`headlessui-combobox-option-${a}`,disabled:i=!1,value:p,...f}=e,m=Z("Combobox.Option"),v=q("Combobox.Option"),x=null!==m.activeOptionIndex&&m.options[m.activeOptionIndex].id===l,C=m.isSelected(p),T=(0,n.useRef)(null),h=(0,d.E)({disabled:i,value:p,domRef:T,textValue:null==(r=null==(o=T.current)?void 0:o.textContent)?void 0:r.toLowerCase()}),S=(0,b.T)(t,T),I=(0,u.z)((()=>v.selectOption(l)));(0,c.e)((()=>v.registerOption(l,h)),[h,l]);let E=(0,n.useRef)(!m.__demoMode);(0,c.e)((()=>{if(!m.__demoMode)return;let e=(0,R.k)();return e.requestAnimationFrame((()=>{E.current=!0})),e.dispose}),[]),(0,c.e)((()=>{if(0!==m.comboboxState||!x||!E.current||0===m.activationTrigger)return;let e=(0,R.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=T.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[T,x,m.comboboxState,m.activationTrigger,m.activeOptionIndex]);let P=(0,u.z)((e=>{if(i)return e.preventDefault();I(),0===m.mode&&v.closeCombobox(),(0,M.tq)()||requestAnimationFrame((()=>{var e;return null==(e=m.inputRef.current)?void 0:e.focus()}))})),y=(0,u.z)((()=>{if(i)return v.goToOption(g.T.Nothing);v.goToOption(g.T.Specific,l)})),w=(0,_.g)(),k=(0,u.z)((e=>w.update(e))),N=(0,u.z)((e=>{w.wasMoved(e)&&(i||x||v.goToOption(g.T.Specific,l,0))})),A=(0,u.z)((e=>{w.wasMoved(e)&&(i||x&&(m.optionsPropsRef.current.hold||v.goToOption(g.T.Nothing)))})),F=(0,n.useMemo)((()=>({active:x,selected:C,disabled:i})),[x,C,i]);return(0,O.sY)({ourProps:{id:l,ref:S,role:"option",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,"aria-selected":C,disabled:void 0,onClick:P,onFocus:y,onPointerEnter:k,onMouseEnter:k,onPointerMove:N,onMouseMove:N,onPointerLeave:A,onMouseLeave:A},theirProps:f,slot:F,defaultTag:"li",name:"Combobox.Option"})})),J=Object.assign(Y,{Input:K,Button:G,Label:U,Options:H,Option:W});var Q=o(4080),X=o(8057),ee=o(1013),te=o(5506),oe=o(4184),ne=o.n(oe),re=o(6486),ae=o(7201),le=o(7381);const ie=(0,n.forwardRef)(((e,t)=>(0,n.createElement)(J.Button,{as:"div",ref:t,...e}))),ue=({children:e,value:t})=>{const o=(0,ae.Z)(),r=(0,n.useCallback)((({active:e,selected:t})=>ne()("nfd-autocomplete__option",t&&"nfd-autocomplete__option--selected",e&&!t&&"nfd-autocomplete__option--active")),[]);return(0,n.createElement)(J.Option,{className:r,value:t},(({selected:t})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:ne()("nfd-autocomplete__option-label",t&&"nfd-font-semibold")},e),t&&(0,n.createElement)(X.Z,{className:"nfd-autocomplete__option-check",...o}))))},se={children:a().node,value:a().oneOfType([a().string,a().number,a().bool]).isRequired};ue.propTypes=se;const ce=({onChange:e,svgAriaProps:t,screenReaderText:o})=>{const r=(0,n.useCallback)((t=>{t.preventDefault(),e(null)}),[e]);return(0,n.createElement)("button",{className:"nfd-mr-4 nfd-flex nfd-items-center",onClick:r},(0,n.createElement)("span",{className:"nfd-sr-only"},o),(0,n.createElement)(te.Z,{className:"nfd-text-slate-400 nfd-w-5 nfd-h-5",...t}),(0,n.createElement)("div",{className:"nfd-w-2 nfd-mr-2 nfd-border-r-slate-200 nfd-border-r nfd-h-7"}))};ce.propTypes={onChange:a().func.isRequired,svgAriaProps:a().object.isRequired,screenReaderText:a().string.isRequired};const de=(0,n.forwardRef)((({id:e,value:t,children:o,selectedLabel:r,label:a,labelProps:l,labelSuffix:i,onChange:u,onQueryChange:s,validation:c,placeholder:d,className:p,buttonProps:f,clearButtonScreenReaderText:b,...m},v)=>{const x=(0,n.useCallback)((0,re.constant)(r),[r]),g=(0,ae.Z)();return(0,n.createElement)(J,{ref:v,as:"div",value:t,onChange:u,className:ne()("nfd-autocomplete",p),...m},a&&(0,n.createElement)("div",{className:"nfd-flex nfd-items-center nfd-mb-2"},(0,n.createElement)(J.Label,{...l},a),i),(0,n.createElement)("div",{className:"nfd-relative"},(0,n.createElement)(le.Z,{as:ie,"data-id":e,validation:c,className:"nfd-autocomplete__button",...f},(0,n.createElement)(J.Input,{className:"nfd-autocomplete__input",autoComplete:"off",placeholder:d,displayValue:x,onChange:s}),m.nullable&&r&&(0,n.createElement)(ce,{onChange:u,svgAriaProps:g,screenReaderText:b}),!(null!=c&&c.message)&&(0,n.createElement)(ee.Z,{className:"nfd-autocomplete__button-icon",...g})),(0,n.createElement)(Q.u,{as:n.Fragment,enter:"nfd-transition nfd-duration-100 nfd-ease-out",enterFrom:"nfd-transform nfd-scale-95 nfd-opacity-0",enterTo:"nfd-transform nfd-scale-100 nfd-opacity-100",leave:"nfd-transition nfd-duration-75 nfd-ease-out",leaveFrom:"nfd-transform nfd-scale-100 nfd-opacity-100",leaveTo:"nfd-transform nfd-scale-95 nfd-opacity-0"},(0,n.createElement)(J.Options,{className:"nfd-autocomplete__options"},o))))}));de.Option=ue,de.Option.displayName="Autocomplete.Option";const pe={id:a().string.isRequired,value:a().oneOfType([a().string,a().number,a().bool]),children:a().node,selectedLabel:a().string,label:a().string,labelProps:a().object,labelSuffix:a().node,onChange:a().func.isRequired,onQueryChange:a().func.isRequired,validation:a().shape({variant:a().string,message:a().node}),placeholder:a().string,className:a().string,buttonProps:a().object,clearButtonScreenReaderText:a().string};de.propTypes=pe,de.defaultProps={children:null,value:null,selectedLabel:"",label:"",labelProps:{},labelSuffix:null,validation:{},placeholder:"",className:"",buttonProps:{},clearButtonScreenReaderText:"Clear"};const fe=de,be=e=>(0,n.createElement)(de,{...e});be.propTypes=pe,be.defaultProps=de.defaultProps,be.displayName="Autocomplete"},6599:(e,t,o)=>{o.d(t,{q:()=>a});var n=o(7294),r=o(3781);function a(e,t){let o=(0,n.useRef)([]),a=(0,r.z)(e);(0,n.useEffect)((()=>{let e=[...o.current];for(let[n,r]of t.entries())if(o.current[n]!==r){let n=a(t,e);return o.current=t,n}}),[a,...t])}},8657:(e,t,o)=>{function n(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function r(){return n()||/Android/gi.test(window.navigator.userAgent)}o.d(t,{gn:()=>n,tq:()=>r})},5506:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))}}]);