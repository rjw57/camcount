(this.webpackJsonpcamcount=this.webpackJsonpcamcount||[]).push([[0],{35:function(e,t,n){e.exports=n(46)},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(24),c=n.n(r),i=(n(40),n(57)),s=n(63),l=n(59),u=n(56),m=n(58),p=n(21),d=n.n(p),f=n(25),v=n(20),g="".concat("https://countem-28971a6f258f.storage.googleapis.com/people.json"),h=function(){var e=a.useState({isLoading:!1}),t=Object(v.a)(e,2),n=t[0],o=t[1];return a.useEffect((function(){Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({isLoading:!0}),e.prev=1,e.next=4,fetch(g);case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Error response from API.");case 7:return e.t0=o,e.next=10,t.json();case 10:e.t1=e.sent,e.t2={isLoading:!1,people:e.t1},(0,e.t0)(e.t2),e.next=18;break;case 15:e.prev=15,e.t3=e.catch(1),o({isLoading:!1,error:e.t3});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()}),[o]),n},E=n(62),b=n(11),w=Object(b.a)((function(e){return Object(E.a)({root:{},count:{color:e.palette.primary.main}})}))((function(e){var t=e.count,n=e.title,o=e.description,r=e.classes;return a.createElement("div",{className:r.root},a.createElement(u.a,{classes:{root:r.count},variant:"h3",component:"div"},t.toLocaleString()),a.createElement(u.a,{variant:"body1",component:"div",gutterBottom:!!o},n),o&&a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"div"},o))})),k=Object(i.a)((function(e){return{root:{height:"100%"}}})),x=function(){var e=k(),t=h(),n=t.people,a=t.isLoading,r=n&&new Date(n.generatedAt);return o.a.createElement("div",{className:e.root},a&&o.a.createElement(s.a,null),r&&o.a.createElement(l.a,{p:2,pb:0},o.a.createElement(u.a,{variant:"body1",component:"div"},"As of ",r.toLocaleString(),", the University of Cambridge Information Services knows about\u2026")),o.a.createElement(l.a,{p:2},o.a.createElement(m.a,{container:!0,spacing:2},n&&n.counts.map((function(e,t){var n=e.count,a=e.title,r=e.description;return o.a.createElement(m.a,{key:t,item:!0,xs:12,sm:6,lg:4,xl:3},o.a.createElement(l.a,{pb:2},o.a.createElement(w,{count:n,title:a,description:r})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.95691537.chunk.js.map