(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{675:function(e,t,c){"use strict";c(1);var a=c(72),n=c(18);t.a=function(e){var t=e.keyword,c=void 0===t?"":t,r=e.changeKeyword,i=void 0===r?null:r,s=e.children;return Object(n.jsxs)(a.T,{className:"align-items-center justify-content-between",children:[Object(n.jsx)(a.k,{sm:"4",children:Object(n.jsx)(a.w,{className:"mb-0",children:Object(n.jsx)(a.B,{type:"text",name:"nf-text",placeholder:"Search Here..",autoComplete:"off",value:c,onChange:i,onKeyPress:i})})}),Object(n.jsx)(a.k,{sm:"4",className:"d-flex justify-content-end",children:s})]})}},676:function(e,t,c){"use strict";function a(e,t,c,a,n,r,i){try{var s=e[r](i),o=s.value}catch(l){return void c(l)}s.done?t(o):Promise.resolve(o).then(a,n)}function n(e){return function(){var t=this,c=arguments;return new Promise((function(n,r){var i=e.apply(t,c);function s(e){a(i,n,r,s,o,"next",e)}function o(e){a(i,n,r,s,o,"throw",e)}s(void 0)}))}}c.d(t,"a",(function(){return n}))},731:function(e,t,c){"use strict";c.r(t);var a=c(66),n=c(1),r=c.n(n),i=c(674),s=c(675),o=c(677),l=c.n(o),d=c(676),j=c(174),p=c(53),u=c(678),m=c(72),h=c(18),b=function(e){var t=e.show,c=e.setShow,n=e.refetch,s=e.itemId,o=e.setEditId,b=r.a.useState(""),x=Object(a.a)(b,2),O=x[0],v=x[1],f=r.a.useState([]),g=Object(a.a)(f,2),k=g[0],w=g[1],y=r.a.useState([]),I=Object(a.a)(y,2),C=I[0],T=I[1],N=r.a.useState([]),S=Object(a.a)(N,2),E=S[0],P=S[1],G=r.a.useState({name:"",description:"",price:"",petTypeId:"",serviceId:"",items:[],active:!0}),F=Object(a.a)(G,2),A=F[0],D=F[1],B=Object(i.a)({url:"https://app.aloropivetcenter.com/api/packages",method:"POST"},{manual:!0}),K=Object(a.a)(B,2),L=K[0].loading,U=K[1],z=Object(i.a)({url:"https://app.aloropivetcenter.com/api/items",method:"GET"},{manual:!0}),J=Object(a.a)(z,2)[1],M=function(e){D((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(j.a)({},e.target.name,"active"===e.target.name?e.target.checked:e.target.value))}))},R=r.a.useCallback(Object(d.a)(l.a.mark((function e(){var t,c,a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({url:"https://app.aloropivetcenter.com/api/services",method:"GET"});case 2:return r=e.sent,w((null===(t=r)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.rows)||[]),e.next=6,U({url:"https://app.aloropivetcenter.com/api/pet-types",method:"GET"});case 6:if(r=e.sent,T((null===(a=r)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.rows)||[]),!s){e.next=15;break}return e.next=11,U({url:"https://app.aloropivetcenter.com/api/packages/".concat(s),method:"GET"});case 11:r=e.sent,i=r.data.PackageItems.map((function(e){return{label:e.Item.name,value:e.Item.id}})),P(i),D({name:r.data.name,description:r.data.description,price:r.data.price,petTypeId:r.data.petTypeId,serviceId:r.data.serviceId,items:i,active:r.data.active});case 15:case"end":return e.stop()}}),e)}))),[U,s]);return r.a.useEffect((function(){t&&R()}),[t,R]),r.a.useEffect((function(){t&&J({params:{s:O}}).then((function(e){var t;P(((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)||[]).map((function(e){return{label:e.name,value:e.id}})))}))}),[O,J,t]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.K,{show:t,onClose:function(){return c(!1)},children:[Object(h.jsx)(m.N,{closeButton:!0,children:"Add Package"}),Object(h.jsx)(m.L,{children:L?Object(h.jsx)("div",{className:"py-5 text-center",children:"Loading Details ..."}):Object(h.jsx)(m.T,{children:Object(h.jsxs)(m.k,{className:"px-5 pt-4",children:[Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-name",children:"Name"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsx)(m.B,{id:"text-name",name:"name",value:A.name,onChange:M,placeholder:"Enter Name for item"})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-price",children:"Price"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsx)(m.B,{id:"text-price",name:"price",value:A.price,onChange:M,placeholder:"Enter Price for item"})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-pet-type",children:"Pet Type"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsxs)(m.U,{custom:!0,name:"petTypeId",id:"text-pet-type",onChange:M,value:A.petTypeId,children:[Object(h.jsx)("option",{value:"0",children:"Select"}),C.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-service",children:"Service"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsxs)(m.U,{custom:!0,name:"serviceId",id:"text-service",onChange:M,value:A.serviceId,children:[Object(h.jsx)("option",{value:"0",children:"Select"}),k.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.displayName},e.id)}))]})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-service",children:"Items"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsx)(u.a,{onChange:function(e){D((function(t){return Object(p.a)(Object(p.a)({},t),{},{items:e})}))},name:"itemIds",isMulti:!0,options:E,value:A.items,onInputChange:function(e){return v(e)}})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-description",children:"Description"})}),Object(h.jsx)(m.k,{xs:"12",md:"9",children:Object(h.jsx)(m.fb,{id:"text-description",name:"description",value:A.description,onChange:M,placeholder:"Enter Description ..."})})]}),Object(h.jsxs)(m.w,{row:!0,children:[Object(h.jsx)(m.k,{xs:"3",md:"3",children:Object(h.jsx)(m.G,{htmlFor:"text-description",children:"Active"})}),Object(h.jsx)(m.k,{xs:"9",md:"9",children:Object(h.jsx)(m.eb,{color:"primary",name:"active",checked:A.active,onChange:M,variant:"opposite",shape:"pill"})})]})]})})}),Object(h.jsxs)(m.M,{children:[Object(h.jsx)(m.e,{color:"secondary",onClick:function(){return c(!1),D({name:"",description:"",price:"",petTypeId:"",serviceId:"",items:[],active:!0}),void o(null)},children:"Cancel"}),Object(h.jsx)(m.e,{onClick:function(){if(!L){var e={data:Object(p.a)(Object(p.a)({},A),{},{itemIds:A.items.map((function(e){return e.value}))})};delete e.data.items,s&&(e.url="https://app.aloropivetcenter.com/api/packages/".concat(s),e.method="PUT"),U(e).then((function(e){c(!1),D({name:"",description:"",price:"",petTypeId:"",serviceId:"",items:[],active:!0}),o(null),n()}))}},className:"ml-1",color:"primary",children:L?"Loading":"Confirm"})]})]})})},x=["name","price",{key:"createdAt",label:"Registered"},"description","actions"];t.default=function(){var e=r.a.useState(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],o=r.a.useState(""),l=Object(a.a)(o,2),d=l[0],j=l[1],p=r.a.useState(1),u=Object(a.a)(p,2),O=u[0],v=u[1],f=r.a.useState(1),g=Object(a.a)(f,2),k=g[0],w=g[1],y=r.a.useState(null),I=Object(a.a)(y,2),C=I[0],T=I[1],N=Object(i.a)({url:"https://app.aloropivetcenter.com/api/packages",method:"GET",params:{pageNo:k}},{manual:!0}),S=Object(a.a)(N,2),E=S[0],P=E.data,G=E.loading,F=E.error,A=S[1],D=r.a.useCallback((function(){A().then((function(e){v(e.data.totalPages)}))}),[A]);return r.a.useEffect((function(){D()}),[D]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m.T,{children:Object(h.jsx)(m.k,{xs:"12",lg:"12",children:Object(h.jsxs)(m.f,{children:[Object(h.jsx)(m.j,{children:"Packages"}),Object(h.jsx)(m.g,{children:Object(h.jsx)(m.o,{items:G||F?[]:(null===P||void 0===P?void 0:P.rows)||[],fields:x,striped:!0,itemsPerPage:10,loading:G,overTableSlot:Object(h.jsx)(s.a,{keyword:d,changeKeyword:function(e){"Enter"===e.key?A({params:{search:d}}):j(e.target.value)},children:Object(h.jsx)(m.e,{color:"primary",variant:"outline",className:"m-2 pl-3 pr-4",onClick:function(){return n(!0)},children:Object(h.jsx)("span",{className:"ml-1",children:"Add Package"})})}),underTableSlot:Object(h.jsx)(m.R,{activePage:k,pages:O,onActivePageChange:function(e){return w(e)}}),scopedSlots:{actions:function(e){return Object(h.jsxs)("td",{children:[Object(h.jsx)(m.e,{onClick:function(){return t=e.id,T(t),void n(!0);var t},color:"primary",size:"sm",className:"mr-1",children:"Edit"}),Object(h.jsx)(m.e,{onClick:function(){return t=e.id,void A({url:"https://app.aloropivetcenter.com/api/packages/".concat(t),method:"DELETE"}).then((function(){D()}));var t},color:"danger",size:"sm",children:"Delete"})]})}}})})]})})}),Object(h.jsx)(b,{show:c,setShow:n,refetch:A,itemId:C,setEditId:T})]})}}}]);
//# sourceMappingURL=10.446fc03e.chunk.js.map