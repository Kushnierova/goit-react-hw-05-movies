"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[506],{913:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(689),u=r(87),o=r(409),l="MovieDetails_text__RHcc4",p="MovieDetails_container__Ys+c9",h="MovieDetails_aboutMovie__PFMCW",v="MovieDetails_btn__7L5IF",d=r(791),f=r(184),m=function(){var e,t,r=(0,d.useState)(""),s=(0,a.Z)(r,2),m=s[0],x=s[1],g=(0,d.useState)(""),j=(0,a.Z)(g,2),w=j[0],Z=j[1],_=(0,d.useState)(""),b=(0,a.Z)(_,2),N=b[0],y=b[1],S=(0,d.useState)([]),k=(0,a.Z)(S,2),I=k[0],M=k[1],U=(0,d.useState)(""),J=(0,a.Z)(U,2),O=J[0],Y=J[1],C=(0,i.UO)().movieId,D=(0,i.TH)(),W=(0,d.useRef)(null!==(e=null===(t=D.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,d.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n,a,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Sg)(C);case 3:t=e.sent,r=t.title,n=t.release_date.split("-")[0],a=t.overview,s=t.genres,i=t.poster_path,x(r),Z(n),y(a),M(s),Y(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]),(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:v,children:(0,f.jsx)(u.rU,{to:W.current,children:"Go Back"})}),(0,f.jsxs)("div",{className:p,children:[O?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(O),alt:"poster"}):(0,f.jsx)("p",{className:l,children:"poster"}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsxs)("h2",{className:l,children:[m,w]}),(0,f.jsx)("h3",{className:l,children:"Overview"}),(0,f.jsx)("p",{className:l,children:N}),(0,f.jsx)("h3",{className:l,children:"Genres"}),(0,f.jsx)("p",{className:l,children:I.map((function(e){var t=e.id,r=e.name;return(0,f.jsx)("li",{children:r},t)}))}),(0,f.jsx)("h3",{className:l,children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{className:l,children:(0,f.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:l,children:(0,f.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]})]}),(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)("p",{className:"loading",children:"Loading..."}),children:(0,f.jsx)(i.j3,{})})]})}},409:function(e,t,r){r.d(t,{Sg:function(){return h},bn:function(){return l},hC:function(){return d},oJ:function(){return m},rQ:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(340),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzYwZDM3YmZlZmRmOTU1N2U0MWQwZWM4Y2U0OTBiNCIsInN1YiI6IjY1OWVjYzY3YjM5ZTM1MDBmMDhkZTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vT1sqyNIrRG5OaQlrShISeSAfD5-uhac2i7B0cWxseg"}};function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",i);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&language=en-US&include_adult=false"),i);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US"),i);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=506.9cfb7fa2.chunk.js.map