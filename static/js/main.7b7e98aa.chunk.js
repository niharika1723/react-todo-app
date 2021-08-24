(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),s=a(9),o=a.n(s),n=(a(22),a(23),a(7)),i=a(40),l=a(36),j=a(37),d=a(38),b=a(39),u=a(1),O=function(e){var t=e.modal,a=e.toggle,r=e.save,s=Object(c.useState)(""),o=Object(n.a)(s,2),O=o[0],m=o[1],p=Object(c.useState)(""),x=Object(n.a)(p,2),h=x[0],f=x[1],g=function(e){var t=e.target,a=t.name,c=t.value;"taskName"===a?m(c):f(c)};return Object(u.jsxs)(i.a,{isOpen:t,toggle:a,children:[Object(u.jsx)(l.a,{toggle:a,children:"Create Task"}),Object(u.jsx)(j.a,{children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Task Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:O,onChange:g,name:"taskName"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{rows:"5",className:"form-control",value:h,onChange:g,name:"description"})]})]})}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{color:"primary",onClick:function(){var e={};e.Name=O,e.Description=h,r(e)},children:"Create"})," ",Object(u.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},m=function(e){var t=e.modal,a=e.toggle,r=e.updateTask,s=e.taskObj,o=Object(c.useState)(""),O=Object(n.a)(o,2),m=O[0],p=O[1],x=Object(c.useState)(""),h=Object(n.a)(x,2),f=h[0],g=h[1],v=function(e){var t=e.target,a=t.name,c=t.value;"taskName"===a?p(c):g(c)};Object(c.useEffect)((function(){p(s.Name),g(s.Description)}),[]);return Object(u.jsxs)(i.a,{isOpen:t,toggle:a,children:[Object(u.jsx)(l.a,{toggle:a,children:"Update Task"}),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Task Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:m,onChange:v,name:"taskName"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{rows:"5",className:"form-control",value:f,onChange:v,name:"description"})]})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=m,t.Description=f,r(t)},children:"Update"})," ",Object(u.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},p=function(e){var t=e.taskObj,a=e.index,r=e.deleteTask,s=e.updateListArray,o=Object(c.useState)(!1),i=Object(n.a)(o,2),l=i[0],j=i[1],d=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"}];return Object(u.jsxs)("div",{className:"card-wrapper mr-5",children:[Object(u.jsx)("div",{className:"card-top",style:{"background-color":d[a%5].primaryColor}}),Object(u.jsxs)("div",{className:"task-holder",children:[Object(u.jsx)("span",{className:"card-header",style:{"background-color":d[a%5].secondaryColor,color:"#49111c","font-weight":"bold","border-radius":"10px"},children:t.Name}),Object(u.jsx)("p",{className:"mt-3",style:{color:"white"},children:t.Description}),Object(u.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(u.jsx)("i",{className:"far fa-edit ",style:{color:d[a%5].primaryColor,cursor:"pointer"},onClick:function(){return j(!0)}}),Object(u.jsx)("i",{className:"fas fa-trash-alt",style:{color:d[a%5].primaryColor,cursor:"pointer"},onClick:function(){r(a)}})]})]}),Object(u.jsx)(m,{modal:l,toggle:function(){j(!l)},updateTask:function(e){s(e,a)},taskObj:t})]})},x=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),o=Object(n.a)(s,2),i=o[0],l=o[1];Object(c.useEffect)((function(){var e=localStorage.getItem("taskList");if(e){var t=JSON.parse(e);l(t)}}),[]);var j=function(e){var t=i;t.splice(e,1),localStorage.setItem("taskList",JSON.stringify(t)),l(t),window.location.reload()},d=function(e,t){var a=i;a[t]=e,localStorage.setItem("taskList",JSON.stringify(a)),l(a),window.location.reload()};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h2",{children:"TODO LIST"}),Object(u.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return r(!0)},children:"Create Task"})]}),Object(u.jsx)("div",{className:"task-container",children:i&&i.map((function(e,t){return Object(u.jsx)(p,{taskObj:e,index:t,deleteTask:j,updateListArray:d})}))}),Object(u.jsx)(O,{toggle:function(){r(!a)},modal:a,save:function(e){var t=i;t.push(e),localStorage.setItem("taskList",JSON.stringify(t)),l(i),r(!1)}})]})};a(34);var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.7b7e98aa.chunk.js.map