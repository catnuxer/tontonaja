(this.webpackJsonptontonaja=this.webpackJsonptontonaja||[]).push([[4],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"LinkWithPopUp",(function(){return c})),n.d(t,"LinkWithoutPopUp",(function(){return u})),n.d(t,"default",(function(){return l})),n.d(t,"useOnClickOutside",(function(){return s}));var a=n(27),i=n(1),r=n.n(i),o=n(60);function c(e){return r.a.createElement("span",{className:e.className},e.label)}function u(e){return r.a.createElement(o.b,{className:e.className,activeClassName:e.activeClassName,to:e.link},e.label)}function l(e){var t=Object(i.useRef)(),n=Object(i.useState)(!1),o=Object(a.a)(n,2),l=o[0],m=o[1];return s(t,(function(){return m(!1)})),r.a.createElement("span",{className:"link-container",onClick:function(){return m(!0)}},e.showPopup?r.a.createElement(c,e):r.a.createElement(u,e),l?r.a.createElement("div",{ref:t,className:l?"popup-area popup-area-active":"popup-area"},e.showPopup):null)}function s(e,t){Object(i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},220:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t),n.d(t,"MovieLoadingThumbnail",(function(){return r}));var a=n(1),i=n.n(a);n(220);var r=function(){for(var e=[],t=0;t<10;t++)e.push(i.a.createElement("div",{className:"movie-thumbnail-loading",key:t.toString()}));return e};t.default=i.a.memo((function(e){var t=e.onClick,n=e.vote,a=e.title,r=e.backdrop;return i.a.createElement("div",{className:"movie-thumbnail",onClick:t},i.a.createElement("span",{className:"movie-thumbnail-vote"},n),i.a.createElement("div",{className:"shadow"},i.a.createElement("span",{className:"movie-thumbnail-title"},a)),i.a.createElement("img",{className:"movie-thumnail-backdrop",src:"https://image.tmdb.org/t/p/original/".concat(r)}))}),(function(e,t){return e.title===t.title}))},246:function(e,t,n){},247:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(18),o=n(21),c=n(16),u=n(10),l=n(227),s=n(228),m=n(206),d=n(265),v=n(267),f=n(229),b=n.n(f),p=n(218),h=n.n(p);n(243);function g(e){return i.a.createElement("div",{className:"carousel-banner"},i.a.createElement("div",{className:"carousel-content",onClick:e.onClick},i.a.createElement("h1",{className:"carousel-title"},e.item&&e.item.title?e.item.title:""),i.a.createElement("p",{className:"carousel-caption"},e.item&&e.item.overview?e.item.overview:""),i.a.createElement("button",{className:"carousel-button"},"Watch Now")),e.item.backdrop_path&&i.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.item.backdrop_path),className:"carousel-image"}))}var E=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={autoPlay:!0,timer:1e3,animation:"slide",indicators:!1},h()(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"loading",value:function(){return i.a.createElement("div",{className:"carousel-loading"})}},{key:"render",value:function(){var e=this,t=this.props,n=t.banner;return t.movie_loaded?this.loading():i.a.createElement(b.a,{className:"carousel",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators},n.map((function(t,n){return i.a.createElement(g,{item:t,key:n,onClick:e.props.onClick.bind(e)})})))}}]),n}(i.a.Component),k=Object(r.c)((function(e){var t=e.Movies;return{banner:t.banner,movie_loaded:t.movie_loaded}}))(E),O=n(27),j=n(244),N=n(131),C=(n(220),Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,244))}))),y=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,288))}));function L(e){var t=Object(a.createRef)(),n=Object(a.useState)(!1),r=Object(O.a)(n,2),o=r[0],c=r[1],u=Object(a.useState)({}),l=Object(O.a)(u,2),s=l[0],m=l[1],d=Object(a.useCallback)((function(){c(!0),m(e)})),v=Object(a.useCallback)((function(){console.log("watch movie")}));return Object(N.useOnClickOutside)(t,(function(){return c(!1)})),i.a.createElement(a.Suspense,{fallback:i.a.createElement(j.MovieLoadingThumbnail,null)},i.a.createElement("div",{className:"movie-thumbnail-container"},o&&i.a.createElement(y,{ref:t,movieData:s,bottomPosition:window.pageYOffset,onClick:v}),i.a.createElement(C,{title:e.title,onClick:function(){return d()},backdrop:e.backdrop_path,vote:e.vote_average})))}var w=Object(r.c)((function(e){var t=e.Movies,n=e.Genres;return{suggestion:t.suggestion,movie_loaded:t.movie_loaded,genreMovie:n.movie}}))((function(e){var t=e.movie_loaded,n=e.suggestion,a=e.genreMovie;return t?i.a.createElement(j.MovieLoadingThumbnail,null):n.map((function(e,t){var n=function(e,t){var n=[];if(0===t.length)return!1;if(1===t.length)return e.filter((function(e){return e.id===t[0]}));for(var a=function(a){e.map((function(e){e.id===t[a]&&n.push(e)}))},i=0;i<t.length;i++)a(i);return n}(a,e.genre_ids);return e.genre_movie=n,t<10&&e.backdrop_path&&i.a.createElement(L,Object.assign({},e,{key:t.toString()}))}))})),_=n(245),M=(n(246),n(247),Object(a.lazy)((function(){return n.e(13).then(n.bind(null,289))})));var P=Object(r.c)((function(e){return Object(_.a)(e),{}}),{setMovieSuggestionGenre:u.l})((function(e){var t=e.title,n=e.menu,a=e.children,r=e.setMovieSuggestionGenre,o=i.a.Children.map(a,(function(e){return i.a.createElement("div",{className:"section-movie"},e)}));return i.a.createElement("div",{className:"container"},i.a.createElement(M,{title:t,menu:n,onClick:function(e){return r(e)}}),o)}));n(44);t.default=Object(r.c)((function(e){var t=e.Countries,n=e.Genres;return{country:t.country,genre:n.movie}}),{countryLoaded:o.c,genreLoaded:c.d,movieLoaded:u.h})((function(e){return Object(a.useEffect)((function(){e.countryLoaded(),e.genreLoaded(),e.movieLoaded()}),[]),i.a.createElement("div",{className:"wrapper"},i.a.createElement(k,{onClick:function(){return console.log("Click Caousel")}}),i.a.createElement(P,{title:"Suggestion Movie",menu:e.genre},i.a.createElement(w,null)))}))}}]);
//# sourceMappingURL=4.2a315ce9.chunk.js.map