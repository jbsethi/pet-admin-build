(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{675:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(e){return new Date(e).toISOString().slice(0,19).replace(/-/g,"/").replace("T"," ")}},727:function(e,t,c){"use strict";c.r(t);var n=c(53),r=c(66),a=c(1),i=c.n(a),o=c(674),s=c(24),d=c(675),u=c(72),l=c(18),p=["name",{key:"createdAt",label:"Registered"},"email","contact"];t.default=function(e){var t=e.match,c=Object(s.g)(),a=i.a.useState([]),j=Object(r.a)(a,2),h=j[0],m=j[1],b=Object(o.a)({url:"https://app.aloropivetcenter.com/api/orders",method:"GET"},{manual:!0}),f=Object(r.a)(b,2),O=f[0].loading,g=f[1];return i.a.useEffect((function(){g({params:{appointment:1,checkUp:!1}}).then((function(e){m(e.data.rows.map((function(e){return Object(n.a)({orderId:e.id},e.Patient)})))}))}),[g,t.params.id]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u.U,{children:Object(l.jsx)(u.l,{xs:"12",lg:"12",children:Object(l.jsxs)(u.g,{children:[Object(l.jsx)(u.k,{children:"Visitors"}),Object(l.jsx)(u.h,{children:Object(l.jsx)(u.p,{items:O?[]:h,fields:p,striped:!0,itemsPerPage:5,pagination:!0,loading:O,onRowClick:function(e){return c.push("/check-up/".concat(e.id,"/treatment-").concat(e.orderId))},scopedSlots:{createdAt:function(e){return Object(l.jsx)("td",{children:Object(d.a)(e.createdAt)})}}})})]})})})})}}}]);
//# sourceMappingURL=20.c6edf8ef.chunk.js.map