(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{675:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e){return new Date(e).toISOString().slice(0,19).replace(/-/g,"/").replace("T"," ")}},730:function(e,t,n){"use strict";n.r(t);var c=n(66),a=n(72),i=n(1),r=n.n(i),s=n(24),o=n(674),l=n(175),d=n(174),u=n(53),j=n(679),p=n(173),m=n(18),h=Object(s.i)((function(e){var t=e.match,n=e.show,i=e.setShow,s=e.details,h=e.refetch,b=r.a.useContext(p.a).addToast,f=r.a.useState([]),O=Object(c.a)(f,2),x=O[0],v=O[1],g=r.a.useState([]),w=Object(c.a)(g,2),S=w[0],N=w[1],C=r.a.useState([]),I=Object(c.a)(C,2),k=I[0],y=I[1],P=Object(o.a)({url:"https://app.aloropivetcenter.com/api/treatments",method:"POST"},{manual:!0}),T=Object(c.a)(P,2)[1],E=r.a.useState({statement:"",prescription:"",description:"",followUp:""}),U=Object(c.a)(E,2),A=U[0],F=U[1],G=function(e){F((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};r.a.useEffect((function(){return n&&s&&(F({statement:s.statement,prescription:s.prescription,description:s.description,followUp:""}),N((function(){return s.Recomendations.map((function(e,t){return D(),{idx:t,value:e.itemId,label:e.Item.name}}))}))),function(){v([]),N([])}}),[s,n]);var R=x.map((function(e,t){return Object(m.jsxs)(a.T,{className:"align-items-center px-3 py-2",children:[Object(m.jsx)(a.l,{md:"1",children:t+1}),Object(m.jsx)(a.l,{children:Object(m.jsx)(j.a,{disabled:s,options:k,value:S.find((function(e){return e.idx===t})),onChange:function(e){return function(e,t){N((function(n){return[].concat(Object(l.a)(n),[Object(u.a)({idx:t},e)])}))}(e,t)}})}),Object(m.jsx)(a.l,{md:"2",children:!s&&Object(m.jsx)(a.f,{onClick:function(){return B(t)},size:"sm",children:"Remove"})})]},t)})),D=function(){v((function(e){return[].concat(Object(l.a)(e),[{serviceId:""}])}))},B=function(e){v((function(t){return t.filter((function(t,n){return n!==e}))})),N((function(t){return t.filter((function(t){return t.idx!==e}))}))};return r.a.useEffect((function(){n&&0===k.length&&T({url:"https://app.aloropivetcenter.com/api/items/records/all?serviceId=3",method:"GET"}).then((function(e){y(e.data.map((function(e){return{label:e.name,value:e.id}})))}))}),[n,k,T]),Object(m.jsxs)(a.K,{show:n,onClose:function(){return i(!1)},children:[Object(m.jsx)(a.N,{children:s?"Treatment Details":"New Prescription"}),Object(m.jsxs)(a.L,{children:[Object(m.jsxs)(a.x,{children:[Object(m.jsx)(a.G,{htmlFor:"Statement",children:"Statement"}),Object(m.jsx)(a.B,{disabled:s,value:A.statement,name:"statement",onChange:G,id:"statement",placeholder:"Enter Statement"})]}),Object(m.jsxs)(a.x,{children:[Object(m.jsx)(a.G,{htmlFor:"prescription",children:"Prescription"}),Object(m.jsx)(a.B,{disabled:s,value:A.prescription,name:"prescription",onChange:G,id:"prescription",placeholder:"Enter Prescription"})]}),Object(m.jsxs)(a.x,{className:"py-3 m-0",children:[Object(m.jsxs)(a.T,{className:"px-3 justify-content-between align-items-center",children:[Object(m.jsx)(a.G,{htmlFor:"recomendation",children:"Recomendation"}),!s&&Object(m.jsx)(a.f,{onClick:D,size:"sm",color:"primary",children:"Add Recommendation"})]}),R.length>0&&Object(m.jsx)("section",{className:"py-2",children:R})]}),Object(m.jsxs)(a.x,{children:[Object(m.jsx)(a.G,{htmlFor:"description",children:"Description"}),Object(m.jsx)(a.fb,{disabled:s,value:A.description,onChange:G,name:"description",id:"description",placeholder:"Enter Description"})]}),Object(m.jsxs)(a.x,{children:[Object(m.jsx)(a.G,{htmlFor:"followUp",children:"Follow up ?"}),Object(m.jsx)(a.B,{disabled:s,type:"date",value:A.followUp,name:"followUp",onChange:G,id:"followUp",placeholder:"Enter follow Up day"})]})]}),Object(m.jsxs)(a.M,{children:[Object(m.jsx)(a.f,{color:"danger",onClick:function(){return i(!1)},children:"Cancel"}),!s&&Object(m.jsx)(a.f,{onClick:function(){if(!s){var e=(null===A||void 0===A?void 0:A.followUp)||null,n=Object(u.a)(Object(u.a)({},A),{},{orderId:t.params.slug.split("-")[1],petId:t.params.petId,followUp:e,recomendations:S.map((function(e){return e.value}))});T({data:n}).then((function(e){h(),F({statement:"",prescription:"",description:"",followUp:""}),i(!1)})).catch((function(e){var t,n;b({message:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Error Occured ! Try again later"})}))}},color:"primary",children:"Submit"})]})]})})),b=n(675),f=function(e){var t=e.match,n=r.a.useContext(p.a).role,i=r.a.useState(null),s=Object(c.a)(i,2),l=s[0],d=s[1],u=r.a.useState(!1),j=Object(c.a)(u,2),f=j[0],O=j[1],x=r.a.useState([]),v=Object(c.a)(x,2),g=v[0],w=v[1],S=Object(o.a)({url:"https://app.aloropivetcenter.com/api/treatments/all/pets",method:"POST"},{manual:!0}),N=Object(c.a)(S,2),C=N[0].loading,I=N[1];return r.a.useEffect((function(){I({data:{petId:t.params.petId}}).then((function(e){var t;w((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)||[])}))}),[I,t.params.petId]),Object(m.jsxs)(a.g,{children:[Object(m.jsx)(a.k,{children:Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(m.jsx)("div",{className:"font-lg",children:"Pet Previous History"}),"doctor"===n&&Object(m.jsx)(a.f,{color:"primary",onClick:function(){return O(!0)},children:"Add Prescription for Pet"})]})}),Object(m.jsx)(a.h,{className:"p-0",children:Object(m.jsx)(a.p,{loading:C,fields:["statement","description","createdAt"],items:g,onRowClick:function(e){return function(e){d(e),O(!0)}(e)},striped:!0,scopedSlots:{createdAt:function(e){return Object(m.jsx)("td",{children:Object(b.a)(e.createdAt)})}}})}),Object(m.jsx)(h,{show:f,setShow:function(e){O(e),e||d(null)},refetch:function(){I({data:{petId:t.params.petId}}).then((function(e){var t;w((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)||[])}))},details:l})]})},O=n(52),x=Object(s.i)((function(e){var t=e.match,n=e.pet;return Object(m.jsx)(O.c,{to:{pathname:"/check-up/".concat(t.params.id,"/").concat(t.params.slug,"/").concat(n.id)},children:Object(m.jsx)(a.g,{className:"m-0",children:Object(m.jsx)(a.h,{className:"p-3",children:Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(m.jsx)("p",{className:"m-0",children:n.name}),Object(m.jsx)("p",{className:"m-0",children:Object(b.a)(n.createdAt)})]})})})})})),v=function(e){return e.pets.map((function(e){return Object(m.jsx)(x,{pet:e},e.id)}))};t.default=function(e){var t=e.match,n=Object(s.g)(),i=r.a.useState([]),l=Object(c.a)(i,2),d=l[0],u=l[1],j=Object(o.a)({url:"https://app.aloropivetcenter.com/api/pets/all/patients",method:"POST"},{manual:!0}),p=Object(c.a)(j,2),h=p[0].loading,b=p[1];return r.a.useEffect((function(){b({data:{patientId:t.params.id}}).then((function(e){var c,a,i,r;u(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.rows.map((function(e){return{id:e.id,name:e.name,createdAt:e.createdAt}}))),(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.rows)||void 0===i?void 0:i.length)>0&&n.replace("/check-up/".concat(t.params.id,"/").concat(t.params.slug,"/").concat(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.rows[0].id))}))}),[b,t.params.id,t.params.slug,n]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(a.T,{children:[Object(m.jsx)(a.l,{md:"4",children:Object(m.jsxs)(a.g,{children:[Object(m.jsx)(a.k,{children:Object(m.jsx)("p",{className:"font-lg m-0",children:"Pets"})}),Object(m.jsx)(a.h,{className:"p-0",children:h?Object(m.jsx)("p",{className:"pt-3 text-center",children:"Loading ..."}):Object(m.jsx)(v,{pets:d})})]})}),Object(m.jsxs)(a.l,{children:[Object(m.jsx)(s.b,{path:"/check-up/:id/:slug",exact:!0,render:function(){return Object(m.jsx)("p",{className:"p-5 text-center",children:"Please select Pet to view details."})}}),Object(m.jsx)(s.b,{path:"/check-up/:id/:slug/:petId",component:f})]})]})})}}}]);
//# sourceMappingURL=19.74cc0b23.chunk.js.map