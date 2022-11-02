(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{8773:function(e,t,n){"use strict";n.d(t,{zx:function(){return h}});var r=n(959),o=n(1815),a=n(3589),l=n(1332),i=n(4007),c=n(3081),s=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,[d,f]=(0,i.k)({strict:!1,name:"ButtonGroupContext"});function m(e){let{children:t,className:n,...o}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,i=s("chakra-button__icon",n);return r.createElement(a.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:i},l)}function p(e){let{label:t,placement:n,spacing:o="0.5rem",children:l=r.createElement(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:u,...d}=e,f=s("chakra-button__spinner",i),m="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?o:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,m,o]);return r.createElement(a.m$.div,{className:f,...d,__css:p},l)}m.displayName="ButtonIcon",p.displayName="ButtonSpinner";var h=(0,a.Gp)((e,t)=>{let n=f(),i=(0,a.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:d,isActive:m,children:h,leftIcon:y,rightIcon:v,loadingText:g,iconSpacing:x="0.5rem",type:_,spinner:E,spinnerPlacement:w="start",className:k,as:S,...N}=(0,l.Lr)(e),j=(0,r.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}},[i,n]),{ref:C,type:O}=function(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}(S),z={rightIcon:v,leftIcon:y,iconSpacing:x,children:h};return r.createElement(a.m$.button,{disabled:c||d,ref:(0,o.qq)(t,C),as:S,type:_??O,"data-active":u(m),"data-loading":u(d),__css:j,className:s("chakra-button",k),...N},d&&"start"===w&&r.createElement(p,{className:"chakra-button__spinner--start",label:g,placement:"start",spacing:x},E),d?g||r.createElement(a.m$.span,{opacity:0},r.createElement(b,{...z})):r.createElement(b,{...z}),d&&"end"===w&&r.createElement(p,{className:"chakra-button__spinner--end",label:g,placement:"end",spacing:x},E))});function b(e){let{leftIcon:t,rightIcon:n,children:o,iconSpacing:a}=e;return r.createElement(r.Fragment,null,t&&r.createElement(m,{marginEnd:a},t),o,n&&r.createElement(m,{marginStart:a},n))}h.displayName="Button",(0,a.Gp)(function(e,t){let{size:n,colorScheme:o,variant:l,className:i,spacing:c="0.5rem",isAttached:u,isDisabled:f,...m}=e,p=s("chakra-button__group",i),h=(0,r.useMemo)(()=>({size:n,colorScheme:o,variant:l,isDisabled:f}),[n,o,l,f]),b={display:"inline-flex"};return b=u?{...b,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...b,"& > *:not(style) ~ *:not(style)":{marginStart:c}},r.createElement(d,{value:h},r.createElement(a.m$.div,{ref:t,role:"group",__css:b,className:p,"data-attached":u?"":void 0,...m}))}).displayName="ButtonGroup",(0,a.Gp)((e,t)=>{let{icon:n,children:o,isRound:a,"aria-label":l,...i}=e,c=n||o,s=(0,r.isValidElement)(c)?(0,r.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(h,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":l,...i},s)}).displayName="IconButton"},1815:function(e,t,n){"use strict";n.d(t,{lq:function(){return o},qq:function(){return a}});var r=n(959);function o(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function a(...e){return(0,r.useMemo)(()=>o(...e),e)}},9406:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(2545)}])},2182:function(e,t,n){"use strict";n.d(t,{m:function(){return s},x:function(){return u}});var r=n(1527),o=n(3589),a=n(8210),l=n(1098),i=n(7118);let c=e=>{let t=t=>{let n=(0,o.mq)("Icon");return(0,r.jsx)(a.JO,{__css:n,as:e,...t})};return t},s=c(l.w5k),u=c(i.YiX)},2545:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return b}});var r=n(1527),o=n(6597),a=n(6853),l=n(5432),i=n.n(l),c=n(5519),s=n(959),u=n(8773),d=n(2182);let f=()=>window.location.href.split("/").slice(0,-1).join("/"),m=e=>{let{slackClientId:t,slackUserScopes:n,onSuccess:o,onFailure:a}=e;return(0,r.jsx)(u.zx,{variant:"outline",boxShadow:"md",size:"lg",fontSize:"xl",width:"20rem",_hover:{boxShadow:"base"},onClick:function(){let e=function(){let e=screen.width/2-200,r=screen.height/2-300,o=f(),a="https://slack.com/oauth/authorize/?client_id=".concat(t,"&scope=").concat(n,"&redirect_uri=").concat(o);return window.open(a,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no width=400, height=600, top="+r+", left="+e)}();e&&function(e){let t=setInterval(()=>{(!e||e.closed||void 0===e.closed)&&(clearInterval(t),a("Popup has been closed by user"));try{if(!e.location.hostname.includes("slack.com")&&e.location.search){let n=new URLSearchParams(e.location.search),r=n.get("code");if(clearInterval(t),e.close(),r){let l=f();return o({code:r,redirectUri:l})}a&&a((null==n?void 0:n.get("error"))||"")}}catch(i){console.error(i)}},500)}(e)},rightIcon:(0,r.jsx)(d.m,{}),children:"Login with Slack"})};var p=n(7868),h=!0;function b(e){let{slackClientId:t,slackClientSecret:n,slackUserScopes:l}=e,[u,d]=(0,s.useState)(""),{data:f,isLoading:h}=(0,p.os)(),{mutateAsync:b}=(0,p.SA)(t,n),y=(0,c.useRouter)();(0,s.useEffect)(()=>{!async function(){!h&&(null==f?void 0:f.ok)&&y.replace("/")}()},[h,f,y]);let v=(0,s.useCallback)(async e=>{let{code:t,redirectUri:n}=e;await b({code:t,redirectUri:n}),y.replace("/")},[b,y]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Login"})}),(0,r.jsxs)(o.gC,{children:[(0,r.jsx)(o.X6,{fontSize:"5xl",bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",marginBottom:"1rem",children:"Simple Slack"}),(0,r.jsxs)(o.xu,{width:"fit-content",margin:"auto",children:[(0,r.jsx)(m,{slackClientId:t,slackUserScopes:l,onSuccess:v,onFailure:d}),u&&(0,r.jsxs)(a.bZ,{status:"error",variant:"subtle",borderRadius:"6px",children:[(0,r.jsx)(a.zM,{}),(0,r.jsxs)(o.kC,{direction:"column",children:[(0,r.jsx)(a.Cd,{children:"Connection failed"}),(0,r.jsx)(a.X,{children:u})]})]})]})]})]})}},5432:function(e,t,n){e.exports=n(9483)},9139:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(959),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function c(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,s=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[28,525,774,888,179],function(){return e(e.s=9406)}),_N_E=e.O()}]);