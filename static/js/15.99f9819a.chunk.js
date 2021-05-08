(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{677:function(e,t,c){"use strict";function a(e,t,c,a,i,r,n){try{var s=e[r](n),o=s.value}catch(l){return void c(l)}s.done?t(o):Promise.resolve(o).then(a,i)}function i(e){return function(){var t=this,c=arguments;return new Promise((function(i,r){var n=e.apply(t,c);function s(e){a(n,i,r,s,o,"next",e)}function o(e){a(n,i,r,s,o,"throw",e)}s(void 0)}))}}c.d(t,"a",(function(){return i}))},680:function(e,t,c){"use strict";var a=c(678),i=c.n(a),r=c(677),n=c(174),s=c(53),o=c(66),l=c(1),d=c.n(l),j=c(679),p=c(72),u=c(674),m=c(173),h=c(18);t.a=function(e){var t,c=e.show,a=e.setShow,l=e.dispatch,b=d.a.useContext(m.a).addToast,O=d.a.useState({categoryId:null,itemId:null,packageId:null,quantity:1}),x=Object(o.a)(O,2),v=x[0],f=x[1],g=d.a.useState([]),y=Object(o.a)(g,2),I=y[0],w=y[1],F=d.a.useState([]),k=Object(o.a)(F,2),C=k[0],V=k[1],R=d.a.useState([]),N=Object(o.a)(R,2),S=N[0],A=N[1],D=Object(u.a)({url:"https://app.aloropivetcenter.com/api/services",method:"POST"},{manual:!0}),E=Object(o.a)(D,2)[1],G=function(e){var t;e.isSelect?(["packageId","itemId"].includes(e.valueFor)&&(t="itemId"===e.valueFor?"packageId":"itemId"),f((function(c){var a;return Object(s.a)(Object(s.a)({},c),{},(a={},Object(n.a)(a,t,null),Object(n.a)(a,e.valueFor,e.option),a))}))):f((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(n.a)({},e.target.name,e.target.value))}))},T=d.a.useCallback(Object(r.a)(i.a.mark((function e(){var t,c,a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E({url:"https://app.aloropivetcenter.com/api/services",method:"GET"});case 3:c=e.sent,a=((null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.rows)||[]).map((function(e){return{label:e.displayName,value:e.id}})),w(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b({message:(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Error Try again later !"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[E]),P=d.a.useCallback(Object(r.a)(i.a.mark((function e(){var t,c,a,r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f((function(e){return Object(s.a)(Object(s.a)({},e),{},{itemId:null,packageId:null})})),e.next=4,E({url:"https://app.aloropivetcenter.com/api/packages/records/active",method:"GET",params:{serviceId:(null===(t=v.categoryId)||void 0===t?void 0:t.value)||null}});case 4:return a=e.sent,r=((null===a||void 0===a?void 0:a.data)||[]).map((function(e){return{label:e.name,value:e.id,price:e.price}})),A(r),e.next=9,E({url:"https://app.aloropivetcenter.com/api/items/records/active",method:"GET",params:{serviceId:(null===(c=v.categoryId)||void 0===c?void 0:c.value)||null}});case 9:n=e.sent,o=((null===n||void 0===n?void 0:n.data)||[]).map((function(e){return{label:e.name,value:e.id,price:e.price}})),V(o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),b({message:e.t0.response.data.message});case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[E,null===v||void 0===v||null===(t=v.categoryId)||void 0===t?void 0:t.value]);return d.a.useEffect((function(){c&&T()}),[c,T]),d.a.useEffect((function(){c&&v.categoryId&&(V([]),A([]),P())}),[c,P,v.categoryId]),Object(h.jsxs)(p.K,{show:c,onClose:function(){return a(!1)},children:[Object(h.jsx)(p.N,{children:"Add Item"}),Object(h.jsxs)(p.L,{children:[Object(h.jsxs)(p.x,{row:!0,children:[Object(h.jsx)(p.l,{children:Object(h.jsx)(p.G,{className:"pt-2",htmlFor:"text-category",children:"Category"})}),Object(h.jsx)(p.l,{xs:"12",children:Object(h.jsx)(j.a,{value:v.categoryId,name:"categoryId",options:I,onChange:function(e){return G({isSelect:!0,valueFor:"categoryId",option:e})}})})]}),Object(h.jsxs)(p.x,{row:!0,children:[Object(h.jsx)(p.l,{children:Object(h.jsx)(p.G,{className:"pt-2",htmlFor:"text-package",children:"Package"})}),Object(h.jsx)(p.l,{xs:"12",children:Object(h.jsx)(j.a,{value:v.packageId,name:"packageItem",options:S,onChange:function(e){return G({isSelect:!0,valueFor:"packageId",option:e})}})})]}),Object(h.jsxs)(p.x,{row:!0,children:[Object(h.jsx)(p.l,{children:Object(h.jsx)(p.G,{className:"pt-2",htmlFor:"text-package-item",children:"Item"})}),Object(h.jsx)(p.l,{xs:"12",children:Object(h.jsx)(j.a,{value:v.itemId,name:"packageItem",options:C,onChange:function(e){return G({isSelect:!0,valueFor:"itemId",option:e})}})})]}),Object(h.jsxs)(p.x,{row:!0,children:[Object(h.jsx)(p.l,{children:Object(h.jsx)(p.G,{className:"pt-2",htmlFor:"text-qty",children:"Quantity"})}),Object(h.jsx)(p.l,{xs:"12",children:Object(h.jsx)(p.B,{value:v.quantity,id:"text-qty",name:"quantity",placeholder:"Enter Quantity",type:"number",onChange:G})})]})]}),Object(h.jsxs)(p.M,{children:[Object(h.jsx)(p.f,{color:"danger",onClick:function(){return a(!1)},children:"Cancel"}),Object(h.jsx)(p.f,{color:"primary",onClick:function(){v.categoryId&&(v.itemId||v.packageId)?v.quantity<=0?b({message:"Quantity must not be 0 !"}):(l({type:"addItemInReceipt",payload:v}),f({categoryId:null,itemId:null,packageId:null,quantity:1}),a(!1)):b({message:"Please select item first !"})},children:"Submit"})]})]})}},729:function(e,t,c){"use strict";c.r(t);var a=c(53),i=c(66),r=c(1),n=c.n(r),s=c(72),o=c(24),l=c(679),d=c(674),j=c(18),p=function(e){var t=e.isVisitorRecordAdded,c=e.visitorRecord,a=e.dispatch;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"emiratesId",children:"Visitors Emirates ID"}),Object(j.jsx)(s.B,{disabled:t,value:c.emiratesId,name:"emiratesId",onChange:function(e){return a({type:"handleChangeVisitorRecord",payload:e})},id:"emiratesId",placeholder:"Enter Visitor's emirates id"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"name",children:"Visitors Name"}),Object(j.jsx)(s.B,{disabled:t,value:c.name,name:"name",onChange:function(e){return a({type:"handleChangeVisitorRecord",payload:e})},id:"name",placeholder:"Enter Visitor's name"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"email",children:"Email"}),Object(j.jsx)(s.B,{disabled:t,value:c.email,name:"email",onChange:function(e){return a({type:"handleChangeVisitorRecord",payload:e})},id:"email",placeholder:"Enter Visitor's email"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"contact",children:"Phone No"}),Object(j.jsx)(s.B,{disabled:t,value:c.contact,name:"contact",onChange:function(e){return a({type:"handleChangeVisitorRecord",payload:e})},id:"contact",placeholder:"Enter Phone number"})]})]})},u=c(680),m=["action","name","category","price","qty","total"],h=function(e){var t=e.receiptFormVisibility,c=e.showAddReceiptFormModal,a=e.receiptItems,i=e.dispatch,r=function(e){i({type:"setShowAddReceiptForm",payload:e})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.g,{children:[Object(j.jsxs)(s.k,{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Shopping, Grooming and Others"})}),Object(j.jsx)(s.eb,{className:"mr-1",color:"dark",shape:"pill",variant:"opposite",value:t,onChange:function(e){return i({type:"setReceiptFormVisibility",payload:e.target.checked})}})]}),t&&Object(j.jsx)(s.h,{children:Object(j.jsx)(s.p,{fields:m,items:a||[],footer:!0,hover:!0,scopedSlots:{action:function(e){return Object(j.jsx)("td",{className:"px-1 py-2",children:Object(j.jsx)(s.f,{onClick:function(){return t={type:"removeItem",payload:e},console.log(t.payload),void i(t);var t},size:"sm",children:"\u2716"})})}},overTableSlot:Object(j.jsx)("div",{className:"text-right",children:Object(j.jsx)(s.f,{size:"sm",color:"primary",variant:"outline",className:"m-2 pl-3 pr-4",onClick:function(){return r(!0)},children:Object(j.jsx)("span",{className:"ml-1",children:"Add Item"})})})})})]}),Object(j.jsx)(u.a,{show:c,setShow:r,dispatch:i})]})},b=function(e){var t=e.doctorsReceipt;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"font-weight-bold font-lg",children:"Doctor receipt form"}),Object(j.jsxs)(s.T,{className:"my-2",children:[Object(j.jsx)(s.l,{md:"4",className:"font-weight-bold",children:"Pet's Name"}),Object(j.jsx)(s.l,{children:t.pet.label})]}),Object(j.jsxs)(s.T,{className:"my-2",children:[Object(j.jsx)(s.l,{md:"4",className:"font-weight-bold",children:"Check up Date"}),Object(j.jsx)(s.l,{children:t.appointmentDate.getDate()+"/"+(+t.appointmentDate.getMonth()+1)+"/"+t.appointmentDate.getFullYear()})]}),Object(j.jsxs)(s.T,{className:"my-2",children:[Object(j.jsx)(s.l,{md:"4",className:"font-weight-bold",children:"Doctor's Name"}),Object(j.jsx)(s.l,{children:"--"})]}),Object(j.jsxs)(s.T,{className:"my-2",children:[Object(j.jsx)(s.l,{md:"4",className:"font-weight-bold",children:"Is Follow Up ?"}),Object(j.jsx)(s.l,{children:t.isFollowUp?"Yes":"No"})]}),Object(j.jsxs)(s.T,{className:"my-2",children:[Object(j.jsx)(s.l,{md:"4",className:"font-weight-bold",children:"Doctor's Fee"}),Object(j.jsxs)(s.l,{children:[t.fee," AED"]})]})]})},O=c(173),x=c(175),v=c(174),f=function(e){var t=e.show,c=e.setShow,r=e.visitorId,o=e.setItems,l=e.setSelectedPet,p=n.a.useContext(O.a).addToast,u=Object(d.a)({method:"GET"},{manual:!0}),m=Object(i.a)(u,2)[1],h=n.a.useState({id:"",name:"",breed:"",age:"",dob:"",color:"",specie:"",gender:"",microchip:!1}),b=Object(i.a)(h,2),f=b[0],g=b[1],y=function(e){var t=f.age;if("dob"===e.target.name){var c=(new Date).getFullYear(),i=new Date(e.target.value).getFullYear();t=c-i}g((function(c){return Object(a.a)(Object(a.a)({},c),{},Object(v.a)({age:t},e.target.name,e.target.value))}))};return Object(j.jsxs)(s.K,{show:t,onClose:function(){return c(!1)},children:[Object(j.jsx)(s.N,{children:"Add New Pet"}),Object(j.jsxs)(s.L,{children:[Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"name",children:"Pet Name"}),Object(j.jsx)(s.B,{value:f.name,name:"name",onChange:y,id:"name",placeholder:"Enter name"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"type",children:"Breed"}),Object(j.jsx)(s.B,{value:f.breed,name:"breed",onChange:y,id:"type",placeholder:"Enter breed"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"age",children:"Pet Age ( years )"}),Object(j.jsx)(s.B,{value:f.age,name:"age",onChange:y,id:"age",placeholder:"Enter age"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"age",children:"Pet DOB"}),Object(j.jsx)(s.B,{value:f.dob,name:"dob",type:"date",onChange:y,id:"dob",placeholder:"Enter dob"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"color",children:"Pet Color"}),Object(j.jsx)(s.B,{value:f.color,name:"color",onChange:y,id:"color",placeholder:"Enter color"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"specie",children:"Specie"}),Object(j.jsx)(s.B,{value:f.specie,name:"specie",onChange:y,id:"specie",placeholder:"Enter specie"})]}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"gender",children:"Sex"}),Object(j.jsxs)(s.U,{custom:!0,name:"gender",id:"text-pet-type",value:f.gender,onChange:y,children:[Object(j.jsx)("option",{value:"Male",children:"Male"}),Object(j.jsx)("option",{value:"Female",children:"Female"}),Object(j.jsx)("option",{value:"Neutered",children:"Neutered"}),Object(j.jsx)("option",{value:"Spayed",children:"Spayed"})]})]})]}),Object(j.jsxs)(s.x,{row:!0,className:"align-items-center px-3",children:[Object(j.jsx)(s.l,{xs:"3",md:"3",children:Object(j.jsx)(s.G,{htmlFor:"text-microchip",className:"pl-1",children:"Microchip ?"})}),Object(j.jsx)(s.l,{xs:"9",md:"9",children:Object(j.jsx)(s.eb,{color:"primary",name:"microchip",value:f.microchip,onChange:function(e){return t=e.target.checked,void g((function(e){return Object(a.a)(Object(a.a)({},e),{},{microchip:t})}));var t},variant:"opposite",shape:"pill"})})]}),Object(j.jsxs)(s.M,{children:[Object(j.jsx)(s.f,{onClick:function(){return c(!1)},color:"danger",children:"Cancel"}),Object(j.jsx)(s.f,{onClick:function(){var e=Object(a.a)(Object(a.a)({},f),{},{patientId:r});delete e.id,m({url:"https://app.aloropivetcenter.com/api/pets",method:"POST",data:e}).then((function(e){g((function(t){return Object(a.a)(Object(a.a)({},t),{},{id:e.data.id})})),o((function(t){return[].concat(Object(x.a)(t),[e.data])})),l({label:e.data.name,value:e.data}),c(!1)})).catch((function(e){p({message:e.response.data.message})}))},color:"primary",children:"Submit"})]})]})},g=function(e){var t=e.visitorId,c=e.dispatch,a=n.a.useContext(O.a).addToast,r=Object(d.a)({method:"GET"},{manual:!0}),o=Object(i.a)(r,2)[1],p=n.a.useState(!1),u=Object(i.a)(p,2),m=u[0],h=u[1],b=n.a.useState(!1),x=Object(i.a)(b,2),v=x[0],g=x[1],y=n.a.useState(""),I=Object(i.a)(y,2),w=I[0],F=I[1],k=n.a.useState([]),C=Object(i.a)(k,2),V=C[0],R=C[1],N=n.a.useState(null),S=Object(i.a)(N,2),A=S[0],D=S[1],E=n.a.useState(""),G=Object(i.a)(E,2),T=G[0],P=G[1],q=n.a.useState(!1),B=Object(i.a)(q,2),U=B[0],M=B[1];return n.a.useEffect((function(){w.length>0&&o({url:"https://app.aloropivetcenter.com/api/pets",method:"GET",params:{patientId:t,search:w}}).catch((function(e){a({message:e.response.data.message})}))}),[w,o,t]),n.a.useEffect((function(){o({url:"https://app.aloropivetcenter.com/api/pets/all/patients",method:"POST",data:{patientId:t}}).then((function(e){var t;R((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows.map((function(e){return{label:e.name,value:e}})))||[])})).catch((function(e){a({message:e.response.data.message})}))}),[o,t]),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{onClick:function(){return h(!0)},className:"my-5 text-center",children:"Add Doctors check up"}),Object(j.jsxs)(s.K,{show:m,onClose:function(){return h(!1)},children:[Object(j.jsx)(s.N,{children:"Create check up"}),Object(j.jsxs)(s.L,{children:[Object(j.jsxs)(s.x,{row:!0,children:[Object(j.jsx)(s.l,{xs:"12",children:Object(j.jsx)(s.G,{className:"pt-1",htmlFor:"search",children:"Select Pet"})}),Object(j.jsx)(s.l,{xs:"12",children:Object(j.jsx)(l.a,{name:"search",value:A,options:V,onInputChange:function(e){return F(e)},onChange:function(e){D(e)}})})]}),Object(j.jsx)("div",{className:"text-right",children:Object(j.jsx)(s.f,{onClick:function(){return g(!0)},size:"sm",children:"Add New Pet"})}),Object(j.jsxs)(s.x,{children:[Object(j.jsx)(s.G,{htmlFor:"fee",children:"Fee"}),Object(j.jsx)(s.B,{value:T,onChange:function(e){return P(e.target.value)},name:"fee",id:"fee",placeholder:"Enter fees"})]}),Object(j.jsxs)(s.x,{row:!0,className:"align-items-center pt-3",children:[Object(j.jsx)(s.l,{xs:"3",md:"3",children:Object(j.jsx)(s.G,{htmlFor:"text-description",className:"pl-1",children:"Follow Up ?"})}),Object(j.jsx)(s.l,{xs:"9",md:"9",children:Object(j.jsx)(s.eb,{color:"primary",name:"active",value:U,onChange:function(e){return M(e.target.checked)},variant:"opposite",shape:"pill"})})]}),Object(j.jsx)(f,{show:v,visitorId:t,setShow:g,setItems:R,setSelectedPet:D})]}),Object(j.jsxs)(s.M,{children:[Object(j.jsx)(s.f,{color:"danger",onClick:function(){return h(!1)},children:"Cancel"}),Object(j.jsx)(s.f,{color:"primary",onClick:function(){U||0!==+T?c({type:"addDoctorReceipt",payload:{pet:A,fee:0===+T?"0":T,appointmentDate:new Date,isFollowUp:U}}):a({message:"Please provide fee or check follow up if it is follow up !"})},children:"Submit"})]})]})]})},y=function(e){var t=e.visitorId,c=e.doctorFormVisibility,a=e.isDoctorVisitAdded,i=e.doctorsReceipt,r=e.dispatch;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.g,{children:[Object(j.jsxs)(s.k,{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Doctor's Visit"})}),Object(j.jsx)(s.eb,{className:"mr-1",color:"dark",shape:"pill",variant:"opposite",value:c,onChange:function(e){return r({type:"setDoctorFormVisibility",payload:e.target.checked})}})]}),c&&Object(j.jsx)(s.h,{children:a?Object(j.jsx)(b,{doctorsReceipt:i}):Object(j.jsx)(g,{visitorId:t,dispatch:r})})]})})},I=function(e,t){var c,i=t.type,r=t.payload;switch(i){case"setKeyword":return Object(a.a)(Object(a.a)({},e),{},{keyword:r});case"setItems":return Object(a.a)(Object(a.a)({},e),{},{items:r});case"setIsVisitorRecordAdded":return Object(a.a)(Object(a.a)({},e),{},{isVisitorRecordAdded:r});case"setVisitorsId":return Object(a.a)(Object(a.a)({},e),{},{visitorsId:r});case"setVisitorsRecord":return Object(a.a)(Object(a.a)({},e),{},{visitorRecord:Object(a.a)({},r)});case"handleChangeVisitorRecord":return Object(a.a)(Object(a.a)({},e),{},{visitorRecord:Object(a.a)(Object(a.a)({},e.visitorRecord),{},Object(v.a)({},r.target.name,r.target.value))});case"setReceiptFormVisibility":return Object(a.a)(Object(a.a)({},e),{},{receiptFormVisibility:r});case"setShowAddReceiptForm":return Object(a.a)(Object(a.a)({},e),{},{showAddReceiptForm:r});case"setDoctorFormVisibility":return Object(a.a)(Object(a.a)({},e),{},{doctorFormVisibility:r});case"setIsDoctorVisitAdded":return Object(a.a)(Object(a.a)({},e),{},{isDoctorVisitAdded:r});case"addItemInReceipt":var n=!0,s=-1;if((null===(c=r.packageId)||void 0===c?void 0:c.value)&&(n=!1),-1===(s=n?e.receiptItems.findIndex((function(e){var t;return e.id===(null===(t=r.itemId)||void 0===t?void 0:t.value)})):e.receiptItems.findIndex((function(e){var t;return e.packageId===(null===(t=r.packageId)||void 0===t?void 0:t.value)})))){var o,l,d,j,p,u,m,h,b={id:(null===(o=r.itemId)||void 0===o?void 0:o.value)||null,packageId:(null===(l=r.packageId)||void 0===l?void 0:l.value)||null,name:(null===(d=r.itemId)||void 0===d?void 0:d.label)||(null===(j=r.packageId)||void 0===j?void 0:j.label),category:r.categoryId.label,price:(null===(p=r.itemId)||void 0===p?void 0:p.price)||(null===(u=r.packageId)||void 0===u?void 0:u.price),qty:r.quantity,total:r.quantity*((null===(m=r.itemId)||void 0===m?void 0:m.price)||(null===(h=r.packageId)||void 0===h?void 0:h.price))};return Object(a.a)(Object(a.a)({},e),{},{receiptItems:[].concat(Object(x.a)(e.receiptItems),[b])})}return Object(a.a)(Object(a.a)({},e),{},{receiptItems:e.receiptItems.map((function(e,t){if(t===s){console.log(e,r);var c=+e.qty+ +r.quantity;return Object(a.a)(Object(a.a)({},e),{},{qty:c,total:c*e.price})}return e}))});case"removeItem":return Object(a.a)(Object(a.a)({},e),{},{receiptItems:e.receiptItems.filter((function(e){return r.id?e.id!==r.id:e.packageId!==r.packageId}))});case"addDoctorReceipt":var O={pet:r.pet,fee:r.fee,appointmentDate:r.appointmentDate,isFollowUp:r.isFollowUp};return Object(a.a)(Object(a.a)({},e),{},{isDoctorVisitAdded:!0,doctorsReceipt:O});case"resetForm":return Object(a.a)(Object(a.a)({},e),{},{keyword:"",items:[],isVisitorRecordAdded:!1,visitorsId:null,visitorRecord:{emiratesId:"",name:"",email:"",contact:""},receiptFormVisibility:!1,showAddReceiptForm:!1,doctorFormVisibility:!1,isDoctorVisitAdded:!1,receiptItems:[],doctorsReceipt:{pet:null,fee:"",appointmentDate:null,isFollowUp:!1}});default:return e}},w={keyword:"",items:[],isVisitorRecordAdded:!1,visitorsId:null,visitorRecord:{emiratesId:"",name:"",email:"",contact:""},receiptFormVisibility:!1,showAddReceiptForm:!1,doctorFormVisibility:!1,isDoctorVisitAdded:!1,receiptItems:[],doctorsReceipt:{pet:null,fee:"",appointmentDate:null,isFollowUp:!1}};t.default=function(){var e=Object(o.g)(),t=Object(r.useContext)(O.a).addToast,c=n.a.useReducer(I,w),u=Object(i.a)(c,2),m=u[0],b=u[1],x=Object(d.a)({method:"GET"},{manual:!0}),v=Object(i.a)(x,2)[1];return n.a.useEffect((function(){m.keyword.length>0&&v({url:"https://app.aloropivetcenter.com/api/patients",params:{search:m.keyword}}).then((function(e){var t;b({type:"setItems",payload:((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.rows)||[]).map((function(e,t){return{label:t+1+": "+e.name+" - "+e.contact,value:e}}))})}))}),[m.keyword,v]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.T,{children:Object(j.jsx)(s.l,{xs:"12",sm:"12",children:Object(j.jsxs)(s.g,{children:[Object(j.jsxs)(s.k,{children:["Visitor",Object(j.jsx)("small",{children:" Form"})]}),Object(j.jsxs)(s.h,{children:[Object(j.jsxs)(s.x,{row:!0,children:[Object(j.jsx)(s.l,{xs:"12",children:Object(j.jsx)(s.G,{className:"pt-1",htmlFor:"search",children:"Search"})}),Object(j.jsx)(s.l,{xs:"12",children:Object(j.jsx)(l.a,{name:"search",options:m.items,onInputChange:function(e){return b({type:"setKeyword",payload:e})},onChange:function(e){var t=e.value;b({type:"setVisitorsRecord",payload:{emiratesId:t.emiratesId,name:t.name,email:t.email,contact:t.contact}}),b({type:"setVisitorsId",payload:t.id}),b({type:"setIsVisitorRecordAdded",payload:!0}),b({type:"setKeyword",payload:{}})}})})]}),Object(j.jsx)(s.g,{children:Object(j.jsx)(s.h,{children:Object(j.jsx)(p,{isVisitorRecordAdded:m.isVisitorRecordAdded,visitorRecord:m.visitorRecord,dispatch:b})})}),m.isVisitorRecordAdded&&Object(j.jsxs)(s.T,{children:[Object(j.jsx)(s.l,{sm:"6",children:Object(j.jsx)(h,{receiptFormVisibility:m.receiptFormVisibility,showAddReceiptFormModal:m.showAddReceiptForm,receiptItems:m.receiptItems,dispatch:b})}),Object(j.jsx)(s.l,{sm:"6",children:Object(j.jsx)(y,{visitorId:m.visitorsId,doctorFormVisibility:m.doctorFormVisibility,isDoctorVisitAdded:m.isDoctorVisitAdded,doctorsReceipt:m.doctorsReceipt,dispatch:b})})]})]}),Object(j.jsx)(s.i,{children:Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsxs)("div",{className:"w-50 ml-auto text-right",children:[Object(j.jsx)(s.f,{onClick:function(){b({type:"setVisitorsRecord",payload:{emiratesId:"",name:"",email:"",contact:""}}),b({type:"setVisitorsId",payload:null}),b({type:"setIsVisitorRecordAdded",payload:!1})},className:"w-25 mr-1",color:"danger",children:"Clear"}),Object(j.jsx)(s.f,{onClick:function(){m.isVisitorRecordAdded?function(){var t={patientId:m.visitorsId,appointment:m.isDoctorVisitAdded,checkUpPrice:+m.doctorsReceipt.fee,description:"Order Receipt For Shopping.",followUp:m.doctorsReceipt.isFollowUp,items:m.receiptItems.filter((function(e){return null!==e.id})).map((function(e){return{itemId:e.id,quantity:e.qty}})),packages:m.receiptItems.filter((function(e){return null!==e.packageId})).map((function(e){return{packageId:e.packageId,quantity:e.qty}}))};v({url:"https://app.aloropivetcenter.com/api/orders",method:"POST",data:t}).then((function(t){b({type:"resetForm",payload:null}),e.push("/visitors")}))}():v({url:"https://app.aloropivetcenter.com/api/patients",method:"POST",data:Object(a.a)({},m.visitorRecord)}).then((function(e){b({type:"setVisitorsId",payload:e.data.id}),b({type:"setIsVisitorRecordAdded",payload:!0})})).catch((function(e){t({message:e.response.data.message})}))},className:"w-25",color:"primary",children:"Submit"})]})})})]})})})})}}}]);
//# sourceMappingURL=15.99f9819a.chunk.js.map