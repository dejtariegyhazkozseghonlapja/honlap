(this.webpackJsonpdejtariegyhazkozseghonlapja=this.webpackJsonpdejtariegyhazkozseghonlapja||[]).push([[0],{22:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(16),a=i.n(c),r=(i(22),i(9)),o=i(2),h=i(0);var j=function(){return Object(h.jsx)("p",{children:"Admin"})},d=i(4);var l=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=(t[0],t[1]);return Object(n.useEffect)((function(){fetch().then((function(e){return e.json()})).then((function(e){})).catch((function(e){return i(e)}))}),[]),Object(h.jsx)("p",{children:"Adomanyok"})};var p=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=(t[0],t[1]);return Object(n.useEffect)((function(){fetch().then((function(e){return e.json()})).then((function(e){})).catch((function(e){return i(e)}))}),[]),Object(h.jsx)("p",{children:"Esemenyek"})};i(24);var u=function(e){var t=Object(n.useState)(e.text),i=Object(d.a)(t,2),s=i[0],c=(i[1],Object(n.useState)(e.url)),a=Object(d.a)(c,2),r=a[0];return a[1],Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"headerButtonWrapper",children:Object(h.jsx)("p",{onClick:function(){window.location.href=r},children:s})})})};i(25);var b=function(e){var t=Object(n.useState)(e.text),i=Object(d.a)(t,2),s=i[0],c=(i[1],Object(n.useState)(e.url)),a=Object(d.a)(c,2),o=a[0];return a[1],Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{to:function(){return o},className:"LinkWrapper",children:Object(h.jsx)("p",{children:s})})})};i(31);var v=function(){return Object(h.jsxs)("div",{className:"headerWrapper",children:[Object(h.jsx)("div",{className:"headerTitleWrapper",children:Object(h.jsx)(r.b,{to:"/",className:"headerLinkWrapper",children:Object(h.jsx)("h1",{className:"headerTitle",children:" Dejt\xe1ri R\xf3mai Katolikus Egyh\xe1zk\xf6zs\xe9g "})})}),Object(h.jsxs)("div",{className:"buttonsWrapper",children:[Object(h.jsx)(u,{text:"Youtube csatorna",url:"https://www.youtube.com/channel/UCn66o0kJDpHK8Wfu72U4oKg/featured"}),Object(h.jsx)(b,{text:"Hirdet\xe9s",url:"/honlap/hirdetes"})]})]})};i(32);var O=function(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),s=(i[0],i[1]);return Object(n.useEffect)((function(){fetch().then((function(e){return e.json()})).then((function(e){})).catch((function(e){return s(e)}))}),[]),Object(h.jsxs)("div",{className:"mainWrapper",children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"hirdetesMain",children:Object(h.jsx)("img",{src:"https://docs.google.com/drawings/d/e/2PACX-1vSvLHs4B3Euxpe4M5kNL96EtE6wi44GVAkCsnQ7L47JfWoYEieZGsuegKJLZu_usJT8c-BEiE3kgCwW/pub?w=1866&h=801"})})]})};i(33);var x=function(){return Object(h.jsx)(O,{})};var f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=(t[0],t[1]);return Object(n.useEffect)((function(){fetch().then((function(e){return e.json()})).then((function(e){})).catch((function(e){return i(e)}))}),[]),Object(h.jsx)("p",{children:"Kapcsolat"})};var m=function(){return Object(h.jsx)("p",{children:"https://www.youtube.com/watch?v=8e_4KIj4jBs"})};i(34);var T=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=t[0],s=(t[1],Object(n.useState)([{type:"video",title:"Ben Award Dogehouse log",data:"https://www.youtube.com/embed/ZLH1_C-UNHw",description:"Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description Video description "},{type:"text",title:"Text",data:"This is a text based content",description:""},{type:"photo",title:"Photo of a raven",data:"https://blog.cwf-fcf.org/wp-content/uploads/2018/10/raven-flying.jpg",description:"This is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven This is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven This is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a ravenThis is a raven"}])),c=Object(d.a)(s,2),a=c[0];return c[1],""!==i?Object(h.jsx)("div",{className:"postFeedWrapper",children:Object(h.jsx)("div",{className:"postFeedErrorMessage",children:"Unable to acces webserver"+i})}):Object(h.jsx)("div",{className:"postsWrapper",children:a.map((function(e){if("text"===e.type)return Object(h.jsxs)("div",{className:"contentWrapper",children:[Object(h.jsx)("h1",{className:"contentTitle",children:e.title}),Object(h.jsx)("div",{className:"contentData",children:Object(h.jsx)("p",{children:e.data})}),""!==e.description&&Object(h.jsxs)("p",{className:"contentDescription",children:[" ",e.description," "]})]});if("video"===e.type){return Object(h.jsxs)("div",{className:"contentWrapper",children:[Object(h.jsx)("h1",{className:"contentTitle",children:e.title}),Object(h.jsxs)("div",{className:"contentData",children:[Object(h.jsx)("iframe",{width:"".concat(440,"px"),height:"".concat(247.5,"px"),src:e.data,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"}),""!==e.description&&Object(h.jsxs)("p",{className:"contentDescription",children:[" ",e.description," "]})]})]})}return"photo"===e.type?Object(h.jsxs)("div",{className:"contentWrapper",children:[Object(h.jsx)("h1",{className:"contentTitle",children:e.title}),Object(h.jsxs)("div",{className:"contentData",children:[Object(h.jsx)("img",{width:"100%",height:"100%",src:e.data}),""!==e.description&&Object(h.jsxs)("p",{className:"contentDescription",children:[" ",e.description," "]})]})]}):void 0}))})};var w=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/admin",children:Object(h.jsx)(j,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/honlap/adomanyok",children:Object(h.jsx)(l,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/honlap/esemenyek",children:Object(h.jsx)(p,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/honlap/header",children:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{path:"/honlap/hirdetes",children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{path:"/honlap/kapcsolat",children:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/honlap/messenger",children:Object(h.jsx)(m,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/honlap/postFeed",children:Object(h.jsx)(T,{})})]})})})})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,36)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.bc426f13.chunk.js.map