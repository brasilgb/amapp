import{j as e,r as h,W as g,Y as j,a as y}from"./app-BSpTI7g3.js";import{T as n,I as m}from"./TextInput-BsNVOHpK.js";import{B as b}from"./button-ohafPp-T.js";import{L as v}from"./LoginLayout-CWefB4Pw.js";import{c}from"./createLucideIcon-CDc2HlfE.js";import{E as w,a as N}from"./eye-7WKA9bh1.js";import"./card-BTQ_EM_a.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);function C({className:t="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function B({status:t,canResetPassword:a}){const[r,d]=h.useState(!1),{data:i,setData:o,post:x,processing:u,errors:l,reset:p}=g({email:"",password:"",remember:!1}),f=s=>{s.preventDefault(),x(route("login"),{onFinish:()=>p("password")})};return e.jsxs(v,{children:[e.jsx(j,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-1 top-2 text-gray-500",children:e.jsx(k,{size:22})}),e.jsx(n,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 pl-8 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(m,{message:l.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 relative",children:[e.jsx("div",{className:"absolute left-1 top-2 text-gray-500",children:e.jsx(L,{size:22})}),e.jsx(n,{id:"password",type:r?"text":"password",name:"password",value:i.password,className:"mt-1 px-8 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx("div",{className:"absolute right-1 top-2 text-gray-500",onClick:()=>d(!r),children:r?e.jsx(w,{size:22}):e.jsx(N,{size:22})}),e.jsx(m,{message:l.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(C,{name:"remember",checked:i.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Lembrar"})]}),a&&e.jsx(y,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Perdeu sua senha?"})]}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(b,{variant:"login",className:"w-full",disabled:u,children:"Entrar"})})]})]})}export{B as default};
