(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{704:function(e,t,n){},705:function(e,t,n){"use strict";n.r(t);var c=n(84),a=n(652),i=n(1),s=n.n(i),r=n(20),o=n(653),l=n(162),d=n(49),j=n(17),p=Object(r.i)((function(e){e.match;var t=e.show,n=e.setShow,i=e.details,r=(e.refetch,s.a.useState({statement:"",prescription:"",description:"",recomendation:"",followUp:""})),o=Object(c.a)(r,2),p=o[0],m=o[1],b=function(e){m((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))};return s.a.useEffect((function(){t&&i&&m({statement:i.statement,prescription:i.prescription,description:i.description,recomendation:i.recomendation,followUp:""})}),[i,t]),Object(j.jsxs)(a.K,{show:t,onClose:function(){return n(!1)},children:[Object(j.jsx)(a.N,{children:i?"Treatment Details":"New Prescription"}),Object(j.jsxs)(a.L,{children:[Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.G,{htmlFor:"Statement",children:"Statement"}),Object(j.jsx)(a.B,{disabled:i,value:p.statement,name:"statement",onChange:b,id:"statement",placeholder:"Enter Statement"})]}),Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.G,{htmlFor:"prescription",children:"Prescription"}),Object(j.jsx)(a.B,{disabled:i,value:p.prescription,name:"prescription",onChange:b,id:"prescription",placeholder:"Enter Prescription"})]}),Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.G,{htmlFor:"recomendation",children:"Recomendation"}),Object(j.jsx)(a.B,{disabled:i,value:p.recomendation,name:"recomendation",onChange:b,id:"recomendation",placeholder:"Enter Recomendation"})]}),Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.G,{htmlFor:"description",children:"Description"}),Object(j.jsx)(a.B,{disabled:i,value:p.description,name:"description",onChange:b,id:"description",placeholder:"Enter Description"})]}),Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.G,{htmlFor:"followUp",children:"Follow up ?"}),Object(j.jsx)(a.B,{disabled:i,type:"number",value:p.followUp,name:"followUp",onChange:b,id:"followUp",placeholder:"Enter follow Up day"})]})]}),Object(j.jsx)(a.M,{children:Object(j.jsx)(a.e,{color:"danger",onClick:function(){return n(!1)},children:"Cancel"})})]})})),m=function(e){var t=e.match,n=s.a.useState(null),i=Object(c.a)(n,2),r=i[0],l=i[1],d=s.a.useState(!1),m=Object(c.a)(d,2),b=m[0],h=m[1],u=s.a.useState([]),O=Object(c.a)(u,2),x=O[0],f=O[1],v=Object(o.a)({url:"https://app.aloropivetcenter.com/api/treatments/all/pets",method:"POST"},{manual:!0}),w=Object(c.a)(v,2),g=w[0].loading,N=w[1];return s.a.useEffect((function(){N({data:{petId:t.params.petId}}).then((function(e){var t;f((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)||[])}))}),[N,t.params.petId]),Object(j.jsxs)(a.f,{children:[Object(j.jsx)(a.j,{children:Object(j.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(j.jsx)("div",{className:"font-lg",children:"Pet Previous History"})})}),Object(j.jsx)(a.g,{className:"p-0",children:Object(j.jsx)(a.o,{loading:g,fields:["statement","description","createdAt"],items:x,onRowClick:function(e){return function(e){l(e),h(!0)}(e)},striped:!0})}),Object(j.jsx)(p,{show:b,setShow:function(e){h(e),e||l(null)},details:r})]})},b=n(161),h=(n(704),Object(r.i)((function(e){e.match;var t=e.pet;return Object(j.jsx)("div",{className:"petTab",children:Object(j.jsx)(b.c,{to:{pathname:"/visitors/".concat(t.patientId,"/treatments/").concat(t.id)},children:Object(j.jsx)(a.f,{className:"m-0",children:Object(j.jsx)(a.g,{className:"p-3",children:Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"m-0",children:t.name}),Object(j.jsx)("p",{className:"m-0",children:t.createdAt})]})})})})})}))),u=function(e){return e.pets.map((function(e){return Object(j.jsx)(h,{pet:e},e.id)}))};t.default=function(e){var t=e.match,n=Object(r.g)(),i=s.a.useState([]),l=Object(c.a)(i,2),d=l[0],p=l[1],b=Object(o.a)({url:"https://app.aloropivetcenter.com/api/pets/all/patients",method:"POST"},{manual:!0}),h=Object(c.a)(b,2),O=h[0].loading,x=h[1];return s.a.useEffect((function(){x({data:{patientId:t.params.id}}).then((function(e){var c,a,i,s;p(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.rows.map((function(e){return{id:e.id,patientId:t.params.id,name:e.name,createdAt:e.createdAt}}))),(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.rows)||void 0===i?void 0:i.length)>0&&n.replace("/visitors/".concat(t.params.id,"/treatments/").concat(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.rows[0].id))}))}),[x,t.params.id,n]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(a.T,{children:[Object(j.jsx)(a.k,{md:"4",children:Object(j.jsxs)(a.f,{children:[Object(j.jsx)(a.j,{children:Object(j.jsx)("p",{className:"font-lg m-0",children:"Pets"})}),Object(j.jsx)(a.g,{className:"p-0",children:O?Object(j.jsx)("p",{className:"pt-3 text-center",children:"Loading ..."}):Object(j.jsx)(u,{pets:d})})]})}),Object(j.jsxs)(a.k,{children:[Object(j.jsx)(r.b,{path:"/visitors/:id/treatments",exact:!0,render:function(){return Object(j.jsx)("p",{className:"p-5 text-center",children:"Please select Pet to view details."})}}),Object(j.jsx)(r.b,{path:"/visitors/:id/treatments/:petId",component:m})]})]})})}}}]);
//# sourceMappingURL=8.c825abd1.chunk.js.map