(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(97059)}])},97059:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return q},default:function(){return H}});var r=t(28520),a=t.n(r),s=t(85893),i=t(9008),c=t(67852),o=t.n(c),l=t(28570),u=t(43889),d=t(67294),f=t(733),m=t.n(f),h=t(58593),x=t(94834),v=t(93680),b=t(75147),p=(t(98336),t(2593)),j=t(35553),w=t(70620),g=t(30381),k=t.n(g),y=t(41330),Z="/_next/static/media/thank-you-later.1ab79fd4.png",T=t(30423),E=t.n(T),N="thank-you-later",O=function(){var e=(0,d.useRef)(null),n=(0,d.useState)(!1),t=n[0],r=n[1],a=(0,d.useState)(!1),i=a[0],c=a[1],o=(0,d.useState)(60),l=o[0],u=o[1];(0,d.useEffect)((function(){if(localStorage.getItem(N)||c(!0),e.current){var n=e.current;l<=0&&Math.floor(n.scrollTop)>=Math.floor(n.scrollHeight-n.clientHeight-300)&&r(!0)}}),[e.current,l]),(0,d.useEffect)((function(){var e=setInterval((function(){u((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}),[]);var f=function(){localStorage.setItem(N,"true"),c(!1)},m=(0,d.useMemo)((function(){return e.current?(0,s.jsxs)(v.Z,{disabled:!t,onClick:f,variant:"primary",children:["OK, I understand and take own risk",l>0&&"(".concat(l," seconds.)")]}):null}),[e.current,t,l]);return i?(0,s.jsxs)("div",{className:E().warp,children:[(0,s.jsx)("div",{ref:e,style:{position:"relative",height:"100%",overflow:"scroll"},children:(0,s.jsx)(y.Z,{src:Z,thumbnail:!0})}),m]}):null},_=t(28687);function M(e,n,t,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,a)}function C(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function i(e){M(s,r,a,i,c,"next",e)}function c(e){M(s,r,a,i,c,"throw",e)}i(void 0)}))}}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}function D(){var e,n,t=(e=["\n    query getVcVesting($id: Bytes!) {\n      vcVestings(first: 100, where: { beneficiary: $id }) {\n       id\n       amount\n       beneficiary\n       releaseTime\n       released\n     }\n    }\n    "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return D=function(){return t},t}var I="0xf8aE4Ef55628aacFb9Bd6E777b0F5D35C173F624".toLowerCase(),P="0xb4939DDfd7425FaE040A42BBb5220756973Fc329".toLowerCase(),F=new _.GraphQLClient("https://api.thegraph.com/subgraphs/name/hongjianghuang/melandvest"),Y={width:"10vw",justifyContent:"flex-end"},q=!0,H=function(e){var n=(0,d.useState)(""),t=n[0],r=n[1],c=(0,d.useState)(!1),f=c[0],g=c[1],y=(0,d.useState)(void 0),Z=y[0],T=y[1],E=(0,d.useState)([]),N=E[0],M=E[1],S=(0,d.useState)(new Date),q=S[0],H=S[1];(0,d.useEffect)((function(){var e=window.setInterval((function(){H(new Date)}),1e3);return function(){return window.clearInterval(e)}}));var L=(0,d.useState)(),V=L[0],$=L[1];(0,d.useEffect)((function(){(0,l.UJ)().then((function(e){T(e||null)}))}),[1]);var B=(0,d.useCallback)(C(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=u._2.connect(P,Z.getSigner()),e.next=6,n.reviceTGE();case 6:return t=e.sent,g(!0),e.next=10,t.wait();case 10:return e.next=12,R(V.beneficiary);case 12:return e.prev=12,e.next=15,(0,l.dR)(I,Z);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(12);case 19:$(G({},V,{recived:!0})),g(!1),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(2),window.alert(JSON.stringify(e.t1));case 26:case"end":return e.stop()}}),e,null,[[2,23],[12,17]])}))),[Z,V]),U=(0,d.useCallback)(C(a().mark((function e(n){var r,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return r=function(){return new Promise((function(e){setTimeout((function(){e(!0)}),3e3)}))},s=u._2.connect(P,Z.getSigner()),e.next=6,s.release(n);case 6:return i=e.sent,e.next=9,i.wait();case 9:return e.next=11,r();case 11:return e.next=13,R(t);case 13:case"end":return e.stop()}}),e)}))),[Z,V,t]),z=(0,d.useMemo)((function(){if(V&&!V.recived){var e="[".concat(V.amount.gt(0)?"*":" ","]Normal [ ]Dumping [").concat(V.amount.eq(0)?"*":" ","]Uninvested");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"vc status:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:e,disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"amount total:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:(0,j.dF)(V.amount),disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"cliff month:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:"".concat(V.cliffMonth.toNumber()," month"),disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"vesting month:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:"".concat(V.vestingMonth.toNumber()," month"),disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"unlock TGE:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:"".concat(V.unlockTGE.toNumber(),"%"),disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"TGE Time:"}),(0,s.jsx)(x.Z,{"aria-label":"amount",value:V.amount.gt(0)?k()(V.timeOfTGE).format("YYYY-MM-DD HH:mm:ss"):"-",disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[V.amount.eq(0)&&(0,s.jsx)(v.Z,{disabled:!0,onClick:B,variant:"primary",children:"not found vc info"}),!V.amount.eq(0)&&V.timeOfTGE>q&&(0,s.jsx)(v.Z,{disabled:!0,onClick:B,variant:"primary",children:k()(q).to(V.timeOfTGE,!0)}),!V.amount.eq(0)&&V.timeOfTGE<q&&(0,s.jsx)(v.Z,{onClick:B,variant:"primary",children:"recive TGE and start vesting"})]})]})}return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(b.Z,{striped:!0,bordered:!0,hover:!0,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Unlock time"}),(0,s.jsx)("th",{children:"amount"}),(0,s.jsx)("th",{children:"unlocked"})]})}),(0,s.jsx)("tbody",{children:N.map((function(e,n){return(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{style:{width:"200px"},children:["UTC ",k().utc(e.releaseTime).format("YYYY/MM/DD HH:mm:ss")]}),(0,s.jsx)("td",{children:(0,j.dF)(e.amount)}),(0,s.jsxs)("td",{children:[e.released&&(0,s.jsx)("span",{children:"released"}),!e.released&&(0,s.jsx)(v.Z,{disabled:e.releaseTime>q,onClick:function(){return U(e.vestingId)},variant:"primary",children:"unlock"})]})]},n)}))})]})})}),[V,N,q]),A=(0,d.useMemo)((function(){if(Z)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"wallet address:"}),(0,s.jsx)(x.Z,{"aria-label":"address",value:t,disabled:!0})]}),(0,s.jsxs)(h.Z,{className:"mb-3",children:[(0,s.jsx)(h.Z.Text,{style:Y,children:"chain:"}),(0,s.jsx)(x.Z,{"aria-label":"chain",value:parseInt(e.networkId,16),disabled:!0})]}),z]})}),[t,V,q]),J=C(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return t=u._2.connect(P,Z.getSigner()),e.next=5,t.vcmap(n);case 5:if(r=e.sent,$({recived:r.recived,amount:r.amount,cliffMonth:r.cliffMonth,vestingMonth:r.vestingMonth,unlockTGE:r.unlockTGE,beneficiary:r.beneficiary,timeOfTGE:new Date(1e3*r.timeOfTGE.toNumber())}),!r.recived){e.next=10;break}return e.next=10,R(n);case 10:case"end":return e.stop()}}),e)}))),R=C(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,F.request((0,_.gql)(D()),{id:n}).then((function(e){return e.vcVestings}));case 4:t=e.sent,r=t.map((function(e){return{vestingId:p.O$.from(e.id),beneficiary:e.beneficiary,amount:p.O$.from(e.amount),releaseTime:new Date(1e3*parseInt(e.releaseTime)),released:e.released}})),M(r);case 7:case"end":return e.stop()}}),e)}))),X=(0,d.useCallback)(C(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Z){n.next=3;break}return console.warn("provider of undefined"),n.abrupt("return");case 3:return n.next=5,(0,l.f$)(Z,e.networkId);case 5:return n.next=7,Z.listAccounts();case 7:return t=n.sent,r(t[0]),n.next=11,J(t[0]);case 11:case"end":return n.stop()}}),n)}))),[Z]),K=function(){window.open("https://metamask.io/")},Q=(0,d.useMemo)((function(){return void 0===Z?(0,s.jsx)(m(),{height:"20%",type:"spokes",color:"#ccc",width:"20%"}):null===Z?(0,s.jsx)(v.Z,{onClick:K,variant:"primary",children:"please install metamask"}):(0,s.jsx)(v.Z,{onClick:X,variant:"primary",children:"Connect wallet"})}),[Z]);return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"Meland.ai(MELD) vest"}),(0,s.jsx)("meta",{name:"description",content:"Meland.ai vesting dashboard"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("div",{className:o().he,children:(0,s.jsx)("img",{className:o().logo,src:w.Z.src})}),(0,s.jsx)(O,{}),f&&(0,s.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"100px",height:"100px",transform:"translate(-50%, -50%)",zIndex:1001},children:(0,s.jsx)(m(),{height:"100%",type:"spokes",color:"#ccc",width:"100%"})}),(0,s.jsxs)("main",{className:o().main,children:[!t&&Q,t&&A]}),(0,s.jsx)("footer",{className:o().footer,children:(0,s.jsx)("a",{href:"https://meland.ai",target:"_blank",rel:"noopener noreferrer",children:"Powered by Meland.ai"})})]})}},30423:function(e){e.exports={warp:"ThankYouLater_warp__TP2cV"}}},function(e){e.O(0,[482,764,885,853,637,243,774,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);