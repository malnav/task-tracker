(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(13)),i=n(24),u=n(6),d=n.n(u),j=n(10),l=n(19),b=n(1),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn ",children:n})})},h=n(2),f=function(e){var t=e.title,n=e.showAdd,r=e.onClickAddButton,c=Object(h.e)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h2",{children:t}),("/"===c.pathname||"/task-tracker"===c.pathname)&&Object(b.jsx)(p,{onClick:r,color:n?"red":"green",text:n?"Close":"Add"})]})},x=n(23),O=function(e){var t=e.task,n=e.onDelete,r=e.toggleReminder;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(x.a,{onClick:function(){return n(t.id)},style:{color:"red"}})]}),Object(b.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks,n=e.onDelete,r=e.toggleReminder;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(O,{toggleReminder:r,onDelete:n,task:e},e.id)}))})},m=function(e){var t=e.onAdd;return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault();var n=e.target.taskInput.value,r=e.target.dayInput.value,c=e.target.checkboxInput.checked;n?(t({text:n,day:r,reminder:c}),e.target.taskInput.value="",e.target.dayInput.value="",e.target.checkboxInput.checked=!1):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",name:"taskInput",placeholder:"Add Task"})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",name:"dayInput",placeholder:"Add Day & Time"})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set reminder"}),Object(b.jsx)("input",{type:"checkbox",name:"checkboxInput"})]}),Object(b.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},v=n(8),g=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"Copyright \xa9 2021"}),Object(b.jsx)(v.b,{to:"/about",children:"About"})]})},y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:" version 1.0 "}),Object(b.jsx)(v.b,{to:"/task-tracker",children:"go back"})]})},w="https://malnav-task-tracker.herokuapp.com/tasks";var T=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),s=Object(l.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(w),e()}),[]);var x=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/".concat(t));case 2:return n=e.sent,console.log(w+"/".concat(t)),e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w,{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(u),[r])),console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch(w+"/".concat(t),{method:"PUT",headers:{"content-Type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h.a,{path:"/task-tracker",exact:!0,render:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{onClickAddButton:function(){return c(!n)},showAdd:n,title:"Task Tracker.."}),n&&Object(b.jsx)(m,{onAdd:T}),u.length>0?Object(b.jsx)(k,{toggleReminder:N,onDelete:A,tasks:u}):"No Task"]})}}),Object(b.jsx)(h.a,{path:"/about",component:y}),Object(b.jsx)(g,{})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.89801571.chunk.js.map