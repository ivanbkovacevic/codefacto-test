(this["webpackJsonpcodefacto-test"]=this["webpackJsonpcodefacto-test"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(7),r=a.n(s),c=(a(12),a(3)),d=(a(13),a(14),a(5)),p=[{id:0,imageUrl:a.p+"static/media/braccio-de-fero.3c849f01.jpeg",name:"Braccio di Ferro",types:"pizza",sizes:[26,30,40],price:15,category:0,rating:4,qnt:0},{id:1,imageUrl:a.p+"static/media/napoletana.f52f76ec.jpg",name:"Napoletana",types:"pizza",sizes:[26,40],price:20,category:1,rating:6,qnt:0},{id:2,imageUrl:a.p+"static/media/carbonara.4d6b368d.jpg",name:"Carbonara",types:"pizza",sizes:[26,40],price:30,category:1,rating:4,qnt:0},{id:3,imageUrl:a.p+"static/media/americana.ef6fb9c7.jpg",name:"Americana",types:"pizza",sizes:[26,30,40],price:25,category:2,rating:2,qnt:0},{id:4,imageUrl:a.p+"static/media/quattro-stagioni.8465904c.jpg",name:"Quattro Stagioni",types:"pizza",sizes:[26,30,40],price:5,category:3,rating:8,qnt:0},{id:5,imageUrl:a.p+"static/media/red-peperoni.ef924013.jpg",name:"Red peperoni",types:"pizza",sizes:[30,40],price:15,category:2,rating:2,qnt:0},{id:6,imageUrl:a.p+"static/media/peperoni.72e681e2.jpg",name:"Peperoni",types:"pizza",sizes:[26,30,40],price:20,category:1,rating:9,qnt:0},{id:7,imageUrl:a.p+"static/media/margherita.da6fffa6.jpg",name:"Margherita",types:"pizza",sizes:[26,30,40],price:10,category:4,rating:10,qnt:0},{id:8,imageUrl:a.p+"static/media/vegeteriana.352870c8.jpg",name:"Vegeteriana",types:"pizza",sizes:[26,30,40],price:17,category:5,rating:7,qnt:0},{id:9,imageUrl:a.p+"static/media/barbecue.634767a8.jpeg",name:"Barbecue",types:"pizza",sizes:[26,30,40],price:22,category:5,rating:7,qnt:0},{id:10,imageUrl:a.p+"static/media/pepsi.3a2a22d4.jpg",name:"Pepsi",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:11,imageUrl:a.p+"static/media/schwepps.03c2fe87.jpg",name:"Schwepps",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:12,imageUrl:a.p+"static/media/fanta.5119bb9a.jpg",name:"Fanta",types:"drinks",sizes:[26,30,40],price:9,category:4,rating:10,qnt:0},{id:13,imageUrl:a.p+"static/media/7up.22d6aa03.jpg",name:"7Up",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:14,imageUrl:a.p+"static/media/cockta.6a6095a7.jpg",name:"Cockta",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:15,imageUrl:a.p+"static/media/miranda.0ddd496b.jpg",name:"Miranda",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:16,imageUrl:a.p+"static/media/sprite.e33a3886.jpg",name:"Sprite",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0}],o=a.p+"static/media/Star.5beccdfe.png",g=a(0),m=function(){var e=Object(i.useState)({disabled:!1,cursor:"pointer"}),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)([{id:0,value:1,isMarked:!1},{id:1,value:2,isMarked:!1},{id:2,value:3,isMarked:!1},{id:3,value:4,isMarked:!1},{id:4,value:5,isMarked:!1}]),r=Object(c.a)(s,2),p=r[0],m=r[1],l=Object(d.a)(p),j=l.map((function(e,t){return Object(g.jsx)("button",{title:"star-btn",className:"my-btn",disabled:a.disabled,style:{cursor:a.cursor},onClick:function(){return e=t,l.forEach((function(t){t.id<=e&&(t.isMarked=!0)})),l[e].isMarked=!0,m(l),void n({disabled:!0,cursor:"not-allowed"});var e},children:Object(g.jsx)("img",{className:e.isMarked?"single-star__rated":"single-star__not-rated",src:o,alt:"img"})},t)}));return Object(g.jsx)("div",{className:"stars-container",children:j})},l=function(e){var t=Object(d.a)(p),a=[];return t.map((function(t,i){return e.itemstoshowstart<=i&&i<=e.itemstoshowstart+4&&a.push(Object(g.jsxs)("div",{className:"item-container",children:[Object(g.jsxs)("div",{className:"item-container__header",children:[Object(g.jsx)("p",{children:t.id+1})," ",Object(g.jsx)("h2",{children:t.name})]}),Object(g.jsx)("img",{src:t.imageUrl,alt:t.id}),Object(g.jsx)(m,{})]},t.id)),a})),Object(g.jsx)("div",{"data-testid":"items-list",children:Object(g.jsxs)("div",{children:["  ",a]})})},j=function(e){return Object(g.jsxs)("div",{title:"pagination",className:"pagination-container",children:[Object(g.jsx)("button",{title:"paginationBtns",className:"my-btn pgn-btn",disabled:e.itemstoshowstart<5,onClick:e.handlepagination("previus"),children:"PREVIUS"}),Object(g.jsx)("button",{title:"paginationBtns",className:"my-btn pgn-btn",disabled:e.itemstoshowstart>e.itemslength-6,onClick:e.handlepagination("next"),children:"NEXT"})]})},b=function(){return Object(g.jsx)("div",{"data-testid":"navbar",className:"navbar-head",children:Object(g.jsxs)("h1",{children:["CODEFACTO TEST ",Object(g.jsx)("span",{class:"icon-embed"})]})})};var u=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),a=t[0],n=t[1],s=p.length;return Object(g.jsxs)("div",{"data-testid":"app",className:"app-container",children:[Object(g.jsx)(b,{}),Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(l,{itemstoshowstart:a}),Object(g.jsx)(j,{itemstoshowstart:a,handlepagination:function(e){return function(){"next"===e&&a<=10?n(a+5):"previus"===e&&a>=4&&n(a-5)}},itemslength:s})]})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(u,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.6db8b88b.chunk.js.map