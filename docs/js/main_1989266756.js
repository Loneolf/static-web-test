"use strict";(self.webpackChunksource_map=self.webpackChunksource_map||[]).push([[179],{6570:(e,n,t)=>{var r=t(5893),s=t(745),c=t(9655),i=t(2925),o=t(3309),a=t(5998),l=t(1032),d=t(7753),u=t(4470);const h=(0,l.xC)({reducer:{counter:d.ZP,list:u.ZP}});var x=t(7294),j=t(9250),p=t(1385),m=t(9840),f=(0,x.lazy)((function(){return t.e(177).then(t.bind(t,9503))})),v=(0,x.lazy)((function(){return t.e(411).then(t.bind(t,1010))})),b=(0,x.lazy)((function(){return t.e(780).then(t.bind(t,7437))}));const y=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"myApp"}),(0,r.jsx)(p.ZP,{type:"primary",children:"按钮"}),(0,r.jsx)(m.Z,{onChange:function(e,n){console.log(e,n)}}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{to:"/home",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{to:"/nav",children:"Nav"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{to:"/reduce",children:"Reduce"})})]}),(0,r.jsx)(x.Suspense,{fallback:(0,r.jsx)("div",{children:"loading..."}),children:(0,r.jsxs)(j.Z5,{children:[(0,r.jsx)(j.AW,{path:"/home",element:(0,r.jsx)(f,{})}),(0,r.jsx)(j.AW,{path:"/nav",element:(0,r.jsx)(v,{})}),(0,r.jsx)(j.AW,{path:"/reduce",element:(0,r.jsx)(b,{})})]})})]})};s.createRoot(document.querySelector("#app")).render((0,r.jsx)(a.zt,{store:h,children:(0,r.jsx)(o.ZP,{locale:i.Z,theme:{token:{colorPrimary:"#00b96b",borderRadius:1,colorBgContainer:"#f6ffed"}},children:(0,r.jsx)(c.VK,{basename:"/static-web-test",children:(0,r.jsx)(y,{})})})}))},7753:(e,n,t)=>{t.d(n,{BO:()=>o,Mj:()=>i,ZP:()=>a,nP:()=>c});var r,s=(0,t(1032).oM)({name:"counter",initialState:{count:1},reducers:{increment:function(e,n){var t=n.payload;e.count+=t.step},decrement:function(e,n){var t=n.payload;e.count-=t.step}}}),c=(r=s.actions).increment,i=r.decrement,o=function(e){return function(n){setTimeout((function(){n(c(e))}),1e3)}};const a=s.reducer},4470:(e,n,t)=>{t.d(n,{Rs:()=>i,ZP:()=>o,Zh:()=>c});var r,s=(0,t(1032).oM)({name:"list",initialState:{list:[]},reducers:{pushList:function(e){e.list.push((100*Math.random()).toFixed(0))},delList:function(e,n){var t=n.payload;e.list.splice(t,1)}}}),c=(r=s.actions).pushList,i=r.delList;const o=s.reducer}},e=>{e.O(0,[426,676,114],(()=>{return n=6570,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=main_1989266756.js.map