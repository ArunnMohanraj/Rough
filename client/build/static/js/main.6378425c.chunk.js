(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{82:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(8),r=n.n(o),a=n(12),i=n(28),j=n.n(i),s=n(44),l=n.n(s),u=n(2);var b=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:[Object(u.jsx)(l.a,{})," Rough Note"]})})},h=n(46),O=n.n(h),d=n(97),p=n(98);var x=function(e){return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsx)("p",{children:e.content}),Object(u.jsx)(p.a,{in:!0,children:Object(u.jsx)(d.a,{size:"small",onClick:function(){e.onDelete(e.title)},children:Object(u.jsx)(O.a,{})})})]})},f=n(9),v=n(35),m=n(47),g=n.n(m);var k=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)({title:"",content:""}),s=Object(a.a)(i,2),l=s[0],b=s[1];function h(e){var t=e.target,n=t.name,c=t.value;b((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n,c))}))}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"create-note",children:[o?Object(u.jsx)("input",{name:"title",onChange:h,value:l.title,placeholder:"Title"}):null,Object(u.jsx)("textarea",{name:"content",onClick:function(){r(!0)},onChange:h,value:l.content,placeholder:o?"Content":"Take a note...",rows:o?3:1}),Object(u.jsx)(p.a,{in:o,children:Object(u.jsx)(d.a,{onClick:function(t){e.onAdd(l),b({title:"",content:""}),t.preventDefault();var n={title:l.title,content:l.content};j.a.post("https://morning-gorge-54382.herokuapp.com/save",n)},children:Object(u.jsx)(g.a,{})})})]})})};var C=function(){Object(c.useEffect)((function(){fetch("https://morning-gorge-54382.herokuapp.com/notes").then((function(e){return e.json()})).then((function(e){return o(e)}))}));var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1];function r(e){var t={title:e};j.a.post("https://morning-gorge-54382.herokuapp.com/delete",t)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(k,{onAdd:function(e){}}),n.map((function(e,t){return Object(u.jsx)(x,{id:t,title:e.title,content:e.content,onDelete:r},t)}))]})};r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6378425c.chunk.js.map