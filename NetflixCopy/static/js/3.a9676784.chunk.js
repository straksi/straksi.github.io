(this["webpackJsonpreact-netflix"]=this["webpackJsonpreact-netflix"]||[]).push([[3],{102:function(e,t,s){"use strict";s(0);var c=s(17),a=s(29),i=s(1);t.a=function(e){var t=e.src,s=e.title,n=e.titleId,r=e.type,l=(e.setType,e.score),d=e.clickHandler,o=e.date;return Object(i.jsxs)(c.b,{to:"/title/".concat(r,"/").concat(n),className:"card",onClick:function(){d&&d(),Object(a.f)(!1)},children:[Object(i.jsx)("div",{className:"card__img",children:Object(i.jsx)("img",{src:t?a.e+t:a.g,alt:""})}),Object(i.jsx)("div",{className:"card__name",children:s}),Object(i.jsx)("div",{className:"card__score",children:l}),o&&Object(i.jsx)("div",{className:"card__date",children:o.substr(0,4)})]})}},103:function(e,t,s){"use strict";var c=s(29),a=s(1);t.a=function(e){for(var t=function(t){e.setCurrentPage(t),e.setSearchResults&&e.setSearchResults(e.searchText,t),e.setDiscoverData&&e.setDiscoverData(e.discover,t,e.activeGenres),Object(c.f)(!0)},s=[],i=Math.max(e.currentPage-2,2);i<=Math.max(1,Math.min(e.currentPage+2,e.pagesCount-1));i++)s.push(i);var n=function(){return e.currentPage-1>0?e.currentPage-1:0},r=function(){return e.currentPage+1<=e.pagesCount?e.currentPage+1:e.pagesCount+1};return e.pagesCount>1&&Object(a.jsxs)("ul",{className:"pagination",children:[Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:n()<1?"arrow is-disabled":"arrow",onClick:function(){return t(n())},children:""})}),Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:1===e.currentPage?"is-active":"",onClick:function(){return t(1)},children:1})}),s.map((function(s){return Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:e.currentPage===s?"is-active":"",onClick:function(){return t(s)},children:s})},s)})),Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:e.currentPage===e.pagesCount?"is-active":"",onClick:function(){return t(e.pagesCount)},children:e.pagesCount})}),Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:r()<=e.pagesCount?"arrow":"arrow is-disabled",onClick:function(){return t(r())},children:""})})]})}},109:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(21),i=s(19),n=s(102),r=s(29),l=s(36),d=(s(34),s(37)),o=(s(103),s(5)),j=s(17),m=s(1);t.default=Object(i.c)(Object(a.b)((function(e){return{listDetails:e.lists.listDetails,currentPage:e.lists.listPage,lists:e.lists.lists,itemsToRemove:e.lists.itemsToRemove,removeItemsMode:e.lists.removeItemsMode,accessToken:e.auth.accessToken}}),{setDiscoverData:l.d,setListDetails:d.i,setItemsToRemoveAc:d.h,deleteItemsToRemoveAc:d.e,setRemoveItemsModeAc:d.k,cleanItemsToRemoveAc:d.c,removeFromList:d.f}))((function(e){var t=e.accessToken,s=e.listDetails,a=e.setListDetails,i=e.setItemsToRemoveAc,l=e.itemsToRemove,d=e.deleteItemsToRemoveAc,u=e.cleanItemsToRemoveAc,b=e.setRemoveItemsModeAc,h=e.removeItemsMode,v=e.removeFromList,O=Object(o.h)();return Object(c.useEffect)((function(){a(O.listId)}),[]),Object(c.useEffect)((function(){s&&(document.title=s.name)}),[s]),t?Object(m.jsx)(m.Fragment,{children:s&&Object(m.jsx)("section",{className:"list-section",style:s.backdrop_path&&{backgroundImage:"url(".concat(r.d).concat(s.backdrop_path,")")},children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)("h2",{className:"title",children:[s.name,":"]}),s.results.length>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"list-controls",children:h?Object(m.jsxs)("div",{children:[" ",Object(m.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043b\u044c\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c, \u043f\u043e\u0442\u043e\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})," ",Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){v(O.listId,l)},className:"btn",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})," ",Object(m.jsx)("button",{className:"btn",onClick:function(){b(!1),u()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]}):Object(m.jsx)("button",{className:"btn",onClick:function(){return b(!0)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"})}),Object(m.jsxs)("div",{className:"main-grid",children:[!h&&s&&s.results.map((function(e){return Object(m.jsx)(n.a,{titleId:e.id,type:e.media_type,src:e.poster_path,title:e.title||e.name,score:e.vote_average,date:e.release_date||e.first_air_date},e.id)})),h&&s&&s.results.map((function(e){return Object(m.jsxs)("div",{onClick:function(){return t=e.media_type,s=e.id,void(l.items.some((function(e){return e.media_id===s&&e.media_type===t}))?d(t,s):i(t,s));var t,s},className:"card card_remove ".concat(l.items.some((function(t){return t.media_id===e.id&&t.media_type===e.media_type}))?"is-checked":""),children:[Object(m.jsx)("div",{className:"card__img",children:Object(m.jsx)("img",{src:e.poster_path?r.e+e.poster_path:r.g,alt:""})}),Object(m.jsx)("div",{className:"card__name",children:e.title||e.name}),Object(m.jsxs)("div",{className:"card-controls",children:[Object(m.jsx)("div",{className:"card-controls__add",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(m.jsx)("div",{className:"card-controls__added"})]}),e.release_date&&Object(m.jsx)("div",{className:"card__date",children:e.release_date.substr(0,4)}),e.first_air_date&&Object(m.jsx)("div",{className:"card__date",children:e.first_air_date.substr(0,4)})]},e.id)}))]})]}):Object(m.jsxs)("div",{className:"list-empty",children:["\u042d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442",Object(m.jsx)("div",{children:Object(m.jsx)(j.b,{className:"btn",to:"/lists",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0430\u043c"})})]})]})})}):Object(m.jsx)(o.d,{children:Object(m.jsx)(o.b,{path:"*",element:Object(m.jsx)(o.a,{to:"/",replace:!0})})})}))}}]);
//# sourceMappingURL=3.a9676784.chunk.js.map