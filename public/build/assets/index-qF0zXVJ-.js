import{c as B}from"./createLucideIcon-CDc2HlfE.js";import{r as i,j as s}from"./app-BSpTI7g3.js";import{i as q,P as D,k as p,l as C,R as H,m as V,u as X,F as K,n as U,E as Y,q as Z,r as z,t as x}from"./index-DoX99EMX.js";import{u as R,S as J}from"./button-ohafPp-T.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var h="Dialog",[P,fe]=q(h),[Q,u]=P(h),N=e=>{const{__scopeDialog:o,children:r,open:a,defaultOpen:n,onOpenChange:t,modal:c=!0}=e,l=i.useRef(null),d=i.useRef(null),[g=!1,m]=z({prop:a,defaultProp:n,onChange:t});return s.jsx(Q,{scope:o,triggerRef:l,contentRef:d,contentId:x(),titleId:x(),descriptionId:x(),open:g,onOpenChange:m,onOpenToggle:i.useCallback(()=>m($=>!$),[m]),modal:c,children:r})};N.displayName=h;var I="DialogTrigger",O=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(I,r),t=R(o,n.triggerRef);return s.jsx(D.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":y(n.open),...a,ref:t,onClick:p(e.onClick,n.onOpenToggle)})});O.displayName=I;var _="DialogPortal",[ee,b]=P(_,{forceMount:void 0}),A=e=>{const{__scopeDialog:o,forceMount:r,children:a,container:n}=e,t=u(_,o);return s.jsx(ee,{scope:o,forceMount:r,children:i.Children.map(a,c=>s.jsx(C,{present:r||t.open,children:s.jsx(Z,{asChild:!0,container:n,children:c})}))})};A.displayName=_;var v="DialogOverlay",T=i.forwardRef((e,o)=>{const r=b(v,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(v,e.__scopeDialog);return t.modal?s.jsx(C,{present:a||t.open,children:s.jsx(te,{...n,ref:o})}):null});T.displayName=v;var te=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(v,r);return s.jsx(H,{as:J,allowPinchZoom:!0,shards:[n.contentRef],children:s.jsx(D.div,{"data-state":y(n.open),...a,ref:o,style:{pointerEvents:"auto",...a.style}})})}),f="DialogContent",j=i.forwardRef((e,o)=>{const r=b(f,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(f,e.__scopeDialog);return s.jsx(C,{present:a||t.open,children:t.modal?s.jsx(oe,{...n,ref:o}):s.jsx(ne,{...n,ref:o})})});j.displayName=f;var oe=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(null),n=R(o,r.contentRef,a);return i.useEffect(()=>{const t=a.current;if(t)return V(t)},[]),s.jsx(M,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,t=>{var c;t.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,t=>{const c=t.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&t.preventDefault()}),onFocusOutside:p(e.onFocusOutside,t=>t.preventDefault())})}),ne=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(!1),n=i.useRef(!1);return s.jsx(M,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,t),t.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),t.preventDefault()),a.current=!1,n.current=!1},onInteractOutside:t=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,t),t.defaultPrevented||(a.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const c=t.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}})}),M=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:t,...c}=e,l=u(f,r),d=i.useRef(null),g=R(o,d);return X(),s.jsxs(s.Fragment,{children:[s.jsx(K,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:t,children:s.jsx(U,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":y(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(re,{titleId:l.titleId}),s.jsx(se,{contentRef:d,descriptionId:l.descriptionId})]})]})}),E="DialogTitle",F=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(E,r);return s.jsx(D.h2,{id:n.titleId,...a,ref:o})});F.displayName=E;var w="DialogDescription",S=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(w,r);return s.jsx(D.p,{id:n.descriptionId,...a,ref:o})});S.displayName=w;var k="DialogClose",W=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(k,r);return s.jsx(D.button,{type:"button",...a,ref:o,onClick:p(e.onClick,()=>n.onOpenChange(!1))})});W.displayName=k;function y(e){return e?"open":"closed"}var L="DialogTitleWarning",[ge,G]=Y(L,{contentName:f,titleName:E,docsSlug:"dialog"}),re=({titleId:e})=>{const o=G(L),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},ae="DialogDescriptionWarning",se=({contentRef:e,descriptionId:o})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(ae).contentName}}.`;return i.useEffect(()=>{var t;const n=(t=e.current)==null?void 0:t.getAttribute("aria-describedby");o&&n&&(document.getElementById(o)||console.warn(a))},[a,e,o]),null},pe=N,De=O,ve=A,me=T,xe=j,Ce=F,Re=S,he=W;export{xe as C,Re as D,me as O,ve as P,pe as R,Ce as T,de as X,he as a,De as b};
