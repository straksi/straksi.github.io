(this["webpackJsonpreact-netflix"]=this["webpackJsonpreact-netflix"]||[]).push([[0],{20:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(2),c=n(9),r=n(25),s="SET_AUTH",i="SET_LOGIN",o="SET_TOKEN",u="SET_ACCESS_TOKEN",l="SET_SESSION_ID",d=new r.a,h={login:null,password:null,token:null,loginData:null,tokenV4:null,accessToken:null,accountId:null,sessionId:null},j=function(e){return{type:i,data:e}},f=function(e){return{type:o,token:e}},b=function(e){return{type:l,sessionId:e}},g=function(e,t){return{type:u,token:e,id:t}},p=function(e){return function(e){d.get("access_token")&&d.get("account_id")?(e(g(d.get("access_token"),d.get("account_id"))),c.a.getSessionId(d.get("access_token")).then((function(t){e(b(t.data.session_id)),c.a.getLogin(t.data.session_id).then((function(t){e(j(t.data))}))}))):c.b.getToken().then((function(t){var n=new Date(Date.now()+6e5);d.set("request_token",t.request_token,{expires:n,path:"/"}),d.get("request_token")&&(window.location.replace("https://www.themoviedb.org/auth/access?request_token="+t.request_token),e(f(t.request_token)))}))}},m=function(e){return function(t){c.b.getAccessToken(e).then((function(e){t(g(e.access_token,e.account_id));var n=new Date(Date.now()+864e5);d.set("access_token",e.access_token,{expires:n,secure:!0,path:"/"}),d.set("account_id",e.account_id,{expires:n,secure:!0,path:"/"}),c.a.getSessionId(e.access_token).then((function(e){t(b(e.data.session_id)),c.a.getLogin(e.data.session_id).then((function(e){t(j(e.data))}))})),c.e.defaults.headers.Authorization!=="Bearer ".concat(d.get("access_token"))&&(c.e.defaults.headers.Authorization="Bearer ".concat(d.get("access_token")))}))}},O=function(e){return function(t){c.a.logOut(e).then((function(e){t(j(null)),t(f(null)),t(g(null,null)),c.e.defaults.headers.Authorization==="Bearer ".concat(d.get("access_token"))&&(c.e.defaults.headers.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmYwOGVkNDkwZDczMWNhMjE0Mzc2NWY2NDYyYjUyZCIsInN1YiI6IjYxMmUzYWU4OWJjZDBmMDA4ZDVlNzI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YpGEgp86kxho06MAoFZgbOlaFkB4-R1XcuhUEV7WHg")),d.get("access_token")&&d.remove("access_token",{path:"/"}),d.get("account_id")&&d.remove("account_id",{path:"/"})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{login:t.login,password:t.password,token:t.token});case i:return Object(a.a)(Object(a.a)({},e),{},{loginData:t.data});case o:return Object(a.a)(Object(a.a)({},e),{},{tokenV4:t.token});case u:return Object(a.a)(Object(a.a)({},e),{},{accessToken:t.token,accountId:t.id});case l:return Object(a.a)(Object(a.a)({},e),{},{sessionId:t.sessionId});default:return e}}},30:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return j}));var a=n(11),c=n(2),r=n(9),s="SEARCH_R",i="SEARCH_TEXT",o="CURRENT_PAGE",u={searchData:[],searchText:null,totalPages:0,page:1},l=function(e){return{type:i,text:e}},d=function(e,t){return{type:s,result:e,total:t}},h=function(e){return{type:o,page:e}},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(n){var s=r.g.getSearchResult(e,t,"movie"),i=r.g.getSearchResult(e,t,"tv");Promise.all([s,i]).then((function(e){var t=0;t=e[0].total_pages>e[1].total_pages?e[0].total_pages:e[1].total_pages;var r=e[0].results.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{type:"movie"})})),s=e[1].results.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{type:"tv"})})),i=[].concat(Object(a.a)(r),Object(a.a)(s));n(d(i,t))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{searchText:t.text});case s:return Object(c.a)(Object(c.a)({},e),{},{searchData:t.result,totalPages:t.total});case o:return Object(c.a)(Object(c.a)({},e),{},{page:t.page});default:return e}}},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u}));var a="https://image.tmdb.org/t/p/w500",c="https://image.tmdb.org/t/p/w300",r="https://image.tmdb.org/t/p/original",s="https://www.movienewz.com/img/films/poster-holder.jpg",i="https://secure.gravatar.com/avatar/",o=function(e){var t=e.substr(-2);"0"===t.substr(0,1)&&(t=t.substr(1,2));var n=e.substr(0,4),a=e.substr(5,2);return"".concat(t,".").concat(a,".").concat(n)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];document.querySelector("section")&&document.querySelector("section").scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}},39:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(2),c=n(9),r="SET_DATA",s="SET_TYPE",i={data:null,titleType:null},o=function(e){return{type:s,titleType:e}},u=function(e,t){return function(n){c.c.getDetails(e,t).then((function(e){n(function(e){return{type:r,data:e}}(e))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(a.a)(Object(a.a)({},e),{},{data:t.data});case s:return Object(a.a)(Object(a.a)({},e),{},{titleType:t.titleType});default:return e}}},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(2),c=n(9),r="SET_MOVIES_DATA",s="SET_TV_DATA",i="CURRENT_MOVIES_PAGE",o="CURRENT_TV_PAGE",u={moviesData:null,tvData:null,moviesPage:1,tvPage:1},l=function(e){return{type:i,page:e}},d=function(e){return{type:o,page:e}},h=function(e,t){return function(n){c.d.getDiscoverData(e,t).then((function(t){"movie"===e?n(function(e){return{type:r,data:e}}(t)):"tv"===e&&n(function(e){return{type:s,data:e}}(t))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(a.a)(Object(a.a)({},e),{},{moviesData:Object(a.a)(Object(a.a)({},t.data),{},{total_pages:t.data.total_pages>500?500:t.data.total_pages})});case s:return Object(a.a)(Object(a.a)({},e),{},{tvData:Object(a.a)(Object(a.a)({},t.data),{},{total_pages:t.data.total_pages>500?500:t.data.total_pages})});case i:return Object(a.a)(Object(a.a)({},e),{},{moviesPage:t.page});case o:return Object(a.a)(Object(a.a)({},e),{},{tvPage:t.page});default:return e}}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return m}));var a=n(8),c=n.n(a),r=n(16),s=n(11),i=n(2),o=n(9),u="SET_LISTS",l="SET_LIST_DETAILS",d="SET_ALL_LISTS_DETAILS",h="CLEAN_ALL_LISTS_DETAILS",j={lists:null,listPage:1,listDetails:null,allListsDeails:[]},f=function(){return{type:h}},b=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.f.getLists(e).then((function(e){var t;n((t=e.results,{type:u,lists:t}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(t){o.f.getListDetails(e).then((function(e){t(function(e){return{type:l,data:e}}(e))}))}},p=function(e){return function(t){o.f.getListDetails(e).then((function(e){t(function(e){return{type:d,data:e}}(e))}))}},m=function(e,t,n,a){return function(c,r){o.f.addToList(e,t,n).then((function(){c(f()),c(p(e)),c(b(a))}))}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{lists:t.lists});case l:return Object(i.a)(Object(i.a)({},e),{},{listDetails:t.data});case d:return Object(i.a)(Object(i.a)({},e),{},{allListsDeails:[].concat(Object(s.a)(e.allListsDeails),[Object(i.a)({},t.data)])});case h:return Object(i.a)(Object(i.a)({},e),{},{allListsDeails:[]});default:return e}}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(2),c="SET_INITIAL_STATE",r="SET_BODY_OVERFLOW",s={initialState:!1,bodyOverflow:!1},i=function(e){return{type:r,bodyOverflow:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{initialState:!0});case r:return Object(a.a)(Object(a.a)({},e),{},{bodyOverflow:t.bodyOverflow});default:return e}}},55:function(e,t,n){"use strict";n(0);var a=n(1);t.a=function(e){var t;return Object(a.jsx)("div",{className:"preloader-wrap",children:Object(a.jsx)("div",{className:"preloader ".concat(null!==(t=e.className)&&void 0!==t?t:""," ")})})}},9:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b}));var a,c=n(35),r=new(n(25).a),s=(a=r.get("access_token"),"8bf08ed490d731ca2143765f6462b52d"),i=c.create({baseURL:"https://api.themoviedb.org/3/"}),o=c.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:s}}),u=c.create({baseURL:"https://api.themoviedb.org/4/",withCredentials:!1,headers:{Accept:"application/json, text/javascript, */*; q=0.0","Content-Type":"application/json;charset=utf-8",Authorization:"Bearer "+(void 0===r.get("access_token")?"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmYwOGVkNDkwZDczMWNhMjE0Mzc2NWY2NDYyYjUyZCIsInN1YiI6IjYxMmUzYWU4OWJjZDBmMDA4ZDVlNzI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YpGEgp86kxho06MAoFZgbOlaFkB4-R1XcuhUEV7WHg":r.get("access_token"))}}),l={getToken:function(){return u.post("auth/request_token",{redirect_to:"http://localhost:3000/#/permission"}).then((function(e){return e.data}))},getAccessToken:function(e){return u.post("auth/access_token",{request_token:e}).then((function(e){return e.data}))}},d={getLists:function(e){return u.get("account/".concat(e,"/lists?page=1")).then((function(e){return e.data}))},getListDetails:function(e){return u.get("list/".concat(e,"?page=1&language=ru-RU")).then((function(e){return e.data}))},addToList:function(e,t,n){return u.post("list/".concat(e,"/items"),{items:[{media_type:t,media_id:n}]})}},h={getToken:function(){return i.get("authentication/token/new?api_key=".concat(s))},getAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"straksi",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Myn1995",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"203427acd07c4063d0b88303bc7b204274f6017b";return i.post("authentication/token/validate_with_login?api_key=".concat(s),{username:e,password:t,request_token:n}).then((function(e){return e.data}))},getSession:function(e){return i.post("authentication/session/new?api_key=".concat(s),{request_token:e}).then((function(e){return e}))},getLogin:function(e){return i.get("account?api_key=".concat(s,"&session_id=").concat(e)).then((function(e){return e}))},getSessionId:function(e){return i.post("authentication/session/convert/4?api_key=".concat(s),{access_token:e}).then((function(e){return e}))},logOut:function(e){return o.delete("authentication/session",{data:{session_id:e}})}},j={getSearchResult:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0;return i.get("search/".concat(n,"?api_key=").concat(s,"&language=ru-RU&query=").concat(e,"}&page=").concat(t,"&include_adult=false")).then((function(e){return e.data}))}},f={getDetails:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tv";return"tv"===t?i.get("".concat(t,"/").concat(e,"?api_key=").concat(s,"&language=ru-RU&append_to_response=content_ratings,credits,recommendations,videos,images&include_image_language=en%2Cnull")).then((function(e){return e.data})):"movie"===t?i.get("".concat(t,"/").concat(e,"?api_key=").concat(s,"&language=ru-RU&append_to_response=releases,credits,recommendations,videos,images&include_image_language=en%2Cnull")).then((function(e){return e.data})):void 0}},b={getDiscoverData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.get("discover/".concat(e,"?api_key=").concat(s,"&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(t,"&with_watch_monetization_types=flatrate")).then((function(e){return e.data}))}}},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(34),s=n.n(r),i=n(19),o=n(23),u=n(12),l=n(10),d=n(21),h=n.p+"static/media/svg-logo.5787551b.svg",j=n.p+"static/media/logo-m.55def236.png",f=n(30),b=n(20),g=n(2),p=n(59),m=n(33),O=n.p+"static/media/svg-search.966694b3.svg",v=n(1),_=function(e){var t=e.setSearchResults,n=e.setSearchText,a=(e.searchText,e.searchShow),c=e.searchShowHandler,r=Object(l.g)(),s=Object(p.a)(),i=s.register,o=s.handleSubmit;s.watch,s.formState.errors;return Object(v.jsxs)("div",{className:"nav-search",children:[Object(v.jsx)("div",{className:"nav-search__show",onClick:c,children:Object(v.jsx)("img",{src:O,alt:""})}),Object(v.jsxs)("form",{className:"form ".concat(a?"is-show":""),onSubmit:o((function(e){""!==e.search&&(t(e.search),n(e.search),r.push("/search?s=".concat(e.search)),Object(m.f)(!0))})),children:[Object(v.jsx)("div",{className:"nav-search__close",onClick:c,children:Object(v.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",focusable:"true",fill:"white",children:Object(v.jsx)("path",{d:"M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"})})}),Object(v.jsxs)("div",{className:"form__search",children:[Object(v.jsxs)("div",{className:"form__group",children:[Object(v.jsx)("input",Object(g.a)({className:"form__input",name:"search",id:"search",required:!0},i("search"))),Object(v.jsx)("label",{htmlFor:"search",className:"form__label",children:"Search"}),Object(v.jsx)("span",{className:"form__border"})]}),Object(v.jsx)("button",{type:"submit",children:Object(v.jsx)("img",{src:O,alt:""})})]})]})]})},x=Object(d.c)(Object(o.b)((function(e){return{search:e.search,login:e.auth.loginData}}),{setSearchResults:f.c,setSearchTextActionCreator:f.d,setAuth:b.c}),l.i)((function(e){return Object(v.jsx)(_,{setSearchResults:e.setSearchResults,setSearchText:e.setSearchTextActionCreator,searchText:e.search.searchText,searchShowHandler:e.searchShowHandler,searchShow:e.searchShow})})),y=Object(d.c)(Object(o.b)((function(e){return{accessToken:e.auth.accessToken,login:e.auth.login,loginData:e.auth.loginData,sessionId:e.auth.sessionId}}),{setAuth:b.c,setToken:b.d,setTokenV4Ac:b.e,logOut:b.b}))((function(e){e.accessToken;var t=e.loginData,n=e.setAuth,a=e.logOut,c=e.sessionId,r=e.menuActiveHandler,s=e.menuActive,o=e.searchShow,u=e.searchShowHandler;return Object(v.jsx)("nav",{className:"nav",children:Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"nav-w",children:[Object(v.jsx)("div",{className:"nav-burger ".concat(s?"is-close":""),onClick:r,children:Object(v.jsx)("span",{})}),Object(v.jsx)(x,{searchShow:o,searchShowHandler:u}),Object(v.jsxs)(i.b,{to:"/",className:"nav-logo",children:[Object(v.jsx)("img",{src:h,alt:""}),Object(v.jsx)("img",{className:"nav-logo__mobile",src:j,alt:""})]}),Object(v.jsxs)("div",{className:"nav-auth",children:[!t&&Object(v.jsx)("button",{className:"btn",onClick:n,children:"Sign In from tmdb"}),t&&Object(v.jsxs)("div",{className:"nav-login",children:[Object(v.jsx)("div",{className:"nav-login__avatar",children:Object(v.jsx)("div",{children:t.avatar.gravatar.hash&&Object(v.jsx)("img",{src:"".concat(m.b).concat(t.avatar.gravatar.hash,".png"),alt:""})})}),Object(v.jsxs)("div",{className:"nav-login__body",children:[Object(v.jsx)("div",{className:"nav-login__name",children:t.name||t.username}),Object(v.jsx)("div",{className:"btn",onClick:function(){return a(c)},children:"logOut"})]})]})]})]})})})})),N=c.a.forwardRef((function(e,t){return Object(v.jsxs)("ul",{className:"sidebar ".concat(e.menuActive?"is-active":""),ref:t,children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.c,{exact:!0,to:"/",children:"home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.c,{to:"/tv",children:"tv shows"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.c,{to:"/movies",children:"moveis"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"s",children:"latest"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.c,{to:"/lists",children:"my list"})})]})})),k=n(29),S=n(100),w=n(98),T=(n(60),n(61),[{_id:"01",genreName:"Action & Adventure",filmName:"The 100",headerImg:"".concat("/NetflixCopy","/img/100.jpg"),position:{top:"0px",bottom:"80px",class:"is-top"}},{_id:"02",genreName:"Anime",filmName:"Castlevania",headerImg:"".concat("/NetflixCopy","/img/Castlevania.jpg"),position:{top:"40px",bottom:"40px",class:"is-middle"}},{_id:"03",genreName:"Thriller",filmName:"BreakingBad",headerImg:"".concat("/NetflixCopy","/img/BreakingBad.jpg"),position:{top:"80px",bottom:"0px",class:"is-bottom"}},{_id:"04",genreName:"Sci-Fi & Fantasy",filmName:"Interstellar",headerImg:"".concat("/NetflixCopy","/img/interstellar.jpg"),position:{top:"40px",bottom:"40px",class:"is-middle"}},{_id:"05",genreName:"Dramas",filmName:"peaky",headerImg:"".concat("/NetflixCopy","/img/peaky.jpg"),position:{top:"0px",bottom:"80px",class:"is-top"}},{_id:"06",genreName:"Crime",filmName:"Casa de papel",headerImg:"".concat("/NetflixCopy","/img/castle.jpg"),position:{top:"80px",bottom:"0px",class:"is-bottom"}},{_id:"07",genreName:"horror",filmName:"marianne",headerImg:"".concat("/NetflixCopy","/img/marianne.jpg"),position:{top:"40px",bottom:"40px",class:"is-middle"}},{_id:"08",genreName:"History",filmName:"Sparta",headerImg:"".concat("/NetflixCopy","/img/sparta.jpg"),position:{top:"0px",bottom:"80px",class:"is-top"}}]),I=function(e){var t=e.menuActive,n="100%/".concat(T.length),c=("(100% - ".concat(20*(T.length-1),"px)/").concat(T.length),"100%/(".concat(T.length," - 2)"),Object(a.useState)({name:null,id:null})),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)({name:null,id:null}),l=Object(u.a)(o,2),d=l[0],h=l[1],j=Object(a.useState)(0),f=Object(u.a)(j,2),b=f[0],g=f[1],p=Object(a.useRef)([]);p.current=[];var m=Object(a.useState)([]),O=Object(u.a)(m,2);O[0],O[1];Object(a.useEffect)((function(){}),[]);var _=function(e){i({name:null,id:null})},x=Object(a.useRef)(),y=k.a.utils.selector(x),I=Object(a.useRef)(),A=k.a.utils.selector(I),D=Object(a.useState)(k.a.timeline({paused:!0})),E=Object(u.a)(D,1)[0];Object(a.useEffect)((function(){k.a.to(y(".genre-box"),{height:"100%",stagger:.15,yoyo:!0,duration:1,ease:"Power2.easeOut"}),k.a.from(y(".genre p"),{opacity:0,stagger:.25,yoyo:!0,duration:.8});var e=0;x.current.childNodes[2].childNodes.forEach((function(t){console.log(t.getBoundingClientRect().width),e+=t.getBoundingClientRect().width})),g(e),E.to(A("li"),{opacity:0,stagger:.1,duration:.6,ease:"Power2.easeOut"}).reverse()}),[]);return Object(v.jsx)("header",{className:"header",children:Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"header-w",children:[Object(v.jsx)(N,{menuActive:t,ref:I}),Object(v.jsx)("div",{className:"header-slider",children:Object(v.jsx)(S.a,{slidesPerView:"auto",navigation:!0,className:"genres",style:{marginRight:"-20px"},ref:x,children:T.map((function(e,t){return Object(v.jsxs)(w.a,{className:"genre "+e.position.class+(t===d.id?" is-active":"")+(t===s.id?" is-hover":""),style:{width:"calc(".concat(n,")")},"data-genre":e.genreName,onMouseEnter:function(e){return function(e,t){i({name:e.target.dataset.genre,id:t})}(e,t)},onMouseLeave:_,onClick:function(e){return function(e,t){s.id===t&&h({name:e.target.dataset.genre,id:t})}(e,t)},children:[Object(v.jsx)("div",{className:"genre-box",children:Object(v.jsx)("img",{src:e.headerImg,alt:"",style:{left:"calc(-".concat(t,"*").concat(b/T.length,"px )"),width:b}})}),Object(v.jsx)("p",{children:e.genreName})]},e._id)}))})})]})})})},A=function(){return Object(v.jsx)("footer",{className:"footer",id:"footer"})},D=(n(95),n(25)),E=n(55),C=new D.a,L=c.a.lazy((function(){return n.e(5).then(n.bind(null,103))})),R=c.a.lazy((function(){return n.e(7).then(n.bind(null,109))})),z=c.a.lazy((function(){return n.e(4).then(n.bind(null,104))})),U=c.a.lazy((function(){return n.e(6).then(n.bind(null,105))})),B=c.a.lazy((function(){return n.e(9).then(n.bind(null,106))})),J=c.a.lazy((function(){return n.e(8).then(n.bind(null,107))})),Y=c.a.lazy((function(){return n.e(3).then(n.bind(null,108))}));var M=Object(d.c)(Object(o.b)((function(e){return{accessToken:e.auth.accessToken}}),{setAuth:b.c}),l.i)((function(e){var t=Object(l.h)(),n=Object(a.useState)(!1),r=Object(u.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(!1),d=Object(u.a)(o,2),h=d[0],j=d[1];return Object(a.useEffect)((function(){C.get("access_token")&&e.setAuth()}),[]),Object(a.useEffect)((function(){"/"===e.location.pathname&&(document.title="Netflix")}),[e.match]),Object(a.useEffect)((function(){document.querySelector("body").style.overflow=s?"hidden":""}),[s]),Object(a.useEffect)((function(){i(!1),j(!1)}),[t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{menuActiveHandler:function(){i((function(e){return!e}))},menuActive:s,searchShow:h,searchShowHandler:function(){j((function(e){return!e}))}}),Object(v.jsx)(I,{menuActive:s}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(c.a.Suspense,{fallback:Object(v.jsx)(E.a,{}),children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{path:"/search",render:function(){return Object(v.jsx)(L,{})}}),Object(v.jsx)(l.b,{exact:!0,path:"/title/:titleType?/:titleId?",render:function(){return Object(v.jsx)(R,{})}}),Object(v.jsx)(l.b,{path:"/movies",exact:!0,render:function(){return Object(v.jsx)(z,{title:"\u0424\u0438\u043b\u044c\u043c\u044b"})}}),Object(v.jsx)(l.b,{path:"/tv",exact:!0,render:function(){return Object(v.jsx)(U,{})}}),Object(v.jsx)(l.b,{path:"/lists",exact:!0,render:function(){return Object(v.jsx)(J,{})}}),Object(v.jsx)(l.b,{path:"/lists/:listId?",exact:!0,render:function(){return Object(v.jsx)(Y,{})}}),Object(v.jsx)(l.b,{path:"/permission",render:function(){return Object(v.jsx)(B,{})}})]})})}),Object(v.jsx)(A,{})]})})),V=n(58),W=n(43),q=n(39),P=n(41),Z=n(42),H=Object(d.b)({search:f.a,auth:b.a,details:q.a,discover:P.a,lists:Z.c,app:W.a}),G=Object(d.d)(H,Object(d.a)(V.a));s.a.render(Object(v.jsx)(i.a,{basename:"/NetflixCopy",children:Object(v.jsx)(o.a,{store:G,children:Object(v.jsx)(M,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7fe53ec0.chunk.js.map