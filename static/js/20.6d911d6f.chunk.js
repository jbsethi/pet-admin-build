(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{728:function(e,t,c){"use strict";c.r(t);var a=c(174),s=c(53),n=c(66),r=c(1),l=c(674),o=c(173),i=c.p+"static/media/logo.b0e961c2.jpg",j=c(72),d=c(54),b=c(18);t.default=function(){var e=Object(r.useContext)(o.a),t=e.setToken,c=e.setRole,m=Object(l.a)({url:"https://app.aloropivetcenter.com/api/authentication/login",method:"POST"},{manual:!0}),u=Object(n.a)(m,2),O=u[0],p=O.data,x=O.loading,h=u[1],g=Object(r.useState)({username:"",password:""}),f=Object(n.a)(g,2),w=f[0],k=f[1],y=function(e){k((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e.target.name,e.target.value))}))};return Object(r.useEffect)((function(){if(p&&p.token){var e=p.token.split(".")[1],a=JSON.parse(atob(e));localStorage.setItem("tokenExpiry",a.exp),console.log(a),c(a.role.name),t(p.token)}}),[p,c,t]),Object(b.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(b.jsx)(j.m,{children:Object(b.jsx)(j.T,{className:"justify-content-center",children:Object(b.jsx)(j.k,{md:"8",children:Object(b.jsxs)(j.i,{children:[Object(b.jsx)(j.f,{className:"p-4",children:Object(b.jsx)(j.g,{children:Object(b.jsxs)(j.v,{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("p",{className:"text-muted",children:"Sign In to your Aloropi account"}),Object(b.jsxs)(j.C,{className:"mb-3",children:[Object(b.jsx)(j.E,{children:Object(b.jsx)(j.F,{children:Object(b.jsx)(d.a,{name:"cil-user"})})}),Object(b.jsx)(j.B,{name:"username",type:"text",placeholder:"Username",autoComplete:"username",value:w.username,onChange:y})]}),Object(b.jsxs)(j.C,{className:"mb-4",children:[Object(b.jsx)(j.E,{children:Object(b.jsx)(j.F,{children:Object(b.jsx)(d.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(j.B,{name:"password",type:"password",placeholder:"Password",autoComplete:"current-password",value:w.password,onChange:y})]}),Object(b.jsx)(j.T,{children:Object(b.jsx)(j.k,{xs:"6",children:Object(b.jsx)(j.e,{onClick:function(e){x||h({data:Object(s.a)({},w)})},color:"primary",className:"px-4",children:x?"Loading":"Login"})})})]})})}),Object(b.jsx)(j.f,{className:"text-white bg-primary d-md-down-none",style:{width:"44%"},children:Object(b.jsx)(j.g,{className:"text-center",children:Object(b.jsx)("img",{src:i,alt:"Vet",style:{width:"100%"}})})})]})})})})})}}}]);
//# sourceMappingURL=20.6d911d6f.chunk.js.map