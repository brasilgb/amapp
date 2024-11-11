import{j as a,a as n,h as o}from"./app-C4qh0mEh.js";import{C as d,a as x,b as m}from"./card-DFwncd-S.js";import{T as h,a as j,b as r,c as t,d as p,e as s}from"./table-4Mpk4Ei3.js";import{P as b,r as g,s as f,S as N,M as y}from"./ModalDelete-CTuDWqPy.js";import{B as w}from"./button-B8sZM8AG.js";import{C as T}from"./CustomerLayout-UkD-bUjz.js";import{U as C}from"./user-round-CqxQSba0.js";import"./createLucideIcon-Cj5ilMqY.js";import"./index-C-cBhlU4.js";import"./index-CAB0cIM5.js";import"./select-BhaTQ6fu.js";const D=({users:i})=>{var l;const c=e=>{switch(e){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return a.jsx(T,{children:a.jsx("div",{className:"p-4 bg-background",children:a.jsxs(d,{children:[a.jsx(x,{children:a.jsxs("div",{className:"flex items-center justify-between border-b pb-2",children:[a.jsxs("div",{className:"flex text-gray-600",children:[a.jsx(C,{size:28,className:"mr-1 "}),a.jsx(m,{className:"text-lg sm:text-xl select-none uppercase",children:"Usuários"})]}),a.jsxs(n,{href:route("cliusers.create"),className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100`,children:[a.jsx(b,{className:"h-5 w-5"}),a.jsx("span",{className:"sr-only",children:"Adicionar Usuário"})]})]})}),a.jsxs(h,{children:[a.jsx(j,{children:a.jsxs(r,{children:[a.jsx(t,{className:"w-[100px]",children:"NOME"}),a.jsx(t,{className:"w-[100px]",children:"ORGANIZAÇÃO"}),a.jsx(t,{className:"w-[100px]",children:"E-MAIL"}),a.jsx(t,{children:"ROLES"}),a.jsx(t,{children:"CADASTRO"}),a.jsx(t,{className:"text-right",children:"STATUS"}),a.jsx(t,{className:"text-right"})]})}),a.jsx(p,{children:(l=i==null?void 0:i.data)==null?void 0:l.map(e=>a.jsxs(r,{children:[a.jsx(s,{className:"font-medium w-80",children:e==null?void 0:e.name}),a.jsx(s,{className:"font-medium w-80",children:e!=null&&e.organization_id?e==null?void 0:e.organization.name:"Automágico"}),a.jsx(s,{className:"font-medium",children:e==null?void 0:e.email}),a.jsx(s,{children:g(e==null?void 0:e.roles)}),a.jsx(s,{children:o(e==null?void 0:e.created_at).format("DD/MM/YYYY")}),a.jsx(s,{className:"text-right",children:a.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${c(e==null?void 0:e.status)}`,children:f(e==null?void 0:e.status)})}),a.jsxs(s,{className:"flex gap-1.5 items-center justify-end",children:[a.jsx(w,{size:"icon",variant:"edit",asChild:!0,children:a.jsx(n,{href:route("cliusers.edit",e==null?void 0:e.id),as:"button",type:"button",children:a.jsx(N,{className:"h-5 w-5"})})}),a.jsx(y,{url:"cliusers.destroy",param:e==null?void 0:e.id,title:"Excluir usuário",content:`o usuário ${e==null?void 0:e.name}`})]})]},e==null?void 0:e.id))})]})]})})})};export{D as default};