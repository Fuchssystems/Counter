import{U as Ne,V as de,c as b,r as M,h as y,G as Ue,D as Ge,q as ke,E as Xe,g as D,I as F,J as ne,p as ie,H as Ce,W as Ye,X as Ee,Y as fe,u as G,Z as ve,w as $,o as Se,t as Q,_ as Je,v as oe,$ as Ze,a0 as U,a as et,a1 as tt,a2 as nt,a3 as ot,a4 as lt,a5 as Te,a6 as qe,l as ae,a7 as it,a8 as at,a9 as ut}from"./index.26463989.js";const rt=[null,document,document.body,document.scrollingElement,document.documentElement];function st(e,n){let t=Ne(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return rt.includes(t)?window:t}function Rt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Qt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let N;function ct(){if(N!==void 0)return N;const e=document.createElement("p"),n=document.createElement("div");de(e,{width:"100%",height:"200px"}),de(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),N=t-o,N}function jt(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const He={dark:{type:Boolean,default:null}};function Pe(e,n){return b(()=>e.dark===null?n.dark.isActive:e.dark)}function dt(e,n){const t=M(null),o=b(()=>e.disable===!0?null:y("span",{ref:t,class:"no-outline",tabindex:-1}));function l(u){const i=n.value;u!==void 0&&u.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():t.value!==null&&(u===void 0||i!==null&&i.contains(u.target)===!0)&&t.value.focus()}return{refocusTargetEl:o,refocusTarget:l}}const ft={name:String};function vt(e={}){return(n,t,o)=>{n[t](y("input",{class:"hidden"+(o||""),...e.value}))}}function Kt(e){return b(()=>e.name||e.for)}var ht={xs:30,sm:35,md:40,lg:50,xl:60};const Ve={...He,...Xe,...ft,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},$e=["update:modelValue"];function Me(e,n){const{props:t,slots:o,emit:l,proxy:u}=D(),{$q:i}=u,s=Pe(t,i),f=M(null),{refocusTargetEl:d,refocusTarget:c}=dt(t,f),x=Ue(t,ht),g=b(()=>t.val!==void 0&&Array.isArray(t.modelValue)),a=b(()=>{const m=F(t.val);return g.value===!0?t.modelValue.findIndex(T=>F(T)===m):-1}),r=b(()=>g.value===!0?a.value>-1:F(t.modelValue)===F(t.trueValue)),C=b(()=>g.value===!0?a.value===-1:F(t.modelValue)===F(t.falseValue)),E=b(()=>r.value===!1&&C.value===!1),P=b(()=>t.disable===!0?-1:t.tabindex||0),h=b(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(s.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),p=b(()=>{const m=r.value===!0?"truthy":C.value===!0?"falsy":"indet",T=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?r.value===!0:C.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${m}${T}`}),q=b(()=>{const m={type:"checkbox"};return t.name!==void 0&&Object.assign(m,{".checked":r.value,"^checked":r.value===!0?"checked":void 0,name:t.name,value:g.value===!0?t.val:t.trueValue}),m}),w=vt(q),V=b(()=>{const m={tabindex:P.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":E.value===!0?"mixed":r.value===!0?"true":"false"};return t.disable===!0&&(m["aria-disabled"]="true"),m});function k(m){m!==void 0&&(ne(m),c(m)),t.disable!==!0&&l("update:modelValue",S(),m)}function S(){if(g.value===!0){if(r.value===!0){const m=t.modelValue.slice();return m.splice(a.value,1),m}return t.modelValue.concat([t.val])}if(r.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(C.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function H(m){(m.keyCode===13||m.keyCode===32)&&ne(m)}function j(m){(m.keyCode===13||m.keyCode===32)&&k(m)}const K=n(r,E);return Object.assign(u,{toggle:k}),()=>{const m=K();t.disable!==!0&&w(m,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const T=[y("div",{class:p.value,style:x.value,"aria-hidden":"true"},m)];d.value!==null&&T.push(d.value);const O=t.label!==void 0?Ge(o.default,[t.label]):ke(o.default);return O!==void 0&&T.push(y("div",{class:`q-${e}__label q-anchor--skip`},O)),y("div",{ref:f,class:h.value,...V.value,onClick:k,onKeydown:H,onKeyup:j},T)}}const mt=y("div",{key:"svg",class:"q-checkbox__bg absolute"},[y("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[y("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),y("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Nt=ie({name:"QCheckbox",props:Ve,emits:$e,setup(e){function n(t,o){const l=b(()=>(t.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>l.value!==null?[y("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[y(Ce,{class:"q-checkbox__icon",name:l.value})])]:[mt]}return Me("checkbox",n)}}),Ut=ie({name:"QToggle",props:{...Ve,icon:String,iconColor:String},emits:$e,setup(e){function n(t,o){const l=b(()=>(t.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),u=b(()=>t.value===!0?e.iconColor:null);return()=>[y("div",{class:"q-toggle__track"}),y("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},l.value!==void 0?[y(Ce,{name:l.value,color:u.value})]:void 0)]}return Me("toggle",n)}});function gt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ye.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const bt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function pt({showing:e,avoidEmit:n,configureAnchorEl:t}){const{props:o,proxy:l,emit:u}=D(),i=M(null);let s=null;function f(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};t===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Ee(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),fe(a),G(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:fe,mobileTouch(a){if(d.mobileCleanup(a),f(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const r=a.target;ve(d,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&gt()}}),t=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ve(d,"anchor",r)});function c(){Je(d,"anchor")}function x(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;t()}function g(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)x(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,t()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return $(()=>o.contextMenu,a=>{i.value!==null&&(c(),t(a))}),$(()=>o.target,()=>{i.value!==null&&c(),g()}),$(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?c():t())}),Se(()=>{g(),n!==!0&&o.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),Q(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:i,canShow:f,anchorEvents:d}}function xt(e,n){const t=M(null);let o;function l(s,f){const d=`${f!==void 0?"add":"remove"}EventListener`,c=f!==void 0?f:o;s!==window&&s[d]("scroll",c,oe.passive),window[d]("scroll",c,oe.passive),o=f}function u(){t.value!==null&&(l(t.value),t.value=null)}const i=$(()=>e.noParentEvent,()=>{t.value!==null&&(u(),n())});return Q(i),{localScrollTarget:t,unconfigureScrollTarget:u,changeScrollEvent:l}}const wt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},yt=["beforeShow","show","beforeHide","hide"];function kt({showing:e,canShow:n,hideOnRouteChange:t,handleShow:o,handleHide:l,processOnMount:u}){const i=D(),{props:s,emit:f,proxy:d}=i;let c;function x(h){e.value===!0?r(h):g(h)}function g(h){if(s.disable===!0||h!==void 0&&h.qAnchorHandled===!0||n!==void 0&&n(h)!==!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(f("update:modelValue",!0),c=h,G(()=>{c===h&&(c=void 0)})),(s.modelValue===null||p===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,f("beforeShow",h),o!==void 0?o(h):f("show",h))}function r(h){if(s.disable===!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(f("update:modelValue",!1),c=h,G(()=>{c===h&&(c=void 0)})),(s.modelValue===null||p===!1)&&C(h)}function C(h){e.value!==!1&&(e.value=!1,f("beforeHide",h),l!==void 0?l(h):f("hide",h))}function E(h){s.disable===!0&&h===!0?s["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:C)(c)}$(()=>s.modelValue,E),t!==void 0&&Ze(i)===!0&&$(()=>d.$route.fullPath,()=>{t.value===!0&&e.value===!0&&r()}),u===!0&&Se(()=>{E(s.modelValue)});const P={show:g,hide:r,toggle:x};return Object.assign(d,P),P}let W=[],R=[];function We(e){R=R.filter(n=>n!==e)}function Ct(e){We(e),R.push(e)}function he(e){We(e),R.length===0&&W.length!==0&&(W[W.length-1](),W=[])}function Et(e){R.length===0?e():W.push(e)}function Gt(e){W=W.filter(n=>n!==e)}const I=[];function Xt(e){return I.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function _e(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return U(e)}else if(e.__qPortal===!0){const t=U(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(n),t):e}e=U(e)}while(e!=null)}function Yt(e,n,t){for(;t!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(t--,e.$options.name==="QMenu"){e=_e(e,n);continue}e.hide(n)}e=U(e)}}function St(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Tt(e,n,t,o){const l=M(!1),u=M(!1);let i=null;const s={},f=o==="dialog"&&St(e);function d(x){if(x===!0){he(s),u.value=!0;return}u.value=!1,l.value===!1&&(f===!1&&i===null&&(i=ot(!1,o)),l.value=!0,I.push(e.proxy),Ct(s))}function c(x){if(u.value=!1,x!==!0)return;he(s),l.value=!1;const g=I.indexOf(e.proxy);g!==-1&&I.splice(g,1),i!==null&&(lt(i),i=null)}return et(()=>{c(!0)}),e.proxy.__qPortal=!0,tt(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:c,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>f===!0?t():l.value===!0?[y(nt,{to:i},t())]:void 0}}const qt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ht(e,n=()=>{},t=()=>{}){return{transitionProps:b(()=>{const o=`q-transition--${e.transitionShow||n()}`,l=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Pt(){let e;const n=D();function t(){e=void 0}return Te(t),Q(t),{removeTick:t,registerTick(o){e=o,G(()=>{e===o&&(qe(n)===!1&&e(),e=void 0)})}}}function Vt(){let e=null;const n=D();function t(){e!==null&&(clearTimeout(e),e=null)}return Te(t),Q(t),{removeTimeout:t,registerTimeout(o,l){t(),qe(n)===!1&&(e=setTimeout(o,l))}}}const _=[];let B;function $t(e){B=e.keyCode===27}function Mt(){B===!0&&(B=!1)}function Wt(e){B===!0&&(B=!1,Ee(e,27)===!0&&_[_.length-1](e))}function Le(e){window[e]("keydown",$t),window[e]("blur",Mt),window[e]("keyup",Wt),B=!1}function _t(e){ae.is.desktop===!0&&(_.push(e),_.length===1&&Le("addEventListener"))}function me(e){const n=_.indexOf(e);n>-1&&(_.splice(n,1),_.length===0&&Le("removeEventListener"))}const L=[];function Ae(e){L[L.length-1](e)}function Lt(e){ae.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",Ae))}function At(e){const n=L.indexOf(e);n>-1&&(L.splice(n,1),L.length===0&&document.body.removeEventListener("focusin",Ae))}const{notPassiveCapture:X}=oe,A=[];function Y(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let t=I.length-1;for(;t>=0;){const o=I[t].$;if(o.type.name==="QTooltip"){t--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;t--}for(let o=A.length-1;o>=0;o--){const l=A[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ft(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",Y,X),document.addEventListener("touchstart",Y,X))}function ge(e){const n=A.findIndex(t=>t===e);n>-1&&(A.splice(n,1),A.length===0&&(document.removeEventListener("mousedown",Y,X),document.removeEventListener("touchstart",Y,X)))}let be,pe;function xe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function It(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const le={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{le[`${e}#ltr`]=e,le[`${e}#rtl`]=e});function we(e,n){const t=e.split(" ");return{vertical:t[0],horizontal:le[`${t[1]}#${n===!0?"rtl":"ltr"}`]}}function Bt(e,n){let{top:t,left:o,right:l,bottom:u,width:i,height:s}=e.getBoundingClientRect();return n!==void 0&&(t-=n[1],o-=n[0],u+=n[1],l+=n[0],i+=n[0],s+=n[1]),{top:t,bottom:u,height:s,left:o,right:l,width:i,middle:o+(l-o)/2,center:t+(u-t)/2}}function Dt(e,n,t){let{top:o,left:l}=e.getBoundingClientRect();return o+=n.top,l+=n.left,t!==void 0&&(o+=t[1],l+=t[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Ot(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ye(e,n,t,o){return{top:e[t.vertical]-n[o.vertical],left:e[t.horizontal]-n[o.horizontal]}}function Fe(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Fe(e,n+1)},10);return}const{targetEl:t,offset:o,anchorEl:l,anchorOrigin:u,selfOrigin:i,absoluteOffset:s,fit:f,cover:d,maxHeight:c,maxWidth:x}=e;if(ae.is.ios===!0&&window.visualViewport!==void 0){const V=document.body.style,{offsetLeft:k,offsetTop:S}=window.visualViewport;k!==be&&(V.setProperty("--q-pe-left",k+"px"),be=k),S!==pe&&(V.setProperty("--q-pe-top",S+"px"),pe=S)}const{scrollLeft:g,scrollTop:a}=t,r=s===void 0?Bt(l,d===!0?[0,0]:o):Dt(l,s,o);Object.assign(t.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:x||"100vw",maxHeight:c||"100vh",visibility:"visible"});const{offsetWidth:C,offsetHeight:E}=t,{elWidth:P,elHeight:h}=f===!0||d===!0?{elWidth:Math.max(r.width,C),elHeight:d===!0?Math.max(r.height,E):E}:{elWidth:C,elHeight:E};let p={maxWidth:x,maxHeight:c};(f===!0||d===!0)&&(p.minWidth=r.width+"px",d===!0&&(p.minHeight=r.height+"px")),Object.assign(t.style,p);const q=Ot(P,h);let w=ye(r,q,u,i);if(s===void 0||o===void 0)te(w,r,q,u,i);else{const{top:V,left:k}=w;te(w,r,q,u,i);let S=!1;if(w.top!==V){S=!0;const H=2*o[1];r.center=r.top-=H,r.bottom-=H+2}if(w.left!==k){S=!0;const H=2*o[0];r.middle=r.left-=H,r.right-=H+2}S===!0&&(w=ye(r,q,u,i),te(w,r,q,u,i))}p={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(p.maxHeight=w.maxHeight+"px",r.height>w.maxHeight&&(p.minHeight=p.maxHeight)),w.maxWidth!==void 0&&(p.maxWidth=w.maxWidth+"px",r.width>w.maxWidth&&(p.minWidth=p.maxWidth)),Object.assign(t.style,p),t.scrollTop!==a&&(t.scrollTop=a),t.scrollLeft!==g&&(t.scrollLeft=g)}function te(e,n,t,o,l){const u=t.bottom,i=t.right,s=ct(),f=window.innerHeight-s,d=document.body.clientWidth;if(e.top<0||e.top+u>f)if(l.vertical==="center")e.top=n[o.vertical]>f/2?Math.max(0,f-u):0,e.maxHeight=Math.min(u,f);else if(n[o.vertical]>f/2){const c=Math.min(f,o.vertical==="center"?n.center:o.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(u,c),e.top=Math.max(0,c-u)}else e.top=Math.max(0,o.vertical==="center"?n.center:o.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(u,f-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=n[o.horizontal]>d/2?Math.max(0,d-i):0;else if(n[o.horizontal]>d/2){const c=Math.min(d,o.horizontal==="middle"?n.middle:o.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?n.middle:o.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,d-e.left)}var Jt=ie({name:"QMenu",inheritAttrs:!1,props:{...bt,...wt,...He,...qt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xe},self:{type:String,validator:xe},offset:{type:Array,validator:It},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...yt,"click","escapeKey"],setup(e,{slots:n,emit:t,attrs:o}){let l=null,u,i,s;const f=D(),{proxy:d}=f,{$q:c}=d,x=M(null),g=M(!1),a=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=Pe(e,c),{registerTick:C,removeTick:E}=Pt(),{registerTimeout:P}=Vt(),{transitionProps:h,transitionStyle:p}=Ht(e),{localScrollTarget:q,changeScrollEvent:w,unconfigureScrollTarget:V}=xt(e,se),{anchorEl:k,canShow:S}=pt({showing:g}),{hide:H}=kt({showing:g,canShow:S,handleShow:Oe,handleHide:ze,hideOnRouteChange:a,processOnMount:!0}),{showPortal:j,hidePortal:K,renderPortal:m}=Tt(f,x,Qe,"menu"),T={anchorEl:k,innerRef:x,onClickOutside(v){if(e.persistent!==!0&&g.value===!0)return H(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&ne(v),!0}},O=b(()=>we(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),Ie=b(()=>e.cover===!0?O.value:we(e.self||"top start",c.lang.rtl)),Be=b(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),De=b(()=>e.autoClose===!0?{onClick:Re}:{}),ue=b(()=>g.value===!0&&e.persistent!==!0);$(ue,v=>{v===!0?(_t(Z),Ft(T)):(me(Z),ge(T))});function J(){Et(()=>{let v=x.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function Oe(v){if(l=e.noRefocus===!1?document.activeElement:null,Lt(ce),j(),se(),u=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const ee=it(v);if(ee.left!==void 0){const{top:je,left:Ke}=k.value.getBoundingClientRect();u={left:ee.left-Ke,top:ee.top-je}}}i===void 0&&(i=$(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,z)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{z(),e.noFocus!==!0&&J()}),P(()=>{c.platform.is.ios===!0&&(s=e.autoClose,x.value.click()),z(),j(!0),t("show",v)},e.transitionDuration)}function ze(v){E(),K(),re(!0),l!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),P(()=>{K(!0),t("hide",v)},e.transitionDuration)}function re(v){u=void 0,i!==void 0&&(i(),i=void 0),(v===!0||g.value===!0)&&(At(ce),V(),ge(T),me(Z)),v!==!0&&(l=null)}function se(){(k.value!==null||e.scrollTarget!==void 0)&&(q.value=st(k.value,e.scrollTarget),w(q.value,z))}function Re(v){s!==!0?(_e(d,v),t("click",v)):s=!1}function ce(v){ue.value===!0&&e.noFocus!==!0&&ut(x.value,v.target)!==!0&&J()}function Z(v){t("escapeKey"),H(v)}function z(){Fe({targetEl:x.value,offset:e.offset,anchorEl:k.value,anchorOrigin:O.value,selfOrigin:Ie.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Qe(){return y(at,h.value,()=>g.value===!0?y("div",{role:"menu",...o,ref:x,tabindex:-1,class:["q-menu q-position-engine scroll"+Be.value,o.class],style:[o.style,p.value],...De.value},ke(n.default)):null)}return Q(re),Object.assign(d,{focus:J,updatePosition:z}),m}});export{Lt as A,_t as B,Xt as C,Yt as D,Nt as Q,Rt as a,Qt as b,ct as c,ft as d,Pe as e,dt as f,st as g,vt as h,Ut as i,Jt as j,Et as k,Kt as l,jt as m,wt as n,ht as o,qt as p,yt as q,Gt as r,Vt as s,Pt as t,He as u,Ht as v,Tt as w,kt as x,At as y,me as z};
