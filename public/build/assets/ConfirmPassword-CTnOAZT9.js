import{W as d,j as s,Y as l}from"./app-GmlYUa64.js";import{T as p,I as u}from"./TextInput-D2wTqB4b.js";import{I as c}from"./InputLabel-DzN0V42D.js";import{B as f}from"./button-CVl-hmtQ.js";import{L as x}from"./LoginLayout-Dp4BoUKY.js";import"./card-CdD9FVyH.js";function N(){const{data:r,setData:e,post:o,processing:t,errors:i,reset:n}=d({password:""}),m=a=>{a.preventDefault(),o(route("password.confirm"),{onFinish:()=>n("password")})};return s.jsxs(x,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Esta é uma área segura do aplicativo. Por favor, confirme sua senha antes de continuar."}),s.jsxs("form",{onSubmit:m,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(p,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:a=>e("password",a.target.value)}),s.jsx(u,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(f,{variant:"login",className:"w-full",disabled:t,children:"Enviar link de redefinição de senha"})})]})]})}export{N as default};