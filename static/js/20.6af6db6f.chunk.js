(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{728:function(e,t,c){"use strict";c.r(t);var a=c(174),s=c(53),n=c(66),r=c(1),l=c(674),i=c(173),j=c.p+"static/media/logo.b0e961c2.jpg",o=c(72),d=c(54),b=c(18);t.default=function(){var e=Object(r.useContext)(i.a),t=e.setToken,c=e.setRole,m=Object(l.a)({url:"https://app.aloropivetcenter.com/api/authentication/login",method:"POST"},{manual:!0}),u=Object(n.a)(m,2),O=u[0],p=O.data,x=O.loading,h=u[1],g=Object(r.useState)({username:"",password:""}),f=Object(n.a)(g,2),w=f[0],k=f[1],y=function(e){k((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e.target.name,e.target.value))}))};return Object(r.useEffect)((function(){if(p&&p.token){var e=p.token.split(".")[1],a=JSON.parse(atob(e));localStorage.setItem("tokenExpiry",a.exp),c(a.role.name),t(p.token)}}),[p,c,t]),Object(b.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(b.jsx)(o.m,{children:Object(b.jsx)(o.T,{className:"justify-content-center",children:Object(b.jsx)(o.k,{md:"8",children:Object(b.jsxs)(o.i,{children:[Object(b.jsx)(o.f,{className:"p-4",children:Object(b.jsx)(o.g,{children:Object(b.jsxs)(o.v,{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("p",{className:"text-muted",children:"Sign In to your Aloropi account"}),Object(b.jsxs)(o.C,{className:"mb-3",children:[Object(b.jsx)(o.E,{children:Object(b.jsx)(o.F,{children:Object(b.jsx)(d.a,{name:"cil-user"})})}),Object(b.jsx)(o.B,{name:"username",type:"text",placeholder:"Username",autoComplete:"username",value:w.username,onChange:y})]}),Object(b.jsxs)(o.C,{className:"mb-4",children:[Object(b.jsx)(o.E,{children:Object(b.jsx)(o.F,{children:Object(b.jsx)(d.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(o.B,{name:"password",type:"password",placeholder:"Password",autoComplete:"current-password",value:w.password,onChange:y})]}),Object(b.jsx)(o.T,{children:Object(b.jsx)(o.k,{xs:"6",children:Object(b.jsx)(o.e,{onClick:function(e){x||h({data:Object(s.a)({},w)})},color:"primary",className:"px-4",children:x?"Loading":"Login"})})})]})})}),Object(b.jsx)(o.f,{className:"text-white bg-primary d-md-down-none",style:{width:"44%"},children:Object(b.jsx)(o.g,{className:"text-center",children:Object(b.jsx)("img",{src:j,alt:"Vet",style:{width:"100%"}})})})]})})})})})}}}]);
//# sourceMappingURL=20.6af6db6f.chunk.js.map