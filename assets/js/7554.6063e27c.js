"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[7554],{9516:(e,t,n)=>{n.d(t,{d:()=>p,f:()=>d});var r=n(7294),o=n(9946),l=n(2351),i=n(6723),u=n(3784),a=n(3781);let s=(0,r.createContext)(null);function c(){let e=(0,r.useContext)(s);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,c),e}return e}function d(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,a.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(s.Provider,{value:o},e.children)}),[t])]}let f=(0,l.yV)((function(e,t){let n=(0,o.M)(),{id:r=`headlessui-description-${n}`,...a}=e,s=c(),d=(0,u.T)(t);(0,i.e)((()=>s.register(r)),[r,s.register]);let f={ref:d,...s.props,id:r};return(0,l.sY)({ourProps:f,theirProps:a,slot:s.slot||{},defaultTag:"p",name:s.name||"Description"})})),p=Object.assign(f,{})},2796:(e,t,n)=>{n.d(t,{V:()=>ke});var r=n(7294),o=n.t(r,2),l=n(2984),i=n(2351),u=n(3784),a=n(1363),s=n(4103),c=n(9946),d=n(2180),f=n(6045),p=n(4575),m=n(3781),v=n(7815),h=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(h||{});var g=n(4879),E=n(5466);function w(...e){return(0,r.useMemo)((()=>(0,E.r)(...e)),[...e])}var y=n(3855);function b(e,t,n,o){let l=(0,y.E)(n);(0,r.useEffect)((()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var T=n(1021),O=n(6599),P=n(4192);function S(e){let t=(0,m.z)(e),n=(0,r.useRef)(!1);(0,r.useEffect)((()=>(n.current=!1,()=>{n.current=!0,(0,T.Y)((()=>{n.current&&t()}))})),[t])}function L(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var C,A=((C=A||{})[C.None=1]="None",C[C.InitialFocus=2]="InitialFocus",C[C.TabLock=4]="TabLock",C[C.FocusLock=8]="FocusLock",C[C.RestoreFocus=16]="RestoreFocus",C[C.All=30]="All",C);let M=(0,i.yV)((function(e,t){let n=(0,r.useRef)(null),o=(0,u.T)(n,t),{initialFocus:a,containers:s,features:c=30,...E}=e;(0,d.H)()||(c=1);let y=w(n);N({ownerDocument:y},Boolean(16&c));let S=function({ownerDocument:e,container:t,initialFocus:n},o){let l=(0,r.useRef)(null),i=(0,g.t)();return(0,O.q)((()=>{if(!o)return;let r=t.current;r&&(0,T.Y)((()=>{if(!i.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(l.current=t)}else if(r.contains(t))return void(l.current=t);null!=n&&n.current?(0,p.C5)(n.current):(0,p.jA)(r,p.TO.First)===p.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==e?void 0:e.activeElement}))}),[o]),l}({ownerDocument:y,container:n,initialFocus:a},Boolean(2&c));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,g.t)();b(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!l.current)return;let i=L(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?R(i,a)?(r.current=a,(0,p.C5)(a)):(e.preventDefault(),e.stopPropagation(),(0,p.C5)(u)):(0,p.C5)(r.current)}),!0)}({ownerDocument:y,container:n,containers:s,previousActiveElement:S},Boolean(8&c));let C=function(){let e=(0,r.useRef)(0);return(0,v.s)("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}(),A=(0,m.z)((e=>{let t=n.current;t&&(0,l.E)(C.current,{[h.Forwards]:()=>{(0,p.jA)(t,p.TO.First,{skipElements:[e.relatedTarget]})},[h.Backwards]:()=>{(0,p.jA)(t,p.TO.Last,{skipElements:[e.relatedTarget]})}})})),M=(0,P.G)(),F=(0,r.useRef)(!1),k={ref:o,onKeyDown(e){"Tab"==e.key&&(F.current=!0,M.requestAnimationFrame((()=>{F.current=!1})))},onBlur(e){let t=L(s);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(R(t,r)||(F.current?(0,p.jA)(n.current,(0,l.E)(C.current,{[h.Forwards]:()=>p.TO.Next,[h.Backwards]:()=>p.TO.Previous})|p.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,p.C5)(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&c)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:f.A.Focusable}),(0,i.sY)({ourProps:k,theirProps:E,defaultTag:"div",name:"FocusTrap"}),Boolean(4&c)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:f.A.Focusable}))})),F=Object.assign(M,{features:A}),k=[];function N({ownerDocument:e},t){let n=function(e=!0){let t=(0,r.useRef)(k.slice());return(0,O.q)((([e],[n])=>{!0===n&&!1===e&&(0,T.Y)((()=>{t.current.splice(0)})),!1===n&&!0===e&&(t.current=k.slice())}),[e,k,t]),(0,m.z)((()=>{var e;return null!=(e=t.current.find((e=>null!=e&&e.isConnected)))?e:null}))}(t);(0,O.q)((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,p.C5)(n())}),[t]),S((()=>{t&&(0,p.C5)(n())}))}function R(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}((()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&k[0]!==e.target&&(k.unshift(e.target),k=k.filter((e=>null!=e&&e.isConnected)),k.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}));var D=n(3935),x=n(6723);let j=(0,r.createContext)(!1);function H(){return(0,r.useContext)(j)}function I(e){return r.createElement(j.Provider,{value:e.force},e.children)}var Y=n(7896);let V=r.Fragment;let _=r.Fragment,B=(0,r.createContext)(null);let z=(0,r.createContext)(null);function q(){let e=(0,r.useContext)(z),t=(0,r.useRef)([]),n=(0,m.z)((n=>(t.current.push(n),e&&e.register(n),()=>o(n)))),o=(0,m.z)((n=>{let r=t.current.indexOf(n);-1!==r&&t.current.splice(r,1),e&&e.unregister(n)})),l=(0,r.useMemo)((()=>({register:n,unregister:o,portals:t})),[n,o,t]);return[t,(0,r.useMemo)((()=>function({children:e}){return r.createElement(z.Provider,{value:l},e)}),[l])]}let $=(0,i.yV)((function(e,t){let n=e,o=(0,r.useRef)(null),l=(0,u.T)((0,u.h)((e=>{o.current=e})),t),a=w(o),s=function(e){let t=H(),n=(0,r.useContext)(B),o=w(e),[l,i]=(0,r.useState)((()=>{if(!t&&null!==n||Y.O.isServer)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=o&&o.body.contains(l)||null==o||o.body.appendChild(l))}),[l,o]),(0,r.useEffect)((()=>{t||null!==n&&i(n.current)}),[n,i,t]),l}(o),[c]=(0,r.useState)((()=>{var e;return Y.O.isServer?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),f=(0,r.useContext)(z),p=(0,d.H)();return(0,x.e)((()=>{!s||!c||s.contains(c)||(c.setAttribute("data-headlessui-portal",""),s.appendChild(c))}),[s,c]),(0,x.e)((()=>{if(c&&f)return f.register(c)}),[f,c]),S((()=>{var e;!s||!c||(c instanceof Node&&s.contains(c)&&s.removeChild(c),s.childNodes.length<=0&&(null==(e=s.parentElement)||e.removeChild(s)))})),p&&s&&c?(0,D.createPortal)((0,i.sY)({ourProps:{ref:l},theirProps:n,defaultTag:V,name:"Portal"}),c):null})),U=(0,i.yV)((function(e,t){let{target:n,...o}=e,l={ref:(0,u.T)(t)};return r.createElement(B.Provider,{value:n},(0,i.sY)({ourProps:l,theirProps:o,defaultTag:_,name:"Popover.Group"}))})),W=Object.assign($,{Group:U});var G=n(9516),K=n(6567);let Z=(0,r.createContext)((()=>{}));Z.displayName="StackContext";var J=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(J||{});function X({children:e,onUpdate:t,type:n,element:o,enabled:l}){let i=(0,r.useContext)(Z),u=(0,m.z)(((...e)=>{null==t||t(...e),i(...e)}));return(0,x.e)((()=>{let e=void 0===l||!0===l;return e&&u(0,n,o),()=>{e&&u(1,n,o)}}),[u,n,o,l]),r.createElement(Z.Provider,{value:u},e)}var Q=n(9650);const ee="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:te,useEffect:ne,useLayoutEffect:re,useDebugValue:oe}=o;function le(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!ee(n,e)}catch{return!0}}const ie=!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:o},l]=te({inst:{value:r,getSnapshot:t}});return re((()=>{o.value=r,o.getSnapshot=t,le(o)&&l({inst:o})}),[e,r,t]),ne((()=>(le(o)&&l({inst:o}),e((()=>{le(o)&&l({inst:o})})))),[e]),oe(r),r},ue=ie;var ae=n(9362);function se(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}var ce=n(8657);function de(){if(!(0,ce.gn)())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),i=t.querySelector(r);i&&!o(i)&&(l=i)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)}))}}}function fe(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let pe=function(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...o){let l=t[e].call(n,...o);l&&(n=l,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,ae.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:fe(n)},o=[de(),se(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];o.forEach((({before:e})=>null==e?void 0:e(r))),o.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function me(e,t,n){let r=function(e){return ue(e.subscribe,e.getSnapshot,e.getSnapshot)}(pe),o=e?r.get(e):void 0,l=!!o&&o.count>0;return(0,x.e)((()=>{if(e&&t)return pe.dispatch("PUSH",e,n),()=>pe.dispatch("POP",e,n)}),[t,e]),l}pe.subscribe((()=>{let e=pe.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&pe.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&pe.dispatch("TEARDOWN",n)}}));let ve=new Map,he=new Map;function ge(e,t=!0){(0,x.e)((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=he.get(r))?n:0;return he.set(r,o+1),0!==o||(ve.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=he.get(r))?e:1;if(1===t?he.delete(r):he.set(r,t-1),1!==t)return;let n=ve.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,ve.delete(r))}}),[e,t])}var Ee,we=((Ee=we||{})[Ee.Open=0]="Open",Ee[Ee.Closed=1]="Closed",Ee),ye=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ye||{});let be={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},Te=(0,r.createContext)(null);function Oe(e){let t=(0,r.useContext)(Te);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Oe),t}return t}function Pe(e,t){return(0,l.E)(t.type,be,e,t)}Te.displayName="DialogContext";let Se=i.AN.RenderStrategy|i.AN.Static;let Le=(0,i.yV)((function(e,t){var n;let o=(0,c.M)(),{id:s=`headlessui-dialog-${o}`,open:p,onClose:v,initialFocus:h,__demoMode:g=!1,...E}=e,[y,T]=(0,r.useState)(0),O=(0,K.oJ)();void 0===p&&null!==O&&(p=(O&K.ZM.Open)===K.ZM.Open);let P=(0,r.useRef)(null),S=(0,u.T)(P,t),L=w(P),C=e.hasOwnProperty("open")||null!==O,A=e.hasOwnProperty("onClose");if(!C&&!A)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!C)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!A)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof p)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p}`);if("function"!=typeof v)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${v}`);let M=p?0:1,[k,N]=(0,r.useReducer)(Pe,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),R=(0,m.z)((()=>v(!1))),D=(0,m.z)((e=>N({type:0,id:e}))),x=!!(0,d.H)()&&(!g&&0===M),j=y>1,H=null!==(0,r.useContext)(Te),[Y,V]=q(),{resolveContainers:_,mainTreeNodeRef:B,MainTreeNode:z}=function({defaultContainers:e=[],portals:t}={}){let n=(0,r.useRef)(null),o=w(n),l=(0,m.z)((()=>{var r;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(r=null==o?void 0:o.querySelectorAll("html > *, body > *"))?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||l.some((t=>e.contains(t)))||l.push(e));return l}));return{resolveContainers:l,contains:(0,m.z)((e=>l().some((t=>t.contains(e))))),mainTreeNodeRef:n,MainTreeNode:(0,r.useMemo)((()=>function(){return r.createElement(f._,{features:f.A.Hidden,ref:n})}),[n])}}({portals:Y,defaultContainers:[null!=(n=k.panelRef.current)?n:P.current]}),$=j?"parent":"leaf",U=null!==O&&(O&K.ZM.Closing)===K.ZM.Closing,Z=!H&&!U&&x,ee=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==L?void 0:L.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(B.current)&&e instanceof HTMLElement))))?t:null}),[B]);ge(ee,Z);let te=!!j||x,ne=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==L?void 0:L.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(B.current)&&e instanceof HTMLElement)))?t:null}),[B]);ge(ne,te);let re=!(!x||j);(0,Q.O)(_,R,re);let oe=!(j||0!==M);b(null==L?void 0:L.defaultView,"keydown",(e=>{oe&&(e.defaultPrevented||e.key===a.R.Escape&&(e.preventDefault(),e.stopPropagation(),R()))})),function(e,t,n=(()=>[document.body])){me(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(L,!(U||0!==M||H),_),(0,r.useEffect)((()=>{if(0!==M||!P.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&R()}}));return e.observe(P.current),()=>e.disconnect()}),[M,P,R]);let[le,ie]=(0,G.f)(),ue=(0,r.useMemo)((()=>[{dialogState:M,close:R,setTitleId:D},k]),[M,k,R,D]),ae=(0,r.useMemo)((()=>({open:0===M})),[M]),se={ref:S,id:s,role:"dialog","aria-modal":0===M||void 0,"aria-labelledby":k.titleId,"aria-describedby":le};return r.createElement(X,{type:"Dialog",enabled:0===M,element:P,onUpdate:(0,m.z)(((e,t)=>{"Dialog"===t&&(0,l.E)(e,{[J.Add]:()=>T((e=>e+1)),[J.Remove]:()=>T((e=>e-1))})}))},r.createElement(I,{force:!0},r.createElement(W,null,r.createElement(Te.Provider,{value:ue},r.createElement(W.Group,{target:P},r.createElement(I,{force:!1},r.createElement(ie,{slot:ae,name:"Dialog.Description"},r.createElement(F,{initialFocus:h,containers:_,features:x?(0,l.E)($,{parent:F.features.RestoreFocus,leaf:F.features.All&~F.features.FocusLock}):F.features.None},r.createElement(V,null,(0,i.sY)({ourProps:se,theirProps:E,slot:ae,defaultTag:"div",features:Se,visible:0===M,name:"Dialog"}))))))))),r.createElement(z,null))})),Ce=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},s]=Oe("Dialog.Backdrop"),d=(0,u.T)(t);(0,r.useEffect)((()=>{if(null===s.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[s.panelRef]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return r.createElement(I,{force:!0},r.createElement(W,null,(0,i.sY)({ourProps:{ref:d,id:o,"aria-hidden":!0},theirProps:l,slot:f,defaultTag:"div",name:"Dialog.Backdrop"})))})),Ae=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},s]=Oe("Dialog.Panel"),d=(0,u.T)(t,s.panelRef),f=(0,r.useMemo)((()=>({open:0===a})),[a]),p=(0,m.z)((e=>{e.stopPropagation()}));return(0,i.sY)({ourProps:{ref:d,id:o,onClick:p},theirProps:l,slot:f,defaultTag:"div",name:"Dialog.Panel"})})),Me=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:d}]=Oe("Dialog.Overlay"),f=(0,u.T)(t),p=(0,m.z)((e=>{if(e.target===e.currentTarget){if((0,s.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),d()}})),v=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,i.sY)({ourProps:{ref:f,id:o,"aria-hidden":!0,onClick:p},theirProps:l,slot:v,defaultTag:"div",name:"Dialog.Overlay"})})),Fe=(0,i.yV)((function(e,t){let n=(0,c.M)(),{id:o=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:s}]=Oe("Dialog.Title"),d=(0,u.T)(t);(0,r.useEffect)((()=>(s(o),()=>s(null))),[o,s]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,i.sY)({ourProps:{ref:d,id:o},theirProps:l,slot:f,defaultTag:"h2",name:"Dialog.Title"})})),ke=Object.assign(Le,{Backdrop:Ce,Panel:Ae,Overlay:Me,Title:Fe,Description:G.d})},1363:(e,t,n)=>{n.d(t,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},4192:(e,t,n)=>{n.d(t,{G:()=>l});var r=n(7294),o=n(9362);function l(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},3781:(e,t,n)=>{n.d(t,{z:()=>l});var r=n(7294),o=n(3855);let l=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},9946:(e,t,n)=>{n.d(t,{M:()=>a});var r,o=n(7294),l=n(6723),i=n(2180),u=n(7896);let a=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?()=>u.O.nextId():null);return(0,l.e)((()=>{null===t&&n(u.O.nextId())}),[t]),null!=t?""+t:void 0}},4879:(e,t,n)=>{n.d(t,{t:()=>l});var r=n(7294),o=n(6723);function l(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},6723:(e,t,n)=>{n.d(t,{e:()=>l});var r=n(7294),o=n(7896);let l=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:(e,t,n)=>{n.d(t,{E:()=>l});var r=n(7294),o=n(6723);function l(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},9650:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(7294),o=n(4575),l=n(3855);function i(e,t,n){let o=(0,l.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var u=n(7815);function a(e,t,n=!0){let l=(0,r.useRef)(!1);function a(n,r){if(!l.current||n.defaultPrevented)return;let i=r(n);if(null===i||!i.getRootNode().contains(i)||!i.isConnected)return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of u){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i)||n.composed&&n.composedPath().includes(t))return}return!(0,o.sP)(i,o.tJ.Loose)&&-1!==i.tabIndex&&n.preventDefault(),t(n,i)}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{l.current=n}))}),[n]);let s=(0,r.useRef)(null);i("pointerdown",(e=>{var t,n;l.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),i("mousedown",(e=>{var t,n;l.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),i("click",(e=>{s.current&&(a(e,(()=>s.current)),s.current=null)}),!0),i("touchend",(e=>a(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,u.s)("blur",(e=>a(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},2180:(e,t,n)=>{n.d(t,{H:()=>l});var r=n(7294),o=n(7896);function l(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>o.O.handoff()),[]),e}},3784:(e,t,n)=>{n.d(t,{T:()=>u,h:()=>i});var r=n(7294),o=n(3781);let l=Symbol();function i(e,t=!0){return Object.assign(e,{[l]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[l])))?void 0:n}},6599:(e,t,n)=>{n.d(t,{q:()=>l});var r=n(7294),o=n(3781);function l(e,t){let n=(0,r.useRef)([]),l=(0,o.z)(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,o]of t.entries())if(n.current[r]!==o){let r=l(t,e);return n.current=t,r}}),[l,...t])}},7815:(e,t,n)=>{n.d(t,{s:()=>l});var r=n(7294),o=n(3855);function l(e,t,n){let l=(0,o.E)(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},6045:(e,t,n)=>{n.d(t,{A:()=>l,_:()=>i});var r=n(2351);var o,l=((o=l||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let i=(0,r.yV)((function(e,t){let{features:n=1,...o}=e,l={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,r.sY)({ourProps:l,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}))},6567:(e,t,n)=>{n.d(t,{ZM:()=>i,oJ:()=>u,up:()=>a});var r=n(7294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var l,i=((l=i||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function u(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},4103:(e,t,n)=>{function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:()=>r})},4067:(e,t,n)=>{function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:()=>r})},9362:(e,t,n)=>{n.d(t,{k:()=>o});var r=n(1021);function o(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,r.Y)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},7896:(e,t,n)=>{n.d(t,{O:()=>l});var r=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},4575:(e,t,n)=>{n.d(t,{C5:()=>h,TO:()=>s,fE:()=>c,jA:()=>w,sP:()=>m,tJ:()=>p,z2:()=>E});var r=n(2984),o=n(5466);let l=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var i,u,a,s=((a=s||{})[a.First=1]="First",a[a.Previous=2]="Previous",a[a.Next=4]="Next",a[a.Last=8]="Last",a[a.WrapAround=16]="WrapAround",a[a.NoScroll=32]="NoScroll",a),c=((u=c||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),d=((i=d||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function f(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(l)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var p=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(p||{});function m(e,t=0){var n;return e!==(null==(n=(0,o.r)(e))?void 0:n.body)&&(0,r.E)(t,{0:()=>e.matches(l),1(){let t=e;for(;null!==t;){if(t.matches(l))return!0;t=t.parentElement}return!1}})}var v=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(v||{});function h(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let g=["textarea","input"].join(",");function E(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function w(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?E(e):e:f(e);o.length>0&&i.length>1&&(i=i.filter((e=>!o.includes(e)))),r=null!=r?r:l.activeElement;let u,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,i.indexOf(r))-1;if(4&t)return Math.max(0,i.indexOf(r))+1;if(8&t)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,p=i.length;do{if(d>=p||d+p<=0)return 0;let e=s+d;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}u=i[e],null==u||u.focus(c),d+=a}while(u!==l.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,g))&&n}(u)&&u.select(),2}},2984:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:()=>r})},1021:(e,t,n)=>{function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:()=>r})},5466:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(7896);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},8657:(e,t,n)=>{function r(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function o(){return r()||/Android/gi.test(window.navigator.userAgent)}n.d(t,{gn:()=>r,tq:()=>o})},2351:(e,t,n)=>{n.d(t,{AN:()=>a,l4:()=>s,oA:()=>m,sY:()=>c,yV:()=>p});var r,o,l=n(7294),i=n(4067),u=n(2984),a=((o=a||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i}){let a=f(t,e);if(l)return d(a,n,r,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,u.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return d(a,n,r,i)}function d(e,t={},n,r){let{as:o=n,children:u,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof u?u(t):u;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===l.Fragment&&Object.keys(m(s)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,l.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,l.createElement)(o,Object.assign({},v(s,["ref"]),o!==l.Fragment&&c,o!==l.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},5506:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))}}]);