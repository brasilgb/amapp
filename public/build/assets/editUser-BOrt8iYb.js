import{q as z,r as u,j as e,a as k,y as E}from"./app-GmlYUa64.js";import{C as L,a as U,b as I,c as R}from"./card-CdD9FVyH.js";import{z as r,u as A,t as B,F as D,a as i,b as o,d,I as m,e as x,c as t,L as P,S as T}from"./input-BrFPhO40.js";import{B as p}from"./button-CVl-hmtQ.js";import{S as g,a as f,b as v,c as N,d as b}from"./select-_LHzKT0G.js";import{A as q,r as H,s as J}from"./dataSelect-CsWYKT-O.js";import{C as M}from"./CustomerLayout-pRUE96Hi.js";import{U as O}from"./user-round-CJ3AmHoF.js";import{C as G}from"./index-CykULU2U.js";import{E as C,a as w}from"./eye-CmvGOZVP.js";import"./createLucideIcon-Cl0mVLva.js";const K=r.object({organization_id:r.any().optional(),company_id:r.any().optional(),name:r.string().min(1,{message:"Digite um nome"}),email:r.string().min(1,{message:"Digite o CNPJ"}),roles:r.string().min(1,{message:"Selecione oa função"}),status:r.string().min(1,{message:"Selecione o status"}),password:r.string().optional(),password_confirmation:r.string().optional()}).refine(j=>j.password===j.password_confirmation,{message:"As senhas são diferentes",path:["password_confirmation"]}),ce=({organizations:j,user:a})=>{const{auth:Q,errors:W,flash:y}=z().props,[_,X]=u.useState(!1);u.useState([]);const[h,S]=u.useState(!1),l=A({resolver:B(K),defaultValues:{organization_id:a.organization_id.toString(),company_id:a.company_id?a.company_id.toString():"",name:a.name,email:a.email,roles:a.roles,status:a.status,password:"",password_confirmation:""}});function F(s){E.patch(route("cliusers.update",a.id),s)}return e.jsx(M,{children:e.jsx("div",{className:"p-4 bg-background",children:e.jsxs(L,{children:[e.jsx(U,{children:e.jsxs("div",{className:"flex items-center justify-between border-b pb-2",children:[e.jsxs("div",{className:"flex text-gray-600",children:[e.jsx(O,{size:28,className:"mr-1 "}),e.jsx(I,{className:"text-lg sm:text-xl select-none uppercase",children:"Usuários"})]}),e.jsxs(k,{href:route("cliusers.index"),className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                         bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100`,children:[e.jsx(q,{className:"h-5 w-5"}),e.jsx("span",{className:"sr-only",children:"Voltar aos Usuários"})]})]})}),e.jsxs(R,{children:[y.message&&e.jsxs("div",{className:"bg-green-500 text-white text-sm font-semibold flex items-center justify-start gap-1 p-2 rounded-md transition-all duration-300",children:[e.jsx(G,{className:"w-4 h-4"})," ",y.message]}),e.jsx("div",{children:e.jsx(D,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(F),className:"space-y-8",autoComplete:"off",children:[e.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 mt-4",children:[e.jsxs("div",{className:"",children:[e.jsx(i,{control:l.control,name:"organization_id",render:({field:s})=>e.jsxs(o,{className:"hidden",children:[e.jsx(d,{children:e.jsx(m,{...s})}),e.jsx(x,{})]})}),e.jsx(i,{control:l.control,name:"company_id",render:({field:s})=>{var n;return e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Filial do usuário"}),e.jsxs(g,{onValueChange:s.onChange,defaultValue:s.value,value:s.value,disabled:!a.company_id,children:[e.jsx(f,{className:"",children:e.jsx(v,{placeholder:a.company_id?"Selecione a filial":"Rede"})}),e.jsx(N,{children:(n=j[0].company)==null?void 0:n.map((c,V)=>e.jsxs(b,{value:c.subnumber,children:[c.subnumber," - ",c.subname]},V))})]})]})}})]}),e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"name",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Nome"}),e.jsx(d,{children:e.jsx(m,{placeholder:"",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"email",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"E-mail"}),e.jsx(d,{children:e.jsx(m,{placeholder:"",...s})}),e.jsx(x,{})]})})})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mt-4",children:[e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"password",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Senha"}),e.jsxs("div",{className:"relative",children:[e.jsx(d,{children:e.jsx(m,{placeholder:"",...s})}),e.jsx(p,{type:"button",className:"absolute right-0.5 top-0.5",onClick:()=>S(!h),size:"icon",variant:"link",children:h?e.jsx(C,{}):e.jsx(w,{})})]}),e.jsx(x,{})]})})}),e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"password_confirmation",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Repita a senha"}),e.jsxs("div",{className:"relative",children:[e.jsx(d,{children:e.jsx(m,{placeholder:"",...s})}),e.jsx(p,{type:"button",className:"absolute right-0.5 top-0.5",onClick:()=>S(!h),size:"icon",variant:"link",children:h?e.jsx(C,{}):e.jsx(w,{})})]}),e.jsx(x,{})]})})})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mt-4",children:[e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"roles",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Função do usuário"}),e.jsxs(g,{onValueChange:s.onChange,defaultValue:s.value,value:s.value,children:[e.jsx(f,{className:"",children:e.jsx(v,{placeholder:"Selecione a função"})}),e.jsx(N,{children:H.map((n,c)=>e.jsx(b,{value:n.value,children:n.label},c))})]})]})})}),e.jsx("div",{className:"",children:e.jsx(i,{control:l.control,name:"status",render:({field:s})=>e.jsxs(o,{className:"flex flex-col",children:[e.jsx(t,{children:"Status"}),e.jsxs(g,{onValueChange:s.onChange,defaultValue:s.value,value:s.value,children:[e.jsx(f,{className:"",children:e.jsx(v,{placeholder:"Selecione o status"})}),e.jsx(N,{children:J.map((n,c)=>e.jsx(b,{value:n.value,children:n.label},c))})]})]})})})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsxs(p,{className:"flex gap-2 bg-blue-600 hover:bg-blue-600/90",type:"submit",children:[_?e.jsx(P,{size:18,className:"animate-spin"}):e.jsx(T,{size:18}),e.jsx("span",{children:"Salvar"})]})})]})})})]})]})})})};export{ce as default};
