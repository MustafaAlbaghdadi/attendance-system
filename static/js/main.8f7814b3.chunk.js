(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){e.exports=n(231)},128:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(41),i=n.n(r),c=n(234),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(128);var u,d=n(27),g=n(44);!function(e){e[e.LOGIN=0]="LOGIN",e[e.CHANGE_LANG=1]="CHANGE_LANG"}(u||(u={}));var p=localStorage.getItem("token"),f=localStorage.getItem("expirationDate"),h=localStorage.getItem("userId"),m=localStorage.getItem("username"),v=localStorage.getItem("userType"),w={token:p||"",expirationDate:f||"",username:m||"",userId:parseInt(h||"0"),userType:v||""};var y=localStorage.getItem("lang"),I={selected:y&&"en"===y?"en":"ar"};var b=Object(d.b)({LoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.LOGIN:return e=Object(g.a)({},e,{token:t.payload.token,expirationDate:t.payload.expirationDate,userId:t.payload.userId,username:t.payload.username,userType:t.payload.userType}),localStorage.setItem("token",t.payload.token),localStorage.setItem("userType",t.payload.userType),localStorage.setItem("username",t.payload.username),localStorage.setItem("userId",t.payload.userId.toString()),localStorage.setItem("expirationDate",t.payload.expirationDate),e}return e},ChangeLangReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.CHANGE_LANG:return e=Object(g.a)({},e,{selected:t.payload.selected}),localStorage.setItem("lang",t.payload.selected),window.location.reload(!1),e}return e}}),k=n(43),O=n(115),S=n(116),j=n(121),E=n(117),L=n(122),N=n(118),x=n.n(N),D=n(119),G=n.n(D),A=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(j.a)(this,Object(E.a)(t).call(this,e))).state={authorized:!1},n}return Object(L.a)(t,e),Object(S.a)(t,[{key:"checkExpire",value:function(e){return!(Date.parse(e)>(new Date).getDate())}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{width:500,height:500,onUpdate:function(e,t){void 0!=t&&alert(t.getText())}}),function(){var e=localStorage.getItem("token");x.a.interceptors.request.use(function(t){return t.headers.authorization="Bearer "+e,t},function(e){return Promise.reject(e)})}())}}]),t}(a.Component),T=Object(k.b)(function(e){return{authInfo:e.LoginReducer,changeLangReducer:e.ChangeLangReducer}})(A),C=document.getElementsByTagName("base")[0].getAttribute("href"),R=document.getElementById("root");i.a.render(o.a.createElement(k.a,{store:Object(d.c)(b)},o.a.createElement(c.a,{basename:C},o.a.createElement(T,null))),R),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");l?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):s(e)})}}()}},[[123,1,2]]]);
//# sourceMappingURL=main.8f7814b3.chunk.js.map