(this["webpackJsonpcra-sample"]=this["webpackJsonpcra-sample"]||[]).push([[0],{64:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(9),i=n.n(c),a=n(30),s=(n(64),n(111)),l=n(109),u=n(107),d=n(106),f=n(108),h=n(110),g=n(52),j=n.n(g),v=n(51),b=n.n(v),O=n(50),p=n.n(O),w=n(11);function k(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(a.a)(c,2),g=i[0],v=i[1],O=Object(o.useState)(""),k=Object(a.a)(O,2),y=k[0],m=k[1],x=Object(o.useState)(null),S=Object(a.a)(x,2),C=S[0],N=S[1],W=function(){for(;;){var e=Object(s.a)();if(0===n.filter((function(t){return t.key===e})).length)return e}};return Object(o.useEffect)((function(){localStorage.todo&&r(JSON.parse(localStorage.todo))}),[]),Object(o.useEffect)((function(){localStorage&&localStorage.setItem("todo",JSON.stringify(n))}),[n]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("div",{className:"addtodo",children:[Object(w.jsx)(l.a,{style:{width:"75%",marginRight:"5%"},value:g,onChange:function(e){return v(e.target.value)},placeholder:"task to do"}),Object(w.jsx)(u.a,{variant:"contained",style:{width:"20%"},color:"primary",onClick:function(){r((function(e){return e.concat({key:W(),text:g})})),v("")},children:"add"})]}),0!==n.length?n.map((function(e,t){return Object(w.jsxs)(d.a,{className:"todo",children:[Object(w.jsx)("div",{className:"info",children:C!==t?Object(w.jsx)(f.a,{children:e.text}):Object(w.jsx)(l.a,{value:y,onChange:function(e){return m(e.target.value)},style:{width:"95%"}})}),Object(w.jsxs)("div",{className:"control",children:[C===t?Object(w.jsx)(p.a,{onClick:function(){N(null),m(""),function(e,t){var o=n;for(var c in o)o[c].key===e&&(o[c].text=t);localStorage&&localStorage.setItem("todo",JSON.stringify(o)),r(o)}(e.key,y)},style:{cursor:"pointer"}}):Object(w.jsx)(b.a,{onClick:function(){N(t),m(e.text)},style:{cursor:"pointer"}}),Object(w.jsx)(j.a,{style:{cursor:"pointer"},onClick:function(){var t;t=e.key,r((function(e){return e.filter((function(e){return e.key!==t}))}))}})]})]})})):Object(w.jsx)(h.a,{style:{margin:".5rem"},severity:"info",children:"your tasks will be shown here!"})]})}var y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(t,e)}))}}(),x()}},[[72,1,2]]]);
//# sourceMappingURL=main.373b262a.chunk.js.map