import{q as u,u as b,r as x,j as a,h as p,b as Y}from"./app-GmlYUa64.js";import{B as M}from"./BarAnalise-BFrKX5i1.js";import{L as T}from"./LoadingPage-B3cocw5M.js";import{T as C,a as y,b as h,c as e,d as D,e as t}from"./table-Cf2rq5z6.js";import{C as N}from"./CustomerLayout-pRUE96Hi.js";import{p as j}from"./mask-98ej_Xwf.js";import"./button-CVl-hmtQ.js";import"./index-CykULU2U.js";import"./createLucideIcon-Cl0mVLva.js";import"./select-_LHzKT0G.js";const V=v=>{const{auth:r}=u().props,{filialAnalise:n,dataFiltro:c,setLoading:d,loading:f}=b(),[i,g]=x.useState([]);return x.useEffect(()=>{(async()=>{var m;d(!0);const o=p(c).format("YYYYMMDD");await Y.get(`sales?dt=${o}&org=${(m=r==null?void 0:r.user)==null?void 0:m.organization_id}&fl=${n}`).then(l=>{g(l.data.response.sales)}).catch(l=>{console.log(l)}).finally(()=>d(!1))})()},[r,n,c]),a.jsxs(N,{children:[f&&a.jsx(T,{}),a.jsx(M,{}),a.jsxs(C,{children:[a.jsx(y,{children:a.jsxs(h,{children:[a.jsx(e,{className:"w-[100px]",children:"Data"}),a.jsx(e,{children:"Filial"}),a.jsx(e,{children:"Meta"}),a.jsx(e,{children:"Venda"}),a.jsx(e,{children:"Margem"}),a.jsx(e,{children:"Representa"})]})}),a.jsx(D,{children:i==null?void 0:i.map((s,o)=>a.jsxs(h,{children:[a.jsx(t,{className:"font-medium",children:p(s.dtvenda).format("DD/MM/YYYY")}),a.jsx(t,{children:s.descfilial}),a.jsx(t,{children:j(s.valmeta)}),a.jsx(t,{className:"text-right",children:j(s.valvenda)}),a.jsxs(t,{className:"text-right",children:[s.margem,"%"]}),a.jsxs(t,{className:"text-right",children:[s.representa,"%"]})]},o))})]})]})};export{V as default};