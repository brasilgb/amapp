import{j as e,a,h}from"./app-GmlYUa64.js";import{C as n,a as u,b as j}from"./card-CdD9FVyH.js";import{T as b,a as c,b as d,c as r,d as g,e as t}from"./table-Cf2rq5z6.js";import{A as f,B as N}from"./AdminLayout-Cia5KSwi.js";import{P as o,s as m,S as T,M as A}from"./ModalDelete-D2kzisMs.js";import{B as w}from"./button-CVl-hmtQ.js";import{d as C,b as S}from"./mask-98ej_Xwf.js";import"./index-CykULU2U.js";import"./createLucideIcon-Cl0mVLva.js";import"./index-DwMD5fcq.js";import"./sliders-horizontal-Bw3jIO2z.js";const R=({companies:i})=>{var l;const x=s=>{switch(s){case"active":return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case"waiting":return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case"suspended":return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case"canceled":return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return e.jsx(f,{children:e.jsx("div",{className:"p-4 bg-background",children:e.jsxs(n,{children:[e.jsx(u,{children:e.jsxs("div",{className:"flex items-center justify-between border-b pb-2",children:[e.jsxs("div",{className:"flex text-gray-600",children:[e.jsx(N,{size:28,className:"mr-1 "}),e.jsx(j,{className:"text-lg sm:text-xl select-none uppercase",children:"Filiais"})]}),e.jsxs(a,{href:route("companies.create"),className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100`,children:[e.jsx(o,{className:"h-5 w-5"}),e.jsx("span",{className:"sr-only",children:"Adicionar Filial"})]})]})}),e.jsxs(b,{children:[e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(r,{className:"w-[100px]",children:"ORGANIZAÇÃO"}),e.jsx(r,{className:"w-[100px]",children:"Nº FILIAL"}),e.jsx(r,{children:"FILIAL"}),e.jsx(r,{children:"CNPJ"}),e.jsx(r,{children:"INSC. ESTADUAL"}),e.jsx(r,{children:"TELEFONE"}),e.jsx(r,{children:"CADASTRO"}),e.jsx(r,{className:"text-right",children:"STATUS"}),e.jsx(r,{className:"text-right"})]})}),e.jsx(g,{children:(l=i==null?void 0:i.data)==null?void 0:l.map(s=>e.jsxs(d,{children:[e.jsx(t,{className:"font-medium w-80",children:s==null?void 0:s.organization.name}),e.jsx(t,{className:"font-medium",children:s==null?void 0:s.subnumber}),e.jsx(t,{className:"font-medium",children:s==null?void 0:s.subname}),e.jsx(t,{children:C(s.cnpj.toString())}),e.jsx(t,{children:S(s.statereg.toString())}),e.jsx(t,{className:"font-medium",children:s.telephone}),e.jsx(t,{children:h(s==null?void 0:s.created_at).format("DD/MM/YYYY")}),e.jsx(t,{className:"text-right",children:e.jsx("span",{className:`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${x(s==null?void 0:s.status)}`,children:m(s==null?void 0:s.status)})}),e.jsxs(t,{className:"flex gap-1.5 items-center justify-end",children:[e.jsx(w,{size:"icon",variant:"edit",asChild:!0,children:e.jsx(a,{href:route("companies.edit",s==null?void 0:s.id),as:"button",type:"button",children:e.jsx(T,{className:"h-5 w-5"})})}),e.jsx(A,{url:"companies.destroy",param:s==null?void 0:s.id,title:"Excluir filial",content:`a filial ${s==null?void 0:s.subname}`})]})]},s==null?void 0:s.id))})]})]})})})};export{R as default};