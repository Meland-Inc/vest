(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(43576)}])},43576:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return B},default:function(){return W}});var r=t(28520),a=t.n(r),s=t(85893),i=t(9008),c=t(67852),o=t.n(c),l=t(28570),u=t(43889),d=t(67294),f=t(733),p=t.n(f),m=t(94184),x=t.n(m),h=/-(.)/g;var v=t(76792);const b=e=>{return e[0].toUpperCase()+(n=e,n.replace(h,(function(e,n){return n.toUpperCase()}))).slice(1);var n};var j=d.createContext({});const y=d.forwardRef((({id:e,bsPrefix:n,className:t,type:r="checkbox",isValid:a=!1,isInvalid:i=!1,as:c="input",...o},l)=>{const{controlId:u}=(0,d.useContext)(j);return n=(0,v.vE)(n,"form-check-input"),(0,s.jsx)(c,{...o,ref:l,type:r,id:e||u,className:x()(t,n,a&&"is-valid",i&&"is-invalid")})}));y.displayName="FormCheckInput";var w=y;const k=d.createContext(null);k.displayName="InputGroupContext";var g=k;const N=function(e,{displayName:n=b(e),Component:t,defaultProps:r}={}){const a=d.forwardRef((({className:n,bsPrefix:r,as:a=t||"div",...i},c)=>{const o=(0,v.vE)(r,e);return(0,s.jsx)(a,{ref:c,className:x()(n,o),...i})}));return a.defaultProps=r,a.displayName=n,a}("input-group-text",{Component:"span"}),T=d.forwardRef((({bsPrefix:e,size:n,hasValidation:t,className:r,as:a="div",...i},c)=>{e=(0,v.vE)(e,"input-group");const o=(0,d.useMemo)((()=>({})),[]);return(0,s.jsx)(g.Provider,{value:o,children:(0,s.jsx)(a,{ref:c,...i,className:x()(r,e,n&&`${e}-${n}`,t&&"has-validation")})})}));T.displayName="InputGroup";var E=Object.assign(T,{Text:N,Radio:e=>(0,s.jsx)(N,{children:(0,s.jsx)(w,{type:"radio",...e})}),Checkbox:e=>(0,s.jsx)(N,{children:(0,s.jsx)(w,{type:"checkbox",...e})})}),C=(t(42473),t(45697)),O=t.n(C);const _={type:O().string,tooltip:O().bool,as:O().elementType},P=d.forwardRef((({as:e="div",className:n,type:t="valid",tooltip:r=!1,...a},i)=>(0,s.jsx)(e,{...a,ref:i,className:x()(n,`${t}-${r?"tooltip":"feedback"}`)})));P.displayName="Feedback",P.propTypes=_;var I=P;const S=d.forwardRef((({bsPrefix:e,type:n,size:t,htmlSize:r,id:a,className:i,isValid:c=!1,isInvalid:o=!1,plaintext:l,readOnly:u,as:f="input",...p},m)=>{const{controlId:h}=(0,d.useContext)(j);let b;return e=(0,v.vE)(e,"form-control"),b=l?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${t}`]:t},(0,s.jsx)(f,{...p,type:n,size:r,ref:m,readOnly:u,id:a||h,className:x()(i,b,c&&"is-valid",o&&"is-invalid","color"===n&&`${e}-color`)})}));S.displayName="FormControl";var $=Object.assign(S,{Feedback:I});var M=d.forwardRef((({bsPrefix:e,className:n,striped:t,bordered:r,borderless:a,hover:i,size:c,variant:o,responsive:l,...u},d)=>{const f=(0,v.vE)(e,"table"),p=x()(n,f,o&&`${f}-${o}`,c&&`${f}-${c}`,t&&`${f}-striped`,r&&`${f}-bordered`,a&&`${f}-borderless`,i&&`${f}-hover`),m=(0,s.jsx)("table",{...u,className:p,ref:d});if(l){let e=`${f}-responsive`;return"string"===typeof l&&(e=`${e}-${l}`),(0,s.jsx)("div",{className:e,children:m})}return m})),D=t(93680),G=(t(98336),t(35553)),F=t(70620),R=t(30381),Y=t.n(R);function z(e,n,t,r,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,a)}function U(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function i(e){z(s,r,a,i,c,"next",e)}function c(e){z(s,r,a,i,c,"throw",e)}i(void 0)}))}}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Z(e,n,t[n])}))}return e}"0x839F84E10218Bf498447C320999929D8270702A9".toLowerCase();var L="0x7105DD63586727763420e4eFac70aaB73723676A".toLowerCase(),V={width:"10vw",justifyContent:"flex-end"},B=!0,W=function(e){var n=(0,d.useState)(""),t=n[0],r=n[1],c=(0,d.useState)(!1),f=c[0],m=c[1],x=(0,d.useState)(void 0),h=x[0],v=x[1],b=(0,d.useState)([]),j=b[0],y=b[1],w=(0,d.useState)(new Date),k=w[0],g=w[1];(0,d.useEffect)((function(){var e=window.setInterval((function(){g(new Date)}),1e3);return function(){return window.clearInterval(e)}}));var N=(0,d.useState)(),T=N[0],C=N[1];(0,d.useEffect)((function(){(0,l.UJ)().then((function(e){v(e||null)}))}),[1]);var O=(0,d.useCallback)(U(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=u._2.connect(L,h.getSigner()),e.next=6,n.reviceTGE();case 6:return t=e.sent,m(!0),e.next=10,t.wait();case 10:return e.next=12,R(T.beneficiary);case 12:C(A({},T,{recived:!0})),m(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),window.alert(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,16]])}))),[h,T]),_=(0,d.useCallback)(U(a().mark((function e(n){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return r=u._2.connect(L,h.getSigner()),e.next=5,r.release(n);case 5:return s=e.sent,e.next=8,s.wait();case 8:return e.next=10,R(t);case 10:case"end":return e.stop()}}),e)}))),[h,T,t]),P=(0,d.useMemo)((function(){return T&&!T.recived?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"amount total:"}),(0,s.jsx)($,{"aria-label":"amount",value:(0,G.dF)(T.amount),disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"cliff month:"}),(0,s.jsx)($,{"aria-label":"amount",value:"".concat(T.cliffMonth.toNumber()," month"),disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"vesting month:"}),(0,s.jsx)($,{"aria-label":"amount",value:"".concat(T.vestingMonth.toNumber()," month"),disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"cliffMonth:"}),(0,s.jsx)($,{"aria-label":"amount",value:"".concat(T.unlockTGE.toNumber(),"%"),disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"TGE Time:"}),(0,s.jsx)($,{"aria-label":"amount",value:"".concat(Y()(T.timeOfTGE).format("YYYY/MM/DD h:mm:ss")),disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[T.timeOfTGE>k&&(0,s.jsx)(D.Z,{disabled:!0,onClick:O,variant:"primary",children:Y()(k).to(T.timeOfTGE,!0)}),T.timeOfTGE<k&&(0,s.jsx)(D.Z,{onClick:O,variant:"primary",children:"recive TGE and start vesting"})]})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(M,{striped:!0,bordered:!0,hover:!0,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Unlock time"}),(0,s.jsx)("th",{children:"amount"}),(0,s.jsx)("th",{children:"unlocked"})]})}),(0,s.jsx)("tbody",{children:j.map((function(e,n){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{width:"200px"},children:Y()(e.releaseTime).format("YYYY/MM/DD h:mm:ss")}),(0,s.jsx)("td",{children:(0,G.dF)(e.amount)}),(0,s.jsxs)("td",{children:[e.released&&(0,s.jsx)("span",{children:"released"}),!e.released&&(0,s.jsx)(D.Z,{disabled:e.releaseTime>k,onClick:function(){return _(e.vestingId)},variant:"primary",children:"unlock"})]})]},n)}))})]})})}),[T,j,k]),I=(0,d.useMemo)((function(){if(h)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"wallet address:"}),(0,s.jsx)($,{"aria-label":"address",value:t,disabled:!0})]}),(0,s.jsxs)(E,{className:"mb-3",children:[(0,s.jsx)(E.Text,{style:V,children:"chain:"}),(0,s.jsx)($,{"aria-label":"chain",value:parseInt(e.networkId,16),disabled:!0})]}),P]})}),[t,T,k]),S=U(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return t=u._2.connect(L,h.getSigner()),e.next=5,t.vcmap(n);case 5:if(r=e.sent,C({recived:r.recived,amount:r.amount,cliffMonth:r.cliffMonth,vestingMonth:r.vestingMonth,unlockTGE:r.unlockTGE,beneficiary:r.beneficiary,timeOfTGE:new Date(1e3*r.timeOfTGE.toNumber())}),!r.recived){e.next=10;break}return e.next=10,R(n);case 10:case"end":return e.stop()}}),e)}))),R=U(a().mark((function e(n){var t,r,s,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return t=u._2.connect(L,h.getSigner()),r=t.filters.TokenVestingAdded(void 0,n),e.next=6,t.queryFilter(r);case 6:return s=e.sent,i=s.map(U(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.vestings(n.args.vestingId);case 2:return r=e.sent,e.abrupt("return",{vestingId:n.args.vestingId,beneficiary:r.beneficiary,amount:r.amount,releaseTime:new Date(1e3*r.releaseTime.toNumber()),released:r.released});case 4:case"end":return e.stop()}}),e)})))),e.next=10,Promise.all(i);case 10:c=e.sent,y(c);case 12:case"end":return e.stop()}}),e)}))),z=(0,d.useCallback)(U(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h){n.next=3;break}return console.warn("provider of undefined"),n.abrupt("return");case 3:return n.next=5,(0,l.f$)(h,e.networkId);case 5:return n.next=7,h.listAccounts();case 7:return t=n.sent,r(t[0]),n.next=11,S(t[0]);case 11:case"end":return n.stop()}}),n)}))),[h]),Z=function(){window.open("https://metamask.io/")},B=(0,d.useMemo)((function(){return void 0===h?(0,s.jsx)(p(),{height:"20%",type:"spokes",color:"#ccc",width:"20%"}):null===h?(0,s.jsx)(D.Z,{onClick:Z,variant:"primary",children:"please install metamask"}):(0,s.jsx)(D.Z,{onClick:z,variant:"primary",children:"Connect wallet"})}),[h]);return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"Meland.ai(MELD) vest"}),(0,s.jsx)("meta",{name:"description",content:"Meland.ai vesting dashboard"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("div",{className:o().he,children:(0,s.jsx)("img",{className:o().logo,src:F.Z.src})}),f&&(0,s.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"100px",height:"100px",transform:"translate(-50%, -50%)",zIndex:1001},children:(0,s.jsx)(p(),{height:"100%",type:"spokes",color:"#ccc",width:"100%"})}),(0,s.jsxs)("main",{className:o().main,children:[!t&&B,t&&I]}),(0,s.jsx)("footer",{className:o().footer,children:(0,s.jsx)("a",{href:"https://meland.ai",target:"_blank",rel:"noopener noreferrer",children:"Powered by Meland.ai"})})]})}},92703:function(e,n,t){"use strict";var r=t(50414);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,s,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},45697:function(e,n,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42473:function(e){"use strict";var n=function(){};e.exports=n}},function(e){e.O(0,[482,764,885,853,243,774,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);