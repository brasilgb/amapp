import{W as s,j as e,Y as a,a as c}from"./app-GmlYUa64.js";import{B as m}from"./button-CVl-hmtQ.js";import{L as d}from"./LoginLayout-Dp4BoUKY.js";import"./card-CdD9FVyH.js";function x({status:o}){const{post:r,processing:i}=s({}),t=n=>{n.preventDefault(),r(route("verification.send"))};return e.jsxs(d,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Obrigado por se inscrever! Antes de começar, você poderia verificar seu endereço de e-mail clicando no link que acabamos de enviar para você? Se você não recebeu o e-mail, teremos prazer em enviar outro."}),o==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"Um novo link de verificação foi enviado para o endereço de e-mail que você forneceu durante o registro."}),e.jsx("form",{onSubmit:t,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(m,{variant:"login",className:"w-full",disabled:i,children:"Entrar"}),e.jsx(c,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{x as default};