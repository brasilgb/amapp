import{W as l,j as e,Y as d}from"./app-C4qh0mEh.js";import{T as u,I as c}from"./TextInput-maAZhBmV.js";import{B as x}from"./button-B8sZM8AG.js";import{L as p}from"./LoginLayout-bhUnPOpi.js";import"./card-DFwncd-S.js";function b({status:a}){const{data:t,setData:r,post:i,processing:m,errors:o}=l({email:""}),n=s=>{s.preventDefault(),i(route("password.email"))};return e.jsxs(p,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos por e-mail um link de redefinição de senha que permitirá que você escolha uma nova."}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:n,children:[e.jsx(u,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(c,{message:o.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(x,{variant:"login",className:"w-full",disabled:m,children:"Enviar link de redefinição de senha"})})]})]})}export{b as default};