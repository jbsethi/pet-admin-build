(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{681:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.ac9a8e2d.png"},725:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(53),r=n(24),i=n(72),o=s.a.lazy((function(){return n.e(19).then(n.bind(null,717))})),l=s.a.lazy((function(){return n.e(18).then(n.bind(null,718))})),d=s.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,726))})),m=s.a.lazy((function(){return n.e(26).then(n.bind(null,719))})),u=s.a.lazy((function(){return n.e(14).then(n.bind(null,729))})),p=s.a.lazy((function(){return n.e(16).then(n.bind(null,720))})),b=s.a.lazy((function(){return n.e(9).then(n.bind(null,730))})),j=s.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,731))})),h=s.a.lazy((function(){return n.e(17).then(n.bind(null,721))})),x=s.a.lazy((function(){return n.e(15).then(n.bind(null,722))})),O=s.a.lazy((function(){return n.e(12).then(n.bind(null,732))})),v=s.a.lazy((function(){return n.e(11).then(n.bind(null,723))})),f=s.a.lazy((function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,727))})),g=[{path:"/",exact:!0,name:"Home",roles:["superman","admin","receptionist","doctor"]},{path:"/dashboard",name:"Dashboard",component:o,roles:["superman","admin","receptionist"]},{path:"/visitors",exact:!0,name:"Visitors",component:l,roles:["superman","admin","receptionist","doctor"]},{path:"/visitors/add",exact:!0,name:"Add Visitors",component:d,roles:["superman","admin","receptionist"]},{path:"/visitors/:id/:slug",exact:!0,name:"Visitor's Details",component:m,roles:["superman","admin","receptionist","doctor"]},{path:"/visitors/:id/:slug/:petId",exact:!0,name:"Visitor's Details",component:m,roles:["superman","admin","receptionist","doctor"]},{path:"/check-up",exact:!0,name:"Check up",component:s.a.lazy((function(){return n.e(24).then(n.bind(null,724))})),roles:["superman","admin","receptionist","doctor"]},{path:"/check-up/:id/:slug",exact:!0,name:"Pet Treatment",component:f,roles:["superman","admin","receptionist","doctor"]},{path:"/check-up/:id/:slug/:petId",exact:!0,name:"Details",component:f,roles:["superman","admin","receptionist","doctor"]},{path:"/pet-types",exact:!0,name:"Pet Types",component:u,roles:["superman","admin","receptionist"]},{path:"/services",exact:!0,name:"Pet Services",component:p,roles:["superman","admin","receptionist"]},{path:"/items",exact:!0,name:"Items",component:b,roles:["superman","admin","receptionist"]},{path:"/packages",exact:!0,name:"Packages",component:j,roles:["superman","admin","receptionist"]},{path:"/roles",exact:!0,name:"Roles",component:x,roles:["superman","admin"]},{path:"/users",exact:!0,name:"Users",component:h,roles:["superman","admin"]},{path:"/users/add",exact:!0,name:"Add New User",component:v,roles:["superman","admin"]},{path:"/users/:id",exact:!0,name:"User Details",component:O,roles:["superman","admin"]},{path:"/users/:id/edit",exact:!0,name:"Edit User",component:v,roles:["superman","admin"]}],N=n(173),k=n(18),y=Object(k.jsx)("div",{className:"pt-3 text-center",children:Object(k.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),C=function(){var e=s.a.useContext(N.a).role;return Object(k.jsx)("main",{className:"c-main",children:Object(k.jsx)(i.m,{fluid:!0,children:Object(k.jsx)(a.Suspense,{fallback:y,children:Object(k.jsxs)(r.d,{children:[g.filter((function(t){return t.roles.includes(e)})).map((function(e,t){return e.component&&Object(k.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(k.jsx)(i.t,{children:Object(k.jsx)(e.component,Object(c.a)({},t))})}},t)})),["superman","admin"].includes(e)?Object(k.jsx)(r.a,{from:"/",to:"/dashboard"}):Object(k.jsx)(r.a,{from:"/",to:"/visitors"})]})})})})},S=s.a.memo(C),w=function(){return Object(k.jsxs)(i.u,{fixed:!1,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),Object(k.jsx)("span",{className:"ml-1",children:"\xa9 2020 creativeLabs."})]}),Object(k.jsxs)("div",{className:"mfs-auto",children:[Object(k.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(k.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},I=s.a.memo(w),z=n(176),P=n(54),_=function(e){e.setToken;var t=Object(z.b)(),n=Object(z.c)((function(e){return e.sidebarShow}));return Object(k.jsxs)(i.x,{withSubheader:!0,children:[Object(k.jsx)(i.kb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var e=!![!1,"responsive"].includes(n)||"responsive";t({type:"set",sidebarShow:e})}}),Object(k.jsx)(i.kb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var e=![!0,"responsive"].includes(n)&&"responsive";t({type:"set",sidebarShow:e})}}),Object(k.jsx)(i.y,{className:"mx-auto d-lg-none",to:"/",children:Object(k.jsx)(P.a,{name:"logo",height:"48",alt:"Logo"})}),Object(k.jsxs)(i.z,{className:"px-3 ml-auto",children:[Object(k.jsx)(U,{}),Object(k.jsx)(D,{})]}),Object(k.jsx)(i.db,{className:"px-3 justify-content-between",children:Object(k.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:g})})]})},D=function(){var e=Object(a.useContext)(N.a).setToken;return Object(k.jsxs)(i.p,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(k.jsx)(i.s,{className:"c-header-nav-link",caret:!1,children:Object(k.jsx)("div",{className:"c-avatar",children:Object(k.jsx)(i.A,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(k.jsxs)(i.r,{className:"pt-0",placement:"bottom-end",children:[Object(k.jsx)(i.q,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(k.jsx)("strong",{children:"Settings"})}),Object(k.jsxs)(i.q,{children:[Object(k.jsx)(P.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(k.jsxs)(i.q,{children:[Object(k.jsx)(P.a,{name:"cil-settings",className:"mfe-2"}),"Settings"]}),Object(k.jsx)(i.q,{divider:!0}),Object(k.jsxs)(i.q,{onClick:function(){return e("")},children:[Object(k.jsx)(P.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account"]})]})]})},T=n(66),q=n(674),U=function(){var e=Object(r.g)(),t=s.a.useContext(N.a).addToast,n=s.a.useState([]),a=Object(T.a)(n,2),c=a[0],o=a[1],l=Object(q.a)({url:"https://app.aloropivetcenter.com/api/notifications/all/records",method:"GET"},{manual:!0}),d=Object(T.a)(l,2)[1];s.a.useEffect((function(){m();var e=setInterval((function(){m()}),1e4);return function(){clearInterval(e)}}),[]);var m=function(){new Date;d({params:{date:"2021-04-13"}}).then((function(e){o((null===e||void 0===e?void 0:e.data)||[])})).catch((function(e){var n,a;t({message:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||"Error Occured ! Try again later"})}))};return Object(k.jsxs)(i.p,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(k.jsxs)(i.s,{className:"c-header-nav-link",caret:!1,children:[Object(k.jsx)(P.a,{name:"cil-bell"}),Object(k.jsx)(i.a,{shape:"pill",color:"danger",children:c.filter((function(e){return!0!==e.isRead})).length})]}),Object(k.jsxs)(i.r,{placement:"bottom-end",className:"pt-0",children:[Object(k.jsx)(i.q,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(k.jsxs)("strong",{children:["You have ",c.length," notifications"]})}),c.map((function(t,n){return Object(k.jsx)(i.q,{onClick:function(){return function(t){d({url:"https://app.aloropivetcenter.com/api/notifications/"+t.id}),e.push({pathname:"/visitors/".concat(t.patientId,"/details")})}(t)},children:"Follow up"},n)}))]})]})},V=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(k.jsx)(P.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),roles:["superman","admin","receptionist"]},{_tag:"CSidebarNavItem",name:"Visitors",to:"/visitors",icon:"cil-address-book",roles:["superman","admin","receptionist","doctor"]},{_tag:"CSidebarNavItem",name:"Check up",to:"/check-up",icon:"cil-address-book",roles:["superman","admin","receptionist","doctor"]},{_tag:"CSidebarNavItem",name:"Pet Types",to:"/pet-types",icon:"cil-address-book",roles:["superman","admin","receptionist"]},{_tag:"CSidebarNavItem",name:"Services",to:"/services",icon:"cil-address-book",roles:["superman","admin","receptionist"]},{_tag:"CSidebarNavItem",name:"Items",to:"/items",icon:"cil-address-book",roles:["superman","admin","receptionist"]},{_tag:"CSidebarNavItem",name:"Packages",to:"/packages",icon:"cil-address-book",roles:["superman","admin","receptionist"]},{_tag:"CSidebarNavItem",name:"Users",to:"/users",icon:"cil-address-book",roles:["superman","admin"]},{_tag:"CSidebarNavItem",name:"Roles",to:"/roles",icon:"cil-address-book",roles:["superman","admin"]}],A=n(681),E=function(){var e=s.a.useState([]),t=Object(T.a)(e,2),n=t[0],a=t[1],c=s.a.useContext(N.a).role,r=Object(z.b)(),o=Object(z.c)((function(e){return e.sidebarShow}));return s.a.useEffect((function(){a(V.filter((function(e){return e.roles.includes(c)})))}),[c]),Object(k.jsxs)(i.V,{show:o,colorScheme:"light",onShowChange:function(e){return r({type:"set",sidebarShow:e})},children:[Object(k.jsxs)(i.W,{className:"d-md-down-none",to:"/",children:[Object(k.jsx)("div",{className:"c-sidebar-brand-full",children:Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:A.a,alt:"logo",height:"50"})}),Object(k.jsxs)("div",{className:"ml-2",children:[Object(k.jsx)("p",{className:"mb-0 text-primary font-bold font-xl",children:"Aloropi"}),Object(k.jsx)("p",{className:"mb-0 font-sm",children:"Veterinary Center"})]})]})}),Object(k.jsx)("div",{className:"c-sidebar-brand-minimized",children:Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:A.a,alt:"logo",height:"50"})})})]}),Object(k.jsx)(i.Y,{children:n.length>0&&Object(k.jsx)(i.n,{items:n,components:{CSidebarNavDivider:i.Z,CSidebarNavDropdown:i.ab,CSidebarNavItem:i.bb,CSidebarNavTitle:i.cb}})}),Object(k.jsx)(i.X,{className:"c-d-md-down-none"})]})},R=s.a.memo(E);t.default=function(){return Object(k.jsxs)("div",{className:"c-app c-default-layout",children:[Object(k.jsx)(R,{}),Object(k.jsxs)("div",{className:"c-wrapper",children:[Object(k.jsx)(_,{}),Object(k.jsx)("div",{className:"c-body",children:Object(k.jsx)(S,{})}),Object(k.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=13.0cc5c72a.chunk.js.map