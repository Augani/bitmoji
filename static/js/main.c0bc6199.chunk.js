(this.webpackJsonpMemoji=this.webpackJsonpMemoji||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(1),s=n.n(l),o=n(3),i=n.n(o),r=(n(10),n(4));var a=function(){var e=s.a.useState([]),t=Object(r.a)(e,2),n=t[0],l=t[1];return s.a.useEffect((function(){fetch("https://memoji.herokuapp.com/v1/all").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)("div",{className:"w-screen h-screen flex flex-col font-sans",children:[Object(c.jsx)("div",{className:"h-20 w-full flex flex-row p-4",children:Object(c.jsx)("h1",{className:"text-lg font-semibold",children:"Memojis"})}),Object(c.jsx)("main",{className:"w-full h-full overflow-y-auto grid place-items-center grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-5",children:n.length?n.map((function(e){return Object(c.jsx)("img",{src:e,className:"h-32 rounded-md shadow-lg hover:scale-300 transition duration-150 hover:border-blue-400",alt:"memoji"})})):Object(c.jsx)("div",{className:"col-span-1 lg:col-span-4",children:Object(c.jsx)("div",{className:"w-full h-full flex flex-col justify-center items-center ",children:Object(c.jsx)("h1",{className:"text-lg font-semibold text-center",children:"Loading..."})})})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),l(e),s(e),o(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(a,{})}),document.getElementById("root")),u()}},[[11,1,2]]]);
//# sourceMappingURL=main.c0bc6199.chunk.js.map