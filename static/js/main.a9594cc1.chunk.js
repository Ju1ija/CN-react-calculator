(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{26:function(n,t,e){},27:function(n,t,e){},37:function(n,t){},38:function(n,t,e){"use strict";e.r(t);var c=e(7),i=e.n(c),o=e(19),r=e.n(o),u=(e(26),e(5)),s=e(40),j=(e(27),e(1));var l=function(n){return Object(j.jsx)("button",{id:n.idName,onClick:n.onClickEvent,children:n.icon})},a=function(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(!1),r=Object(u.a)(o,2),a=r[0],b=r[1],f=function(n){return v(e+n)},v=function(n){/(\d+[%]?[+-/*]?)+$/.test(n)&&(a?O(x(n))?(i(n),b(!1)):(i(x(n)),b(!1)):i(n))},O=function(n){return"+-*/".includes(n)},x=function(n){return n[n.length-1]};return Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsx)("div",{className:"input-section",children:Object(j.jsx)("input",{type:"text",onChange:function(n){return v(n.target.value)},placeholder:"0",autocomplete:"off",value:e})}),Object(j.jsxs)("div",{className:"buttons-section",children:[Object(j.jsxs)("div",{className:"numbers-section",children:[Object(j.jsxs)("div",{className:"grey-section",children:[Object(j.jsx)(l,{icon:"C",idName:"reset-button",onClickEvent:function(){return i("")}}),Object(j.jsx)(l,{icon:"%",onClickEvent:function(){return f("%")}})]}),Object(j.jsxs)("div",{className:"white-section",children:[Object(j.jsx)(l,{icon:"0",onClickEvent:function(){return f("0")}}),Object(j.jsx)(l,{icon:".",onClickEvent:function(){return f(".")}}),Object(j.jsx)(l,{icon:"DEL",onClickEvent:function(){var n;i("string"===typeof(n=e)?n.slice(0,-1):"")}}),Object(j.jsx)(l,{icon:"1",onClickEvent:function(){return f("1")}}),Object(j.jsx)(l,{icon:"2",onClickEvent:function(){return f("2")}}),Object(j.jsx)(l,{icon:"3",onClickEvent:function(){return f("3")}}),Object(j.jsx)(l,{icon:"4",onClickEvent:function(){return f("4")}}),Object(j.jsx)(l,{icon:"5",onClickEvent:function(){return f("5")}}),Object(j.jsx)(l,{icon:"6",onClickEvent:function(){return f("6")}}),Object(j.jsx)(l,{icon:"7",onClickEvent:function(){return f("7")}}),Object(j.jsx)(l,{icon:"8",onClickEvent:function(){return f("8")}}),Object(j.jsx)(l,{icon:"9",onClickEvent:function(){return f("9")}})]})]}),Object(j.jsxs)("div",{className:"orange-section",children:[Object(j.jsx)(l,{icon:"=",idName:"equal",onClickEvent:function(){return function(n){if(!O(x(n))&&""!==n){var t=Number(Object(s.a)(n).toFixed(3));i(t),b(!0)}}(e)}}),Object(j.jsx)(l,{icon:"+",onClickEvent:function(){return f("+")}}),Object(j.jsx)(l,{icon:"-",onClickEvent:function(){return f("-")}}),Object(j.jsx)(l,{icon:"\xd7",onClickEvent:function(){return f("*")}}),Object(j.jsx)(l,{icon:"\xf7",onClickEvent:function(){return f("/")}})]})]})]})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,41)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),c(n),i(n),o(n),r(n)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(a,{})}),document.getElementById("root")),b()}},[[38,1,2]]]);
//# sourceMappingURL=main.a9594cc1.chunk.js.map