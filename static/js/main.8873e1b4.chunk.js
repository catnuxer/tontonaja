(this.webpackJsonptontonaja=this.webpackJsonptontonaja||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"k",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"m",(function(){return p})),n.d(t,"j",(function(){return l})),n.d(t,"l",(function(){return v}));n(16);var r="Movies/movie_loaded",c="Movies/set_loading_loaded",a="Movies/set_banner_movie",o="Movies/set_suggestion_movie",s="Movies/set_latest_movie",u="Movies/set_detail_movie",i="Movies/set_movie_suggestion_genre",d=function(){return{type:r}},b=function(e){return{type:c,loading:e}},f=function(e){return{type:a,response:e}},p=function(e){return{type:o,response:e}},l=function(e){return{type:s,response:e}},v=function(e){return{type:i,genre:e}}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r="https://api.themoviedb.org",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWEyMDk4YjUwMjdjY2UzNmRlMTg5OTA2MGUwODllZiIsInN1YiI6IjVlN2JkMWIwYWIxYmM3NTg3NGMxMmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3XSdx8E5BgQmF2sHpB_q4LVW7fibcjdPFyN6KOGByws",a="".concat("/tontonaja")},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return u}));var r="Genres/set_movies",c="Genres/set_tv",a="Genres/genre_loaded",o=function(){return{type:a}},s=function(e){return{type:r,response:e}},u=function(e){return{type:c,response:e}}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o}));var r="Countries/country_loaded",c="Countries/set_country",a=function(){return{type:r}},o=function(e){return{type:c,response:e}}},44:function(e,t,n){},45:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),o=n.n(a),s=n(43),u=n(18),i=n(26),d=n(22),b=n(15),f=n(13),p=n(38),l=n(9),v=n(21),j={country:[],menuHeader:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:var n=[{code:["US","DE","IE","DK","ZA","AT","AR","IL","TW"]},{code:["GB","JP","ES","FI","KR","SE","NO","HU","RO"]},{code:["CA","AU","HK","IN","NZ","MX","ID","BR","PL"]},{code:["FR","IT","CN","BE","NL","RU","CH","FI","TH"]}],r=[];return n.map((function(e){var n=[];e.code.map((function(e){var r=t.response.find((function(t){return t.iso_3166_1===e})),c="United States of America"===r.english_name?"United State":r.english_name;n.push({code:r.iso_3166_1,name:c})})),r.push(n)})),Object(l.a)({},e,{country:t.response,menuHeader:r});default:return e}},m=n(16),O={movie:[],tv:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.b:return Object(l.a)({},e,{movie:t.response});case m.c:return Object(l.a)({},e,{tv:t.response});default:return e}},x=n(17),y=(n(54),n(10)),w={movie_loaded:!0,banner:[],suggestion:[],latest:[],detail:{}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.e:return Object(l.a)({},e,{movie_loaded:t.loading});case y.b:return Object(l.a)({},e,{banner:[].concat(Object(x.a)(t.response),Object(x.a)(e.suggestion))});case y.g:return Object(l.a)({},e,{suggestion:[].concat(Object(x.a)(t.response),Object(x.a)(e.suggestion))});case y.d:return Object(l.a)({},e,{latest:[].concat(Object(x.a)(t.response),Object(x.a)(e.suggestion))});case y.c:return Object(l.a)({},e,{detail:Object(l.a)({},t.movie)});case y.f:for(var n=e.suggestion,r=0;r<n.length;r++){var c=n[r],a=n[r]&&n[r].genre_ids&&n[r].genre_ids.length>0;if(a)if(1==n[r].genre_ids.length)n[r].genre_ids[0]===t.genre.id&&(n.splice(r,1),n.unshift(c));else if(n[r].genre_ids.length>1)for(var o=0;o<n[r].genre_ids.length;o++)n[r].genre_ids[o]===t.genre.id&&(n.splice(r,1),n.unshift(c))}return Object(l.a)({},e,{suggestion:Object(x.a)(n)});default:return e}},k=n(42),E=n(5),I=n.n(E),M=n(3),Y=n(34),N=n(11),z=function(){var e=Object(Y.a)(I.a.mark((function e(t){var n,r,c=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch("".concat(N.a).concat(t),{method:"GET",headers:Object(l.a)({},n,{Authorization:"Bearer ".concat(N.b),"content-type":"application/json"})});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=I.a.mark(B),G=I.a.mark(C),U=I.a.mark(W);function B(){var e,t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"/3/configuration/countries",n.next=4,Object(M.b)(z,"/3/configuration/countries");case 4:if(200!=(e=n.sent).status){n.next=11;break}return n.next=8,Object(M.b)([e,e.json]);case 8:return t=n.sent,n.next=11,Object(M.d)(Object(v.d)(t));case 11:n.next=16;break;case 13:throw n.prev=13,n.t0=n.catch(0),n.t0;case 16:case"end":return n.stop()}}),J,null,[[0,13]])}function C(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(v.a,B);case 2:case"end":return e.stop()}}),G)}function W(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)(C);case 2:case"end":return e.stop()}}),U)}var A=n(27),S=I.a.mark(H),T=I.a.mark(R),D=I.a.mark(F);function H(){var e,t,n,r,c,a;return I.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,"/3/genre/movie/list","/3/genre/tv/list",o.next=5,Object(M.a)([Object(M.b)(z,"/3/genre/movie/list"),Object(M.b)(z,"/3/genre/tv/list")]);case 5:if(e=o.sent,t=Object(A.a)(e,2),n=t[0],r=t[1],200!==n.status){o.next=15;break}return o.next=12,Object(M.b)([n,n.json]);case 12:return c=o.sent,o.next=15,Object(M.d)(Object(m.e)(c.genres));case 15:if(200!==r.status){o.next=21;break}return o.next=18,Object(M.b)([r,r.json]);case 18:return a=o.sent,o.next=21,Object(M.d)(Object(m.f)(a.genres));case 21:o.next=26;break;case 23:throw o.prev=23,o.t0=o.catch(0),o.t0;case 26:case"end":return o.stop()}}),S,null,[[0,23]])}function R(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(m.a,H);case 2:case"end":return e.stop()}}),T)}function F(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)(R);case 2:case"end":return e.stop()}}),D)}var L=n(41),Z=n(35),K=n.n(Z),P=I.a.mark(X),Q=I.a.mark(q),V=I.a.mark($);function X(){var e,t,n,r,c,a,o,s,u,i,d,b,f;return I.a.wrap((function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,e=0,t=K()().format("YYYY-MM-DD"),n=K()().format("YYYY"),p.next=6,Object(M.d)(Object(y.k)(!0));case 6:return"/3/discover/movie?",r="".concat("/3/discover/movie?","page=").concat(e,"&sort_by=popularity.desc&release_date.gte=").concat(t,"&year=").concat(n),c="".concat("/3/discover/movie?","page=").concat(e,"&sort_by=vote_average.desc&release_date.gte=").concat(t,"&year=").concat(n),a="".concat("/3/discover/movie?","page=").concat(e,"&sort_by=vote_average.desc&release_date.gte=").concat(t,"&year=").concat(n),p.next=13,Object(M.a)([Object(M.b)(z,r),Object(M.b)(z,c),Object(M.b)(z,a)]);case 13:if(o=p.sent,s=Object(A.a)(o,3),u=s[0],i=s[1],d=s[2],200!==u.status){p.next=20;break}return p.delegateYield(I.a.mark((function e(){var t,n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.b)([u,u.json]);case 2:t=e.sent,n=0,r=[],c=0;case 6:if(!(c<n)){e.next=13;break}if(!(n>6)){e.next=9;break}return e.abrupt("break",13);case 9:t.map((function(e,t){e&&e.backdrop_path&&(r.push(e),Object(L.a)("max"),n++)}));case 10:c++,e.next=6;break;case 13:return e.next=15,Object(M.d)(Object(y.i)(r));case 15:case"end":return e.stop()}}),e)}))(),"t0",20);case 20:if(200!==i.status){p.next=26;break}return p.next=23,Object(M.b)([i,i.json]);case 23:return b=p.sent,p.next=26,Object(M.d)(Object(y.m)(b.results));case 26:if(200!==d.status){p.next=34;break}return p.next=29,Object(M.b)([d,d.json]);case 29:return f=p.sent,p.next=32,Object(M.d)(Object(y.j)(f.results));case 32:return p.next=34,Object(M.d)(Object(y.k)(!1));case 34:if(!(++e>5)){p.next=37;break}return p.abrupt("break",39);case 37:p.next=6;break;case 39:p.next=44;break;case 41:throw p.prev=41,p.t1=p.catch(0),p.t1;case 44:case"end":return p.stop()}}),P,null,[[0,41]])}function q(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(y.a,X);case 2:case"end":return e.stop()}}),Q)}function $(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)(q);case 2:case"end":return e.stop()}}),V)}var ee=I.a.mark(te);function te(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.c)(W),Object(M.c)(F),Object(M.c)($)]);case 2:case"end":return e.stop()}}),ee)}var ne=Object(b.a)(),re=f.d,ce=Object(k.a)(),ae=Object(p.a)(ne),oe=[ce];n(44);var se=Object(r.lazy)((function(){return n.e(22).then(n.bind(null,275))})),ue=Object(r.lazy)((function(){return n.e(21).then(n.bind(null,276))})),ie=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,291))})),de=Object(r.lazy)((function(){return n.e(24).then(n.bind(null,283))})),be=Object(r.lazy)((function(){return n.e(23).then(n.bind(null,284))})),fe=Object(r.lazy)((function(){return n.e(19).then(n.bind(null,285))})),pe=Object(r.lazy)((function(){return n.e(26).then(n.bind(null,286))})),le=Object(r.lazy)((function(){return n.e(25).then(n.bind(null,287))})),ve=function(e){var t,n=Object(f.e)((t=ne,Object(f.c)({router:Object(d.b)(t),Countries:h,Genres:g,Movies:_})),e,re(f.a.apply(void 0,oe),Object(f.a)(ae)));return ce.run(te),n}(),je=[{id:"root",path:"".concat(N.c,"/"),component:null,parent:!0},{id:"home",path:"".concat(N.c,"/home"),component:ie,parent:!1},{id:"genre",path:"".concat(N.c,"/genre"),component:de,parent:!1},{id:"country",path:"".concat(N.c,"/country"),component:be,parent:!1},{id:"movie",path:"".concat(N.c,"/movie"),component:fe,parent:!1},{id:"tvserie",path:"".concat(N.c,"/tvserie"),component:pe,parent:!1},{id:"search",path:"".concat(N.c,"/search"),component:le,parent:!1}];function he(e){var t=e.history,n=e.context;return c.a.createElement(d.a,{history:t,context:n},c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading App...")},c.a.createElement(c.a.Fragment,null,c.a.createElement(se,null),c.a.createElement(i.d,null,je.map((function(e){var t=e.component;return e.parent?c.a.createElement(i.b,{key:e.id,exact:!0,path:e.path,render:function(){return c.a.createElement(i.a,{to:"".concat(N.c,"/home")})}}):c.a.createElement(i.b,{key:e.id,path:e.path,render:function(e){e.staticContext;var n=Object(s.a)(e,["staticContext"]);return c.a.createElement(t,n)}})}))),c.a.createElement(ue,null))))}var me=function(){return c.a.createElement(u.a,{store:ve,context:u.b},c.a.createElement(he,{history:ne,context:u.b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,3]]]);
//# sourceMappingURL=main.8873e1b4.chunk.js.map