import{r as o,j as r,d as Pe}from"./app-BSpTI7g3.js";import{v as mt,i as ht,j as Re,A as vt,P as j,k as P,w as z,m as gt,u as xt,R as St,F as wt,n as yt,o as Ct,t as Ie,p as It,V as Tt,x as bt,y as Nt,r as be,s as Pt,q as Rt,C as Et}from"./index-DoX99EMX.js";import{u as L,S as _t,c as G}from"./button-ohafPp-T.js";import{c as Ee}from"./createLucideIcon-CDc2HlfE.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=Ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=Ee("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function Ne(t,[n,e]){return Math.min(e,Math.max(n,t))}function Mt(t){const n=o.useRef({value:t,previous:t});return o.useMemo(()=>(n.current.value!==t&&(n.current.previous=n.current.value,n.current.value=t),n.current.previous),[t])}var At=[" ","Enter","ArrowUp","ArrowDown"],Ot=[" ","Enter"],se="Select",[ie,de,Dt]=mt(se),[te,ho]=ht(se,[Dt,Re]),ue=Re(),[kt,q]=te(se),[Lt,Vt]=te(se),je=t=>{const{__scopeSelect:n,children:e,open:a,defaultOpen:c,onOpenChange:p,value:l,defaultValue:i,onValueChange:s,dir:f,name:g,autoComplete:w,disabled:b,required:N,form:T}=t,d=ue(n),[v,y]=o.useState(null),[u,h]=o.useState(null),[M,A]=o.useState(!1),oe=Nt(f),[R=!1,D]=be({prop:a,defaultProp:c,onChange:p}),[W,X]=be({prop:l,defaultProp:i,onChange:s}),V=o.useRef(null),B=v?T||!!v.closest("form"):!0,[K,H]=o.useState(new Set),F=Array.from(K).map(E=>E.props.value).join(";");return r.jsx(Pt,{...d,children:r.jsxs(kt,{required:N,scope:n,trigger:v,onTriggerChange:y,valueNode:u,onValueNodeChange:h,valueNodeHasChildren:M,onValueNodeHasChildrenChange:A,contentId:Ie(),value:W,onValueChange:X,open:R,onOpenChange:D,dir:oe,triggerPointerDownPosRef:V,disabled:b,children:[r.jsx(ie.Provider,{scope:n,children:r.jsx(Lt,{scope:t.__scopeSelect,onNativeOptionAdd:o.useCallback(E=>{H(k=>new Set(k).add(E))},[]),onNativeOptionRemove:o.useCallback(E=>{H(k=>{const U=new Set(k);return U.delete(E),U})},[]),children:e})}),B?r.jsxs(ot,{"aria-hidden":!0,required:N,tabIndex:-1,name:g,autoComplete:w,value:W,onChange:E=>X(E.target.value),disabled:b,form:T,children:[W===void 0?r.jsx("option",{value:""}):null,Array.from(K)]},F):null]})})};je.displayName=se;var Me="SelectTrigger",Ae=o.forwardRef((t,n)=>{const{__scopeSelect:e,disabled:a=!1,...c}=t,p=ue(e),l=q(Me,e),i=l.disabled||a,s=L(n,l.onTriggerChange),f=de(e),g=o.useRef("touch"),[w,b,N]=nt(d=>{const v=f().filter(h=>!h.disabled),y=v.find(h=>h.value===l.value),u=rt(v,d,y);u!==void 0&&l.onValueChange(u.value)}),T=d=>{i||(l.onOpenChange(!0),N()),d&&(l.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return r.jsx(vt,{asChild:!0,...p,children:r.jsx(j.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":tt(l.value)?"":void 0,...c,ref:s,onClick:P(c.onClick,d=>{d.currentTarget.focus(),g.current!=="mouse"&&T(d)}),onPointerDown:P(c.onPointerDown,d=>{g.current=d.pointerType;const v=d.target;v.hasPointerCapture(d.pointerId)&&v.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(T(d),d.preventDefault())}),onKeyDown:P(c.onKeyDown,d=>{const v=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&b(d.key),!(v&&d.key===" ")&&At.includes(d.key)&&(T(),d.preventDefault())})})})});Ae.displayName=Me;var Oe="SelectValue",De=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:a,style:c,children:p,placeholder:l="",...i}=t,s=q(Oe,e),{onValueNodeHasChildrenChange:f}=s,g=p!==void 0,w=L(n,s.onValueNodeChange);return z(()=>{f(g)},[f,g]),r.jsx(j.span,{...i,ref:w,style:{pointerEvents:"none"},children:tt(s.value)?r.jsx(r.Fragment,{children:l}):p})});De.displayName=Oe;var Bt="SelectIcon",ke=o.forwardRef((t,n)=>{const{__scopeSelect:e,children:a,...c}=t;return r.jsx(j.span,{"aria-hidden":!0,...c,ref:n,children:a||"▼"})});ke.displayName=Bt;var Ht="SelectPortal",Le=t=>r.jsx(Rt,{asChild:!0,...t});Le.displayName=Ht;var Q="SelectContent",Ve=o.forwardRef((t,n)=>{const e=q(Q,t.__scopeSelect),[a,c]=o.useState();if(z(()=>{c(new DocumentFragment)},[]),!e.open){const p=a;return p?Pe.createPortal(r.jsx(Be,{scope:t.__scopeSelect,children:r.jsx(ie.Slot,{scope:t.__scopeSelect,children:r.jsx("div",{children:t.children})})}),p):null}return r.jsx(He,{...t,ref:n})});Ve.displayName=Q;var O=10,[Be,Y]=te(Q),Ft="SelectContentImpl",He=o.forwardRef((t,n)=>{const{__scopeSelect:e,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:p,onPointerDownOutside:l,side:i,sideOffset:s,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:N,sticky:T,hideWhenDetached:d,avoidCollisions:v,...y}=t,u=q(Q,e),[h,M]=o.useState(null),[A,oe]=o.useState(null),R=L(n,m=>M(m)),[D,W]=o.useState(null),[X,V]=o.useState(null),B=de(e),[K,H]=o.useState(!1),F=o.useRef(!1);o.useEffect(()=>{if(h)return gt(h)},[h]),xt();const E=o.useCallback(m=>{const[I,..._]=B().map(S=>S.ref.current),[C]=_.slice(-1),x=document.activeElement;for(const S of m)if(S===x||(S==null||S.scrollIntoView({block:"nearest"}),S===I&&A&&(A.scrollTop=0),S===C&&A&&(A.scrollTop=A.scrollHeight),S==null||S.focus(),document.activeElement!==x))return},[B,A]),k=o.useCallback(()=>E([D,h]),[E,D,h]);o.useEffect(()=>{K&&k()},[K,k]);const{onOpenChange:U,triggerPointerDownPosRef:$}=u;o.useEffect(()=>{if(h){let m={x:0,y:0};const I=C=>{var x,S;m={x:Math.abs(Math.round(C.pageX)-(((x=$.current)==null?void 0:x.x)??0)),y:Math.abs(Math.round(C.pageY)-(((S=$.current)==null?void 0:S.y)??0))}},_=C=>{m.x<=10&&m.y<=10?C.preventDefault():h.contains(C.target)||U(!1),document.removeEventListener("pointermove",I),$.current=null};return $.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",_,{capture:!0})}}},[h,U,$]),o.useEffect(()=>{const m=()=>U(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[U]);const[pe,ae]=nt(m=>{const I=B().filter(x=>!x.disabled),_=I.find(x=>x.ref.current===document.activeElement),C=rt(I,m,_);C&&setTimeout(()=>C.ref.current.focus())}),fe=o.useCallback((m,I,_)=>{const C=!F.current&&!_;(u.value!==void 0&&u.value===I||C)&&(W(m),C&&(F.current=!0))},[u.value]),me=o.useCallback(()=>h==null?void 0:h.focus(),[h]),ee=o.useCallback((m,I,_)=>{const C=!F.current&&!_;(u.value!==void 0&&u.value===I||C)&&V(m)},[u.value]),le=a==="popper"?xe:Fe,ne=le===xe?{side:i,sideOffset:s,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:N,sticky:T,hideWhenDetached:d,avoidCollisions:v}:{};return r.jsx(Be,{scope:e,content:h,viewport:A,onViewportChange:oe,itemRefCallback:fe,selectedItem:D,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:k,selectedItemText:X,position:a,isPositioned:K,searchRef:pe,children:r.jsx(St,{as:_t,allowPinchZoom:!0,children:r.jsx(wt,{asChild:!0,trapped:u.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:P(c,m=>{var I;(I=u.trigger)==null||I.focus({preventScroll:!0}),m.preventDefault()}),children:r.jsx(yt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>u.onOpenChange(!1),children:r.jsx(le,{role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:m=>m.preventDefault(),...y,...ne,onPlaced:()=>H(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:P(y.onKeyDown,m=>{const I=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!I&&m.key.length===1&&ae(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let C=B().filter(x=>!x.disabled).map(x=>x.ref.current);if(["ArrowUp","End"].includes(m.key)&&(C=C.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const x=m.target,S=C.indexOf(x);C=C.slice(S+1)}setTimeout(()=>E(C)),m.preventDefault()}})})})})})})});He.displayName=Ft;var Ut="SelectItemAlignedPosition",Fe=o.forwardRef((t,n)=>{const{__scopeSelect:e,onPlaced:a,...c}=t,p=q(Q,e),l=Y(Q,e),[i,s]=o.useState(null),[f,g]=o.useState(null),w=L(n,R=>g(R)),b=de(e),N=o.useRef(!1),T=o.useRef(!0),{viewport:d,selectedItem:v,selectedItemText:y,focusSelectedItem:u}=l,h=o.useCallback(()=>{if(p.trigger&&p.valueNode&&i&&f&&d&&v&&y){const R=p.trigger.getBoundingClientRect(),D=f.getBoundingClientRect(),W=p.valueNode.getBoundingClientRect(),X=y.getBoundingClientRect();if(p.dir!=="rtl"){const x=X.left-D.left,S=W.left-x,Z=R.left-S,J=R.width+Z,he=Math.max(J,D.width),ve=window.innerWidth-O,ge=Ne(S,[O,Math.max(O,ve-he)]);i.style.minWidth=J+"px",i.style.left=ge+"px"}else{const x=D.right-X.right,S=window.innerWidth-W.right-x,Z=window.innerWidth-R.right-S,J=R.width+Z,he=Math.max(J,D.width),ve=window.innerWidth-O,ge=Ne(S,[O,Math.max(O,ve-he)]);i.style.minWidth=J+"px",i.style.right=ge+"px"}const V=b(),B=window.innerHeight-O*2,K=d.scrollHeight,H=window.getComputedStyle(f),F=parseInt(H.borderTopWidth,10),E=parseInt(H.paddingTop,10),k=parseInt(H.borderBottomWidth,10),U=parseInt(H.paddingBottom,10),$=F+E+K+U+k,pe=Math.min(v.offsetHeight*5,$),ae=window.getComputedStyle(d),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=R.top+R.height/2-O,le=B-ee,ne=v.offsetHeight/2,m=v.offsetTop+ne,I=F+E+m,_=$-I;if(I<=ee){const x=V.length>0&&v===V[V.length-1].ref.current;i.style.bottom="0px";const S=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,ne+(x?me:0)+S+k),J=I+Z;i.style.height=J+"px"}else{const x=V.length>0&&v===V[0].ref.current;i.style.top="0px";const Z=Math.max(ee,F+d.offsetTop+(x?fe:0)+ne)+_;i.style.height=Z+"px",d.scrollTop=I-ee+d.offsetTop}i.style.margin=`${O}px 0`,i.style.minHeight=pe+"px",i.style.maxHeight=B+"px",a==null||a(),requestAnimationFrame(()=>N.current=!0)}},[b,p.trigger,p.valueNode,i,f,d,v,y,p.dir,a]);z(()=>h(),[h]);const[M,A]=o.useState();z(()=>{f&&A(window.getComputedStyle(f).zIndex)},[f]);const oe=o.useCallback(R=>{R&&T.current===!0&&(h(),u==null||u(),T.current=!1)},[h,u]);return r.jsx(Kt,{scope:e,contentWrapper:i,shouldExpandOnScrollRef:N,onScrollButtonChange:oe,children:r.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:M},children:r.jsx(j.div,{...c,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});Fe.displayName=Ut;var Wt="SelectPopperPosition",xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,align:a="start",collisionPadding:c=O,...p}=t,l=ue(e);return r.jsx(Ct,{...l,...p,ref:n,align:a,collisionPadding:c,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Wt;var[Kt,Te]=te(Q,{}),Se="SelectViewport",Ue=o.forwardRef((t,n)=>{const{__scopeSelect:e,nonce:a,...c}=t,p=Y(Se,e),l=Te(Se,e),i=L(n,p.onViewportChange),s=o.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(ie.Slot,{scope:e,children:r.jsx(j.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:P(c.onScroll,f=>{const g=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:b}=l;if(b!=null&&b.current&&w){const N=Math.abs(s.current-g.scrollTop);if(N>0){const T=window.innerHeight-O*2,d=parseFloat(w.style.minHeight),v=parseFloat(w.style.height),y=Math.max(d,v);if(y<T){const u=y+N,h=Math.min(T,u),M=u-h;w.style.height=h+"px",w.style.bottom==="0px"&&(g.scrollTop=M>0?M:0,w.style.justifyContent="flex-end")}}}s.current=g.scrollTop})})})]})});Ue.displayName=Se;var We="SelectGroup",[$t,zt]=te(We),Gt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=Ie();return r.jsx($t,{scope:e,id:c,children:r.jsx(j.div,{role:"group","aria-labelledby":c,...a,ref:n})})});Gt.displayName=We;var Ke="SelectLabel",$e=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=zt(Ke,e);return r.jsx(j.div,{id:c.id,...a,ref:n})});$e.displayName=Ke;var ce="SelectItem",[qt,ze]=te(ce),Ge=o.forwardRef((t,n)=>{const{__scopeSelect:e,value:a,disabled:c=!1,textValue:p,...l}=t,i=q(ce,e),s=Y(ce,e),f=i.value===a,[g,w]=o.useState(p??""),[b,N]=o.useState(!1),T=L(n,u=>{var h;return(h=s.itemRefCallback)==null?void 0:h.call(s,u,a,c)}),d=Ie(),v=o.useRef("touch"),y=()=>{c||(i.onValueChange(a),i.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(qt,{scope:e,value:a,disabled:c,textId:d,isSelected:f,onItemTextChange:o.useCallback(u=>{w(h=>h||((u==null?void 0:u.textContent)??"").trim())},[]),children:r.jsx(ie.ItemSlot,{scope:e,value:a,disabled:c,textValue:g,children:r.jsx(j.div,{role:"option","aria-labelledby":d,"data-highlighted":b?"":void 0,"aria-selected":f&&b,"data-state":f?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...l,ref:T,onFocus:P(l.onFocus,()=>N(!0)),onBlur:P(l.onBlur,()=>N(!1)),onClick:P(l.onClick,()=>{v.current!=="mouse"&&y()}),onPointerUp:P(l.onPointerUp,()=>{v.current==="mouse"&&y()}),onPointerDown:P(l.onPointerDown,u=>{v.current=u.pointerType}),onPointerMove:P(l.onPointerMove,u=>{var h;v.current=u.pointerType,c?(h=s.onItemLeave)==null||h.call(s):v.current==="mouse"&&u.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(l.onPointerLeave,u=>{var h;u.currentTarget===document.activeElement&&((h=s.onItemLeave)==null||h.call(s))}),onKeyDown:P(l.onKeyDown,u=>{var M;((M=s.searchRef)==null?void 0:M.current)!==""&&u.key===" "||(Ot.includes(u.key)&&y(),u.key===" "&&u.preventDefault())})})})})});Ge.displayName=ce;var re="SelectItemText",qe=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:a,style:c,...p}=t,l=q(re,e),i=Y(re,e),s=ze(re,e),f=Vt(re,e),[g,w]=o.useState(null),b=L(n,y=>w(y),s.onItemTextChange,y=>{var u;return(u=i.itemTextRefCallback)==null?void 0:u.call(i,y,s.value,s.disabled)}),N=g==null?void 0:g.textContent,T=o.useMemo(()=>r.jsx("option",{value:s.value,disabled:s.disabled,children:N},s.value),[s.disabled,s.value,N]),{onNativeOptionAdd:d,onNativeOptionRemove:v}=f;return z(()=>(d(T),()=>v(T)),[d,v,T]),r.jsxs(r.Fragment,{children:[r.jsx(j.span,{id:s.textId,...p,ref:b}),s.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Pe.createPortal(p.children,l.valueNode):null]})});qe.displayName=re;var Ye="SelectItemIndicator",Xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t;return ze(Ye,e).isSelected?r.jsx(j.span,{"aria-hidden":!0,...a,ref:n}):null});Xe.displayName=Ye;var we="SelectScrollUpButton",Ze=o.forwardRef((t,n)=>{const e=Y(we,t.__scopeSelect),a=Te(we,t.__scopeSelect),[c,p]=o.useState(!1),l=L(n,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollTop>0;p(f)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),c?r.jsx(Qe,{...t,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop-s.offsetHeight)}}):null});Ze.displayName=we;var ye="SelectScrollDownButton",Je=o.forwardRef((t,n)=>{const e=Y(ye,t.__scopeSelect),a=Te(ye,t.__scopeSelect),[c,p]=o.useState(!1),l=L(n,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollHeight-s.clientHeight,g=Math.ceil(s.scrollTop)<f;p(g)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),c?r.jsx(Qe,{...t,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop+s.offsetHeight)}}):null});Je.displayName=ye;var Qe=o.forwardRef((t,n)=>{const{__scopeSelect:e,onAutoScroll:a,...c}=t,p=Y("SelectScrollButton",e),l=o.useRef(null),i=de(e),s=o.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return o.useEffect(()=>()=>s(),[s]),z(()=>{var g;const f=i().find(w=>w.ref.current===document.activeElement);(g=f==null?void 0:f.ref.current)==null||g.scrollIntoView({block:"nearest"})},[i]),r.jsx(j.div,{"aria-hidden":!0,...c,ref:n,style:{flexShrink:0,...c.style},onPointerDown:P(c.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(a,50))}),onPointerMove:P(c.onPointerMove,()=>{var f;(f=p.onItemLeave)==null||f.call(p),l.current===null&&(l.current=window.setInterval(a,50))}),onPointerLeave:P(c.onPointerLeave,()=>{s()})})}),Yt="SelectSeparator",et=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t;return r.jsx(j.div,{"aria-hidden":!0,...a,ref:n})});et.displayName=Yt;var Ce="SelectArrow",Xt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=ue(e),p=q(Ce,e),l=Y(Ce,e);return p.open&&l.position==="popper"?r.jsx(It,{...c,...a,ref:n}):null});Xt.displayName=Ce;function tt(t){return t===""||t===void 0}var ot=o.forwardRef((t,n)=>{const{value:e,...a}=t,c=o.useRef(null),p=L(n,c),l=Mt(e);return o.useEffect(()=>{const i=c.current,s=window.HTMLSelectElement.prototype,g=Object.getOwnPropertyDescriptor(s,"value").set;if(l!==e&&g){const w=new Event("change",{bubbles:!0});g.call(i,e),i.dispatchEvent(w)}},[l,e]),r.jsx(Tt,{asChild:!0,children:r.jsx("select",{...a,ref:p,defaultValue:e})})});ot.displayName="BubbleSelect";function nt(t){const n=bt(t),e=o.useRef(""),a=o.useRef(0),c=o.useCallback(l=>{const i=e.current+l;n(i),function s(f){e.current=f,window.clearTimeout(a.current),f!==""&&(a.current=window.setTimeout(()=>s(""),1e3))}(i)},[n]),p=o.useCallback(()=>{e.current="",window.clearTimeout(a.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(a.current),[]),[e,c,p]}function rt(t,n,e){const c=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,p=e?t.indexOf(e):-1;let l=Zt(t,Math.max(p,0));c.length===1&&(l=l.filter(f=>f!==e));const s=l.find(f=>f.textValue.toLowerCase().startsWith(c.toLowerCase()));return s!==e?s:void 0}function Zt(t,n){return t.map((e,a)=>t[(n+a)%t.length])}var Jt=je,st=Ae,Qt=De,eo=ke,to=Le,at=Ve,oo=Ue,lt=$e,ct=Ge,no=qe,ro=Xe,it=Ze,dt=Je,ut=et;const vo=Jt,go=Qt,so=o.forwardRef(({className:t,children:n,...e},a)=>r.jsxs(st,{ref:a,className:G("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...e,children:[n,r.jsx(eo,{asChild:!0,children:r.jsx(_e,{className:"h-4 w-4 opacity-50"})})]}));so.displayName=st.displayName;const pt=o.forwardRef(({className:t,...n},e)=>r.jsx(it,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(jt,{className:"h-4 w-4"})}));pt.displayName=it.displayName;const ft=o.forwardRef(({className:t,...n},e)=>r.jsx(dt,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(_e,{className:"h-4 w-4"})}));ft.displayName=dt.displayName;const ao=o.forwardRef(({className:t,children:n,position:e="popper",...a},c)=>r.jsx(to,{children:r.jsxs(at,{ref:c,className:G("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:e,...a,children:[r.jsx(pt,{}),r.jsx(oo,{className:G("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),r.jsx(ft,{})]})}));ao.displayName=at.displayName;const lo=o.forwardRef(({className:t,...n},e)=>r.jsx(lt,{ref:e,className:G("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...n}));lo.displayName=lt.displayName;const co=o.forwardRef(({className:t,children:n,...e},a)=>r.jsxs(ct,{ref:a,className:G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...e,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(ro,{children:r.jsx(Et,{className:"h-4 w-4"})})}),r.jsx(no,{children:n})]}));co.displayName=ct.displayName;const io=o.forwardRef(({className:t,...n},e)=>r.jsx(ut,{ref:e,className:G("-mx-1 my-1 h-px bg-muted",t),...n}));io.displayName=ut.displayName;export{vo as S,so as a,go as b,ao as c,co as d};
