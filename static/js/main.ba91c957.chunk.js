(this["webpackJsonpcodefacto-test"]=this["webpackJsonpcodefacto-test"]||[]).push([[0],{15:function(e,i,t){},16:function(e,i,t){},17:function(e,i,t){},58:function(e,i){},59:function(e,i,t){"use strict";t.r(i);var a=t(2),n=t.n(a),c=t(10),s=t.n(c),r=(t(15),t(3)),d=(t(16),t(17),t(4)),o=[{id:0,imageUrl:t.p+"static/media/braccio-de-fero.3c849f01.jpeg",name:"Braccio di Ferro",types:"pizza",sizes:[26,30,40],price:15,category:0,rating:4,qnt:0},{id:1,imageUrl:t.p+"static/media/napoletana.f52f76ec.jpg",name:"Napoletana",types:"pizza",sizes:[26,40],price:20,category:1,rating:6,qnt:0},{id:2,imageUrl:t.p+"static/media/carbonara.4d6b368d.jpg",name:"Carbonara",types:"pizza",sizes:[26,40],price:30,category:1,rating:4,qnt:0},{id:3,imageUrl:t.p+"static/media/americana.ef6fb9c7.jpg",name:"Americana",types:"pizza",sizes:[26,30,40],price:25,category:2,rating:2,qnt:0},{id:4,imageUrl:t.p+"static/media/quattro-stagioni.8465904c.jpg",name:"Quattro Stagioni",types:"pizza",sizes:[26,30,40],price:5,category:3,rating:8,qnt:0},{id:5,imageUrl:t.p+"static/media/red-peperoni.ef924013.jpg",name:"Red peperoni",types:"pizza",sizes:[30,40],price:15,category:2,rating:2,qnt:0},{id:6,imageUrl:t.p+"static/media/peperoni.72e681e2.jpg",name:"Peperoni",types:"pizza",sizes:[26,30,40],price:20,category:1,rating:9,qnt:0},{id:7,imageUrl:t.p+"static/media/margherita.da6fffa6.jpg",name:"Margherita",types:"pizza",sizes:[26,30,40],price:10,category:4,rating:10,qnt:0},{id:8,imageUrl:t.p+"static/media/vegeteriana.352870c8.jpg",name:"Vegeteriana",types:"pizza",sizes:[26,30,40],price:17,category:5,rating:7,qnt:0},{id:9,imageUrl:t.p+"static/media/barbecue.634767a8.jpeg",name:"Barbecue",types:"pizza",sizes:[26,30,40],price:22,category:5,rating:7,qnt:0},{id:10,imageUrl:t.p+"static/media/pepsi.3a2a22d4.jpg",name:"Pepsi",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:11,imageUrl:t.p+"static/media/schwepps.03c2fe87.jpg",name:"Schwepps",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:12,imageUrl:t.p+"static/media/fanta.5119bb9a.jpg",name:"Fanta",types:"drinks",sizes:[26,30,40],price:9,category:4,rating:10,qnt:0},{id:13,imageUrl:t.p+"static/media/7up.22d6aa03.jpg",name:"7Up",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:14,imageUrl:t.p+"static/media/cockta.6a6095a7.jpg",name:"Cockta",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:15,imageUrl:t.p+"static/media/miranda.0ddd496b.jpg",name:"Miranda",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0},{id:16,imageUrl:t.p+"static/media/sprite.e33a3886.jpg",name:"Sprite",types:"drinks",sizes:[26,30,40],price:8,category:4,rating:10,qnt:0}],l=t.p+"static/media/Star.5beccdfe.png",p=t(0),m=function(){var e=Object(a.useState)({disabled:!1,cursor:"pointer"}),i=Object(r.a)(e,2),t=i[0],n=i[1],c=Object(a.useState)([{id:0,value:1,isMarked:!1},{id:1,value:2,isMarked:!1},{id:2,value:3,isMarked:!1},{id:3,value:4,isMarked:!1},{id:4,value:5,isMarked:!1}]),s=Object(r.a)(c,2),o=s[0],m=s[1],j=Object(d.a)(o),b=j.map((function(e,i){return Object(p.jsx)("button",{title:"star-btn",className:"my-btn",disabled:t.disabled,style:{cursor:t.cursor},onClick:function(){return e=i,j.forEach((function(i){i.id<=e&&(i.isMarked=!0)})),j[e].isMarked=!0,m(j),void n({disabled:!0,cursor:"not-allowed"});var e},children:Object(p.jsx)("img",{className:e.isMarked?"single-star__rated":"single-star__not-rated",src:l,alt:"img"})},i)}));return Object(p.jsx)("div",{className:"stars-container",children:b})},j=function(e){var i=Object(d.a)(o),t=[];return i.map((function(i,a){return e.itemstoshowstart<=a&&a<=e.itemstoshowstart+4&&t.push(Object(p.jsxs)("div",{className:"item-container",children:[Object(p.jsxs)("div",{className:"item-container__header",children:[Object(p.jsx)("p",{children:i.id+1})," ",Object(p.jsx)("h2",{children:i.name})]}),Object(p.jsx)("img",{src:i.imageUrl,alt:i.id}),Object(p.jsx)(m,{})]},i.id)),t})),Object(p.jsx)("div",{"data-testid":"items-list",children:Object(p.jsxs)("div",{children:["  ",t]})})},b=function(e){return Object(p.jsxs)("div",{title:"pagination",className:"pagination-container",children:[Object(p.jsx)("button",{title:"paginationBtns",className:"my-btn pgn-btn",disabled:e.itemstoshowstart<5,onClick:e.handlepagination("previus"),children:"PREVIUS"}),Object(p.jsx)("button",{title:"paginationBtns",className:"my-btn pgn-btn",disabled:e.itemstoshowstart>e.itemslength-6,onClick:e.handlepagination("next"),children:"NEXT"})]})},g=function(){return Object(p.jsx)("div",{"data-testid":"navbar",className:"navbar-head",children:Object(p.jsxs)("h1",{children:["CODEFACTO TEST ",Object(p.jsx)("span",{class:"icon-embed"})]})})},u=t(5),h=t.n(u),v=function(){var e=Object(a.useState)(0),i=Object(r.a)(e,2),t=i[0],n=i[1],c=Object(a.useState)([{id:"0",clicked:!1,solid:85},{id:"1",clicked:!1,solid:75},{id:"2",clicked:!1,solid:55},{id:"3",clicked:!1,solid:35},{id:"4",clicked:!1,solid:15}]),s=Object(r.a)(c,2),o=s[0],l=s[1],m=function(e){var i=e.target.id,t=Object(d.a)(o);console.log(t.className),!1===t[i].clicked&&(t[i].clicked=!0,n(t[i].solid)),t.forEach((function(e){e.id!==i&&(e.clicked=!1)})),l(t),console.log(e.target.style)};return Object(p.jsxs)("div",{className:"sticky-container",children:[Object(p.jsxs)("div",{className:"borders-container",children:[Object(p.jsx)("div",{className:"solid",style:{right:"".concat(t,"%")}}),Object(p.jsx)("div",{className:"dashed"})]}),Object(p.jsxs)("div",{className:"icons-container",children:[Object(p.jsx)("button",{className:h()("btn-not-clicked",{"btn-clicked":o[0].clicked}),id:"0",onClick:function(e){return m(e)},children:"1"}),Object(p.jsx)("button",{className:h()("btn-not-clicked",{"btn-clicked":o[1].clicked}),id:"1",onClick:function(e){return m(e)},children:"2"}),Object(p.jsx)("button",{className:h()("btn-not-clicked",{"btn-clicked":o[2].clicked}),id:"2",onClick:function(e){return m(e)},children:"3"}),Object(p.jsx)("button",{className:h()("btn-not-clicked",{"btn-clicked":o[3].clicked}),id:"3",onClick:function(e){return m(e)},children:"4"}),Object(p.jsx)("button",{className:h()("btn-not-clicked",{"btn-clicked":o[4].clicked}),id:"4",onClick:function(e){return m(e)},children:"5"})]})]})},O=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"radial-container",children:Object(p.jsx)("p",{children:"radial gradijen"})}),Object(p.jsx)("div",{className:"multiple-gradient",children:"o"}),"main branch main branch main branch main branch main branch main branch",Object(p.jsx)("div",{className:"multiple-gradient"}),Object(p.jsx)("p",{children:"grana1"}),Object(p.jsx)("p",{children:"grana1 1commit"}),Object(p.jsx)("p",{children:"ggiorana1 2commit"}),"mani  dva dva dva mani  dva dva dva mani  dva dva dva mani  dva dva dva mani  dva dva dva mani  dva dva dva mani  dva dva dva mani  dva dva dva mani mani mani mani mani mani"]})},f=(t(19),function(){return Object(a.useEffect)((function(){var e=function(){if("portrait-primary"===window.screen.orientation.type){console.log("portrait-primary");window.screen.orientation.lock("portrait-primary")}};return window.screen.orientation.addEventListener("change",e),function(){window.removeEventListener("orientationchange",e)}}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"MailCHIMP"})})});var k=function(){var e=Object(a.useState)(0),i=Object(r.a)(e,2),t=i[0],n=i[1],c=o.length;return Object(p.jsxs)("div",{"data-testid":"app",className:"app-container",children:[Object(p.jsx)(g,{}),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(j,{itemstoshowstart:t}),Object(p.jsx)(b,{itemstoshowstart:t,handlepagination:function(e){return function(){"next"===e&&t<=10?n(t+5):"previus"===e&&t>=4&&n(t-5)}},itemslength:c}),Object(p.jsx)(v,{}),Object(p.jsx)(O,{}),Object(p.jsx)(f,{})]})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,c=i.getLCP,s=i.getTTFB;t(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),x()}},[[59,1,2]]]);
//# sourceMappingURL=main.ba91c957.chunk.js.map