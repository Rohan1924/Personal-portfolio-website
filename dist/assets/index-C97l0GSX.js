(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function w3(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ah={exports:{}},_l={};var vx;function C3(){if(vx)return _l;vx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return _l.Fragment=t,_l.jsx=n,_l.jsxs=n,_l}var xx;function R3(){return xx||(xx=1,Ah.exports=C3()),Ah.exports}var R=R3(),wh={exports:{}},re={};var _x;function D3(){if(_x)return re;_x=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(F,at,vt){this.props=F,this.context=at,this.refs=M,this.updater=vt||b}_.prototype.isReactComponent={},_.prototype.setState=function(F,at){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,at,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=_.prototype;function D(F,at,vt){this.props=F,this.context=at,this.refs=M,this.updater=vt||b}var U=D.prototype=new N;U.constructor=D,T(U,_.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function A(F,at,vt){var wt=vt.ref;return{$$typeof:i,type:F,key:at,ref:wt!==void 0?wt:null,props:vt}}function L(F,at){return A(F.type,at,F.props)}function j(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function it(F){var at={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(vt){return at[vt]})}var st=/\/+/g;function ht(F,at){return typeof F=="object"&&F!==null&&F.key!=null?it(""+F.key):at.toString(36)}function ut(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(at){F.status==="pending"&&(F.status="fulfilled",F.value=at)},function(at){F.status==="pending"&&(F.status="rejected",F.reason=at)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function B(F,at,vt,wt,Vt){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var ft=!1;if(F===null)ft=!0;else switch(nt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(F.$$typeof){case i:case t:ft=!0;break;case g:return ft=F._init,B(ft(F._payload),at,vt,wt,Vt)}}if(ft)return Vt=Vt(F),ft=wt===""?"."+ht(F,0):wt,P(Vt)?(vt="",ft!=null&&(vt=ft.replace(st,"$&/")+"/"),B(Vt,at,vt,"",function(Ht){return Ht})):Vt!=null&&(j(Vt)&&(Vt=L(Vt,vt+(Vt.key==null||F&&F.key===Vt.key?"":(""+Vt.key).replace(st,"$&/")+"/")+ft)),at.push(Vt)),1;ft=0;var Lt=wt===""?".":wt+":";if(P(F))for(var Xt=0;Xt<F.length;Xt++)wt=F[Xt],nt=Lt+ht(wt,Xt),ft+=B(wt,at,vt,nt,Vt);else if(Xt=y(F),typeof Xt=="function")for(F=Xt.call(F),Xt=0;!(wt=F.next()).done;)wt=wt.value,nt=Lt+ht(wt,Xt++),ft+=B(wt,at,vt,nt,Vt);else if(nt==="object"){if(typeof F.then=="function")return B(ut(F),at,vt,wt,Vt);throw at=String(F),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function V(F,at,vt){if(F==null)return F;var wt=[],Vt=0;return B(F,wt,"","",function(nt){return at.call(vt,nt,Vt++)}),wt}function Q(F){if(F._status===-1){var at=F._result;at=at(),at.then(function(vt){(F._status===0||F._status===-1)&&(F._status=1,F._result=vt)},function(vt){(F._status===0||F._status===-1)&&(F._status=2,F._result=vt)}),F._status===-1&&(F._status=0,F._result=at)}if(F._status===1)return F._result.default;throw F._result}var St=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},_t={map:V,forEach:function(F,at,vt){V(F,function(){at.apply(this,arguments)},vt)},count:function(F){var at=0;return V(F,function(){at++}),at},toArray:function(F){return V(F,function(at){return at})||[]},only:function(F){if(!j(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return re.Activity=v,re.Children=_t,re.Component=_,re.Fragment=n,re.Profiler=o,re.PureComponent=D,re.StrictMode=s,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},re.cache=function(F){return function(){return F.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(F,at,vt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var wt=T({},F.props),Vt=F.key;if(at!=null)for(nt in at.key!==void 0&&(Vt=""+at.key),at)!G.call(at,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&at.ref===void 0||(wt[nt]=at[nt]);var nt=arguments.length-2;if(nt===1)wt.children=vt;else if(1<nt){for(var ft=Array(nt),Lt=0;Lt<nt;Lt++)ft[Lt]=arguments[Lt+2];wt.children=ft}return A(F.type,Vt,wt)},re.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},re.createElement=function(F,at,vt){var wt,Vt={},nt=null;if(at!=null)for(wt in at.key!==void 0&&(nt=""+at.key),at)G.call(at,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Vt[wt]=at[wt]);var ft=arguments.length-2;if(ft===1)Vt.children=vt;else if(1<ft){for(var Lt=Array(ft),Xt=0;Xt<ft;Xt++)Lt[Xt]=arguments[Xt+2];Vt.children=Lt}if(F&&F.defaultProps)for(wt in ft=F.defaultProps,ft)Vt[wt]===void 0&&(Vt[wt]=ft[wt]);return A(F,nt,Vt)},re.createRef=function(){return{current:null}},re.forwardRef=function(F){return{$$typeof:f,render:F}},re.isValidElement=j,re.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:Q}},re.memo=function(F,at){return{$$typeof:h,type:F,compare:at===void 0?null:at}},re.startTransition=function(F){var at=z.T,vt={};z.T=vt;try{var wt=F(),Vt=z.S;Vt!==null&&Vt(vt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(I,St)}catch(nt){St(nt)}finally{at!==null&&vt.types!==null&&(at.types=vt.types),z.T=at}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(F){return z.H.use(F)},re.useActionState=function(F,at,vt){return z.H.useActionState(F,at,vt)},re.useCallback=function(F,at){return z.H.useCallback(F,at)},re.useContext=function(F){return z.H.useContext(F)},re.useDebugValue=function(){},re.useDeferredValue=function(F,at){return z.H.useDeferredValue(F,at)},re.useEffect=function(F,at){return z.H.useEffect(F,at)},re.useEffectEvent=function(F){return z.H.useEffectEvent(F)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(F,at,vt){return z.H.useImperativeHandle(F,at,vt)},re.useInsertionEffect=function(F,at){return z.H.useInsertionEffect(F,at)},re.useLayoutEffect=function(F,at){return z.H.useLayoutEffect(F,at)},re.useMemo=function(F,at){return z.H.useMemo(F,at)},re.useOptimistic=function(F,at){return z.H.useOptimistic(F,at)},re.useReducer=function(F,at,vt){return z.H.useReducer(F,at,vt)},re.useRef=function(F){return z.H.useRef(F)},re.useState=function(F){return z.H.useState(F)},re.useSyncExternalStore=function(F,at,vt){return z.H.useSyncExternalStore(F,at,vt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.4",re}var yx;function qm(){return yx||(yx=1,wh.exports=D3()),wh.exports}var At=qm();const za=w3(At);var Ch={exports:{}},yl={},Rh={exports:{}},Dh={};var Sx;function L3(){return Sx||(Sx=1,(function(i){function t(B,V){var Q=B.length;B.push(V);t:for(;0<Q;){var St=Q-1>>>1,_t=B[St];if(0<o(_t,V))B[St]=V,B[Q]=_t,Q=St;else break t}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var V=B[0],Q=B.pop();if(Q!==V){B[0]=Q;t:for(var St=0,_t=B.length,F=_t>>>1;St<F;){var at=2*(St+1)-1,vt=B[at],wt=at+1,Vt=B[wt];if(0>o(vt,Q))wt<_t&&0>o(Vt,vt)?(B[St]=Vt,B[wt]=Q,St=wt):(B[St]=vt,B[at]=Q,St=at);else if(wt<_t&&0>o(Vt,Q))B[St]=Vt,B[wt]=Q,St=wt;else break t}}return V}function o(B,V){var Q=B.sortIndex-V.sortIndex;return Q!==0?Q:B.id-V.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,v=null,x=3,y=!1,b=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var V=n(h);V!==null;){if(V.callback===null)s(h);else if(V.startTime<=B)s(h),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(h)}}function P(B){if(T=!1,U(B),!b)if(n(p)!==null)b=!0,I||(I=!0,it());else{var V=n(h);V!==null&&ut(P,V.startTime-B)}}var I=!1,z=-1,G=5,A=-1;function L(){return M?!0:!(i.unstable_now()-A<G)}function j(){if(M=!1,I){var B=i.unstable_now();A=B;var V=!0;try{t:{b=!1,T&&(T=!1,N(z),z=-1),y=!0;var Q=x;try{e:{for(U(B),v=n(p);v!==null&&!(v.expirationTime>B&&L());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var _t=St(v.expirationTime<=B);if(B=i.unstable_now(),typeof _t=="function"){v.callback=_t,U(B),V=!0;break e}v===n(p)&&s(p),U(B)}else s(p);v=n(p)}if(v!==null)V=!0;else{var F=n(h);F!==null&&ut(P,F.startTime-B),V=!1}}break t}finally{v=null,x=Q,y=!1}V=void 0}}finally{V?it():I=!1}}}var it;if(typeof D=="function")it=function(){D(j)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ht=st.port2;st.port1.onmessage=j,it=function(){ht.postMessage(null)}}else it=function(){_(j,0)};function ut(B,V){z=_(function(){B(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_next=function(B){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var Q=x;x=V;try{return B()}finally{x=Q}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=x;x=B;try{return V()}finally{x=Q}},i.unstable_scheduleCallback=function(B,V,Q){var St=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?St+Q:St):Q=St,B){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Q+_t,B={id:g++,callback:V,priorityLevel:B,startTime:Q,expirationTime:_t,sortIndex:-1},Q>St?(B.sortIndex=Q,t(h,B),n(p)===null&&B===n(h)&&(T?(N(z),z=-1):T=!0,ut(P,Q-St))):(B.sortIndex=_t,t(p,B),b||y||(b=!0,I||(I=!0,it()))),B},i.unstable_shouldYield=L,i.unstable_wrapCallback=function(B){var V=x;return function(){var Q=x;x=V;try{return B.apply(this,arguments)}finally{x=Q}}}})(Dh)),Dh}var Mx;function N3(){return Mx||(Mx=1,Rh.exports=L3()),Rh.exports}var Lh={exports:{}},Hn={};var bx;function U3(){if(bx)return Hn;bx=1;var i=qm();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(p,h,null,g)},Hn.flushSync=function(p){var h=u.T,g=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=h,s.p=g,s.d.f()}},Hn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Hn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Hn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Hn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Hn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Hn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Hn.requestFormReset=function(p){s.d.r(p)},Hn.unstable_batchedUpdates=function(p,h){return p(h)},Hn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.4",Hn}var Ex;function P3(){if(Ex)return Lh.exports;Ex=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Lh.exports=U3(),Lh.exports}var Tx;function O3(){if(Tx)return yl;Tx=1;var i=N3(),t=qm(),n=P3();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function h(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){r=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return p(d),e;if(m===l)return p(d),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=d,l=m;else{for(var S=!1,w=d.child;w;){if(w===r){S=!0,r=d,l=m;break}if(w===l){S=!0,l=d,r=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===r){S=!0,r=m,l=d;break}if(w===l){S=!0,l=m,r=d;break}w=w.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case U:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return a=e.displayName||null,a!==null?a:ht(e.type)||"Memo";case G:a=e._payload,e=e._init;try{return ht(e(a))}catch{}}return null}var ut=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},St=[],_t=-1;function F(e){return{current:e}}function at(e){0>_t||(e.current=St[_t],St[_t]=null,_t--)}function vt(e,a){_t++,St[_t]=e.current,e.current=a}var wt=F(null),Vt=F(null),nt=F(null),ft=F(null);function Lt(e,a){switch(vt(nt,a),vt(Vt,e),vt(wt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?V1(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=V1(a),e=H1(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(wt),vt(wt,e)}function Xt(){at(wt),at(Vt),at(nt)}function Ht(e){e.memoizedState!==null&&vt(ft,e);var a=wt.current,r=H1(a,e.type);a!==r&&(vt(Vt,e),vt(wt,r))}function pe(e){Vt.current===e&&(at(wt),at(Vt)),ft.current===e&&(at(ft),ml._currentValue=Q)}var en,xe;function me(e){if(en===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);en=a&&a[1]||"",xe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+xe}var Re=!1;function le(e,a){if(!e||Re)return"";Re=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var et=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){et=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){et=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&et&&typeof lt.stack=="string")return[lt.stack,et.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var H=S.split(`
`),$=w.split(`
`);for(d=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;d<$.length&&!$[d].includes("DetermineComponentFrameRoot");)d++;if(l===H.length||d===$.length)for(l=H.length-1,d=$.length-1;1<=l&&0<=d&&H[l]!==$[d];)d--;for(;1<=l&&0<=d;l--,d--)if(H[l]!==$[d]){if(l!==1||d!==1)do if(l--,d--,0>d||H[l]!==$[d]){var dt=`
`+H[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=d);break}}}finally{Re=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?me(r):""}function nn(e,a){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==a&&a!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function k(e){try{var a="",r=null;do a+=nn(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qe=Object.prototype.hasOwnProperty,be=i.unstable_scheduleCallback,Ue=i.unstable_cancelCallback,Kt=i.unstable_shouldYield,O=i.unstable_requestPaint,E=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,pt=i.unstable_ImmediatePriority,yt=i.unstable_UserBlockingPriority,ct=i.unstable_NormalPriority,Qt=i.unstable_LowPriority,Rt=i.unstable_IdlePriority,Wt=i.log,ie=i.unstable_setDisableYieldValue,bt=null,Et=null;function It(e){if(typeof Wt=="function"&&ie(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(bt,e)}catch{}}var zt=Math.clz32?Math.clz32:W,Dt=Math.log,ue=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Dt(e)/ue|0)|0}var Ut=256,Tt=262144,Ft=4194304;function Mt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?d=Mt(l):(S&=w,S!==0?d=Mt(S):r||(r=w&~e,r!==0&&(d=Mt(r))))):(w=l&~m,w!==0?d=Mt(w):S!==0?d=Mt(S):r||(r=l&~e,r!==0&&(d=Mt(r)))),d===0?0:a!==0&&a!==d&&(a&m)===0&&(m=d&-d,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:d}function Ct(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ae(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ee(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Vn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Li(e,a,r,l,d,m){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,H=e.expirationTimes,$=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-zt(r),gt=1<<dt;w[dt]=0,H[dt]=-1;var et=$[dt];if(et!==null)for($[dt]=null,dt=0;dt<et.length;dt++){var lt=et[dt];lt!==null&&(lt.lane&=-536870913)}r&=~gt}l!==0&&ic(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~a))}function ic(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-zt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function wo(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-zt(r),d=1<<l;d&a|e[l]&a&&(e[l]|=a),r&=~d}}function ur(e,a){var r=a&-a;return r=(r&42)!==0?1:Co(r),(r&(e.suspendedLanes|a))!==0?0:r}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ro(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:ux(e.type))}function qi(e,a){var r=V.p;try{return V.p=e,a()}finally{V.p=r}}var mi=Math.random().toString(36).slice(2),fn="__reactFiber$"+mi,wn="__reactProps$"+mi,Ni="__reactContainer$"+mi,dr="__reactEvents$"+mi,hr="__reactListeners$"+mi,ac="__reactHandles$"+mi,Do="__reactResources$"+mi,Rs="__reactMarker$"+mi;function Lo(e){delete e[fn],delete e[wn],delete e[dr],delete e[hr],delete e[ac]}function ka(e){var a=e[fn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Ni]||r[fn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=Y1(e);e!==null;){if(r=e[fn])return r;e=Y1(e)}return a}e=r,r=e.parentNode}return null}function ja(e){if(e=e[fn]||e[Ni]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ds(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function Xa(e){var a=e[Do];return a||(a=e[Do]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function C(e){e[Rs]=!0}var Y=new Set,ot={};function tt(e,a){Z(e,a),Z(e+"Capture",a)}function Z(e,a){for(ot[e]=a,e=0;e<a.length;e++)Y.add(a[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Pt={};function Gt(e){return Qe.call(Pt,e)?!0:Qe.call(Bt,e)?!1:Nt.test(e)?Pt[e]=!0:(Bt[e]=!0,!1)}function qt(e,a,r){if(Gt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function te(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Yt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Je(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return d.call(this)},set:function(S){r=""+S,m.call(this,S)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function qe(e){if(!e._valueTracker){var a=De(e)?"checked":"value";e._valueTracker=Je(e,a,""+e[a])}}function Pe(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function se(e){return e.replace(Le,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Cn(e,a,r,l,d,m,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),a!=null?S==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ee(a)):e.value!==""+ee(a)&&(e.value=""+ee(a)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),a!=null?Rn(e,S,ee(a)):r!=null?Rn(e,S,ee(r)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ee(w):e.removeAttribute("name")}function fa(e,a,r,l,d,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){qe(e);return}r=r!=null?""+ee(r):"",a=a!=null?""+ee(a):r,w||a===e.value||(e.value=a),e.defaultValue=a}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),qe(e)}function Rn(e,a,r){a==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function gi(e,a,r,l){if(e=e.options,a){a={};for(var d=0;d<r.length;d++)a["$"+r[d]]=!0;for(r=0;r<e.length;r++)d=a.hasOwnProperty("$"+e[r].value),e[r].selected!==d&&(e[r].selected=d),d&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ee(r),a=null,d=0;d<e.length;d++){if(e[d].value===r){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}a!==null||e[d].disabled||(a=e[d])}a!==null&&(a.selected=!0)}}function Fe(e,a,r){if(a!=null&&(a=""+ee(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+ee(r):""}function Dn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(ut(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=ee(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),qe(e)}function xn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var Ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||Ln.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function pr(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in a)l=a[d],a.hasOwnProperty(d)&&r[d]!==l&&Nn(e,d,l)}else for(var m in a)a.hasOwnProperty(m)&&Nn(e,m,a[m])}function Ui(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),EM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sc(e){return EM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var bf=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mr=null,gr=null;function B0(e){var a=ja(e);if(a&&(e=a.stateNode)){var r=e[wn]||null;t:switch(e=a.stateNode,a.type){case"input":if(Cn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+se(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var d=l[wn]||null;if(!d)throw Error(s(90));Cn(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Pe(l)}break t;case"textarea":Fe(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&gi(e,!!r.multiple,a,!1)}}}var Tf=!1;function V0(e,a,r){if(Tf)return e(a,r);Tf=!0;try{var l=e(a);return l}finally{if(Tf=!1,(mr!==null||gr!==null)&&(Wc(),mr&&(a=mr,e=gr,gr=mr=null,B0(a),e)))for(a=0;a<e.length;a++)B0(e[a])}}function No(e,a){var r=e.stateNode;if(r===null)return null;var l=r[wn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=!1;if(ha)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Af=!1}var Wa=null,wf=null,rc=null;function H0(){if(rc)return rc;var e,a=wf,r=a.length,l,d="value"in Wa?Wa.value:Wa.textContent,m=d.length;for(e=0;e<r&&a[e]===d[e];e++);var S=r-e;for(l=1;l<=S&&a[r-l]===d[m-l];l++);return rc=d.slice(e,1<l?1-l:void 0)}function oc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function lc(){return!0}function G0(){return!1}function Qn(e){function a(r,l,d,m,S){this._reactName=r,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?lc:G0,this.isPropagationStopped=G0,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),a}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Qn(Ls),Po=v({},Ls,{view:0,detail:0}),TM=Qn(Po),Cf,Rf,Oo,uc=v({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Cf=e.screenX-Oo.screenX,Rf=e.screenY-Oo.screenY):Rf=Cf=0,Oo=e),Cf)},movementY:function(e){return"movementY"in e?e.movementY:Rf}}),k0=Qn(uc),AM=v({},uc,{dataTransfer:0}),wM=Qn(AM),CM=v({},Po,{relatedTarget:0}),Df=Qn(CM),RM=v({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),DM=Qn(RM),LM=v({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),NM=Qn(LM),UM=v({},Ls,{data:0}),j0=Qn(UM),PM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FM(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=zM[e])?!!a[e]:!1}function Lf(){return FM}var IM=v({},Po,{key:function(e){if(e.key){var a=PM[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=oc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(e){return e.type==="keypress"?oc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),BM=Qn(IM),VM=v({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X0=Qn(VM),HM=v({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),GM=Qn(HM),kM=v({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),jM=Qn(kM),XM=v({},uc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WM=Qn(XM),qM=v({},Ls,{newState:0,oldState:0}),YM=Qn(qM),KM=[9,13,27,32],Nf=ha&&"CompositionEvent"in window,zo=null;ha&&"documentMode"in document&&(zo=document.documentMode);var ZM=ha&&"TextEvent"in window&&!zo,W0=ha&&(!Nf||zo&&8<zo&&11>=zo),q0=" ",Y0=!1;function K0(e,a){switch(e){case"keyup":return KM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function QM(e,a){switch(e){case"compositionend":return Z0(a);case"keypress":return a.which!==32?null:(Y0=!0,q0);case"textInput":return e=a.data,e===q0&&Y0?null:e;default:return null}}function JM(e,a){if(vr)return e==="compositionend"||!Nf&&K0(e,a)?(e=H0(),rc=wf=Wa=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return W0&&a.locale!=="ko"?null:a.data;default:return null}}var $M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q0(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!$M[e.type]:a==="textarea"}function J0(e,a,r,l){mr?gr?gr.push(l):gr=[l]:mr=l,a=$c(a,"onChange"),0<a.length&&(r=new cc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Fo=null,Io=null;function tb(e){P1(e,0)}function fc(e){var a=Ds(e);if(Pe(a))return e}function $0(e,a){if(e==="change")return a}var tg=!1;if(ha){var Uf;if(ha){var Pf="oninput"in document;if(!Pf){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Pf=typeof eg.oninput=="function"}Uf=Pf}else Uf=!1;tg=Uf&&(!document.documentMode||9<document.documentMode)}function ng(){Fo&&(Fo.detachEvent("onpropertychange",ig),Io=Fo=null)}function ig(e){if(e.propertyName==="value"&&fc(Io)){var a=[];J0(a,Io,e,Ef(e)),V0(tb,a)}}function eb(e,a,r){e==="focusin"?(ng(),Fo=a,Io=r,Fo.attachEvent("onpropertychange",ig)):e==="focusout"&&ng()}function nb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fc(Io)}function ib(e,a){if(e==="click")return fc(a)}function ab(e,a){if(e==="input"||e==="change")return fc(a)}function sb(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ri=typeof Object.is=="function"?Object.is:sb;function Bo(e,a){if(ri(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var d=r[l];if(!Qe.call(a,d)||!ri(e[d],a[d]))return!1}return!0}function ag(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sg(e,a){var r=ag(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=ag(r)}}function rg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?rg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function og(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Jt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Jt(e.document)}return a}function Of(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var rb=ha&&"documentMode"in document&&11>=document.documentMode,xr=null,zf=null,Vo=null,Ff=!1;function lg(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ff||xr==null||xr!==Jt(l)||(l=xr,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Bo(Vo,l)||(Vo=l,l=$c(zf,"onSelect"),0<l.length&&(a=new cc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=xr)))}function Ns(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var _r={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},If={},cg={};ha&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Us(e){if(If[e])return If[e];if(!_r[e])return e;var a=_r[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in cg)return If[e]=a[r];return e}var ug=Us("animationend"),fg=Us("animationiteration"),dg=Us("animationstart"),ob=Us("transitionrun"),lb=Us("transitionstart"),cb=Us("transitioncancel"),hg=Us("transitionend"),pg=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function Pi(e,a){pg.set(e,a),tt(a,[e])}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vi=[],yr=0,Vf=0;function hc(){for(var e=yr,a=Vf=yr=0;a<e;){var r=vi[a];vi[a++]=null;var l=vi[a];vi[a++]=null;var d=vi[a];vi[a++]=null;var m=vi[a];if(vi[a++]=null,l!==null&&d!==null){var S=l.pending;S===null?d.next=d:(d.next=S.next,S.next=d),l.pending=d}m!==0&&mg(r,d,m)}}function pc(e,a,r,l){vi[yr++]=e,vi[yr++]=a,vi[yr++]=r,vi[yr++]=l,Vf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hf(e,a,r,l){return pc(e,a,r,l),mc(e)}function Ps(e,a){return pc(e,null,null,a),mc(e)}function mg(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var d=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&a!==null&&(d=31-zt(r),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[a]:l.push(a),a.lane=r|536870912),m):null}function mc(e){if(50<ll)throw ll=0,Zd=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Sr={};function ub(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,a,r,l){return new ub(e,a,r,l)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,a){var r=e.alternate;return r===null?(r=oi(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function gg(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function gc(e,a,r,l,d,m){var S=0;if(l=e,typeof e=="function")Gf(e)&&(S=1);else if(typeof e=="string")S=m3(e,r,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=oi(31,r,a,d),e.elementType=A,e.lanes=m,e;case T:return Os(r.children,d,m,a);case M:S=8,d|=24;break;case _:return e=oi(12,r,a,d|2),e.elementType=_,e.lanes=m,e;case P:return e=oi(13,r,a,d),e.elementType=P,e.lanes=m,e;case I:return e=oi(19,r,a,d),e.elementType=I,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case N:S=9;break t;case U:S=11;break t;case z:S=14;break t;case G:S=16,l=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=oi(S,r,a,d),a.elementType=e,a.type=l,a.lanes=m,a}function Os(e,a,r,l){return e=oi(7,e,l,a),e.lanes=r,e}function kf(e,a,r){return e=oi(6,e,null,a),e.lanes=r,e}function vg(e){var a=oi(18,null,null,0);return a.stateNode=e,a}function jf(e,a,r){return a=oi(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var xg=new WeakMap;function xi(e,a){if(typeof e=="object"&&e!==null){var r=xg.get(e);return r!==void 0?r:(a={value:e,source:a,stack:k(a)},xg.set(e,a),a)}return{value:e,source:a,stack:k(a)}}var Mr=[],br=0,vc=null,Ho=0,_i=[],yi=0,qa=null,Yi=1,Ki="";function ma(e,a){Mr[br++]=Ho,Mr[br++]=vc,vc=e,Ho=a}function _g(e,a,r){_i[yi++]=Yi,_i[yi++]=Ki,_i[yi++]=qa,qa=e;var l=Yi;e=Ki;var d=32-zt(l)-1;l&=~(1<<d),r+=1;var m=32-zt(a)+d;if(30<m){var S=d-d%5;m=(l&(1<<S)-1).toString(32),l>>=S,d-=S,Yi=1<<32-zt(a)+d|r<<d|l,Ki=m+e}else Yi=1<<m|r<<d|l,Ki=e}function Xf(e){e.return!==null&&(ma(e,1),_g(e,1,0))}function Wf(e){for(;e===vc;)vc=Mr[--br],Mr[br]=null,Ho=Mr[--br],Mr[br]=null;for(;e===qa;)qa=_i[--yi],_i[yi]=null,Ki=_i[--yi],_i[yi]=null,Yi=_i[--yi],_i[yi]=null}function yg(e,a){_i[yi++]=Yi,_i[yi++]=Ki,_i[yi++]=qa,Yi=a.id,Ki=a.overflow,qa=e}var Un=null,Ke=null,Se=!1,Ya=null,Si=!1,qf=Error(s(519));function Ka(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(xi(a,e)),qf}function Sg(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[fn]=e,a[wn]=l,r){case"dialog":ve("cancel",a),ve("close",a);break;case"iframe":case"object":case"embed":ve("load",a);break;case"video":case"audio":for(r=0;r<ul.length;r++)ve(ul[r],a);break;case"source":ve("error",a);break;case"img":case"image":case"link":ve("error",a),ve("load",a);break;case"details":ve("toggle",a);break;case"input":ve("invalid",a),fa(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ve("invalid",a);break;case"textarea":ve("invalid",a),Dn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||I1(a.textContent,r)?(l.popover!=null&&(ve("beforetoggle",a),ve("toggle",a)),l.onScroll!=null&&ve("scroll",a),l.onScrollEnd!=null&&ve("scrollend",a),l.onClick!=null&&(a.onclick=da),a=!0):a=!1,a||Ka(e,!0)}function Mg(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function Er(e){if(e!==Un)return!1;if(!Se)return Mg(e),Se=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||fh(e.type,e.memoizedProps)),r=!r),r&&Ke&&Ka(e),Mg(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=q1(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=q1(e)}else a===27?(a=Ke,cs(e.type)?(e=gh,gh=null,Ke=e):Ke=a):Ke=Un?bi(e.stateNode.nextSibling):null;return!0}function zs(){Ke=Un=null,Se=!1}function Yf(){var e=Ya;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Ya=null),e}function Go(e){Ya===null?Ya=[e]:Ya.push(e)}var Kf=F(null),Fs=null,ga=null;function Za(e,a,r){vt(Kf,a._currentValue),a._currentValue=r}function va(e){e._currentValue=Kf.current,at(Kf)}function Zf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function Qf(e,a,r,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=d;for(var H=0;H<a.length;H++)if(w.context===a[H]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),Zf(m.return,r,e),l||(S=null);break t}m=w.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(s(341));S.lanes|=r,m=S.alternate,m!==null&&(m.lanes|=r),Zf(S,r,e),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===e){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Tr(e,a,r,l){e=null;for(var d=a,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=d.type;ri(d.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(d===ft.current){if(S=d.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}d=d.return}e!==null&&Qf(a,e,r,l),a.flags|=262144}function xc(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Fs=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return bg(Fs,e)}function _c(e,a){return Fs===null&&Is(e),bg(e,a)}function bg(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ga===null){if(e===null)throw Error(s(308));ga=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ga=ga.next=a;return r}var fb=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},db=i.unstable_scheduleCallback,hb=i.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jf(){return{controller:new fb,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&db(hb,function(){e.controller.abort()})}var jo=null,$f=0,Ar=0,wr=null;function pb(e,a){if(jo===null){var r=jo=[];$f=0,Ar=nh(),wr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return $f++,a.then(Eg,Eg),a}function Eg(){if(--$f===0&&jo!==null){wr!==null&&(wr.status="fulfilled");var e=jo;jo=null,Ar=0,wr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function mb(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var d=0;d<r.length;d++)(0,r[d])(a)},function(d){for(l.status="rejected",l.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),l}var Tg=B.S;B.S=function(e,a){l1=E(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&pb(e,a),Tg!==null&&Tg(e,a)};var Bs=F(null);function td(){var e=Bs.current;return e!==null?e:Xe.pooledCache}function yc(e,a){a===null?vt(Bs,Bs.current):vt(Bs,a.pool)}function Ag(){var e=td();return e===null?null:{parent:dn._currentValue,pool:e}}var Cr=Error(s(460)),ed=Error(s(474)),Sc=Error(s(542)),Mc={then:function(){}};function wg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cg(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(da,da),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Dg(e),e;default:if(typeof a.status=="string")a.then(da,da);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=l}},function(l){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Dg(e),e}throw Hs=a,Cr}}function Vs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Hs=r,Cr):r}}var Hs=null;function Rg(){if(Hs===null)throw Error(s(459));var e=Hs;return Hs=null,e}function Dg(e){if(e===Cr||e===Sc)throw Error(s(483))}var Rr=null,Xo=0;function bc(e){var a=Xo;return Xo+=1,Rr===null&&(Rr=[]),Cg(Rr,e,a)}function Wo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ec(e,a){throw a.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Lg(e){function a(K,X){if(e){var J=K.deletions;J===null?(K.deletions=[X],K.flags|=16):J.push(X)}}function r(K,X){if(!e)return null;for(;X!==null;)a(K,X),X=X.sibling;return null}function l(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function d(K,X){return K=pa(K,X),K.index=0,K.sibling=null,K}function m(K,X,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<X?(K.flags|=67108866,X):J):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,J,mt){return X===null||X.tag!==6?(X=kf(J,K.mode,mt),X.return=K,X):(X=d(X,J),X.return=K,X)}function H(K,X,J,mt){var $t=J.type;return $t===T?dt(K,X,J.props.children,mt,J.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===G&&Vs($t)===X.type)?(X=d(X,J.props),Wo(X,J),X.return=K,X):(X=gc(J.type,J.key,J.props,null,K.mode,mt),Wo(X,J),X.return=K,X)}function $(K,X,J,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=jf(J,K.mode,mt),X.return=K,X):(X=d(X,J.children||[]),X.return=K,X)}function dt(K,X,J,mt,$t){return X===null||X.tag!==7?(X=Os(J,K.mode,mt,$t),X.return=K,X):(X=d(X,J),X.return=K,X)}function gt(K,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=kf(""+X,K.mode,J),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return J=gc(X.type,X.key,X.props,null,K.mode,J),Wo(J,X),J.return=K,J;case b:return X=jf(X,K.mode,J),X.return=K,X;case G:return X=Vs(X),gt(K,X,J)}if(ut(X)||it(X))return X=Os(X,K.mode,J,null),X.return=K,X;if(typeof X.then=="function")return gt(K,bc(X),J);if(X.$$typeof===D)return gt(K,_c(K,X),J);Ec(K,X)}return null}function et(K,X,J,mt){var $t=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $t!==null?null:w(K,X,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===$t?H(K,X,J,mt):null;case b:return J.key===$t?$(K,X,J,mt):null;case G:return J=Vs(J),et(K,X,J,mt)}if(ut(J)||it(J))return $t!==null?null:dt(K,X,J,mt,null);if(typeof J.then=="function")return et(K,X,bc(J),mt);if(J.$$typeof===D)return et(K,X,_c(K,J),mt);Ec(K,J)}return null}function lt(K,X,J,mt,$t){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,w(X,K,""+mt,$t);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return K=K.get(mt.key===null?J:mt.key)||null,H(X,K,mt,$t);case b:return K=K.get(mt.key===null?J:mt.key)||null,$(X,K,mt,$t);case G:return mt=Vs(mt),lt(K,X,J,mt,$t)}if(ut(mt)||it(mt))return K=K.get(J)||null,dt(X,K,mt,$t,null);if(typeof mt.then=="function")return lt(K,X,J,bc(mt),$t);if(mt.$$typeof===D)return lt(K,X,J,_c(X,mt),$t);Ec(X,mt)}return null}function kt(K,X,J,mt){for(var $t=null,Ae=null,Zt=X,fe=X=0,ye=null;Zt!==null&&fe<J.length;fe++){Zt.index>fe?(ye=Zt,Zt=null):ye=Zt.sibling;var we=et(K,Zt,J[fe],mt);if(we===null){Zt===null&&(Zt=ye);break}e&&Zt&&we.alternate===null&&a(K,Zt),X=m(we,X,fe),Ae===null?$t=we:Ae.sibling=we,Ae=we,Zt=ye}if(fe===J.length)return r(K,Zt),Se&&ma(K,fe),$t;if(Zt===null){for(;fe<J.length;fe++)Zt=gt(K,J[fe],mt),Zt!==null&&(X=m(Zt,X,fe),Ae===null?$t=Zt:Ae.sibling=Zt,Ae=Zt);return Se&&ma(K,fe),$t}for(Zt=l(Zt);fe<J.length;fe++)ye=lt(Zt,K,fe,J[fe],mt),ye!==null&&(e&&ye.alternate!==null&&Zt.delete(ye.key===null?fe:ye.key),X=m(ye,X,fe),Ae===null?$t=ye:Ae.sibling=ye,Ae=ye);return e&&Zt.forEach(function(ps){return a(K,ps)}),Se&&ma(K,fe),$t}function ne(K,X,J,mt){if(J==null)throw Error(s(151));for(var $t=null,Ae=null,Zt=X,fe=X=0,ye=null,we=J.next();Zt!==null&&!we.done;fe++,we=J.next()){Zt.index>fe?(ye=Zt,Zt=null):ye=Zt.sibling;var ps=et(K,Zt,we.value,mt);if(ps===null){Zt===null&&(Zt=ye);break}e&&Zt&&ps.alternate===null&&a(K,Zt),X=m(ps,X,fe),Ae===null?$t=ps:Ae.sibling=ps,Ae=ps,Zt=ye}if(we.done)return r(K,Zt),Se&&ma(K,fe),$t;if(Zt===null){for(;!we.done;fe++,we=J.next())we=gt(K,we.value,mt),we!==null&&(X=m(we,X,fe),Ae===null?$t=we:Ae.sibling=we,Ae=we);return Se&&ma(K,fe),$t}for(Zt=l(Zt);!we.done;fe++,we=J.next())we=lt(Zt,K,fe,we.value,mt),we!==null&&(e&&we.alternate!==null&&Zt.delete(we.key===null?fe:we.key),X=m(we,X,fe),Ae===null?$t=we:Ae.sibling=we,Ae=we);return e&&Zt.forEach(function(A3){return a(K,A3)}),Se&&ma(K,fe),$t}function je(K,X,J,mt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var $t=J.key;X!==null;){if(X.key===$t){if($t=J.type,$t===T){if(X.tag===7){r(K,X.sibling),mt=d(X,J.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===G&&Vs($t)===X.type){r(K,X.sibling),mt=d(X,J.props),Wo(mt,J),mt.return=K,K=mt;break t}r(K,X);break}else a(K,X);X=X.sibling}J.type===T?(mt=Os(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=gc(J.type,J.key,J.props,null,K.mode,mt),Wo(mt,J),mt.return=K,K=mt)}return S(K);case b:t:{for($t=J.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){r(K,X.sibling),mt=d(X,J.children||[]),mt.return=K,K=mt;break t}else{r(K,X);break}else a(K,X);X=X.sibling}mt=jf(J,K.mode,mt),mt.return=K,K=mt}return S(K);case G:return J=Vs(J),je(K,X,J,mt)}if(ut(J))return kt(K,X,J,mt);if(it(J)){if($t=it(J),typeof $t!="function")throw Error(s(150));return J=$t.call(J),ne(K,X,J,mt)}if(typeof J.then=="function")return je(K,X,bc(J),mt);if(J.$$typeof===D)return je(K,X,_c(K,J),mt);Ec(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(r(K,X.sibling),mt=d(X,J),mt.return=K,K=mt):(r(K,X),mt=kf(J,K.mode,mt),mt.return=K,K=mt),S(K)):r(K,X)}return function(K,X,J,mt){try{Xo=0;var $t=je(K,X,J,mt);return Rr=null,$t}catch(Zt){if(Zt===Cr||Zt===Sc)throw Zt;var Ae=oi(29,Zt,null,K.mode);return Ae.lanes=mt,Ae.return=K,Ae}}}var Gs=Lg(!0),Ng=Lg(!1),Qa=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function id(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var d=l.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a,a=mc(e),mg(e,null,r),a}return pc(e,l,a,r),mc(e)}function qo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,wo(e,r)}}function ad(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,r=r.next}while(r!==null);m===null?d=m=a:m=m.next=a}else d=m=a;r={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var sd=!1;function Yo(){if(sd){var e=wr;if(e!==null)throw e}}function Ko(e,a,r,l){sd=!1;var d=e.updateQueue;Qa=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var H=w,$=H.next;H.next=null,S===null?m=$:S.next=$,S=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,w=dt.lastBaseUpdate,w!==S&&(w===null?dt.firstBaseUpdate=$:w.next=$,dt.lastBaseUpdate=H))}if(m!==null){var gt=d.baseState;S=0,dt=$=H=null,w=m;do{var et=w.lane&-536870913,lt=et!==w.lane;if(lt?(_e&et)===et:(l&et)===et){et!==0&&et===Ar&&(sd=!0),dt!==null&&(dt=dt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var kt=e,ne=w;et=a;var je=r;switch(ne.tag){case 1:if(kt=ne.payload,typeof kt=="function"){gt=kt.call(je,gt,et);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ne.payload,et=typeof kt=="function"?kt.call(je,gt,et):kt,et==null)break t;gt=v({},gt,et);break t;case 2:Qa=!0}}et=w.callback,et!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=d.callbacks,lt===null?d.callbacks=[et]:lt.push(et))}else lt={lane:et,tag:w.tag,payload:w.payload,callback:w.callback,next:null},dt===null?($=dt=lt,H=gt):dt=dt.next=lt,S|=et;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;lt=w,w=lt.next,lt.next=null,d.lastBaseUpdate=lt,d.shared.pending=null}}while(!0);dt===null&&(H=gt),d.baseState=H,d.firstBaseUpdate=$,d.lastBaseUpdate=dt,m===null&&(d.shared.lanes=0),as|=S,e.lanes=S,e.memoizedState=gt}}function Ug(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function Pg(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Ug(r[e],a)}var Dr=F(null),Tc=F(0);function Og(e,a){e=Aa,vt(Tc,e),vt(Dr,a),Aa=e|a.baseLanes}function rd(){vt(Tc,Aa),vt(Dr,Dr.current)}function od(){Aa=Tc.current,at(Dr),at(Tc)}var li=F(null),Mi=null;function ts(e){var a=e.alternate;vt(on,on.current&1),vt(li,e),Mi===null&&(a===null||Dr.current!==null||a.memoizedState!==null)&&(Mi=e)}function ld(e){vt(on,on.current),vt(li,e),Mi===null&&(Mi=e)}function zg(e){e.tag===22?(vt(on,on.current),vt(li,e),Mi===null&&(Mi=e)):es()}function es(){vt(on,on.current),vt(li,li.current)}function ci(e){at(li),Mi===e&&(Mi=null),at(on)}var on=F(0);function Ac(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ph(r)||mh(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var xa=0,ce=null,Ge=null,hn=null,wc=!1,Lr=!1,ks=!1,Cc=0,Zo=0,Nr=null,gb=0;function an(){throw Error(s(321))}function cd(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ri(e[r],a[r]))return!1;return!0}function ud(e,a,r,l,d,m){return xa=m,ce=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=e===null||e.memoizedState===null?_v:Td,ks=!1,m=r(l,d),ks=!1,Lr&&(m=Ig(a,r,l,d)),Fg(e),m}function Fg(e){B.H=$o;var a=Ge!==null&&Ge.next!==null;if(xa=0,hn=Ge=ce=null,wc=!1,Zo=0,Nr=null,a)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&xc(e)&&(pn=!0))}function Ig(e,a,r,l){ce=e;var d=0;do{if(Lr&&(Nr=null),Zo=0,Lr=!1,25<=d)throw Error(s(301));if(d+=1,hn=Ge=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=yv,m=a(r,l)}while(Lr);return m}function vb(){var e=B.H,a=e.useState()[0];return a=typeof a.then=="function"?Qo(a):a,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),a}function fd(){var e=Cc!==0;return Cc=0,e}function dd(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function hd(e){if(wc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}wc=!1}xa=0,hn=Ge=ce=null,Lr=!1,Zo=Cc=0,Nr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ce.memoizedState=hn=e:hn=hn.next=e,hn}function ln(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var a=hn===null?ce.memoizedState:hn.next;if(a!==null)hn=a,Ge=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},hn===null?ce.memoizedState=hn=e:hn=hn.next=e}return hn}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var a=Zo;return Zo+=1,Nr===null&&(Nr=[]),e=Cg(Nr,e,a),a=ce,(hn===null?a.memoizedState:hn.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?_v:Td),e}function Dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===D)return Pn(e)}throw Error(s(438,String(e)))}function pd(e){var a=null,r=ce.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Rc(),ce.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=L;return a.index++,r}function _a(e,a){return typeof a=="function"?a(e):a}function Lc(e){var a=ln();return md(a,Ge,e)}function md(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}a.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{a=d.next;var w=S=null,H=null,$=a,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(_e&gt)===gt:(xa&gt)===gt){var et=$.revertLane;if(et===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Ar&&(dt=!0);else if((xa&et)===et){$=$.next,et===Ar&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(w=H=gt,S=m):H=H.next=gt,ce.lanes|=et,as|=et;gt=$.action,ks&&r(m,gt),m=$.hasEagerState?$.eagerState:r(m,gt)}else et={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(w=H=et,S=m):H=H.next=et,ce.lanes|=gt,as|=gt;$=$.next}while($!==null&&$!==a);if(H===null?S=m:H.next=w,!ri(m,e.memoizedState)&&(pn=!0,dt&&(r=wr,r!==null)))throw r;e.memoizedState=m,e.baseState=S,e.baseQueue=H,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gd(e){var a=ln(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,d=r.pending,m=a.memoizedState;if(d!==null){r.pending=null;var S=d=d.next;do m=e(m,S.action),S=S.next;while(S!==d);ri(m,a.memoizedState)||(pn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function Bg(e,a,r){var l=ce,d=ln(),m=Se;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var S=!ri((Ge||d).memoizedState,r);if(S&&(d.memoizedState=r,pn=!0),d=d.queue,_d(Gg.bind(null,l,d,e),[e]),d.getSnapshot!==a||S||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},Hg.bind(null,l,d,r,a),null),Xe===null)throw Error(s(349));m||(xa&127)!==0||Vg(l,a,r)}return r}function Vg(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ce.updateQueue,a===null?(a=Rc(),ce.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Hg(e,a,r,l){a.value=r,a.getSnapshot=l,kg(a)&&jg(e)}function Gg(e,a,r){return r(function(){kg(a)&&jg(e)})}function kg(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ri(e,r)}catch{return!0}}function jg(e){var a=Ps(e,2);a!==null&&ni(a,e,2)}function vd(e){var a=Wn();if(typeof e=="function"){var r=e;if(e=r(),ks){It(!0);try{r()}finally{It(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},a}function Xg(e,a,r,l){return e.baseState=r,md(e,Ge,typeof l=="function"?l:_a)}function xb(e,a,r,l,d){if(Pc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};B.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,Wg(a,m)):(m.next=r.next,a.pending=r.next=m)}}function Wg(e,a){var r=a.action,l=a.payload,d=e.state;if(a.isTransition){var m=B.T,S={};B.T=S;try{var w=r(d,l),H=B.S;H!==null&&H(S,w),qg(e,a,w)}catch($){xd(e,a,$)}finally{m!==null&&S.types!==null&&(m.types=S.types),B.T=m}}else try{m=r(d,l),qg(e,a,m)}catch($){xd(e,a,$)}}function qg(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Yg(e,a,l)},function(l){return xd(e,a,l)}):Yg(e,a,r)}function Yg(e,a,r){a.status="fulfilled",a.value=r,Kg(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,Wg(e,r)))}function xd(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,Kg(a),a=a.next;while(a!==l)}e.action=null}function Kg(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Zg(e,a){return a}function Qg(e,a){if(Se){var r=Xe.formState;if(r!==null){t:{var l=ce;if(Se){if(Ke){e:{for(var d=Ke,m=Si;d.nodeType!==8;){if(!m){d=null;break e}if(d=bi(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ke=bi(d.nextSibling),l=d.data==="F!";break t}}Ka(l)}l=!1}l&&(a=r[0])}}return r=Wn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zg,lastRenderedState:a},r.queue=l,r=gv.bind(null,ce,l),l.dispatch=r,l=vd(!1),m=Ed.bind(null,ce,!1,l.queue),l=Wn(),d={state:a,dispatch:null,action:e,pending:null},l.queue=d,r=xb.bind(null,ce,d,m,r),d.dispatch=r,l.memoizedState=e,[a,r,!1]}function Jg(e){var a=ln();return $g(a,Ge,e)}function $g(e,a,r){if(a=md(e,a,Zg)[0],e=Lc(_a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Qo(a)}catch(S){throw S===Cr?Sc:S}else l=a;a=ln();var d=a.queue,m=d.dispatch;return r!==a.memoizedState&&(ce.flags|=2048,Ur(9,{destroy:void 0},_b.bind(null,d,r),null)),[l,m,e]}function _b(e,a){e.action=a}function tv(e){var a=ln(),r=Ge;if(r!==null)return $g(a,r,e);ln(),a=a.memoizedState,r=ln();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Ur(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ce.updateQueue,a===null&&(a=Rc(),ce.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function ev(){return ln().memoizedState}function Nc(e,a,r,l){var d=Wn();ce.flags|=e,d.memoizedState=Ur(1|a,{destroy:void 0},r,l===void 0?null:l)}function Uc(e,a,r,l){var d=ln();l=l===void 0?null:l;var m=d.memoizedState.inst;Ge!==null&&l!==null&&cd(l,Ge.memoizedState.deps)?d.memoizedState=Ur(a,m,r,l):(ce.flags|=e,d.memoizedState=Ur(1|a,m,r,l))}function nv(e,a){Nc(8390656,8,e,a)}function _d(e,a){Uc(2048,8,e,a)}function yb(e){ce.flags|=4;var a=ce.updateQueue;if(a===null)a=Rc(),ce.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function iv(e){var a=ln().memoizedState;return yb({ref:a,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function av(e,a){return Uc(4,2,e,a)}function sv(e,a){return Uc(4,4,e,a)}function rv(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ov(e,a,r){r=r!=null?r.concat([e]):null,Uc(4,4,rv.bind(null,a,e),r)}function yd(){}function lv(e,a){var r=ln();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&cd(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function cv(e,a){var r=ln();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&cd(a,l[1]))return l[0];if(l=e(),ks){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[l,a],l}function Sd(e,a,r){return r===void 0||(xa&1073741824)!==0&&(_e&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=u1(),ce.lanes|=e,as|=e,r)}function uv(e,a,r,l){return ri(r,a)?r:Dr.current!==null?(e=Sd(e,r,l),ri(e,a)||(pn=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(_e&261930)===0?(pn=!0,e.memoizedState=r):(e=u1(),ce.lanes|=e,as|=e,a)}function fv(e,a,r,l,d){var m=V.p;V.p=m!==0&&8>m?m:8;var S=B.T,w={};B.T=w,Ed(e,!1,a,r);try{var H=d(),$=B.S;if($!==null&&$(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=mb(H,l);Jo(e,a,dt,di(e))}else Jo(e,a,l,di(e))}catch(gt){Jo(e,a,{then:function(){},status:"rejected",reason:gt},di())}finally{V.p=m,S!==null&&w.types!==null&&(S.types=w.types),B.T=S}}function Sb(){}function Md(e,a,r,l){if(e.tag!==5)throw Error(s(476));var d=dv(e).queue;fv(e,d,a,Q,r===null?Sb:function(){return hv(e),r(l)})}function dv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Q},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function hv(e){var a=dv(e);a.next===null&&(a=e.alternate.memoizedState),Jo(e,a.next.queue,{},di())}function bd(){return Pn(ml)}function pv(){return ln().memoizedState}function mv(){return ln().memoizedState}function Mb(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=di();e=Ja(r);var l=$a(a,e,r);l!==null&&(ni(l,a,r),qo(l,a,r)),a={cache:Jf()},e.payload=a;return}a=a.return}}function bb(e,a,r){var l=di();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pc(e)?vv(a,r):(r=Hf(e,a,r,l),r!==null&&(ni(r,e,l),xv(r,a,l)))}function gv(e,a,r){var l=di();Jo(e,a,r,l)}function Jo(e,a,r,l){var d={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))vv(a,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var S=a.lastRenderedState,w=m(S,r);if(d.hasEagerState=!0,d.eagerState=w,ri(w,S))return pc(e,a,d,0),Xe===null&&hc(),!1}catch{}if(r=Hf(e,a,d,l),r!==null)return ni(r,e,l),xv(r,a,l),!0}return!1}function Ed(e,a,r,l){if(l={lane:2,revertLane:nh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(e)){if(a)throw Error(s(479))}else a=Hf(e,r,l,2),a!==null&&ni(a,e,2)}function Pc(e){var a=e.alternate;return e===ce||a!==null&&a===ce}function vv(e,a){Lr=wc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function xv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,wo(e,r)}}var $o={readContext:Pn,use:Dc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};$o.useEffectEvent=an;var _v={readContext:Pn,use:Dc,useCallback:function(e,a){return Wn().memoizedState=[e,a===void 0?null:a],e},useContext:Pn,useEffect:nv,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Nc(4194308,4,rv.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Nc(4194308,4,e,a)},useInsertionEffect:function(e,a){Nc(4,2,e,a)},useMemo:function(e,a){var r=Wn();a=a===void 0?null:a;var l=e();if(ks){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=Wn();if(r!==void 0){var d=r(a);if(ks){It(!0);try{r(a)}finally{It(!1)}}}else d=a;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=bb.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var a=Wn();return e={current:e},a.memoizedState=e},useState:function(e){e=vd(e);var a=e.queue,r=gv.bind(null,ce,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:yd,useDeferredValue:function(e,a){var r=Wn();return Sd(r,e,a)},useTransition:function(){var e=vd(!1);return e=fv.bind(null,ce,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ce,d=Wn();if(Se){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),Xe===null)throw Error(s(349));(_e&127)!==0||Vg(l,a,r)}d.memoizedState=r;var m={value:r,getSnapshot:a};return d.queue=m,nv(Gg.bind(null,l,m,e),[e]),l.flags|=2048,Ur(9,{destroy:void 0},Hg.bind(null,l,m,r,a),null),r},useId:function(){var e=Wn(),a=Xe.identifierPrefix;if(Se){var r=Ki,l=Yi;r=(l&~(1<<32-zt(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Cc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=gb++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:bd,useFormState:Qg,useActionState:Qg,useOptimistic:function(e){var a=Wn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Ed.bind(null,ce,!0,r),r.dispatch=a,[e,a]},useMemoCache:pd,useCacheRefresh:function(){return Wn().memoizedState=Mb.bind(null,ce)},useEffectEvent:function(e){var a=Wn(),r={impl:e};return a.memoizedState=r,function(){if((Ne&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Td={readContext:Pn,use:Dc,useCallback:lv,useContext:Pn,useEffect:_d,useImperativeHandle:ov,useInsertionEffect:av,useLayoutEffect:sv,useMemo:cv,useReducer:Lc,useRef:ev,useState:function(){return Lc(_a)},useDebugValue:yd,useDeferredValue:function(e,a){var r=ln();return uv(r,Ge.memoizedState,e,a)},useTransition:function(){var e=Lc(_a)[0],a=ln().memoizedState;return[typeof e=="boolean"?e:Qo(e),a]},useSyncExternalStore:Bg,useId:pv,useHostTransitionStatus:bd,useFormState:Jg,useActionState:Jg,useOptimistic:function(e,a){var r=ln();return Xg(r,Ge,e,a)},useMemoCache:pd,useCacheRefresh:mv};Td.useEffectEvent=iv;var yv={readContext:Pn,use:Dc,useCallback:lv,useContext:Pn,useEffect:_d,useImperativeHandle:ov,useInsertionEffect:av,useLayoutEffect:sv,useMemo:cv,useReducer:gd,useRef:ev,useState:function(){return gd(_a)},useDebugValue:yd,useDeferredValue:function(e,a){var r=ln();return Ge===null?Sd(r,e,a):uv(r,Ge.memoizedState,e,a)},useTransition:function(){var e=gd(_a)[0],a=ln().memoizedState;return[typeof e=="boolean"?e:Qo(e),a]},useSyncExternalStore:Bg,useId:pv,useHostTransitionStatus:bd,useFormState:tv,useActionState:tv,useOptimistic:function(e,a){var r=ln();return Ge!==null?Xg(r,Ge,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:pd,useCacheRefresh:mv};yv.useEffectEvent=iv;function Ad(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:v({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var wd={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=di(),d=Ja(l);d.payload=a,r!=null&&(d.callback=r),a=$a(e,d,l),a!==null&&(ni(a,e,l),qo(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=di(),d=Ja(l);d.tag=1,d.payload=a,r!=null&&(d.callback=r),a=$a(e,d,l),a!==null&&(ni(a,e,l),qo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=di(),l=Ja(r);l.tag=2,a!=null&&(l.callback=a),a=$a(e,l,r),a!==null&&(ni(a,e,r),qo(a,e,r))}};function Sv(e,a,r,l,d,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):a.prototype&&a.prototype.isPureReactComponent?!Bo(r,l)||!Bo(d,m):!0}function Mv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&wd.enqueueReplaceState(a,a.state,null)}function js(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=v({},r));for(var d in e)r[d]===void 0&&(r[d]=e[d])}return r}function bv(e){dc(e)}function Ev(e){console.error(e)}function Tv(e){dc(e)}function Oc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Av(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Cd(e,a,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){Oc(e,a)},r}function wv(e){return e=Ja(e),e.tag=3,e}function Cv(e,a,r,l){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){Av(a,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Av(a,r,l),typeof d!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function Eb(e,a,r,l,d){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Tr(a,r,d,!0),r=li.current,r!==null){switch(r.tag){case 31:case 13:return Mi===null?qc():r.alternate===null&&sn===0&&(sn=3),r.flags&=-257,r.flags|=65536,r.lanes=d,l===Mc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),$d(e,l,d)),!1;case 22:return r.flags|=65536,l===Mc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),$d(e,l,d)),!1}throw Error(s(435,r.tag))}return $d(e,l,d),qc(),!1}if(Se)return a=li.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,l!==qf&&(e=Error(s(422),{cause:l}),Go(xi(e,r)))):(l!==qf&&(a=Error(s(423),{cause:l}),Go(xi(a,r))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=xi(l,r),d=Cd(e.stateNode,l,d),ad(e,d),sn!==4&&(sn=2)),!1;var m=Error(s(520),{cause:l});if(m=xi(m,r),ol===null?ol=[m]:ol.push(m),sn!==4&&(sn=2),a===null)return!0;l=xi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=d&-d,r.lanes|=e,e=Cd(r.stateNode,l,e),ad(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ss===null||!ss.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=wv(d),Cv(d,e,r,l),ad(r,d),!1}r=r.return}while(r!==null);return!1}var Rd=Error(s(461)),pn=!1;function On(e,a,r,l){a.child=e===null?Ng(a,null,r,l):Gs(a,e.child,r,l)}function Rv(e,a,r,l,d){r=r.render;var m=a.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return Is(a),l=ud(e,a,r,S,m,d),w=fd(),e!==null&&!pn?(dd(e,a,d),ya(e,a,d)):(Se&&w&&Xf(a),a.flags|=1,On(e,a,l,d),a.child)}function Dv(e,a,r,l,d){if(e===null){var m=r.type;return typeof m=="function"&&!Gf(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,Lv(e,a,m,l,d)):(e=gc(r.type,null,l,a,a.mode,d),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Fd(e,d)){var S=m.memoizedProps;if(r=r.compare,r=r!==null?r:Bo,r(S,l)&&e.ref===a.ref)return ya(e,a,d)}return a.flags|=1,e=pa(m,l),e.ref=a.ref,e.return=a,a.child=e}function Lv(e,a,r,l,d){if(e!==null){var m=e.memoizedProps;if(Bo(m,l)&&e.ref===a.ref)if(pn=!1,a.pendingProps=l=m,Fd(e,d))(e.flags&131072)!==0&&(pn=!0);else return a.lanes=e.lanes,ya(e,a,d)}return Dd(e,a,r,l,d)}function Nv(e,a,r,l){var d=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=a.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,a.child=null;return Uv(e,a,m,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&yc(a,m!==null?m.cachePool:null),m!==null?Og(a,m):rd(),zg(a);else return l=a.lanes=536870912,Uv(e,a,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(yc(a,m.cachePool),Og(a,m),es(),a.memoizedState=null):(e!==null&&yc(a,null),rd(),es());return On(e,a,d,r),a.child}function tl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Uv(e,a,r,l,d){var m=td();return m=m===null?null:{parent:dn._currentValue,pool:m},a.memoizedState={baseLanes:r,cachePool:m},e!==null&&yc(a,null),rd(),zg(a),e!==null&&Tr(e,a,l,!0),a.childLanes=d,null}function zc(e,a){return a=Ic({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Pv(e,a,r){return Gs(a,e.child,null,r),e=zc(a,a.pendingProps),e.flags|=2,ci(a),a.memoizedState=null,e}function Tb(e,a,r){var l=a.pendingProps,d=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Se){if(l.mode==="hidden")return e=zc(a,l),a.lanes=536870912,tl(null,e);if(ld(a),(e=Ke)?(e=W1(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},r=vg(e),r.return=a,a.child=r,Un=a,Ke=null)):e=null,e===null)throw Ka(a);return a.lanes=536870912,null}return zc(a,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(ld(a),d)if(a.flags&256)a.flags&=-257,a=Pv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(pn||Tr(e,a,r,!1),d=(r&e.childLanes)!==0,pn||d){if(l=Xe,l!==null&&(S=ur(l,r),S!==0&&S!==m.retryLane))throw m.retryLane=S,Ps(e,S),ni(l,e,S),Rd;qc(),a=Pv(e,a,r)}else e=m.treeContext,Ke=bi(S.nextSibling),Un=a,Se=!0,Ya=null,Si=!1,e!==null&&yg(a,e),a=zc(a,l),a.flags|=4096;return a}return e=pa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Fc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Dd(e,a,r,l,d){return Is(a),r=ud(e,a,r,l,void 0,d),l=fd(),e!==null&&!pn?(dd(e,a,d),ya(e,a,d)):(Se&&l&&Xf(a),a.flags|=1,On(e,a,r,d),a.child)}function Ov(e,a,r,l,d,m){return Is(a),a.updateQueue=null,r=Ig(a,l,r,d),Fg(e),l=fd(),e!==null&&!pn?(dd(e,a,m),ya(e,a,m)):(Se&&l&&Xf(a),a.flags|=1,On(e,a,r,m),a.child)}function zv(e,a,r,l,d){if(Is(a),a.stateNode===null){var m=Sr,S=r.contextType;typeof S=="object"&&S!==null&&(m=Pn(S)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=wd,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},nd(a),S=r.contextType,m.context=typeof S=="object"&&S!==null?Pn(S):Sr,m.state=a.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ad(a,r,S,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&wd.enqueueReplaceState(m,m.state,null),Ko(a,l,m,d),Yo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var w=a.memoizedProps,H=js(r,w);m.props=H;var $=m.context,dt=r.contextType;S=Sr,typeof dt=="object"&&dt!==null&&(S=Pn(dt));var gt=r.getDerivedStateFromProps;dt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||$!==S)&&Mv(a,m,l,S),Qa=!1;var et=a.memoizedState;m.state=et,Ko(a,l,m,d),Yo(),$=a.memoizedState,w||et!==$||Qa?(typeof gt=="function"&&(Ad(a,r,gt,l),$=a.memoizedState),(H=Qa||Sv(a,r,H,l,et,$,S))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=$),m.props=l,m.state=$,m.context=S,l=H):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,id(e,a),S=a.memoizedProps,dt=js(r,S),m.props=dt,gt=a.pendingProps,et=m.context,$=r.contextType,H=Sr,typeof $=="object"&&$!==null&&(H=Pn($)),w=r.getDerivedStateFromProps,($=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==gt||et!==H)&&Mv(a,m,l,H),Qa=!1,et=a.memoizedState,m.state=et,Ko(a,l,m,d),Yo();var lt=a.memoizedState;S!==gt||et!==lt||Qa||e!==null&&e.dependencies!==null&&xc(e.dependencies)?(typeof w=="function"&&(Ad(a,r,w,l),lt=a.memoizedState),(dt=Qa||Sv(a,r,dt,l,et,lt,H)||e!==null&&e.dependencies!==null&&xc(e.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,H)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),m.props=l,m.state=lt,m.context=H,l=dt):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Fc(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=Gs(a,e.child,null,d),a.child=Gs(a,null,r,d)):On(e,a,r,d),a.memoizedState=m.state,e=a.child):e=ya(e,a,d),e}function Fv(e,a,r,l){return zs(),a.flags|=256,On(e,a,r,l),a.child}var Ld={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nd(e){return{baseLanes:e,cachePool:Ag()}}function Ud(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=fi),e}function Iv(e,a,r){var l=a.pendingProps,d=!1,m=(a.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(d=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,e===null){if(Se){if(d?ts(a):es(),(e=Ke)?(e=W1(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},r=vg(e),r.return=a,a.child=r,Un=a,Ke=null)):e=null,e===null)throw Ka(a);return mh(e)?a.lanes=32:a.lanes=536870912,null}var w=l.children;return l=l.fallback,d?(es(),d=a.mode,w=Ic({mode:"hidden",children:w},d),l=Os(l,d,r,null),w.return=a,l.return=a,w.sibling=l,a.child=w,l=a.child,l.memoizedState=Nd(r),l.childLanes=Ud(e,S,r),a.memoizedState=Ld,tl(null,l)):(ts(a),Pd(a,w))}var H=e.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(m)a.flags&256?(ts(a),a.flags&=-257,a=Od(e,a,r)):a.memoizedState!==null?(es(),a.child=e.child,a.flags|=128,a=null):(es(),w=l.fallback,d=a.mode,l=Ic({mode:"visible",children:l.children},d),w=Os(w,d,r,null),w.flags|=2,l.return=a,w.return=a,l.sibling=w,a.child=l,Gs(a,e.child,null,r),l=a.child,l.memoizedState=Nd(r),l.childLanes=Ud(e,S,r),a.memoizedState=Ld,a=tl(null,l));else if(ts(a),mh(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var $=S.dgst;S=$,l=Error(s(419)),l.stack="",l.digest=S,Go({value:l,source:null,stack:null}),a=Od(e,a,r)}else if(pn||Tr(e,a,r,!1),S=(r&e.childLanes)!==0,pn||S){if(S=Xe,S!==null&&(l=ur(S,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,Ps(e,l),ni(S,e,l),Rd;ph(w)||qc(),a=Od(e,a,r)}else ph(w)?(a.flags|=192,a.child=e.child,a=null):(e=H.treeContext,Ke=bi(w.nextSibling),Un=a,Se=!0,Ya=null,Si=!1,e!==null&&yg(a,e),a=Pd(a,l.children),a.flags|=4096);return a}return d?(es(),w=l.fallback,d=a.mode,H=e.child,$=H.sibling,l=pa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,$!==null?w=pa($,w):(w=Os(w,d,r,null),w.flags|=2),w.return=a,l.return=a,l.sibling=w,a.child=l,tl(null,l),l=a.child,w=e.child.memoizedState,w===null?w=Nd(r):(d=w.cachePool,d!==null?(H=dn._currentValue,d=d.parent!==H?{parent:H,pool:H}:d):d=Ag(),w={baseLanes:w.baseLanes|r,cachePool:d}),l.memoizedState=w,l.childLanes=Ud(e,S,r),a.memoizedState=Ld,tl(e.child,l)):(ts(a),r=e.child,e=r.sibling,r=pa(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(S=a.deletions,S===null?(a.deletions=[e],a.flags|=16):S.push(e)),a.child=r,a.memoizedState=null,r)}function Pd(e,a){return a=Ic({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ic(e,a){return e=oi(22,e,null,a),e.lanes=0,e}function Od(e,a,r){return Gs(a,e.child,null,r),e=Pd(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Bv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Zf(e.return,a,r)}function zd(e,a,r,l,d,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:d,treeForkCount:m}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=d,S.treeForkCount=m)}function Vv(e,a,r){var l=a.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var S=on.current,w=(S&2)!==0;if(w?(S=S&1|2,a.flags|=128):S&=1,vt(on,S),On(e,a,l,r),l=Se?Ho:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bv(e,r,a);else if(e.tag===19)Bv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(r=a.child,d=null;r!==null;)e=r.alternate,e!==null&&Ac(e)===null&&(d=r),r=r.sibling;r=d,r===null?(d=a.child,a.child=null):(d=r.sibling,r.sibling=null),zd(a,!1,d,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=a.child,a.child=null;d!==null;){if(e=d.alternate,e!==null&&Ac(e)===null){a.child=d;break}e=d.sibling,d.sibling=r,r=d,d=e}zd(a,!0,r,null,m,l);break;case"together":zd(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function ya(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),as|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Tr(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=pa(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=pa(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Fd(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&xc(e)))}function Ab(e,a,r){switch(a.tag){case 3:Lt(a,a.stateNode.containerInfo),Za(a,dn,e.memoizedState.cache),zs();break;case 27:case 5:Ht(a);break;case 4:Lt(a,a.stateNode.containerInfo);break;case 10:Za(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,ld(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ts(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Iv(e,a,r):(ts(a),e=ya(e,a,r),e!==null?e.sibling:null);ts(a);break;case 19:var d=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Tr(e,a,r,!1),l=(r&a.childLanes)!==0),d){if(l)return Vv(e,a,r);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),vt(on,on.current),l)break;return null;case 22:return a.lanes=0,Nv(e,a,r,a.pendingProps);case 24:Za(a,dn,e.memoizedState.cache)}return ya(e,a,r)}function Hv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)pn=!0;else{if(!Fd(e,r)&&(a.flags&128)===0)return pn=!1,Ab(e,a,r);pn=(e.flags&131072)!==0}else pn=!1,Se&&(a.flags&1048576)!==0&&_g(a,Ho,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Vs(a.elementType),a.type=e,typeof e=="function")Gf(e)?(l=js(e,l),a.tag=1,a=zv(null,a,e,l,r)):(a.tag=0,a=Dd(null,a,e,l,r));else{if(e!=null){var d=e.$$typeof;if(d===U){a.tag=11,a=Rv(null,a,e,l,r);break t}else if(d===z){a.tag=14,a=Dv(null,a,e,l,r);break t}}throw a=ht(e)||e,Error(s(306,a,""))}}return a;case 0:return Dd(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,d=js(l,a.pendingProps),zv(e,a,l,d,r);case 3:t:{if(Lt(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;d=m.element,id(e,a),Ko(a,l,null,r);var S=a.memoizedState;if(l=S.cache,Za(a,dn,l),l!==m.cache&&Qf(a,[dn],r,!0),Yo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Fv(e,a,l,r);break t}else if(l!==d){d=xi(Error(s(424)),a),Go(d),a=Fv(e,a,l,r);break t}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=bi(e.firstChild),Un=a,Se=!0,Ya=null,Si=!0,r=Ng(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(zs(),l===d){a=ya(e,a,r);break t}On(e,a,l,r)}a=a.child}return a;case 26:return Fc(e,a),e===null?(r=J1(a.type,null,a.pendingProps,null))?a.memoizedState=r:Se||(r=a.type,e=a.pendingProps,l=tu(nt.current).createElement(r),l[fn]=a,l[wn]=e,zn(l,r,e),C(l),a.stateNode=l):a.memoizedState=J1(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ht(a),e===null&&Se&&(l=a.stateNode=K1(a.type,a.pendingProps,nt.current),Un=a,Si=!0,d=Ke,cs(a.type)?(gh=d,Ke=bi(l.firstChild)):Ke=d),On(e,a,a.pendingProps.children,r),Fc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Se&&((d=l=Ke)&&(l=n3(l,a.type,a.pendingProps,Si),l!==null?(a.stateNode=l,Un=a,Ke=bi(l.firstChild),Si=!1,d=!0):d=!1),d||Ka(a)),Ht(a),d=a.type,m=a.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,fh(d,m)?l=null:S!==null&&fh(d,S)&&(a.flags|=32),a.memoizedState!==null&&(d=ud(e,a,vb,null,null,r),ml._currentValue=d),Fc(e,a),On(e,a,l,r),a.child;case 6:return e===null&&Se&&((e=r=Ke)&&(r=i3(r,a.pendingProps,Si),r!==null?(a.stateNode=r,Un=a,Ke=null,e=!0):e=!1),e||Ka(a)),null;case 13:return Iv(e,a,r);case 4:return Lt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Gs(a,null,l,r):On(e,a,l,r),a.child;case 11:return Rv(e,a,a.type,a.pendingProps,r);case 7:return On(e,a,a.pendingProps,r),a.child;case 8:return On(e,a,a.pendingProps.children,r),a.child;case 12:return On(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,Za(a,a.type,l.value),On(e,a,l.children,r),a.child;case 9:return d=a.type._context,l=a.pendingProps.children,Is(a),d=Pn(d),l=l(d),a.flags|=1,On(e,a,l,r),a.child;case 14:return Dv(e,a,a.type,a.pendingProps,r);case 15:return Lv(e,a,a.type,a.pendingProps,r);case 19:return Vv(e,a,r);case 31:return Tb(e,a,r);case 22:return Nv(e,a,r,a.pendingProps);case 24:return Is(a),l=Pn(dn),e===null?(d=td(),d===null&&(d=Xe,m=Jf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),a.memoizedState={parent:l,cache:d},nd(a),Za(a,dn,d)):((e.lanes&r)!==0&&(id(e,a),Ko(a,null,null,r),Yo()),d=e.memoizedState,m=a.memoizedState,d.parent!==l?(d={parent:l,cache:l},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),Za(a,dn,l)):(l=m.cache,Za(a,dn,l),l!==d.cache&&Qf(a,[dn],r,!0))),On(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Sa(e){e.flags|=4}function Id(e,a,r,l,d){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(p1())e.flags|=8192;else throw Hs=Mc,ed}else e.flags&=-16777217}function Gv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ix(a))if(p1())e.flags|=8192;else throw Hs=Mc,ed}function Bc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ze():536870912,e.lanes|=a,Fr|=a)}function el(e,a){if(!Se)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function wb(e,a,r){var l=a.pendingProps;switch(Wf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(a),null;case 1:return Ze(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),va(dn),Xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(a)?Sa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Yf())),Ze(a),null;case 26:var d=a.type,m=a.memoizedState;return e===null?(Sa(a),m!==null?(Ze(a),Gv(a,m)):(Ze(a),Id(a,d,null,l,r))):m?m!==e.memoizedState?(Sa(a),Ze(a),Gv(a,m)):(Ze(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sa(a),Ze(a),Id(a,d,e,l,r)),null;case 27:if(pe(a),r=nt.current,d=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Sa(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ze(a),null}e=wt.current,Er(a)?Sg(a):(e=K1(d,l,r),a.stateNode=e,Sa(a))}return Ze(a),null;case 5:if(pe(a),d=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Sa(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ze(a),null}if(m=wt.current,Er(a))Sg(a);else{var S=tu(nt.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(d,{is:l.is}):S.createElement(d)}}m[fn]=a,m[wn]=l;t:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break t;for(;S.sibling===null;){if(S.return===null||S.return===a)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=m;t:switch(zn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Sa(a)}}return Ze(a),Id(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Sa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=nt.current,Er(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,d=Un,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[fn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||I1(e.nodeValue,r)),e||Ka(a,!0)}else e=tu(e).createTextNode(l),e[fn]=a,a.stateNode=e}return Ze(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Er(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=a}else zs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ze(a),e=!1}else r=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(ci(a),a):(ci(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Ze(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Er(a),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[fn]=a}else zs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ze(a),d=!1}else d=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(ci(a),a):(ci(a),null)}return ci(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Bc(a,a.updateQueue),Ze(a),null);case 4:return Xt(),e===null&&rh(a.stateNode.containerInfo),Ze(a),null;case 10:return va(a.type),Ze(a),null;case 19:if(at(on),l=a.memoizedState,l===null)return Ze(a),null;if(d=(a.flags&128)!==0,m=l.rendering,m===null)if(d)el(l,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Ac(e),m!==null){for(a.flags|=128,el(l,!1),e=m.updateQueue,a.updateQueue=e,Bc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)gg(r,e),r=r.sibling;return vt(on,on.current&1|2),Se&&ma(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&E()>jc&&(a.flags|=128,d=!0,el(l,!1),a.lanes=4194304)}else{if(!d)if(e=Ac(m),e!==null){if(a.flags|=128,d=!0,e=e.updateQueue,a.updateQueue=e,Bc(a,e),el(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Se)return Ze(a),null}else 2*E()-l.renderingStartTime>jc&&r!==536870912&&(a.flags|=128,d=!0,el(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,r=on.current,vt(on,d?r&1|2:r&1),Se&&ma(a,l.treeForkCount),e):(Ze(a),null);case 22:case 23:return ci(a),od(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Ze(a),a.subtreeFlags&6&&(a.flags|=8192)):Ze(a),r=a.updateQueue,r!==null&&Bc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&at(Bs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),va(dn),Ze(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function Cb(e,a){switch(Wf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return va(dn),Xt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pe(a),null;case 31:if(a.memoizedState!==null){if(ci(a),a.alternate===null)throw Error(s(340));zs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ci(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));zs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return at(on),null;case 4:return Xt(),null;case 10:return va(a.type),null;case 22:case 23:return ci(a),od(),e!==null&&at(Bs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return va(dn),null;case 25:return null;default:return null}}function kv(e,a){switch(Wf(a),a.tag){case 3:va(dn),Xt();break;case 26:case 27:case 5:pe(a);break;case 4:Xt();break;case 31:a.memoizedState!==null&&ci(a);break;case 13:ci(a);break;case 19:at(on);break;case 10:va(a.type);break;case 22:case 23:ci(a),od(),e!==null&&at(Bs);break;case 24:va(dn)}}function nl(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var d=l.next;r=d;do{if((r.tag&e)===e){l=void 0;var m=r.create,S=r.inst;l=m(),S.destroy=l}r=r.next}while(r!==d)}}catch(w){Be(a,a.return,w)}}function ns(e,a,r){try{var l=a.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,d=a;var H=r,$=w;try{$()}catch(dt){Be(d,H,dt)}}}l=l.next}while(l!==m)}}catch(dt){Be(a,a.return,dt)}}function jv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{Pg(a,r)}catch(l){Be(e,e.return,l)}}}function Xv(e,a,r){r.props=js(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Be(e,a,l)}}function il(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(d){Be(e,a,d)}}function Zi(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(d){Be(e,a,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){Be(e,a,d)}else r.current=null}function Wv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(d){Be(e,e.return,d)}}function Bd(e,a,r){try{var l=e.stateNode;Zb(l,e.type,r,a),l[wn]=a}catch(d){Be(e,e.return,d)}}function qv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&cs(e.type)||e.tag===4}function Vd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&cs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hd(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=da));else if(l!==4&&(l===27&&cs(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Hd(e,a,r),e=e.sibling;e!==null;)Hd(e,a,r),e=e.sibling}function Vc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&cs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Vc(e,a,r),e=e.sibling;e!==null;)Vc(e,a,r),e=e.sibling}function Yv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);zn(a,l,r),a[fn]=e,a[wn]=r}catch(m){Be(e,e.return,m)}}var Ma=!1,mn=!1,Gd=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Rb(e,a){if(e=e.containerInfo,ch=ou,e=og(e),Of(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var S=0,w=-1,H=-1,$=0,dt=0,gt=e,et=null;e:for(;;){for(var lt;gt!==r||d!==0&&gt.nodeType!==3||(w=S+d),gt!==m||l!==0&&gt.nodeType!==3||(H=S+l),gt.nodeType===3&&(S+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)et=gt,gt=lt;for(;;){if(gt===e)break e;if(et===r&&++$===d&&(w=S),et===m&&++dt===l&&(H=S),(lt=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=lt}r=w===-1||H===-1?null:{start:w,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(uh={focusedElem:e,selectionRange:r},ou=!1,Tn=a;Tn!==null;)if(a=Tn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Tn=e;else for(;Tn!==null;){switch(a=Tn,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)d=e[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,d=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var kt=js(r.type,d);e=l.getSnapshotBeforeUpdate(kt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(r,r.return,ne)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)hh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Tn=e;break}Tn=a.return}}function Zv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(e,r),l&4&&nl(5,r);break;case 1:if(Ea(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(S){Be(r,r.return,S)}else{var d=js(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(d,a,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(r,r.return,S)}}l&64&&jv(r),l&512&&il(r,r.return);break;case 3:if(Ea(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Pg(e,a)}catch(S){Be(r,r.return,S)}}break;case 27:a===null&&l&4&&Yv(r);case 26:case 5:Ea(e,r),a===null&&l&4&&Wv(r),l&512&&il(r,r.return);break;case 12:Ea(e,r);break;case 31:Ea(e,r),l&4&&$v(e,r);break;case 13:Ea(e,r),l&4&&t1(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Ib.bind(null,r),a3(e,r))));break;case 22:if(l=r.memoizedState!==null||Ma,!l){a=a!==null&&a.memoizedState!==null||mn,d=Ma;var m=mn;Ma=l,(mn=a)&&!m?Ta(e,r,(r.subtreeFlags&8772)!==0):Ea(e,r),Ma=d,mn=m}break;case 30:break;default:Ea(e,r)}}function Qv(e){var a=e.alternate;a!==null&&(e.alternate=null,Qv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Lo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Jn=!1;function ba(e,a,r){for(r=r.child;r!==null;)Jv(e,a,r),r=r.sibling}function Jv(e,a,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,r)}catch{}switch(r.tag){case 26:mn||Zi(r,a),ba(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||Zi(r,a);var l=$e,d=Jn;cs(r.type)&&($e=r.stateNode,Jn=!1),ba(e,a,r),dl(r.stateNode),$e=l,Jn=d;break;case 5:mn||Zi(r,a);case 6:if(l=$e,d=Jn,$e=null,ba(e,a,r),$e=l,Jn=d,$e!==null)if(Jn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(r.stateNode)}catch(m){Be(r,a,m)}else try{$e.removeChild(r.stateNode)}catch(m){Be(r,a,m)}break;case 18:$e!==null&&(Jn?(e=$e,j1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Xr(e)):j1($e,r.stateNode));break;case 4:l=$e,d=Jn,$e=r.stateNode.containerInfo,Jn=!0,ba(e,a,r),$e=l,Jn=d;break;case 0:case 11:case 14:case 15:ns(2,r,a),mn||ns(4,r,a),ba(e,a,r);break;case 1:mn||(Zi(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Xv(r,a,l)),ba(e,a,r);break;case 21:ba(e,a,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,ba(e,a,r),mn=l;break;default:ba(e,a,r)}}function $v(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xr(e)}catch(r){Be(a,a.return,r)}}}function t1(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xr(e)}catch(r){Be(a,a.return,r)}}function Db(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Kv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Kv),a;default:throw Error(s(435,e.tag))}}function Hc(e,a){var r=Db(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var d=Bb.bind(null,e,l);l.then(d,d)}})}function $n(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var d=r[l],m=e,S=a,w=S;t:for(;w!==null;){switch(w.tag){case 27:if(cs(w.type)){$e=w.stateNode,Jn=!1;break t}break;case 5:$e=w.stateNode,Jn=!1;break t;case 3:case 4:$e=w.stateNode.containerInfo,Jn=!0;break t}w=w.return}if($e===null)throw Error(s(160));Jv(m,S,d),$e=null,Jn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)e1(a,e),a=a.sibling}var Oi=null;function e1(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(a,e),ti(e),l&4&&(ns(3,e,e.return),nl(3,e),ns(5,e,e.return));break;case 1:$n(a,e),ti(e),l&512&&(mn||r===null||Zi(r,r.return)),l&64&&Ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var d=Oi;if($n(a,e),ti(e),l&512&&(mn||r===null||Zi(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Rs]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),zn(m,l,r),m[fn]=e,C(m),l=m;break t;case"link":var S=ex("link","href",d).get(l+(r.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(w,1);break e}}m=d.createElement(l),zn(m,l,r),d.head.appendChild(m);break;case"meta":if(S=ex("meta","content",d).get(l+(r.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(w,1);break e}}m=d.createElement(l),zn(m,l,r),d.head.appendChild(m);break;default:throw Error(s(468,l))}m[fn]=e,C(m),l=m}e.stateNode=l}else nx(d,e.type,e.stateNode);else e.stateNode=tx(d,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?nx(d,e.type,e.stateNode):tx(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bd(e,e.memoizedProps,r.memoizedProps)}break;case 27:$n(a,e),ti(e),l&512&&(mn||r===null||Zi(r,r.return)),r!==null&&l&4&&Bd(e,e.memoizedProps,r.memoizedProps);break;case 5:if($n(a,e),ti(e),l&512&&(mn||r===null||Zi(r,r.return)),e.flags&32){d=e.stateNode;try{xn(d,"")}catch(kt){Be(e,e.return,kt)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,Bd(e,d,r!==null?r.memoizedProps:d)),l&1024&&(Gd=!0);break;case 6:if($n(a,e),ti(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Be(e,e.return,kt)}}break;case 3:if(iu=null,d=Oi,Oi=eu(a.containerInfo),$n(a,e),Oi=d,ti(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Xr(a.containerInfo)}catch(kt){Be(e,e.return,kt)}Gd&&(Gd=!1,n1(e));break;case 4:l=Oi,Oi=eu(e.stateNode.containerInfo),$n(a,e),ti(e),Oi=l;break;case 12:$n(a,e),ti(e);break;case 31:$n(a,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 13:$n(a,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(kc=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 22:d=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,$=Ma,dt=mn;if(Ma=$||d,mn=dt||H,$n(a,e),mn=dt,Ma=$,ti(e),l&8192)t:for(a=e.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(r===null||H||Ma||mn||Xs(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){H=r=a;try{if(m=H.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=H.stateNode;var gt=H.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;w.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(kt){Be(H,H.return,kt)}}}else if(a.tag===6){if(r===null){H=a;try{H.stateNode.nodeValue=d?"":H.memoizedProps}catch(kt){Be(H,H.return,kt)}}}else if(a.tag===18){if(r===null){H=a;try{var lt=H.stateNode;d?X1(lt,!0):X1(H.stateNode,!1)}catch(kt){Be(H,H.return,kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Hc(e,r))));break;case 19:$n(a,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 30:break;case 21:break;default:$n(a,e),ti(e)}}function ti(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(qv(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var d=r.stateNode,m=Vd(e);Vc(e,m,d);break;case 5:var S=r.stateNode;r.flags&32&&(xn(S,""),r.flags&=-33);var w=Vd(e);Vc(e,w,S);break;case 3:case 4:var H=r.stateNode.containerInfo,$=Vd(e);Hd(e,$,H);break;default:throw Error(s(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function n1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;n1(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ea(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Zv(e,a.alternate,a),a=a.sibling}function Xs(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ns(4,a,a.return),Xs(a);break;case 1:Zi(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Xv(a,a.return,r),Xs(a);break;case 27:dl(a.stateNode);case 26:case 5:Zi(a,a.return),Xs(a);break;case 22:a.memoizedState===null&&Xs(a);break;case 30:Xs(a);break;default:Xs(a)}e=e.sibling}}function Ta(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,d=e,m=a,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ta(d,m,r),nl(4,m);break;case 1:if(Ta(d,m,r),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch($){Be(l,l.return,$)}if(l=m,d=l.updateQueue,d!==null){var w=l.stateNode;try{var H=d.shared.hiddenCallbacks;if(H!==null)for(d.shared.hiddenCallbacks=null,d=0;d<H.length;d++)Ug(H[d],w)}catch($){Be(l,l.return,$)}}r&&S&64&&jv(m),il(m,m.return);break;case 27:Yv(m);case 26:case 5:Ta(d,m,r),r&&l===null&&S&4&&Wv(m),il(m,m.return);break;case 12:Ta(d,m,r);break;case 31:Ta(d,m,r),r&&S&4&&$v(d,m);break;case 13:Ta(d,m,r),r&&S&4&&t1(d,m);break;case 22:m.memoizedState===null&&Ta(d,m,r),il(m,m.return);break;case 30:break;default:Ta(d,m,r)}a=a.sibling}}function kd(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ko(r))}function jd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ko(e))}function zi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)i1(e,a,r,l),a=a.sibling}function i1(e,a,r,l){var d=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a,r,l),d&2048&&nl(9,a);break;case 1:zi(e,a,r,l);break;case 3:zi(e,a,r,l),d&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ko(e)));break;case 12:if(d&2048){zi(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(a,a.return,H)}}else zi(e,a,r,l);break;case 31:zi(e,a,r,l);break;case 13:zi(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,S=a.alternate,a.memoizedState!==null?m._visibility&2?zi(e,a,r,l):al(e,a):m._visibility&2?zi(e,a,r,l):(m._visibility|=2,Pr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),d&2048&&kd(S,a);break;case 24:zi(e,a,r,l),d&2048&&jd(a.alternate,a);break;default:zi(e,a,r,l)}}function Pr(e,a,r,l,d){for(d=d&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,S=a,w=r,H=l,$=S.flags;switch(S.tag){case 0:case 11:case 15:Pr(m,S,w,H,d),nl(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Pr(m,S,w,H,d):al(m,S):(dt._visibility|=2,Pr(m,S,w,H,d)),d&&$&2048&&kd(S.alternate,S);break;case 24:Pr(m,S,w,H,d),d&&$&2048&&jd(S.alternate,S);break;default:Pr(m,S,w,H,d)}a=a.sibling}}function al(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,d=l.flags;switch(l.tag){case 22:al(r,l),d&2048&&kd(l.alternate,l);break;case 24:al(r,l),d&2048&&jd(l.alternate,l);break;default:al(r,l)}a=a.sibling}}var sl=8192;function Or(e,a,r){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)a1(e,a,r),e=e.sibling}function a1(e,a,r){switch(e.tag){case 26:Or(e,a,r),e.flags&sl&&e.memoizedState!==null&&g3(r,Oi,e.memoizedState,e.memoizedProps);break;case 5:Or(e,a,r);break;case 3:case 4:var l=Oi;Oi=eu(e.stateNode.containerInfo),Or(e,a,r),Oi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=sl,sl=16777216,Or(e,a,r),sl=l):Or(e,a,r));break;default:Or(e,a,r)}}function s1(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function rl(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,o1(l,e)}s1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r1(e),e=e.sibling}function r1(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&ns(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Gc(e)):rl(e);break;default:rl(e)}}function Gc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,o1(l,e)}s1(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ns(8,a,a.return),Gc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Gc(a));break;default:Gc(a)}e=e.sibling}}function o1(e,a){for(;Tn!==null;){var r=Tn;switch(r.tag){case 0:case 11:case 15:ns(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Tn=l;else t:for(r=e;Tn!==null;){l=Tn;var d=l.sibling,m=l.return;if(Qv(l),l===r){Tn=null;break t}if(d!==null){d.return=m,Tn=d;break t}Tn=m}}}var Lb={getCacheForType:function(e){var a=Pn(dn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Pn(dn).controller.signal}},Nb=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,ge=null,_e=0,Ie=0,ui=null,is=!1,zr=!1,Xd=!1,Aa=0,sn=0,as=0,Ws=0,Wd=0,fi=0,Fr=0,ol=null,ei=null,qd=!1,kc=0,l1=0,jc=1/0,Xc=null,ss=null,_n=0,rs=null,Ir=null,wa=0,Yd=0,Kd=null,c1=null,ll=0,Zd=null;function di(){return(Ne&2)!==0&&_e!==0?_e&-_e:B.T!==null?nh():Ro()}function u1(){if(fi===0)if((_e&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function ni(e,a,r){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Br(e,0),os(e,_e,fi,!1)),Vn(e,r),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(Ws|=r),sn===4&&os(e,_e,fi,!1)),Qi(e))}function f1(e,a,r){if((Ne&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||Ct(e,a),d=l?Ob(e,a):Jd(e,a,!0),m=l;do{if(d===0){zr&&!l&&os(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!Ub(r)){d=Jd(e,a,!1),m=!1;continue}if(d===2){if(m=a,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;t:{var w=e;d=ol;var H=w.current.memoizedState.isDehydrated;if(H&&(Br(w,S).flags|=256),S=Jd(w,S,!1),S!==2){if(Xd&&!H){w.errorRecoveryDisabledLanes|=m,Ws|=m,d=4;break t}m=ei,ei=d,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){Br(e,0),os(e,a,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:os(l,a,fi,!is);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(d=kc+300-E(),10<d)){if(os(l,a,fi,!is),xt(l,0,!0)!==0)break t;wa=a,l.timeoutHandle=G1(d1.bind(null,l,r,ei,Xc,qd,a,fi,Ws,Fr,is,m,"Throttled",-0,0),d);break t}d1(l,r,ei,Xc,qd,a,fi,Ws,Fr,is,m,null,-0,0)}}break}while(!0);Qi(e)}function d1(e,a,r,l,d,m,S,w,H,$,dt,gt,et,lt){if(e.timeoutHandle=-1,gt=a.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},a1(a,m,gt);var kt=(m&62914560)===m?kc-E():(m&4194048)===m?l1-E():0;if(kt=v3(gt,kt),kt!==null){wa=m,e.cancelPendingCommit=kt(y1.bind(null,e,a,m,r,l,d,S,w,H,dt,gt,null,et,lt)),os(e,m,S,!$);return}}y1(e,a,m,r,l,d,S,w,H)}function Ub(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var d=r[l],m=d.getSnapshot;d=d.value;try{if(!ri(m(),d))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function os(e,a,r,l){a&=~Wd,a&=~Ws,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var d=a;0<d;){var m=31-zt(d),S=1<<m;l[m]=-1,d&=~S}r!==0&&ic(e,r,a)}function Wc(){return(Ne&6)===0?(cl(0),!1):!0}function Qd(){if(ge!==null){if(Ie===0)var e=ge.return;else e=ge,ga=Fs=null,hd(e),Rr=null,Xo=0,e=ge;for(;e!==null;)kv(e.alternate,e),e=e.return;ge=null}}function Br(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,$b(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),wa=0,Qd(),Xe=e,ge=r=pa(e.current,null),_e=a,Ie=0,ui=null,is=!1,zr=Ct(e,a),Xd=!1,Fr=fi=Wd=Ws=as=sn=0,ei=ol=null,qd=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var d=31-zt(l),m=1<<d;a|=e[d],l&=~m}return Aa=a,hc(),r}function h1(e,a){ce=null,B.H=$o,a===Cr||a===Sc?(a=Rg(),Ie=3):a===ed?(a=Rg(),Ie=4):Ie=a===Rd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ui=a,ge===null&&(sn=1,Oc(e,xi(a,e.current)))}function p1(){var e=li.current;return e===null?!0:(_e&4194048)===_e?Mi===null:(_e&62914560)===_e||(_e&536870912)!==0?e===Mi:!1}function m1(){var e=B.H;return B.H=$o,e===null?$o:e}function g1(){var e=B.A;return B.A=Lb,e}function qc(){sn=4,is||(_e&4194048)!==_e&&li.current!==null||(zr=!0),(as&134217727)===0&&(Ws&134217727)===0||Xe===null||os(Xe,_e,fi,!1)}function Jd(e,a,r){var l=Ne;Ne|=2;var d=m1(),m=g1();(Xe!==e||_e!==a)&&(Xc=null,Br(e,a)),a=!1;var S=sn;t:do try{if(Ie!==0&&ge!==null){var w=ge,H=ui;switch(Ie){case 8:Qd(),S=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(a=!0);var $=Ie;if(Ie=0,ui=null,Vr(e,w,H,$),r&&zr){S=0;break t}break;default:$=Ie,Ie=0,ui=null,Vr(e,w,H,$)}}Pb(),S=sn;break}catch(dt){h1(e,dt)}while(!0);return a&&e.shellSuspendCounter++,ga=Fs=null,Ne=l,B.H=d,B.A=m,ge===null&&(Xe=null,_e=0,hc()),S}function Pb(){for(;ge!==null;)v1(ge)}function Ob(e,a){var r=Ne;Ne|=2;var l=m1(),d=g1();Xe!==e||_e!==a?(Xc=null,jc=E()+500,Br(e,a)):zr=Ct(e,a);t:do try{if(Ie!==0&&ge!==null){a=ge;var m=ui;e:switch(Ie){case 1:Ie=0,ui=null,Vr(e,a,m,1);break;case 2:case 9:if(wg(m)){Ie=0,ui=null,x1(a);break}a=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),Qi(e)},m.then(a,a);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:wg(m)?(Ie=0,ui=null,x1(a)):(Ie=0,ui=null,Vr(e,a,m,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var w=ge;if(S?ix(S):w.stateNode.complete){Ie=0,ui=null;var H=w.sibling;if(H!==null)ge=H;else{var $=w.return;$!==null?(ge=$,Yc($)):ge=null}break e}}Ie=0,ui=null,Vr(e,a,m,5);break;case 6:Ie=0,ui=null,Vr(e,a,m,6);break;case 8:Qd(),sn=6;break t;default:throw Error(s(462))}}zb();break}catch(dt){h1(e,dt)}while(!0);return ga=Fs=null,B.H=l,B.A=d,Ne=r,ge!==null?0:(Xe=null,_e=0,hc(),sn)}function zb(){for(;ge!==null&&!Kt();)v1(ge)}function v1(e){var a=Hv(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,a===null?Yc(e):ge=a}function x1(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Ov(r,a,a.pendingProps,a.type,void 0,_e);break;case 11:a=Ov(r,a,a.pendingProps,a.type.render,a.ref,_e);break;case 5:hd(a);default:kv(r,a),a=ge=gg(a,Aa),a=Hv(r,a,Aa)}e.memoizedProps=e.pendingProps,a===null?Yc(e):ge=a}function Vr(e,a,r,l){ga=Fs=null,hd(a),Rr=null,Xo=0;var d=a.return;try{if(Eb(e,d,a,r,_e)){sn=1,Oc(e,xi(r,e.current)),ge=null;return}}catch(m){if(d!==null)throw ge=d,m;sn=1,Oc(e,xi(r,e.current)),ge=null;return}a.flags&32768?(Se||l===1?e=!0:zr||(_e&536870912)!==0?e=!1:(is=e=!0,(l===2||l===9||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),_1(a,e)):Yc(a)}function Yc(e){var a=e;do{if((a.flags&32768)!==0){_1(a,is);return}e=a.return;var r=wb(a.alternate,a,Aa);if(r!==null){ge=r;return}if(a=a.sibling,a!==null){ge=a;return}ge=a=e}while(a!==null);sn===0&&(sn=5)}function _1(e,a){do{var r=Cb(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);sn=6,ge=null}function y1(e,a,r,l,d,m,S,w,H){e.cancelPendingCommit=null;do Kc();while(_n!==0);if((Ne&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=Vf,Li(e,r,m,S,w,H),e===Xe&&(ge=Xe=null,_e=0),Ir=a,rs=e,wa=r,Yd=m,Kd=d,c1=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vb(ct,function(){return T1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,d=V.p,V.p=2,S=Ne,Ne|=4;try{Rb(e,a,r)}finally{Ne=S,V.p=d,B.T=l}}_n=1,S1(),M1(),b1()}}function S1(){if(_n===1){_n=0;var e=rs,a=Ir,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=V.p;V.p=2;var d=Ne;Ne|=4;try{e1(a,e);var m=uh,S=og(e.containerInfo),w=m.focusedElem,H=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&rg(w.ownerDocument.documentElement,w)){if(H!==null&&Of(w)){var $=H.start,dt=H.end;if(dt===void 0&&(dt=$),"selectionStart"in w)w.selectionStart=$,w.selectionEnd=Math.min(dt,w.value.length);else{var gt=w.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var lt=et.getSelection(),kt=w.textContent.length,ne=Math.min(H.start,kt),je=H.end===void 0?ne:Math.min(H.end,kt);!lt.extend&&ne>je&&(S=je,je=ne,ne=S);var K=sg(w,ne),X=sg(w,je);if(K&&X&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var J=gt.createRange();J.setStart(K.node,K.offset),lt.removeAllRanges(),ne>je?(lt.addRange(J),lt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),lt.addRange(J))}}}}for(gt=[],lt=w;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<gt.length;w++){var mt=gt[w];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ou=!!ch,uh=ch=null}finally{Ne=d,V.p=l,B.T=r}}e.current=a,_n=2}}function M1(){if(_n===2){_n=0;var e=rs,a=Ir,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=V.p;V.p=2;var d=Ne;Ne|=4;try{Zv(e,a.alternate,a)}finally{Ne=d,V.p=l,B.T=r}}_n=3}}function b1(){if(_n===4||_n===3){_n=0,O();var e=rs,a=Ir,r=wa,l=c1;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?_n=5:(_n=0,Ir=rs=null,E1(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(ss=null),fr(r),a=a.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=B.T,d=V.p,V.p=2,B.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var w=l[S];m(w.value,{componentStack:w.stack})}}finally{B.T=a,V.p=d}}(wa&3)!==0&&Kc(),Qi(e),d=e.pendingLanes,(r&261930)!==0&&(d&42)!==0?e===Zd?ll++:(ll=0,Zd=e):ll=0,cl(0)}}function E1(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ko(a)))}function Kc(){return S1(),M1(),b1(),T1()}function T1(){if(_n!==5)return!1;var e=rs,a=Yd;Yd=0;var r=fr(wa),l=B.T,d=V.p;try{V.p=32>r?32:r,B.T=null,r=Kd,Kd=null;var m=rs,S=wa;if(_n=0,Ir=rs=null,wa=0,(Ne&6)!==0)throw Error(s(331));var w=Ne;if(Ne|=4,r1(m.current),i1(m,m.current,S,r),Ne=w,cl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{V.p=d,B.T=l,E1(e,a)}}function A1(e,a,r){a=xi(r,a),a=Cd(e.stateNode,a,2),e=$a(e,a,2),e!==null&&(Vn(e,2),Qi(e))}function Be(e,a,r){if(e.tag===3)A1(e,e,r);else for(;a!==null;){if(a.tag===3){A1(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ss===null||!ss.has(l))){e=xi(r,e),r=wv(2),l=$a(a,r,2),l!==null&&(Cv(r,l,a,e),Vn(l,2),Qi(l));break}}a=a.return}}function $d(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Nb;var d=new Set;l.set(a,d)}else d=l.get(a),d===void 0&&(d=new Set,l.set(a,d));d.has(r)||(Xd=!0,d.add(r),e=Fb.bind(null,e,a,r),a.then(e,e))}function Fb(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(_e&r)===r&&(sn===4||sn===3&&(_e&62914560)===_e&&300>E()-kc?(Ne&2)===0&&Br(e,0):Wd|=r,Fr===_e&&(Fr=0)),Qi(e)}function w1(e,a){a===0&&(a=ze()),e=Ps(e,a),e!==null&&(Vn(e,a),Qi(e))}function Ib(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),w1(e,r)}function Bb(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(r=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),w1(e,r)}function Vb(e,a){return be(e,a)}var Zc=null,Hr=null,th=!1,Qc=!1,eh=!1,ls=0;function Qi(e){e!==Hr&&e.next===null&&(Hr===null?Zc=Hr=e:Hr=Hr.next=e),Qc=!0,th||(th=!0,Gb())}function cl(e,a){if(!eh&&Qc){eh=!0;do for(var r=!1,l=Zc;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var S=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=d&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,L1(l,m))}else m=_e,m=xt(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ct(l,m)||(r=!0,L1(l,m));l=l.next}while(r);eh=!1}}function Hb(){C1()}function C1(){Qc=th=!1;var e=0;ls!==0&&Jb()&&(e=ls);for(var a=E(),r=null,l=Zc;l!==null;){var d=l.next,m=R1(l,a);m===0?(l.next=null,r===null?Zc=d:r.next=d,d===null&&(Hr=r)):(r=l,(e!==0||(m&3)!==0)&&(Qc=!0)),l=d}_n!==0&&_n!==5||cl(e),ls!==0&&(ls=0)}function R1(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-zt(m),w=1<<S,H=d[S];H===-1?((w&r)===0||(w&l)!==0)&&(d[S]=ae(w,a)):H<=a&&(e.expiredLanes|=w),m&=~w}if(a=Xe,r=_e,r=xt(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ue(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ct(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Ue(l),fr(r)){case 2:case 8:r=yt;break;case 32:r=ct;break;case 268435456:r=Rt;break;default:r=ct}return l=D1.bind(null,e),r=be(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Ue(l),e.callbackPriority=2,e.callbackNode=null,2}function D1(e,a){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Kc()&&e.callbackNode!==r)return null;var l=_e;return l=xt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(f1(e,l,a),R1(e,E()),e.callbackNode!=null&&e.callbackNode===r?D1.bind(null,e):null)}function L1(e,a){if(Kc())return null;f1(e,a,!0)}function Gb(){t3(function(){(Ne&6)!==0?be(pt,Hb):C1()})}function nh(){if(ls===0){var e=Ar;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),ls=e}return ls}function N1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sc(""+e)}function U1(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function kb(e,a,r,l,d){if(a==="submit"&&r&&r.stateNode===d){var m=N1((d[wn]||null).action),S=l.submitter;S&&(a=(a=S[wn]||null)?N1(a.formAction):S.getAttribute("formAction"),a!==null&&(m=a,S=null));var w=new cc("action","action",null,l,d);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ls!==0){var H=S?U1(d,S):new FormData(d);Md(r,{pending:!0,data:H,method:d.method,action:m},null,H)}}else typeof m=="function"&&(w.preventDefault(),H=S?U1(d,S):new FormData(d),Md(r,{pending:!0,data:H,method:d.method,action:m},m,H))},currentTarget:d}]})}}for(var ih=0;ih<Bf.length;ih++){var ah=Bf[ih],jb=ah.toLowerCase(),Xb=ah[0].toUpperCase()+ah.slice(1);Pi(jb,"on"+Xb)}Pi(ug,"onAnimationEnd"),Pi(fg,"onAnimationIteration"),Pi(dg,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(ob,"onTransitionRun"),Pi(lb,"onTransitionStart"),Pi(cb,"onTransitionCancel"),Pi(hg,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function P1(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],d=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var S=l.length-1;0<=S;S--){var w=l[S],H=w.instance,$=w.currentTarget;if(w=w.listener,H!==m&&d.isPropagationStopped())break t;m=w,d.currentTarget=$;try{m(d)}catch(dt){dc(dt)}d.currentTarget=null,m=H}else for(S=0;S<l.length;S++){if(w=l[S],H=w.instance,$=w.currentTarget,w=w.listener,H!==m&&d.isPropagationStopped())break t;m=w,d.currentTarget=$;try{m(d)}catch(dt){dc(dt)}d.currentTarget=null,m=H}}}}function ve(e,a){var r=a[dr];r===void 0&&(r=a[dr]=new Set);var l=e+"__bubble";r.has(l)||(O1(a,e,2,!1),r.add(l))}function sh(e,a,r){var l=0;a&&(l|=4),O1(r,e,l,a)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function rh(e){if(!e[Jc]){e[Jc]=!0,Y.forEach(function(r){r!=="selectionchange"&&(Wb.has(r)||sh(r,!1,e),sh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Jc]||(a[Jc]=!0,sh("selectionchange",!1,a))}}function O1(e,a,r,l){switch(ux(a)){case 2:var d=y3;break;case 8:d=S3;break;default:d=Sh}r=d.bind(null,a,r,e),d=void 0,!Af||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(a,r,{capture:!0,passive:d}):e.addEventListener(a,r,!0):d!==void 0?e.addEventListener(a,r,{passive:d}):e.addEventListener(a,r,!1)}function oh(e,a,r,l,d){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===d)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;w!==null;){if(S=ka(w),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){l=m=S;continue t}w=w.parentNode}}l=l.return}V0(function(){var $=m,dt=Ef(r),gt=[];t:{var et=pg.get(e);if(et!==void 0){var lt=cc,kt=e;switch(e){case"keypress":if(oc(r)===0)break t;case"keydown":case"keyup":lt=BM;break;case"focusin":kt="focus",lt=Df;break;case"focusout":kt="blur",lt=Df;break;case"beforeblur":case"afterblur":lt=Df;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=k0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=GM;break;case ug:case fg:case dg:lt=DM;break;case hg:lt=jM;break;case"scroll":case"scrollend":lt=TM;break;case"wheel":lt=WM;break;case"copy":case"cut":case"paste":lt=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=X0;break;case"toggle":case"beforetoggle":lt=YM}var ne=(a&4)!==0,je=!ne&&(e==="scroll"||e==="scrollend"),K=ne?et!==null?et+"Capture":null:et;ne=[];for(var X=$,J;X!==null;){var mt=X;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=No(X,K),mt!=null&&ne.push(fl(X,mt,J))),je)break;X=X.return}0<ne.length&&(et=new lt(et,kt,null,r,dt),gt.push({event:et,listeners:ne}))}}if((a&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",et&&r!==bf&&(kt=r.relatedTarget||r.fromElement)&&(ka(kt)||kt[Ni]))break t;if((lt||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,lt?(kt=r.relatedTarget||r.toElement,lt=$,kt=kt?ka(kt):null,kt!==null&&(je=c(kt),ne=kt.tag,kt!==je||ne!==5&&ne!==27&&ne!==6)&&(kt=null)):(lt=null,kt=$),lt!==kt)){if(ne=k0,mt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=X0,mt="onPointerLeave",K="onPointerEnter",X="pointer"),je=lt==null?et:Ds(lt),J=kt==null?et:Ds(kt),et=new ne(mt,X+"leave",lt,r,dt),et.target=je,et.relatedTarget=J,mt=null,ka(dt)===$&&(ne=new ne(K,X+"enter",kt,r,dt),ne.target=J,ne.relatedTarget=je,mt=ne),je=mt,lt&&kt)e:{for(ne=qb,K=lt,X=kt,J=0,mt=K;mt;mt=ne(mt))J++;mt=0;for(var $t=X;$t;$t=ne($t))mt++;for(;0<J-mt;)K=ne(K),J--;for(;0<mt-J;)X=ne(X),mt--;for(;J--;){if(K===X||X!==null&&K===X.alternate){ne=K;break e}K=ne(K),X=ne(X)}ne=null}else ne=null;lt!==null&&z1(gt,et,lt,ne,!1),kt!==null&&je!==null&&z1(gt,je,kt,ne,!0)}}t:{if(et=$?Ds($):window,lt=et.nodeName&&et.nodeName.toLowerCase(),lt==="select"||lt==="input"&&et.type==="file")var Ae=$0;else if(Q0(et))if(tg)Ae=ab;else{Ae=nb;var Zt=eb}else lt=et.nodeName,!lt||lt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Ui($.elementType)&&(Ae=$0):Ae=ib;if(Ae&&(Ae=Ae(e,$))){J0(gt,Ae,r,dt);break t}Zt&&Zt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&Rn(et,"number",et.value)}switch(Zt=$?Ds($):window,e){case"focusin":(Q0(Zt)||Zt.contentEditable==="true")&&(xr=Zt,zf=$,Vo=null);break;case"focusout":Vo=zf=xr=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,lg(gt,r,dt);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":lg(gt,r,dt)}var fe;if(Nf)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else vr?K0(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(W0&&r.locale!=="ko"&&(vr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&vr&&(fe=H0()):(Wa=dt,wf="value"in Wa?Wa.value:Wa.textContent,vr=!0)),Zt=$c($,ye),0<Zt.length&&(ye=new j0(ye,e,null,r,dt),gt.push({event:ye,listeners:Zt}),fe?ye.data=fe:(fe=Z0(r),fe!==null&&(ye.data=fe)))),(fe=ZM?QM(e,r):JM(e,r))&&(ye=$c($,"onBeforeInput"),0<ye.length&&(Zt=new j0("onBeforeInput","beforeinput",null,r,dt),gt.push({event:Zt,listeners:ye}),Zt.data=fe)),kb(gt,e,$,r,dt)}P1(gt,a)})}function fl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function $c(e,a){for(var r=a+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=No(e,r),d!=null&&l.unshift(fl(e,d,m)),d=No(e,a),d!=null&&l.push(fl(e,d,m))),e.tag===3)return l;e=e.return}return[]}function qb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function z1(e,a,r,l,d){for(var m=a._reactName,S=[];r!==null&&r!==l;){var w=r,H=w.alternate,$=w.stateNode;if(w=w.tag,H!==null&&H===l)break;w!==5&&w!==26&&w!==27||$===null||(H=$,d?($=No(r,m),$!=null&&S.unshift(fl(r,$,H))):d||($=No(r,m),$!=null&&S.push(fl(r,$,H)))),r=r.return}S.length!==0&&e.push({event:a,listeners:S})}var Yb=/\r\n?/g,Kb=/\u0000|\uFFFD/g;function F1(e){return(typeof e=="string"?e:""+e).replace(Yb,`
`).replace(Kb,"")}function I1(e,a){return a=F1(a),F1(e)===a}function ke(e,a,r,l,d,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||xn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&xn(e,""+l);break;case"className":te(e,"class",l);break;case"tabIndex":te(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,r,l);break;case"style":pr(e,l,m);break;case"data":if(a!=="object"){te(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sc(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&ke(e,a,"name",d.name,d,null),ke(e,a,"formEncType",d.formEncType,d,null),ke(e,a,"formMethod",d.formMethod,d,null),ke(e,a,"formTarget",d.formTarget,d,null)):(ke(e,a,"encType",d.encType,d,null),ke(e,a,"method",d.method,d,null),ke(e,a,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sc(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=da);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=sc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),qt(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=bM.get(r)||r,qt(e,r,l))}}function lh(e,a,r,l,d,m){switch(r){case"style":pr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?xn(e,l):(typeof l=="number"||typeof l=="bigint")&&xn(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),a=r.slice(2,d?r.length-7:void 0),m=e[wn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,d);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):qt(e,r,l)}}}function zn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var S=r[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,m,S,r,null)}}d&&ke(e,a,"srcSet",r.srcSet,r,null),l&&ke(e,a,"src",r.src,r,null);return;case"input":ve("invalid",e);var w=m=S=d=null,H=null,$=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":d=dt;break;case"type":S=dt;break;case"checked":H=dt;break;case"defaultChecked":$=dt;break;case"value":m=dt;break;case"defaultValue":w=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:ke(e,a,l,dt,r,null)}}fa(e,m,w,H,$,S,d,!1);return;case"select":ve("invalid",e),l=S=m=null;for(d in r)if(r.hasOwnProperty(d)&&(w=r[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:ke(e,a,d,w,r,null)}a=m,r=S,e.multiple=!!l,a!=null?gi(e,!!l,a,!1):r!=null&&gi(e,!!l,r,!0);return;case"textarea":ve("invalid",e),m=d=l=null;for(S in r)if(r.hasOwnProperty(S)&&(w=r[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ke(e,a,S,w,r,null)}Dn(e,l,d,m);return;case"option":for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!=null)&&(H==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ke(e,a,H,l,r,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<ul.length;l++)ve(ul[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,$,l,r,null)}return;default:if(Ui(a)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&lh(e,a,dt,l,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(l=r[w],l!=null&&ke(e,a,w,l,r,null))}function Zb(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,w=null,H=null,$=null,dt=null;for(lt in r){var gt=r[lt];if(r.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=gt;default:l.hasOwnProperty(lt)||ke(e,a,lt,null,l,gt)}}for(var et in l){var lt=l[et];if(gt=r[et],l.hasOwnProperty(et)&&(lt!=null||gt!=null))switch(et){case"type":m=lt;break;case"name":d=lt;break;case"checked":$=lt;break;case"defaultChecked":dt=lt;break;case"value":S=lt;break;case"defaultValue":w=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,a));break;default:lt!==gt&&ke(e,a,et,lt,l,gt)}}Cn(e,S,w,H,$,dt,m,d);return;case"select":lt=S=w=et=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":lt=H;default:l.hasOwnProperty(m)||ke(e,a,m,null,l,H)}for(d in l)if(m=l[d],H=r[d],l.hasOwnProperty(d)&&(m!=null||H!=null))switch(d){case"value":et=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==H&&ke(e,a,d,m,l,H)}a=w,r=S,l=lt,et!=null?gi(e,!!r,et,!1):!!l!=!!r&&(a!=null?gi(e,!!r,a,!0):gi(e,!!r,r?[]:"",!1));return;case"textarea":lt=et=null;for(w in r)if(d=r[w],r.hasOwnProperty(w)&&d!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ke(e,a,w,null,l,d)}for(S in l)if(d=l[S],m=r[S],l.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":et=d;break;case"defaultValue":lt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&ke(e,a,S,d,l,m)}Fe(e,et,lt);return;case"option":for(var kt in r)et=r[kt],r.hasOwnProperty(kt)&&et!=null&&!l.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:ke(e,a,kt,null,l,et));for(H in l)et=l[H],lt=r[H],l.hasOwnProperty(H)&&et!==lt&&(et!=null||lt!=null)&&(H==="selected"?e.selected=et&&typeof et!="function"&&typeof et!="symbol":ke(e,a,H,et,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in r)et=r[ne],r.hasOwnProperty(ne)&&et!=null&&!l.hasOwnProperty(ne)&&ke(e,a,ne,null,l,et);for($ in l)if(et=l[$],lt=r[$],l.hasOwnProperty($)&&et!==lt&&(et!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,a));break;default:ke(e,a,$,et,l,lt)}return;default:if(Ui(a)){for(var je in r)et=r[je],r.hasOwnProperty(je)&&et!==void 0&&!l.hasOwnProperty(je)&&lh(e,a,je,void 0,l,et);for(dt in l)et=l[dt],lt=r[dt],!l.hasOwnProperty(dt)||et===lt||et===void 0&&lt===void 0||lh(e,a,dt,et,l,lt);return}}for(var K in r)et=r[K],r.hasOwnProperty(K)&&et!=null&&!l.hasOwnProperty(K)&&ke(e,a,K,null,l,et);for(gt in l)et=l[gt],lt=r[gt],!l.hasOwnProperty(gt)||et===lt||et==null&&lt==null||ke(e,a,gt,et,l,lt)}function B1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var d=r[l],m=d.transferSize,S=d.initiatorType,w=d.duration;if(m&&w&&B1(S)){for(S=0,w=d.responseEnd,l+=1;l<r.length;l++){var H=r[l],$=H.startTime;if($>w)break;var dt=H.transferSize,gt=H.initiatorType;dt&&B1(gt)&&(H=H.responseEnd,S+=dt*(H<w?1:(w-$)/(H-$)))}if(--l,a+=8*(m+S)/(d.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ch=null,uh=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function V1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H1(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function fh(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var dh=null;function Jb(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var G1=typeof setTimeout=="function"?setTimeout:void 0,$b=typeof clearTimeout=="function"?clearTimeout:void 0,k1=typeof Promise=="function"?Promise:void 0,t3=typeof queueMicrotask=="function"?queueMicrotask:typeof k1<"u"?function(e){return k1.resolve(null).then(e).catch(e3)}:G1;function e3(e){setTimeout(function(){throw e})}function cs(e){return e==="head"}function j1(e,a){var r=a,l=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(d),Xr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")dl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,dl(r);for(var m=r.firstChild;m;){var S=m.nextSibling,w=m.nodeName;m[Rs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}}else r==="body"&&dl(e.ownerDocument.body);r=d}while(r);Xr(a)}function X1(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function hh(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":hh(r),Lo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function n3(e,a,r,l){for(;e.nodeType===1;){var d=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function i3(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=bi(e.nextSibling),e===null))return null;return e}function W1(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function ph(e){return e.data==="$?"||e.data==="$~"}function mh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function a3(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var gh=null;function q1(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return bi(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function Y1(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function K1(e,a,r){switch(a=tu(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Lo(e)}var Ei=new Map,Z1=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=V.d;V.d={f:s3,r:r3,D:o3,C:l3,L:c3,m:u3,X:d3,S:f3,M:h3};function s3(){var e=Ca.f(),a=Wc();return e||a}function r3(e){var a=ja(e);a!==null&&a.tag===5&&a.type==="form"?hv(a):Ca.r(e)}var Gr=typeof document>"u"?null:document;function Q1(e,a,r){var l=Gr;if(l&&typeof a=="string"&&a){var d=se(a);d='link[rel="'+e+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),Z1.has(d)||(Z1.add(d),e={rel:e,crossOrigin:r,href:a},l.querySelector(d)===null&&(a=l.createElement("link"),zn(a,"link",e),C(a),l.head.appendChild(a)))}}function o3(e){Ca.D(e),Q1("dns-prefetch",e,null)}function l3(e,a){Ca.C(e,a),Q1("preconnect",e,a)}function c3(e,a,r){Ca.L(e,a,r);var l=Gr;if(l&&e&&a){var d='link[rel="preload"][as="'+se(a)+'"]';a==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+se(r.imageSizes)+'"]')):d+='[href="'+se(e)+'"]';var m=d;switch(a){case"style":m=kr(e);break;case"script":m=jr(e)}Ei.has(m)||(e=v({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Ei.set(m,e),l.querySelector(d)!==null||a==="style"&&l.querySelector(hl(m))||a==="script"&&l.querySelector(pl(m))||(a=l.createElement("link"),zn(a,"link",e),C(a),l.head.appendChild(a)))}}function u3(e,a){Ca.m(e,a);var r=Gr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=jr(e)}if(!Ei.has(m)&&(e=v({rel:"modulepreload",href:e},a),Ei.set(m,e),r.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(pl(m)))return}l=r.createElement("link"),zn(l,"link",e),C(l),r.head.appendChild(l)}}}function f3(e,a,r){Ca.S(e,a,r);var l=Gr;if(l&&e){var d=Xa(l).hoistableStyles,m=kr(e);a=a||"default";var S=d.get(m);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(hl(m)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Ei.get(m))&&vh(e,r);var H=S=l.createElement("link");C(H),zn(H,"link",e),H._p=new Promise(function($,dt){H.onload=$,H.onerror=dt}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,nu(S,a,l)}S={type:"stylesheet",instance:S,count:1,state:w},d.set(m,S)}}}function d3(e,a){Ca.X(e,a);var r=Gr;if(r&&e){var l=Xa(r).hoistableScripts,d=jr(e),m=l.get(d);m||(m=r.querySelector(pl(d)),m||(e=v({src:e,async:!0},a),(a=Ei.get(d))&&xh(e,a),m=r.createElement("script"),C(m),zn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function h3(e,a){Ca.M(e,a);var r=Gr;if(r&&e){var l=Xa(r).hoistableScripts,d=jr(e),m=l.get(d);m||(m=r.querySelector(pl(d)),m||(e=v({src:e,async:!0,type:"module"},a),(a=Ei.get(d))&&xh(e,a),m=r.createElement("script"),C(m),zn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function J1(e,a,r,l){var d=(d=nt.current)?eu(d):null;if(!d)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=kr(r.href),r=Xa(d).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=kr(r.href);var m=Xa(d).hoistableStyles,S=m.get(e);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=d.querySelector(hl(e)))&&!m._p&&(S.instance=m,S.state.loading=5),Ei.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ei.set(e,r),m||p3(d,e,r,S.state))),a&&l===null)throw Error(s(528,""));return S}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=jr(r),r=Xa(d).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function kr(e){return'href="'+se(e)+'"'}function hl(e){return'link[rel="stylesheet"]['+e+"]"}function $1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function p3(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),zn(a,"link",r),C(a),e.head.appendChild(a))}function jr(e){return'[src="'+se(e)+'"]'}function pl(e){return"script[async]"+e}function tx(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+se(r.href)+'"]');if(l)return a.instance=l,C(l),l;var d=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),C(l),zn(l,"style",d),nu(l,r.precedence,e),a.instance=l;case"stylesheet":d=kr(r.href);var m=e.querySelector(hl(d));if(m)return a.state.loading|=4,a.instance=m,C(m),m;l=$1(r),(d=Ei.get(d))&&vh(l,d),m=(e.ownerDocument||e).createElement("link"),C(m);var S=m;return S._p=new Promise(function(w,H){S.onload=w,S.onerror=H}),zn(m,"link",l),a.state.loading|=4,nu(m,r.precedence,e),a.instance=m;case"script":return m=jr(r.src),(d=e.querySelector(pl(m)))?(a.instance=d,C(d),d):(l=r,(d=Ei.get(m))&&(l=v({},r),xh(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),C(d),zn(d,"link",l),e.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,nu(l,r.precedence,e));return a.instance}function nu(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===a)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function vh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function xh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var iu=null;function ex(e,a,r){if(iu===null){var l=new Map,d=iu=new Map;d.set(r,l)}else d=iu,l=d.get(r),l||(l=new Map,d.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),d=0;d<r.length;d++){var m=r[d];if(!(m[Rs]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(a)||"";S=e+S;var w=l.get(S);w?w.push(m):l.set(S,[m])}}return l}function nx(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function m3(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ix(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g3(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=kr(l.href),m=a.querySelector(hl(d));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=au.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=m,C(m);return}m=a.ownerDocument||a,l=$1(l),(d=Ei.get(d))&&vh(l,d),m=m.createElement("link"),C(m);var S=m;S._p=new Promise(function(w,H){S.onload=w,S.onerror=H}),zn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=au.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var _h=0;function v3(e,a){return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&_h===0&&(_h=62500*Qb());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>_h?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var su=null;function ru(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,su=new Map,a.forEach(x3,e),su=null,au.call(e))}function x3(e,a){if(!(a.state.loading&4)){var r=su.get(e);if(r)var l=r.get(null);else{r=new Map,su.set(e,r);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}d=a.instance,S=d.getAttribute("data-precedence"),m=r.get(S)||l,m===l&&r.set(null,d),r.set(S,d),this.count++,l=au.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),a.state.loading|=4}}var ml={$$typeof:D,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function _3(e,a,r,l,d,m,S,w,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function ax(e,a,r,l,d,m,S,w,H,$,dt,gt){return e=new _3(e,a,r,S,H,$,dt,gt,w),a=1,m===!0&&(a|=24),m=oi(3,null,null,a),e.current=m,m.stateNode=e,a=Jf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},nd(m),e}function sx(e){return e?(e=Sr,e):Sr}function rx(e,a,r,l,d,m){d=sx(d),l.context===null?l.context=d:l.pendingContext=d,l=Ja(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=$a(e,l,a),r!==null&&(ni(r,e,a),qo(r,e,a))}function ox(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function yh(e,a){ox(e,a),(e=e.alternate)&&ox(e,a)}function lx(e){if(e.tag===13||e.tag===31){var a=Ps(e,67108864);a!==null&&ni(a,e,67108864),yh(e,67108864)}}function cx(e){if(e.tag===13||e.tag===31){var a=di();a=Co(a);var r=Ps(e,a);r!==null&&ni(r,e,a),yh(e,a)}}var ou=!0;function y3(e,a,r,l){var d=B.T;B.T=null;var m=V.p;try{V.p=2,Sh(e,a,r,l)}finally{V.p=m,B.T=d}}function S3(e,a,r,l){var d=B.T;B.T=null;var m=V.p;try{V.p=8,Sh(e,a,r,l)}finally{V.p=m,B.T=d}}function Sh(e,a,r,l){if(ou){var d=Mh(l);if(d===null)oh(e,a,l,lu,r),fx(e,l);else if(b3(d,e,a,r,l))l.stopPropagation();else if(fx(e,l),a&4&&-1<M3.indexOf(e)){for(;d!==null;){var m=ja(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Mt(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var H=1<<31-zt(S);w.entanglements[1]|=H,S&=~H}Qi(m),(Ne&6)===0&&(jc=E()+500,cl(0))}}break;case 31:case 13:w=Ps(m,2),w!==null&&ni(w,m,2),Wc(),yh(m,2)}if(m=Mh(l),m===null&&oh(e,a,l,lu,r),m===d)break;d=m}d!==null&&l.stopPropagation()}else oh(e,a,l,null,r)}}function Mh(e){return e=Ef(e),bh(e)}var lu=null;function bh(e){if(lu=null,e=ka(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return lu=e,null}function ux(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case yt:return 8;case ct:case Qt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Eh=!1,us=null,fs=null,ds=null,gl=new Map,vl=new Map,hs=[],M3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fx(e,a){switch(e){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":gl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(a.pointerId)}}function xl(e,a,r,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},a!==null&&(a=ja(a),a!==null&&lx(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),e)}function b3(e,a,r,l,d){switch(a){case"focusin":return us=xl(us,e,a,r,l,d),!0;case"dragenter":return fs=xl(fs,e,a,r,l,d),!0;case"mouseover":return ds=xl(ds,e,a,r,l,d),!0;case"pointerover":var m=d.pointerId;return gl.set(m,xl(gl.get(m)||null,e,a,r,l,d)),!0;case"gotpointercapture":return m=d.pointerId,vl.set(m,xl(vl.get(m)||null,e,a,r,l,d)),!0}return!1}function dx(e){var a=ka(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,qi(e.priority,function(){cx(r)});return}}else if(a===31){if(a=f(r),a!==null){e.blockedOn=a,qi(e.priority,function(){cx(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Mh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);bf=l,r.target.dispatchEvent(l),bf=null}else return a=ja(r),a!==null&&lx(a),e.blockedOn=r,!1;a.shift()}return!0}function hx(e,a,r){cu(e)&&r.delete(a)}function E3(){Eh=!1,us!==null&&cu(us)&&(us=null),fs!==null&&cu(fs)&&(fs=null),ds!==null&&cu(ds)&&(ds=null),gl.forEach(hx),vl.forEach(hx)}function uu(e,a){e.blockedOn===a&&(e.blockedOn=null,Eh||(Eh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,E3)))}var fu=null;function px(e){fu!==e&&(fu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){fu===e&&(fu=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],d=e[a+2];if(typeof l!="function"){if(bh(l||r)===null)continue;break}var m=ja(r);m!==null&&(e.splice(a,3),a-=3,Md(m,{pending:!0,data:d,method:r.method,action:l},l,d))}}))}function Xr(e){function a(H){return uu(H,e)}us!==null&&uu(us,e),fs!==null&&uu(fs,e),ds!==null&&uu(ds,e),gl.forEach(a),vl.forEach(a);for(var r=0;r<hs.length;r++){var l=hs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<hs.length&&(r=hs[0],r.blockedOn===null);)dx(r),r.blockedOn===null&&hs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var d=r[l],m=r[l+1],S=d[wn]||null;if(typeof m=="function")S||px(r);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[wn]||null)w=S.formAction;else if(bh(d)!==null)continue}else w=S.action;typeof w=="function"?r[l+1]=w:(r.splice(l,3),l-=3),px(r)}}}function mx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return d=S})},focusReset:"manual",scroll:"manual"})}function a(){d!==null&&(d(),d=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),d!==null&&(d(),d=null)}}}function Th(e){this._internalRoot=e}du.prototype.render=Th.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=di();rx(r,l,e,a,null,null)},du.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;rx(e.current,2,null,e,null,null),Wc(),a[Ni]=null}};function du(e){this._internalRoot=e}du.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ro();e={blockedOn:null,target:e,priority:a};for(var r=0;r<hs.length&&a!==0&&a<hs[r].priority;r++);hs.splice(r,0,e),r===0&&dx(e)}};var gx=t.version;if(gx!=="19.2.4")throw Error(s(527,gx,"19.2.4"));V.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var T3={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{bt=hu.inject(T3),Et=hu}catch{}}return yl.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",d=bv,m=Ev,S=Tv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=ax(e,1,!1,null,null,r,l,null,d,m,S,mx),e[Ni]=a.current,rh(e),new Th(a)},yl.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,d="",m=bv,S=Ev,w=Tv,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),a=ax(e,1,!0,a,r??null,l,d,H,m,S,w,mx),a.context=sx(null),r=a.current,l=di(),l=Co(l),d=Ja(l),d.callback=null,$a(r,d,l),r=l,a.current.lanes=r,Vn(a,r),Qi(a),e[Ni]=a.current,rh(e),new du(a)},yl.version="19.2.4",yl}var Ax;function z3(){if(Ax)return Ch.exports;Ax=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Ch.exports=O3(),Ch.exports}var F3=z3();const Ym="182",I3=0,wx=1,B3=2,Gu=1,V3=2,Rl=3,Ts=0,ai=1,Pa=2,Fa=0,ho=1,wp=2,Cx=3,Rx=4,H3=5,nr=100,G3=101,k3=102,j3=103,X3=104,W3=200,q3=201,Y3=202,K3=203,Cp=204,Rp=205,Z3=206,Q3=207,J3=208,$3=209,tE=210,eE=211,nE=212,iE=213,aE=214,Dp=0,Lp=1,Np=2,go=3,Up=4,Pp=5,Op=6,zp=7,jy=0,sE=1,rE=2,ia=0,Xy=1,Wy=2,qy=3,Yy=4,Ky=5,Zy=6,Qy=7,Jy=300,cr=301,vo=302,Fp=303,Ip=304,pf=306,Bp=1e3,Oa=1001,Vp=1002,Bn=1003,oE=1004,pu=1005,jn=1006,Nh=1007,ar=1008,Ci=1009,$y=1010,t2=1011,zl=1012,Km=1013,la=1014,ea=1015,Ba=1016,Zm=1017,Qm=1018,Fl=1020,e2=35902,n2=35899,i2=1021,a2=1022,ki=1023,Va=1026,sr=1027,s2=1028,Jm=1029,xo=1030,$m=1031,t0=1033,ku=33776,ju=33777,Xu=33778,Wu=33779,Hp=35840,Gp=35841,kp=35842,jp=35843,Xp=36196,Wp=37492,qp=37496,Yp=37488,Kp=37489,Zp=37490,Qp=37491,Jp=37808,$p=37809,tm=37810,em=37811,nm=37812,im=37813,am=37814,sm=37815,rm=37816,om=37817,lm=37818,cm=37819,um=37820,fm=37821,dm=36492,hm=36494,pm=36495,mm=36283,gm=36284,vm=36285,xm=36286,lE=3200,cE=0,uE=1,Ms="",Ai="srgb",_o="srgb-linear",ef="linear",Ve="srgb",Wr=7680,Dx=519,fE=512,dE=513,hE=514,e0=515,pE=516,mE=517,n0=518,gE=519,Lx=35044,Nx="300 es",na=2e3,nf=2001;function r2(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function af(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vE(){const i=af("canvas");return i.style.display="block",i}const Ux={};function Px(...i){const t="THREE."+i.shift();console.log(t,...i)}function oe(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ce(...i){const t="THREE."+i.shift();console.error(t,...i)}function Il(...i){const t=i.join(" ");t in Ux||(Ux[t]=!0,oe(...i))}function xE(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Mo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=Math.PI/180,_m=180/Math.PI;function Xl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Me(i,t,n){return Math.max(t,Math.min(n,i))}function _E(i,t){return(i%t+t)%t}function Ph(i,t,n){return(1-n)*i+n*t}function Sl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(t=0,n=0){Oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wl{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,f){let p=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3],x=c[u+0],y=c[u+1],b=c[u+2],T=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=h,t[n+2]=g,t[n+3]=v;return}if(f>=1){t[n+0]=x,t[n+1]=y,t[n+2]=b,t[n+3]=T;return}if(v!==T||p!==x||h!==y||g!==b){let M=p*x+h*y+g*b+v*T;M<0&&(x=-x,y=-y,b=-b,T=-T,M=-M);let _=1-f;if(M<.9995){const N=Math.acos(M),D=Math.sin(N);_=Math.sin(_*N)/D,f=Math.sin(f*N)/D,p=p*_+x*f,h=h*_+y*f,g=g*_+b*f,v=v*_+T*f}else{p=p*_+x*f,h=h*_+y*f,g=g*_+b*f,v=v*_+T*f;const N=1/Math.sqrt(p*p+h*h+g*g+v*v);p*=N,h*=N,g*=N,v*=N}}t[n]=p,t[n+1]=h,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,c,u){const f=s[o],p=s[o+1],h=s[o+2],g=s[o+3],v=c[u],x=c[u+1],y=c[u+2],b=c[u+3];return t[n]=f*b+g*v+p*y-h*x,t[n+1]=p*b+g*x+h*v-f*y,t[n+2]=h*b+g*y+f*x-p*v,t[n+3]=g*b-f*v-p*x-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,h=f(s/2),g=f(o/2),v=f(c/2),x=p(s/2),y=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=x*g*v+h*y*b,this._y=h*y*v-x*g*b,this._z=h*g*b+x*y*v,this._w=h*g*v-x*y*b;break;case"YXZ":this._x=x*g*v+h*y*b,this._y=h*y*v-x*g*b,this._z=h*g*b-x*y*v,this._w=h*g*v+x*y*b;break;case"ZXY":this._x=x*g*v-h*y*b,this._y=h*y*v+x*g*b,this._z=h*g*b+x*y*v,this._w=h*g*v-x*y*b;break;case"ZYX":this._x=x*g*v-h*y*b,this._y=h*y*v+x*g*b,this._z=h*g*b-x*y*v,this._w=h*g*v+x*y*b;break;case"YZX":this._x=x*g*v+h*y*b,this._y=h*y*v+x*g*b,this._z=h*g*b-x*y*v,this._w=h*g*v-x*y*b;break;case"XZY":this._x=x*g*v-h*y*b,this._y=h*y*v-x*g*b,this._z=h*g*b+x*y*v,this._w=h*g*v+x*y*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],v=n[10],x=s+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-h)*y,this._z=(u-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(c-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(u-o)/y,this._x=(c+h)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=s*g+u*f+o*h-c*p,this._y=o*g+u*p+c*f-s*h,this._z=c*g+u*h+s*p-o*f,this._w=u*g-s*f-o*p-c*h,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(s=-s,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ox.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ox.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,h=2*(u*o-f*s),g=2*(f*n-c*o),v=2*(c*s-u*n);return this.x=n+p*h+u*v-f*g,this.y=s+p*g+f*h-c*v,this.z=o+p*v+c*g-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-s*p,this.z=s*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Oh.copy(this).projectOnVector(t),this.sub(Oh)}reflect(t){return this.sub(Oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new rt,Ox=new Wl;class de{constructor(t,n,s,o,c,u,f,p,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,h)}set(t,n,s,o,c,u,f,p,h){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[3],p=s[6],h=s[1],g=s[4],v=s[7],x=s[2],y=s[5],b=s[8],T=o[0],M=o[3],_=o[6],N=o[1],D=o[4],U=o[7],P=o[2],I=o[5],z=o[8];return c[0]=u*T+f*N+p*P,c[3]=u*M+f*D+p*I,c[6]=u*_+f*U+p*z,c[1]=h*T+g*N+v*P,c[4]=h*M+g*D+v*I,c[7]=h*_+g*U+v*z,c[2]=x*T+y*N+b*P,c[5]=x*M+y*D+b*I,c[8]=x*_+y*U+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8];return n*u*g-n*f*h-s*c*g+s*f*p+o*c*h-o*u*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],v=g*u-f*h,x=f*p-g*c,y=h*c-u*p,b=n*v+s*x+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=v*T,t[1]=(o*h-g*s)*T,t[2]=(f*s-o*u)*T,t[3]=x*T,t[4]=(g*n-o*p)*T,t[5]=(o*c-f*n)*T,t[6]=y*T,t[7]=(s*p-h*n)*T,t[8]=(u*n-s*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,f){const p=Math.cos(c),h=Math.sin(c);return this.set(s*p,s*h,-s*(p*u+h*f)+u+t,-o*h,o*p,-o*(-h*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(zh.makeScale(t,n)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,n){return this.premultiply(zh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new de,zx=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ve&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ve&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?ef:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[_o]:{primaries:t,whitePoint:s,transfer:ef,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}const Te=yE();function Ia(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qr;class SE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{qr===void 0&&(qr=af("canvas")),qr.width=t.width,qr.height=t.height;const o=qr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=qr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=af("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ia(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ia(n[s]/255)*255):n[s]=Ia(n[s]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ME=0;class i0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Fh(o[u].image)):c.push(Fh(o[u]))}else c=Fh(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Fh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?SE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let bE=0;const Ih=new rt;class Zn extends Mo{constructor(t=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,s=Oa,o=Oa,c=jn,u=ar,f=ki,p=Ci,h=Zn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Xl(),this.name="",this.source=new i0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bp:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case Vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bp:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case Vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Jy;Zn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,n=0,s=0,o=1){cn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const p=t.elements,h=p[0],g=p[4],v=p[8],x=p[1],y=p[5],b=p[9],T=p[2],M=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(b+M)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(h+1)/2,U=(y+1)/2,P=(_+1)/2,I=(g+x)/4,z=(v+T)/4,G=(b+M)/4;return D>U&&D>P?D<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(D),o=I/s,c=z/s):U>P?U<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),s=I/o,c=G/o):P<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),s=z/c,o=G/c),this.set(s,o,c,n),this}let N=Math.sqrt((M-b)*(M-b)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(v-T)/N,this.z=(x-g)/N,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends Mo{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new cn(0,0,t,n),this.scissorTest=!1,this.viewport=new cn(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Zn(o);this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new i0(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends EE{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class o2 extends Zn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends Zn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Fi):Fi.fromBufferAttribute(c,u),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mu.copy(s.boundingBox)),mu.applyMatrix4(t.matrixWorld),this.union(mu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ml),gu.subVectors(this.max,Ml),Yr.subVectors(t.a,Ml),Kr.subVectors(t.b,Ml),Zr.subVectors(t.c,Ml),ms.subVectors(Kr,Yr),gs.subVectors(Zr,Kr),qs.subVectors(Yr,Zr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-qs.z,qs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,qs.z,0,-qs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-qs.y,qs.x,0];return!Bh(n,Yr,Kr,Zr,gu)||(n=[1,0,0,0,1,0,0,0,1],!Bh(n,Yr,Kr,Zr,gu))?!1:(vu.crossVectors(ms,gs),n=[vu.x,vu.y,vu.z],Bh(n,Yr,Kr,Zr,gu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Fi=new rt,mu=new ql,Yr=new rt,Kr=new rt,Zr=new rt,ms=new rt,gs=new rt,qs=new rt,Ml=new rt,gu=new rt,vu=new rt,Ys=new rt;function Bh(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){Ys.fromArray(i,c);const f=o.x*Math.abs(Ys.x)+o.y*Math.abs(Ys.y)+o.z*Math.abs(Ys.z),p=t.dot(Ys),h=n.dot(Ys),g=s.dot(Ys);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const AE=new ql,bl=new rt,Vh=new rt;class mf{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):AE.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bl.subVectors(t,this.center);const n=bl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(bl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bl.copy(t.center).add(Vh)),this.expandByPoint(bl.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new rt,Hh=new rt,xu=new rt,vs=new rt,Gh=new rt,_u=new rt,kh=new rt;class l2{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Hh.copy(t).add(n).multiplyScalar(.5),xu.copy(n).sub(t).normalize(),vs.copy(this.origin).sub(Hh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(xu),f=vs.dot(this.direction),p=-vs.dot(xu),h=vs.lengthSq(),g=Math.abs(1-u*u);let v,x,y,b;if(g>0)if(v=u*p-f,x=u*f-p,b=c*g,v>=0)if(x>=-b)if(x<=b){const T=1/g;v*=T,x*=T,y=v*(v+u*x+2*f)+x*(u*v+x+2*p)+h}else x=c,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*p)+h;else x=-c,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*p)+h;else x<=-b?(v=Math.max(0,-(-u*c+f)),x=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+x*(x+2*p)+h):x<=b?(v=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+h):(v=Math.max(0,-(u*c+f)),x=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+x*(x+2*p)+h);else x=u>0?-c:c,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Hh).addScaledVector(xu,x),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const s=Da.dot(this.direction),o=Da.dot(Da)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(s=(t.min.x-x.x)*h,o=(t.max.x-x.x)*h):(s=(t.max.x-x.x)*h,o=(t.min.x-x.x)*h),g>=0?(c=(t.min.y-x.y)*g,u=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,u=(t.min.y-x.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(f=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,s,o,c){Gh.subVectors(n,t),_u.subVectors(s,t),kh.crossVectors(Gh,_u);let u=this.direction.dot(kh),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vs.subVectors(this.origin,t);const p=f*this.direction.dot(_u.crossVectors(vs,_u));if(p<0)return null;const h=f*this.direction.dot(Gh.cross(vs));if(h<0||p+h>u)return null;const g=-f*vs.dot(kh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,s,o,c,u,f,p,h,g,v,x,y,b,T,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,h,g,v,x,y,b,T,M)}set(t,n,s,o,c,u,f,p,h,g,v,x,y,b,T,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=s,_[12]=o,_[1]=c,_[5]=u,_[9]=f,_[13]=p,_[2]=h,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=b,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Qr.setFromMatrixColumn(t,0).length(),c=1/Qr.setFromMatrixColumn(t,1).length(),u=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=u*g,y=u*v,b=f*g,T=f*v;n[0]=p*g,n[4]=-p*v,n[8]=h,n[1]=y+b*h,n[5]=x-T*h,n[9]=-f*p,n[2]=T-x*h,n[6]=b+y*h,n[10]=u*p}else if(t.order==="YXZ"){const x=p*g,y=p*v,b=h*g,T=h*v;n[0]=x+T*f,n[4]=b*f-y,n[8]=u*h,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=y*f-b,n[6]=T+x*f,n[10]=u*p}else if(t.order==="ZXY"){const x=p*g,y=p*v,b=h*g,T=h*v;n[0]=x-T*f,n[4]=-u*v,n[8]=b+y*f,n[1]=y+b*f,n[5]=u*g,n[9]=T-x*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const x=u*g,y=u*v,b=f*g,T=f*v;n[0]=p*g,n[4]=b*h-y,n[8]=x*h+T,n[1]=p*v,n[5]=T*h+x,n[9]=y*h-b,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const x=u*p,y=u*h,b=f*p,T=f*h;n[0]=p*g,n[4]=T-x*v,n[8]=b*v+y,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=y*v+b,n[10]=x-T*v}else if(t.order==="XZY"){const x=u*p,y=u*h,b=f*p,T=f*h;n[0]=p*g,n[4]=-v,n[8]=h*g,n[1]=x*v+T,n[5]=u*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=f*g,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wE,t,CE)}lookAt(t,n,s){const o=this.elements;return hi.subVectors(t,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),xs.crossVectors(s,hi),xs.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),xs.crossVectors(s,hi)),xs.normalize(),yu.crossVectors(hi,xs),o[0]=xs.x,o[4]=yu.x,o[8]=hi.x,o[1]=xs.y,o[5]=yu.y,o[9]=hi.y,o[2]=xs.z,o[6]=yu.z,o[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[4],p=s[8],h=s[12],g=s[1],v=s[5],x=s[9],y=s[13],b=s[2],T=s[6],M=s[10],_=s[14],N=s[3],D=s[7],U=s[11],P=s[15],I=o[0],z=o[4],G=o[8],A=o[12],L=o[1],j=o[5],it=o[9],st=o[13],ht=o[2],ut=o[6],B=o[10],V=o[14],Q=o[3],St=o[7],_t=o[11],F=o[15];return c[0]=u*I+f*L+p*ht+h*Q,c[4]=u*z+f*j+p*ut+h*St,c[8]=u*G+f*it+p*B+h*_t,c[12]=u*A+f*st+p*V+h*F,c[1]=g*I+v*L+x*ht+y*Q,c[5]=g*z+v*j+x*ut+y*St,c[9]=g*G+v*it+x*B+y*_t,c[13]=g*A+v*st+x*V+y*F,c[2]=b*I+T*L+M*ht+_*Q,c[6]=b*z+T*j+M*ut+_*St,c[10]=b*G+T*it+M*B+_*_t,c[14]=b*A+T*st+M*V+_*F,c[3]=N*I+D*L+U*ht+P*Q,c[7]=N*z+D*j+U*ut+P*St,c[11]=N*G+D*it+U*B+P*_t,c[15]=N*A+D*st+U*V+P*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],h=t[13],g=t[2],v=t[6],x=t[10],y=t[14],b=t[3],T=t[7],M=t[11],_=t[15],N=p*y-h*x,D=f*y-h*v,U=f*x-p*v,P=u*y-h*g,I=u*x-p*g,z=u*v-f*g;return n*(T*N-M*D+_*U)-s*(b*N-M*P+_*I)+o*(b*D-T*P+_*z)-c*(b*U-T*I+M*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],v=t[9],x=t[10],y=t[11],b=t[12],T=t[13],M=t[14],_=t[15],N=v*M*h-T*x*h+T*p*y-f*M*y-v*p*_+f*x*_,D=b*x*h-g*M*h-b*p*y+u*M*y+g*p*_-u*x*_,U=g*T*h-b*v*h+b*f*y-u*T*y-g*f*_+u*v*_,P=b*v*p-g*T*p-b*f*x+u*T*x+g*f*M-u*v*M,I=n*N+s*D+o*U+c*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=N*z,t[1]=(T*x*c-v*M*c-T*o*y+s*M*y+v*o*_-s*x*_)*z,t[2]=(f*M*c-T*p*c+T*o*h-s*M*h-f*o*_+s*p*_)*z,t[3]=(v*p*c-f*x*c-v*o*h+s*x*h+f*o*y-s*p*y)*z,t[4]=D*z,t[5]=(g*M*c-b*x*c+b*o*y-n*M*y-g*o*_+n*x*_)*z,t[6]=(b*p*c-u*M*c-b*o*h+n*M*h+u*o*_-n*p*_)*z,t[7]=(u*x*c-g*p*c+g*o*h-n*x*h-u*o*y+n*p*y)*z,t[8]=U*z,t[9]=(b*v*c-g*T*c-b*s*y+n*T*y+g*s*_-n*v*_)*z,t[10]=(u*T*c-b*f*c+b*s*h-n*T*h-u*s*_+n*f*_)*z,t[11]=(g*f*c-u*v*c-g*s*h+n*v*h+u*s*y-n*f*y)*z,t[12]=P*z,t[13]=(g*T*o-b*v*o+b*s*x-n*T*x-g*s*M+n*v*M)*z,t[14]=(b*f*o-u*T*o-b*s*p+n*T*p+u*s*M-n*f*M)*z,t[15]=(u*v*o-g*f*o+g*s*p-n*v*p-u*s*x+n*f*x)*z,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,f=t.y,p=t.z,h=c*u,g=c*f;return this.set(h*u+s,h*f-o*p,h*p+o*f,0,h*f+o*p,g*f+s,g*p-o*u,0,h*p-o*f,g*p+o*u,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,h=c+c,g=u+u,v=f+f,x=c*h,y=c*g,b=c*v,T=u*g,M=u*v,_=f*v,N=p*h,D=p*g,U=p*v,P=s.x,I=s.y,z=s.z;return o[0]=(1-(T+_))*P,o[1]=(y+U)*P,o[2]=(b-D)*P,o[3]=0,o[4]=(y-U)*I,o[5]=(1-(x+_))*I,o[6]=(M+N)*I,o[7]=0,o[8]=(b+D)*z,o[9]=(M-N)*z,o[10]=(1-(x+T))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Qr.set(o[0],o[1],o[2]).length();const u=Qr.set(o[4],o[5],o[6]).length(),f=Qr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Ii.copy(this);const h=1/c,g=1/u,v=1/f;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,n.setFromRotationMatrix(Ii),s.x=c,s.y=u,s.z=f,this}makePerspective(t,n,s,o,c,u,f=na,p=!1){const h=this.elements,g=2*c/(n-t),v=2*c/(s-o),x=(n+t)/(n-t),y=(s+o)/(s-o);let b,T;if(p)b=c/(u-c),T=u*c/(u-c);else if(f===na)b=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===nf)b=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,s,o,c,u,f=na,p=!1){const h=this.elements,g=2/(n-t),v=2/(s-o),x=-(n+t)/(n-t),y=-(s+o)/(s-o);let b,T;if(p)b=1/(u-c),T=u/(u-c);else if(f===na)b=-2/(u-c),T=-(u+c)/(u-c);else if(f===nf)b=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=b,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Qr=new rt,Ii=new un,wE=new rt(0,0,0),CE=new rt(1,1,1),xs=new rt,yu=new rt,hi=new rt,Ix=new un,Bx=new Wl;class Ha{constructor(t=0,n=0,s=0,o=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],h=o[5],g=o[9],v=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Ix.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ix,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";let c2=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},RE=0;const Vx=new rt,Jr=new Wl,La=new un,Su=new rt,El=new rt,DE=new rt,LE=new Wl,Hx=new rt(1,0,0),Gx=new rt(0,1,0),kx=new rt(0,0,1),jx={type:"added"},NE={type:"removed"},$r={type:"childadded",child:null},jh={type:"childremoved",child:null};class si extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const t=new rt,n=new Ha,s=new Wl,o=new rt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new de}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Hx,t)}rotateY(t){return this.rotateOnAxis(Gx,t)}rotateZ(t){return this.rotateOnAxis(kx,t)}translateOnAxis(t,n){return Vx.copy(t).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Hx,t)}translateY(t){return this.translateOnAxis(Gx,t)}translateZ(t){return this.translateOnAxis(kx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Su.copy(t):Su.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(El,Su,this.up):La.lookAt(Su,El,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),Jr.setFromRotationMatrix(La),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jx),$r.child=t,this.dispatchEvent($r),$r.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(NE),jh.child=t,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jx),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,LE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const v=p[h];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),h=u(t.textures),g=u(t.images),v=u(t.shapes),x=u(t.skeletons),y=u(t.animations),b=u(t.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}si.DEFAULT_UP=new rt(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new rt,Na=new rt,Xh=new rt,Ua=new rt,to=new rt,eo=new rt,Xx=new rt,Wh=new rt,qh=new rt,Yh=new rt,Kh=new cn,Zh=new cn,Qh=new cn;class Gi{constructor(t=new rt,n=new rt,s=new rt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Bi.subVectors(t,n),o.cross(Bi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Bi.subVectors(o,n),Na.subVectors(s,n),Xh.subVectors(t,n);const u=Bi.dot(Bi),f=Bi.dot(Na),p=Bi.dot(Xh),h=Na.dot(Na),g=Na.dot(Xh),v=u*h-f*f;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(h*p-f*g)*x,b=(u*g-f*p)*x;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,n,s,o,c,u,f,p){return this.getBarycoord(t,n,s,o,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(u,Ua.y),p.addScaledVector(f,Ua.z),p)}static getInterpolatedAttribute(t,n,s,o,c,u){return Kh.setScalar(0),Zh.setScalar(0),Qh.setScalar(0),Kh.fromBufferAttribute(t,n),Zh.fromBufferAttribute(t,s),Qh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Kh,c.x),u.addScaledVector(Zh,c.y),u.addScaledVector(Qh,c.z),u}static isFrontFacing(t,n,s,o){return Bi.subVectors(s,n),Na.subVectors(t,n),Bi.cross(Na).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Bi.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Gi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,f;to.subVectors(o,s),eo.subVectors(c,s),Wh.subVectors(t,s);const p=to.dot(Wh),h=eo.dot(Wh);if(p<=0&&h<=0)return n.copy(s);qh.subVectors(t,o);const g=to.dot(qh),v=eo.dot(qh);if(g>=0&&v<=g)return n.copy(o);const x=p*v-g*h;if(x<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(s).addScaledVector(to,u);Yh.subVectors(t,c);const y=to.dot(Yh),b=eo.dot(Yh);if(b>=0&&y<=b)return n.copy(c);const T=y*h-p*b;if(T<=0&&h>=0&&b<=0)return f=h/(h-b),n.copy(s).addScaledVector(eo,f);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return Xx.subVectors(c,o),f=(v-g)/(v-g+(y-b)),n.copy(o).addScaledVector(Xx,f);const _=1/(M+T+x);return u=T*_,f=x*_,n.copy(s).addScaledVector(to,u).addScaledVector(eo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const u2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Jh(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class He{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Te.workingColorSpace){return this.r=t,this.g=n,this.b=s,Te.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Te.workingColorSpace){if(t=_E(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Jh(u,c,t+1/3),this.g=Jh(u,c,t),this.b=Jh(u,c,t-1/3)}return Te.colorSpaceToWorking(this,o),this}setStyle(t,n=Ai){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ai){const s=u2[t.toLowerCase()];return s!==void 0?this.setHex(s,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Te.workingToColorSpace(kn.copy(this),t),Math.round(Me(kn.r*255,0,255))*65536+Math.round(Me(kn.g*255,0,255))*256+Math.round(Me(kn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(kn.copy(this),n);const s=kn.r,o=kn.g,c=kn.b,u=Math.max(s,o,c),f=Math.min(s,o,c);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case s:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-s)/v+2;break;case c:p=(s-o)/v+4;break}p/=6}return t.h=p,t.s=h,t.l=g,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ai){Te.workingToColorSpace(kn.copy(this),t);const n=kn.r,s=kn.g,o=kn.b;return t!==Ai?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+n,_s.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(_s),t.getHSL(Mu);const s=Ph(_s.h,Mu.h,n),o=Ph(_s.s,Mu.s,n),c=Ph(_s.l,Mu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new He;He.NAMES=u2;let UE=0;class Yl extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=ho,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Rp,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(s.blending=this.blending),this.side!==Ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cp&&(s.blendSrc=this.blendSrc),this.blendDst!==Rp&&(s.blendDst=this.blendDst),this.blendEquation!==nr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class f2 extends Yl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.combine=jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new rt,bu=new Oe;let PE=0;class sa{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Lx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)bu.fromBufferAttribute(this,n),bu.applyMatrix3(t),this.setXY(n,bu.x,bu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Sl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ii(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Sl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Sl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Sl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Sl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array),o=ii(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lx&&(t.usage=this.usage),t}}class d2 extends sa{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class h2 extends sa{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class ji extends sa{constructor(t,n,s){super(new Float32Array(t),n,s)}}let OE=0;const Ti=new un,$h=new si,no=new rt,pi=new ql,Tl=new ql,An=new rt;class Wi extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r2(t)?h2:d2)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,n,s){return Ti.makeTranslation(t,n,s),this.applyMatrix4(Ti),this}scale(t,n,s){return Ti.makeScale(t,n,s),this.applyMatrix4(Ti),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ji(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Tl.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(pi.min,Tl.min),pi.expandByPoint(An),An.addVectors(pi.max,Tl.max),pi.expandByPoint(An)):(pi.expandByPoint(Tl.min),pi.expandByPoint(Tl.max))}pi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)An.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(An));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)An.fromBufferAttribute(f,h),p&&(no.fromBufferAttribute(t,h),An.add(no)),o=Math.max(o,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<s.count;G++)f[G]=new rt,p[G]=new rt;const h=new rt,g=new rt,v=new rt,x=new Oe,y=new Oe,b=new Oe,T=new rt,M=new rt;function _(G,A,L){h.fromBufferAttribute(s,G),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,L),x.fromBufferAttribute(c,G),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,L),g.sub(h),v.sub(h),y.sub(x),b.sub(x);const j=1/(y.x*b.y-b.x*y.y);isFinite(j)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(j),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(j),f[G].add(T),f[A].add(T),f[L].add(T),p[G].add(M),p[A].add(M),p[L].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let G=0,A=N.length;G<A;++G){const L=N[G],j=L.start,it=L.count;for(let st=j,ht=j+it;st<ht;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new rt,U=new rt,P=new rt,I=new rt;function z(G){P.fromBufferAttribute(o,G),I.copy(P);const A=f[G];D.copy(A),D.sub(P.multiplyScalar(P.dot(A))).normalize(),U.crossVectors(I,A);const j=U.dot(p[G])<0?-1:1;u.setXYZW(G,D.x,D.y,D.z,j)}for(let G=0,A=N.length;G<A;++G){const L=N[G],j=L.start,it=L.count;for(let st=j,ht=j+it;st<ht;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new sa(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const o=new rt,c=new rt,u=new rt,f=new rt,p=new rt,h=new rt,g=new rt,v=new rt;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),h.fromBufferAttribute(s,M),f.add(g),p.add(g),h.add(g),s.setXYZ(b,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(f,p){const h=f.array,g=f.itemSize,v=f.normalized,x=new h.constructor(p.length*g);let y=0,b=0;for(let T=0,M=p.length;T<M;T++){f.isInterleavedBufferAttribute?y=p[T]*f.data.stride+f.offset:y=p[T]*g;for(let _=0;_<g;_++)x[b++]=h[y++]}return new sa(x,g,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=t(p,s);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const p=[],h=c[f];for(let g=0,v=h.length;g<v;g++){const x=h[g],y=t(x,s);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const h=s[p];t.data.attributes[p]=h.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let v=0,x=h.length;v<x;v++){const y=h[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=t.morphAttributes;for(const h in c){const g=[],v=c[h];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wx=new un,Ks=new l2,Eu=new mf,qx=new rt,Tu=new rt,Au=new rt,wu=new rt,tp=new rt,Cu=new rt,Yx=new rt,Ru=new rt;class ca extends si{constructor(t=new Wi,n=new f2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Cu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=f[p],v=c[p];g!==0&&(tp.fromBufferAttribute(v,t),u?Cu.addScaledVector(tp,g):Cu.addScaledVector(tp.sub(n),g))}n.add(Cu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Eu.copy(s.boundingSphere),Eu.applyMatrix4(c),Ks.copy(t.ray).recast(t.near),!(Eu.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Eu,qx)===null||Ks.origin.distanceToSquared(qx)>(t.far-t.near)**2))&&(Wx.copy(c).invert(),Ks.copy(t.ray).applyMatrix4(Wx),!(s.boundingBox!==null&&Ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Ks)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,T=x.length;b<T;b++){const M=x[b],_=u[M.materialIndex],N=Math.max(M.start,y.start),D=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let U=N,P=D;U<P;U+=3){const I=f.getX(U),z=f.getX(U+1),G=f.getX(U+2);o=Du(this,_,t,s,h,g,v,I,z,G),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const N=f.getX(M),D=f.getX(M+1),U=f.getX(M+2);o=Du(this,u,t,s,h,g,v,N,D,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=x.length;b<T;b++){const M=x[b],_=u[M.materialIndex],N=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=N,P=D;U<P;U+=3){const I=U,z=U+1,G=U+2;o=Du(this,_,t,s,h,g,v,I,z,G),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const N=M,D=M+1,U=M+2;o=Du(this,u,t,s,h,g,v,N,D,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function zE(i,t,n,s,o,c,u,f){let p;if(t.side===ai?p=s.intersectTriangle(u,c,o,!0,f):p=s.intersectTriangle(o,c,u,t.side===Ts,f),p===null)return null;Ru.copy(f),Ru.applyMatrix4(i.matrixWorld);const h=n.ray.origin.distanceTo(Ru);return h<n.near||h>n.far?null:{distance:h,point:Ru.clone(),object:i}}function Du(i,t,n,s,o,c,u,f,p,h){i.getVertexPosition(f,Tu),i.getVertexPosition(p,Au),i.getVertexPosition(h,wu);const g=zE(i,t,n,s,Tu,Au,wu,Yx);if(g){const v=new rt;Gi.getBarycoord(Yx,Tu,Au,wu,v),o&&(g.uv=Gi.getInterpolatedAttribute(o,f,p,h,v,new Oe)),c&&(g.uv1=Gi.getInterpolatedAttribute(c,f,p,h,v,new Oe)),u&&(g.normal=Gi.getInterpolatedAttribute(u,f,p,h,v,new rt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:p,c:h,normal:new rt,materialIndex:0};Gi.getNormal(Tu,Au,wu,x.normal),g.face=x,g.barycoord=v}return g}class Kl extends Wi{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],h=[],g=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,o,u,2),b("x","z","y",1,-1,t,s,-n,o,u,3),b("x","y","z",1,-1,t,n,s,o,c,4),b("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new ji(h,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(v,2));function b(T,M,_,N,D,U,P,I,z,G,A){const L=U/z,j=P/G,it=U/2,st=P/2,ht=I/2,ut=z+1,B=G+1;let V=0,Q=0;const St=new rt;for(let _t=0;_t<B;_t++){const F=_t*j-st;for(let at=0;at<ut;at++){const vt=at*L-it;St[T]=vt*N,St[M]=F*D,St[_]=ht,h.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[_]=I>0?1:-1,g.push(St.x,St.y,St.z),v.push(at/z),v.push(1-_t/G),V+=1}}for(let _t=0;_t<G;_t++)for(let F=0;F<z;F++){const at=x+F+ut*_t,vt=x+F+ut*(_t+1),wt=x+(F+1)+ut*(_t+1),Vt=x+(F+1)+ut*_t;p.push(at,vt,Vt),p.push(vt,wt,Vt),Q+=6}f.addGroup(y,Q,A),y+=Q,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yo(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function qn(i){const t={};for(let n=0;n<i.length;n++){const s=yo(i[n]);for(const o in s)t[o]=s[o]}return t}function FE(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function p2(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const IE={clone:yo,merge:qn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Yl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yo(t.uniforms),this.uniformsGroups=FE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class m2 extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new rt,Kx=new Oe,Zx=new Oe;class wi extends m2{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=_m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _m*2*Math.atan(Math.tan(Uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,n){return this.getViewBounds(t,Kx,Zx),n.subVectors(Zx,Kx)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Uh*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*s/h,o*=u.width/p,s*=u.height/h}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ao=1;class HE extends si{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(io,ao,t,n);o.layers=this.layers,this.add(o);const c=new wi(io,ao,t,n);c.layers=this.layers,this.add(c);const u=new wi(io,ao,t,n);u.layers=this.layers,this.add(u);const f=new wi(io,ao,t,n);f.layers=this.layers,this.add(f);const p=new wi(io,ao,t,n);p.layers=this.layers,this.add(p);const h=new wi(io,ao,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,f,p]=n;for(const h of n)this.remove(h);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===nf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,h,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,u),t.setRenderTarget(s,2,o),t.render(n,f),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,h),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class g2 extends Zn{constructor(t=[],n=cr,s,o,c,u,f,p,h,g){super(t,n,s,o,c,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class v2 extends aa{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new g2(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Kl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:Fa});c.uniforms.tEquirect.value=n;const u=new ca(o,c),f=n.minFilter;return n.minFilter===ar&&(n.minFilter=jn),new HE(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}class Lu extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GE={type:"move"};class ep{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,s),_=this._getHandJoint(h,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,b=.005;h.inputState.pinching&&x>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&x<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(GE)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Lu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class kE extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ha,this.environmentIntensity=1,this.environmentRotation=new Ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jE extends Zn{constructor(t=null,n=1,s=1,o,c,u,f,p,h=Bn,g=Bn,v,x){super(null,u,f,p,h,g,o,c,v,x),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const np=new rt,XE=new rt,WE=new de;class tr{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=np.subVectors(s,n).cross(XE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(np),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||WE.getNormalMatrix(t),o=this.coplanarPoint(np).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new mf,qE=new Oe(.5,.5),Nu=new rt;class x2{constructor(t=new tr,n=new tr,s=new tr,o=new tr,c=new tr,u=new tr){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=na,s=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],h=c[3],g=c[4],v=c[5],x=c[6],y=c[7],b=c[8],T=c[9],M=c[10],_=c[11],N=c[12],D=c[13],U=c[14],P=c[15];if(o[0].setComponents(h-u,y-g,_-b,P-N).normalize(),o[1].setComponents(h+u,y+g,_+b,P+N).normalize(),o[2].setComponents(h+f,y+v,_+T,P+D).normalize(),o[3].setComponents(h-f,y-v,_-T,P-D).normalize(),s)o[4].setComponents(p,x,M,U).normalize(),o[5].setComponents(h-p,y-x,_-M,P-U).normalize();else if(o[4].setComponents(h-p,y-x,_-M,P-U).normalize(),n===na)o[5].setComponents(h+p,y+x,_+M,P+U).normalize();else if(n===nf)o[5].setComponents(p,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);const n=qE.distanceTo(t.center);return Zs.radius=.7071067811865476+n,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Nu.x=o.normal.x>0?t.max.x:t.min.x,Nu.y=o.normal.y>0?t.max.y:t.min.y,Nu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _2 extends Yl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qx=new un,ym=new l2,Uu=new mf,Pu=new rt;class YE extends si{constructor(t=new Wi,n=new _2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uu.copy(s.boundingSphere),Uu.applyMatrix4(o),Uu.radius+=c,t.ray.intersectsSphere(Uu)===!1)return;Qx.copy(o).invert(),ym.copy(t.ray).applyMatrix4(Qx);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=s.index,v=s.attributes.position;if(h!==null){const x=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let b=x,T=y;b<T;b++){const M=h.getX(b);Pu.fromBufferAttribute(v,M),Jx(Pu,M,p,o,t,n,this)}}else{const x=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let b=x,T=y;b<T;b++)Pu.fromBufferAttribute(v,b),Jx(Pu,b,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Jx(i,t,n,s,o,c,u){const f=ym.distanceSqToPoint(i);if(f<n){const p=new rt;ym.closestPointToPoint(i,p),p.applyMatrix4(s);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;c.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Bl extends Zn{constructor(t,n,s=la,o,c,u,f=Bn,p=Bn,h,g=Va,v=1){if(g!==Va&&g!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:v};super(x,o,c,u,f,p,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new i0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class KE extends Bl{constructor(t,n=la,s=cr,o,c,u=Bn,f=Bn,p,h=Va){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,f,p,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class y2 extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zl extends Wi{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(s),p=Math.floor(o),h=f+1,g=p+1,v=t/f,x=n/p,y=[],b=[],T=[],M=[];for(let _=0;_<g;_++){const N=_*x-u;for(let D=0;D<h;D++){const U=D*v-c;b.push(U,-N,0),T.push(0,0,1),M.push(D/f),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<f;N++){const D=N+h*_,U=N+h*(_+1),P=N+1+h*(_+1),I=N+1+h*_;y.push(D,U,I),y.push(U,P,I)}this.setIndex(y),this.setAttribute("position",new ji(b,3)),this.setAttribute("normal",new ji(T,3)),this.setAttribute("uv",new ji(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.width,t.height,t.widthSegments,t.heightSegments)}}class ZE extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QE extends Yl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JE extends Yl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class S2 extends m2{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $E extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function $x(i,t,n,s){const o=eT(s);switch(n){case i2:return i*t;case s2:return i*t/o.components*o.byteLength;case Jm:return i*t/o.components*o.byteLength;case xo:return i*t*2/o.components*o.byteLength;case $m:return i*t*2/o.components*o.byteLength;case a2:return i*t*3/o.components*o.byteLength;case ki:return i*t*4/o.components*o.byteLength;case t0:return i*t*4/o.components*o.byteLength;case ku:case ju:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xu:case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gp:case jp:return Math.max(i,16)*Math.max(t,8)/4;case Hp:case kp:return Math.max(i,8)*Math.max(t,8)/2;case Xp:case Wp:case Yp:case Kp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qp:case Zp:case Qp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $p:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tm:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case em:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case im:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case am:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sm:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case om:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lm:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case um:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fm:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dm:case hm:case pm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mm:case gm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vm:case xm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eT(i){switch(i){case Ci:case $y:return{byteLength:1,components:1};case zl:case t2:case Ba:return{byteLength:2,components:1};case Zm:case Qm:return{byteLength:2,components:4};case la:case Km:case ea:return{byteLength:4,components:1};case e2:case n2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ym}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ym);function M2(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function nT(i){const t=new WeakMap;function n(f,p){const h=f.array,g=f.usage,v=h.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,p,h){const g=p.array,v=p.updateRanges;if(i.bindBuffer(h,f),v.length===0)i.bufferSubData(h,0,g);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],T=v[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,v[x]=T)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const T=v[y];i.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(i.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,p),h.version=f.version}}return{get:o,remove:c,update:u}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_A=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ww=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:iT,alphahash_pars_fragment:aT,alphamap_fragment:sT,alphamap_pars_fragment:rT,alphatest_fragment:oT,alphatest_pars_fragment:lT,aomap_fragment:cT,aomap_pars_fragment:uT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:xT,clipping_planes_pars_fragment:_T,clipping_planes_pars_vertex:yT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:bT,color_pars_vertex:ET,color_vertex:TT,common:AT,cube_uv_reflection_fragment:wT,defaultnormal_vertex:CT,displacementmap_pars_vertex:RT,displacementmap_vertex:DT,emissivemap_fragment:LT,emissivemap_pars_fragment:NT,colorspace_fragment:UT,colorspace_pars_fragment:PT,envmap_fragment:OT,envmap_common_pars_fragment:zT,envmap_pars_fragment:FT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:KT,envmap_vertex:BT,fog_vertex:VT,fog_pars_vertex:HT,fog_fragment:GT,fog_pars_fragment:kT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:XT,lights_lambert_fragment:WT,lights_lambert_pars_fragment:qT,lights_pars_begin:YT,lights_toon_fragment:ZT,lights_toon_pars_fragment:QT,lights_phong_fragment:JT,lights_phong_pars_fragment:$T,lights_physical_fragment:tA,lights_physical_pars_fragment:eA,lights_fragment_begin:nA,lights_fragment_maps:iA,lights_fragment_end:aA,logdepthbuf_fragment:sA,logdepthbuf_pars_fragment:rA,logdepthbuf_pars_vertex:oA,logdepthbuf_vertex:lA,map_fragment:cA,map_pars_fragment:uA,map_particle_fragment:fA,map_particle_pars_fragment:dA,metalnessmap_fragment:hA,metalnessmap_pars_fragment:pA,morphinstance_vertex:mA,morphcolor_vertex:gA,morphnormal_vertex:vA,morphtarget_pars_vertex:xA,morphtarget_vertex:_A,normal_fragment_begin:yA,normal_fragment_maps:SA,normal_pars_fragment:MA,normal_pars_vertex:bA,normal_vertex:EA,normalmap_pars_fragment:TA,clearcoat_normal_fragment_begin:AA,clearcoat_normal_fragment_maps:wA,clearcoat_pars_fragment:CA,iridescence_pars_fragment:RA,opaque_fragment:DA,packing:LA,premultiplied_alpha_fragment:NA,project_vertex:UA,dithering_fragment:PA,dithering_pars_fragment:OA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:FA,shadowmap_pars_fragment:IA,shadowmap_pars_vertex:BA,shadowmap_vertex:VA,shadowmask_pars_fragment:HA,skinbase_vertex:GA,skinning_pars_vertex:kA,skinning_vertex:jA,skinnormal_vertex:XA,specularmap_fragment:WA,specularmap_pars_fragment:qA,tonemapping_fragment:YA,tonemapping_pars_fragment:KA,transmission_fragment:ZA,transmission_pars_fragment:QA,uv_pars_fragment:JA,uv_pars_vertex:$A,uv_vertex:tw,worldpos_vertex:ew,background_vert:nw,background_frag:iw,backgroundCube_vert:aw,backgroundCube_frag:sw,cube_vert:rw,cube_frag:ow,depth_vert:lw,depth_frag:cw,distance_vert:uw,distance_frag:fw,equirect_vert:dw,equirect_frag:hw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:vw,meshlambert_vert:xw,meshlambert_frag:_w,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:bw,meshphong_vert:Ew,meshphong_frag:Tw,meshphysical_vert:Aw,meshphysical_frag:ww,meshtoon_vert:Cw,meshtoon_frag:Rw,points_vert:Dw,points_frag:Lw,shadow_vert:Nw,shadow_frag:Uw,sprite_vert:Pw,sprite_frag:Ow},Ot={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ta={basic:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new He(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:qn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:qn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new He(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:qn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:qn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:qn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:qn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:qn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:qn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:qn([Ot.common,Ot.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:qn([Ot.lights,Ot.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ta.physical={uniforms:qn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Ou={r:0,b:0,g:0},Qs=new Ha,zw=new un;function Fw(i,t,n,s,o,c,u){const f=new He(0);let p=c===!0?0:1,h,g,v=null,x=0,y=null;function b(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?n:t).get(U)),U}function T(D){let U=!1;const P=b(D);P===null?_(f,p):P&&P.isColor&&(_(P,1),U=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(D,U){const P=b(U);P&&(P.isCubeTexture||P.mapping===pf)?(g===void 0&&(g=new ca(new Kl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:yo(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Qs.copy(U.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Qs)),g.material.toneMapped=Te.getTransfer(P.colorSpace)!==Ve,(v!==P||x!==P.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=P,x=P.version,y=i.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ca(new Zl(2,2),new Xi({name:"BackgroundMaterial",uniforms:yo(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Te.getTransfer(P.colorSpace)!==Ve,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||y!==i.toneMapping)&&(h.material.needsUpdate=!0,v=P,x=P.version,y=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function _(D,U){D.getRGB(Ou,p2(i)),s.buffers.color.setClear(Ou.r,Ou.g,Ou.b,U,u)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,U=1){f.set(D),p=U,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(f,p)},render:T,addToRenderList:M,dispose:N}}function Iw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=x(null);let c=o,u=!1;function f(L,j,it,st,ht){let ut=!1;const B=v(st,it,j);c!==B&&(c=B,h(c.object)),ut=y(L,st,it,ht),ut&&b(L,st,it,ht),ht!==null&&t.update(ht,i.ELEMENT_ARRAY_BUFFER),(ut||u)&&(u=!1,U(L,j,it,st),ht!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function p(){return i.createVertexArray()}function h(L){return i.bindVertexArray(L)}function g(L){return i.deleteVertexArray(L)}function v(L,j,it){const st=it.wireframe===!0;let ht=s[L.id];ht===void 0&&(ht={},s[L.id]=ht);let ut=ht[j.id];ut===void 0&&(ut={},ht[j.id]=ut);let B=ut[st];return B===void 0&&(B=x(p()),ut[st]=B),B}function x(L){const j=[],it=[],st=[];for(let ht=0;ht<n;ht++)j[ht]=0,it[ht]=0,st[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:it,attributeDivisors:st,object:L,attributes:{},index:null}}function y(L,j,it,st){const ht=c.attributes,ut=j.attributes;let B=0;const V=it.getAttributes();for(const Q in V)if(V[Q].location>=0){const _t=ht[Q];let F=ut[Q];if(F===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),_t===void 0||_t.attribute!==F||F&&_t.data!==F.data)return!0;B++}return c.attributesNum!==B||c.index!==st}function b(L,j,it,st){const ht={},ut=j.attributes;let B=0;const V=it.getAttributes();for(const Q in V)if(V[Q].location>=0){let _t=ut[Q];_t===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor));const F={};F.attribute=_t,_t&&_t.data&&(F.data=_t.data),ht[Q]=F,B++}c.attributes=ht,c.attributesNum=B,c.index=st}function T(){const L=c.newAttributes;for(let j=0,it=L.length;j<it;j++)L[j]=0}function M(L){_(L,0)}function _(L,j){const it=c.newAttributes,st=c.enabledAttributes,ht=c.attributeDivisors;it[L]=1,st[L]===0&&(i.enableVertexAttribArray(L),st[L]=1),ht[L]!==j&&(i.vertexAttribDivisor(L,j),ht[L]=j)}function N(){const L=c.newAttributes,j=c.enabledAttributes;for(let it=0,st=j.length;it<st;it++)j[it]!==L[it]&&(i.disableVertexAttribArray(it),j[it]=0)}function D(L,j,it,st,ht,ut,B){B===!0?i.vertexAttribIPointer(L,j,it,ht,ut):i.vertexAttribPointer(L,j,it,st,ht,ut)}function U(L,j,it,st){T();const ht=st.attributes,ut=it.getAttributes(),B=j.defaultAttributeValues;for(const V in ut){const Q=ut[V];if(Q.location>=0){let St=ht[V];if(St===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),St!==void 0){const _t=St.normalized,F=St.itemSize,at=t.get(St);if(at===void 0)continue;const vt=at.buffer,wt=at.type,Vt=at.bytesPerElement,nt=wt===i.INT||wt===i.UNSIGNED_INT||St.gpuType===Km;if(St.isInterleavedBufferAttribute){const ft=St.data,Lt=ft.stride,Xt=St.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<Q.locationSize;Ht++)_(Q.location+Ht,ft.meshPerAttribute);L.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<Q.locationSize;Ht++)M(Q.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ht=0;Ht<Q.locationSize;Ht++)D(Q.location+Ht,F/Q.locationSize,wt,_t,Lt*Vt,(Xt+F/Q.locationSize*Ht)*Vt,nt)}else{if(St.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)_(Q.location+ft,St.meshPerAttribute);L.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ft=0;ft<Q.locationSize;ft++)M(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let ft=0;ft<Q.locationSize;ft++)D(Q.location+ft,F/Q.locationSize,wt,_t,F*Vt,F/Q.locationSize*ft*Vt,nt)}}else if(B!==void 0){const _t=B[V];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Q.location,_t);break;case 3:i.vertexAttrib3fv(Q.location,_t);break;case 4:i.vertexAttrib4fv(Q.location,_t);break;default:i.vertexAttrib1fv(Q.location,_t)}}}}N()}function P(){G();for(const L in s){const j=s[L];for(const it in j){const st=j[it];for(const ht in st)g(st[ht].object),delete st[ht];delete j[it]}delete s[L]}}function I(L){if(s[L.id]===void 0)return;const j=s[L.id];for(const it in j){const st=j[it];for(const ht in st)g(st[ht].object),delete st[ht];delete j[it]}delete s[L.id]}function z(L){for(const j in s){const it=s[j];if(it[L.id]===void 0)continue;const st=it[L.id];for(const ht in st)g(st[ht].object),delete st[ht];delete it[L.id]}}function G(){A(),u=!0,c!==o&&(c=o,h(c.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:N}}function Bw(i,t,n){let s;function o(h){s=h}function c(h,g){i.drawArrays(s,h,g),n.update(g,s,1)}function u(h,g,v){v!==0&&(i.drawArraysInstanced(s,h,g,v),n.update(g,s,v))}function f(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,s,1)}function p(h,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<h.length;b++)u(h[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,g,0,x,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*x[T];n.update(b,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Vw(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ki&&s.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const G=z===Ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ci&&s.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ea&&!G)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(oe("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:U,maxSamples:P,samples:I}}function Hw(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new tr,f=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||o;return o=x,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,_=i.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):h();else{const N=c?0:s,D=N*4;let U=_.clippingState||null;p.value=U,U=g(b,x,D,y);for(let P=0;P!==D;++P)U[P]=n[P];_.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,y,b){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const _=y+T*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,U=y;D!==T;++D,U+=4)u.copy(v[D]).applyMatrix4(N,f),u.normal.toArray(M,U),M[U+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function Gw(i){let t=new WeakMap;function n(u,f){return f===Fp?u.mapping=cr:f===Ip&&(u.mapping=vo),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Fp||f===Ip)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new v2(p.height);return h.fromEquirectangularTexture(i,u),t.set(u,h),u.addEventListener("dispose",o),n(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const bs=4,t_=[.125,.215,.35,.446,.526,.582],ir=20,kw=256,Al=new S2,e_=new He;let ip=null,ap=0,sp=0,rp=!1;const jw=new rt;class n_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:f=jw}=c;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ip,ap,sp),this._renderer.xr.enabled=rp,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===cr||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ba,format:ki,colorSpace:_o,depthBuffer:!1},o=i_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xw(c)),this._blurMaterial=qw(c,t,n),this._ggxMaterial=Ww(c,t,n)}return o}_compileMaterial(t){const n=new ca(new Wi,t);this._renderer.compile(n,Al)}_sceneToCubeUV(t,n,s,o,c){const p=new wi(90,1,n,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(e_),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ca(new Kl,new f2({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,_=!0):(M.color.copy(e_),_=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(p.up.set(0,h[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[D],c.y,c.z)):U===1?(p.up.set(0,0,h[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[D],c.z)):(p.up.set(0,h[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[D]));const P=this._cubeSize;so(o,U*P,D>2?P:0,P,P),v.setRenderTarget(o),_&&v.render(T,p),v.render(t,p)}v.toneMapping=y,v.autoClear=x,t.background=N}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===cr||t.mapping===vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;so(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,Al)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,h=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),x=0+h*1.25,y=v*x,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-bs?s-b+bs:0),_=4*(this._cubeSize-T);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=b-n,so(c,M,_,3*T,2*T),o.setRenderTarget(c),o.render(f,Al),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-s,so(t,M,_,3*T,2*T),o.setRenderTarget(t),o.render(f,Al)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const x=h.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ir-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):ir;M>ir&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ir}`);const _=[];let N=0;for(let z=0;z<ir;++z){const G=z/T,A=Math.exp(-G*G/2);_.push(A),z===0?N+=A:z<M&&(N+=2*A)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-s;const U=this._sizeLods[o],P=3*U*(o>D-bs?o-D+bs:0),I=4*(this._cubeSize-U);so(n,P,I,3*U,2*U),p.setRenderTarget(n),p.render(v,Al)}}function Xw(i){const t=[],n=[],s=[];let o=i;const c=i-bs+1+t_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>i-bs?p=t_[u-i+bs-1]:u===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,v=1+h,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,T=3,M=2,_=1,N=new Float32Array(T*b*y),D=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,G=I>2?0:-1,A=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];N.set(A,T*b*I),D.set(x,M*b*I);const L=[I,I,I,I,I,I];U.set(L,_*b*I)}const P=new Wi;P.setAttribute("position",new sa(N,T)),P.setAttribute("uv",new sa(D,M)),P.setAttribute("faceIndex",new sa(U,_)),s.push(new ca(P,null)),o>bs&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function i_(i,t,n){const s=new aa(i,t,n);return s.texture.mapping=pf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function so(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function Ww(i,t,n){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function qw(i,t,n){const s=new Float32Array(ir),o=new rt(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function a_(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function s_(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yw(i){let t=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const p=f.mapping,h=p===Fp||p===Ip,g=p===cr||p===vo;if(h||g){let v=t.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new n_(i)),v=h?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return h&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new n_(i)),v=h?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function c(f){const p=f.target;p.removeEventListener("dispose",c);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Kw(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Il("WebGLRenderer: "+s+" extension not supported."),o}}}function Zw(i,t,n,s){const o={},c=new WeakMap;function u(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)t.update(x[y],i.ARRAY_BUFFER)}function h(v){const x=[],y=v.index,b=v.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let D=0,U=N.length;D<U;D+=3){const P=N[D+0],I=N[D+1],z=N[D+2];x.push(P,I,I,z,z,P)}}else if(b!==void 0){const N=b.array;T=b.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const P=D+0,I=D+1,z=D+2;x.push(P,I,I,z,z,P)}}else return;const M=new(r2(x)?h2:d2)(x,1);M.version=T;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&h(v)}else h(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function Qw(i,t,n){let s;function o(x){s=x}let c,u;function f(x){c=x.type,u=x.bytesPerElement}function p(x,y){i.drawElements(s,y,c,x*u),n.update(y,s,1)}function h(x,y,b){b!==0&&(i.drawElementsInstanced(s,y,c,x*u,b),n.update(y,s,b))}function g(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];n.update(M,s,1)}function v(x,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)h(x[_]/u,y[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,b);let _=0;for(let N=0;N<b;N++)_+=y[N]*T[N];n.update(_,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Jw(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=f*(c/3);break;case i.LINES:n.lines+=f*(c/2);break;case i.LINE_STRIP:n.lines+=f*(c-1);break;case i.LINE_LOOP:n.lines+=f*c;break;case i.POINTS:n.points+=f*c;break;default:Ce("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function $w(i,t,n){const s=new WeakMap,o=new cn;function c(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let L=function(){G.dispose(),s.delete(f),f.removeEventListener("dispose",L)};var y=L;x!==void 0&&x.texture.dispose();const b=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),M===!0&&(U=3);let P=f.attributes.position.count*U,I=1;P>t.maxTextureSize&&(I=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*I*4*v),G=new o2(z,P,I,v);G.type=ea,G.needsUpdate=!0;const A=U*4;for(let j=0;j<v;j++){const it=_[j],st=N[j],ht=D[j],ut=P*I*4*j;for(let B=0;B<it.count;B++){const V=B*A;b===!0&&(o.fromBufferAttribute(it,B),z[ut+V+0]=o.x,z[ut+V+1]=o.y,z[ut+V+2]=o.z,z[ut+V+3]=0),T===!0&&(o.fromBufferAttribute(st,B),z[ut+V+4]=o.x,z[ut+V+5]=o.y,z[ut+V+6]=o.z,z[ut+V+7]=0),M===!0&&(o.fromBufferAttribute(ht,B),z[ut+V+8]=o.x,z[ut+V+9]=o.y,z[ut+V+10]=o.z,z[ut+V+11]=ht.itemSize===4?o.w:1)}}x={count:v,texture:G,size:new Oe(P,I)},s.set(f,x),f.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const T=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",h)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:c}}function t4(i,t,n,s){let o=new WeakMap;function c(p){const h=s.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==h&&(t.update(v),o.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==h&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==h&&(x.update(),o.set(x,h))}return v}function u(){o=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:u}}const e4={[Xy]:"LINEAR_TONE_MAPPING",[Wy]:"REINHARD_TONE_MAPPING",[qy]:"CINEON_TONE_MAPPING",[Yy]:"ACES_FILMIC_TONE_MAPPING",[Zy]:"AGX_TONE_MAPPING",[Qy]:"NEUTRAL_TONE_MAPPING",[Ky]:"CUSTOM_TONE_MAPPING"};function n4(i,t,n,s,o){const c=new aa(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new aa(t,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),f=new Wi;f.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ji([0,2,0,0,2,0],2));const p=new ZE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ca(f,p),g=new S2(-1,1,1,-1,0,1);let v=null,x=null,y=!1,b,T=null,M=[],_=!1;this.setSize=function(N,D){c.setSize(N,D),u.setSize(N,D);for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(N,D)}},this.setEffects=function(N){M=N,_=M.length>0&&M[0].isRenderPass===!0;const D=c.width,U=c.height;for(let P=0;P<M.length;P++){const I=M[P];I.setSize&&I.setSize(D,U)}},this.begin=function(N,D){if(y||N.toneMapping===ia&&M.length===0)return!1;if(T=D,D!==null){const U=D.width,P=D.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return _===!1&&N.setRenderTarget(c),b=N.toneMapping,N.toneMapping=ia,!0},this.hasRenderPass=function(){return _},this.end=function(N,D){N.toneMapping=b,y=!0;let U=c,P=u;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(N,P,U,D),z.needsSwap!==!1)){const G=U;U=P,P=G}}if(v!==N.outputColorSpace||x!==N.toneMapping){v=N.outputColorSpace,x=N.toneMapping,p.defines={},Te.getTransfer(v)===Ve&&(p.defines.SRGB_TRANSFER="");const I=e4[x];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(T),N.render(h,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const b2=new Zn,Sm=new Bl(1,1),E2=new o2,T2=new TE,A2=new g2,r_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function bo(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=r_[o];if(c===void 0&&(c=new Float32Array(o),r_[o]=c),t!==0){s.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,i[u].toArray(c,f)}return c}function Mn(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function bn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function vf(i,t){let n=o_[t];n===void 0&&(n=new Int32Array(t),o_[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function i4(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function a4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2fv(this.addr,t),bn(n,t)}}function s4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;i.uniform3fv(this.addr,t),bn(n,t)}}function r4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4fv(this.addr,t),bn(n,t)}}function o4(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,s))return;u_.set(s),i.uniformMatrix2fv(this.addr,!1,u_),bn(n,s)}}function l4(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,s))return;c_.set(s),i.uniformMatrix3fv(this.addr,!1,c_),bn(n,s)}}function c4(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,s))return;l_.set(s),i.uniformMatrix4fv(this.addr,!1,l_),bn(n,s)}}function u4(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function f4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2iv(this.addr,t),bn(n,t)}}function d4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;i.uniform3iv(this.addr,t),bn(n,t)}}function h4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4iv(this.addr,t),bn(n,t)}}function p4(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function m4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2uiv(this.addr,t),bn(n,t)}}function g4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;i.uniform3uiv(this.addr,t),bn(n,t)}}function v4(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4uiv(this.addr,t),bn(n,t)}}function x4(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Sm.compareFunction=n.isReversedDepthBuffer()?n0:e0,c=Sm):c=b2,n.setTexture2D(t||c,o)}function _4(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||T2,o)}function y4(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||A2,o)}function S4(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||E2,o)}function M4(i){switch(i){case 5126:return i4;case 35664:return a4;case 35665:return s4;case 35666:return r4;case 35674:return o4;case 35675:return l4;case 35676:return c4;case 5124:case 35670:return u4;case 35667:case 35671:return f4;case 35668:case 35672:return d4;case 35669:case 35673:return h4;case 5125:return p4;case 36294:return m4;case 36295:return g4;case 36296:return v4;case 35678:case 36198:case 36298:case 36306:case 35682:return x4;case 35679:case 36299:case 36307:return _4;case 35680:case 36300:case 36308:case 36293:return y4;case 36289:case 36303:case 36311:case 36292:return S4}}function b4(i,t){i.uniform1fv(this.addr,t)}function E4(i,t){const n=bo(t,this.size,2);i.uniform2fv(this.addr,n)}function T4(i,t){const n=bo(t,this.size,3);i.uniform3fv(this.addr,n)}function A4(i,t){const n=bo(t,this.size,4);i.uniform4fv(this.addr,n)}function w4(i,t){const n=bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function C4(i,t){const n=bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function R4(i,t){const n=bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function D4(i,t){i.uniform1iv(this.addr,t)}function L4(i,t){i.uniform2iv(this.addr,t)}function N4(i,t){i.uniform3iv(this.addr,t)}function U4(i,t){i.uniform4iv(this.addr,t)}function P4(i,t){i.uniform1uiv(this.addr,t)}function O4(i,t){i.uniform2uiv(this.addr,t)}function z4(i,t){i.uniform3uiv(this.addr,t)}function F4(i,t){i.uniform4uiv(this.addr,t)}function I4(i,t,n){const s=this.cache,o=t.length,c=vf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Sm:u=b2;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function B4(i,t,n){const s=this.cache,o=t.length,c=vf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||T2,c[u])}function V4(i,t,n){const s=this.cache,o=t.length,c=vf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||A2,c[u])}function H4(i,t,n){const s=this.cache,o=t.length,c=vf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||E2,c[u])}function G4(i){switch(i){case 5126:return b4;case 35664:return E4;case 35665:return T4;case 35666:return A4;case 35674:return w4;case 35675:return C4;case 35676:return R4;case 5124:case 35670:return D4;case 35667:case 35671:return L4;case 35668:case 35672:return N4;case 35669:case 35673:return U4;case 5125:return P4;case 36294:return O4;case 36295:return z4;case 36296:return F4;case 35678:case 36198:case 36298:case 36306:case 35682:return I4;case 35679:case 36299:case 36307:return B4;case 35680:case 36300:case 36308:case 36293:return V4;case 36289:case 36303:case 36311:case 36292:return H4}}class k4{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=M4(n.type)}}class j4{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=G4(n.type)}}class X4{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],s)}}}const op=/(\w+)(\])?(\[|\.)?/g;function f_(i,t){i.seq.push(t),i.map[t.id]=t}function W4(i,t,n){const s=i.name,o=s.length;for(op.lastIndex=0;;){const c=op.exec(s),u=op.lastIndex;let f=c[1];const p=c[2]==="]",h=c[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){f_(n,h===void 0?new k4(f,i,t):new j4(f,i,t));break}else{let v=n.map[f];v===void 0&&(v=new X4(f),f_(n,v)),n=v}}}class qu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);W4(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=s[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function d_(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const q4=37297;let Y4=0;function K4(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;s.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const h_=new de;function Z4(i){Te._getMatrix(h_,Te.workingColorSpace,i);const t=`mat3( ${h_.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(i)){case ef:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function p_(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+K4(i.getShaderSource(t),f)}else return c}function Q4(i,t){const n=Z4(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const J4={[Xy]:"Linear",[Wy]:"Reinhard",[qy]:"Cineon",[Yy]:"ACESFilmic",[Zy]:"AgX",[Qy]:"Neutral",[Ky]:"Custom"};function $4(i,t){const n=J4[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new rt;function t5(){Te.getLuminanceCoefficients(zu);const i=zu.x.toFixed(4),t=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e5(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function n5(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function i5(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let f=1;c.type===i.FLOAT_MAT2&&(f=2),c.type===i.FLOAT_MAT3&&(f=3),c.type===i.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:f}}return n}function Dl(i){return i!==""}function m_(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function g_(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(i){return i.replace(a5,r5)}const s5=new Map;function r5(i,t){let n=he[t];if(n===void 0){const s=s5.get(t);if(s!==void 0)n=he[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Mm(n)}const o5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(i){return i.replace(o5,l5)}function l5(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function x_(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const c5={[Gu]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function u5(i){return c5[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f5={[cr]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[pf]:"ENVMAP_TYPE_CUBE_UV"};function d5(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f5[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const h5={[vo]:"ENVMAP_MODE_REFRACTION"};function p5(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h5[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m5={[jy]:"ENVMAP_BLENDING_MULTIPLY",[sE]:"ENVMAP_BLENDING_MIX",[rE]:"ENVMAP_BLENDING_ADD"};function g5(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":m5[i.combine]||"ENVMAP_BLENDING_NONE"}function v5(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function x5(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=u5(n),h=d5(n),g=p5(n),v=g5(n),x=v5(n),y=e5(n),b=n5(c),T=o.createProgram();let M,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Dl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Dl).join(`
`),_.length>0&&(_+=`
`)):(M=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),_=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ia?"#define TONE_MAPPING":"",n.toneMapping!==ia?he.tonemapping_pars_fragment:"",n.toneMapping!==ia?$4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Q4("linearToOutputTexel",n.outputColorSpace),t5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),u=Mm(u),u=m_(u,n),u=g_(u,n),f=Mm(f),f=m_(f,n),f=g_(f,n),u=v_(u),f=v_(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=N+M+u,U=N+_+f,P=d_(o,o.VERTEX_SHADER,D),I=d_(o,o.FRAGMENT_SHADER,U);o.attachShader(T,P),o.attachShader(T,I),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(j){if(i.debug.checkShaderErrors){const it=o.getProgramInfoLog(T)||"",st=o.getShaderInfoLog(P)||"",ht=o.getShaderInfoLog(I)||"",ut=it.trim(),B=st.trim(),V=ht.trim();let Q=!0,St=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,P,I);else{const _t=p_(o,P,"vertex"),F=p_(o,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ut+`
`+_t+`
`+F)}else ut!==""?oe("WebGLProgram: Program Info Log:",ut):(B===""||V==="")&&(St=!1);St&&(j.diagnostics={runnable:Q,programLog:ut,vertexShader:{log:B,prefix:M},fragmentShader:{log:V,prefix:_}})}o.deleteShader(P),o.deleteShader(I),G=new qu(o,T),A=i5(o,T)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(T,q4)),L},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y4++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let _5=0;class y5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new S5(t),n.set(t,s)),s}}class S5{constructor(t){this.id=_5++,this.code=t,this.usedTimes=0}}function M5(i,t,n,s,o,c,u){const f=new c2,p=new y5,h=new Set,g=[],v=new Map,x=o.logarithmicDepthBuffer;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return h.add(A),A===0?"uv":`uv${A}`}function M(A,L,j,it,st){const ht=it.fog,ut=st.geometry,B=A.isMeshStandardMaterial?it.environment:null,V=(A.isMeshStandardMaterial?n:t).get(A.envMap||B),Q=V&&V.mapping===pf?V.image.height:null,St=b[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&oe("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const _t=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,F=_t!==void 0?_t.length:0;let at=0;ut.morphAttributes.position!==void 0&&(at=1),ut.morphAttributes.normal!==void 0&&(at=2),ut.morphAttributes.color!==void 0&&(at=3);let vt,wt,Vt,nt;if(St){const Ee=ta[St];vt=Ee.vertexShader,wt=Ee.fragmentShader}else vt=A.vertexShader,wt=A.fragmentShader,p.update(A),Vt=p.getVertexShaderID(A),nt=p.getFragmentShaderID(A);const ft=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Xt=st.isInstancedMesh===!0,Ht=st.isBatchedMesh===!0,pe=!!A.map,en=!!A.matcap,xe=!!V,me=!!A.aoMap,Re=!!A.lightMap,le=!!A.bumpMap,nn=!!A.normalMap,k=!!A.displacementMap,Qe=!!A.emissiveMap,be=!!A.metalnessMap,Ue=!!A.roughnessMap,Kt=A.anisotropy>0,O=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,pt=A.sheen>0,yt=A.transmission>0,ct=Kt&&!!A.anisotropyMap,Qt=O&&!!A.clearcoatMap,Rt=O&&!!A.clearcoatNormalMap,Wt=O&&!!A.clearcoatRoughnessMap,ie=q&&!!A.iridescenceMap,bt=q&&!!A.iridescenceThicknessMap,Et=pt&&!!A.sheenColorMap,It=pt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Dt=!!A.specularColorMap,ue=!!A.specularIntensityMap,W=yt&&!!A.transmissionMap,Ut=yt&&!!A.thicknessMap,Tt=!!A.gradientMap,Ft=!!A.alphaMap,Mt=A.alphaTest>0,xt=!!A.alphaHash,Ct=!!A.extensions;let ae=ia;A.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=i.toneMapping);const ze={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:vt,fragmentShader:wt,defines:A.defines,customVertexShaderID:Vt,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&st._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&st.instanceColor!==null,instancingMorph:Xt&&st.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:_o,alphaToCoverage:!!A.alphaToCoverage,map:pe,matcap:en,envMap:xe,envMapMode:xe&&V.mapping,envMapCubeUVHeight:Q,aoMap:me,lightMap:Re,bumpMap:le,normalMap:nn,displacementMap:k,emissiveMap:Qe,normalMapObjectSpace:nn&&A.normalMapType===uE,normalMapTangentSpace:nn&&A.normalMapType===cE,metalnessMap:be,roughnessMap:Ue,anisotropy:Kt,anisotropyMap:ct,clearcoat:O,clearcoatMap:Qt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:q,iridescenceMap:ie,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Et,sheenRoughnessMap:It,specularMap:zt,specularColorMap:Dt,specularIntensityMap:ue,transmission:yt,transmissionMap:W,thicknessMap:Ut,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===ho&&A.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:xt,combine:A.combine,mapUv:pe&&T(A.map.channel),aoMapUv:me&&T(A.aoMap.channel),lightMapUv:Re&&T(A.lightMap.channel),bumpMapUv:le&&T(A.bumpMap.channel),normalMapUv:nn&&T(A.normalMap.channel),displacementMapUv:k&&T(A.displacementMap.channel),emissiveMapUv:Qe&&T(A.emissiveMap.channel),metalnessMapUv:be&&T(A.metalnessMap.channel),roughnessMapUv:Ue&&T(A.roughnessMap.channel),anisotropyMapUv:ct&&T(A.anisotropyMap.channel),clearcoatMapUv:Qt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Dt&&T(A.specularColorMap.channel),specularIntensityMapUv:ue&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Ut&&T(A.thicknessMap.channel),alphaMapUv:Ft&&T(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(nn||Kt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(pe||Ft),fog:!!ht,useFog:A.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Lt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:at,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:Qe&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Pa,flipSided:A.side===ai,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=h.has(1),ze.vertexUv2s=h.has(2),ze.vertexUv3s=h.has(3),h.clear(),ze}function _(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const j in A.defines)L.push(j),L.push(A.defines[j]);return A.isRawShaderMaterial===!1&&(N(L,A),D(L,A),L.push(i.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function N(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function D(A,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),A.push(f.mask)}function U(A){const L=b[A.type];let j;if(L){const it=ta[L];j=IE.clone(it.uniforms)}else j=A.uniforms;return j}function P(A,L){let j=v.get(L);return j!==void 0?++j.usedTimes:(j=new x5(i,L,A,c),g.push(j),v.set(L,j)),j}function I(A){if(--A.usedTimes===0){const L=g.indexOf(A);g[L]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function z(A){p.remove(A)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:P,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:G}}function b5(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function s(u){i.delete(u)}function o(u,f,p){i.get(u)[f]=p}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function E5(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function y_(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v,x,y,b,T,M){let _=i[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:T,group:M},i[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=T,_.group=M),t++,_}function f(v,x,y,b,T,M){const _=u(v,x,y,b,T,M);y.transmission>0?s.push(_):y.transparent===!0?o.push(_):n.push(_)}function p(v,x,y,b,T,M){const _=u(v,x,y,b,T,M);y.transmission>0?s.unshift(_):y.transparent===!0?o.unshift(_):n.unshift(_)}function h(v,x){n.length>1&&n.sort(v||E5),s.length>1&&s.sort(x||__),o.length>1&&o.sort(x||__)}function g(){for(let v=t,x=i.length;v<x;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:f,unshift:p,finish:g,sort:h}}function T5(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new y_,i.set(s,[u])):o>=c.length?(u=new y_,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function A5(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new He};break;case"SpotLight":n={position:new rt,direction:new rt,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return i[t.id]=n,n}}}function w5(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let C5=0;function R5(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D5(i){const t=new A5,n=w5(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new rt);const o=new rt,c=new un,u=new un;function f(h){let g=0,v=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,b=0,T=0,M=0,_=0,N=0,D=0,U=0,P=0,I=0,z=0;h.sort(R5);for(let A=0,L=h.length;A<L;A++){const j=h[A],it=j.color,st=j.intensity,ht=j.distance;let ut=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===xo?ut=j.shadow.map.texture:ut=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)g+=it.r*st,v+=it.g*st,x+=it.b*st;else if(j.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(j.sh.coefficients[B],st);z++}else if(j.isDirectionalLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const V=j.shadow,Q=n.get(j);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=j.shadow.matrix,N++}s.directional[y]=B,y++}else if(j.isSpotLight){const B=t.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(it).multiplyScalar(st),B.distance=ht,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,s.spot[T]=B;const V=j.shadow;if(j.map&&(s.spotLightMap[P]=j.map,P++,V.updateMatrices(j),j.castShadow&&I++),s.spotLightMatrix[T]=V.matrix,j.castShadow){const Q=n.get(j);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=ut,U++}T++}else if(j.isRectAreaLight){const B=t.get(j);B.color.copy(it).multiplyScalar(st),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),s.rectArea[M]=B,M++}else if(j.isPointLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const V=j.shadow,Q=n.get(j);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,s.pointShadow[b]=Q,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=j.shadow.matrix,D++}s.point[b]=B,b++}else if(j.isHemisphereLight){const B=t.get(j);B.skyColor.copy(j.color).multiplyScalar(st),B.groundColor.copy(j.groundColor).multiplyScalar(st),s.hemi[_]=B,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const G=s.hash;(G.directionalLength!==y||G.pointLength!==b||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==_||G.numDirectionalShadows!==N||G.numPointShadows!==D||G.numSpotShadows!==U||G.numSpotMaps!==P||G.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+P-I,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,G.directionalLength=y,G.pointLength=b,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=_,G.numDirectionalShadows=N,G.numPointShadows=D,G.numSpotShadows=U,G.numSpotMaps=P,G.numLightProbes=z,s.version=C5++)}function p(h,g){let v=0,x=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let _=0,N=h.length;_<N;_++){const D=h[_];if(D.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),v++}else if(D.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),x++}else if(D.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:f,setupView:p,state:s}}function S_(i){const t=new D5(i),n=[],s=[];function o(g){h.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const h={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function L5(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new S_(i),t.set(o,[f])):c>=u.length?(f=new S_(i),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}const N5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P5=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],O5=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],M_=new un,wl=new rt,lp=new rt;function z5(i,t,n){let s=new x2;const o=new Oe,c=new Oe,u=new cn,f=new QE,p=new JE,h={},g=n.maxTextureSize,v={[Ts]:ai,[ai]:Ts,[Pa]:Pa},x=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:N5,fragmentShader:U5}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Wi;b.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ca(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let _=this.type;this.render=function(I,z,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===V3&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Gu);const A=i.getRenderTarget(),L=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),it=i.state;it.setBlending(Fa),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const st=_!==this.type;st&&z.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ut=>ut.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ut=I.length;ht<ut;ht++){const B=I[ht],V=B.shadow;if(V===void 0){oe("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Q=V.getFrameExtents();if(o.multiply(Q),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,V.mapSize.y=c.y)),V.map===null||st===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Rl){if(B.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new aa(o.x,o.y,{format:xo,type:Ba,minFilter:jn,magFilter:jn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Bl(o.x,o.y,ea),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Va,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn}else{B.isPointLight?(V.map=new v2(o.x),V.map.depthTexture=new KE(o.x,la)):(V.map=new aa(o.x,o.y),V.map.depthTexture=new Bl(o.x,o.y,la)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Va;const _t=i.state.buffers.depth.getReversed();this.type===Gu?(V.map.depthTexture.compareFunction=_t?n0:e0,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bn,V.map.depthTexture.magFilter=Bn)}V.camera.updateProjectionMatrix()}const St=V.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<St;_t++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(V.map),i.clear());const F=V.getViewport(_t);u.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),it.viewport(u)}if(B.isPointLight){const F=V.camera,at=V.matrix,vt=B.distance||F.far;vt!==F.far&&(F.far=vt,F.updateProjectionMatrix()),wl.setFromMatrixPosition(B.matrixWorld),F.position.copy(wl),lp.copy(F.position),lp.add(P5[_t]),F.up.copy(O5[_t]),F.lookAt(lp),F.updateMatrixWorld(),at.makeTranslation(-wl.x,-wl.y,-wl.z),M_.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V._frustum.setFromProjectionMatrix(M_,F.coordinateSystem,F.reversedDepth)}else V.updateMatrices(B);s=V.getFrustum(),U(z,G,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Rl&&N(V,G),V.needsUpdate=!1}_=this.type,M.needsUpdate=!1,i.setRenderTarget(A,L,j)};function N(I,z){const G=t.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new aa(o.x,o.y,{format:xo,type:Ba})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(z,null,G,x,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(z,null,G,y,T,null)}function D(I,z,G,A){let L=null;const j=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(j!==void 0)L=j;else if(L=G.isPointLight===!0?p:f,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const it=L.uuid,st=z.uuid;let ht=h[it];ht===void 0&&(ht={},h[it]=ht);let ut=ht[st];ut===void 0&&(ut=L.clone(),ht[st]=ut,z.addEventListener("dispose",P)),L=ut}if(L.visible=z.visible,L.wireframe=z.wireframe,A===Rl?L.side=z.shadowSide!==null?z.shadowSide:z.side:L.side=z.shadowSide!==null?z.shadowSide:v[z.side],L.alphaMap=z.alphaMap,L.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,L.map=z.map,L.clipShadows=z.clipShadows,L.clippingPlanes=z.clippingPlanes,L.clipIntersection=z.clipIntersection,L.displacementMap=z.displacementMap,L.displacementScale=z.displacementScale,L.displacementBias=z.displacementBias,L.wireframeLinewidth=z.wireframeLinewidth,L.linewidth=z.linewidth,G.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const it=i.properties.get(L);it.light=G}return L}function U(I,z,G,A,L){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&L===Rl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const st=t.update(I),ht=I.material;if(Array.isArray(ht)){const ut=st.groups;for(let B=0,V=ut.length;B<V;B++){const Q=ut[B],St=ht[Q.materialIndex];if(St&&St.visible){const _t=D(I,St,A,L);I.onBeforeShadow(i,I,z,G,st,_t,Q),i.renderBufferDirect(G,null,st,_t,I,Q),I.onAfterShadow(i,I,z,G,st,_t,Q)}}}else if(ht.visible){const ut=D(I,ht,A,L);I.onBeforeShadow(i,I,z,G,st,ut,null),i.renderBufferDirect(G,null,st,ut,I,null),I.onAfterShadow(i,I,z,G,st,ut,null)}}const it=I.children;for(let st=0,ht=it.length;st<ht;st++)U(it[st],z,G,A,L)}function P(I){I.target.removeEventListener("dispose",P);for(const G in h){const A=h[G],L=I.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const F5={[Dp]:Lp,[Np]:Op,[Up]:zp,[go]:Pp,[Lp]:Dp,[Op]:Np,[zp]:Up,[Pp]:go};function I5(i,t){function n(){let W=!1;const Ut=new cn;let Tt=null;const Ft=new cn(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(i.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,Ct,ae,ze){ze===!0&&(Mt*=ae,xt*=ae,Ct*=ae),Ut.set(Mt,xt,Ct,ae),Ft.equals(Ut)===!1&&(i.clearColor(Mt,xt,Ct,ae),Ft.copy(Ut))},reset:function(){W=!1,Tt=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Ut=!1,Tt=null,Ft=null,Mt=null;return{setReversed:function(xt){if(Ut!==xt){const Ct=t.get("EXT_clip_control");xt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Ut=xt;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(xt){xt?ft(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(xt){Tt!==xt&&!W&&(i.depthMask(xt),Tt=xt)},setFunc:function(xt){if(Ut&&(xt=F5[xt]),Ft!==xt){switch(xt){case Dp:i.depthFunc(i.NEVER);break;case Lp:i.depthFunc(i.ALWAYS);break;case Np:i.depthFunc(i.LESS);break;case go:i.depthFunc(i.LEQUAL);break;case Up:i.depthFunc(i.EQUAL);break;case Pp:i.depthFunc(i.GEQUAL);break;case Op:i.depthFunc(i.GREATER);break;case zp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Ut&&(xt=1-xt),i.clearDepth(xt),Mt=xt)},reset:function(){W=!1,Tt=null,Ft=null,Mt=null,Ut=!1}}}function o(){let W=!1,Ut=null,Tt=null,Ft=null,Mt=null,xt=null,Ct=null,ae=null,ze=null;return{setTest:function(Ee){W||(Ee?ft(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!W&&(i.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Vn,Li){(Tt!==Ee||Ft!==Vn||Mt!==Li)&&(i.stencilFunc(Ee,Vn,Li),Tt=Ee,Ft=Vn,Mt=Li)},setOp:function(Ee,Vn,Li){(xt!==Ee||Ct!==Vn||ae!==Li)&&(i.stencilOp(Ee,Vn,Li),xt=Ee,Ct=Vn,ae=Li)},setLocked:function(Ee){W=Ee},setClear:function(Ee){ze!==Ee&&(i.clearStencil(Ee),ze=Ee)},reset:function(){W=!1,Ut=null,Tt=null,Ft=null,Mt=null,xt=null,Ct=null,ae=null,ze=null}}}const c=new n,u=new s,f=new o,p=new WeakMap,h=new WeakMap;let g={},v={},x=new WeakMap,y=[],b=null,T=!1,M=null,_=null,N=null,D=null,U=null,P=null,I=null,z=new He(0,0,0),G=0,A=!1,L=null,j=null,it=null,st=null,ht=null;const ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=V>=2);let St=null,_t={};const F=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),vt=new cn().fromArray(F),wt=new cn().fromArray(at);function Vt(W,Ut,Tt,Ft){const Mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(W,xt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Tt;Ct++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Ut+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return xt}const nt={};nt[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ft(i.DEPTH_TEST),u.setFunc(go),le(!1),nn(wx),ft(i.CULL_FACE),me(Fa);function ft(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Lt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Xt(W,Ut){return v[W]!==Ut?(i.bindFramebuffer(W,Ut),v[W]=Ut,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ut),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(W,Ut){let Tt=y,Ft=!1;if(W){Tt=x.get(Ut),Tt===void 0&&(Tt=[],x.set(Ut,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Ct=Mt.length;xt<Ct;xt++)Tt[xt]=i.COLOR_ATTACHMENT0+xt;Tt.length=Mt.length,Ft=!0}}else Tt[0]!==i.BACK&&(Tt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(Tt)}function pe(W){return b!==W?(i.useProgram(W),b=W,!0):!1}const en={[nr]:i.FUNC_ADD,[G3]:i.FUNC_SUBTRACT,[k3]:i.FUNC_REVERSE_SUBTRACT};en[j3]=i.MIN,en[X3]=i.MAX;const xe={[W3]:i.ZERO,[q3]:i.ONE,[Y3]:i.SRC_COLOR,[Cp]:i.SRC_ALPHA,[tE]:i.SRC_ALPHA_SATURATE,[J3]:i.DST_COLOR,[Z3]:i.DST_ALPHA,[K3]:i.ONE_MINUS_SRC_COLOR,[Rp]:i.ONE_MINUS_SRC_ALPHA,[$3]:i.ONE_MINUS_DST_COLOR,[Q3]:i.ONE_MINUS_DST_ALPHA,[eE]:i.CONSTANT_COLOR,[nE]:i.ONE_MINUS_CONSTANT_COLOR,[iE]:i.CONSTANT_ALPHA,[aE]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Ut,Tt,Ft,Mt,xt,Ct,ae,ze,Ee){if(W===Fa){T===!0&&(Lt(i.BLEND),T=!1);return}if(T===!1&&(ft(i.BLEND),T=!0),W!==H3){if(W!==M||Ee!==A){if((_!==nr||U!==nr)&&(i.blendEquation(i.FUNC_ADD),_=nr,U=nr),Ee)switch(W){case ho:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wp:i.blendFunc(i.ONE,i.ONE);break;case Cx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cx:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rx:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}N=null,D=null,P=null,I=null,z.set(0,0,0),G=0,M=W,A=Ee}return}Mt=Mt||Ut,xt=xt||Tt,Ct=Ct||Ft,(Ut!==_||Mt!==U)&&(i.blendEquationSeparate(en[Ut],en[Mt]),_=Ut,U=Mt),(Tt!==N||Ft!==D||xt!==P||Ct!==I)&&(i.blendFuncSeparate(xe[Tt],xe[Ft],xe[xt],xe[Ct]),N=Tt,D=Ft,P=xt,I=Ct),(ae.equals(z)===!1||ze!==G)&&(i.blendColor(ae.r,ae.g,ae.b,ze),z.copy(ae),G=ze),M=W,A=!1}function Re(W,Ut){W.side===Pa?Lt(i.CULL_FACE):ft(i.CULL_FACE);let Tt=W.side===ai;Ut&&(Tt=!Tt),le(Tt),W.blending===ho&&W.transparent===!1?me(Fa):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){L!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),L=W)}function nn(W){W!==I3?(ft(i.CULL_FACE),W!==j&&(W===wx?i.cullFace(i.BACK):W===B3?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),j=W}function k(W){W!==it&&(B&&i.lineWidth(W),it=W)}function Qe(W,Ut,Tt){W?(ft(i.POLYGON_OFFSET_FILL),(st!==Ut||ht!==Tt)&&(i.polygonOffset(Ut,Tt),st=Ut,ht=Tt)):Lt(i.POLYGON_OFFSET_FILL)}function be(W){W?ft(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=i.TEXTURE0+ut-1),St!==W&&(i.activeTexture(W),St=W)}function Kt(W,Ut,Tt){Tt===void 0&&(St===null?Tt=i.TEXTURE0+ut-1:Tt=St);let Ft=_t[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},_t[Tt]=Ft),(Ft.type!==W||Ft.texture!==Ut)&&(St!==Tt&&(i.activeTexture(Tt),St=Tt),i.bindTexture(W,Ut||nt[W]),Ft.type=W,Ft.texture=Ut)}function O(){const W=_t[St];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function pt(){try{i.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(){try{i.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Qt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Rt(){try{i.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Wt(){try{i.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ie(){try{i.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function bt(){try{i.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(W){vt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function It(W){wt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function zt(W,Ut){let Tt=h.get(Ut);Tt===void 0&&(Tt=new WeakMap,h.set(Ut,Tt));let Ft=Tt.get(W);Ft===void 0&&(Ft=i.getUniformBlockIndex(Ut,W.name),Tt.set(W,Ft))}function Dt(W,Ut){const Ft=h.get(Ut).get(W);p.get(Ut)!==Ft&&(i.uniformBlockBinding(Ut,Ft,W.__bindingPointIndex),p.set(Ut,Ft))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},St=null,_t={},v={},x=new WeakMap,y=[],b=null,T=!1,M=null,_=null,N=null,D=null,U=null,P=null,I=null,z=new He(0,0,0),G=0,A=!1,L=null,j=null,it=null,st=null,ht=null,vt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ft,disable:Lt,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:pe,setBlending:me,setMaterial:Re,setFlipSided:le,setCullFace:nn,setLineWidth:k,setPolygonOffset:Qe,setScissorTest:be,activeTexture:Ue,bindTexture:Kt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ie,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Qt,scissor:Et,viewport:It,reset:ue}}function B5(i,t,n,s,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Oe,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):af("canvas")}function T(O,E,q){let pt=1;const yt=Kt(O);if((yt.width>q||yt.height>q)&&(pt=q/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(pt*yt.width),Qt=Math.floor(pt*yt.height);v===void 0&&(v=b(ct,Qt));const Rt=E?b(ct,Qt):v;return Rt.width=ct,Rt.height=Qt,Rt.getContext("2d").drawImage(O,0,0,ct,Qt),oe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ct+"x"+Qt+")."),Rt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){i.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(O,E,q,pt,yt=!1){if(O!==null){if(i[O]!==void 0)return i[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=E;if(E===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),q===i.UNSIGNED_INT&&(ct=i.RG32UI),q===i.BYTE&&(ct=i.RG8I),q===i.SHORT&&(ct=i.RG16I),q===i.INT&&(ct=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),q===i.UNSIGNED_INT&&(ct=i.RGB32UI),q===i.BYTE&&(ct=i.RGB8I),q===i.SHORT&&(ct=i.RGB16I),q===i.INT&&(ct=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),q===i.BYTE&&(ct=i.RGBA8I),q===i.SHORT&&(ct=i.RGBA16I),q===i.INT&&(ct=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),E===i.RGBA){const Qt=yt?ef:Te.getTransfer(pt);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=Qt===Ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function U(O,E){let q;return O?E===null||E===la||E===Fl?q=i.DEPTH24_STENCIL8:E===ea?q=i.DEPTH32F_STENCIL8:E===zl&&(q=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===Fl?q=i.DEPTH_COMPONENT24:E===ea?q=i.DEPTH_COMPONENT32F:E===zl&&(q=i.DEPTH_COMPONENT16),q}function P(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Bn&&O.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),G(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),L(E)}function G(O){const E=s.get(O);if(E.__webglInit===void 0)return;const q=O.source,pt=x.get(q);if(pt){const yt=pt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(O),Object.keys(pt).length===0&&x.delete(q)}s.remove(O)}function A(O){const E=s.get(O);i.deleteTexture(E.__webglTexture);const q=O.source,pt=x.get(q);delete pt[E.__cacheKey],u.memory.textures--}function L(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let yt=0;yt<E.__webglFramebuffer[pt].length;yt++)i.deleteFramebuffer(E.__webglFramebuffer[pt][yt]);else i.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)i.deleteFramebuffer(E.__webglFramebuffer[pt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=O.textures;for(let pt=0,yt=q.length;pt<yt;pt++){const ct=s.get(q[pt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),u.memory.textures--),s.remove(q[pt])}s.remove(O)}let j=0;function it(){j=0}function st(){const O=j;return O>=o.maxTextures&&oe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),j+=1,O}function ht(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ut(O,E){const q=s.get(O);if(O.isVideoTexture&&be(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const pt=O.image;if(pt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,O,E);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function B(O,E){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){nt(q,O,E);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function V(O,E){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){nt(q,O,E);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function Q(O,E){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ft(q,O,E);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const St={[Bp]:i.REPEAT,[Oa]:i.CLAMP_TO_EDGE,[Vp]:i.MIRRORED_REPEAT},_t={[Bn]:i.NEAREST,[oE]:i.NEAREST_MIPMAP_NEAREST,[pu]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Nh]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},F={[fE]:i.NEVER,[gE]:i.ALWAYS,[dE]:i.LESS,[e0]:i.LEQUAL,[hE]:i.EQUAL,[n0]:i.GEQUAL,[pE]:i.GREATER,[mE]:i.NOTEQUAL};function at(O,E){if(E.type===ea&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Nh||E.magFilter===pu||E.magFilter===ar||E.minFilter===jn||E.minFilter===Nh||E.minFilter===pu||E.minFilter===ar)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,St[E.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,St[E.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,St[E.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,_t[E.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==pu&&E.minFilter!==ar||E.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function vt(O,E){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const pt=E.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ct=ht(E);if(ct!==O.__cacheKey){yt[ct]===void 0&&(yt[ct]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),yt[ct].usedTimes++;const Qt=yt[O.__cacheKey];Qt!==void 0&&(yt[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&A(E)),O.__cacheKey=ct,O.__webglTexture=yt[ct].texture}return q}function wt(O,E,q){return Math.floor(Math.floor(O/q)/E)}function Vt(O,E,q,pt){const ct=O.updateRanges;if(ct.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,pt,E.data);else{ct.sort((bt,Et)=>bt.start-Et.start);let Qt=0;for(let bt=1;bt<ct.length;bt++){const Et=ct[Qt],It=ct[bt],zt=Et.start+Et.count,Dt=wt(It.start,E.width,4),ue=wt(Et.start,E.width,4);It.start<=zt+1&&Dt===ue&&wt(It.start+It.count-1,E.width,4)===Dt?Et.count=Math.max(Et.count,It.start+It.count-Et.start):(++Qt,ct[Qt]=It)}ct.length=Qt+1;const Rt=i.getParameter(i.UNPACK_ROW_LENGTH),Wt=i.getParameter(i.UNPACK_SKIP_PIXELS),ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Et=ct.length;bt<Et;bt++){const It=ct[bt],zt=Math.floor(It.start/4),Dt=Math.ceil(It.count/4),ue=zt%E.width,W=Math.floor(zt/E.width),Ut=Dt,Tt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,ue,W,Ut,Tt,q,pt,E.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function nt(O,E,q){let pt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=i.TEXTURE_3D);const yt=vt(O,E),ct=E.source;n.bindTexture(pt,O.__webglTexture,i.TEXTURE0+q);const Qt=s.get(ct);if(ct.version!==Qt.__version||yt===!0){n.activeTexture(i.TEXTURE0+q);const Rt=Te.getPrimaries(Te.workingColorSpace),Wt=E.colorSpace===Ms?null:Te.getPrimaries(E.colorSpace),ie=E.colorSpace===Ms||Rt===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let bt=T(E.image,!1,o.maxTextureSize);bt=Ue(E,bt);const Et=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let zt=D(E.internalFormat,Et,It,E.colorSpace,E.isVideoTexture);at(pt,E);let Dt;const ue=E.mipmaps,W=E.isVideoTexture!==!0,Ut=Qt.__version===void 0||yt===!0,Tt=ct.dataReady,Ft=P(E,bt);if(E.isDepthTexture)zt=U(E.format===sr,E.type),Ut&&(W?n.texStorage2D(i.TEXTURE_2D,1,zt,bt.width,bt.height):n.texImage2D(i.TEXTURE_2D,0,zt,bt.width,bt.height,0,Et,It,null));else if(E.isDataTexture)if(ue.length>0){W&&Ut&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,ue[0].width,ue[0].height);for(let Mt=0,xt=ue.length;Mt<xt;Mt++)Dt=ue[Mt],W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,It,Dt.data):n.texImage2D(i.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Et,It,Dt.data);E.generateMipmaps=!1}else W?(Ut&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,bt.width,bt.height),Tt&&Vt(E,bt,Et,It)):n.texImage2D(i.TEXTURE_2D,0,zt,bt.width,bt.height,0,Et,It,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ut&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,ue[0].width,ue[0].height,bt.depth);for(let Mt=0,xt=ue.length;Mt<xt;Mt++)if(Dt=ue[Mt],E.format!==ki)if(Et!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const Ct=$x(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const ze=Dt.data.subarray(ae*Ct/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ct/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,ae,Dt.width,Dt.height,1,Et,ze)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Et,Dt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Et,It,Dt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,bt.depth,0,Et,It,Dt.data)}else{W&&Ut&&n.texStorage2D(i.TEXTURE_2D,Ft,zt,ue[0].width,ue[0].height);for(let Mt=0,xt=ue.length;Mt<xt;Mt++)Dt=ue[Mt],E.format!==ki?Et!==null?W?Tt&&n.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,Dt.data):n.compressedTexImage2D(i.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Dt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,It,Dt.data):n.texImage2D(i.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Et,It,Dt.data)}else if(E.isDataArrayTexture)if(W){if(Ut&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,bt.width,bt.height,bt.depth),Tt)if(E.layerUpdates.size>0){const Mt=$x(bt.width,bt.height,E.format,E.type);for(const xt of E.layerUpdates){const Ct=bt.data.subarray(xt*Mt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Et,It,Ct)}E.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,It,bt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,Et,It,bt.data);else if(E.isData3DTexture)W?(Ut&&n.texStorage3D(i.TEXTURE_3D,Ft,zt,bt.width,bt.height,bt.depth),Tt&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,It,bt.data)):n.texImage3D(i.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,Et,It,bt.data);else if(E.isFramebufferTexture){if(Ut)if(W)n.texStorage2D(i.TEXTURE_2D,Ft,zt,bt.width,bt.height);else{let Mt=bt.width,xt=bt.height;for(let Ct=0;Ct<Ft;Ct++)n.texImage2D(i.TEXTURE_2D,Ct,zt,Mt,xt,0,Et,It,null),Mt>>=1,xt>>=1}}else if(ue.length>0){if(W&&Ut){const Mt=Kt(ue[0]);n.texStorage2D(i.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}for(let Mt=0,xt=ue.length;Mt<xt;Mt++)Dt=ue[Mt],W?Tt&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Et,It,Dt):n.texImage2D(i.TEXTURE_2D,Mt,zt,Et,It,Dt);E.generateMipmaps=!1}else if(W){if(Ut){const Mt=Kt(bt);n.texStorage2D(i.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}Tt&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,It,bt)}else n.texImage2D(i.TEXTURE_2D,0,zt,Et,It,bt);M(E)&&_(pt),Qt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ft(O,E,q){if(E.image.length!==6)return;const pt=vt(O,E),yt=E.source;n.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+q);const ct=s.get(yt);if(yt.version!==ct.__version||pt===!0){n.activeTexture(i.TEXTURE0+q);const Qt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===Ms?null:Te.getPrimaries(E.colorSpace),Wt=E.colorSpace===Ms||Qt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let xt=0;xt<6;xt++)!ie&&!bt?Et[xt]=T(E.image[xt],!0,o.maxCubemapSize):Et[xt]=bt?E.image[xt].image:E.image[xt],Et[xt]=Ue(E,Et[xt]);const It=Et[0],zt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),ue=D(E.internalFormat,zt,Dt,E.colorSpace),W=E.isVideoTexture!==!0,Ut=ct.__version===void 0||pt===!0,Tt=yt.dataReady;let Ft=P(E,It);at(i.TEXTURE_CUBE_MAP,E);let Mt;if(ie){W&&Ut&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,It.width,It.height);for(let xt=0;xt<6;xt++){Mt=Et[xt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];E.format!==ki?zt!==null?W?Tt&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,ae.width,ae.height,zt,ae.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ue,ae.width,ae.height,0,ae.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,ae.width,ae.height,zt,Dt,ae.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ue,ae.width,ae.height,0,zt,Dt,ae.data)}}}else{if(Mt=E.mipmaps,W&&Ut){Mt.length>0&&Ft++;const xt=Kt(Et[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Et[xt].width,Et[xt].height,zt,Dt,Et[xt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Et[xt].width,Et[xt].height,0,zt,Dt,Et[xt].data);for(let Ct=0;Ct<Mt.length;Ct++){const ze=Mt[Ct].image[xt].image;W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,ze.width,ze.height,zt,Dt,ze.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ue,ze.width,ze.height,0,zt,Dt,ze.data)}}else{W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Dt,Et[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,zt,Dt,Et[xt]);for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];W?Tt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,zt,Dt,ae.image[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ue,zt,Dt,ae.image[xt])}}}M(E)&&_(i.TEXTURE_CUBE_MAP),ct.__version=yt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Lt(O,E,q,pt,yt,ct){const Qt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Wt=D(q.internalFormat,Qt,Rt,q.colorSpace),ie=s.get(E),bt=s.get(q);if(bt.__renderTarget=E,!ie.__hasExternalTextures){const Et=Math.max(1,E.width>>ct),It=Math.max(1,E.height>>ct);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?n.texImage3D(yt,ct,Wt,Et,It,E.depth,0,Qt,Rt,null):n.texImage2D(yt,ct,Wt,Et,It,0,Qt,Rt,null)}n.bindFramebuffer(i.FRAMEBUFFER,O),Qe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,yt,bt.__webglTexture,0,k(E)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,yt,bt.__webglTexture,ct),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(O,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ct=U(E.stencilBuffer,yt),Qt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qe(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k(E),ct,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,k(E),ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Qt,i.RENDERBUFFER,O)}else{const pt=E.textures;for(let yt=0;yt<pt.length;yt++){const ct=pt[yt],Qt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Wt=D(ct.internalFormat,Qt,Rt,ct.colorSpace);Qe(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k(E),Wt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,k(E),Wt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Wt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(O,E,q){const pt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),yt.__webglTexture===void 0){yt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,yt.__webglTexture),at(i.TEXTURE_CUBE_MAP,E.depthTexture);const ie=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===Va?Et=i.DEPTH_COMPONENT24:E.depthTexture.format===sr&&(Et=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,E.width,E.height,0,ie,bt,null)}}else ut(E.depthTexture,0);const ct=yt.__webglTexture,Qt=k(E),Rt=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Wt=E.depthTexture.format===sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)Qe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Wt,Rt,ct,0,Qt):i.framebufferTexture2D(i.FRAMEBUFFER,Wt,Rt,ct,0);else if(E.depthTexture.format===sr)Qe(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Wt,Rt,ct,0,Qt):i.framebufferTexture2D(i.FRAMEBUFFER,Wt,Rt,ct,0);else throw new Error("Unknown depthTexture format")}function pe(O){const E=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Ht(E.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Ht(E.__webglFramebuffer[0],O,0):Ht(E.__webglFramebuffer,O,0)}else if(q){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=i.createRenderbuffer(),Xt(E.__webglDepthbuffer[pt],O,!1);else{const yt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ct)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Xt(E.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ct)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function en(O,E,q){const pt=s.get(O);E!==void 0&&Lt(pt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&pe(O)}function xe(O){const E=O.texture,q=s.get(O),pt=s.get(E);O.addEventListener("dispose",z);const yt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Qt=yt.length>1;if(Qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=E.version,u.memory.textures++),ct){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)q.__webglFramebuffer[Rt][Wt]=i.createFramebuffer()}else q.__webglFramebuffer[Rt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Qt)for(let Rt=0,Wt=yt.length;Rt<Wt;Rt++){const ie=s.get(yt[Rt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),u.memory.textures++)}if(O.samples>0&&Qe(O)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){const Wt=yt[Rt];q.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ie=c.convert(Wt.format,Wt.colorSpace),bt=c.convert(Wt.type),Et=D(Wt.internalFormat,ie,bt,Wt.colorSpace,O.isXRRenderTarget===!0),It=k(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Et,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){n.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Lt(q.__webglFramebuffer[Rt][Wt],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else Lt(q.__webglFramebuffer[Rt],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&_(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Qt){for(let Rt=0,Wt=yt.length;Rt<Wt;Rt++){const ie=yt[Rt],bt=s.get(ie);let Et=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Et=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Et,bt.__webglTexture),at(Et,ie),Lt(q.__webglFramebuffer,O,ie,i.COLOR_ATTACHMENT0+Rt,Et,0),M(ie)&&_(Et)}n.unbindTexture()}else{let Rt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Rt,pt.__webglTexture),at(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Lt(q.__webglFramebuffer[Wt],O,E,i.COLOR_ATTACHMENT0,Rt,Wt);else Lt(q.__webglFramebuffer,O,E,i.COLOR_ATTACHMENT0,Rt,0);M(E)&&_(Rt),n.unbindTexture()}O.depthBuffer&&pe(O)}function me(O){const E=O.textures;for(let q=0,pt=E.length;q<pt;q++){const yt=E[q];if(M(yt)){const ct=N(O),Qt=s.get(yt).__webglTexture;n.bindTexture(ct,Qt),_(ct),n.unbindTexture()}}}const Re=[],le=[];function nn(O){if(O.samples>0){if(Qe(O)===!1){const E=O.textures,q=O.width,pt=O.height;let yt=i.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Qt=s.get(O),Rt=E.length>1;if(Rt)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Wt=O.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),Rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[ie]);const bt=s.get(E[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,q,pt,0,0,q,pt,yt,i.NEAREST),p===!0&&(Re.length=0,le.length=0,Re.push(i.COLOR_ATTACHMENT0+ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Re.push(ct),le.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[ie]);const bt=s.get(E[ie]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,bt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const E=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function k(O){return Math.min(o.maxSamples,O.samples)}function Qe(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function Ue(O,E){const q=O.colorSpace,pt=O.format,yt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==_o&&q!==Ms&&(Te.getTransfer(q)===Ve?(pt!==ki||yt!==Ci)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),E}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=st,this.resetTextureUnits=it,this.setTexture2D=ut,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=en,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function V5(i,t){function n(s,o=Ms){let c;const u=Te.getTransfer(o);if(s===Ci)return i.UNSIGNED_BYTE;if(s===Zm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Qm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===e2)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===n2)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===$y)return i.BYTE;if(s===t2)return i.SHORT;if(s===zl)return i.UNSIGNED_SHORT;if(s===Km)return i.INT;if(s===la)return i.UNSIGNED_INT;if(s===ea)return i.FLOAT;if(s===Ba)return i.HALF_FLOAT;if(s===i2)return i.ALPHA;if(s===a2)return i.RGB;if(s===ki)return i.RGBA;if(s===Va)return i.DEPTH_COMPONENT;if(s===sr)return i.DEPTH_STENCIL;if(s===s2)return i.RED;if(s===Jm)return i.RED_INTEGER;if(s===xo)return i.RG;if(s===$m)return i.RG_INTEGER;if(s===t0)return i.RGBA_INTEGER;if(s===ku||s===ju||s===Xu||s===Wu)if(u===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ju)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hp||s===Gp||s===kp||s===jp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xp||s===Wp||s===qp||s===Yp||s===Kp||s===Zp||s===Qp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xp||s===Wp)return u===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yp)return c.COMPRESSED_R11_EAC;if(s===Kp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Zp)return c.COMPRESSED_RG11_EAC;if(s===Qp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um||s===fm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$p)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===em)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===im)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===am)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===om)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===um)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dm||s===hm||s===pm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===dm)return u===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mm||s===gm||s===vm||s===xm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===mm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const H5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new y2(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Xi({vertexShader:H5,fragmentShader:G5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ca(new Zl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j5 extends Mo{constructor(t,n){super();const s=this;let o=null,c=1,u=null,f="local-floor",p=1,h=null,g=null,v=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new k5,_={},N=n.getContextAttributes();let D=null,U=null;const P=[],I=[],z=new Oe;let G=null;const A=new wi;A.viewport=new cn;const L=new wi;L.viewport=new cn;const j=[A,L],it=new $E;let st=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ft=P[nt];return ft===void 0&&(ft=new ep,P[nt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(nt){let ft=P[nt];return ft===void 0&&(ft=new ep,P[nt]=ft),ft.getGripSpace()},this.getHand=function(nt){let ft=P[nt];return ft===void 0&&(ft=new ep,P[nt]=ft),ft.getHandSpace()};function ut(nt){const ft=I.indexOf(nt.inputSource);if(ft===-1)return;const Lt=P[ft];Lt!==void 0&&(Lt.update(nt.inputSource,nt.frame,h||u),Lt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){o.removeEventListener("select",ut),o.removeEventListener("selectstart",ut),o.removeEventListener("selectend",ut),o.removeEventListener("squeeze",ut),o.removeEventListener("squeezestart",ut),o.removeEventListener("squeezeend",ut),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",V);for(let nt=0;nt<P.length;nt++){const ft=I[nt];ft!==null&&(I[nt]=null,P[nt].disconnect(ft))}st=null,ht=null,M.reset();for(const nt in _)delete _[nt];t.setRenderTarget(D),y=null,x=null,v=null,o=null,U=null,Vt.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",ut),o.addEventListener("selectstart",ut),o.addEventListener("selectend",ut),o.addEventListener("squeeze",ut),o.addEventListener("squeezestart",ut),o.addEventListener("squeezeend",ut),o.addEventListener("end",B),o.addEventListener("inputsourceschange",V),N.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Xt=null,Ht=null;N.depth&&(Ht=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Lt=N.stencil?sr:Va,Xt=N.stencil?Fl:la);const pe={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(pe),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new aa(x.textureWidth,x.textureHeight,{format:ki,type:Ci,depthTexture:new Bl(x.textureWidth,x.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Lt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Lt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new aa(y.framebufferWidth,y.framebufferHeight,{format:ki,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),Vt.setContext(o),Vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(nt){for(let ft=0;ft<nt.removed.length;ft++){const Lt=nt.removed[ft],Xt=I.indexOf(Lt);Xt>=0&&(I[Xt]=null,P[Xt].disconnect(Lt))}for(let ft=0;ft<nt.added.length;ft++){const Lt=nt.added[ft];let Xt=I.indexOf(Lt);if(Xt===-1){for(let pe=0;pe<P.length;pe++)if(pe>=I.length){I.push(Lt),Xt=pe;break}else if(I[pe]===null){I[pe]=Lt,Xt=pe;break}if(Xt===-1)break}const Ht=P[Xt];Ht&&Ht.connect(Lt)}}const Q=new rt,St=new rt;function _t(nt,ft,Lt){Q.setFromMatrixPosition(ft.matrixWorld),St.setFromMatrixPosition(Lt.matrixWorld);const Xt=Q.distanceTo(St),Ht=ft.projectionMatrix.elements,pe=Lt.projectionMatrix.elements,en=Ht[14]/(Ht[10]-1),xe=Ht[14]/(Ht[10]+1),me=(Ht[9]+1)/Ht[5],Re=(Ht[9]-1)/Ht[5],le=(Ht[8]-1)/Ht[0],nn=(pe[8]+1)/pe[0],k=en*le,Qe=en*nn,be=Xt/(-le+nn),Ue=be*-le;if(ft.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ue),nt.translateZ(be),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ht[10]===-1)nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Kt=en+be,O=xe+be,E=k-Ue,q=Qe+(Xt-Ue),pt=me*xe/O*Kt,yt=Re*xe/O*Kt;nt.projectionMatrix.makePerspective(E,q,pt,yt,Kt,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function F(nt,ft){ft===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ft.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let ft=nt.near,Lt=nt.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Lt=M.depthFar)),it.near=L.near=A.near=ft,it.far=L.far=A.far=Lt,(st!==it.near||ht!==it.far)&&(o.updateRenderState({depthNear:it.near,depthFar:it.far}),st=it.near,ht=it.far),it.layers.mask=nt.layers.mask|6,A.layers.mask=it.layers.mask&3,L.layers.mask=it.layers.mask&5;const Xt=nt.parent,Ht=it.cameras;F(it,Xt);for(let pe=0;pe<Ht.length;pe++)F(Ht[pe],Xt);Ht.length===2?_t(it,A,L):it.projectionMatrix.copy(A.projectionMatrix),at(nt,it,Xt)};function at(nt,ft,Lt){Lt===null?nt.matrix.copy(ft.matrixWorld):(nt.matrix.copy(Lt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ft.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=_m*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(nt){p=nt,x!==null&&(x.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(nt){return _[nt]};let vt=null;function wt(nt,ft){if(g=ft.getViewerPose(h||u),b=ft,g!==null){const Lt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Xt=!1;Lt.length!==it.cameras.length&&(it.cameras.length=0,Xt=!0);for(let xe=0;xe<Lt.length;xe++){const me=Lt[xe];let Re=null;if(y!==null)Re=y.getViewport(me);else{const nn=v.getViewSubImage(x,me);Re=nn.viewport,xe===0&&(t.setRenderTargetTextures(U,nn.colorTexture,nn.depthStencilTexture),t.setRenderTarget(U))}let le=j[xe];le===void 0&&(le=new wi,le.layers.enable(xe),le.viewport=new cn,j[xe]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Re.x,Re.y,Re.width,Re.height),xe===0&&(it.matrix.copy(le.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Xt===!0&&it.cameras.push(le)}const Ht=o.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const xe=v.getDepthInformation(Lt[0]);xe&&xe.isValid&&xe.texture&&M.init(xe,o.renderState)}if(Ht&&Ht.includes("camera-access")&&T){t.state.unbindTexture(),v=s.getBinding();for(let xe=0;xe<Lt.length;xe++){const me=Lt[xe].camera;if(me){let Re=_[me];Re||(Re=new y2,_[me]=Re);const le=v.getCameraImage(me);Re.sourceTexture=le}}}}for(let Lt=0;Lt<P.length;Lt++){const Xt=I[Lt],Ht=P[Lt];Xt!==null&&Ht!==void 0&&Ht.update(Xt,ft,h||u)}vt&&vt(nt,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Vt=new M2;Vt.setAnimationLoop(wt),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const Js=new Ha,X5=new un;function W5(i,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,p2(i)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,N,D,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&f(M,_)):_.isPointsMaterial?p(M,_,N,D):_.isSpriteMaterial?h(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===ai&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===ai&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=t.get(_),D=N.envMap,U=N.envMapRotation;D&&(M.envMap.value=D,Js.copy(U),Js.x*=-1,Js.y*=-1,Js.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),M.envMapRotation.value.setFromMatrix4(X5.makeRotationFromEuler(Js)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function f(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,N,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=D*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ai&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const N=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function q5(i,t,n,s){let o={},c={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,D){const U=D.program;s.uniformBlockBinding(N,U)}function h(N,D){let U=o[N.id];U===void 0&&(b(N),U=g(N),o[N.id]=U,N.addEventListener("dispose",M));const P=D.program;s.updateUBOMapping(N,P);const I=t.render.frame;c[N.id]!==I&&(x(N),c[N.id]=I)}function g(N){const D=v();N.__bindingPointIndex=D;const U=i.createBuffer(),P=N.__size,I=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function v(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=o[N.id],U=N.uniforms,P=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let I=0,z=U.length;I<z;I++){const G=Array.isArray(U[I])?U[I]:[U[I]];for(let A=0,L=G.length;A<L;A++){const j=G[A];if(y(j,I,A,P)===!0){const it=j.__offset,st=Array.isArray(j.value)?j.value:[j.value];let ht=0;for(let ut=0;ut<st.length;ut++){const B=st[ut],V=T(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,it+ht,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,ht),ht+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,it,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,D,U,P){const I=N.value,z=D+"_"+U;if(P[z]===void 0)return typeof I=="number"||typeof I=="boolean"?P[z]=I:P[z]=I.clone(),!0;{const G=P[z];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return P[z]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function b(N){const D=N.uniforms;let U=0;const P=16;for(let z=0,G=D.length;z<G;z++){const A=Array.isArray(D[z])?D[z]:[D[z]];for(let L=0,j=A.length;L<j;L++){const it=A[L],st=Array.isArray(it.value)?it.value:[it.value];for(let ht=0,ut=st.length;ht<ut;ht++){const B=st[ht],V=T(B),Q=U%P,St=Q%V.boundary,_t=Q+St;U+=St,_t!==0&&P-_t<V.storage&&(U+=P-_t),it.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=U,U+=V.storage}}}const I=U%P;return I>0&&(U+=P-I),N.__size=U,N.__cache={},this}function T(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",N),D}function M(N){const D=N.target;D.removeEventListener("dispose",M);const U=u.indexOf(D.__bindingPointIndex);u.splice(U,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function _(){for(const N in o)i.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:p,update:h,dispose:_}}const Y5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function K5(){return Ji===null&&(Ji=new jE(Y5,16,16,xo,Ba),Ji.name="DFG_LUT",Ji.minFilter=jn,Ji.magFilter=jn,Ji.wrapS=Oa,Ji.wrapT=Oa,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class Z5{constructor(t={}){const{canvas:n=vE(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:y=Ci}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const T=y,M=new Set([t0,$m,Jm]),_=new Set([Ci,la,zl,Fl,Zm,Qm]),N=new Uint32Array(4),D=new Int32Array(4);let U=null,P=null;const I=[],z=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Ai;let j=0,it=0,st=null,ht=-1,ut=null;const B=new cn,V=new cn;let Q=null;const St=new He(0);let _t=0,F=n.width,at=n.height,vt=1,wt=null,Vt=null;const nt=new cn(0,0,F,at),ft=new cn(0,0,F,at);let Lt=!1;const Xt=new x2;let Ht=!1,pe=!1;const en=new un,xe=new rt,me=new cn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function nn(){return st===null?vt:1}let k=s;function Qe(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ym}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),k===null){const Y="webgl2";if(k=Qe(Y,C),k===null)throw Qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ce("WebGLRenderer: "+C.message),C}let be,Ue,Kt,O,E,q,pt,yt,ct,Qt,Rt,Wt,ie,bt,Et,It,zt,Dt,ue,W,Ut,Tt,Ft,Mt;function xt(){be=new Kw(k),be.init(),Tt=new V5(k,be),Ue=new Vw(k,be,t,Tt),Kt=new I5(k,be),Ue.reversedDepthBuffer&&x&&Kt.buffers.depth.setReversed(!0),O=new Jw(k),E=new b5,q=new B5(k,be,Kt,E,Ue,Tt,O),pt=new Gw(A),yt=new Yw(A),ct=new nT(k),Ft=new Iw(k,ct),Qt=new Zw(k,ct,O,Ft),Rt=new t4(k,Qt,ct,O),ue=new $w(k,Ue,q),It=new Hw(E),Wt=new M5(A,pt,yt,be,Ue,Ft,It),ie=new W5(A,E),bt=new T5,Et=new L5(be),Dt=new Fw(A,pt,yt,Kt,Rt,b,p),zt=new z5(A,Rt,Ue),Mt=new q5(k,O,Ue,Kt),W=new Bw(k,be,O),Ut=new Qw(k,be,O),O.programs=Wt.programs,A.capabilities=Ue,A.extensions=be,A.properties=E,A.renderLists=bt,A.shadowMap=zt,A.state=Kt,A.info=O}xt(),T!==Ci&&(G=new n4(T,n.width,n.height,o,c));const Ct=new j5(A,k);this.xr=Ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(F,at,!1))},this.getSize=function(C){return C.set(F,at)},this.setSize=function(C,Y,ot=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,at=Y,n.width=Math.floor(C*vt),n.height=Math.floor(Y*vt),ot===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(F*vt,at*vt).floor()},this.setDrawingBufferSize=function(C,Y,ot){F=C,at=Y,vt=ot,n.width=Math.floor(C*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===Ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,Y,ot,tt){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,Y,ot,tt),Kt.viewport(B.copy(nt).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,Y,ot,tt){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,Y,ot,tt),Kt.scissor(V.copy(ft).multiplyScalar(vt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){Kt.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){wt=C},this.setTransparentSort=function(C){Vt=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ot=!0){let tt=0;if(C){let Z=!1;if(st!==null){const Nt=st.texture.format;Z=M.has(Nt)}if(Z){const Nt=st.texture.type,Bt=_.has(Nt),Pt=Dt.getClearColor(),Gt=Dt.getClearAlpha(),qt=Pt.r,te=Pt.g,Yt=Pt.b;Bt?(N[0]=qt,N[1]=te,N[2]=Yt,N[3]=Gt,k.clearBufferuiv(k.COLOR,0,N)):(D[0]=qt,D[1]=te,D[2]=Yt,D[3]=Gt,k.clearBufferiv(k.COLOR,0,D))}else tt|=k.COLOR_BUFFER_BIT}Y&&(tt|=k.DEPTH_BUFFER_BIT),ot&&(tt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Dt.dispose(),bt.dispose(),Et.dispose(),E.dispose(),pt.dispose(),yt.dispose(),Rt.dispose(),Ft.dispose(),Mt.dispose(),Wt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",fr),Ct.removeEventListener("sessionend",Ro),qi.stop()};function ae(C){C.preventDefault(),Px("WebGLRenderer: Context Lost."),L=!0}function ze(){Px("WebGLRenderer: Context Restored."),L=!1;const C=O.autoReset,Y=zt.enabled,ot=zt.autoUpdate,tt=zt.needsUpdate,Z=zt.type;xt(),O.autoReset=C,zt.enabled=Y,zt.autoUpdate=ot,zt.needsUpdate=tt,zt.type=Z}function Ee(C){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vn(C){const Y=C.target;Y.removeEventListener("dispose",Vn),Li(Y)}function Li(C){ic(C),E.remove(C)}function ic(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(ot){Wt.releaseProgram(ot)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ot,tt,Z,Nt){Y===null&&(Y=Re);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=Rs(C,Y,ot,tt,Z);Kt.setMaterial(tt,Bt);let Gt=ot.index,qt=1;if(tt.wireframe===!0){if(Gt=Qt.getWireframeAttribute(ot),Gt===void 0)return;qt=2}const te=ot.drawRange,Yt=ot.attributes.position;let ee=te.start*qt,De=(te.start+te.count)*qt;Nt!==null&&(ee=Math.max(ee,Nt.start*qt),De=Math.min(De,(Nt.start+Nt.count)*qt)),Gt!==null?(ee=Math.max(ee,0),De=Math.min(De,Gt.count)):Yt!=null&&(ee=Math.max(ee,0),De=Math.min(De,Yt.count));const Je=De-ee;if(Je<0||Je===1/0)return;Ft.setup(Z,tt,Pt,ot,Gt);let qe,Pe=W;if(Gt!==null&&(qe=ct.get(Gt),Pe=Ut,Pe.setIndex(qe)),Z.isMesh)tt.wireframe===!0?(Kt.setLineWidth(tt.wireframeLinewidth*nn()),Pe.setMode(k.LINES)):Pe.setMode(k.TRIANGLES);else if(Z.isLine){let Jt=tt.linewidth;Jt===void 0&&(Jt=1),Kt.setLineWidth(Jt*nn()),Z.isLineSegments?Pe.setMode(k.LINES):Z.isLineLoop?Pe.setMode(k.LINE_LOOP):Pe.setMode(k.LINE_STRIP)}else Z.isPoints?Pe.setMode(k.POINTS):Z.isSprite&&Pe.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,Le=Z._multiDrawCounts,se=Z._multiDrawCount,Cn=Gt?ct.get(Gt).bytesPerElement:1,fa=E.get(tt).currentProgram.getUniforms();for(let Rn=0;Rn<se;Rn++)fa.setValue(k,"_gl_DrawID",Rn),Pe.render(Jt[Rn]/Cn,Le[Rn])}else if(Z.isInstancedMesh)Pe.renderInstances(ee,Je,Z.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Le=Math.min(ot.instanceCount,Jt);Pe.renderInstances(ee,Je,Le)}else Pe.render(ee,Je)};function wo(C,Y,ot){C.transparent===!0&&C.side===Pa&&C.forceSinglePass===!1?(C.side=ai,C.needsUpdate=!0,hr(C,Y,ot),C.side=Ts,C.needsUpdate=!0,hr(C,Y,ot),C.side=Pa):hr(C,Y,ot)}this.compile=function(C,Y,ot=null){ot===null&&(ot=C),P=Et.get(ot),P.init(Y),z.push(P),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),C!==ot&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),P.setupLights();const tt=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Nt=Z.material;if(Nt)if(Array.isArray(Nt))for(let Bt=0;Bt<Nt.length;Bt++){const Pt=Nt[Bt];wo(Pt,ot,Z),tt.add(Pt)}else wo(Nt,ot,Z),tt.add(Nt)}),P=z.pop(),tt},this.compileAsync=function(C,Y,ot=null){const tt=this.compile(C,Y,ot);return new Promise(Z=>{function Nt(){if(tt.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&tt.delete(Bt)}),tt.size===0){Z(C);return}setTimeout(Nt,10)}be.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ur=null;function Co(C){ur&&ur(C)}function fr(){qi.stop()}function Ro(){qi.start()}const qi=new M2;qi.setAnimationLoop(Co),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(C){ur=C,Ct.setAnimationLoop(C),C===null?qi.stop():qi.start()},Ct.addEventListener("sessionstart",fr),Ct.addEventListener("sessionend",Ro),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ot=Ct.enabled===!0&&Ct.isPresenting===!0,tt=G!==null&&(st===null||ot)&&G.begin(A,st);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,st),P=Et.get(C,z.length),P.init(Y),z.push(P),en.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xt.setFromProjectionMatrix(en,na,Y.reversedDepth),pe=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,pe),U=bt.get(C,I.length),U.init(),I.push(U),Ct.enabled===!0&&Ct.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&mi(Bt,Y,-1/0,A.sortObjects)}mi(C,Y,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(wt,Vt),le=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,le&&Dt.addToRenderList(U,C),this.info.render.frame++,Ht===!0&&It.beginShadows();const Z=P.state.shadowsArray;if(zt.render(Z,C,Y),Ht===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&G.hasRenderPass())===!1){const Bt=U.opaque,Pt=U.transmissive;if(P.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Pt.length>0)for(let qt=0,te=Gt.length;qt<te;qt++){const Yt=Gt[qt];wn(Bt,Pt,C,Yt)}le&&Dt.render(C);for(let qt=0,te=Gt.length;qt<te;qt++){const Yt=Gt[qt];fn(U,C,Yt,Yt.viewport)}}else Pt.length>0&&wn(Bt,Pt,C,Y),le&&Dt.render(C),fn(U,C,Y)}st!==null&&it===0&&(q.updateMultisampleRenderTarget(st),q.updateRenderTargetMipmap(st)),tt&&G.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),Ft.resetDefaultState(),ht=-1,ut=null,z.pop(),z.length>0?(P=z[z.length-1],Ht===!0&&It.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function mi(C,Y,ot,tt){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xt.intersectsSprite(C)){tt&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(en);const Bt=Rt.update(C),Pt=C.material;Pt.visible&&U.push(C,Bt,Pt,ot,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xt.intersectsObject(C))){const Bt=Rt.update(C),Pt=C.material;if(tt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),me.copy(Bt.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(en)),Array.isArray(Pt)){const Gt=Bt.groups;for(let qt=0,te=Gt.length;qt<te;qt++){const Yt=Gt[qt],ee=Pt[Yt.materialIndex];ee&&ee.visible&&U.push(C,Bt,ee,ot,me.z,Yt)}}else Pt.visible&&U.push(C,Bt,Pt,ot,me.z,null)}}const Nt=C.children;for(let Bt=0,Pt=Nt.length;Bt<Pt;Bt++)mi(Nt[Bt],Y,ot,tt)}function fn(C,Y,ot,tt){const{opaque:Z,transmissive:Nt,transparent:Bt}=C;P.setupLightsView(ot),Ht===!0&&It.setGlobalState(A.clippingPlanes,ot),tt&&Kt.viewport(B.copy(tt)),Z.length>0&&Ni(Z,Y,ot),Nt.length>0&&Ni(Nt,Y,ot),Bt.length>0&&Ni(Bt,Y,ot),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function wn(C,Y,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[tt.id]===void 0){const ee=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[tt.id]=new aa(1,1,{generateMipmaps:!0,type:ee?Ba:Ci,minFilter:ar,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Nt=P.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||B;Nt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Pt=A.getRenderTarget(),Gt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Nt),A.getClearColor(St),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),le&&Dt.render(ot);const te=A.toneMapping;A.toneMapping=ia;const Yt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),P.setupLightsView(tt),Ht===!0&&It.setGlobalState(A.clippingPlanes,tt),Ni(C,ot,tt),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),be.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let De=0,Je=Y.length;De<Je;De++){const qe=Y[De],{object:Pe,geometry:Jt,material:Le,group:se}=qe;if(Le.side===Pa&&Pe.layers.test(tt.layers)){const Cn=Le.side;Le.side=ai,Le.needsUpdate=!0,dr(Pe,ot,tt,Jt,Le,se),Le.side=Cn,Le.needsUpdate=!0,ee=!0}}ee===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}A.setRenderTarget(Pt,Gt,qt),A.setClearColor(St,_t),Yt!==void 0&&(tt.viewport=Yt),A.toneMapping=te}function Ni(C,Y,ot){const tt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Nt=C.length;Z<Nt;Z++){const Bt=C[Z],{object:Pt,geometry:Gt,group:qt}=Bt;let te=Bt.material;te.allowOverride===!0&&tt!==null&&(te=tt),Pt.layers.test(ot.layers)&&dr(Pt,Y,ot,Gt,te,qt)}}function dr(C,Y,ot,tt,Z,Nt){C.onBeforeRender(A,Y,ot,tt,Z,Nt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(A,Y,ot,tt,C,Nt),Z.transparent===!0&&Z.side===Pa&&Z.forceSinglePass===!1?(Z.side=ai,Z.needsUpdate=!0,A.renderBufferDirect(ot,Y,tt,Z,C,Nt),Z.side=Ts,Z.needsUpdate=!0,A.renderBufferDirect(ot,Y,tt,Z,C,Nt),Z.side=Pa):A.renderBufferDirect(ot,Y,tt,Z,C,Nt),C.onAfterRender(A,Y,ot,tt,Z,Nt)}function hr(C,Y,ot){Y.isScene!==!0&&(Y=Re);const tt=E.get(C),Z=P.state.lights,Nt=P.state.shadowsArray,Bt=Z.state.version,Pt=Wt.getParameters(C,Z.state,Nt,Y,ot),Gt=Wt.getProgramCacheKey(Pt);let qt=tt.programs;tt.environment=C.isMeshStandardMaterial?Y.environment:null,tt.fog=Y.fog,tt.envMap=(C.isMeshStandardMaterial?yt:pt).get(C.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",Vn),qt=new Map,tt.programs=qt);let te=qt.get(Gt);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===Bt)return Do(C,Pt),te}else Pt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(Pt,A),te=Wt.acquireProgram(Pt,Gt),qt.set(Gt,te),tt.uniforms=Pt.uniforms;const Yt=tt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=It.uniform),Do(C,Pt),tt.needsLights=ka(C),tt.lightsStateVersion=Bt,tt.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=te,tt.uniformsList=null,te}function ac(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=qu.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Do(C,Y){const ot=E.get(C);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function Rs(C,Y,ot,tt,Z){Y.isScene!==!0&&(Y=Re),q.resetTextureUnits();const Nt=Y.fog,Bt=tt.isMeshStandardMaterial?Y.environment:null,Pt=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_o,Gt=(tt.isMeshStandardMaterial?yt:pt).get(tt.envMap||Bt),qt=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Yt=!!ot.morphAttributes.position,ee=!!ot.morphAttributes.normal,De=!!ot.morphAttributes.color;let Je=ia;tt.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Je=A.toneMapping);const qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Pe=qe!==void 0?qe.length:0,Jt=E.get(tt),Le=P.state.lights;if(Ht===!0&&(pe===!0||C!==ut)){const Ln=C===ut&&tt.id===ht;It.setState(tt,C,Ln)}let se=!1;tt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Le.state.version||Jt.outputColorSpace!==Pt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Gt||tt.fog===!0&&Jt.fog!==Nt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==It.numPlanes||Jt.numIntersection!==It.numIntersection)||Jt.vertexAlphas!==qt||Jt.vertexTangents!==te||Jt.morphTargets!==Yt||Jt.morphNormals!==ee||Jt.morphColors!==De||Jt.toneMapping!==Je||Jt.morphTargetsCount!==Pe)&&(se=!0):(se=!0,Jt.__version=tt.version);let Cn=Jt.currentProgram;se===!0&&(Cn=hr(tt,Y,Z));let fa=!1,Rn=!1,gi=!1;const Fe=Cn.getUniforms(),Dn=Jt.uniforms;if(Kt.useProgram(Cn.program)&&(fa=!0,Rn=!0,gi=!0),tt.id!==ht&&(ht=tt.id,Rn=!0),fa||ut!==C){Kt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",C.projectionMatrix),Fe.setValue(k,"viewMatrix",C.matrixWorldInverse);const Nn=Fe.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,xe.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ut!==C&&(ut=C,Rn=!0,gi=!0)}if(Jt.needsLights&&(Le.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",Le.state.directionalShadowMap,q),Le.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",Le.state.spotShadowMap,q),Le.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",Le.state.pointShadowMap,q)),Z.isSkinnedMesh){Fe.setOptional(k,Z,"bindMatrix"),Fe.setOptional(k,Z,"bindMatrixInverse");const Ln=Z.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Fe.setValue(k,"boneTexture",Ln.boneTexture,q))}Z.isBatchedMesh&&(Fe.setOptional(k,Z,"batchingTexture"),Fe.setValue(k,"batchingTexture",Z._matricesTexture,q),Fe.setOptional(k,Z,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",Z._indirectTexture,q),Fe.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",Z._colorsTexture,q));const xn=ot.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ue.update(Z,ot,Cn),(Rn||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Fe.setValue(k,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Dn.envMap.value=Gt,Dn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Y.environment!==null&&(Dn.envMapIntensity.value=Y.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=K5()),Rn&&(Fe.setValue(k,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&Lo(Dn,gi),Nt&&tt.fog===!0&&ie.refreshFogUniforms(Dn,Nt),ie.refreshMaterialUniforms(Dn,tt,vt,at,P.state.transmissionRenderTarget[C.id]),qu.upload(k,ac(Jt),Dn,q)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(qu.upload(k,ac(Jt),Dn,q),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Fe.setValue(k,"center",Z.center),Fe.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(k,"normalMatrix",Z.normalMatrix),Fe.setValue(k,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ln=tt.uniformsGroups;for(let Nn=0,pr=Ln.length;Nn<pr;Nn++){const Ui=Ln[Nn];Mt.update(Ui,Cn),Mt.bind(Ui,Cn)}}return Cn}function Lo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ka(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(C,Y,ot){const tt=E.get(C);tt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ot=E.get(C);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const ja=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,ot=0){st=C,j=Y,it=ot;let tt=null,Z=!1,Nt=!1;if(C){const Pt=E.get(C);if(Pt.__useDefaultFramebuffer!==void 0){Kt.bindFramebuffer(k.FRAMEBUFFER,Pt.__webglFramebuffer),B.copy(C.viewport),V.copy(C.scissor),Q=C.scissorTest,Kt.viewport(B),Kt.scissor(V),Kt.setScissorTest(Q),ht=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Pt.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const te=C.depthTexture;if(Pt.__boundDepthTexture!==te){if(te!==null&&E.has(te)&&(C.width!==te.image.width||C.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Nt=!0);const qt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[Y])?tt=qt[Y][ot]:tt=qt[Y],Z=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?tt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[ot]:tt=qt,B.copy(C.viewport),V.copy(C.scissor),Q=C.scissorTest}else B.copy(nt).multiplyScalar(vt).floor(),V.copy(ft).multiplyScalar(vt).floor(),Q=Lt;if(ot!==0&&(tt=ja),Kt.bindFramebuffer(k.FRAMEBUFFER,tt)&&Kt.drawBuffers(C,tt),Kt.viewport(B),Kt.scissor(V),Kt.setScissorTest(Q),Z){const Pt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,ot)}else if(Nt){const Pt=Y;for(let Gt=0;Gt<C.textures.length;Gt++){const qt=E.get(C.textures[Gt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,ot,Pt)}}else if(C!==null&&ot!==0){const Pt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,ot)}ht=-1},this.readRenderTargetPixels=function(C,Y,ot,tt,Z,Nt,Bt,Pt=0){if(!(C&&C.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Kt.bindFramebuffer(k.FRAMEBUFFER,Gt);try{const qt=C.textures[Pt],te=qt.format,Yt=qt.type;if(!Ue.textureFormatReadable(te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Yt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-tt&&ot>=0&&ot<=C.height-Z&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),k.readPixels(Y,ot,tt,Z,Tt.convert(te),Tt.convert(Yt),Nt))}finally{const qt=st!==null?E.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(k.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ot,tt,Z,Nt,Bt,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(Y>=0&&Y<=C.width-tt&&ot>=0&&ot<=C.height-Z){Kt.bindFramebuffer(k.FRAMEBUFFER,Gt);const qt=C.textures[Pt],te=qt.format,Yt=qt.type;if(!Ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ee),k.bufferData(k.PIXEL_PACK_BUFFER,Nt.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),k.readPixels(Y,ot,tt,Z,Tt.convert(te),Tt.convert(Yt),0);const De=st!==null?E.get(st).__webglFramebuffer:null;Kt.bindFramebuffer(k.FRAMEBUFFER,De);const Je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xE(k,Je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ee),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Nt),k.deleteBuffer(ee),k.deleteSync(Je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ot=0){const tt=Math.pow(2,-ot),Z=Math.floor(C.image.width*tt),Nt=Math.floor(C.image.height*tt),Bt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;q.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,Bt,Pt,Z,Nt),Kt.unbindTexture()};const Ds=k.createFramebuffer(),Xa=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,ot=null,tt=null,Z=0,Nt=null){Nt===null&&(Z!==0?(Il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Z,Z=0):Nt=0);let Bt,Pt,Gt,qt,te,Yt,ee,De,Je;const qe=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(ot!==null)Bt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Gt=ot.isBox3?ot.max.z-ot.min.z:1,qt=ot.min.x,te=ot.min.y,Yt=ot.isBox3?ot.min.z:0;else{const xn=Math.pow(2,-Z);Bt=Math.floor(qe.width*xn),Pt=Math.floor(qe.height*xn),C.isDataArrayTexture?Gt=qe.depth:C.isData3DTexture?Gt=Math.floor(qe.depth*xn):Gt=1,qt=0,te=0,Yt=0}tt!==null?(ee=tt.x,De=tt.y,Je=tt.z):(ee=0,De=0,Je=0);const Pe=Tt.convert(Y.format),Jt=Tt.convert(Y.type);let Le;Y.isData3DTexture?(q.setTexture3D(Y,0),Le=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Le=k.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=k.getParameter(k.UNPACK_ROW_LENGTH),Cn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fa=k.getParameter(k.UNPACK_SKIP_PIXELS),Rn=k.getParameter(k.UNPACK_SKIP_ROWS),gi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,te),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yt);const Fe=C.isDataArrayTexture||C.isData3DTexture,Dn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const xn=E.get(C),Ln=E.get(Y),Nn=E.get(xn.__renderTarget),pr=E.get(Ln.__renderTarget);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let Ui=0;Ui<Gt;Ui++)Fe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,Z,Yt+Ui),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Nt,Je+Ui)),k.blitFramebuffer(qt,te,Bt,Pt,ee,De,Bt,Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||E.has(C)){const xn=E.get(C),Ln=E.get(Y);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,Ds),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xa);for(let Nn=0;Nn<Gt;Nn++)Fe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,Z,Yt+Nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,Z),Dn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ln.__webglTexture,Nt,Je+Nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ln.__webglTexture,Nt),Z!==0?k.blitFramebuffer(qt,te,Bt,Pt,ee,De,Bt,Pt,k.COLOR_BUFFER_BIT,k.NEAREST):Dn?k.copyTexSubImage3D(Le,Nt,ee,De,Je+Nn,qt,te,Bt,Pt):k.copyTexSubImage2D(Le,Nt,ee,De,qt,te,Bt,Pt);Kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Le,Nt,ee,De,Je,Bt,Pt,Gt,Pe,Jt,qe.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,Nt,ee,De,Je,Bt,Pt,Gt,Pe,qe.data):k.texSubImage3D(Le,Nt,ee,De,Je,Bt,Pt,Gt,Pe,Jt,qe):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Nt,ee,De,Bt,Pt,Pe,Jt,qe.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Nt,ee,De,qe.width,qe.height,Pe,qe.data):k.texSubImage2D(k.TEXTURE_2D,Nt,ee,De,Bt,Pt,Pe,Jt,qe);k.pixelStorei(k.UNPACK_ROW_LENGTH,se),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Cn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fa),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gi),Nt===0&&Y.generateMipmaps&&k.generateMipmap(Le),Kt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Kt.unbindTexture()},this.resetState=function(){j=0,it=0,st=null,Kt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}const Q5=()=>{const i=At.useRef(null);return At.useEffect(()=>{const t=i.current;if(!t)return;const n=new kE,s=new wi(75,window.innerWidth/window.innerHeight,1,1e3);s.position.z=100;const o=new Z5({alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setSize(window.innerWidth,window.innerHeight);const c=window.innerWidth<768;o.setPixelRatio(Math.min(window.devicePixelRatio,c?1:2)),t.appendChild(o.domElement);const u={uTime:{value:0},uResolution:{value:new Oe(window.innerWidth,window.innerHeight)},uMouse:{value:new Oe(0,0)}},f=new Xi({uniforms:u,vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime;
                uniform vec2 uResolution;
                uniform vec2 uMouse;
                varying vec2 vUv;

                // Simplex Noise (Standard)
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ;
                    m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy/uResolution.xy;
                    
                    float n = snoise(st * 2.0 + uTime * 0.05); // Slower, smoother
                    float n2 = snoise(st * 1.5 - uTime * 0.1);
                    
                    // Deep Royal Blue / Purple / Cyan Palette
                    // Matrix Green Palette
                    vec3 colorA = vec3(0.0, 0.02, 0.0);   // Almost Back
                    vec3 colorB = vec3(0.0, 0.15, 0.05);  // Deep Matrix Green
                    vec3 colorC = vec3(0.0, 0.8, 0.2);    // Neon Green Highlight
                    
                    vec3 color = mix(colorA, colorB, n + 0.5);
                    color = mix(color, colorC, n2 * 0.5 + 0.2); 
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `,depthWrite:!1}),p=new ca(new Zl(2e3,2e3),f);p.position.z=-50,n.add(p);const h=new Wi,g=250,v=[],x=[];for(let z=0;z<g;z++)v.push((Math.random()-.5)*300),v.push((Math.random()-.5)*200),v.push((Math.random()-.5)*100),x.push(Math.random()*2);h.setAttribute("position",new ji(v,3)),h.setAttribute("size",new ji(x,1));const y=new _2({color:16777215,size:1.5,transparent:!0,opacity:.6,blending:wp}),b=new YE(h,y);n.add(b);const T={x:0,y:0,isOnScreen:!1},M=z=>{const G=z.clientX/window.innerWidth,A=1-z.clientY/window.innerHeight;u.uMouse.value.set(G,A),T.x=G,T.y=A,T.isOnScreen=!0,b.targetRotationX=(A-.5)*.2,b.targetRotationY=(G-.5)*.2},_=()=>{T.isOnScreen=!0},N=()=>{T.isOnScreen=!1};document.body.addEventListener("mousemove",M),document.body.addEventListener("mouseenter",_),document.body.addEventListener("mouseleave",N);let D;const U=new tT;b.targetRotationX=0,b.targetRotationY=0;const P=()=>{D=requestAnimationFrame(P);const z=U.getElapsedTime();if(u.uTime.value=z,T.isOnScreen)b.rotation.x+=(b.targetRotationX-b.rotation.x)*.05,b.rotation.y+=(b.targetRotationY-b.rotation.y)*.05,b.position.y+=(Math.sin(z*1)*5-b.position.y)*.05;else{b.rotation.x+=(0-b.rotation.x)*.05,b.rotation.y+=(0-b.rotation.y)*.05,b.position.y+=(0-b.position.y)*.05;const G=b.geometry.attributes.position.array,A=.2;for(let L=1;L<G.length;L+=3)G[L]+=A,G[L]>100&&(G[L]=-100);b.geometry.attributes.position.needsUpdate=!0}b.rotation.y+=.002,o.render(n,s)};P();const I=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),u.uResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",I),()=>{document.body.removeEventListener("mousemove",M),document.body.removeEventListener("mouseenter",_),document.body.removeEventListener("mouseleave",N),window.removeEventListener("resize",I),cancelAnimationFrame(D),t.contains(o.domElement)&&t.removeChild(o.domElement),f.dispose(),o.dispose()}},[]),R.jsx("div",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"#000000"}})};const w2=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();const J5=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const $5=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());const b_=i=>{const t=$5(i);return t.charAt(0).toUpperCase()+t.slice(1)};var tC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const eC=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const nC=At.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...f},p)=>At.createElement("svg",{ref:p,...tC,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:w2("lucide",o),...!c&&!eC(f)&&{"aria-hidden":"true"},...f},[...u.map(([h,g])=>At.createElement(h,g)),...Array.isArray(c)?c:[c]]));const En=(i,t)=>{const n=At.forwardRef(({className:s,...o},c)=>At.createElement(nC,{ref:c,iconNode:t,className:w2(`lucide-${J5(b_(i))}`,`lucide-${i}`,s),...o}));return n.displayName=b_(i),n};const iC=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],aC=En("arrow-down",iC);const sC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],rC=En("arrow-left",sC);const oC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],C2=En("arrow-right",oC);const lC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cC=En("cpu",lC);const uC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],fC=En("database",uC);const dC=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],hC=En("download",dC);const pC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],bm=En("external-link",pC);const mC=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],gC=En("file-text",mC);const vC=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],a0=En("github",vC);const xC=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_C=En("layers",xC);const yC=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],SC=En("linkedin",yC);const MC=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],bC=En("loader",MC);const EC=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],TC=En("mail",EC);const AC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wC=En("map-pin",AC);const CC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],R2=En("maximize-2",CC);const RC=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],DC=En("menu",RC);const LC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],NC=En("panels-top-left",LC);const UC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],PC=En("send",UC);const OC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ql=En("x",OC),zC=({view:i,setView:t,onOpenResume:n})=>{const[s,o]=At.useState(!1),c=[{name:"HOME",href:"#home"},{name:"SKILLS",href:"#skills"},{name:"PROJECTS",href:"#projects"},{name:"CERTIFICATIONS",href:"#certifications"},{name:"ABOUT",href:"#about"},{name:"CONTACT",href:"#contact"},{name:"RESUME",href:"#resume",action:!0}],u=(f,p)=>{if(f.preventDefault(),o(!1),p.action&&n){n();return}if(i!=="home"&&t)t("home"),setTimeout(()=>{const h=document.querySelector(p.href);h&&h.scrollIntoView({behavior:"smooth"})},100);else{const h=document.querySelector(p.href);h&&h.scrollIntoView({behavior:"smooth"})}};return R.jsxs("nav",{className:"navbar",children:[R.jsxs("div",{className:"container nav-container",children:[R.jsx("div",{className:"logo",children:"PORTFOLIO"}),R.jsx("div",{className:"mobile-toggle",onClick:()=>o(!s),children:s?R.jsx(Ql,{size:24,color:"white"}):R.jsx(DC,{size:24,color:"white"})}),R.jsx("ul",{className:`nav-links ${s?"active":""}`,children:c.map(f=>R.jsx("li",{children:R.jsx("a",{href:f.href,className:"nav-item",onClick:p=>u(p,f),children:f.name})},f.name))})]}),R.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(0, 0, 0, 0.9);
          border-bottom: 1px solid var(--color-border);
          z-index: 1000;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        .logo {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.125rem;
          color: var(--color-text);
          letter-spacing: 0.05em;
        }
        .mobile-toggle {
            display: none;
            cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-item {
          font-family: var(--font-sans);
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .nav-item:hover {
          color: var(--color-text);
        }
        
        @media (max-width: 768px) {
          .mobile-toggle { 
            display: block; 
            z-index: 1001; /* Above everything */
          }
          .nav-links {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--header-height)); /* Full height */
            flex-direction: column;
            background: rgba(0, 0, 0, 0.95); /* Solid bg */
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            gap: 1.5rem; /* Tighter gap */
            transform: translateX(100%); /* Slide from right instead of top */
            transition: transform 0.3s ease;
            z-index: 999;
            align-items: center; /* Center items */
            justify-content: flex-start; /* Start from top */
            padding-top: 4rem; /* Give some space */
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .nav-item {
            font-size: 1rem; /* Smaller text on mobile */
          }
        }
      `})]})},FC=()=>R.jsx("footer",{className:"py-8 border-t border-gray-800 mt-20",children:R.jsx("div",{className:"container text-center",children:R.jsxs("p",{className:"text-gray-500 text-sm",children:["© ",new Date().getFullYear()," Rohan R. Built with React & Three.js."]})})}),IC=({children:i,view:t,setView:n,onOpenResume:s})=>R.jsxs("div",{className:"layout",children:[R.jsx(Q5,{}),R.jsx(zC,{view:t,setView:n,onOpenResume:s}),R.jsx("main",{children:i}),R.jsx(FC,{})]}),s0=At.createContext({});function r0(i){const t=At.useRef(null);return t.current===null&&(t.current=i()),t.current}const D2=typeof window<"u",L2=D2?At.useLayoutEffect:At.useEffect,xf=At.createContext(null);function o0(i,t){i.indexOf(t)===-1&&i.push(t)}function l0(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const ua=(i,t,n)=>n>t?t:n<i?i:n;let c0=()=>{};const Ga={},N2=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function U2(i){return typeof i=="object"&&i!==null}const P2=i=>/^0[^.\s]+$/u.test(i);function u0(i){let t;return()=>(t===void 0&&(t=i()),t)}const Di=i=>i,BC=(i,t)=>n=>t(i(n)),Jl=(...i)=>i.reduce(BC),Vl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class f0{constructor(){this.subscriptions=[]}add(t){return o0(this.subscriptions,t),()=>l0(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ra=i=>i*1e3,Ri=i=>i/1e3;function O2(i,t){return t?i*(1e3/t):0}const z2=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,VC=1e-7,HC=12;function GC(i,t,n,s,o){let c,u,f=0;do u=t+(n-t)/2,c=z2(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>VC&&++f<HC);return u}function $l(i,t,n,s){if(i===t&&n===s)return Di;const o=c=>GC(c,0,1,i,n);return c=>c===0||c===1?c:z2(o(c),t,s)}const F2=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,I2=i=>t=>1-i(1-t),B2=$l(.33,1.53,.69,.99),d0=I2(B2),V2=F2(d0),H2=i=>(i*=2)<1?.5*d0(i):.5*(2-Math.pow(2,-10*(i-1))),h0=i=>1-Math.sin(Math.acos(i)),G2=I2(h0),k2=F2(h0),kC=$l(.42,0,1,1),jC=$l(0,0,.58,1),j2=$l(.42,0,.58,1),XC=i=>Array.isArray(i)&&typeof i[0]!="number",X2=i=>Array.isArray(i)&&typeof i[0]=="number",WC={linear:Di,easeIn:kC,easeInOut:j2,easeOut:jC,circIn:h0,circInOut:k2,circOut:G2,backIn:d0,backInOut:V2,backOut:B2,anticipate:H2},qC=i=>typeof i=="string",E_=i=>{if(X2(i)){c0(i.length===4);const[t,n,s,o]=i;return $l(t,n,s,o)}else if(qC(i))return WC[i];return i},Fu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YC(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(h.schedule(g),i()),g(f)}const h={schedule:(g,v=!1,x=!1)=>{const b=x&&o?n:s;return v&&u.add(g),b.has(g)||b.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(f=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(p),n.clear(),o=!1,c&&(c=!1,h.process(g))}};return h}const KC=40;function W2(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=Fu.reduce((D,U)=>(D[U]=YC(c),D),{}),{setup:f,read:p,resolveKeyframes:h,preUpdate:g,update:v,preRender:x,render:y,postRender:b}=u,T=()=>{const D=Ga.useManualTiming?o.timestamp:performance.now();n=!1,Ga.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(D-o.timestamp,KC),1)),o.timestamp=D,o.isProcessing=!0,f.process(o),p.process(o),h.process(o),g.process(o),v.process(o),x.process(o),y.process(o),b.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(T))},M=()=>{n=!0,s=!0,o.isProcessing||i(T)};return{schedule:Fu.reduce((D,U)=>{const P=u[U];return D[U]=(I,z=!1,G=!1)=>(n||M(),P.schedule(I,z,G)),D},{}),cancel:D=>{for(let U=0;U<Fu.length;U++)u[Fu[U]].cancel(D)},state:o,steps:u}}const{schedule:Ye,cancel:As,state:Fn,steps:cp}=W2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Di,!0);let Yu;function ZC(){Yu=void 0}const Yn={now:()=>(Yu===void 0&&Yn.set(Fn.isProcessing||Ga.useManualTiming?Fn.timestamp:performance.now()),Yu),set:i=>{Yu=i,queueMicrotask(ZC)}},q2=i=>t=>typeof t=="string"&&t.startsWith(i),Y2=q2("--"),QC=q2("var(--"),p0=i=>QC(i)?JC.test(i.split("/*")[0].trim()):!1,JC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function T_(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Eo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Hl={...Eo,transform:i=>ua(0,1,i)},Iu={...Eo,default:1},Nl=i=>Math.round(i*1e5)/1e5,m0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $C(i){return i==null}const tR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,g0=(i,t)=>n=>!!(typeof n=="string"&&tR.test(n)&&n.startsWith(i)||t&&!$C(n)&&Object.prototype.hasOwnProperty.call(n,t)),K2=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,f]=s.match(m0);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},eR=i=>ua(0,255,i),up={...Eo,transform:i=>Math.round(eR(i))},rr={test:g0("rgb","red"),parse:K2("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+up.transform(i)+", "+up.transform(t)+", "+up.transform(n)+", "+Nl(Hl.transform(s))+")"};function nR(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Em={test:g0("#"),parse:nR,transform:rr.transform},tc=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Ss=tc("deg"),oa=tc("%"),jt=tc("px"),iR=tc("vh"),aR=tc("vw"),A_={...oa,parse:i=>oa.parse(i)/100,transform:i=>oa.transform(i*100)},oo={test:g0("hsl","hue"),parse:K2("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+oa.transform(Nl(t))+", "+oa.transform(Nl(n))+", "+Nl(Hl.transform(s))+")"},vn={test:i=>rr.test(i)||Em.test(i)||oo.test(i),parse:i=>rr.test(i)?rr.parse(i):oo.test(i)?oo.parse(i):Em.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?rr.transform(i):oo.transform(i),getAnimatableNone:i=>{const t=vn.parse(i);return t.alpha=0,vn.transform(t)}},sR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function rR(i){return isNaN(i)&&typeof i=="string"&&(i.match(m0)?.length||0)+(i.match(sR)?.length||0)>0}const Z2="number",Q2="color",oR="var",lR="var(",w_="${}",cR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Gl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const f=t.replace(cR,p=>(vn.test(p)?(s.color.push(c),o.push(Q2),n.push(vn.parse(p))):p.startsWith(lR)?(s.var.push(c),o.push(oR),n.push(p)):(s.number.push(c),o.push(Z2),n.push(parseFloat(p))),++c,w_)).split(w_);return{values:n,split:f,indexes:s,types:o}}function J2(i){return Gl(i).values}function $2(i){const{split:t,types:n}=Gl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const f=n[u];f===Z2?c+=Nl(o[u]):f===Q2?c+=vn.transform(o[u]):c+=o[u]}return c}}const uR=i=>typeof i=="number"?0:vn.test(i)?vn.getAnimatableNone(i):i;function fR(i){const t=J2(i);return $2(i)(t.map(uR))}const ws={test:rR,parse:J2,createTransformer:$2,getAnimatableNone:fR};function fp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function dR({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;o=fp(p,f,i+1/3),c=fp(p,f,i),u=fp(p,f,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function sf(i,t){return n=>n>0?t:i}const tn=(i,t,n)=>i+(t-i)*n,dp=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},hR=[Em,rr,oo],pR=i=>hR.find(t=>t.test(i));function C_(i){const t=pR(i);if(!t)return!1;let n=t.parse(i);return t===oo&&(n=dR(n)),n}const R_=(i,t)=>{const n=C_(i),s=C_(t);if(!n||!s)return sf(i,t);const o={...n};return c=>(o.red=dp(n.red,s.red,c),o.green=dp(n.green,s.green,c),o.blue=dp(n.blue,s.blue,c),o.alpha=tn(n.alpha,s.alpha,c),rr.transform(o))},Tm=new Set(["none","hidden"]);function mR(i,t){return Tm.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function gR(i,t){return n=>tn(i,t,n)}function v0(i){return typeof i=="number"?gR:typeof i=="string"?p0(i)?sf:vn.test(i)?R_:_R:Array.isArray(i)?tS:typeof i=="object"?vn.test(i)?R_:vR:sf}function tS(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>v0(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function vR(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=v0(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function xR(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],f=i.values[u]??0;n[o]=f,s[c]++}return n}const _R=(i,t)=>{const n=ws.createTransformer(t),s=Gl(i),o=Gl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Tm.has(i)&&!o.values.length||Tm.has(t)&&!s.values.length?mR(i,t):Jl(tS(xR(s,o),o.values),n):sf(i,t)};function eS(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?tn(i,t,n):v0(i)(i,t)}const yR=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Ye.update(t,n),stop:()=>As(t),now:()=>Fn.isProcessing?Fn.timestamp:Yn.now()}},nS=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},rf=2e4;function x0(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<rf;)t+=n,s=i.next(t);return t>=rf?1/0:t}function SR(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(x0(s),rf);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ri(o)}}const MR=5;function iS(i,t,n){const s=Math.max(t-MR,0);return O2(n-i(s),t-s)}const rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hp=.001;function bR({duration:i=rn.duration,bounce:t=rn.bounce,velocity:n=rn.velocity,mass:s=rn.mass}){let o,c,u=1-t;u=ua(rn.minDamping,rn.maxDamping,u),i=ua(rn.minDuration,rn.maxDuration,Ri(i)),u<1?(o=h=>{const g=h*u,v=g*i,x=g-n,y=Am(h,u),b=Math.exp(-v);return hp-x/y*b},c=h=>{const v=h*u*i,x=v*n+n,y=Math.pow(u,2)*Math.pow(h,2)*i,b=Math.exp(-v),T=Am(Math.pow(h,2),u);return(-o(h)+hp>0?-1:1)*((x-y)*b)/T}):(o=h=>{const g=Math.exp(-h*i),v=(h-n)*i+1;return-hp+g*v},c=h=>{const g=Math.exp(-h*i),v=(n-h)*(i*i);return g*v});const f=5/i,p=TR(o,c,f);if(i=ra(i),isNaN(p))return{stiffness:rn.stiffness,damping:rn.damping,duration:i};{const h=Math.pow(p,2)*s;return{stiffness:h,damping:u*2*Math.sqrt(s*h),duration:i}}}const ER=12;function TR(i,t,n){let s=n;for(let o=1;o<ER;o++)s=s-i(s)/t(s);return s}function Am(i,t){return i*Math.sqrt(1-t*t)}const AR=["duration","bounce"],wR=["stiffness","damping","mass"];function D_(i,t){return t.some(n=>i[n]!==void 0)}function CR(i){let t={velocity:rn.velocity,stiffness:rn.stiffness,damping:rn.damping,mass:rn.mass,isResolvedFromDuration:!1,...i};if(!D_(i,wR)&&D_(i,AR))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*ua(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:rn.mass,stiffness:o,damping:c}}else{const n=bR(i);t={...t,...n,mass:rn.mass},t.isResolvedFromDuration=!0}return t}function of(i=rn.visualDuration,t=rn.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:c},{stiffness:p,damping:h,mass:g,duration:v,velocity:x,isResolvedFromDuration:y}=CR({...n,velocity:-Ri(n.velocity||0)}),b=x||0,T=h/(2*Math.sqrt(p*g)),M=u-c,_=Ri(Math.sqrt(p/g)),N=Math.abs(M)<5;s||(s=N?rn.restSpeed.granular:rn.restSpeed.default),o||(o=N?rn.restDelta.granular:rn.restDelta.default);let D;if(T<1){const P=Am(_,T);D=I=>{const z=Math.exp(-T*_*I);return u-z*((b+T*_*M)/P*Math.sin(P*I)+M*Math.cos(P*I))}}else if(T===1)D=P=>u-Math.exp(-_*P)*(M+(b+_*M)*P);else{const P=_*Math.sqrt(T*T-1);D=I=>{const z=Math.exp(-T*_*I),G=Math.min(P*I,300);return u-z*((b+T*_*M)*Math.sinh(G)+P*M*Math.cosh(G))/P}}const U={calculatedDuration:y&&v||null,next:P=>{const I=D(P);if(y)f.done=P>=v;else{let z=P===0?b:0;T<1&&(z=P===0?ra(b):iS(D,P,I));const G=Math.abs(z)<=s,A=Math.abs(u-I)<=o;f.done=G&&A}return f.value=f.done?u:I,f},toString:()=>{const P=Math.min(x0(U),rf),I=nS(z=>U.next(P*z).value,P,30);return P+"ms "+I},toTransition:()=>{}};return U}of.applyToOptions=i=>{const t=SR(i,100,of);return i.ease=t.ease,i.duration=ra(t.duration),i.type="keyframes",i};function wm({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:p,restDelta:h=.5,restSpeed:g}){const v=i[0],x={done:!1,value:v},y=G=>f!==void 0&&G<f||p!==void 0&&G>p,b=G=>f===void 0?p:p===void 0||Math.abs(f-G)<Math.abs(p-G)?f:p;let T=n*t;const M=v+T,_=u===void 0?M:u(M);_!==M&&(T=_-v);const N=G=>-T*Math.exp(-G/s),D=G=>_+N(G),U=G=>{const A=N(G),L=D(G);x.done=Math.abs(A)<=h,x.value=x.done?_:L};let P,I;const z=G=>{y(x.value)&&(P=G,I=of({keyframes:[x.value,b(x.value)],velocity:iS(D,G,x.value),damping:o,stiffness:c,restDelta:h,restSpeed:g}))};return z(0),{calculatedDuration:null,next:G=>{let A=!1;return!I&&P===void 0&&(A=!0,U(G),z(G)),P!==void 0&&G>=P?I.next(G-P):(!A&&U(G),x)}}}function RR(i,t,n){const s=[],o=n||Ga.mix||eS,c=i.length-1;for(let u=0;u<c;u++){let f=o(i[u],i[u+1]);if(t){const p=Array.isArray(t)?t[u]||Di:t;f=Jl(p,f)}s.push(f)}return s}function DR(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(c0(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const f=RR(t,s,o),p=f.length,h=g=>{if(u&&g<i[0])return t[0];let v=0;if(p>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const x=Vl(i[v],i[v+1],g);return f[v](x)};return n?g=>h(ua(i[0],i[c-1],g)):h}function LR(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Vl(0,t,s);i.push(tn(n,1,o))}}function NR(i){const t=[0];return LR(t,i.length-1),t}function UR(i,t){return i.map(n=>n*t)}function PR(i,t){return i.map(()=>t||j2).splice(0,i.length-1)}function Ul({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=XC(s)?s.map(E_):E_(s),c={done:!1,value:t[0]},u=UR(n&&n.length===t.length?n:NR(t),i),f=DR(u,t,{ease:Array.isArray(o)?o:PR(t,o)});return{calculatedDuration:i,next:p=>(c.value=f(p),c.done=p>=i,c)}}const OR=i=>i!==null;function _0(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(OR),f=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!f||s===void 0?c[f]:s}const zR={decay:wm,inertia:wm,tween:Ul,keyframes:Ul,spring:of};function aS(i){typeof i.type=="string"&&(i.type=zR[i.type])}class y0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const FR=i=>i/100;class S0 extends y0{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Yn.now()&&this.tick(Yn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;aS(t);const{type:n=Ul,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:f}=t;const p=n||Ul;p!==Ul&&typeof f[0]!="number"&&(this.mixKeyframes=Jl(FR,eS(f[0],f[1])),f=[0,100]);const h=p({...t,keyframes:f});c==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=x0(h));const{calculatedDuration:g}=h;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=h}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:g,repeat:v,repeatType:x,repeatDelay:y,type:b,onUpdate:T,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const _=this.currentTime-h*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,U=s;if(v){const G=Math.min(this.currentTime,o)/f;let A=Math.floor(G),L=G%1;!L&&G>=1&&(L=1),L===1&&A--,A=Math.min(A,v+1),A%2&&(x==="reverse"?(L=1-L,y&&(L-=y/f)):x==="mirror"&&(U=u)),D=ua(0,1,L)*f}const P=N?{done:!1,value:g[0]}:U.next(D);c&&(P.value=c(P.value));let{done:I}=P;!N&&p!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return z&&b!==wm&&(P.value=_0(g,this.options,M,this.speed)),T&&T(P.value),z&&this.finish(),P}then(t,n){return this.finished.then(t,n)}get duration(){return Ri(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ri(t)}get time(){return Ri(this.currentTime)}set time(t){t=ra(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Yn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ri(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=yR,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Yn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function IR(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const or=i=>i*180/Math.PI,Cm=i=>{const t=or(Math.atan2(i[1],i[0]));return Rm(t)},BR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Cm,rotateZ:Cm,skewX:i=>or(Math.atan(i[1])),skewY:i=>or(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Rm=i=>(i=i%360,i<0&&(i+=360),i),L_=Cm,N_=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),U_=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),VR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:N_,scaleY:U_,scale:i=>(N_(i)+U_(i))/2,rotateX:i=>Rm(or(Math.atan2(i[6],i[5]))),rotateY:i=>Rm(or(Math.atan2(-i[2],i[0]))),rotateZ:L_,rotate:L_,skewX:i=>or(Math.atan(i[4])),skewY:i=>or(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Dm(i){return i.includes("scale")?1:0}function Lm(i,t){if(!i||i==="none")return Dm(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=VR,o=n;else{const f=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=BR,o=f}if(!o)return Dm(t);const c=s[t],u=o[1].split(",").map(GR);return typeof c=="function"?c(u):u[c]}const HR=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Lm(n,t)};function GR(i){return parseFloat(i.trim())}const To=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ao=new Set(To),P_=i=>i===Eo||i===jt,kR=new Set(["x","y","z"]),jR=To.filter(i=>!kR.has(i));function XR(i){const t=[];return jR.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Es={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Lm(t,"x"),y:(i,{transform:t})=>Lm(t,"y")};Es.translateX=Es.x;Es.translateY=Es.y;const lr=new Set;let Nm=!1,Um=!1,Pm=!1;function sS(){if(Um){const i=Array.from(lr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=XR(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{s.getValue(c)?.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Um=!1,Nm=!1,lr.forEach(i=>i.complete(Pm)),lr.clear()}function rS(){lr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Um=!0)})}function WR(){Pm=!0,rS(),sS(),Pm=!1}class M0{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(lr.add(this),Nm||(Nm=!0,Ye.read(rS),Ye.resolveKeyframes(sS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o?.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const f=s.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}IR(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),lr.delete(this)}cancel(){this.state==="scheduled"&&(lr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qR=i=>i.startsWith("--");function YR(i,t,n){qR(t)?i.style.setProperty(t,n):i.style[t]=n}const KR=u0(()=>window.ScrollTimeline!==void 0),ZR={};function QR(i,t){const n=u0(i);return()=>ZR[t]??n()}const oS=QR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ll=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,O_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ll([0,.65,.55,1]),circOut:Ll([.55,0,1,.45]),backIn:Ll([.31,.01,.66,-.59]),backOut:Ll([.33,1.53,.69,.99])};function lS(i,t){if(i)return typeof i=="function"?oS()?nS(i,t):"ease-out":X2(i)?Ll(i):Array.isArray(i)?i.map(n=>lS(n,t)||O_.easeOut):O_[i]}function JR(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:p}={},h=void 0){const g={[t]:n};p&&(g.offset=p);const v=lS(f,o);Array.isArray(v)&&(g.easing=v);const x={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),i.animate(g,x)}function cS(i){return typeof i=="function"&&"applyToOptions"in i}function $R({type:i,...t}){return cS(i)&&oS()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class tD extends y0{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,c0(typeof t.type!="string");const h=$R(t);this.animation=JR(n,s,o,h,c),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=_0(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):YR(n,s,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ri(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ri(t)}get time(){return Ri(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ra(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&KR()?(this.animation.timeline=t,Di):n(this)}}const uS={anticipate:H2,backInOut:V2,circInOut:k2};function eD(i){return i in uS}function nD(i){typeof i.ease=="string"&&eD(i.ease)&&(i.ease=uS[i.ease])}const pp=10;class iD extends tD{constructor(t){nD(t),aS(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new S0({...u,autoplay:!1}),p=Math.max(pp,Yn.now()-this.startTime),h=ua(0,pp,p-pp);n.setWithVelocity(f.sample(Math.max(0,p-h)).value,f.sample(p).value,h),f.stop()}}const z_=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(ws.test(i)||i==="0")&&!i.startsWith("url("));function aD(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function sD(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=z_(o,t),f=z_(c,t);return!u||!f?!1:aD(i)||(n==="spring"||cS(n))&&s}function Om(i){i.duration=0,i.type="keyframes"}const rD=new Set(["opacity","clipPath","filter","transform"]),oD=u0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lD(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=t.owner.getProps();return oD()&&n&&rD.has(n)&&(n!=="transform"||!h)&&!p&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const cD=40;class uD extends y0{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:p,motionValue:h,element:g,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Yn.now();const x={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:p,motionValue:h,element:g,...v},y=g?.KeyframeResolver||M0;this.keyframeResolver=new y(f,(b,T,M)=>this.onKeyframesResolved(b,T,x,!M),p,h,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:p,isHandoff:h,onUpdate:g}=s;this.resolvedAt=Yn.now(),sD(t,c,u,f)||((Ga.instantAnimations||!p)&&g?.(_0(t,s,n)),t[0]=t[t.length-1],Om(s),s.repeat=0);const x={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>cD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!h&&lD(x),b=x.motionValue?.owner?.current,T=y?new iD({...x,element:b}):new S0(x);T.finished.then(()=>{this.notifyFinished()}).catch(Di),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),WR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function fS(i,t,n,s=0,o=1){const c=Array.from(i).sort((h,g)=>h.sortNodePosition(g)).indexOf(t),u=i.size,f=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:f-c*s}const fD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dD(i){const t=fD.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function dS(i,t,n=1){const[s,o]=dD(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return N2(u)?parseFloat(u):u}return p0(o)?dS(o,t,n+1):o}const hD={type:"spring",stiffness:500,damping:25,restSpeed:10},pD=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),mD={type:"keyframes",duration:.8},gD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},vD=(i,{keyframes:t})=>t.length>2?mD:Ao.has(i)?i.startsWith("scale")?pD(t[1]):hD:gD,xD=i=>i!==null;function _D(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(xD),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function hS(i,t){if(i?.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function b0(i,t){const n=i?.[t]??i?.default??i;return n!==i?hS(n,i):n}function yD({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:p,elapsed:h,...g}){return!!Object.keys(g).length}const E0=(i,t,n,s={},o,c)=>u=>{const f=b0(s,i)||{},p=f.delay||s.delay||0;let{elapsed:h=0}=s;h=h-ra(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-h,onUpdate:x=>{t.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:i,motionValue:t,element:c?void 0:o};yD(f)||Object.assign(g,vD(i,g)),g.duration&&(g.duration=ra(g.duration)),g.repeatDelay&&(g.repeatDelay=ra(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Om(g),g.delay===0&&(v=!0)),(Ga.instantAnimations||Ga.skipAnimations||o?.shouldSkipAnimations)&&(v=!0,Om(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,v&&!c&&t.get()!==void 0){const x=_D(g.keyframes,f);if(x!==void 0){Ye.update(()=>{g.onUpdate(x),g.onComplete()});return}}return f.isSync?new S0(g):new uD(g)};function F_(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function T0(i,t,n,s){if(typeof t=="function"){const[o,c]=F_(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=F_(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function mo(i,t,n){const s=i.getProps();return T0(s,t,n!==void 0?n:s.custom,i)}const pS=new Set(["width","height","top","left","right","bottom",...To]),I_=30,SD=i=>!isNaN(parseFloat(i));class MD{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=Yn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Yn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=SD(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new f0);const s=this.events[t].add(n);return t==="change"?()=>{s(),Ye.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Yn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>I_)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,I_);return O2(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function So(i,t){return new MD(i,t)}const zm=i=>Array.isArray(i);function bD(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,So(n))}function ED(i){return zm(i)?i[i.length-1]||0:i}function TD(i,t){const n=mo(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const f=ED(c[u]);bD(i,u,f)}}const Xn=i=>!!(i&&i.getVelocity);function AD(i){return!!(Xn(i)&&i.add)}function Fm(i,t){const n=i.getValue("willChange");if(AD(n))return n.add(t);if(!n&&Ga.WillChange){const s=new Ga.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function A0(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const wD="framerAppearId",mS="data-"+A0(wD);function gS(i){return i.props[mS]}function CD({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function vS(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...f}=t;const p=i.getDefaultTransition();c=c?hS(c,p):p;const h=c?.reduceMotion;s&&(c=s);const g=[],v=o&&i.animationState&&i.animationState.getState()[o];for(const x in f){const y=i.getValue(x,i.latestValues[x]??null),b=f[x];if(b===void 0||v&&CD(v,x))continue;const T={delay:n,...b0(c||{},x)},M=y.get();if(M!==void 0&&!y.isAnimating&&!Array.isArray(b)&&b===M&&!T.velocity)continue;let _=!1;if(window.MotionHandoffAnimation){const U=gS(i);if(U){const P=window.MotionHandoffAnimation(U,x,Ye);P!==null&&(T.startTime=P,_=!0)}}Fm(i,x);const N=h??i.shouldReduceMotion;y.start(E0(x,y,b,N&&pS.has(x)?{type:!1}:T,i,_));const D=y.animation;D&&g.push(D)}if(u){const x=()=>Ye.update(()=>{u&&TD(i,u)});g.length?Promise.all(g).then(x):x()}return g}function Im(i,t,n={}){const s=mo(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(vS(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:g,staggerDirection:v}=o;return RD(i,t,p,h,g,v,n)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,h]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>h())}else return Promise.all([c(),u(n.delay)])}function RD(i,t,n=0,s=0,o=0,c=1,u){const f=[];for(const p of i.variantChildren)p.notify("AnimationStart",t),f.push(Im(p,t,{...u,delay:n+(typeof s=="function"?0:s)+fS(i.variantChildren,p,s,o,c)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function DD(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Im(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Im(i,t,n);else{const o=typeof t=="function"?mo(i,t,n.custom):t;s=Promise.all(vS(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const LD={test:i=>i==="auto",parse:i=>i},xS=i=>t=>t.test(i),_S=[Eo,jt,oa,Ss,aR,iR,LD],B_=i=>_S.find(xS(i));function ND(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||P2(i):!0}const UD=new Set(["brightness","contrast","saturate","opacity"]);function PD(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(m0)||[];if(!s)return i;const o=n.replace(s,"");let c=UD.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const OD=/\b([a-z-]*)\(.*?\)/gu,Bm={...ws,getAnimatableNone:i=>{const t=i.match(OD);return t?t.map(PD).join(" "):i}},V_={...Eo,transform:Math.round},zD={rotate:Ss,rotateX:Ss,rotateY:Ss,rotateZ:Ss,scale:Iu,scaleX:Iu,scaleY:Iu,scaleZ:Iu,skew:Ss,skewX:Ss,skewY:Ss,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:Hl,originX:A_,originY:A_,originZ:jt},w0={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...zD,zIndex:V_,fillOpacity:Hl,strokeOpacity:Hl,numOctaves:V_},FD={...w0,color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,filter:Bm,WebkitFilter:Bm},yS=i=>FD[i];function SS(i,t){let n=yS(i);return n!==Bm&&(n=ws),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ID=new Set(["auto","none","0"]);function BD(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!ID.has(c)&&Gl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=SS(n,o)}class VD extends M0{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let v=t[g];if(typeof v=="string"&&(v=v.trim(),p0(v))){const x=dS(v,n.current);x!==void 0&&(t[g]=x),g===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!pS.has(s)||t.length!==2)return;const[o,c]=t,u=B_(o),f=B_(c),p=T_(o),h=T_(c);if(p!==h&&Es[s]){this.needsMeasurement=!0;return}if(u!==f)if(P_(u)&&P_(f))for(let g=0;g<t.length;g++){const v=t[g];typeof v=="string"&&(t[g]=parseFloat(v))}else Es[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||ND(t[o]))&&s.push(o);s.length&&BD(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Es[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=Es[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,p])=>{t.getValue(f).set(p)}),this.resolveNoneKeyframes()}}function MS(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=n?.[i]??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const bS=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function Vm(i){return U2(i)&&"offsetHeight"in i}const{schedule:C0}=W2(queueMicrotask,!1),Hi={x:!1,y:!1};function ES(){return Hi.x||Hi.y}function HD(i){return i==="x"||i==="y"?Hi[i]?null:(Hi[i]=!0,()=>{Hi[i]=!1}):Hi.x||Hi.y?null:(Hi.x=Hi.y=!0,()=>{Hi.x=Hi.y=!1})}function TS(i,t){const n=MS(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function GD(i){return!(i.pointerType==="touch"||ES())}function kD(i,t,n={}){const[s,o,c]=TS(i,n);return s.forEach(u=>{let f=!1,p=!1,h;const g=()=>{u.removeEventListener("pointerleave",b)},v=M=>{h&&(h(M),h=void 0),g()},x=M=>{f=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,v(M))},y=()=>{f=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},b=M=>{if(M.pointerType!=="touch"){if(f){p=!0;return}v(M)}},T=M=>{if(!GD(M))return;p=!1;const _=t(u,M);typeof _=="function"&&(h=_,u.addEventListener("pointerleave",b,o))};u.addEventListener("pointerenter",T,o),u.addEventListener("pointerdown",y,o)}),c}const AS=(i,t)=>t?i===t?!0:AS(i,t.parentElement):!1,R0=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,jD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function XD(i){return jD.has(i.tagName)||i.isContentEditable===!0}const WD=new Set(["INPUT","SELECT","TEXTAREA"]);function qD(i){return WD.has(i.tagName)||i.isContentEditable===!0}const Ku=new WeakSet;function H_(i){return t=>{t.key==="Enter"&&i(t)}}function mp(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const YD=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=H_(()=>{if(Ku.has(n))return;mp(n,"down");const o=H_(()=>{mp(n,"up")}),c=()=>mp(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function G_(i){return R0(i)&&!ES()}const k_=new WeakSet;function KD(i,t,n={}){const[s,o,c]=TS(i,n),u=f=>{const p=f.currentTarget;if(!G_(f)||k_.has(f))return;Ku.add(p),n.stopPropagation&&k_.add(f);const h=t(p,f),g=(y,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),Ku.has(p)&&Ku.delete(p),G_(y)&&typeof h=="function"&&h(y,{success:b})},v=y=>{g(y,p===window||p===document||n.useGlobalTarget||AS(p,y.target))},x=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return s.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),Vm(f)&&(f.addEventListener("focus",h=>YD(h,o)),!XD(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function D0(i){return U2(i)&&"ownerSVGElement"in i}const Zu=new WeakMap;let Qu;const wS=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:D0(s)&&"getBBox"in s?s.getBBox()[t]:s[n],ZD=wS("inline","width","offsetWidth"),QD=wS("block","height","offsetHeight");function JD({target:i,borderBoxSize:t}){Zu.get(i)?.forEach(n=>{n(i,{get width(){return ZD(i,t)},get height(){return QD(i,t)}})})}function $D(i){i.forEach(JD)}function t6(){typeof ResizeObserver>"u"||(Qu=new ResizeObserver($D))}function e6(i,t){Qu||t6();const n=MS(i);return n.forEach(s=>{let o=Zu.get(s);o||(o=new Set,Zu.set(s,o)),o.add(t),Qu?.observe(s)}),()=>{n.forEach(s=>{const o=Zu.get(s);o?.delete(t),o?.size||Qu?.unobserve(s)})}}const Ju=new Set;let lo;function n6(){lo=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ju.forEach(t=>t(i))},window.addEventListener("resize",lo)}function i6(i){return Ju.add(i),lo||n6(),()=>{Ju.delete(i),!Ju.size&&typeof lo=="function"&&(window.removeEventListener("resize",lo),lo=void 0)}}function j_(i,t){return typeof i=="function"?i6(i):e6(i,t)}function a6(i){return D0(i)&&i.tagName==="svg"}const s6=[..._S,vn,ws],r6=i=>s6.find(xS(i)),X_=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:X_(),y:X_()}),W_=()=>({min:0,max:0}),yn=()=>({x:W_(),y:W_()}),Hm={current:null},CS={current:!1},o6=typeof window<"u";function l6(){if(CS.current=!0,!!o6)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hm.current=i.matches;i.addEventListener("change",t),t()}else Hm.current=!1}const c6=new WeakMap;function _f(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function kl(i){return typeof i=="string"||Array.isArray(i)}const L0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],N0=["initial",...L0];function yf(i){return _f(i.animate)||N0.some(t=>kl(i[t]))}function RS(i){return!!(yf(i)||i.variants)}function u6(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Xn(o))i.addValue(s,o);else if(Xn(c))i.addValue(s,So(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,So(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const q_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lf={};function DS(i){lf=i}function f6(){return lf}class d6{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=M0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Yn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ye.render(this.render,!1,!0))};const{latestValues:h,renderState:g}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=yf(n),this.isVariantNode=RS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in x){const b=x[y];h[y]!==void 0&&Xn(b)&&b.set(h[y])}}mount(t){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,c6.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(CS.current||l6(),this.shouldReduceMotion=Hm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),As(this.notifyUpdate),As(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=Ao.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ye.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in lf){const n=lf[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<q_.length;s++){const o=q_[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=u6(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=So(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(N2(s)||P2(s))?s=parseFloat(s):!r6(s)&&ws.test(n)&&(s=SS(t,n)),this.setBaseTarget(t,Xn(s)?s.get():s)),Xn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const c=T0(this.props,n,this.presenceContext?.custom);c&&(s=c[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Xn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new f0),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){C0.render(this.render)}}class LS extends d6{constructor(){super(...arguments),this.KeyframeResolver=VD}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Xn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Cs{constructor(t){this.isMounted=!1,this.node=t}update(){}}function NS({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function h6({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function p6(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function gp(i){return i===void 0||i===1}function Gm({scale:i,scaleX:t,scaleY:n}){return!gp(i)||!gp(t)||!gp(n)}function er(i){return Gm(i)||US(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function US(i){return Y_(i.x)||Y_(i.y)}function Y_(i){return i&&i!=="0%"}function cf(i,t,n){const s=i-n,o=t*s;return n+o}function K_(i,t,n,s,o){return o!==void 0&&(i=cf(i,o,s)),cf(i,n,s)+t}function km(i,t=0,n=1,s,o){i.min=K_(i.min,t,n,s,o),i.max=K_(i.max,t,n,s,o)}function PS(i,{x:t,y:n}){km(i.x,t.translate,t.scale,t.originPoint),km(i.y,n.translate,n.scale,n.originPoint)}const Z_=.999999999999,Q_=1.0000000000001;function m6(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let f=0;f<o;f++){c=n[f],u=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&fo(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,PS(i,u)),s&&er(c.latestValues)&&fo(i,c.latestValues))}t.x<Q_&&t.x>Z_&&(t.x=1),t.y<Q_&&t.y>Z_&&(t.y=1)}function uo(i,t){i.min=i.min+t,i.max=i.max+t}function J_(i,t,n,s,o=.5){const c=tn(i.min,i.max,o);km(i,t,n,c,s)}function fo(i,t){J_(i.x,t.x,t.scaleX,t.scale,t.originX),J_(i.y,t.y,t.scaleY,t.scale,t.originY)}function OS(i,t){return NS(p6(i.getBoundingClientRect(),t))}function g6(i,t,n){const s=OS(i,n),{scroll:o}=t;return o&&(uo(s.x,o.offset.x),uo(s.y,o.offset.y)),s}const v6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},x6=To.length;function _6(i,t,n){let s="",o=!0;for(let c=0;c<x6;c++){const u=To[c],f=i[u];if(f===void 0)continue;let p=!0;if(typeof f=="number")p=f===(u.startsWith("scale")?1:0);else{const h=parseFloat(f);p=u.startsWith("scale")?h===1:h===0}if(!p||n){const h=bS(f,w0[u]);if(!p){o=!1;const g=v6[u]||u;s+=`${g}(${h}) `}n&&(t[u]=h)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function U0(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,f=!1;for(const p in t){const h=t[p];if(Ao.has(p)){u=!0;continue}else if(Y2(p)){o[p]=h;continue}else{const g=bS(h,w0[p]);p.startsWith("origin")?(f=!0,c[p]=g):s[p]=g}}if(t.transform||(u||n?s.transform=_6(t,i.transform,n):s.transform&&(s.transform="none")),f){const{originX:p="50%",originY:h="50%",originZ:g=0}=c;s.transformOrigin=`${p} ${h} ${g}`}}function zS(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o?.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function $_(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Cl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(jt.test(i))i=parseFloat(i);else return i;const n=$_(i,t.target.x),s=$_(i,t.target.y);return`${n}% ${s}%`}},y6={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=ws.parse(i);if(o.length>5)return s;const c=ws.createTransformer(i),u=typeof o[0]!="number"?1:0,f=n.x.scale*t.x,p=n.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const h=tn(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),c(o)}},jm={borderRadius:{...Cl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Cl,borderTopRightRadius:Cl,borderBottomLeftRadius:Cl,borderBottomRightRadius:Cl,boxShadow:y6};function FS(i,{layout:t,layoutId:n}){return Ao.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!jm[i]||i==="opacity")}function P0(i,t,n){const s=i.style,o=t?.style,c={};if(!s)return c;for(const u in s)(Xn(s[u])||o&&Xn(o[u])||FS(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(c[u]=s[u]);return c}function S6(i){return window.getComputedStyle(i)}class M6 extends LS{constructor(){super(...arguments),this.type="html",this.renderInstance=zS}readValueFromInstance(t,n){if(Ao.has(n))return this.projection?.isProjecting?Dm(n):HR(t,n);{const s=S6(t),o=(Y2(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return OS(t,n)}build(t,n,s){U0(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return P0(t,n,s)}}const b6={offset:"stroke-dashoffset",array:"stroke-dasharray"},E6={offset:"strokeDashoffset",array:"strokeDasharray"};function T6(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?b6:E6;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const A6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function IS(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},p,h,g){if(U0(i,f,h),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:x}=i;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=g?.transformBox??"fill-box",delete v.transformBox);for(const y of A6)v[y]!==void 0&&(x[y]=v[y],delete v[y]);t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&T6(v,o,c,u,!1)}const BS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),VS=i=>typeof i=="string"&&i.toLowerCase()==="svg";function w6(i,t,n,s){zS(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(BS.has(o)?o:A0(o),t.attrs[o])}function HS(i,t,n){const s=P0(i,t,n);for(const o in i)if(Xn(i[o])||Xn(t[o])){const c=To.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class C6 extends LS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ao.has(n)){const s=yS(n);return s&&s.default||0}return n=BS.has(n)?n:A0(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return HS(t,n,s)}build(t,n,s){IS(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){w6(t,n,s,o)}mount(t){this.isSVGTag=VS(t.tagName),super.mount(t)}}const R6=N0.length;function GS(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?GS(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<R6;n++){const s=N0[n],o=i.props[s];(kl(o)||o===!1)&&(t[s]=o)}return t}function kS(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const D6=[...L0].reverse(),L6=L0.length;function N6(i){return t=>Promise.all(t.map(({animation:n,options:s})=>DD(i,n,s)))}function U6(i){let t=N6(i),n=ty(),s=!0;const o=p=>(h,g)=>{const v=mo(i,g,p==="exit"?i.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:y,...b}=v;h={...h,...b,...y}}return h};function c(p){t=p(i)}function u(p){const{props:h}=i,g=GS(i.parent)||{},v=[],x=new Set;let y={},b=1/0;for(let M=0;M<L6;M++){const _=D6[M],N=n[_],D=h[_]!==void 0?h[_]:g[_],U=kl(D),P=_===p?N.isActive:null;P===!1&&(b=M);let I=D===g[_]&&D!==h[_]&&U;if(I&&s&&i.manuallyAnimateOnMount&&(I=!1),N.protectedKeys={...y},!N.isActive&&P===null||!D&&!N.prevProp||_f(D)||typeof D=="boolean")continue;const z=P6(N.prevProp,D);let G=z||_===p&&N.isActive&&!I&&U||M>b&&U,A=!1;const L=Array.isArray(D)?D:[D];let j=L.reduce(o(_),{});P===!1&&(j={});const{prevResolvedValues:it={}}=N,st={...it,...j},ht=V=>{G=!0,x.has(V)&&(A=!0,x.delete(V)),N.needsAnimating[V]=!0;const Q=i.getValue(V);Q&&(Q.liveStyle=!1)};for(const V in st){const Q=j[V],St=it[V];if(y.hasOwnProperty(V))continue;let _t=!1;zm(Q)&&zm(St)?_t=!kS(Q,St):_t=Q!==St,_t?Q!=null?ht(V):x.add(V):Q!==void 0&&x.has(V)?ht(V):N.protectedKeys[V]=!0}N.prevProp=D,N.prevResolvedValues=j,N.isActive&&(y={...y,...j}),s&&i.blockInitialAnimation&&(G=!1);const ut=I&&z;G&&(!ut||A)&&v.push(...L.map(V=>{const Q={type:_};if(typeof V=="string"&&s&&!ut&&i.manuallyAnimateOnMount&&i.parent){const{parent:St}=i,_t=mo(St,V);if(St.enteringChildren&&_t){const{delayChildren:F}=_t.transition||{};Q.delay=fS(St.enteringChildren,i,F)}}return{animation:V,options:Q}}))}if(x.size){const M={};if(typeof h.initial!="boolean"){const _=mo(i,Array.isArray(h.initial)?h.initial[0]:h.initial);_&&_.transition&&(M.transition=_.transition)}x.forEach(_=>{const N=i.getBaseTarget(_),D=i.getValue(_);D&&(D.liveStyle=!0),M[_]=N??null}),v.push({animation:M})}let T=!!v.length;return s&&(h.initial===!1||h.initial===h.animate)&&!i.manuallyAnimateOnMount&&(T=!1),s=!1,T?t(v):Promise.resolve()}function f(p,h){if(n[p].isActive===h)return Promise.resolve();i.variantChildren?.forEach(v=>v.animationState?.setActive(p,h)),n[p].isActive=h;const g=u(p);for(const v in n)n[v].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>n,reset:()=>{n=ty()}}}function P6(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!kS(t,i):!1}function $s(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ty(){return{animate:$s(!0),whileInView:$s(),whileHover:$s(),whileTap:$s(),whileDrag:$s(),whileFocus:$s(),exit:$s()}}function ey(i,t){i.min=t.min,i.max=t.max}function Vi(i,t){ey(i.x,t.x),ey(i.y,t.y)}function ny(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const jS=1e-4,O6=1-jS,z6=1+jS,XS=.01,F6=0-XS,I6=0+XS;function Kn(i){return i.max-i.min}function B6(i,t,n){return Math.abs(i-t)<=n}function iy(i,t,n,s=.5){i.origin=s,i.originPoint=tn(t.min,t.max,i.origin),i.scale=Kn(n)/Kn(t),i.translate=tn(n.min,n.max,i.origin)-i.originPoint,(i.scale>=O6&&i.scale<=z6||isNaN(i.scale))&&(i.scale=1),(i.translate>=F6&&i.translate<=I6||isNaN(i.translate))&&(i.translate=0)}function Pl(i,t,n,s){iy(i.x,t.x,n.x,s?s.originX:void 0),iy(i.y,t.y,n.y,s?s.originY:void 0)}function ay(i,t,n){i.min=n.min+t.min,i.max=i.min+Kn(t)}function V6(i,t,n){ay(i.x,t.x,n.x),ay(i.y,t.y,n.y)}function sy(i,t,n){i.min=t.min-n.min,i.max=i.min+Kn(t)}function uf(i,t,n){sy(i.x,t.x,n.x),sy(i.y,t.y,n.y)}function ry(i,t,n,s,o){return i-=t,i=cf(i,1/n,s),o!==void 0&&(i=cf(i,1/o,s)),i}function H6(i,t=0,n=1,s=.5,o,c=i,u=i){if(oa.test(t)&&(t=parseFloat(t),t=tn(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=tn(c.min,c.max,s);i===c&&(f-=t),i.min=ry(i.min,t,n,f,o),i.max=ry(i.max,t,n,f,o)}function oy(i,t,[n,s,o],c,u){H6(i,t[n],t[s],t[o],t.scale,c,u)}const G6=["x","scaleX","originX"],k6=["y","scaleY","originY"];function ly(i,t,n,s){oy(i.x,t,G6,n?n.x:void 0,s?s.x:void 0),oy(i.y,t,k6,n?n.y:void 0,s?s.y:void 0)}function cy(i){return i.translate===0&&i.scale===1}function WS(i){return cy(i.x)&&cy(i.y)}function uy(i,t){return i.min===t.min&&i.max===t.max}function j6(i,t){return uy(i.x,t.x)&&uy(i.y,t.y)}function fy(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function qS(i,t){return fy(i.x,t.x)&&fy(i.y,t.y)}function dy(i){return Kn(i.x)/Kn(i.y)}function hy(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function $i(i){return[i("x"),i("y")]}function X6(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=n?.z||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:x,skewX:y,skewY:b}=n;h&&(s=`perspective(${h}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),y&&(s+=`skewX(${y}deg) `),b&&(s+=`skewY(${b}deg) `)}const f=i.x.scale*t.x,p=i.y.scale*t.y;return(f!==1||p!==1)&&(s+=`scale(${f}, ${p})`),s||"none"}const YS=["TopLeft","TopRight","BottomLeft","BottomRight"],W6=YS.length,py=i=>typeof i=="string"?parseFloat(i):i,my=i=>typeof i=="number"||jt.test(i);function q6(i,t,n,s,o,c){o?(i.opacity=tn(0,n.opacity??1,Y6(s)),i.opacityExit=tn(t.opacity??1,0,K6(s))):c&&(i.opacity=tn(t.opacity??1,n.opacity??1,s));for(let u=0;u<W6;u++){const f=`border${YS[u]}Radius`;let p=gy(t,f),h=gy(n,f);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||my(p)===my(h)?(i[f]=Math.max(tn(py(p),py(h),s),0),(oa.test(h)||oa.test(p))&&(i[f]+="%")):i[f]=h}(t.rotate||n.rotate)&&(i.rotate=tn(t.rotate||0,n.rotate||0,s))}function gy(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const Y6=KS(0,.5,G2),K6=KS(.5,.95,Di);function KS(i,t,n){return s=>s<i?0:s>t?1:n(Vl(i,t,s))}function Z6(i,t,n){const s=Xn(i)?i:So(i);return s.start(E0("",s,t,n)),s.animation}function jl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const Q6=(i,t)=>i.depth-t.depth;class J6{constructor(){this.children=[],this.isDirty=!1}add(t){o0(this.children,t),this.isDirty=!0}remove(t){l0(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Q6),this.isDirty=!1,this.children.forEach(t)}}function $6(i,t){const n=Yn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(As(s),i(c-t))};return Ye.setup(s,!0),()=>As(s)}function $u(i){return Xn(i)?i.get():i}class tL{constructor(){this.members=[]}add(t){o0(this.members,t),t.scheduleRender()}remove(t){if(l0(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,c=t.options.layoutDependency;o!==void 0&&c!==void 0&&o===c||(t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0));const{crossfade:f}=t.options;f===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const tf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},vp=["","X","Y","Z"],eL=1e3;let nL=0;function xp(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function ZS(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=gS(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Ye,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&ZS(s)}function QS({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},f=t?.()){this.id=nL++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sL),this.nodes.forEach(cL),this.nodes.forEach(uL),this.nodes.forEach(rL)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new J6)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new f0),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=D0(u)&&!a6(u),this.instance=u;const{layoutId:f,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),i){let g,v=0;const x=()=>this.root.updateBlockedByResize=!1;Ye.read(()=>{v=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,g&&g(),g=$6(x,250),tf.hasAnimatedSinceResize&&(tf.hasAnimatedSinceResize=!1,this.nodes.forEach(_y)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||mL,{onLayoutAnimationStart:T,onLayoutAnimationComplete:M}=h.getProps(),_=!this.targetLayout||!qS(this.targetLayout,y),N=!v&&x;if(this.options.layoutRoot||this.resumeFrom||N||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...b0(b,"layout"),onPlay:T,onComplete:M};(h.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,N)}else v||_y(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),As(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fL),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ZS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(xy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lL),this.nodes.forEach(iL),this.nodes.forEach(aL)):this.nodes.forEach(xy),this.clearAllSnapshots();const f=Yn.now();Fn.delta=ua(0,1e3/60,f-Fn.timestamp),Fn.timestamp=f,Fn.isProcessing=!0,cp.update.process(Fn),cp.preRender.process(Fn),cp.render.process(Fn),Fn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,C0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oL),this.sharedNodes.forEach(dL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Kn(this.snapshot.measuredBox.x)&&!Kn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=yn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!WS(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||er(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),gL(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return yn();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(vL))){const{scroll:h}=this.root;h&&(uo(f.x,h.offset.x),uo(f.y,h.offset.y))}return f}removeElementScroll(u){const f=yn();if(Vi(f,u),this.scroll?.wasRoot)return f;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:g,options:v}=h;h!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&Vi(f,u),uo(f.x,g.offset.x),uo(f.y,g.offset.y))}return f}applyTransform(u,f=!1){const p=yn();Vi(p,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&fo(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),er(g.latestValues)&&fo(p,g.latestValues)}return er(this.latestValues)&&fo(p,this.latestValues),p}removeTransform(u){const f=yn();Vi(f,u);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!er(h.latestValues))continue;Gm(h.latestValues)&&h.updateSnapshot();const g=yn(),v=h.measurePageBox();Vi(g,v),ly(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return er(this.latestValues)&&ly(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=Fn.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=yn(),this.targetWithTransforms=yn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),V6(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vi(this.target,this.layout.layoutBox),PS(this.target,this.targetDelta)):Vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Gm(this.parent.latestValues)||US(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,p){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yn(),this.relativeTargetOrigin=yn(),uf(this.relativeTargetOrigin,f,p),Vi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Fn.timestamp&&(p=!1),p)return;const{layout:h,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||g))return;Vi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;m6(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=yn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ny(this.prevProjectionDelta.x,this.projectionDelta.x),ny(this.prevProjectionDelta.y,this.projectionDelta.y)),Pl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!hy(this.projectionDelta.x,this.prevProjectionDelta.x)||!hy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=co(),this.projectionDelta=co(),this.projectionDeltaWithTransform=co()}setAnimationOrigin(u,f=!1){const p=this.snapshot,h=p?p.latestValues:{},g={...this.latestValues},v=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const x=yn(),y=p?p.source:void 0,b=this.layout?this.layout.source:void 0,T=y!==b,M=this.getStack(),_=!M||M.members.length<=1,N=!!(T&&!_&&this.options.crossfade===!0&&!this.path.some(pL));this.animationProgress=0;let D;this.mixTargetDelta=U=>{const P=U/1e3;yy(v.x,u.x,P),yy(v.y,u.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uf(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),hL(this.relativeTarget,this.relativeTargetOrigin,x,P),D&&j6(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=yn()),Vi(D,this.relativeTarget)),T&&(this.animationValues=g,q6(g,h,this.latestValues,P,N,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(As(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ye.update(()=>{tf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=So(0)),this.currentAnimation=Z6(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(eL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:h,latestValues:g}=u;if(!(!f||!p||!h)){if(this!==u&&this.layout&&h&&JS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||yn();const v=Kn(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+v;const x=Kn(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+x}Vi(f,p),fo(f,g),Pl(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new tL),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const h={};p.z&&xp("z",u,h,this.animationValues);for(let g=0;g<vp.length;g++)xp(`rotate${vp[g]}`,u,h,this.animationValues),xp(`skew${vp[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=$u(f?.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=$u(f?.pointerEvents)||""),this.hasProjected&&!er(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=X6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),u.transform=v;const{x,y}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${y.origin*100}% 0`,h.animationValues?u.opacity=h===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=h===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in jm){if(g[b]===void 0)continue;const{correct:T,applyTo:M,isCSSVariable:_}=jm[b],N=v==="none"?g[b]:T(g[b],h);if(M){const D=M.length;for(let U=0;U<D;U++)u[M[U]]=N}else _?this.options.visualElement.renderState.vars[b]=N:u[b]=N}this.options.layoutId&&(u.pointerEvents=h===this?$u(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(vy),this.root.sharedNodes.clear()}}}function iL(i){i.updateLayout()}function aL(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,c=t.source!==i.layout.source;o==="size"?$i(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],x=Kn(v);v.min=n[g].min,v.max=v.min+x}):JS(o,t.layoutBox,n)&&$i(g=>{const v=c?t.measuredBox[g]:t.layoutBox[g],x=Kn(n[g]);v.max=v.min+x,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+x)});const u=co();Pl(u,n,t.layoutBox);const f=co();c?Pl(f,i.applyTransform(s,!0),t.measuredBox):Pl(f,n,t.layoutBox);const p=!WS(u);let h=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const y=yn();uf(y,t.layoutBox,v.layoutBox);const b=yn();uf(b,n,x.layoutBox),qS(y,b)||(h=!0),g.options.layoutRoot&&(i.relativeTarget=b,i.relativeTargetOrigin=y,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function sL(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function rL(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function oL(i){i.clearSnapshot()}function vy(i){i.clearMeasurements()}function xy(i){i.isLayoutDirty=!1}function lL(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function _y(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function cL(i){i.resolveTargetDelta()}function uL(i){i.calcProjection()}function fL(i){i.resetSkewAndRotation()}function dL(i){i.removeLeadSnapshot()}function yy(i,t,n){i.translate=tn(t.translate,0,n),i.scale=tn(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function Sy(i,t,n,s){i.min=tn(t.min,n.min,s),i.max=tn(t.max,n.max,s)}function hL(i,t,n,s){Sy(i.x,t.x,n.x,s),Sy(i.y,t.y,n.y,s)}function pL(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const mL={duration:.45,ease:[.4,0,.1,1]},My=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),by=My("applewebkit/")&&!My("chrome/")?Math.round:Di;function Ey(i){i.min=by(i.min),i.max=by(i.max)}function gL(i){Ey(i.x),Ey(i.y)}function JS(i,t,n){return i==="position"||i==="preserve-aspect"&&!B6(dy(t),dy(n),.2)}function vL(i){return i!==i.root&&i.scroll?.wasRoot}const xL=QS({attachResizeListener:(i,t)=>jl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),_p={current:void 0},$S=QS({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!_p.current){const i=new xL({});i.mount(window),i.setOptions({layoutScroll:!0}),_p.current=i}return _p.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),O0=At.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function Ty(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function _L(...i){return t=>{let n=!1;const s=i.map(o=>{const c=Ty(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<s.length;o++){const c=s[o];typeof c=="function"?c():Ty(i[o],null)}}}}function yL(...i){return At.useCallback(_L(...i),i)}class SL extends At.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=Vm(s)&&s.offsetWidth||0,c=Vm(s)&&s.offsetHeight||0,u=this.props.sizeRef.current;u.height=n.offsetHeight||0,u.width=n.offsetWidth||0,u.top=n.offsetTop,u.left=n.offsetLeft,u.right=o-u.width-u.left,u.bottom=c-u.height-u.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ML({children:i,isPresent:t,anchorX:n,anchorY:s,root:o,pop:c}){const u=At.useId(),f=At.useRef(null),p=At.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=At.useContext(O0),g=i.props?.ref??i?.ref,v=yL(f,g);return At.useInsertionEffect(()=>{const{width:x,height:y,top:b,left:T,right:M,bottom:_}=p.current;if(t||c===!1||!f.current||!x||!y)return;const N=n==="left"?`left: ${T}`:`right: ${M}`,D=s==="bottom"?`bottom: ${_}`:`top: ${b}`;f.current.dataset.motionPopId=u;const U=document.createElement("style");h&&(U.nonce=h);const P=o??document.head;return P.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${y}px !important;
            ${N}px !important;
            ${D}px !important;
          }
        `),()=>{P.contains(U)&&P.removeChild(U)}},[t]),R.jsx(SL,{isPresent:t,childRef:f,sizeRef:p,pop:c,children:c===!1?i:At.cloneElement(i,{ref:v})})}const bL=({children:i,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u,anchorX:f,anchorY:p,root:h})=>{const g=r0(EL),v=At.useId();let x=!0,y=At.useMemo(()=>(x=!1,{id:v,initial:t,isPresent:n,custom:o,onExitComplete:b=>{g.set(b,!0);for(const T of g.values())if(!T)return;s&&s()},register:b=>(g.set(b,!1),()=>g.delete(b))}),[n,g,s]);return c&&x&&(y={...y}),At.useMemo(()=>{g.forEach((b,T)=>g.set(T,!1))},[n]),At.useEffect(()=>{!n&&!g.size&&s&&s()},[n]),i=R.jsx(ML,{pop:u==="popLayout",isPresent:n,anchorX:f,anchorY:p,root:h,children:i}),R.jsx(xf.Provider,{value:y,children:i})};function EL(){return new Map}function tM(i=!0){const t=At.useContext(xf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=At.useId();At.useEffect(()=>{if(i)return o(c)},[i]);const u=At.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const Bu=i=>i.key||"";function Ay(i){const t=[];return At.Children.forEach(i,n=>{At.isValidElement(n)&&t.push(n)}),t}const Sf=({children:i,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",anchorY:p="top",root:h})=>{const[g,v]=tM(u),x=At.useMemo(()=>Ay(i),[i]),y=u&&!g?[]:x.map(Bu),b=At.useRef(!0),T=At.useRef(x),M=r0(()=>new Map),_=At.useRef(new Set),[N,D]=At.useState(x),[U,P]=At.useState(x);L2(()=>{b.current=!1,T.current=x;for(let G=0;G<U.length;G++){const A=Bu(U[G]);y.includes(A)?(M.delete(A),_.current.delete(A)):M.get(A)!==!0&&M.set(A,!1)}},[U,y.length,y.join("-")]);const I=[];if(x!==N){let G=[...x];for(let A=0;A<U.length;A++){const L=U[A],j=Bu(L);y.includes(j)||(G.splice(A,0,L),I.push(L))}return c==="wait"&&I.length&&(G=I),P(Ay(G)),D(x),null}const{forceRender:z}=At.useContext(s0);return R.jsx(R.Fragment,{children:U.map(G=>{const A=Bu(G),L=u&&!g?!1:x===U||y.includes(A),j=()=>{if(_.current.has(A))return;if(_.current.add(A),M.has(A))M.set(A,!0);else return;let it=!0;M.forEach(st=>{st||(it=!1)}),it&&(z?.(),P(T.current),u&&v?.(),s&&s())};return R.jsx(bL,{isPresent:L,initial:!b.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:h,onExitComplete:L?void 0:j,anchorX:f,anchorY:p,children:G},A)})})},eM=At.createContext({strict:!1}),wy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Cy=!1;function TL(){if(Cy)return;const i={};for(const t in wy)i[t]={isEnabled:n=>wy[t].some(s=>!!n[s])};DS(i),Cy=!0}function nM(){return TL(),f6()}function AL(i){const t=nM();for(const n in i)t[n]={...t[n],...i[n]};DS(t)}const wL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ff(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||wL.has(i)}let iM=i=>!ff(i);function CL(i){typeof i=="function"&&(iM=t=>t.startsWith("on")?!ff(t):i(t))}try{CL(require("@emotion/is-prop-valid").default)}catch{}function RL(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(iM(o)||n===!0&&ff(o)||!t&&!ff(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const Mf=At.createContext({});function DL(i,t){if(yf(i)){const{initial:n,animate:s}=i;return{initial:n===!1||kl(n)?n:void 0,animate:kl(s)?s:void 0}}return i.inherit!==!1?t:{}}function LL(i){const{initial:t,animate:n}=DL(i,At.useContext(Mf));return At.useMemo(()=>({initial:t,animate:n}),[Ry(t),Ry(n)])}function Ry(i){return Array.isArray(i)?i.join(" "):i}const z0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function aM(i,t,n){for(const s in t)!Xn(t[s])&&!FS(s,n)&&(i[s]=t[s])}function NL({transformTemplate:i},t){return At.useMemo(()=>{const n=z0();return U0(n,t,i),Object.assign({},n.vars,n.style)},[t])}function UL(i,t){const n=i.style||{},s={};return aM(s,n,i),Object.assign(s,NL(i,t)),s}function PL(i,t){const n={},s=UL(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const sM=()=>({...z0(),attrs:{}});function OL(i,t,n,s){const o=At.useMemo(()=>{const c=sM();return IS(c,t,VS(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};aM(c,i.style,i),o.style={...c,...o.style}}return o}const zL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function F0(i){return typeof i!="string"||i.includes("-")?!1:!!(zL.indexOf(i)>-1||/[A-Z]/u.test(i))}function FL(i,t,n,{latestValues:s},o,c=!1,u){const p=(u??F0(i)?OL:PL)(t,s,o,i),h=RL(t,typeof i=="string",c),g=i!==At.Fragment?{...h,...p,ref:n}:{},{children:v}=t,x=At.useMemo(()=>Xn(v)?v.get():v,[v]);return At.createElement(i,{...g,children:x})}function IL({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:BL(n,s,o,i),renderState:t()}}function BL(i,t,n,s){const o={},c=s(i,{});for(const x in c)o[x]=$u(c[x]);let{initial:u,animate:f}=i;const p=yf(i),h=RS(i);t&&h&&!p&&i.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!_f(v)){const x=Array.isArray(v)?v:[v];for(let y=0;y<x.length;y++){const b=T0(i,x[y]);if(b){const{transitionEnd:T,transition:M,..._}=b;for(const N in _){let D=_[N];if(Array.isArray(D)){const U=g?D.length-1:0;D=D[U]}D!==null&&(o[N]=D)}for(const N in T)o[N]=T[N]}}}return o}const rM=i=>(t,n)=>{const s=At.useContext(Mf),o=At.useContext(xf),c=()=>IL(i,t,s,o);return n?c():r0(c)},VL=rM({scrapeMotionValuesFromProps:P0,createRenderState:z0}),HL=rM({scrapeMotionValuesFromProps:HS,createRenderState:sM}),GL=Symbol.for("motionComponentSymbol");function kL(i,t,n){const s=At.useRef(n);At.useInsertionEffect(()=>{s.current=n});const o=At.useRef(null);return At.useCallback(c=>{c&&i.onMount?.(c),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const f=u(c);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const oM=At.createContext({});function ro(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function jL(i,t,n,s,o,c){const{visualElement:u}=At.useContext(Mf),f=At.useContext(eM),p=At.useContext(xf),h=At.useContext(O0),g=h.reducedMotion,v=h.skipAnimations,x=At.useRef(null),y=At.useRef(!1);s=s||f.renderer,!x.current&&s&&(x.current=s(i,{visualState:t,parent:u,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:v,isSVG:c}),y.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const b=x.current,T=At.useContext(oM);b&&!b.projection&&o&&(b.type==="html"||b.type==="svg")&&XL(x.current,n,o,T);const M=At.useRef(!1);At.useInsertionEffect(()=>{b&&M.current&&b.update(n,p)});const _=n[mS],N=At.useRef(!!_&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return L2(()=>{y.current=!0,b&&(M.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),N.current&&b.animationState&&b.animationState.animateChanges())}),At.useEffect(()=>{b&&(!N.current&&b.animationState&&b.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),N.current=!1),b.enteringChildren=void 0)}),b}function XL(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:h,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:lM(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&ro(f),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:p,layoutRoot:h})}function lM(i){if(i)return i.options.allowProjection!==!1?i.projection:lM(i.parent)}function yp(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&AL(s);const c=n?n==="svg":F0(i),u=c?HL:VL;function f(h,g){let v;const x={...At.useContext(O0),...h,layoutId:WL(h)},{isStatic:y}=x,b=LL(h),T=u(h,y);if(!y&&D2){qL();const M=YL(x);v=M.MeasureLayout,b.visualElement=jL(i,T,x,o,M.ProjectionNode,c)}return R.jsxs(Mf.Provider,{value:b,children:[v&&b.visualElement?R.jsx(v,{visualElement:b.visualElement,...x}):null,FL(i,h,kL(T,b.visualElement,g),T,y,t,c)]})}f.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const p=At.forwardRef(f);return p[GL]=i,p}function WL({layoutId:i}){const t=At.useContext(s0).id;return t&&i!==void 0?t+"-"+i:i}function qL(i,t){At.useContext(eM).strict}function YL(i){const t=nM(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n?.isEnabled(i)||s?.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function KL(i,t){if(typeof Proxy>"u")return yp;const n=new Map,s=(c,u)=>yp(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,yp(u,void 0,i,t)),n.get(u))})}const ZL=(i,t)=>t.isSVG??F0(i)?new C6(t):new M6(t,{allowProjection:i!==At.Fragment});class QL extends Cs{constructor(t){super(t),t.animationState||(t.animationState=U6(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();_f(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let JL=0;class $L extends Cs{constructor(){super(...arguments),this.id=JL++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const tN={animation:{Feature:QL},exit:{Feature:$L}};function ec(i){return{point:{x:i.pageX,y:i.pageY}}}const eN=i=>t=>R0(t)&&i(t,ec(t));function Ol(i,t,n,s){return jl(i,t,eN(n),s)}const cM=({current:i})=>i?i.ownerDocument.defaultView:null,Dy=(i,t)=>Math.abs(i-t);function nN(i,t){const n=Dy(i.x,t.x),s=Dy(i.y,t.y);return Math.sqrt(n**2+s**2)}const Ly=new Set(["auto","scroll"]);class uM{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Mp(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,T=nN(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!T)return;const{point:M}=y,{timestamp:_}=Fn;this.history.push({...M,timestamp:_});const{onStart:N,onMove:D}=this.handlers;b||(N&&N(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,y)},this.handlePointerMove=(y,b)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Sp(b,this.transformPagePoint),Ye.update(this.updatePoint,!0)},this.handlePointerUp=(y,b)=>{this.end();const{onEnd:T,onSessionEnd:M,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=Mp(y.type==="pointercancel"?this.lastMoveEventInfo:Sp(b,this.transformPagePoint),this.history);this.startEvent&&T&&T(y,N),M&&M(y,N)},!R0(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const p=ec(t),h=Sp(p,this.transformPagePoint),{point:g}=h,{timestamp:v}=Fn;this.history=[{...g,timestamp:v}];const{onSessionStart:x}=n;x&&x(t,Mp(h,this.history)),this.removeListeners=Jl(Ol(this.contextWindow,"pointermove",this.handlePointerMove),Ol(this.contextWindow,"pointerup",this.handlePointerUp),Ol(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(Ly.has(s.overflowX)||Ly.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Ye.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),As(this.updatePoint)}}function Sp(i,t){return t?{point:t(i.point)}:i}function Ny(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Mp({point:i},t){return{point:i,delta:Ny(i,fM(t)),offset:Ny(i,iN(t)),velocity:aN(t,.1)}}function iN(i){return i[0]}function fM(i){return i[i.length-1]}function aN(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=fM(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>ra(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>ra(t)*2&&(s=i[1]);const c=Ri(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function sN(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?tn(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?tn(n,i,s.max):Math.min(i,n)),i}function Uy(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function rN(i,{top:t,left:n,bottom:s,right:o}){return{x:Uy(i.x,n,o),y:Uy(i.y,t,s)}}function Py(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function oN(i,t){return{x:Py(i.x,t.x),y:Py(i.y,t.y)}}function lN(i,t){let n=.5;const s=Kn(i),o=Kn(t);return o>s?n=Vl(t.min,t.max-s,i.min):s>o&&(n=Vl(i.min,i.max-o,t.min)),ua(0,1,n)}function cN(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Xm=.35;function uN(i=Xm){return i===!1?i=0:i===!0&&(i=Xm),{x:Oy(i,"left","right"),y:Oy(i,"top","bottom")}}function Oy(i,t,n){return{min:zy(i,t),max:zy(i,n)}}function zy(i,t){return typeof i=="number"?i:i[t]||0}const fN=new WeakMap;class dN{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{n&&this.snapToCursor(ec(v).point),this.stopAnimation()},u=(v,x)=>{const{drag:y,dragPropagation:b,onDragStart:T}=this.getProps();if(y&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=HD(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$i(_=>{let N=this.getAxisMotionValue(_).get()||0;if(oa.test(N)){const{projection:D}=this.visualElement;if(D&&D.layout){const U=D.layout.layoutBox[_];U&&(N=Kn(U)*(parseFloat(N)/100))}}this.originPoint[_]=N}),T&&Ye.update(()=>T(v,x),!1,!0),Fm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},f=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:y,dragDirectionLock:b,onDirectionLock:T,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:_}=x;if(b&&this.currentDirection===null){this.currentDirection=pN(_),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,_),this.updateAxis("y",x.point,_),this.visualElement.render(),M&&Ye.update(()=>M(v,x),!1,!0)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new uM(t,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:cM(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ye.postRender(()=>f(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Vu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=sN(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&ro(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=rN(s.layoutBox,t):this.constraints=!1,this.elastic=uN(n),o!==this.constraints&&!ro(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&$i(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=cN(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ro(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=g6(s,o.root,this.visualElement.getTransformPagePoint());let u=oN(o.layout.layoutBox,c);if(n){const f=n(h6(u));this.hasMutatedConstraints=!!f,f&&(u=NS(f))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},h=$i(g=>{if(!Vu(g,n,this.currentDirection))return;let v=p&&p[g]||{};u&&(v={min:0,max:0});const x=o?200:1e6,y=o?40:1e7,b={type:"inertia",velocity:s?t[g]:0,bounceStiffness:x,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(h).then(f)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Fm(this.visualElement,t),s.start(E0(t,s,0,n,this.visualElement,!1))}stopAnimation(){$i(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){$i(n=>{const{drag:s}=this.getProps();if(!Vu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[n],p=c.get()||0;c.set(t[n]-tn(u,f,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!ro(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};$i(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=lN({min:p,max:p},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),$i(u=>{if(!Vu(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:h}=this.constraints[u];f.set(tn(p,h,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fN.set(this.visualElement,this);const t=this.visualElement.current,n=Ol(t,"pointerdown",h=>{const{drag:g,dragListener:v=!0}=this.getProps(),x=h.target,y=x!==t&&qD(x);g&&v&&!y&&this.start(h)});let s;const o=()=>{const{dragConstraints:h}=this.getProps();ro(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),s||(s=hN(t,h.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ye.read(o);const f=jl(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:g})=>{this.isDragging&&g&&($i(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=h[v].translate,x.set(x.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),n(),u(),p&&p(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Xm,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function Fy(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function hN(i,t,n){const s=j_(i,Fy(n)),o=j_(t,Fy(n));return()=>{s(),o()}}function Vu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function pN(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class mN extends Cs{constructor(t){super(t),this.removeGroupControls=Di,this.removeListeners=Di,this.controls=new dN(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Di}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const bp=i=>(t,n)=>{i&&Ye.update(()=>i(t,n),!1,!0)};class gN extends Cs{constructor(){super(...arguments),this.removePointerDownListener=Di}onPointerDown(t){this.session=new uM(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:cM(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:bp(t),onStart:bp(n),onMove:bp(s),onEnd:(c,u)=>{delete this.session,o&&Ye.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Ol(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ep=!1;class vN extends At.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),Ep&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),tf.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),Ep=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Ye.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),C0.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Ep=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function dM(i){const[t,n]=tM(),s=At.useContext(s0);return R.jsx(vN,{...i,layoutGroup:s,switchLayoutGroup:At.useContext(oM),isPresent:t,safeToRemove:n})}const xN={pan:{Feature:gN},drag:{Feature:mN,ProjectionNode:$S,MeasureLayout:dM}};function Iy(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Ye.postRender(()=>c(t,ec(t)))}class _N extends Cs{mount(){const{current:t}=this.node;t&&(this.unmount=kD(t,(n,s)=>(Iy(this.node,s,"Start"),o=>Iy(this.node,o,"End"))))}unmount(){}}class yN extends Cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jl(jl(this.node.current,"focus",()=>this.onFocus()),jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function By(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Ye.postRender(()=>c(t,ec(t)))}class SN extends Cs{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=KD(t,(o,c)=>(By(this.node,c,"Start"),(u,{success:f})=>By(this.node,u,f?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:s?.tap===!1})}unmount(){}}const Wm=new WeakMap,Tp=new WeakMap,MN=i=>{const t=Wm.get(i.target);t&&t(i)},bN=i=>{i.forEach(MN)};function EN({root:i,...t}){const n=i||document;Tp.has(n)||Tp.set(n,{});const s=Tp.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(bN,{root:i,...t})),s[o]}function TN(i,t,n){const s=EN(t);return Wm.set(i,n),s.observe(i),()=>{Wm.delete(i),s.unobserve(i)}}const AN={some:0,all:1};class wN extends Cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:AN[o]},f=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,c&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),x=h?g:v;x&&x(p)};return TN(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(CN(t,n))&&this.startObserver()}unmount(){}}function CN({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const RN={inView:{Feature:wN},tap:{Feature:SN},focus:{Feature:yN},hover:{Feature:_N}},DN={layout:{ProjectionNode:$S,MeasureLayout:dM}},LN={...tN,...RN,...xN,...DN},Sn=KL(LN,ZL),NN=()=>R.jsxs("section",{id:"home",className:"hero",children:[R.jsx("div",{className:"container hero-container",children:R.jsxs(Sn.div,{className:"content",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[R.jsx("h2",{className:"greeting",children:"HELLO, I AM"}),R.jsx("h1",{className:"name",children:"ROHAN R"}),R.jsx("div",{className:"title",children:"Generative AI, ML & Data Science Developer"}),R.jsxs("p",{className:"bio",children:["I'm currently a Computer Science (Data Science) undergraduate at B.M.S. College of Engineering, focused on building ",R.jsx("span",{className:"highlight highlight-yellow",children:"AI systems"}),", working with ",R.jsx("span",{className:"highlight highlight-yellow",children:"RAG architectures"}),", and turning data into reliable solutions. Currently building ",R.jsx("span",{className:"highlight highlight-reddit",children:"MindVault"}),"."]}),R.jsxs("div",{className:"cta-group",children:[R.jsx("a",{href:"#projects",className:"btn btn-primary",children:"VIEW WORK"}),R.jsx("a",{href:"#contact",className:"btn btn-outline",children:"CONTACT ME"})]})]})}),R.jsx("div",{className:"scroll-indicator",children:R.jsx(aC,{size:24})}),R.jsx("style",{children:`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-container {
          width: 100%;
        }
        .greeting {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          color: var(--color-primary); /* Use Primary White */
          font-weight: 500;
          text-shadow: var(--shadow-text);
        }
        .name {
          font-size: 5rem;
          font-weight: 800; /* Bolder */
          line-height: 1;
          margin-bottom: 1.5rem;
          color: var(--color-text);
          letter-spacing: -0.04em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8); /* Deep shadow */
        }
        .title {
          font-family: var(--font-mono);
          font-size: 1.75rem; /* Slightly smaller, more tech */
          margin-bottom: 2.5rem;
          color: var(--color-text-secondary);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .bio {
          max-width: 600px;
          color: var(--color-text-secondary);
          font-size: 1.125rem;
          margin-bottom: 3.5rem;
          font-weight: 400;
          line-height: 1.8;
        }
        
        .highlight {
          font-weight: 700;
          display: inline-block;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }
        
        .highlight-yellow {
          background-image: linear-gradient(to right, #ffd700, #ff8c00); /* Gold to Orange */
          text-shadow: 0px 4px 20px rgba(255, 215, 0, 0.3); /* Glowing effect */
        }
        
        .highlight-reddit {
          background-image: linear-gradient(to right, #FF4500, #ff8746); /* Reddit Red */
          text-shadow: 0px 4px 20px rgba(255, 69, 0, 0.4); /* Glowing effect */
        }
        
        /* Fallback for text shadow on transparent text (shadow applies to box otherwise) */
        /* We use filter drop-shadow for gradients if needed, but text-shadow doesn't work well with transparent fill */
        /* Alternative approach: subtle glow via filter */
        .highlight:hover {
           filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
           transform: translateY(-1px);
        }
        
        .cta-group {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          padding: 0.875rem 2rem;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-block;
          border-radius: 2px;
        }
        .btn-primary {
          background: var(--color-text);
          color: var(--color-bg);
        }
        .btn-primary:hover {
          background: #e0e0e0;
        }
        .btn-outline {
          border-color: var(--color-text-secondary);
          color: var(--color-text-secondary);
        }
        .btn-outline:hover {
          border-color: var(--color-text);
          color: var(--color-text);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-text-secondary);
          opacity: 0.5;
        }
        
        @media (max-width: 768px) {
          .name { font-size: 2.8rem; }
          .title { font-size: 1.2rem; }
          .bio { font-size: 1rem; margin-bottom: 2rem; }
          .btn { padding: 0.75rem 1.5rem; font-size: 0.8rem; }
          .cta-group { gap: 1rem; }
        }
      `})]});var hM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vy=za.createContext&&za.createContext(hM),UN=["attr","size","title"];function PN(i,t){if(i==null)return{};var n=ON(i,t),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(o=0;o<c.length;o++)s=c[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function ON(i,t){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(t.indexOf(s)>=0)continue;n[s]=i[s]}return n}function df(){return df=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},df.apply(this,arguments)}function Hy(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,s)}return n}function hf(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hy(Object(n),!0).forEach(function(s){zN(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):Hy(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function zN(i,t,n){return t=FN(t),t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function FN(i){var t=IN(i,"string");return typeof t=="symbol"?t:t+""}function IN(i,t){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function pM(i){return i&&i.map((t,n)=>za.createElement(t.tag,hf({key:n},t.attr),pM(t.child)))}function We(i){return t=>za.createElement(BN,df({attr:hf({},i.attr)},t),pM(i.child))}function BN(i){var t=n=>{var{attr:s,size:o,title:c}=i,u=PN(i,UN),f=o||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),za.createElement("svg",df({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,u,{className:p,style:hf(hf({color:i.color||n.color},n.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&za.createElement("title",null,c),i.children)};return Vy!==void 0?za.createElement(Vy.Consumer,null,n=>t(n)):t(hM)}function VN(i){return We({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(i)}function HN(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(i)}function GN(i){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(i)}function kN(i){return We({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(i)}function jN(i){return We({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(i)}function XN(i){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"},child:[]}]})(i)}function Gy(i){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(i)}function WN(i){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(i)}function Hu(i){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(i)}function qN(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(i)}function Ap(i){return We({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(i)}function YN(i){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(i)}function KN(i){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"},child:[]}]})(i)}function ZN(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(i)}function QN(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(i)}function JN(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(i)}function $N(i){return We({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(i)}function tU(i){return We({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(i)}function eU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"},child:[]}]})(i)}function nU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"},child:[]}]})(i)}function iU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(i)}function aU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4-5.14 5.1 5.47 7.94-.2.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z"},child:[]}]})(i)}function sU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(i)}function rU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.8992.8525C8.735.8525 6.17 3.4175 6.17 6.5817c0 2.102 1.1321 3.9398 2.8198 4.9366l1.6412-2.7849c.0411-.0699.0176-.1593-.0495-.2048-.6233-.4227-1.0328-1.137-1.0328-1.947 0-1.298 1.0524-2.3504 2.3505-2.3504 1.2981 0 2.3505 1.0524 2.3505 2.3505 0 .8098-.4095 1.5242-1.0328 1.947-.0671.0454-.0907.1348-.0495.2047l1.6414 2.785c1.6878-.9969 2.8199-2.8346 2.8199-4.9367 0-3.1642-2.5653-5.7292-5.7295-5.7292zm-6.17 10.8366C2.565 11.6891 0 14.2541 0 17.4183c0 3.1642 2.565 5.7292 5.7292 5.7292 3.1798 0 5.8074-2.6995 5.7275-5.8762H8.2313c-.0847 0-.1513.0717-.1519.1564-.0082 1.266-1.0644 2.3411-2.3502 2.3411-1.2981 0-2.3505-1.0524-2.3505-2.3505 0-1.2982 1.0524-2.3505 2.3505-2.3505.34 0 .663.0724.9547.2022.0713.0318.1566.0077.1962-.0595l1.6464-2.7935c-.8273-.4636-1.7815-.7279-2.7973-.7279zm15.4424.7614l-1.6366 2.7878c-.041.07-.0172.1594.05.2048.624.4217 1.0348 1.1354 1.0363 1.9452.0022 1.298-1.0483 2.352-2.3465 2.3542-1.298.0023-2.3523-1.0482-2.3545-2.3462-.0015-.8098.4068-1.5248 1.0294-1.9486.067-.0457.0905-.1353.0492-.2051l-1.6464-2.7818c-1.6859.9998-2.8146 2.8394-2.811 4.9415.0056 3.1641 2.575 5.7248 5.7393 5.7192 3.1641-.0054 5.7246-2.575 5.7192-5.7392-.0037-2.1022-1.139-3.938-2.8284-4.9318z"},child:[]}]})(i)}function oU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z"},child:[]}]})(i)}function lU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z"},child:[]}]})(i)}function cU(i){return We({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"},child:[]}]})(i)}const uU=[{category:"GenAI",items:[{name:"RAG",icon:R.jsx(ZN,{color:"#00ff9d"})},{name:"LLMs",icon:R.jsx(JN,{color:"#FF6F00"})},{name:"LangChain",icon:R.jsx(KN,{color:"#2C3E50"})},{name:"Langflow",icon:R.jsx(QN,{color:"#E34F26"})},{name:"Embeddings",icon:R.jsx(YN,{color:"#A8B9CC"})},{name:"Vector Databases",icon:R.jsx(Ap,{color:"#F29111"})},{name:"Prompt Engineering",icon:R.jsx(tU,{color:"#F7DF1E"})},{name:"Semantic Search",icon:R.jsx($N,{color:"#61DAFB"})}]},{category:"Languages",items:[{name:"Python",icon:R.jsx(Gy,{color:"#3776AB"})},{name:"Java",icon:R.jsx(jN,{color:"#007396"})},{name:"SQL",icon:R.jsx(Ap,{color:"#F29111"})},{name:"C",icon:R.jsx(eU,{color:"#A8B9CC"})},{name:"JavaScript",icon:R.jsx(iU,{color:"#F7DF1E"})}]},{category:"Web & APIs",items:[{name:"HTML",icon:R.jsx(kN,{color:"#E34F26"})},{name:"CSS",icon:R.jsx(VN,{color:"#1572B6"})},{name:"React",icon:R.jsx(WN,{color:"#61DAFB"})},{name:"FastAPI",icon:R.jsx(nU,{color:"#009688"})},{name:"REST APIs",icon:R.jsx(Ap,{color:"#fff"})}]},{category:"Data & Visualization",items:[{name:"Pandas",icon:R.jsx(oU,{color:"#150458"})},{name:"Matplotlib",icon:R.jsx(Hu,{color:"#11557C"})},{name:"Seaborn",icon:R.jsx(Hu,{color:"#fff"})},{name:"Power BI",icon:R.jsx(Hu,{color:"#F2C811"})},{name:"Tableau",icon:R.jsx(Hu,{color:"#E97627"})}]},{category:"ML & AI",items:[{name:"TensorFlow",icon:R.jsx(cU,{color:"#FF6F00"})},{name:"Keras",icon:R.jsx(aU,{color:"#D00000"})},{name:"Scikit-learn",icon:R.jsx(lU,{color:"#F7931E"})},{name:"NLTK",icon:R.jsx(Gy,{color:"#3776AB"})},{name:"OpenCV",icon:R.jsx(rU,{color:"#5C3EE8"})}]},{category:"Tools & Environment",items:[{name:"Git",icon:R.jsx(GN,{color:"#F05032"})},{name:"Docker",icon:R.jsx(HN,{color:"#2496ED"})},{name:"MongoDB",icon:R.jsx(sU,{color:"#47A248"})},{name:"Linux",icon:R.jsx(XN,{color:"#FCC624"})},{name:"VS Code",icon:R.jsx(qN,{color:"#007ACC"})}]}],fU=()=>R.jsxs("section",{id:"skills",className:"section skills-section",children:[R.jsxs("div",{className:"container",children:[R.jsxs(Sn.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[R.jsxs("div",{className:"section-header",children:[R.jsxs("h2",{className:"section-title",children:[R.jsx("span",{className:"text-secondary",children:"01. "}),"EXPERTISE"]}),R.jsx("div",{className:"line"})]}),R.jsx("h3",{className:"headline",children:"Skills & Technologies"})]}),R.jsx("div",{className:"skills-grid",children:uU.map((i,t)=>R.jsxs(Sn.div,{className:"skill-group",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:t*.1},viewport:{once:!0},children:[R.jsx("h4",{className:"category-title text-primary",children:i.category}),R.jsx("div",{className:"skill-tags",children:i.items.map(n=>R.jsxs("div",{className:"skill-pill",children:[R.jsx("span",{className:"skill-icon",children:n.icon}),R.jsx("span",{className:"skill-name",children:n.name})]},n.name))})]},i.category))})]}),R.jsx("style",{children:`
        .section {
          padding: 6rem 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-right: 1rem;
          color: var(--color-text-secondary);
        }
        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          flex: 1;
          max-width: 200px;
        }
        .headline {
          font-size: 3rem;
          margin-bottom: 4rem;
          font-weight: 700;
          color: white;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 4rem;
        }
        
        .category-title {
            font-family: var(--font-sans);
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #d2a8ff;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(15, 15, 20, 0.5); /* Semi-transparent 50% opacity */
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          width: fit-content;
          /* backdrop-filter removed for smooth scrolling */
        }
        
        .skill-pill:hover {
          background: rgba(30, 30, 40, 0.8);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        
        .skill-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem; /* Increased from 1.2rem */
        }
        
        .skill-name {
            font-family: var(--font-sans);
            font-size: 0.95rem;
            color: #e6edf3;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .headline { font-size: 2.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `})]}),dU=({project:i,onClose:t})=>{if(At.useEffect(()=>{document.body.style.overflow="hidden";const s=o=>{o.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",s)}},[t]),!i)return null;const{details:n}=i;return R.jsxs(Sf,{children:[R.jsx(Sn.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:R.jsxs(Sn.div,{className:"modal-content",layoutId:`project-${i.title}`,onClick:s=>s.stopPropagation(),initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},children:[R.jsx("div",{style:{position:"absolute",top:"1.5rem",right:"1.5rem",zIndex:100,pointerEvents:"auto"},children:R.jsx("button",{onClick:t,className:"close-btn-inner","aria-label":"Close modal",children:R.jsx(Ql,{size:28})})}),R.jsxs("div",{className:"modal-scroll-area",children:[R.jsxs("div",{className:"modal-header",children:[R.jsx("h2",{className:"modal-title",children:i.title}),R.jsx("div",{className:"modal-tags",children:i.tags.map(s=>R.jsx("span",{className:"tag-pill",children:s},s))}),R.jsx("p",{className:"modal-subtitle",children:i.description}),R.jsxs("div",{className:"modal-links",children:[i.links?.code&&R.jsxs("a",{href:i.links.code,target:"_blank",rel:"noopener noreferrer",className:"btn-modal btn-code",children:[R.jsx(a0,{size:18})," View Code"]}),i.links?.live&&R.jsxs("a",{href:i.links.live,target:"_blank",rel:"noopener noreferrer",className:"btn-modal btn-live",children:[R.jsx(bm,{size:18})," Live Demo"]}),i.links?.apk&&R.jsxs("a",{href:i.links.apk,target:"_blank",rel:"noopener noreferrer",className:"btn-modal btn-live",children:[R.jsx(bm,{size:18})," Download APK"]})]})]}),n&&R.jsxs("div",{className:"case-study-content",children:[n.problem&&R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading",children:"Problem Statement"}),R.jsx("ul",{className:"cs-list",children:n.problem.map((s,o)=>R.jsx("li",{children:s},o))})]}),n.systemOverview&&R.jsxs("div",{className:"cs-card system-overview",children:[R.jsx("h3",{className:"cs-heading",children:"System Overview"}),R.jsx("p",{className:"cs-text mb-4",children:n.systemOverview.description}),n.systemOverview.image?R.jsx("img",{src:n.systemOverview.image,alt:"System Architecture"}):R.jsx("div",{className:"diagram-placeholder",children:R.jsx("span",{className:"diagram-text",children:"Architecture Diagram Placeholder"})})]}),n.built&&R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading",children:"What I Built"}),R.jsxs("div",{className:"built-grid",children:[R.jsxs("div",{className:"built-item",children:[R.jsxs("div",{className:"built-header",children:[R.jsx(fC,{size:16})," DATA"]}),R.jsx("ul",{children:n.built.data?.map((s,o)=>R.jsx("li",{children:s},o))})]}),R.jsxs("div",{className:"built-item",children:[R.jsxs("div",{className:"built-header",children:[R.jsx(cC,{size:16})," MODELS"]}),R.jsx("ul",{children:n.built.models?.map((s,o)=>R.jsx("li",{children:s},o))})]}),R.jsxs("div",{className:"built-item",children:[R.jsxs("div",{className:"built-header",children:[R.jsx(_C,{size:16})," PIPELINES"]}),R.jsx("ul",{children:n.built.pipelines?.map((s,o)=>R.jsx("li",{children:s},o))})]}),R.jsxs("div",{className:"built-item",children:[R.jsxs("div",{className:"built-header",children:[R.jsx(NC,{size:16})," APIS / UI"]}),R.jsx("ul",{children:n.built.stack?.map((s,o)=>R.jsx("li",{children:s},o))})]})]})]}),n.decisions&&R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading",children:"Key Decisions & Tradeoffs"}),R.jsx("ul",{className:"cs-list decisions-list",children:n.decisions.map((s,o)=>R.jsx("li",{children:s},o))})]}),n.bigScreenshot&&R.jsx("div",{className:"cs-section",children:R.jsx("div",{className:"video-placeholder",style:{minHeight:"auto",border:"none",background:"transparent"},children:R.jsx("img",{src:n.bigScreenshot,alt:"Featured Screenshot",className:"screenshot-img",style:{width:"100%",height:"auto",borderRadius:"12px"}})})}),n.screenshots&&R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading",children:"Screenshots"}),R.jsx("div",{className:"screenshots-grid",children:n.screenshots.map((s,o)=>R.jsx("div",{className:"screenshot-container",children:R.jsx("img",{src:s,alt:`Screenshot ${o+1}`,className:"screenshot-img"})},o))})]}),R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading",children:"Demo Video"}),R.jsx("div",{className:"video-placeholder",children:n.video?R.jsxs("video",{controls:!0,className:"project-video",children:[R.jsx("source",{src:n.video,type:"video/mp4"}),"Your browser does not support the video tag."]}):R.jsxs("div",{className:"video-upload-prompt",children:[R.jsx("div",{className:"play-icon",children:"▶"}),R.jsx("p",{children:"Demo Video Coming Soon"}),R.jsxs("span",{className:"upload-hint",children:["Upload ",R.jsx("code",{children:"detectai-demo.mp4"})," to ",R.jsx("code",{children:"public/assets/"})]})]})})]}),n.why&&R.jsxs("div",{className:"why-box",children:[R.jsx("h4",{className:"why-title",children:"Why It Matters"}),R.jsxs("p",{className:"why-text",children:['"',n.why,'"']})]}),n.next&&R.jsxs("div",{className:"cs-section",children:[R.jsx("h3",{className:"cs-heading text-dim",children:"What I'd Improve Next"}),R.jsx("ul",{className:"cs-list dim-list",children:n.next.map((s,o)=>R.jsx("li",{children:s},o))})]})]}),!n&&R.jsx("div",{className:"empty-details",children:R.jsx("p",{children:"Full case study coming soon."})})]})]})}),R.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
            .modal-overlay {
                backdrop-filter: none; /* PERFORMANCE FIX */
                background: rgba(0, 0, 0, 0.95); /* Solid-ish background instead */
            }
            .modal-content {
                box-shadow: none; /* Remove heavy shadow */
            }
        }

        .modal-content {
          background: #0f1115;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 96%;
          max-width: 1600px; /* Full screen feel */
          height: 96vh; /* Nearly full height */
          border-radius: 16px;
          position: relative;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-scroll-area {
            overflow-y: auto;
            padding: 3rem;
            flex: 1;
        }
        
        /* Custom Scrollbar */
        .modal-scroll-area::-webkit-scrollbar { width: 8px; }
        .modal-scroll-area::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        .modal-scroll-area::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        .close-btn-inner {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 44px; height: 44px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
        }

        .close-btn-inner:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
          border-color: white;
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .modal-header {
            margin-bottom: 3rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 2rem;
        }

        .modal-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .modal-subtitle {
            font-size: 1.25rem;
            color: var(--color-text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
            max-width: 600px;
        }

        .modal-links { display: flex; gap: 1rem; }
        .btn-modal {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.6rem 1.2rem; border-radius: 8px;
          font-weight: 500; font-size: 0.9rem; text-decoration: none;
          transition: all 0.2s;
        }
        .btn-code { background: rgba(255,255,255,0.1); color: white; border: 1px solid transparent; }
        .btn-code:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.2); }
        .btn-live { background: white; color: black; }
        .btn-live:hover { opacity: 0.9; }

        .modal-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .tag-pill {
            background: rgba(147, 197, 253, 0.1);
            color: #93c5fd;
            border: 1px solid rgba(147, 197, 253, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-family: var(--font-mono);
        }

        /* Case Study Styles */
        .case-study-content { display: flex; flex-direction: column; gap: 3rem; }
        .cs-section {  }
        
        .cs-heading {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #d2a8ff; /* Accent Color */
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .cs-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .cs-list li {
            position: relative;
            padding-left: 1.5rem;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 1.05rem;
        }
        .cs-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #d2a8ff;
            font-weight: bold;
        }

        .cs-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            padding: 2rem;
        }
        
        .diagram-placeholder {
            background: rgba(0,0,0,0.3);
            border: 1px dashed rgba(255,255,255,0.2);
            border-radius: 8px;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        .diagram-text { color: var(--color-text-dim); font-size: 0.9rem; }
        .diagram-visuals { display: flex; align-items: center; gap: 1rem; opacity: 0.6; }
        .node { border: 1px solid white; padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: white; }
        .arrow { color: var(--color-text-dim); }

        .built-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
        @media (max-width: 768px) { .built-grid { grid-template-columns: 1fr; } }
        
        .built-item h4 {  }
        .built-header {
            display: flex; align-items: center; gap: 0.5rem;
            color: #93c5fd;
            font-weight: 600;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
        }
        .built-item ul { list-style: none; padding: 0; }
        .built-item li {
            color: var(--color-text-dim);
            font-size: 0.95rem;
            margin-bottom: 0.4rem;
            line-height: 1.5;
        }
        
        .why-box {
            background: rgba(255,255,255,0.08);
            border-left: 4px solid #d2a8ff;
            padding: 2rem;
            border-radius: 0 12px 12px 0;
        }
        .why-title { font-size: 1.2rem; color: white; margin-bottom: 0.5rem; font-weight: 600; }
        .why-text { font-style: italic; color: var(--color-text-secondary); font-size: 1.1rem; }
        
        .decisions-list li::before { color: #818cf8; }
        
        .text-dim { color: var(--color-text-dim); }
        .dim-list li { color: var(--color-text-dim); }
        .dim-list li::before { color: var(--color-text-dim); }
        
        .empty-details p { color: var(--color-text-dim); font-style: italic; }

        .system-overview img {
            width: 100%;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .screenshots-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .screenshots-grid .screenshot-img {
            height: 350px;
            object-fit: contain;
        }

        .screenshot-img {
            width: 100%;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.3s ease;
        }
        
        .screenshot-img:hover {
            transform: scale(1.02);
        }

        .video-placeholder {
            width: 100%;
            background: rgba(0,0,0,0.4);
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .project-video {
            width: 100%;
            max-height: 600px;
        }

        .video-upload-prompt {
            text-align: center;
            color: var(--color-text-dim);
        }
        
        .play-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
        }
        
        .upload-hint {
            display: block;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            opacity: 0.5;
        }
        
        .upload-hint code {
            background: rgba(255,255,255,0.1);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
        }
        @media (max-width: 768px) {
            .modal-content {
                width: 100%;
                height: 100%;
                border-radius: 0;
            }
            .modal-scroll-area {
                padding: 1.5rem;
            }
            .modal-title {
                font-size: 2rem;
            }
            .built-grid { 
                grid-template-columns: 1fr; 
            }
            
            .cs-card {
                padding: 1rem;
            }

            .screenshots-grid {
                grid-template-columns: 1fr; /* Full width on mobile */
            }

            .screenshots-grid .screenshot-img {
                height: auto; /* Let height adjust naturally */
                max-height: 600px; /* Cap it so it's not too crazy */
                object-fit: contain;
                background: rgba(0,0,0,0.2); /* Subtle bg for transparent images */
            }
        }
      `})]})},hU=[{title:"DetectAI",description:"Android app to detect AI-generated text and images.",image:"/assets/detectai.png",tags:["Kotlin","TF Lite","Android"],links:{code:"https://github.com/Rohan1924/DetectAI"},details:{problem:["AI-generated content is becoming harder to distinguish from human-written material.","Most detection tools are either unreliable or too technical for everyday users.","This project focuses on making AI detection accessible through a simple mobile interface."],systemOverview:{description:"A hybrid architecture combining local Android UI with a cloud-based inference engine.",image:"/assets/detectai-arch.png"},built:{data:["Mixed datasets of human-written and AI-generated text","AI-generated and real image samples"],models:["Text classification models using linguistic and statistical features","Image-based AI detection models"],pipelines:["Input preprocessing and normalization","Confidence score aggregation"],stack:["Flask REST API for inference","Android UI displaying prediction probabilities"]},decisions:["Focused on probability scores instead of binary labels for nuance","Avoided heavy on-device ML to keep app lightweight; offloaded to cloud","Prioritized usability over model complexity"],screenshots:["/assets/detectai-ui-1.png","/assets/detectai-ui-2.png"],video:"/assets/detectai-demo.mp4",why:"Gives everyday users a simple way to judge content authenticity without technical expertise.",next:["Add support for audio and video detection","Improve overall detection accuracy","Support batch analysis"]}},{title:"Seek & Play",description:"Search YouTube by meaning, not keywords. Uses GenAI and RAG to jump straight to the relevant moment.",image:"/assets/seek-and-play-ui-1.png",tags:["GenAI","RAG","Python","React"],links:{code:"https://github.com/Rohan1924/Youtube-rag-application"},details:{problem:["YouTube search rely on metadata, often missing the exact 'moment' a concept is explained.","Scrubbing through long videos to find specific information is time-consuming."],systemOverview:{description:"A RAG-powered application that indexes YouTube transcripts and allows semantic search to find exact timestamps.",image:"/assets/seek-and-play-arch.png"},built:{data:["YouTube Video Transcripts"],models:["OpenAI Embeddings","GPT-4"],pipelines:["LangChain","Langflow"],stack:["AstraDB Vector DB","Python (Backend)","React (Frontend)"]},decisions:["Used RAG (Retrieval-Augmented Generation) to ground answers in actual video content","Implemented semantic search to understand user intent beyond keyword matching"],screenshots:["/assets/seek-and-play-ui-1.png","/assets/seek-and-play-ui-2.png"],video:"/assets/seek-and-play-demo.mp4",why:"Saves hours of watch time by instantly locating the exact information needed within video content.",next:["Support for multiple languages","Browser extension integration","Summarization features"]}},{title:"PlantasticCare",description:"A community-driven platform for indoor plant care guidance.",image:"/assets/plantastic-tile.png",imageBg:"#ffffff",tags:["React","Node.js","Community"],links:{code:"https://github.com/Rohan1924/PlantasticCare",live:"https://plantasticcare.onrender.com/"},details:{problem:["Plant care advice is often scattered across forums and blogs, making it hard for beginners to find reliable info.","Existing apps often lack community interaction or offline capabilities."],systemOverview:{description:"A PWA that combines a plant library with community forums and offline-first architecture.",image:"/assets/plantastic-arch.png"},built:{data:["Plant Species Database","User-generated tips"],models:["None (Logic-based care algorithms)"],stack:["Vanilla JS","Service Workers (PWA)","IndexedDB"]},decisions:["Used vanilla JS instead of frameworks to understand fundamentals","Focused on usability over advanced personalization","Chose PWA for offline access without native app complexity"],screenshots:["/assets/plantastic-ui-library.png","/assets/plantastic-ui-care.png","/assets/plantastic-ui-forum.png"],bigScreenshot:"/assets/plantastic-tile.png",video:"/assets/plantastic-demo.mp4",why:"Turns scattered plant care advice into a structured, beginner-friendly platform with real user interaction.",next:["Add personalized care reminders","Increase Plant library","Introduce moderation tools"]}},{title:"Aadhaar N.E.X.U.S",description:"National Equity eXecution & Utilization System. A data-driven planning and early-warning system that measures digital equity.",image:"/assets/aadhaar-nexus-1.png",tags:["Streamlit","Python","Data Viz"],links:{code:"https://github.com/Rohan1924/aadhaar-nexus",live:"https://aadhaar-nexus-iyp6hfpq0io.streamlit.app/"},details:{problem:["Need to measure digital equity across 36 states/UTs and 645+ districts.","Lack of a centralized system to anticipate Aadhaar demand and service gaps.","Requirement for data-driven simulations to prioritize UIDAI interventions."],systemOverview:{description:"An interactive Streamlit dashboard that provides nationwide visibility into the Digital Equity Index (DEI), Access Health, Update Load, and Stability scores.",image:"/assets/aadhaar-nexus-2.png"},built:{data:["Digital Equity Index (DEI)","Census Data","Live KPIs"],models:["Risk Classification Algorithms","AI Recommendation Engine"],pipelines:["State to District Drill-down","Export Reports"],stack:["Streamlit (Frontend)","Python (Backend)","Plotly (Visualization)","Pandas (Data Processing)"]},decisions:["Chosen Streamlit for rapid, interactive data visualization and dashboarding","Implemented a comprehensive 'Digital Equity Index' to unify complex metrics","Designed for dark mode compatibility to ensure accessibility in all environments"],screenshots:["/assets/aadhaar-nexus-3.png","/assets/aadhaar-nexus-4.png","/assets/aadhaar-nexus-5.png"],why:"Empowers policymakers with real-time, data-driven insights to bridge the digital divide and optimize Aadhaar service delivery.",next:["Integrate real-time data feeds for dynamic updating","Expand predictive modeling for future demand forecasting","Develop mobile-responsive views for field agents"]}}],pU=()=>{const[i,t]=At.useState(null),[n,s]=At.useState(()=>typeof window<"u"?window.innerWidth<768:!1);return At.useEffect(()=>{const o=()=>s(window.innerWidth<768);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),R.jsxs("section",{id:"projects",className:"section py-20",children:[R.jsxs("div",{className:"container",children:[R.jsxs(Sn.div,{initial:n?{opacity:1,y:0}:{opacity:0,y:20},animate:n?{opacity:1,y:0}:void 0,whileInView:n?void 0:{opacity:1,y:0},viewport:n?void 0:{once:!0},transition:n?{duration:0}:{duration:.5},children:[R.jsxs("div",{className:"section-header",children:[R.jsxs("h2",{className:"section-title",children:[R.jsx("span",{className:"text-secondary",children:"02. "}),"PROJECTS"]}),R.jsx("div",{className:"line"})]}),R.jsx("h3",{className:"headline",children:"Selected Work"})]}),R.jsx("div",{className:"projects-grid",children:hU.map((o,c)=>R.jsxs(Sn.div,{className:"project-card",onClick:()=>t(o),initial:n?{opacity:1,y:0}:{opacity:0,y:50},animate:n?{opacity:1,y:0}:void 0,whileInView:n?void 0:{opacity:1,y:0},viewport:n?void 0:{once:!0},transition:n?{duration:0}:{duration:.5,delay:c*.1},children:[o.image&&R.jsx("div",{className:"card-image",style:{background:o.imageBg||"#000"},children:R.jsx("img",{src:o.image,alt:o.title})}),R.jsxs("div",{className:"card-content",children:[R.jsxs("div",{className:"card-header",children:[R.jsx("h4",{className:"project-title",children:o.title}),R.jsxs("div",{className:"project-links",children:[o.links.code&&R.jsx("a",{href:o.links.code,onClick:u=>u.stopPropagation(),children:R.jsx(a0,{size:24,color:"#d2a8ff"})}),o.links.live&&R.jsx("a",{href:o.links.live,onClick:u=>u.stopPropagation(),children:R.jsx(bm,{size:24,color:"#d2a8ff"})})]})]}),R.jsx("p",{className:"project-desc",children:o.description}),R.jsxs("div",{className:"project-footer",children:[R.jsx("div",{className:"project-tags",children:o.tags.map(u=>R.jsx("span",{className:"tag",children:u},u))}),R.jsxs("div",{className:"details-link",children:["Details ",R.jsx(C2,{size:14})]})]})]})]},c))})]}),i&&R.jsx(dU,{project:i,onClose:()=>t(null)}),R.jsx("style",{children:`
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-right: 1rem;
          color: var(--color-text-secondary);
        }
        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          flex: 1;
          max-width: 200px;
        }
        .headline {
          font-size: 3rem;
          margin-bottom: 4rem;
          font-weight: 700;
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Better for mobile */
          gap: 2rem;
        }
        
        .project-card {
           background: rgba(10, 10, 15, 0.6);
           border: 1px solid rgba(255, 255, 255, 0.08);
           border-radius: var(--radius-card);
           overflow: hidden; /* For image */
           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
           position: relative;
           display: flex;
           flex-direction: column;
           min-height: 350px;
           box-shadow: 0 4px 20px rgba(0,0,0,0.3);
           cursor: pointer;
        }
        
        .project-card:hover {
           transform: translateY(-5px);
           background: rgba(20, 20, 30, 0.8);
           border-color: rgba(255, 255, 255, 0.2);
           box-shadow: 0 15px 40px -10px rgba(0,0,0,0.6);
        }

        /* Mobile Optimizations for Performance */
        @media (max-width: 768px) {
            .project-card {
                box-shadow: none; /* remove heavy shadow */
                transition: transform 0.2s; /* simplified transition */
                will-change: transform; /* hint to browser */
                background: rgba(10, 10, 15, 0.9); /* higher opacity to avoid heavy blending */
            }
            .project-card:hover {
                transform: none; /* disable hover move on scroll */
                box-shadow: none;
            }
        }
        
        .card-image {
            height: 220px; /* Taller image cover */
            width: 100%;
            background: #000; /* Default background */
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Changed from cover to fit full image */
            opacity: 0.9;
            transition: opacity 0.3s;
        }
        .project-card:hover .card-image img { opacity: 1; }

        .card-content {
            padding: 1.25rem; /* Less padding for text area */
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          letter-spacing: -0.01em;
        }
        
        .project-links {
          display: flex;
          gap: 0.75rem;
          color: var(--color-text-secondary);
        }
        
        .project-links a:hover {
          color: white;
        }
        
        .project-desc {
          color: var(--color-text-secondary);
          margin-bottom: 1rem; /* Less space below description */
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: auto;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tag {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--color-text-dim);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.2em 0.8em;
          border-radius: 12px;
        }
        
        .details-link {
            font-size: 0.85rem;
            color: #d2a8ff;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-weight: 500;
        }
      `})]})},ky=[{title:"Amagi Media Technology",issuer:"Amagi Learning Hub",year:"2025",type:"Course",image:"/assets/certificates/cert1.jpeg"},{title:"DecodeAI",issuer:"Variance Club",year:"2024",type:"Participation",image:"/assets/certificates/cert2.jpeg"},{title:"VISA hackathon",issuer:"IIT Madras",year:"2024",type:"Achievement",image:"/assets/certificates/cert4.jpeg"}],mU=({onViewAll:i})=>{const[t,n]=At.useState(null);return za.useEffect(()=>{const s=o=>{o.key==="Escape"&&n(null)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]),R.jsxs("section",{id:"certifications",className:"section",children:[R.jsxs("div",{className:"container",children:[R.jsxs(Sn.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[R.jsxs("div",{className:"section-header",children:[R.jsxs("h2",{className:"section-title",children:[R.jsx("span",{className:"text-secondary",children:"03. "}),"PARTICIPATION AND ACHIEVEMENTS"]}),R.jsx("div",{className:"line"})]}),R.jsx("h3",{className:"headline",children:"Certificates"})]}),R.jsx("div",{className:"certs-grid",children:ky.map((s,o)=>R.jsxs(Sn.div,{className:"cert-card",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:o*.1},onClick:()=>n(s),children:[R.jsxs("div",{className:"cert-image-wrapper",children:[R.jsx("img",{src:s.image,alt:s.title,className:"cert-cover"}),R.jsx("div",{className:"badge",children:s.type})]}),R.jsxs("div",{className:"cert-content-wrapper",children:[R.jsxs("div",{className:"cert-info",children:[R.jsx("h4",{className:"cert-title",children:s.title}),R.jsx("p",{className:"cert-issuer",children:s.issuer}),R.jsx("span",{className:"cert-year",children:s.year})]}),R.jsx("div",{className:"hover-indicator",children:R.jsx(R2,{size:20})})]})]},o))}),R.jsx("div",{className:"view-all",children:R.jsxs("button",{onClick:i,className:"btn-text",children:["View all certifications ",R.jsx(C2,{size:16})]})})]}),R.jsx(Sf,{children:t&&R.jsx(Sn.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>n(null),children:R.jsxs(Sn.div,{className:"modal-content",initial:{scale:.8},animate:{scale:1},exit:{scale:.8},onClick:s=>s.stopPropagation(),children:[R.jsx("button",{className:"close-btn",onClick:()=>n(null),children:R.jsx(Ql,{size:24})}),R.jsx("img",{src:ky.find(s=>s.title===t.title)?.image,alt:t.title,className:"full-image"})]})})}),R.jsx("style",{children:`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .cert-card {
          background: rgba(10, 10, 15, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .cert-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .cert-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cert-card:hover .cert-cover {
          transform: scale(1.05);
        }
        
        .cert-card:hover {
          background: rgba(20, 20, 30, 0.75);
          border-color: var(--color-primary);
          transform: translateY(-5px);
        }
        
        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          color: var(--color-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          border: 1px solid rgba(0, 204, 255, 0.2);
        }
        
        .cert-content-wrapper {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        

        
        .cert-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .cert-issuer {
          color: var(--color-text-dim);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .cert-year {
          font-family: var(--font-mono);
          color: var(--color-text-dim);
          font-size: 0.85rem;
        }

        .hover-indicator {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
          opacity: 0.5;
          transition: all 0.3s ease;
          color: var(--color-primary);
        }

        .cert-card:hover .hover-indicator {
          opacity: 1;
          transform: translateX(5px);
        }

        .cert-card:hover .hover-indicator {
          opacity: 1;
          transform: scale(1);
        }
        
        .view-all {
          text-align: center;
          margin-top: 2rem;
        }
        
        .btn-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.8rem 2rem;
          border-radius: 30px;
          transition: all 0.3s ease;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 1rem;
          cursor: pointer;
        }
        
        .btn-text:hover {
          border-color: var(--color-text);
          background: rgba(255, 255, 255, 0.05);
        }

        /* Modal Styles - Reused from AllCertifications for consistency */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .full-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
      `})]})},gU=()=>R.jsxs("section",{id:"about",className:"section",children:[R.jsx("div",{className:"container",children:R.jsxs(Sn.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[R.jsxs("div",{className:"section-header",children:[R.jsxs("h2",{className:"section-title",children:[R.jsx("span",{className:"text-secondary",children:"04. "}),"ABOUT"]}),R.jsx("div",{className:"line"})]}),R.jsx("h3",{className:"headline",children:"About Me"}),R.jsxs("div",{className:"about-content",children:[R.jsx("p",{children:"I’m a Computer Science (Data Science) undergraduate at BMS College of Engineering, graduating in 2027. I’m interested in building machine learning and generative AI systems that are designed for real-world conditions, not just controlled datasets."}),R.jsx("p",{children:"I’m particularly drawn to problems where data is imperfect and systems have to operate under real constraints. I enjoy working on projects where modeling decisions are closely tied to system design, reliability, and long-term maintainability. Much of my work lies at the intersection of data science, applied machine learning, and backend development, with a focus on monitoring, prediction, and automated decision workflows."}),R.jsx("p",{children:"I like working across the full lifecycle of a project—from transforming raw data and evaluating models to deploying them behind APIs and integrating them into larger systems. I care about writing clear, understandable code and building solutions that remain useful outside of experimental environments."}),R.jsx("p",{children:"I’m currently seeking data science, machine learning, and generative AI roles where I can take on meaningful problems, learn from experienced engineers, and help deliver systems that see real usage."})]})]})}),R.jsx("style",{children:`
        .section {
          padding: 6rem 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-right: 1rem;
          color: var(--color-text-secondary);
        }
        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          flex: 1;
          max-width: 200px;
        }
        .headline {
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 700;
          color: white;
        }
        
        .about-content {
          max-width: 800px;
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .about-content p {
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
           .headline { font-size: 2.5rem; }
        }
      `})]});class nc{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const vU=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,t)=>Promise.resolve(localStorage.setItem(i,t)),remove:i=>Promise.resolve(localStorage.removeItem(i))}},In={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:vU()},I0=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{},xU=(i,t="https://api.emailjs.com")=>{if(!i)return;const n=I0(i);In.publicKey=n.publicKey,In.blockHeadless=n.blockHeadless,In.storageProvider=n.storageProvider,In.blockList=n.blockList,In.limitRate=n.limitRate,In.origin=n.origin||t},mM=async(i,t,n={})=>{const s=await fetch(In.origin+i,{method:"POST",headers:n,body:t}),o=await s.text(),c=new nc(s.status,o);if(s.ok)return c;throw c},gM=(i,t,n)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},_U=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},vM=i=>i.webdriver||!i.languages||i.languages.length===0,xM=()=>new nc(451,"Unavailable For Headless Browser"),yU=(i,t)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},SU=i=>!i.list?.length||!i.watchVariable,MU=(i,t)=>i instanceof FormData?i.get(t):i[t],_M=(i,t)=>{if(SU(i))return!1;yU(i.list,i.watchVariable);const n=MU(t,i.watchVariable);return typeof n!="string"?!1:i.list.includes(n)},yM=()=>new nc(403,"Forbidden"),bU=(i,t)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},EU=async(i,t,n)=>{const s=Number(await n.get(i)||0);return t-Date.now()+s},SM=async(i,t,n)=>{if(!t.throttle||!n)return!1;bU(t.throttle,t.id);const s=t.id||i;return await EU(s,t.throttle,n)>0?!0:(await n.set(s,Date.now().toString()),!1)},MM=()=>new nc(429,"Too Many Requests"),TU=async(i,t,n,s)=>{const o=I0(s),c=o.publicKey||In.publicKey,u=o.blockHeadless||In.blockHeadless,f=o.storageProvider||In.storageProvider,p={...In.blockList,...o.blockList},h={...In.limitRate,...o.limitRate};return u&&vM(navigator)?Promise.reject(xM()):(gM(c,i,t),_U(n),n&&_M(p,n)?Promise.reject(yM()):await SM(location.pathname,h,f)?Promise.reject(MM()):mM("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:i,template_id:t,template_params:n}),{"Content-type":"application/json"}))},AU=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},wU=i=>typeof i=="string"?document.querySelector(i):i,CU=async(i,t,n,s)=>{const o=I0(s),c=o.publicKey||In.publicKey,u=o.blockHeadless||In.blockHeadless,f=In.storageProvider||o.storageProvider,p={...In.blockList,...o.blockList},h={...In.limitRate,...o.limitRate};if(u&&vM(navigator))return Promise.reject(xM());const g=wU(n);gM(c,i,t),AU(g);const v=new FormData(g);return _M(p,v)?Promise.reject(yM()):await SM(location.pathname,h,f)?Promise.reject(MM()):(v.append("lib_version","4.4.1"),v.append("service_id",i),v.append("template_id",t),v.append("user_id",c),mM("/api/v1.0/email/send-form",v))},RU={init:xU,send:TU,sendForm:CU,EmailJSResponseStatus:nc},DU=({onOpenResume:i})=>{const t=At.useRef(),[n,s]=At.useState(!1),o=c=>{c.preventDefault(),s(!0),RU.sendForm("service_dvrfk4u","template_uob9ngw",t.current,{publicKey:"NlirmtwcYsNh1zDj1"}).then(()=>{alert("Message sent successfully 🚀"),t.current.reset(),s(!1)}).catch(u=>{console.error("FAILED...",u),alert(`Failed to send message ❌. Error: ${u.text||u.message||u}`),s(!1)})};return R.jsxs("section",{id:"contact",className:"section",children:[R.jsxs("div",{className:"container",children:[R.jsxs(Sn.div,{className:"section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[R.jsxs("h2",{className:"section-title",children:[R.jsx("span",{className:"text-secondary",children:"05. "}),"CONTACT"]}),R.jsx("div",{className:"line"})]}),R.jsxs(Sn.div,{className:"contact-content",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[R.jsxs("div",{className:"contact-info",children:[R.jsx("h3",{className:"headline",children:"Let's Connect"}),R.jsx("p",{className:"contact-desc",children:"I'm always interested in hearing about new projects and opportunities in AI/ML and Data Science."}),R.jsxs("div",{className:"info-items",children:[R.jsxs("div",{className:"info-item",children:[R.jsx(TC,{className:"text-primary",size:24}),R.jsx("a",{href:"mailto:rr2rohan@gmail.com",className:"info-text",children:"rr2rohan@gmail.com"})]}),R.jsxs("div",{className:"info-item",children:[R.jsx(wC,{className:"text-primary",size:24}),R.jsx("span",{className:"info-text",children:"Bangalore, India"})]}),R.jsxs("div",{className:"info-item",children:[R.jsx(gC,{className:"text-primary",size:24}),R.jsx("a",{href:"/resume.pdf",onClick:c=>{c.preventDefault(),i&&i()},className:"info-text",children:"View Resume"})]})]}),R.jsxs("div",{className:"social-links",children:[R.jsx("a",{href:"https://github.com/Rohan1924",className:"social-icon",children:R.jsx(a0,{size:24})}),R.jsx("a",{href:"https://www.linkedin.com/in/rohan-rupesh-b5a200203",className:"social-icon",children:R.jsx(SC,{size:24})})]})]}),R.jsxs("form",{className:"contact-form",ref:t,onSubmit:o,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"name",className:"code-label",children:"Name"}),R.jsx("input",{type:"text",id:"name",name:"name",className:"code-input",placeholder:"Your Name",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",className:"code-label",children:"Email"}),R.jsx("input",{type:"email",id:"email",name:"email",className:"code-input",placeholder:"Your Email",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"message",className:"code-label",children:"Message"}),R.jsx("textarea",{id:"message",name:"message",className:"code-input textarea",placeholder:"Your Message",required:!0})]}),R.jsxs("button",{type:"submit",className:"submit-btn",disabled:n,children:[R.jsx("span",{children:n?"Sending...":"Send Message"}),n?R.jsx(bC,{className:"animate-spin",size:16}):R.jsx(PC,{size:16})]})]})]})]}),R.jsx("style",{children:`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2rem;
        }
        
        .contact-desc {
          color: var(--color-text-dim);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 400px;
        }
        
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .info-text {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: #FF4500; /* Reddit Red */
        }
        
        .info-text:hover {
          color: var(--color-primary);
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-icon {
          color: var(--color-text-dim);
          transition: all 0.3s;
        }
        
        .social-icon:hover {
          color: var(--color-secondary);
          transform: translateY(-3px);
          text-shadow: var(--glow-secondary);
        }
        
        .contact-form {
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .code-label {
          display: block;
          font-family: var(--font-mono);
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        .code-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-primary);
          font-family: var(--font-mono);
          font-size: 1rem;
          padding: 0.5rem 0;
          outline: none;
        }
        
        .code-input:focus {
          border-bottom-color: var(--color-primary);
          box-shadow: 0 1px 0 0 var(--color-primary);
        }
        
        .code-input::placeholder {
          color: rgba(255, 255, 255, 0.1);
        }
        
        .textarea {
          min-height: 100px;
          resize: vertical;
        }
        
        .submit-btn {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text);
          border: 1px solid var(--color-primary);
          padding: 0.8rem 2rem;
          font-family: var(--font-mono);
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: 1rem;
        }
        
        .submit-btn:hover {
          background: var(--color-primary);
          color: black;
          box-shadow: var(--glow-primary);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .contact-content { grid-template-columns: 1fr; gap: 2rem; }
        }
      `})]})},LU=[{id:1,image:"/assets/certificates/cert1.jpeg",title:"Certificate 1"},{id:2,image:"/assets/certificates/cert2.jpeg",title:"Certificate 2"},{id:4,image:"/assets/certificates/cert4.jpeg",title:"Certificate 4"},{id:5,image:"/assets/certificates/cert5.jpeg",title:"Certificate 5"},{id:6,image:"/assets/certificates/cert6.jpeg",title:"Certificate 6"},{id:7,image:"/assets/certificates/cert7.jpeg",title:"Certificate 7"},{id:3,image:"/assets/certificates/cert3.jpeg",title:"Certificate 3"}],NU=({onBack:i})=>{const[t,n]=At.useState(null);return za.useEffect(()=>{const s=o=>{o.key==="Escape"&&(t?n(null):i())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[t,i]),R.jsxs("section",{className:"section all-certs-section",children:[R.jsxs("div",{className:"container",children:[R.jsxs("button",{onClick:i,className:"back-btn",children:[R.jsx(rC,{size:20})," Back to Home"]}),R.jsxs(Sn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[R.jsx("h2",{className:"section-title",children:"ALL CERTIFICATIONS"}),R.jsx("div",{className:"line"})]}),R.jsx("div",{className:"certs-grid-full",children:LU.map((s,o)=>R.jsx(Sn.div,{className:"cert-card-full",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3,delay:o*.05},onClick:()=>n(s),children:R.jsxs("div",{className:"cert-image-container",children:[R.jsx("img",{src:s.image,alt:s.title,className:"cert-thumb"}),R.jsx("div",{className:"overlay",children:R.jsx(R2,{size:24,color:"white"})})]})},s.id))})]}),R.jsx(Sf,{children:t&&R.jsx(Sn.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>n(null),children:R.jsxs(Sn.div,{className:"modal-content",initial:{scale:.8},animate:{scale:1},exit:{scale:.8},onClick:s=>s.stopPropagation(),children:[R.jsx("button",{className:"close-btn",onClick:()=>n(null),children:R.jsx(Ql,{size:24})}),R.jsx("img",{src:t.image,alt:t.title,className:"full-image"})]})})}),R.jsx("style",{children:`
        .all-certs-section {
          padding-top: 8rem;
          padding-bottom: 4rem;
          min-height: 100vh;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-family: var(--font-mono);
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        
        .back-btn:hover {
          color: var(--color-primary);
        }

        .section-title {
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .certs-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .cert-card-full {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.2s, border-color 0.2s;
        }

        .cert-card-full:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .cert-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
        }

        .cert-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cert-card-full:hover .overlay {
          opacity: 1;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .full-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
      `})]})},UU=({isOpen:i,onClose:t})=>(At.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[i]),i?R.jsx(Sf,{children:R.jsxs(Sn.div,{className:"resume-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:[R.jsxs("div",{className:"resume-container",children:[R.jsxs("div",{className:"resume-controls",children:[R.jsxs("a",{href:"/resume.pdf",download:"Rohan_Resume.pdf",className:"control-btn download-btn",onClick:n=>n.stopPropagation(),children:[R.jsx(hC,{size:20}),R.jsx("span",{children:"Download"})]}),R.jsx("button",{className:"control-btn close-btn",onClick:t,"aria-label":"Close",children:R.jsx(Ql,{size:24})})]}),R.jsx("div",{className:"resume-content",onClick:n=>n.stopPropagation(),children:R.jsx("iframe",{src:"/resume.pdf",title:"Resume",className:"resume-iframe"})})]}),R.jsx("style",{children:`
            .resume-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(8px);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2rem;
            }

            .resume-container {
                width: 100%;
                max-width: 1000px;
                height: 90vh;
                display: flex;
                flex-direction: column;
                position: relative;
            }

            .resume-controls {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .control-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: var(--font-mono);
                font-size: 0.9rem;
            }

            .control-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }

            .download-btn {
                text-decoration: none;
                background: var(--color-primary);
                color: black;
                border: none;
                font-weight: 600;
            }

            .download-btn:hover {
                background: white;
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
            }

            .close-btn {
                padding: 0.5rem;
            }

            .resume-content {
                flex: 1;
                background: #1a1a1a;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .resume-iframe {
                width: 100%;
                height: 100%;
                border: none;
            }

            @media (max-width: 768px) {
                .resume-modal-overlay {
                    padding: 1rem;
                }
                .resume-container {
                    height: 100%;
                }
            }
        `})]})}):null);function PU(){const[i,t]=At.useState("home"),[n,s]=At.useState(!1);return R.jsxs(IC,{view:i,setView:t,onOpenResume:()=>s(!0),children:[i==="home"?R.jsxs(R.Fragment,{children:[R.jsx(NN,{}),R.jsx(fU,{}),R.jsx(pU,{}),R.jsx(mU,{onViewAll:()=>{window.scrollTo(0,0),t("certifications")}}),R.jsx(gU,{}),R.jsx(DU,{onOpenResume:()=>s(!0)})]}):R.jsx(NU,{onBack:()=>{t("home"),setTimeout(()=>{const o=document.getElementById("certifications");o&&o.scrollIntoView()},100)}}),R.jsx(UU,{isOpen:n,onClose:()=>s(!1)})]})}F3.createRoot(document.getElementById("root")).render(R.jsx(At.StrictMode,{children:R.jsx(PU,{})}));
