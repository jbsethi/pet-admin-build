(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{675:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(e){return new Date(e).toISOString().slice(0,19).replace(/-/g,"/").replace("T"," ")}},676:function(e,t,c){"use strict";c(1);var n=c(72),a=c(18);t.a=function(e){var t=e.keyword,c=void 0===t?"":t,r=e.changeKeyword,i=void 0===r?null:r,s=e.children;return Object(a.jsxs)(n.T,{className:"align-items-center justify-content-between",children:[Object(a.jsx)(n.l,{sm:"4",children:Object(a.jsx)(n.x,{className:"mb-0",children:Object(a.jsx)(n.B,{type:"text",name:"nf-text",placeholder:"Search Here..",autoComplete:"off",value:c,onChange:i,onKeyPress:i})})}),Object(a.jsx)(n.l,{sm:"4",className:"d-flex justify-content-end",children:s})]})}},677:function(e,t,c){"use strict";function n(e,t,c,n,a,r,i){try{var s=e[r](i),o=s.value}catch(l){return void c(l)}s.done?t(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var t=this,c=arguments;return new Promise((function(a,r){var i=e.apply(t,c);function s(e){n(i,a,r,s,o,"next",e)}function o(e){n(i,a,r,s,o,"throw",e)}s(void 0)}))}}c.d(t,"a",(function(){return a}))},733:function(e,t,c){"use strict";c.r(t);var n=c(66),a=c(1),r=c.n(a),i=c(674),s=c(676),o=c(678),l=c.n(o),d=c(677),j=c(174),p=c(53),u=c(173),m=c(72),h=c(18),x=function(e){var t=e.show,c=e.setShow,s=e.refetch,o=e.itemId,x=e.setEditId,b=Object(a.useContext)(u.a).addToast,O=r.a.useState([]),v=Object(n.a)(O,2),f=v[0],g=v[1],y=r.a.useState([]),w=Object(n.a)(y,2),T=w[0],I=w[1],C=r.a.useState({name:"",description:"",price:"",petTypeId:"",serviceId:"",active:!0}),S=Object(n.a)(C,2),k=S[0],N=S[1],E=Object(i.a)({url:"https://app.aloropivetcenter.com/api/items",method:"POST"},{manual:!0}),P=Object(n.a)(E,2),G=P[0].loading,A=P[1],F=function(e){N((function(t){return"active"===e.target.name?Object(p.a)(Object(p.a)({},t),{},Object(j.a)({},e.target.name,e.target.checked)):Object(p.a)(Object(p.a)({},t),{},Object(j.a)({},e.target.name,e.target.value))}))},D=r.a.useCallback(Object(d.a)(l.a.mark((function e(){var t,c,n,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({url:"https://app.aloropivetcenter.com/api/services",method:"GET"});case 3:return a=e.sent,g((null===(t=a)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.rows)||[]),e.next=7,A({url:"https://app.aloropivetcenter.com/api/pet-types/records/active",method:"GET"});case 7:if(a=e.sent,console.log(a),I((null===(n=a)||void 0===n?void 0:n.data)||[]),!o){e.next=15;break}return e.next=13,A({url:"https://app.aloropivetcenter.com/api/items/".concat(o),method:"GET"});case 13:a=e.sent,N({name:a.data.name,description:a.data.description,price:a.data.price,petTypeId:a.data.petTypeId,serviceId:a.data.serviceId,active:a.data.active});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),b({message:(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.message)||"Error occured !"});case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),[A,o]);return r.a.useEffect((function(){t&&D()}),[t,D]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.K,{show:t,onClose:function(){return c(!1)},children:[Object(h.jsx)(m.N,{closeButton:!0,children:"Add Item"}),Object(h.jsx)(m.L,{children:G?Object(h.jsx)("div",{className:"py-5 text-center",children:"Loading Details ..."}):Object(h.jsx)(m.T,{children:Object(h.jsxs)(m.l,{className:"px-5 pt-4",children:[Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-name",children:"Name"})}),Object(h.jsx)(m.l,{xs:"12",md:"9",children:Object(h.jsx)(m.B,{id:"text-name",name:"name",value:k.name,onChange:F,placeholder:"Enter Name for item"})})]}),Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-price",children:"Price"})}),Object(h.jsx)(m.l,{xs:"12",md:"9",children:Object(h.jsx)(m.B,{id:"text-price",name:"price",value:k.price,onChange:F,placeholder:"Enter Price for item"})})]}),Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-pet-type",children:"Pet Type"})}),Object(h.jsx)(m.l,{xs:"12",md:"9",children:Object(h.jsxs)(m.U,{custom:!0,name:"petTypeId",id:"text-pet-type",onChange:F,value:k.petTypeId,children:[Object(h.jsx)("option",{value:"0",children:"Select"}),T.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-service",children:"Service"})}),Object(h.jsx)(m.l,{xs:"12",md:"9",children:Object(h.jsxs)(m.U,{custom:!0,name:"serviceId",id:"text-service",onChange:F,value:k.serviceId,children:[Object(h.jsx)("option",{value:"0",children:"Select"}),f.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.displayName},e.id)}))]})})]}),Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{md:"3",children:Object(h.jsx)(m.G,{className:"pt-1",htmlFor:"text-description",children:"Description"})}),Object(h.jsx)(m.l,{xs:"12",md:"9",children:Object(h.jsx)(m.fb,{id:"text-description",name:"description",value:k.description,onChange:F,placeholder:"Enter Description ..."})})]}),Object(h.jsxs)(m.x,{row:!0,children:[Object(h.jsx)(m.l,{xs:"3",md:"3",children:Object(h.jsx)(m.G,{htmlFor:"text-description",children:"Active"})}),Object(h.jsx)(m.l,{xs:"9",md:"9",children:Object(h.jsx)(m.eb,{color:"primary",name:"active",checked:k.active,onChange:F,variant:"opposite",shape:"pill"})})]})]})})}),Object(h.jsxs)(m.M,{children:[Object(h.jsx)(m.f,{color:"secondary",onClick:function(){return c(!1),N({name:"",description:"",price:"",petTypeId:"",serviceId:"",active:!0}),void x(null)},children:"Cancel"}),Object(h.jsx)(m.f,{onClick:function(){if(!G){var e={data:Object(p.a)({},k)};o&&(e.url="https://app.aloropivetcenter.com/api/items/".concat(o),e.method="PUT"),A(e).then((function(e){c(!1),N({name:"",description:"",price:"",petTypeId:"",serviceId:"",active:!0}),x(null),s()})).catch((function(e){b({message:e.response.data.message})}))}},className:"ml-1",color:"primary",children:G?"Loading":"Confirm"})]})]})})},b=c(675),O=["name","price",{key:"createdAt",label:"Registered"},"description","actions"];t.default=function(){var e=Object(a.useContext)(u.a).addToast,t=r.a.useState(!1),c=Object(n.a)(t,2),o=c[0],l=c[1],d=r.a.useState(""),j=Object(n.a)(d,2),p=j[0],v=j[1],f=r.a.useState(1),g=Object(n.a)(f,2),y=g[0],w=g[1],T=r.a.useState(1),I=Object(n.a)(T,2),C=I[0],S=I[1],k=r.a.useState(null),N=Object(n.a)(k,2),E=N[0],P=N[1],G=Object(i.a)({url:"https://app.aloropivetcenter.com/api/items",method:"GET",params:{pageNo:C}},{manual:!0}),A=Object(n.a)(G,2),F=A[0],D=F.data,B=F.loading,K=F.error,L=A[1],U=r.a.useCallback((function(){L().then((function(e){w(e.data.totalPages)}))}),[L]);return r.a.useEffect((function(){U()}),[U]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m.T,{children:Object(h.jsx)(m.l,{xs:"12",lg:"12",children:Object(h.jsxs)(m.g,{children:[Object(h.jsx)(m.k,{children:"Items"}),Object(h.jsx)(m.h,{children:Object(h.jsx)(m.p,{items:B||K?[]:(null===D||void 0===D?void 0:D.rows)||[],fields:O,striped:!0,itemsPerPage:10,loading:B,overTableSlot:Object(h.jsx)(s.a,{keyword:p,changeKeyword:function(t){"Enter"===t.key?L({params:{search:p}}).catch((function(t){e({message:t.response.data.message})})):v(t.target.value)},children:Object(h.jsx)(m.f,{color:"primary",variant:"outline",className:"m-2 pl-3 pr-4",onClick:function(){return l(!0)},children:Object(h.jsx)("span",{className:"ml-1",children:"Add Item"})})}),underTableSlot:Object(h.jsx)(m.R,{activePage:C,pages:y,onActivePageChange:function(e){return S(e)}}),scopedSlots:{price:function(e){return Object(h.jsxs)("td",{children:[e.price," AED"]})},createdAt:function(e){return Object(h.jsx)("td",{children:Object(b.a)(e.createdAt)})},actions:function(e){return Object(h.jsxs)("td",{children:[Object(h.jsx)(m.f,{onClick:function(){return t=e.id,P(t),void l(!0);var t},color:"primary",size:"sm",className:"mr-1",children:"Edit"}),Object(h.jsx)(m.f,{onClick:function(){return t=e.id,void L({url:"https://app.aloropivetcenter.com/api/items/".concat(t),method:"DELETE"}).then((function(){U()}));var t},color:"danger",size:"sm",children:"Delete"})]})}}})})]})})}),Object(h.jsx)(x,{show:o,setShow:l,refetch:L,itemId:E,setEditId:P})]})}}}]);
//# sourceMappingURL=8.514ab003.chunk.js.map