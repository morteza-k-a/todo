(this["webpackJsonpcra-sample"]=this["webpackJsonpcra-sample"]||[]).push([[0],{74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(10),i=n.n(r),a=n(26),s=(n(74),n(131)),l=n(128),u=n(126),d=n(118),f=n(62),j=n(127),h=n(129),b=n(59),g=n.n(b),O=n(58),v=n.n(O),p=n(57),k=n.n(p),x=n(60),w=n.n(x),m=n(132),y=n(125),S=n(123),C=n(124),N=n(122),W=n(9);function E(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),i=Object(a.a)(r,2),b=i[0],O=i[1],p=Object(o.useState)(""),x=Object(a.a)(p,2),E=x[0],F=x[1],J=Object(o.useState)(null),T=Object(a.a)(J,2),A=T[0],I=T[1],L=Object(o.useState)(!1),P=Object(a.a)(L,2),B=(P[0],P[1]),U=Object(o.useState)(!1),D=Object(a.a)(U,2),M=D[0],R=D[1],Y=function(){for(;;){var e=Object(s.a)();if(0===n.filter((function(t){return t.key===e})).length)return e}},$=function(){R(!1)};return Object(o.useEffect)((function(){localStorage.todo&&c(JSON.parse(localStorage.todo)),B((function(e){return!e}))}),[]),Object(o.useEffect)((function(){localStorage&&localStorage.setItem("todo",JSON.stringify(n))}),[n]),Object(W.jsxs)("div",{className:"App",children:[Object(W.jsxs)(m.a,{open:M,onClose:$,"aria-labelledby":"form-dialog-title",children:[Object(W.jsx)(N.a,{id:"form-dialog-title",children:"add to-do"}),Object(W.jsxs)(S.a,{children:[Object(W.jsxs)(C.a,{children:["You got a task that you should do? ",Object(W.jsx)("br",{}),"Write it down in the box and click the add button to add it to the list."]}),Object(W.jsx)(l.a,{autoFocus:!0,margin:"dense",id:"taskTD",label:"task to do",fullWidth:!0,value:b,onChange:function(e){return O(e.target.value)}})]}),Object(W.jsxs)(y.a,{children:[Object(W.jsx)(u.a,{onClick:$,color:"primary",children:"Cancel"}),Object(W.jsx)(u.a,{onClick:function(){b&&($(),c((function(e){return e.concat({key:Y(),text:b})})),O(""))},color:"primary",children:"add"})]})]}),0!==n.length?n.map((function(e,t){return Object(W.jsxs)(d.a,{className:"todo",children:[Object(W.jsx)("div",{className:"info",children:A!==t?Object(W.jsx)(f.a,{children:e.text}):Object(W.jsx)(l.a,{value:E,onChange:function(e){return F(e.target.value)},style:{width:"95%"}})}),Object(W.jsxs)("div",{className:"control",children:[A===t?Object(W.jsx)(k.a,{onClick:function(){I(null),F(""),function(e,t){var o=n;for(var r in o)o[r].key===e&&(o[r].text=t);localStorage&&localStorage.setItem("todo",JSON.stringify(o)),c(o)}(e.key,E)},style:{cursor:"pointer"}}):Object(W.jsx)(v.a,{onClick:function(){I(t),F(e.text)},style:{cursor:"pointer"}}),Object(W.jsx)(g.a,{style:{cursor:"pointer"},onClick:function(){var t;t=e.key,c((function(e){return e.filter((function(e){return e.key!==t}))}))}})]})]})})):Object(W.jsx)(h.a,{style:{margin:".5rem"},severity:"info",children:"your tasks will be shown here!"}),M?null:Object(W.jsx)(j.a,{color:"primary",className:"fab",style:{position:"absolute"},onClick:function(){R(!0)},children:Object(W.jsx)(w.a,{})})]})}var F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),T()}},[[82,1,2]]]);
//# sourceMappingURL=main.1d33190b.chunk.js.map