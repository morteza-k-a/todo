(this["webpackJsonpcra-sample"]=this["webpackJsonpcra-sample"]||[]).push([[0],{65:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(9),a=n.n(r),i=n(28),s=(n(65),n(117)),l=n(108),u=n(115),d=n(113),f=n(112),h=n(114),j=n(116),g=n(53),v=n.n(g),b=n(52),O=n.n(b),p=n(51),w=n.n(p),k=n(45),m=n.n(k),y=n(10);function x(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),a=Object(i.a)(r,2),g=a[0],b=a[1],p=Object(o.useState)(""),k=Object(i.a)(p,2),x=k[0],S=k[1],N=Object(o.useState)(null),C=Object(i.a)(N,2),W=C[0],E=C[1],J=Object(o.useState)(!1),A=Object(i.a)(J,2),F=(A[0],A[1]),I=function(){for(;;){var e=Object(s.a)();if(0===n.filter((function(t){return t.key===e})).length)return e}};return Object(o.useEffect)((function(){localStorage.todo&&c(JSON.parse(localStorage.todo)),F((function(e){return!e}))}),[]),Object(o.useEffect)((function(){localStorage&&localStorage.setItem("todo",JSON.stringify(n))}),[n]),Object(y.jsx)(m.a,{className:"lazywrapper",placeholder:Object(y.jsx)("div",{className:"centerloading",children:Object(y.jsx)(l.a,{})}),children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{className:"addtodo",children:[Object(y.jsx)(u.a,{style:{width:"75%",marginRight:"5%"},value:g,onChange:function(e){return b(e.target.value)},placeholder:"task to do"}),Object(y.jsx)(d.a,{variant:"contained",style:{width:"20%"},color:"primary",onClick:function(){g&&(c((function(e){return e.concat({key:I(),text:g})})),b(""))},children:"add"})]}),0!==n.length?n.map((function(e,t){return Object(y.jsxs)(f.a,{className:"todo",children:[Object(y.jsx)("div",{className:"info",children:W!==t?Object(y.jsx)(h.a,{children:e.text}):Object(y.jsx)(u.a,{value:x,onChange:function(e){return S(e.target.value)},style:{width:"95%"}})}),Object(y.jsxs)("div",{className:"control",children:[W===t?Object(y.jsx)(w.a,{onClick:function(){E(null),S(""),function(e,t){var o=n;for(var r in o)o[r].key===e&&(o[r].text=t);localStorage&&localStorage.setItem("todo",JSON.stringify(o)),c(o)}(e.key,x)},style:{cursor:"pointer"}}):Object(y.jsx)(O.a,{onClick:function(){E(t),S(e.text)},style:{cursor:"pointer"}}),Object(y.jsx)(v.a,{style:{cursor:"pointer"},onClick:function(){var t;t=e.key,c((function(e){return e.filter((function(e){return e.key!==t}))}))}})]})]})})):Object(y.jsx)(j.a,{style:{margin:".5rem"},severity:"info",children:"your tasks will be shown here!"})]})})}var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}(),C()}},[[77,1,2]]]);
//# sourceMappingURL=main.b268fe6b.chunk.js.map