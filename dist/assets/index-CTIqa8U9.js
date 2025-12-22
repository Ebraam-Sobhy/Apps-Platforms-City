(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Oy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yd={exports:{}},Qo={};var o_;function Py(){if(o_)return Qo;o_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Qo.Fragment=e,Qo.jsx=i,Qo.jsxs=i,Qo}var l_;function Iy(){return l_||(l_=1,yd.exports=Py()),yd.exports}var ce=Iy(),Md={exports:{}},ct={};var c_;function zy(){if(c_)return ct;c_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(N,ee,ve){this.props=N,this.context=ee,this.refs=y,this.updater=ve||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=v.prototype;function C(N,ee,ve){this.props=N,this.context=ee,this.refs=y,this.updater=ve||b}var L=C.prototype=new D;L.constructor=C,T(L,v.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(N,ee,ve){var Ae=ve.ref;return{$$typeof:s,type:N,key:ee,ref:Ae!==void 0?Ae:null,props:ve}}function U(N,ee){return A(N.type,ee,N.props)}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function V(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ve){return ee[ve]})}var X=/\/+/g;function ie(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):ee.toString(36)}function ae(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,ee,ve,Ae,Pe){var Q=typeof N;(Q==="undefined"||Q==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(Q){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case s:case e:ue=!0;break;case _:return ue=N._init,P(ue(N._payload),ee,ve,Ae,Pe)}}if(ue)return Pe=Pe(N),ue=Ae===""?"."+ie(N,0):Ae,z(Pe)?(ve="",ue!=null&&(ve=ue.replace(X,"$&/")+"/"),P(Pe,ee,ve,"",function(we){return we})):Pe!=null&&(O(Pe)&&(Pe=U(Pe,ve+(Pe.key==null||N&&N.key===Pe.key?"":(""+Pe.key).replace(X,"$&/")+"/")+ue)),ee.push(Pe)),1;ue=0;var be=Ae===""?".":Ae+":";if(z(N))for(var De=0;De<N.length;De++)Ae=N[De],Q=be+ie(Ae,De),ue+=P(Ae,ee,ve,Q,Pe);else if(De=M(N),typeof De=="function")for(N=De.call(N),De=0;!(Ae=N.next()).done;)Ae=Ae.value,Q=be+ie(Ae,De++),ue+=P(Ae,ee,ve,Q,Pe);else if(Q==="object"){if(typeof N.then=="function")return P(ae(N),ee,ve,Ae,Pe);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(N,ee,ve){if(N==null)return N;var Ae=[],Pe=0;return P(N,Ae,"","",function(Q){return ee.call(ve,Q,Pe++)}),Ae}function $(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ve){(N._status===0||N._status===-1)&&(N._status=1,N._result=ve)},function(ve){(N._status===0||N._status===-1)&&(N._status=2,N._result=ve)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},fe={map:H,forEach:function(N,ee,ve){H(N,function(){ee.apply(this,arguments)},ve)},count:function(N){var ee=0;return H(N,function(){ee++}),ee},toArray:function(N){return H(N,function(ee){return ee})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ct.Activity=g,ct.Children=fe,ct.Component=v,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=C,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},ct.cache=function(N){return function(){return N.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(N,ee,ve){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=T({},N.props),Pe=N.key;if(ee!=null)for(Q in ee.key!==void 0&&(Pe=""+ee.key),ee)!j.call(ee,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&ee.ref===void 0||(Ae[Q]=ee[Q]);var Q=arguments.length-2;if(Q===1)Ae.children=ve;else if(1<Q){for(var ue=Array(Q),be=0;be<Q;be++)ue[be]=arguments[be+2];Ae.children=ue}return A(N.type,Pe,Ae)},ct.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ct.createElement=function(N,ee,ve){var Ae,Pe={},Q=null;if(ee!=null)for(Ae in ee.key!==void 0&&(Q=""+ee.key),ee)j.call(ee,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=ee[Ae]);var ue=arguments.length-2;if(ue===1)Pe.children=ve;else if(1<ue){for(var be=Array(ue),De=0;De<ue;De++)be[De]=arguments[De+2];Pe.children=be}if(N&&N.defaultProps)for(Ae in ue=N.defaultProps,ue)Pe[Ae]===void 0&&(Pe[Ae]=ue[Ae]);return A(N,Q,Pe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(N){return{$$typeof:h,render:N}},ct.isValidElement=O,ct.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:$}},ct.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},ct.startTransition=function(N){var ee=F.T,ve={};F.T=ve;try{var Ae=N(),Pe=F.S;Pe!==null&&Pe(ve,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(B,pe)}catch(Q){pe(Q)}finally{ee!==null&&ve.types!==null&&(ee.types=ve.types),F.T=ee}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(N){return F.H.use(N)},ct.useActionState=function(N,ee,ve){return F.H.useActionState(N,ee,ve)},ct.useCallback=function(N,ee){return F.H.useCallback(N,ee)},ct.useContext=function(N){return F.H.useContext(N)},ct.useDebugValue=function(){},ct.useDeferredValue=function(N,ee){return F.H.useDeferredValue(N,ee)},ct.useEffect=function(N,ee){return F.H.useEffect(N,ee)},ct.useEffectEvent=function(N){return F.H.useEffectEvent(N)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(N,ee,ve){return F.H.useImperativeHandle(N,ee,ve)},ct.useInsertionEffect=function(N,ee){return F.H.useInsertionEffect(N,ee)},ct.useLayoutEffect=function(N,ee){return F.H.useLayoutEffect(N,ee)},ct.useMemo=function(N,ee){return F.H.useMemo(N,ee)},ct.useOptimistic=function(N,ee){return F.H.useOptimistic(N,ee)},ct.useReducer=function(N,ee,ve){return F.H.useReducer(N,ee,ve)},ct.useRef=function(N){return F.H.useRef(N)},ct.useState=function(N){return F.H.useState(N)},ct.useSyncExternalStore=function(N,ee,ve){return F.H.useSyncExternalStore(N,ee,ve)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.2.3",ct}var u_;function op(){return u_||(u_=1,Md.exports=zy()),Md.exports}var se=op(),Ed={exports:{}},Jo={},bd={exports:{}},Td={};var f_;function Fy(){return f_||(f_=1,(function(s){function e(P,H){var $=P.length;P.push(H);e:for(;0<$;){var pe=$-1>>>1,fe=P[pe];if(0<l(fe,H))P[pe]=H,P[$]=fe,$=pe;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],$=P.pop();if($!==H){P[0]=$;e:for(var pe=0,fe=P.length,N=fe>>>1;pe<N;){var ee=2*(pe+1)-1,ve=P[ee],Ae=ee+1,Pe=P[Ae];if(0>l(ve,$))Ae<fe&&0>l(Pe,ve)?(P[pe]=Pe,P[Ae]=$,pe=Ae):(P[pe]=ve,P[ee]=$,pe=ee);else if(Ae<fe&&0>l(Pe,$))P[pe]=Pe,P[Ae]=$,pe=Ae;else break e}}return H}function l(P,H){var $=P.sortIndex-H.sortIndex;return $!==0?$:P.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,x=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=P)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(P){if(T=!1,L(P),!b)if(i(m)!==null)b=!0,B||(B=!0,V());else{var H=i(p);H!==null&&ae(z,H.startTime-P)}}var B=!1,F=-1,j=5,A=-1;function U(){return y?!0:!(s.unstable_now()-A<j)}function O(){if(y=!1,B){var P=s.unstable_now();A=P;var H=!0;try{e:{b=!1,T&&(T=!1,D(F),F=-1),M=!0;var $=x;try{t:{for(L(P),g=i(m);g!==null&&!(g.expirationTime>P&&U());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,x=g.priorityLevel;var fe=pe(g.expirationTime<=P);if(P=s.unstable_now(),typeof fe=="function"){g.callback=fe,L(P),H=!0;break t}g===i(m)&&r(m),L(P)}else r(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&ae(z,N.startTime-P),H=!1}}break e}finally{g=null,x=$,M=!1}H=void 0}}finally{H?V():B=!1}}}var V;if(typeof C=="function")V=function(){C(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ie=X.port2;X.port1.onmessage=O,V=function(){ie.postMessage(null)}}else V=function(){v(O,0)};function ae(P,H){F=v(function(){P(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var $=x;x=H;try{return P()}finally{x=$}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=x;x=P;try{return H()}finally{x=$}},s.unstable_scheduleCallback=function(P,H,$){var pe=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pe+$:pe):$=pe,P){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,P={id:_++,callback:H,priorityLevel:P,startTime:$,expirationTime:fe,sortIndex:-1},$>pe?(P.sortIndex=$,e(p,P),i(m)===null&&P===i(p)&&(T?(D(F),F=-1):T=!0,ae(z,$-pe))):(P.sortIndex=fe,e(m,P),b||M||(b=!0,B||(B=!0,V()))),P},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(P){var H=x;return function(){var $=x;x=H;try{return P.apply(this,arguments)}finally{x=$}}}})(Td)),Td}var d_;function By(){return d_||(d_=1,bd.exports=Fy()),bd.exports}var Ad={exports:{}},Pn={};var h_;function Hy(){if(h_)return Pn;h_=1;var s=op();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Pn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Pn.requestFormReset=function(m){r.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var p_;function Gy(){if(p_)return Ad.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=Hy(),Ad.exports}var m_;function Vy(){if(m_)return Jo;m_=1;var s=By(),e=op(),i=Gy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,w=u.child;w;){if(w===a){S=!0,a=u,o=d;break}if(w===o){S=!0,o=u,a=d;break}w=w.sibling}if(!S){for(w=d.child;w;){if(w===a){S=!0,a=d,o=u;break}if(w===o){S=!0,o=d,a=u;break}w=w.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case C:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ie(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ie(t(n))}catch{}}return null}var ae=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pe=[],fe=-1;function N(t){return{current:t}}function ee(t){0>fe||(t.current=pe[fe],pe[fe]=null,fe--)}function ve(t,n){fe++,pe[fe]=t.current,t.current=n}var Ae=N(null),Pe=N(null),Q=N(null),ue=N(null);function be(t,n){switch(ve(Q,n),ve(Pe,t),ve(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=D0(n),t=U0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ae),ve(Ae,t)}function De(){ee(Ae),ee(Pe),ee(Q)}function we(t){t.memoizedState!==null&&ve(ue,t);var n=Ae.current,a=U0(n,t.type);n!==a&&(ve(Pe,t),ve(Ae,a))}function We(t){Pe.current===t&&(ee(Ae),ee(Pe)),ue.current===t&&(ee(ue),Yo._currentValue=$)}var vt,it;function at(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+it}var _t=!1;function st(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(he){var le=he}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(he){le=he}t.call(Se.prototype)}}else{try{throw Error()}catch(he){le=he}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],w=d[1];if(S&&w){var G=S.split(`
`),ne=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ne.length)for(o=G.length-1,u=ne.length-1;1<=o&&0<=u&&G[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ne[u]){var ge=`
`+G[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return at("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,It=s.unstable_cancelCallback,Ze=s.unstable_shouldYield,I=s.unstable_requestPaint,E=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,_e=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,me=s.unstable_NormalPriority,Qe=s.unstable_LowPriority,Le=s.unstable_IdlePriority,qe=s.log,rt=s.unstable_setDisableYieldValue,Te=null,Re=null;function Ge(t){if(typeof qe=="function"&&rt(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var Be=Math.clz32?Math.clz32:q,Ne=Math.log,dt=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Ne(t)/dt|0)|0}var Ie=256,Ce=262144,He=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Ee(o):(S&=w,S!==0?u=Ee(S):a||(a=w&~t,a!==0&&(u=Ee(a))))):(w=o&~d,w!==0?u=Ee(w):S!==0?u=Ee(S):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=He;return He<<=1,(He&62914560)===0&&(He=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mi(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,ne=t.hiddenUpdates;for(a=S&~a;0<a;){var ge=31-Be(a),Se=1<<ge;w[ge]=0,G[ge]=-1;var le=ne[ge];if(le!==null)for(ne[ge]=null,ge=0;ge<le.length;ge++){var he=le[ge];he!==null&&(he.lane&=-536870913)}a&=~Se}o!==0&&Ml(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function Ml(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ao(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zr(t,n){var a=n&-n;return a=(a&42)!==0?1:ro(a),(a&(t.suspendedLanes|n))!==0?0:a}function ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function so(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:e_(t.type))}function Pi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var li=Math.random().toString(36).slice(2),cn="__reactFiber$"+li,Mn="__reactProps$"+li,Ei="__reactContainer$"+li,Qr="__reactEvents$"+li,Jr="__reactListeners$"+li,El="__reactHandles$"+li,oo="__reactResources$"+li,dr="__reactMarker$"+li;function lo(t){delete t[cn],delete t[Mn],delete t[Qr],delete t[Jr],delete t[El]}function Da(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ei]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F0(t);t!==null;){if(a=t[cn])return a;t=F0(t)}return n}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[cn]||t[Ei]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function La(t){var n=t[oo];return n||(n=t[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[dr]=!0}var Z=new Set,de={};function oe(t,n){J(t,n),J(t+"Capture",n)}function J(t,n){for(de[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},ze={};function ke(t){return Xt.call(ze,t)?!0:Xt.call(Ve,t)?!1:Oe.test(t)?ze[t]=!0:(Ve[t]=!0,!1)}function Ye(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){if(!t._valueTracker){var n=Nt(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function zt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function lt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,o,u,d,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?bn(t,S,tt(n)):a!=null?bn(t,S,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+tt(w):t.removeAttribute("name")}function Qi(t,n,a,o,u,d,S,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Zt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Zt(t)}function bn(t,n,a){n==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Bt(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ae(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Zt(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $r(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&wn(t,d,n[d])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Ux.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var _u=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var es=null,ts=null;function Cp(t){var n=Ua(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Mn]||null;if(!u)throw Error(r(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&zt(o)}break e;case"textarea":Bt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var xu=!1;function Dp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(es!==null||ts!==null)&&(fc(),es&&(n=es,t=ts,ts=es=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function co(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if($i)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Su=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Su=!1}var Na=null,yu=null,Tl=null;function Up(){if(Tl)return Tl;var t,n=yu,a=n.length,o,u="value"in Na?Na.value:Na.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return Tl=u.slice(t,1<o?1-o:void 0)}function Al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Lp(){return!1}function kn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?wl:Lp,this.isPropagationStopped=Lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=kn(pr),fo=g({},pr,{view:0,detail:0}),Lx=kn(fo),Mu,Eu,ho,Cl=g({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Mu=t.screenX-ho.screenX,Eu=t.screenY-ho.screenY):Eu=Mu=0,ho=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Np=kn(Cl),Nx=g({},Cl,{dataTransfer:0}),Ox=kn(Nx),Px=g({},fo,{relatedTarget:0}),bu=kn(Px),Ix=g({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=kn(Ix),Fx=g({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=kn(Fx),Hx=g({},pr,{data:0}),Op=kn(Hx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kx[t])?!!n[t]:!1}function Tu(){return Xx}var Wx=g({},fo,{key:function(t){if(t.key){var n=Gx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qx=kn(Wx),Yx=g({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=kn(Yx),jx=g({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Zx=kn(jx),Kx=g({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=kn(Kx),Jx=g({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=kn(Jx),eS=g({},pr,{newState:0,oldState:0}),tS=kn(eS),nS=[9,13,27,32],Au=$i&&"CompositionEvent"in window,po=null;$i&&"documentMode"in document&&(po=document.documentMode);var iS=$i&&"TextEvent"in window&&!po,Ip=$i&&(!Au||po&&8<po&&11>=po),zp=" ",Fp=!1;function Bp(t,n){switch(t){case"keyup":return nS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function aS(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Fp=!0,zp);case"textInput":return t=n.data,t===zp&&Fp?null:t;default:return null}}function rS(t,n){if(ns)return t==="compositionend"||!Au&&Bp(t,n)?(t=Up(),Tl=yu=Na=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sS[t.type]:n==="textarea"}function Vp(t,n,a,o){es?ts?ts.push(o):ts=[o]:es=o,n=vc(n,"onChange"),0<n.length&&(a=new Rl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var mo=null,go=null;function oS(t){b0(t,0)}function Dl(t){var n=hr(t);if(zt(n))return t}function kp(t,n){if(t==="change")return n}var Xp=!1;if($i){var wu;if($i){var Ru="oninput"in document;if(!Ru){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Ru=typeof Wp.oninput=="function"}wu=Ru}else wu=!1;Xp=wu&&(!document.documentMode||9<document.documentMode)}function qp(){mo&&(mo.detachEvent("onpropertychange",Yp),go=mo=null)}function Yp(t){if(t.propertyName==="value"&&Dl(go)){var n=[];Vp(n,go,t,vu(t)),Dp(oS,n)}}function lS(t,n,a){t==="focusin"?(qp(),mo=n,go=a,mo.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(go)}function uS(t,n){if(t==="click")return Dl(n)}function fS(t,n){if(t==="input"||t==="change")return Dl(n)}function dS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:dS;function _o(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Je(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hS=$i&&"documentMode"in document&&11>=document.documentMode,is=null,Du=null,vo=null,Uu=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||is==null||is!==Je(o)||(o=is,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=vc(Du,"onSelect"),0<o.length&&(n=new Rl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=is)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var as={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Lu={},$p={};$i&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function gr(t){if(Lu[t])return Lu[t];if(!as[t])return t;var n=as[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Lu[t]=n[a];return t}var em=gr("animationend"),tm=gr("animationiteration"),nm=gr("animationstart"),pS=gr("transitionrun"),mS=gr("transitionstart"),gS=gr("transitioncancel"),im=gr("transitionend"),am=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Ti(t,n){am.set(t,n),oe(n,[t])}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],rs=0,Ou=0;function Ll(){for(var t=rs,n=Ou=rs=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function Nl(t,n,a,o){ui[rs++]=t,ui[rs++]=n,ui[rs++]=a,ui[rs++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return Nl(t,n,a,o),Ol(t)}function _r(t,n){return Nl(t,null,null,n),Ol(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ol(t){if(50<Ho)throw Ho=0,Wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function _S(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,o){return new _S(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Pl(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Iu(t)&&(S=1);else if(typeof t=="string")S=My(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=Jn(31,a,n,u),t.elementType=A,t.lanes=d,t;case T:return vr(a.children,u,d,n);case y:S=8,u|=24;break;case v:return t=Jn(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case z:return t=Jn(13,a,n,u),t.elementType=z,t.lanes=d,t;case B:return t=Jn(19,a,n,u),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:S=10;break e;case D:S=9;break e;case L:S=11;break e;case F:S=14;break e;case j:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Jn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function vr(t,n,a,o){return t=Jn(7,t,o,n),t.lanes=a,t}function zu(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function om(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},lm.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var os=[],ls=0,Il=null,xo=0,di=[],hi=0,Oa=null,Ii=1,zi="";function ta(t,n){os[ls++]=xo,os[ls++]=Il,Il=t,xo=n}function cm(t,n,a){di[hi++]=Ii,di[hi++]=zi,di[hi++]=Oa,Oa=t;var o=Ii;t=zi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var d=32-Be(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Be(n)+u|a<<u|o,zi=d+t}else Ii=1<<d|a<<u|o,zi=t}function Bu(t){t.return!==null&&(ta(t,1),cm(t,1,0))}function Hu(t){for(;t===Il;)Il=os[--ls],os[ls]=null,xo=os[--ls],os[ls]=null;for(;t===Oa;)Oa=di[--hi],di[hi]=null,zi=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null}function um(t,n){di[hi++]=Ii,di[hi++]=zi,di[hi++]=Oa,Ii=n.id,zi=n.overflow,Oa=t}var Rn=null,Kt=null,Et=!1,Pa=null,pi=!1,Gu=Error(r(519));function Ia(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(fi(n,t)),Gu}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Mn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)St(Vo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||R0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ia(t,!0)}function dm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function cs(t){if(t!==Rn)return!1;if(!Et)return dm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ia(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=z0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=z0(t)}else n===27?(n=Kt,Ka(t.type)?(t=fd,fd=null,Kt=t):Kt=n):Kt=Rn?gi(t.stateNode.nextSibling):null;return!0}function xr(){Kt=Rn=null,Et=!1}function Vu(){var t=Pa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Pa=null),t}function So(t){Pa===null?Pa=[t]:Pa.push(t)}var ku=N(null),Sr=null,na=null;function za(t,n,a){ve(ku,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=ku.current,ee(ku)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Wu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Xu(d.return,a,t),o||(S=null);break e}d=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Xu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function us(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(u===ue.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}u=u.return}t!==null&&Wu(n,t,a,o),n.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){Sr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return hm(Sr,t)}function Fl(t,n){return Sr===null&&yr(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(r(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var vS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xS=s.unstable_scheduleCallback,SS=s.unstable_NormalPriority,un={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new vS,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&xS(SS,function(){t.controller.abort()})}var Mo=null,Yu=0,fs=0,ds=null;function yS(t,n){if(Mo===null){var a=Mo=[];Yu=0,fs=Qf(),ds={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,n.then(pm,pm),n}function pm(){if(--Yu===0&&Mo!==null){ds!==null&&(ds.status="fulfilled");var t=Mo;Mo=null,fs=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function MS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=P.S;P.S=function(t,n){Jg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yS(t,n),mm!==null&&mm(t,n)};var Mr=N(null);function ju(){var t=Mr.current;return t!==null?t:jt.pooledCache}function Bl(t,n){n===null?ve(Mr,Mr.current):ve(Mr,n.pool)}function gm(){var t=ju();return t===null?null:{parent:un._currentValue,pool:t}}var hs=Error(r(460)),Zu=Error(r(474)),Hl=Error(r(542)),Gl={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw br=n,hs}}function Er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,hs):a}}var br=null;function xm(){if(br===null)throw Error(r(459));var t=br;return br=null,t}function Sm(t){if(t===hs||t===Hl)throw Error(r(483))}var ps=null,Eo=0;function Vl(t){var n=Eo;return Eo+=1,ps===null&&(ps=[]),vm(ps,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function kl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n(K,W){if(t){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=ea(K,W),K.index=0,K.sibling=null,K}function d(K,W,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=67108866,W):te):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,W,te,xe){return W===null||W.tag!==6?(W=zu(te,K.mode,xe),W.return=K,W):(W=u(W,te),W.return=K,W)}function G(K,W,te,xe){var $e=te.type;return $e===T?ge(K,W,te.props.children,xe,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===j&&Er($e)===W.type)?(W=u(W,te.props),bo(W,te),W.return=K,W):(W=Pl(te.type,te.key,te.props,null,K.mode,xe),bo(W,te),W.return=K,W)}function ne(K,W,te,xe){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Fu(te,K.mode,xe),W.return=K,W):(W=u(W,te.children||[]),W.return=K,W)}function ge(K,W,te,xe,$e){return W===null||W.tag!==7?(W=vr(te,K.mode,xe,$e),W.return=K,W):(W=u(W,te),W.return=K,W)}function Se(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return te=Pl(W.type,W.key,W.props,null,K.mode,te),bo(te,W),te.return=K,te;case b:return W=Fu(W,K.mode,te),W.return=K,W;case j:return W=Er(W),Se(K,W,te)}if(ae(W)||V(W))return W=vr(W,K.mode,te,null),W.return=K,W;if(typeof W.then=="function")return Se(K,Vl(W),te);if(W.$$typeof===C)return Se(K,Fl(K,W),te);kl(K,W)}return null}function le(K,W,te,xe){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:w(K,W,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===$e?G(K,W,te,xe):null;case b:return te.key===$e?ne(K,W,te,xe):null;case j:return te=Er(te),le(K,W,te,xe)}if(ae(te)||V(te))return $e!==null?null:ge(K,W,te,xe,null);if(typeof te.then=="function")return le(K,W,Vl(te),xe);if(te.$$typeof===C)return le(K,W,Fl(K,te),xe);kl(K,te)}return null}function he(K,W,te,xe,$e){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(te)||null,w(W,K,""+xe,$e);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case M:return K=K.get(xe.key===null?te:xe.key)||null,G(W,K,xe,$e);case b:return K=K.get(xe.key===null?te:xe.key)||null,ne(W,K,xe,$e);case j:return xe=Er(xe),he(K,W,te,xe,$e)}if(ae(xe)||V(xe))return K=K.get(te)||null,ge(W,K,xe,$e,null);if(typeof xe.then=="function")return he(K,W,te,Vl(xe),$e);if(xe.$$typeof===C)return he(K,W,te,Fl(W,xe),$e);kl(W,xe)}return null}function Xe(K,W,te,xe){for(var $e=null,Ut=null,Ke=W,ht=W=0,Mt=null;Ke!==null&&ht<te.length;ht++){Ke.index>ht?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Lt=le(K,Ke,te[ht],xe);if(Lt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Lt.alternate===null&&n(K,Ke),W=d(Lt,W,ht),Ut===null?$e=Lt:Ut.sibling=Lt,Ut=Lt,Ke=Mt}if(ht===te.length)return a(K,Ke),Et&&ta(K,ht),$e;if(Ke===null){for(;ht<te.length;ht++)Ke=Se(K,te[ht],xe),Ke!==null&&(W=d(Ke,W,ht),Ut===null?$e=Ke:Ut.sibling=Ke,Ut=Ke);return Et&&ta(K,ht),$e}for(Ke=o(Ke);ht<te.length;ht++)Mt=he(Ke,K,ht,te[ht],xe),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?ht:Mt.key),W=d(Mt,W,ht),Ut===null?$e=Mt:Ut.sibling=Mt,Ut=Mt);return t&&Ke.forEach(function(tr){return n(K,tr)}),Et&&ta(K,ht),$e}function nt(K,W,te,xe){if(te==null)throw Error(r(151));for(var $e=null,Ut=null,Ke=W,ht=W=0,Mt=null,Lt=te.next();Ke!==null&&!Lt.done;ht++,Lt=te.next()){Ke.index>ht?(Mt=Ke,Ke=null):Mt=Ke.sibling;var tr=le(K,Ke,Lt.value,xe);if(tr===null){Ke===null&&(Ke=Mt);break}t&&Ke&&tr.alternate===null&&n(K,Ke),W=d(tr,W,ht),Ut===null?$e=tr:Ut.sibling=tr,Ut=tr,Ke=Mt}if(Lt.done)return a(K,Ke),Et&&ta(K,ht),$e;if(Ke===null){for(;!Lt.done;ht++,Lt=te.next())Lt=Se(K,Lt.value,xe),Lt!==null&&(W=d(Lt,W,ht),Ut===null?$e=Lt:Ut.sibling=Lt,Ut=Lt);return Et&&ta(K,ht),$e}for(Ke=o(Ke);!Lt.done;ht++,Lt=te.next())Lt=he(Ke,K,ht,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&Ke.delete(Lt.key===null?ht:Lt.key),W=d(Lt,W,ht),Ut===null?$e=Lt:Ut.sibling=Lt,Ut=Lt);return t&&Ke.forEach(function(Ny){return n(K,Ny)}),Et&&ta(K,ht),$e}function Yt(K,W,te,xe){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var $e=te.key;W!==null;){if(W.key===$e){if($e=te.type,$e===T){if(W.tag===7){a(K,W.sibling),xe=u(W,te.props.children),xe.return=K,K=xe;break e}}else if(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===j&&Er($e)===W.type){a(K,W.sibling),xe=u(W,te.props),bo(xe,te),xe.return=K,K=xe;break e}a(K,W);break}else n(K,W);W=W.sibling}te.type===T?(xe=vr(te.props.children,K.mode,xe,te.key),xe.return=K,K=xe):(xe=Pl(te.type,te.key,te.props,null,K.mode,xe),bo(xe,te),xe.return=K,K=xe)}return S(K);case b:e:{for($e=te.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(K,W.sibling),xe=u(W,te.children||[]),xe.return=K,K=xe;break e}else{a(K,W);break}else n(K,W);W=W.sibling}xe=Fu(te,K.mode,xe),xe.return=K,K=xe}return S(K);case j:return te=Er(te),Yt(K,W,te,xe)}if(ae(te))return Xe(K,W,te,xe);if(V(te)){if($e=V(te),typeof $e!="function")throw Error(r(150));return te=$e.call(te),nt(K,W,te,xe)}if(typeof te.then=="function")return Yt(K,W,Vl(te),xe);if(te.$$typeof===C)return Yt(K,W,Fl(K,te),xe);kl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(a(K,W.sibling),xe=u(W,te),xe.return=K,K=xe):(a(K,W),xe=zu(te,K.mode,xe),xe.return=K,K=xe),S(K)):a(K,W)}return function(K,W,te,xe){try{Eo=0;var $e=Yt(K,W,te,xe);return ps=null,$e}catch(Ke){if(Ke===hs||Ke===Hl)throw Ke;var Ut=Jn(29,Ke,null,K.mode);return Ut.lanes=xe,Ut.return=K,Ut}}}var Tr=ym(!0),Mm=ym(!1),Fa=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ol(t),rm(t,null,a),n}return Nl(t,o,n,a),Ol(t)}function To(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ao(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function Ao(){if($u){var t=ds;if(t!==null)throw t}}function wo(t,n,a,o){$u=!1;var u=t.updateQueue;Fa=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,ne=G.next;G.next=null,S===null?d=ne:S.next=ne,S=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,w=ge.lastBaseUpdate,w!==S&&(w===null?ge.firstBaseUpdate=ne:w.next=ne,ge.lastBaseUpdate=G))}if(d!==null){var Se=u.baseState;S=0,ge=ne=G=null,w=d;do{var le=w.lane&-536870913,he=le!==w.lane;if(he?(yt&le)===le:(o&le)===le){le!==0&&le===fs&&($u=!0),ge!==null&&(ge=ge.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Xe=t,nt=w;le=n;var Yt=a;switch(nt.tag){case 1:if(Xe=nt.payload,typeof Xe=="function"){Se=Xe.call(Yt,Se,le);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=nt.payload,le=typeof Xe=="function"?Xe.call(Yt,Se,le):Xe,le==null)break e;Se=g({},Se,le);break e;case 2:Fa=!0}}le=w.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[le]:he.push(le))}else he={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ge===null?(ne=ge=he,G=Se):ge=ge.next=he,S|=le;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ge===null&&(G=Se),u.baseState=G,u.firstBaseUpdate=ne,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Wa|=S,t.lanes=S,t.memoizedState=Se}}function Em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var ms=N(null),Xl=N(0);function Tm(t,n){t=da,ve(Xl,t),ve(ms,n),da=t|n.baseLanes}function ef(){ve(Xl,da),ve(ms,ms.current)}function tf(){da=Xl.current,ee(ms),ee(Xl)}var $n=N(null),mi=null;function Ga(t){var n=t.alternate;ve(on,on.current&1),ve($n,t),mi===null&&(n===null||ms.current!==null||n.memoizedState!==null)&&(mi=t)}function nf(t){ve(on,on.current),ve($n,t),mi===null&&(mi=t)}function Am(t){t.tag===22?(ve(on,on.current),ve($n,t),mi===null&&(mi=t)):Va()}function Va(){ve(on,on.current),ve($n,$n.current)}function ei(t){ee($n),mi===t&&(mi=null),ee(on)}var on=N(0);function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ft=null,Wt=null,fn=null,ql=!1,gs=!1,Ar=!1,Yl=0,Ro=0,_s=null,ES=0;function nn(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function rf(t,n,a,o,u,d){return aa=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?cg:Sf,Ar=!1,d=a(o,u),Ar=!1,gs&&(d=Rm(n,a,o,u)),wm(t),d}function wm(t){P.H=Uo;var n=Wt!==null&&Wt.next!==null;if(aa=0,fn=Wt=ft=null,ql=!1,Ro=0,_s=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&zl(t)&&(dn=!0))}function Rm(t,n,a,o){ft=t;var u=0;do{if(gs&&(_s=null),Ro=0,gs=!1,25<=u)throw Error(r(301));if(u+=1,fn=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=ug,d=n(a,o)}while(gs);return d}function bS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(ft.flags|=1024),n}function sf(){var t=Yl!==0;return Yl=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ql=!1}aa=0,fn=Wt=ft=null,gs=!1,Ro=Yl=0,_s=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ft.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(Wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=fn===null?ft.memoizedState:fn.next;if(n!==null)fn=n,Wt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},fn===null?ft.memoizedState=fn=t:fn=fn.next=t}return fn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=Ro;return Ro+=1,_s===null&&(_s=[]),t=vm(_s,t,n),n=ft,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?cg:Sf),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===C)return Cn(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=jl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=U;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Kl(t){var n=ln();return uf(n,Wt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=S=null,G=null,ne=n,ge=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(yt&Se)===Se:(aa&Se)===Se){var le=ne.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===fs&&(ge=!0);else if((aa&le)===le){ne=ne.next,le===fs&&(ge=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=Se,S=d):G=G.next=Se,ft.lanes|=le,Wa|=le;Se=ne.action,Ar&&a(d,Se),d=ne.hasEagerState?ne.eagerState:a(d,Se)}else le={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=le,S=d):G=G.next=le,ft.lanes|=Se,Wa|=Se;ne=ne.next}while(ne!==null&&ne!==n);if(G===null?S=d:G.next=w,!Qn(d,t.memoizedState)&&(dn=!0,ge&&(a=ds,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Qn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Cm(t,n,a){var o=ft,u=ln(),d=Et;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Qn((Wt||u).memoizedState,a);if(S&&(u.memoizedState=a,dn=!0),u=u.queue,pf(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,vs(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),jt===null)throw Error(r(349));d||(aa&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=jl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Om(t)}function Lm(t,n,a){return a(function(){Nm(n)&&Om(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Om(t){var n=_r(t,2);n!==null&&jn(n,t,2)}function df(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ar){Ge(!0);try{a()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,uf(t,Wt,typeof o=="function"?o:ra)}function TS(t,n,a,o,u){if($l(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,S={};P.T=S;try{var w=a(u,o),G=P.S;G!==null&&G(S,w),zm(t,n,w)}catch(ne){hf(t,n,ne)}finally{d!==null&&S.types!==null&&(d.types=S.types),P.T=d}}else try{d=a(u,o),zm(t,n,d)}catch(ne){hf(t,n,ne)}}function zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return hf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(Et){var a=jt.formState;if(a!==null){e:{var o=ft;if(Et){if(Kt){t:{for(var u=Kt,d=pi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=gi(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=sg.bind(null,ft,o),o.dispatch=a,o=df(!1),d=xf.bind(null,ft,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=TS.bind(null,ft,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=ln();return km(n,Wt,t)}function km(t,n,a){if(n=uf(t,n,Hm)[0],t=Kl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(S){throw S===hs?Hl:S}else o=n;n=ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,vs(9,{destroy:void 0},AS.bind(null,u,a),null)),[o,d,t]}function AS(t,n){t.action=n}function Xm(t){var n=ln(),a=Wt;if(a!==null)return km(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function vs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=jl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return ln().memoizedState}function Ql(t,n,a,o){var u=Hn();ft.flags|=t,u.memoizedState=vs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Jl(t,n,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&af(o,Wt.memoizedState.deps)?u.memoizedState=vs(n,d,a,o):(ft.flags|=t,u.memoizedState=vs(1|n,d,a,o))}function qm(t,n){Ql(8390656,8,t,n)}function pf(t,n){Jl(2048,8,t,n)}function wS(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=jl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=ln().memoizedState;return wS({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return Jl(4,2,t,n)}function Zm(t,n){return Jl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,a){a=a!=null?a.concat([t]):null,Jl(4,4,Km.bind(null,n,t),a)}function mf(){}function Jm(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),Ar){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=e0(),ft.lanes|=t,Wa|=t,a)}function eg(t,n,a,o){return Qn(a,n)?a:ms.current!==null?(t=gf(t,a,o),Qn(t,n)||(dn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(yt&261930)===0?(dn=!0,t.memoizedState=a):(t=e0(),ft.lanes|=t,Wa|=t,n)}function tg(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var S=P.T,w={};P.T=w,xf(t,!1,n,a);try{var G=u(),ne=P.S;if(ne!==null&&ne(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=MS(G,o);Do(t,n,ge,ii(t))}else Do(t,n,o,ii(t))}catch(Se){Do(t,n,{then:function(){},status:"rejected",reason:Se},ii())}finally{H.p=d,S!==null&&w.types!==null&&(S.types=w.types),P.T=S}}function RS(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=ng(t).queue;tg(t,u,n,$,a===null?RS:function(){return ig(t),a(o)})}function ng(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ig(t){var n=ng(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},ii())}function vf(){return Cn(Yo)}function ag(){return ln().memoizedState}function rg(){return ln().memoizedState}function CS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Ba(a);var o=Ha(n,t,a);o!==null&&(jn(o,n,a),To(o,n,a)),n={cache:qu()},t.payload=n;return}n=n.return}}function DS(t,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(t)?og(n,a):(a=Pu(t,n,a,o),a!==null&&(jn(a,t,o),lg(a,n,o)))}function sg(t,n,a){var o=ii();Do(t,n,a,o)}function Do(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(t))og(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,w=d(S,a);if(u.hasEagerState=!0,u.eagerState=w,Qn(w,S))return Nl(t,n,u,0),jt===null&&Ll(),!1}catch{}if(a=Pu(t,n,u,o),a!==null)return jn(a,t,o),lg(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(n)throw Error(r(479))}else n=Pu(t,a,o,2),n!==null&&jn(n,t,2)}function $l(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function og(t,n){gs=ql=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function lg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ao(t,a)}}var Uo={readContext:Cn,use:Zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Uo.useEffectEvent=nn;var cg={readContext:Cn,use:Zl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ql(4194308,4,Km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ql(4194308,4,t,n)},useInsertionEffect:function(t,n){Ql(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Ar){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Ar){Ge(!0);try{a(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=DS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=sg.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=Hn();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=tg.bind(null,ft,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Hn();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(yt&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,vs(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=jt.identifierPrefix;if(Et){var a=zi,o=Ii;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ES++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:vf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return Hn().memoizedState=CS.bind(null,ft)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Cn,use:Zl,useCallback:Jm,useContext:Cn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:Kl,useRef:Wm,useState:function(){return Kl(ra)},useDebugValue:mf,useDeferredValue:function(t,n){var a=ln();return eg(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Kl(ra)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:vf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=ln();return Pm(a,Wt,t,n)},useMemoCache:cf,useCacheRefresh:rg};Sf.useEffectEvent=Ym;var ug={readContext:Cn,use:Zl,useCallback:Jm,useContext:Cn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:ff,useRef:Wm,useState:function(){return ff(ra)},useDebugValue:mf,useDeferredValue:function(t,n){var a=ln();return Wt===null?gf(a,t,n):eg(a,Wt.memoizedState,t,n)},useTransition:function(){var t=ff(ra)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:vf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=ln();return Wt!==null?Pm(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:rg};ug.useEffectEvent=Ym;function yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(jn(n,t,o),To(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(jn(n,t,o),To(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(jn(n,t,a),To(n,t,a))}};function fg(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!_o(a,o)||!_o(u,d):!0}function dg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function hg(t){Ul(t)}function pg(t){console.error(t)}function mg(t){Ul(t)}function ec(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){ec(t,n)},a}function _g(t){return t=Ba(t),t.tag=3,t}function vg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){gg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){gg(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function US(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&us(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?dc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(t,o,u)),!1}throw Error(r(435,a.tag))}return jf(t,o,u),dc(),!1}if(Et)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(r(422),{cause:o}),So(fi(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),So(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Ef(t.stateNode,o,u),Ju(t,u),an!==4&&(an=2)),!1;var d=Error(r(520),{cause:o});if(d=fi(d,a),Bo===null?Bo=[d]:Bo.push(d),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ef(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qa===null||!qa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),vg(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(r(461)),dn=!1;function Dn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):Tr(n,t.child,a,o)}function xg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return yr(n),o=rf(t,n,a,S,d,u),w=sf(),t!==null&&!dn?(of(t,n,u),sa(t,n,u)):(Et&&w&&Bu(n),n.flags|=1,Dn(t,n,o,u),n.child)}function Sg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,yg(t,n,d,o,u)):(t=Pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Lf(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(S,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=ea(d,o),t.ref=n.ref,t.return=n,n.child=t}function yg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(_o(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,Lf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return Tf(t,n,a,o,u)}function Mg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Eg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(n,d!==null?d.cachePool:null),d!==null?Tm(n,d):ef(),Am(n);else return o=n.lanes=536870912,Eg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Bl(n,d.cachePool),Tm(n,d),Va(),n.memoizedState=null):(t!==null&&Bl(n,null),ef(),Va());return Dn(t,n,u,a),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(t,n,a,o,u){var d=ju();return d=d===null?null:{parent:un._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Bl(n,null),ef(),Am(n),t!==null&&us(t,n,o,!0),n.childLanes=u,null}function tc(t,n){return n=ic({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bg(t,n,a){return Tr(n,t.child,null,a),t=tc(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function LS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=tc(n,o),n.lanes=536870912,Lo(null,t);if(nf(n),(t=Kt)?(t=I0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Rn=n,Kt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return tc(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=bg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||us(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=jt,o!==null&&(S=Zr(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,_r(t,S),jn(o,t,S),bf;dc(),n=bg(t,n,a)}else t=d.treeContext,Kt=gi(S.nextSibling),Rn=n,Et=!0,Pa=null,pi=!1,t!==null&&um(n,t),n=tc(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function nc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,u){return yr(n),a=rf(t,n,a,o,void 0,u),o=sf(),t!==null&&!dn?(of(t,n,u),sa(t,n,u)):(Et&&o&&Bu(n),n.flags|=1,Dn(t,n,a,u),n.child)}function Tg(t,n,a,o,u,d){return yr(n),n.updateQueue=null,a=Rm(n,o,a,u),wm(t),o=sf(),t!==null&&!dn?(of(t,n,d),sa(t,n,d)):(Et&&o&&Bu(n),n.flags|=1,Dn(t,n,a,d),n.child)}function Ag(t,n,a,o,u){if(yr(n),n.stateNode===null){var d=ss,S=a.contextType;typeof S=="object"&&S!==null&&(d=Cn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Cn(S):ss,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Mf.enqueueReplaceState(d,d.state,null),wo(n,o,d,u),Ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,G=wr(a,w);d.props=G;var ne=d.context,ge=a.contextType;S=ss,typeof ge=="object"&&ge!==null&&(S=Cn(ge));var Se=a.getDerivedStateFromProps;ge=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ne!==S)&&dg(n,d,o,S),Fa=!1;var le=n.memoizedState;d.state=le,wo(n,o,d,u),Ao(),ne=n.memoizedState,w||le!==ne||Fa?(typeof Se=="function"&&(yf(n,a,Se,o),ne=n.memoizedState),(G=Fa||fg(n,a,G,o,le,ne,S))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qu(t,n),S=n.memoizedProps,ge=wr(a,S),d.props=ge,Se=n.pendingProps,le=d.context,ne=a.contextType,G=ss,typeof ne=="object"&&ne!==null&&(G=Cn(ne)),w=a.getDerivedStateFromProps,(ne=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Se||le!==G)&&dg(n,d,o,G),Fa=!1,le=n.memoizedState,d.state=le,wo(n,o,d,u),Ao();var he=n.memoizedState;S!==Se||le!==he||Fa||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof w=="function"&&(yf(n,a,w,o),he=n.memoizedState),(ge=Fa||fg(n,a,ge,o,le,he,G)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=G,o=ge):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,nc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=sa(t,n,u),t}function wg(t,n,a,o){return xr(),n.flags|=256,Dn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:gm()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function Rg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Ga(n):Va(),(t=Kt)?(t=I0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Rn=n,Kt=null)):t=null,t===null)throw Ia(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Va(),u=n.mode,w=ic({mode:"hidden",children:w},u),o=vr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=wf(a),o.childLanes=Rf(t,S,a),n.memoizedState=Af,Lo(null,o)):(Ga(n),Cf(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)n.flags&256?(Ga(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),w=o.fallback,u=n.mode,o=ic({mode:"visible",children:o.children},u),w=vr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Tr(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Rf(t,S,a),n.memoizedState=Af,n=Lo(null,o));else if(Ga(n),ud(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var ne=S.dgst;S=ne,o=Error(r(419)),o.stack="",o.digest=S,So({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(dn||us(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=jt,S!==null&&(o=Zr(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,_r(t,o),jn(S,t,o),bf;cd(w)||dc(),n=Df(t,n,a)}else cd(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Kt=gi(w.nextSibling),Rn=n,Et=!0,Pa=null,pi=!1,t!==null&&um(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Va(),w=o.fallback,u=n.mode,G=t.child,ne=G.sibling,o=ea(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ne!==null?w=ea(ne,w):(w=vr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Lo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=wf(a):(u=w.cachePool,u!==null?(G=un._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=gm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Rf(t,S,a),n.memoizedState=Af,Lo(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=ic({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ic(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return Tr(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Uf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function Dg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=on.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ve(on,S),Dn(t,n,o,a),o=Et?xo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,a,n);else if(t.tag===19)Cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uf(n,!0,a,null,d,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(us(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function NS(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),za(n,un,t.memoizedState.cache),xr();break;case 27:case 5:we(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(t,n,a):(Ga(n),t=sa(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(us(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(on,on.current),o)break;return null;case 22:return n.lanes=0,Mg(t,n,a,n.pendingProps);case 24:za(n,un,t.memoizedState.cache)}return sa(t,n,a)}function Ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Lf(t,a)&&(n.flags&128)===0)return dn=!1,NS(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Et&&(n.flags&1048576)!==0&&cm(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=wr(t,o),n.tag=1,n=Ag(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=xg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=Sg(null,n,t,o,a);break e}}throw n=ie(t)||t,Error(r(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=wr(o,n.pendingProps),Ag(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Qu(t,n),wo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,za(n,un,o),o!==d.cache&&Wu(n,[un],a,!0),Ao(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=wg(t,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),So(u),n=wg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=gi(t.firstChild),Rn=n,Et=!0,Pa=null,pi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xr(),o===u){n=sa(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return nc(t,n),t===null?(a=V0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=xc(Q.current).createElement(a),o[cn]=n,o[Mn]=t,Un(o,a,t),R(o),n.stateNode=o):n.memoizedState=V0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return we(n),t===null&&Et&&(o=n.stateNode=B0(n.type,n.pendingProps,Q.current),Rn=n,pi=!0,u=Kt,Ka(n.type)?(fd=u,Kt=gi(o.firstChild)):Kt=u),Dn(t,n,n.pendingProps.children,a),nc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Kt)&&(o=cy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Kt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ia(n)),we(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,sd(u,d)?o=null:S!==null&&sd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(t,n,bS,null,null,a),Yo._currentValue=u),nc(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Kt)&&(a=uy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Kt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return Rg(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Tr(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return xg(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,yr(n),u=Cn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return Sg(t,n,n.type,n.pendingProps,a);case 15:return yg(t,n,n.type,n.pendingProps,a);case 19:return Dg(t,n,a);case 31:return LS(t,n,a);case 22:return Mg(t,n,a,n.pendingProps);case 24:return yr(n),o=Cn(un),t===null?(u=ju(),u===null&&(u=jt,d=qu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ku(n),za(n,un,u)):((t.lanes&a)!==0&&(Qu(t,n),wo(n,null,null,a),Ao()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,un,o)):(o=d.cache,za(n,un,o),o!==u.cache&&Wu(n,[un],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function oa(t){t.flags|=4}function Nf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw br=Gl,Zu}else t.flags&=-16777217}function Lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(a0())t.flags|=8192;else throw br=Gl,Zu}function ac(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,Ms|=n)}function No(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function OS(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(un),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(cs(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(oa(n),d!==null?(Qt(n),Lg(n,d)):(Qt(n),Nf(n,u,null,o,a))):d?d!==t.memoizedState?(oa(n),Qt(n),Lg(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),Qt(n),Nf(n,u,t,o,a)),null;case 27:if(We(n),a=Q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Ae.current,cs(n)?fm(n):(t=B0(u,o,a),n.stateNode=t,oa(n))}return Qt(n),null;case 5:if(We(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(d=Ae.current,cs(n))fm(n);else{var S=xc(Q.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[cn]=n,d[Mn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return Qt(n),Nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,cs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||R0(t.nodeValue,a)),t||Ia(n,!0)}else t=xc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=cs(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=cs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ac(n,n.updateQueue),Qt(n),null);case 4:return De(),t===null&&td(n.stateNode.containerInfo),Qt(n),null;case 10:return ia(n.type),Qt(n),null;case 19:if(ee(on),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Wl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,ac(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sm(a,t),a=a.sibling;return ve(on,on.current&1|2),Et&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>cc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Wl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ac(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Et)return Qt(n),null}else 2*E()-o.renderingStartTime>cc&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=on.current,ve(on,u?a&1|2:a&1),Et&&ta(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ei(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&ac(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ee(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(un),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function PS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(un),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return We(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(on),null;case 4:return De(),null;case 10:return ia(n.type),null;case 22:case 23:return ei(n),tf(),t!==null&&ee(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(un),null;case 25:return null;default:return null}}function Ng(t,n){switch(Hu(n),n.tag){case 3:ia(un),De();break;case 26:case 27:case 5:We(n);break;case 4:De();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:ee(on);break;case 10:ia(n.type);break;case 22:case 23:ei(n),tf(),t!==null&&ee(Mr);break;case 24:ia(un)}}function Oo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(w){Gt(n,n.return,w)}}function ka(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var G=a,ne=w;try{ne()}catch(ge){Gt(u,G,ge)}}}o=o.next}while(o!==d)}}catch(ge){Gt(n,n.return,ge)}}function Og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){Gt(t,t.return,o)}}}function Pg(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Fi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Of(t,n,a){try{var o=t.stateNode;iy(o,t.type,a,n),o[Mn]=n}catch(u){Gt(t,t.return,u)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function rc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(rc(t,n,a),t=t.sibling;t!==null;)rc(t,n,a),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=t,n[Mn]=a}catch(d){Gt(t,t.return,d)}}var la=!1,hn=!1,zf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function IS(t,n){if(t=t.containerInfo,ad=Ac,t=Qp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,w=-1,G=-1,ne=0,ge=0,Se=t,le=null;t:for(;;){for(var he;Se!==a||u!==0&&Se.nodeType!==3||(w=S+u),Se!==d||o!==0&&Se.nodeType!==3||(G=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(he=Se.firstChild)!==null;)le=Se,Se=he;for(;;){if(Se===t)break t;if(le===a&&++ne===u&&(w=S),le===d&&++ge===o&&(G=S),(he=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=he}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},Ac=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Xe=wr(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Gt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Hg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),o&4&&Oo(5,a);break;case 1:if(ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Gt(a,a.return,S)}else{var u=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(a,a.return,S)}}o&64&&Og(a),o&512&&Po(a,a.return);break;case 3:if(ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(S){Gt(a,a.return,S)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:ua(t,a),n===null&&o&4&&Ig(a),o&512&&Po(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),o&4&&kg(t,a);break;case 13:ua(t,a),o&4&&Xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=WS.bind(null,a),fy(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||hn,u=la;var d=hn;la=o,(hn=n)&&!d?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,hn=d}break;case 30:break;default:ua(t,a)}}function Gg(t){var n=t.alternate;n!==null&&(t.alternate=null,Gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&lo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Xn=!1;function ca(t,n,a){for(a=a.child;a!==null;)Vg(t,n,a),a=a.sibling}function Vg(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:hn||Fi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Fi(a,n);var o=$t,u=Xn;Ka(a.type)&&($t=a.stateNode,Xn=!1),ca(t,n,a),Xo(a.stateNode),$t=o,Xn=u;break;case 5:hn||Fi(a,n);case 6:if(o=$t,u=Xn,$t=null,ca(t,n,a),$t=o,Xn=u,$t!==null)if(Xn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){Gt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){Gt(a,n,d)}break;case 18:$t!==null&&(Xn?(t=$t,O0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ds(t)):O0($t,a.stateNode));break;case 4:o=$t,u=Xn,$t=a.stateNode.containerInfo,Xn=!0,ca(t,n,a),$t=o,Xn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),hn||ka(4,a,n),ca(t,n,a);break;case 1:hn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pg(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ca(t,n,a),hn=o;break;default:ca(t,n,a)}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ds(t)}catch(a){Gt(n,n.return,a)}}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ds(t)}catch(a){Gt(n,n.return,a)}}function zS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bg),n;default:throw Error(r(435,t.tag))}}function sc(t,n){var a=zS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=qS.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Ka(w.type)){$t=w.stateNode,Xn=!1;break e}break;case 5:$t=w.stateNode,Xn=!1;break e;case 3:case 4:$t=w.stateNode.containerInfo,Xn=!0;break e}w=w.return}if($t===null)throw Error(r(160));Vg(d,S,u),$t=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t),n=n.sibling}var Ai=null;function Wg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(ka(3,t,t.return),Oo(3,t),ka(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(hn||a===null||Fi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,t),qn(t),o&512&&(hn||a===null||Fi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[dr]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,a),d[cn]=t,R(d),o=d;break e;case"link":var S=W0("link","href",u).get(o+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(d=S[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;case"meta":if(S=W0("meta","content",u).get(o+(a.content||""))){for(w=0;w<S.length;w++)if(d=S[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,R(d),o=d}t.stateNode=o}else q0(u,t.type,t.stateNode);else t.stateNode=X0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?q0(u,t.type,t.stateNode):X0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(hn||a===null||Fi(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(hn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(Xe){Gt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(Mc=null,u=Ai,Ai=Sc(n.containerInfo),Wn(n,t),Ai=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ds(n.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}zf&&(zf=!1,qg(t));break;case 4:o=Ai,Ai=Sc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ai=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,sc(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,sc(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ne=la,ge=hn;if(la=ne||u,hn=ge||G,Wn(n,t),hn=ge,la=ne,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||la||hn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=G.stateNode;var Se=G.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Xe){Gt(G,G.return,Xe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xe){Gt(G,G.return,Xe)}}}else if(n.tag===18){if(a===null){G=n;try{var he=G.stateNode;u?P0(he,!0):P0(G.stateNode,!1)}catch(Xe){Gt(G,G.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sc(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,sc(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(zg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Pf(t);rc(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var w=Pf(t);rc(t,w,S);break;case 3:case 4:var G=a.stateNode.containerInfo,ne=Pf(t);If(t,ne,G);break;default:throw Error(r(161))}}catch(ge){Gt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Rr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pg(n,n.return,a),Rr(n);break;case 27:Xo(n.stateNode);case 26:case 5:Fi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:fa(u,d,a),Oo(4,d);break;case 1:if(fa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Gt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Em(G[u],w)}catch(ne){Gt(o,o.return,ne)}}a&&S&64&&Og(d),Po(d,d.return);break;case 27:Fg(d);case 26:case 5:fa(u,d,a),a&&o===null&&S&4&&Ig(d),Po(d,d.return);break;case 12:fa(u,d,a);break;case 31:fa(u,d,a),a&&S&4&&kg(u,d);break;case 13:fa(u,d,a),a&&S&4&&Xg(u,d);break;case 22:d.memoizedState===null&&fa(u,d,a),Po(d,d.return);break;case 30:break;default:fa(u,d,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&yo(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t))}function wi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(t,n,a,o),n=n.sibling}function Yg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,o),u&2048&&Oo(9,n);break;case 1:wi(t,n,a,o);break;case 3:wi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t)));break;case 12:if(u&2048){wi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,w=d.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Gt(n,n.return,G)}}else wi(t,n,a,o);break;case 31:wi(t,n,a,o);break;case 13:wi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?wi(t,n,a,o):Io(t,n):d._visibility&2?wi(t,n,a,o):(d._visibility|=2,xs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(S,n);break;case 24:wi(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:wi(t,n,a,o)}}function xs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,w=a,G=o,ne=S.flags;switch(S.tag){case 0:case 11:case 15:xs(d,S,w,G,u),Oo(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?xs(d,S,w,G,u):Io(d,S):(ge._visibility|=2,xs(d,S,w,G,u)),u&&ne&2048&&Ff(S.alternate,S);break;case 24:xs(d,S,w,G,u),u&&ne&2048&&Bf(S.alternate,S);break;default:xs(d,S,w,G,u)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Io(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Io(a,o),u&2048&&Bf(o.alternate,o);break;default:Io(a,o)}n=n.sibling}}var zo=8192;function Ss(t,n,a){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)jg(t,n,a),t=t.sibling}function jg(t,n,a){switch(t.tag){case 26:Ss(t,n,a),t.flags&zo&&t.memoizedState!==null&&Ey(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:Ss(t,n,a);break;case 3:case 4:var o=Ai;Ai=Sc(t.stateNode.containerInfo),Ss(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,Ss(t,n,a),zo=o):Ss(t,n,a));break;default:Ss(t,n,a)}}function Zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Qg(o,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,oc(t)):Fo(t);break;default:Fo(t)}}function oc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Qg(o,t)}Zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,oc(n));break;default:oc(n)}t=t.sibling}}function Qg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(Gg(o),o===a){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var FS={getCacheForType:function(t){var n=Cn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,jt=null,xt=null,yt=0,Ht=0,ti=null,Xa=!1,ys=!1,Hf=!1,da=0,an=0,Wa=0,Cr=0,Gf=0,ni=0,Ms=0,Bo=null,Yn=null,Vf=!1,lc=0,Jg=0,cc=1/0,uc=null,qa=null,gn=0,Ya=null,Es=null,ha=0,kf=0,Xf=null,$g=null,Ho=0,Wf=null;function ii(){return(Pt&2)!==0&&yt!==0?yt&-yt:P.T!==null?Qf():so()}function e0(){if(ni===0)if((yt&536870912)===0||Et){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function jn(t,n,a){(t===jt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(bs(t,0),ja(t,yt,ni,!1)),On(t,a),((Pt&2)===0||t!==jt)&&(t===jt&&((Pt&2)===0&&(Cr|=a),an===4&&ja(t,yt,ni,!1)),Bi(t))}function t0(t,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?VS(t,n):Yf(t,n,!0),d=o;do{if(u===0){ys&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!HS(a)){u=Yf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;u=Bo;var G=w.current.memoizedState.isDehydrated;if(G&&(bs(w,S).flags|=256),S=Yf(w,S,!1),S!==2){if(Hf&&!G){w.errorRecoveryDisabledLanes|=d,Cr|=d,u=4;break e}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){bs(t,0),ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ni,!Xa);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=lc+300-E(),10<u)){if(ja(o,n,ni,!Xa),ye(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=L0(n0.bind(null,o,a,Yn,uc,Vf,n,ni,Cr,Ms,Xa,d,"Throttled",-0,0),u);break e}n0(o,a,Yn,uc,Vf,n,ni,Cr,Ms,Xa,d,null,-0,0)}}break}while(!0);Bi(t)}function n0(t,n,a,o,u,d,S,w,G,ne,ge,Se,le,he){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},jg(n,d,Se);var Xe=(d&62914560)===d?lc-E():(d&4194048)===d?Jg-E():0;if(Xe=by(Se,Xe),Xe!==null){ha=d,t.cancelPendingCommit=Xe(u0.bind(null,t,n,d,a,o,u,S,w,G,ge,Se,null,le,he)),ja(t,d,S,!ne);return}}u0(t,n,d,a,o,u,S,w,G)}function HS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~Gf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&Ml(t,a,n)}function fc(){return(Pt&6)===0?(Go(0),!1):!0}function qf(){if(xt!==null){if(Ht===0)var t=xt.return;else t=xt,na=Sr=null,lf(t),ps=null,Eo=0,t=xt;for(;t!==null;)Ng(t.alternate,t),t=t.return;xt=null}}function bs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,sy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,qf(),jt=t,xt=a=ea(t.current,null),yt=n,Ht=0,ti=null,Xa=!1,ys=Ue(t,n),Hf=!1,Ms=ni=Gf=Cr=Wa=an=0,Yn=Bo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return da=n,Ll(),a}function i0(t,n){ft=null,P.H=Uo,n===hs||n===Hl?(n=xm(),Ht=3):n===Zu?(n=xm(),Ht=4):Ht=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,xt===null&&(an=1,ec(t,fi(n,t.current)))}function a0(){var t=$n.current;return t===null?!0:(yt&4194048)===yt?mi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===mi:!1}function r0(){var t=P.H;return P.H=Uo,t===null?Uo:t}function s0(){var t=P.A;return P.A=FS,t}function dc(){an=4,Xa||(yt&4194048)!==yt&&$n.current!==null||(ys=!0),(Wa&134217727)===0&&(Cr&134217727)===0||jt===null||ja(jt,yt,ni,!1)}function Yf(t,n,a){var o=Pt;Pt|=2;var u=r0(),d=s0();(jt!==t||yt!==n)&&(uc=null,bs(t,n)),n=!1;var S=an;e:do try{if(Ht!==0&&xt!==null){var w=xt,G=ti;switch(Ht){case 8:qf(),S=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var ne=Ht;if(Ht=0,ti=null,Ts(t,w,G,ne),a&&ys){S=0;break e}break;default:ne=Ht,Ht=0,ti=null,Ts(t,w,G,ne)}}GS(),S=an;break}catch(ge){i0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,na=Sr=null,Pt=o,P.H=u,P.A=d,xt===null&&(jt=null,yt=0,Ll()),S}function GS(){for(;xt!==null;)o0(xt)}function VS(t,n){var a=Pt;Pt|=2;var o=r0(),u=s0();jt!==t||yt!==n?(uc=null,cc=E()+500,bs(t,n)):ys=Ue(t,n);e:do try{if(Ht!==0&&xt!==null){n=xt;var d=ti;t:switch(Ht){case 1:Ht=0,ti=null,Ts(t,n,d,1);break;case 2:case 9:if(_m(d)){Ht=0,ti=null,l0(n);break}n=function(){Ht!==2&&Ht!==9||jt!==t||(Ht=7),Bi(t)},d.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:_m(d)?(Ht=0,ti=null,l0(n)):(Ht=0,ti=null,Ts(t,n,d,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var w=xt;if(S?Y0(S):w.stateNode.complete){Ht=0,ti=null;var G=w.sibling;if(G!==null)xt=G;else{var ne=w.return;ne!==null?(xt=ne,hc(ne)):xt=null}break t}}Ht=0,ti=null,Ts(t,n,d,5);break;case 6:Ht=0,ti=null,Ts(t,n,d,6);break;case 8:qf(),an=6;break e;default:throw Error(r(462))}}kS();break}catch(ge){i0(t,ge)}while(!0);return na=Sr=null,P.H=o,P.A=u,Pt=a,xt!==null?0:(jt=null,yt=0,Ll(),an)}function kS(){for(;xt!==null&&!Ze();)o0(xt)}function o0(t){var n=Ug(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?hc(t):xt=n}function l0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Tg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Tg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:lf(n);default:Ng(a,n),n=xt=sm(n,da),n=Ug(a,n,da)}t.memoizedProps=t.pendingProps,n===null?hc(t):xt=n}function Ts(t,n,a,o){na=Sr=null,lf(n),ps=null,Eo=0;var u=n.return;try{if(US(t,u,n,a,yt)){an=1,ec(t,fi(a,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;an=1,ec(t,fi(a,t.current)),xt=null;return}n.flags&32768?(Et||o===1?t=!0:ys||(yt&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),c0(n,t)):hc(n)}function hc(t){var n=t;do{if((n.flags&32768)!==0){c0(n,Xa);return}t=n.return;var a=OS(n.alternate,n,da);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);an===0&&(an=5)}function c0(t,n){do{var a=PS(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);an=6,xt=null}function u0(t,n,a,o,u,d,S,w,G){t.cancelPendingCommit=null;do pc();while(gn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ou,Mi(t,a,d,S,w,G),t===jt&&(xt=jt=null,yt=0),Es=n,Ya=t,ha=a,kf=d,Xf=u,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,YS(me,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,S=Pt,Pt|=4;try{IS(t,n,a)}finally{Pt=S,H.p=u,P.T=o}}gn=1,f0(),d0(),h0()}}function f0(){if(gn===1){gn=0;var t=Ya,n=Es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Wg(n,t);var d=rd,S=Qp(t.containerInfo),w=d.focusedElem,G=d.selectionRange;if(S!==w&&w&&w.ownerDocument&&Kp(w.ownerDocument.documentElement,w)){if(G!==null&&Cu(w)){var ne=G.start,ge=G.end;if(ge===void 0&&(ge=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(ge,w.value.length);else{var Se=w.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var he=le.getSelection(),Xe=w.textContent.length,nt=Math.min(G.start,Xe),Yt=G.end===void 0?nt:Math.min(G.end,Xe);!he.extend&&nt>Yt&&(S=Yt,Yt=nt,nt=S);var K=Zp(w,nt),W=Zp(w,Yt);if(K&&W&&(he.rangeCount!==1||he.anchorNode!==K.node||he.anchorOffset!==K.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var te=Se.createRange();te.setStart(K.node,K.offset),he.removeAllRanges(),nt>Yt?(he.addRange(te),he.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),he.addRange(te))}}}}for(Se=[],he=w;he=he.parentNode;)he.nodeType===1&&Se.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var xe=Se[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Ac=!!ad,rd=ad=null}finally{Pt=u,H.p=o,P.T=a}}t.current=n,gn=2}}function d0(){if(gn===2){gn=0;var t=Ya,n=Es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Hg(t,n.alternate,n)}finally{Pt=u,H.p=o,P.T=a}}gn=3}}function h0(){if(gn===4||gn===3){gn=0,I();var t=Ya,n=Es,a=ha,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Es=Ya=null,p0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Kr(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var w=o[S];d(w.value,{componentStack:w.stack})}}finally{P.T=n,H.p=u}}(ha&3)!==0&&pc(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Wf?Ho++:(Ho=0,Wf=t):Ho=0,Go(0)}}function p0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,yo(n)))}function pc(){return f0(),d0(),h0(),m0()}function m0(){if(gn!==5)return!1;var t=Ya,n=kf;kf=0;var a=Kr(ha),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=Xf,Xf=null;var d=Ya,S=ha;if(gn=0,Es=Ya=null,ha=0,(Pt&6)!==0)throw Error(r(331));var w=Pt;if(Pt|=4,Kg(d.current),Yg(d,d.current,S,a),Pt=w,Go(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,d)}catch{}return!0}finally{H.p=u,P.T=o,p0(t,n)}}function g0(t,n,a){n=fi(a,n),n=Ef(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(On(t,2),Bi(t))}function Gt(t,n,a){if(t.tag===3)g0(t,t,a);else for(;n!==null;){if(n.tag===3){g0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=fi(a,t),a=_g(2),o=Ha(n,a,2),o!==null&&(vg(a,o,n,t),On(o,2),Bi(o));break}}n=n.return}}function jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new BS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=XS.bind(null,t,n,a),n.then(t,t))}function XS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(yt&a)===a&&(an===4||an===3&&(yt&62914560)===yt&&300>E()-lc?(Pt&2)===0&&bs(t,0):Gf|=a,Ms===yt&&(Ms=0)),Bi(t)}function _0(t,n){n===0&&(n=Ft()),t=_r(t,n),t!==null&&(On(t,n),Bi(t))}function WS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(t,a)}function qS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),_0(t,a)}function YS(t,n){return Tt(t,n)}var mc=null,As=null,Zf=!1,gc=!1,Kf=!1,Za=0;function Bi(t){t!==As&&t.next===null&&(As===null?mc=As=t:As=As.next=t),gc=!0,Zf||(Zf=!0,ZS())}function Go(t,n){if(!Kf&&gc){Kf=!0;do for(var a=!1,o=mc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(S&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,y0(o,d))}else d=yt,d=ye(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(a=!0,y0(o,d));o=o.next}while(a);Kf=!1}}function jS(){v0()}function v0(){gc=Zf=!1;var t=0;Za!==0&&ry()&&(t=Za);for(var n=E(),a=null,o=mc;o!==null;){var u=o.next,d=x0(o,n);d===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(As=a)):(a=o,(t!==0||(d&3)!==0)&&(gc=!0)),o=u}gn!==0&&gn!==5||Go(t),Za!==0&&(Za=0)}function x0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Be(d),w=1<<S,G=u[S];G===-1?((w&a)===0||(w&o)!==0)&&(u[S]=ot(w,n)):G<=n&&(t.expiredLanes|=w),d&=~w}if(n=jt,a=yt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&It(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&It(o),Kr(a)){case 2:case 8:a=Me;break;case 32:a=me;break;case 268435456:a=Le;break;default:a=me}return o=S0.bind(null,t),a=Tt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&It(o),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(pc()&&t.callbackNode!==a)return null;var o=yt;return o=ye(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(t0(t,o,n),x0(t,E()),t.callbackNode!=null&&t.callbackNode===a?S0.bind(null,t):null)}function y0(t,n){if(pc())return null;t0(t,n,!0)}function ZS(){oy(function(){(Pt&6)!==0?Tt(_e,jS):v0()})}function Qf(){if(Za===0){var t=fs;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Za=t}return Za}function M0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function E0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function KS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=M0((u[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?M0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var w=new Rl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var G=S?E0(u,S):new FormData(u);_f(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=S?E0(u,S):new FormData(u),_f(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Jf=0;Jf<Nu.length;Jf++){var $f=Nu[Jf],QS=$f.toLowerCase(),JS=$f[0].toUpperCase()+$f.slice(1);Ti(QS,"on"+JS)}Ti(em,"onAnimationEnd"),Ti(tm,"onAnimationIteration"),Ti(nm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(pS,"onTransitionRun"),Ti(mS,"onTransitionStart"),Ti(gS,"onTransitionCancel"),Ti(im,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function b0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],G=w.instance,ne=w.currentTarget;if(w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(ge){Ul(ge)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(w=o[S],G=w.instance,ne=w.currentTarget,w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(ge){Ul(ge)}u.currentTarget=null,d=G}}}}function St(t,n){var a=n[Qr];a===void 0&&(a=n[Qr]=new Set);var o=t+"__bubble";a.has(o)||(T0(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),T0(a,t,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[_c]){t[_c]=!0,Z.forEach(function(a){a!=="selectionchange"&&($S.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[_c]||(n[_c]=!0,ed("selectionchange",!1,n))}}function T0(t,n,a,o){switch(e_(n)){case 2:var u=wy;break;case 8:u=Ry;break;default:u=gd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=Da(w),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue e}w=w.parentNode}}o=o.return}Dp(function(){var ne=d,ge=vu(a),Se=[];e:{var le=am.get(t);if(le!==void 0){var he=Rl,Xe=t;switch(t){case"keypress":if(Al(a)===0)break e;case"keydown":case"keyup":he=qx;break;case"focusin":Xe="focus",he=bu;break;case"focusout":Xe="blur",he=bu;break;case"beforeblur":case"afterblur":he=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Zx;break;case em:case tm:case nm:he=zx;break;case im:he=Qx;break;case"scroll":case"scrollend":he=Lx;break;case"wheel":he=$x;break;case"copy":case"cut":case"paste":he=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Pp;break;case"toggle":case"beforetoggle":he=tS}var nt=(n&4)!==0,Yt=!nt&&(t==="scroll"||t==="scrollend"),K=nt?le!==null?le+"Capture":null:le;nt=[];for(var W=ne,te;W!==null;){var xe=W;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||K===null||(xe=co(W,K),xe!=null&&nt.push(ko(W,xe,te))),Yt)break;W=W.return}0<nt.length&&(le=new he(le,Xe,null,a,ge),Se.push({event:le,listeners:nt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&a!==_u&&(Xe=a.relatedTarget||a.fromElement)&&(Da(Xe)||Xe[Ei]))break e;if((he||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,he?(Xe=a.relatedTarget||a.toElement,he=ne,Xe=Xe?Da(Xe):null,Xe!==null&&(Yt=c(Xe),nt=Xe.tag,Xe!==Yt||nt!==5&&nt!==27&&nt!==6)&&(Xe=null)):(he=null,Xe=ne),he!==Xe)){if(nt=Np,xe="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Pp,xe="onPointerLeave",K="onPointerEnter",W="pointer"),Yt=he==null?le:hr(he),te=Xe==null?le:hr(Xe),le=new nt(xe,W+"leave",he,a,ge),le.target=Yt,le.relatedTarget=te,xe=null,Da(ge)===ne&&(nt=new nt(K,W+"enter",Xe,a,ge),nt.target=te,nt.relatedTarget=Yt,xe=nt),Yt=xe,he&&Xe)t:{for(nt=ey,K=he,W=Xe,te=0,xe=K;xe;xe=nt(xe))te++;xe=0;for(var $e=W;$e;$e=nt($e))xe++;for(;0<te-xe;)K=nt(K),te--;for(;0<xe-te;)W=nt(W),xe--;for(;te--;){if(K===W||W!==null&&K===W.alternate){nt=K;break t}K=nt(K),W=nt(W)}nt=null}else nt=null;he!==null&&A0(Se,le,he,nt,!1),Xe!==null&&Yt!==null&&A0(Se,Yt,Xe,nt,!0)}}e:{if(le=ne?hr(ne):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Ut=kp;else if(Gp(le))if(Xp)Ut=fS;else{Ut=cS;var Ke=lS}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&bi(ne.elementType)&&(Ut=kp):Ut=uS;if(Ut&&(Ut=Ut(t,ne))){Vp(Se,Ut,a,ge);break e}Ke&&Ke(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&bn(le,"number",le.value)}switch(Ke=ne?hr(ne):window,t){case"focusin":(Gp(Ke)||Ke.contentEditable==="true")&&(is=Ke,Du=ne,vo=null);break;case"focusout":vo=Du=is=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Jp(Se,a,ge);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Jp(Se,a,ge)}var ht;if(Au)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else ns?Bp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ip&&a.locale!=="ko"&&(ns||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&ns&&(ht=Up()):(Na=ge,yu="value"in Na?Na.value:Na.textContent,ns=!0)),Ke=vc(ne,Mt),0<Ke.length&&(Mt=new Op(Mt,t,null,a,ge),Se.push({event:Mt,listeners:Ke}),ht?Mt.data=ht:(ht=Hp(a),ht!==null&&(Mt.data=ht)))),(ht=iS?aS(t,a):rS(t,a))&&(Mt=vc(ne,"onBeforeInput"),0<Mt.length&&(Ke=new Op("onBeforeInput","beforeinput",null,a,ge),Se.push({event:Ke,listeners:Mt}),Ke.data=ht)),KS(Se,t,ne,a,ge)}b0(Se,n)})}function ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function vc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=co(t,a),u!=null&&o.unshift(ko(t,u,d)),u=co(t,n),u!=null&&o.push(ko(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var w=a,G=w.alternate,ne=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||ne===null||(G=ne,u?(ne=co(a,d),ne!=null&&S.unshift(ko(a,ne,G))):u||(ne=co(a,d),ne!=null&&S.push(ko(a,ne,G)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function R0(t,n){return n=w0(n),w0(t)===n}function qt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(t,""+o);break;case"className":et(t,"class",o);break;case"tabIndex":et(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,o);break;case"style":$r(t,o,d);break;case"data":if(n!=="object"){et(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ye(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dx.get(a)||a,Ye(t,a,o))}}function id(t,n,a,o,u,d){switch(a){case"style":$r(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ye(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,d,S,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var w=d=S=u=null,G=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":S=ge;break;case"checked":G=ge;break;case"defaultChecked":ne=ge;break;case"value":d=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:qt(t,n,o,ge,a,null)}}Qi(t,d,w,G,ne,S,u,!1);return;case"select":St("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:qt(t,n,u,w,a,null)}n=d,a=S,t.multiple=!!o,n!=null?ci(t,!!o,n,!1):a!=null&&ci(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:qt(t,n,S,w,a,null)}Tn(t,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,G,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Vo.length;o++)St(Vo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,ne,o,a,null)}return;default:if(bi(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&id(t,n,ge,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&qt(t,n,w,o,a,null))}function iy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,w=null,G=null,ne=null,ge=null;for(he in a){var Se=a[he];if(a.hasOwnProperty(he)&&Se!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=Se;default:o.hasOwnProperty(he)||qt(t,n,he,null,o,Se)}}for(var le in o){var he=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(he!=null||Se!=null))switch(le){case"type":d=he;break;case"name":u=he;break;case"checked":ne=he;break;case"defaultChecked":ge=he;break;case"value":S=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Se&&qt(t,n,le,he,o,Se)}}En(t,S,w,G,ne,ge,d,u);return;case"select":he=S=w=le=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":he=G;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":le=d;break;case"defaultValue":w=d;break;case"multiple":S=d;default:d!==G&&qt(t,n,u,d,o,G)}n=w,a=S,o=he,le!=null?ci(t,!!a,le,!1):!!o!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":he=le=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qt(t,n,w,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":le=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&qt(t,n,S,u,o,d)}Bt(t,le,he);return;case"option":for(var Xe in a)le=a[Xe],a.hasOwnProperty(Xe)&&le!=null&&!o.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:qt(t,n,Xe,null,o,le));for(G in o)le=o[G],he=a[G],o.hasOwnProperty(G)&&le!==he&&(le!=null||he!=null)&&(G==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,G,le,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)le=a[nt],a.hasOwnProperty(nt)&&le!=null&&!o.hasOwnProperty(nt)&&qt(t,n,nt,null,o,le);for(ne in o)if(le=o[ne],he=a[ne],o.hasOwnProperty(ne)&&le!==he&&(le!=null||he!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:qt(t,n,ne,le,o,he)}return;default:if(bi(n)){for(var Yt in a)le=a[Yt],a.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&id(t,n,Yt,void 0,o,le);for(ge in o)le=o[ge],he=a[ge],!o.hasOwnProperty(ge)||le===he||le===void 0&&he===void 0||id(t,n,ge,le,o,he);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&qt(t,n,K,null,o,le);for(Se in o)le=o[Se],he=a[Se],!o.hasOwnProperty(Se)||le===he||le==null&&he==null||qt(t,n,Se,le,o,he)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,w=u.duration;if(d&&w&&C0(S)){for(S=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ne=G.startTime;if(ne>w)break;var ge=G.transferSize,Se=G.initiatorType;ge&&C0(Se)&&(G=G.responseEnd,S+=ge*(G<w?1:(w-ne)/(G-ne)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,rd=null;function xc(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function ry(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(t){return N0.resolve(null).then(t).catch(ly)}:L0;function ly(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function O0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,w=d.nodeName;d[dr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Xo(t.ownerDocument.body);a=u}while(a);Ds(n)}function P0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),lo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[dr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function uy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function z0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function B0(t,n,a){switch(n=xc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);lo(t)}var _i=new Map,H0=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=H.d;H.d={f:dy,r:hy,D:py,C:my,L:gy,m:_y,X:xy,S:vy,M:Sy};function dy(){var t=pa.f(),n=fc();return t||n}function hy(t){var n=Ua(t);n!==null&&n.tag===5&&n.type==="form"?ig(n):pa.r(t)}var ws=typeof document>"u"?null:document;function G0(t,n,a){var o=ws;if(o&&typeof n=="string"&&n){var u=lt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H0.has(u)||(H0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function py(t){pa.D(t),G0("dns-prefetch",t,null)}function my(t,n){pa.C(t,n),G0("preconnect",t,n)}function gy(t,n,a){pa.L(t,n,a);var o=ws;if(o&&t&&n){var u='link[rel="preload"][as="'+lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+lt(a.imageSizes)+'"]')):u+='[href="'+lt(t)+'"]';var d=u;switch(n){case"style":d=Rs(t);break;case"script":d=Cs(t)}_i.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Wo(d))||n==="script"&&o.querySelector(qo(d))||(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function _y(t,n){pa.m(t,n);var a=ws;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+lt(o)+'"][href="'+lt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cs(t)}if(!_i.has(d)&&(t=g({rel:"modulepreload",href:t},n),_i.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(d)))return}o=a.createElement("link"),Un(o,"link",t),R(o),a.head.appendChild(o)}}}function vy(t,n,a){pa.S(t,n,a);var o=ws;if(o&&t){var u=La(o).hoistableStyles,d=Rs(t);n=n||"default";var S=u.get(d);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(Wo(d)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(d))&&dd(t,a);var G=S=o.createElement("link");R(G),Un(G,"link",t),G._p=new Promise(function(ne,ge){G.onload=ne,G.onerror=ge}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,yc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(d,S)}}}function xy(t,n){pa.X(t,n);var a=ws;if(a&&t){var o=La(a).hoistableScripts,u=Cs(t),d=o.get(u);d||(d=a.querySelector(qo(u)),d||(t=g({src:t,async:!0},n),(n=_i.get(u))&&hd(t,n),d=a.createElement("script"),R(d),Un(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Sy(t,n){pa.M(t,n);var a=ws;if(a&&t){var o=La(a).hoistableScripts,u=Cs(t),d=o.get(u);d||(d=a.querySelector(qo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&hd(t,n),d=a.createElement("script"),R(d),Un(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function V0(t,n,a,o){var u=(u=Q.current)?Sc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rs(a.href),a=La(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rs(a.href);var d=La(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Wo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),d||yy(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cs(a),a=La(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Rs(t){return'href="'+lt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),t.head.appendChild(n))}function Cs(t){return'[src="'+lt(t)+'"]'}function qo(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+lt(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Un(o,"style",u),yc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Rs(a.href);var d=t.querySelector(Wo(u));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=k0(a),(u=_i.get(u))&&dd(o,u),d=(t.ownerDocument||t).createElement("link"),R(d);var S=d;return S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),Un(d,"link",o),n.state.loading|=4,yc(d,a.precedence,t),n.instance=d;case"script":return d=Cs(a.src),(u=t.querySelector(qo(d)))?(n.instance=u,R(u),u):(o=a,(u=_i.get(d))&&(o=g({},a),hd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,a.precedence,t));return n.instance}function yc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Mc=null;function W0(t,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[dr]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var w=o.get(S);w?w.push(d):o.set(S,[d])}}return o}function q0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function My(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ey(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rs(o.href),d=n.querySelector(Wo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=k0(o),(u=_i.get(u))&&dd(o,u),d=d.createElement("link"),R(d);var S=d;S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),Un(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function by(t,n){return t.stylesheets&&t.count===0&&Tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*ay());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,n.forEach(Ty,t),bc=null,Ec.call(t))}function Ty(t,n){if(!(n.state.loading&4)){var a=bc.get(t);if(a)var o=a.get(null);else{a=new Map,bc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=Ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:C,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ay(t,n,a,o,u,d,S,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function j0(t,n,a,o,u,d,S,w,G,ne,ge,Se){return t=new Ay(t,n,a,S,G,ne,ge,Se,w),n=1,d===!0&&(n|=24),d=Jn(3,null,null,n),t.current=d,d.stateNode=t,n=qu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ku(d),t}function Z0(t){return t?(t=ss,t):ss}function K0(t,n,a,o,u,d){u=Z0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(t,o,n),a!==null&&(jn(a,t,n),To(a,t,n))}function Q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){Q0(t,n),(t=t.alternate)&&Q0(t,n)}function J0(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&jn(n,t,67108864),md(t,67108864)}}function $0(t){if(t.tag===13||t.tag===31){var n=ii();n=ro(n);var a=_r(t,n);a!==null&&jn(a,t,n),md(t,n)}}var Ac=!0;function wy(t,n,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=2,gd(t,n,a,o)}finally{H.p=d,P.T=u}}function Ry(t,n,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=8,gd(t,n,a,o)}finally{H.p=d,P.T=u}}function gd(t,n,a,o){if(Ac){var u=_d(o);if(u===null)nd(t,n,o,wc,a),t_(t,o);else if(Dy(u,t,n,a,o))o.stopPropagation();else if(t_(t,o),n&4&&-1<Cy.indexOf(t)){for(;u!==null;){var d=Ua(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ee(d.pendingLanes);if(S!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var G=1<<31-Be(S);w.entanglements[1]|=G,S&=~G}Bi(d),(Pt&6)===0&&(cc=E()+500,Go(0))}}break;case 31:case 13:w=_r(d,2),w!==null&&jn(w,d,2),fc(),md(d,2)}if(d=_d(o),d===null&&nd(t,n,o,wc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function _d(t){return t=vu(t),vd(t)}var wc=null;function vd(t){if(wc=null,t=Da(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return wc=t,null}function e_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case _e:return 2;case Me:return 8;case me:case Qe:return 32;case Le:return 268435456;default:return 32}default:return 32}}var xd=!1,Qa=null,Ja=null,$a=null,jo=new Map,Zo=new Map,er=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&J0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Dy(t,n,a,o,u){switch(n){case"focusin":return Qa=Ko(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Ko(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Ko($a,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,Ko(jo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Zo.set(d,Ko(Zo.get(d)||null,t,n,a,o,u)),!0}return!1}function n_(t){var n=Da(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){$0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){$0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Ua(a),n!==null&&J0(n),t.blockedOn=a,!1;n.shift()}return!0}function i_(t,n,a){Rc(t)&&a.delete(n)}function Uy(){xd=!1,Qa!==null&&Rc(Qa)&&(Qa=null),Ja!==null&&Rc(Ja)&&(Ja=null),$a!==null&&Rc($a)&&($a=null),jo.forEach(i_),Zo.forEach(i_)}function Cc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Uy)))}var Dc=null;function a_(t){Dc!==t&&(Dc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(vd(o||a)===null)continue;break}var d=Ua(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ds(t){function n(G){return Cc(G,t)}Qa!==null&&Cc(Qa,t),Ja!==null&&Cc(Ja,t),$a!==null&&Cc($a,t),jo.forEach(n),Zo.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[Mn]||null;if(typeof d=="function")S||a_(a);else if(S){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Mn]||null)w=S.formAction;else if(vd(u)!==null)continue}else w=S.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),a_(a)}}}function r_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Uc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();K0(a,o,t,n,null,null)},Uc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;K0(t.current,2,null,t,null,null),fc(),n[Ei]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=so();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&n_(t)}};var s_=e.version;if(s_!=="19.2.3")throw Error(r(527,s_,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Ly={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{Te=Lc.inject(Ly),Re=Lc}catch{}}return Jo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=hg,d=pg,S=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=j0(t,1,!1,null,null,a,o,null,u,d,S,r_),t[Ei]=n.current,td(t),new Sd(n)},Jo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=hg,S=pg,w=mg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=j0(t,1,!0,n,a??null,o,u,G,d,S,w,r_),n.context=Z0(null),a=n.current,o=ii(),o=ro(o),u=Ba(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,On(n,a),Bi(n),t[Ei]=n.current,td(t),new Uc(n)},Jo.version="19.2.3",Jo}var g_;function ky(){if(g_)return Ed.exports;g_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=Vy(),Ed.exports}var Xy=ky();const Wy=Oy(Xy);var __="popstate";function qy(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return uh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:cl(l)}return jy(e,i,null,s)}function en(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ni(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yy(){return Math.random().toString(36).substring(2,10)}function v_(s,e){return{usr:s.state,key:s.key,idx:e}}function uh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?$s(e):e,state:i,key:e&&e.key||r||Yy()}}function cl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function $s(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function jy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){h="POP";let y=_(),v=y==null?null:y-p;p=y,m&&m({action:h,location:T.location,delta:v})}function x(y,v){h="PUSH";let D=uh(T.location,y,v);p=_()+1;let C=v_(D,p),L=T.createHref(D);try{f.pushState(C,"",L)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(L)}c&&m&&m({action:h,location:T.location,delta:1})}function M(y,v){h="REPLACE";let D=uh(T.location,y,v);p=_();let C=v_(D,p),L=T.createHref(D);f.replaceState(C,"",L),c&&m&&m({action:h,location:T.location,delta:0})}function b(y){return Zy(y)}let T={get action(){return h},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(__,g),m=y,()=>{l.removeEventListener(__,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(y){return f.go(y)}};return T}function Zy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:cl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Mv(s,e,i="/"){return Ky(s,e,i,!1)}function Ky(s,e,i,r){let l=typeof e=="string"?$s(e):e,c=Ta(l.pathname||"/",i);if(c==null)return null;let f=Ev(s);Qy(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=lM(c);h=sM(f[m],p,r)}return h}function Ev(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;en(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=Ma([r,_.relativePath]),x=i.concat(_);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Ev(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:aM(g,f.index),routesMeta:x})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of bv(f.path))c(f,h,!0,m)}),e}function bv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=bv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Qy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:rM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Jy=/^:[\w-]+$/,$y=3,eM=2,tM=1,nM=10,iM=-2,x_=s=>s==="*";function aM(s,e){let i=s.split("/"),r=i.length;return i.some(x_)&&(r+=iM),e&&(r+=eM),i.filter(l=>!x_(l)).reduce((l,c)=>l+(Jy.test(c)?$y:c===""?tM:nM),r)}function rM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function sM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Ma([c,g.pathname]),pathnameBase:dM(Ma([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Ma([c,g.pathnameBase]))}return f}function lu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=oM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:g},x)=>{if(_==="*"){let b=h[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[x];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function oM(s,e=!1,i=!0){Ni(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function lM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ni(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ta(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cM=s=>Tv.test(s);function uM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?$s(s):s,c;if(i)if(cM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ni(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=S_(i.substring(1),"/"):c=S_(i,e)}else c=e;return{pathname:c,search:hM(r),hash:pM(l)}}function S_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function wd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Av(s){let e=fM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function wv(s,e,i,r=!1){let l;typeof s=="string"?l=$s(s):(l={...s},en(!l.pathname||!l.pathname.includes("?"),wd("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),wd("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),wd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=uM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var Ma=s=>s.join("/").replace(/\/\/+/g,"/"),dM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),hM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,pM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,mM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function gM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function _M(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Cv(s,e){let i=s;if(typeof i!="string"||!Tv.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Rv)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Ta(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ni(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var vM=["GET",...Dv];new Set(vM);var eo=se.createContext(null);eo.displayName="DataRouter";var du=se.createContext(null);du.displayName="DataRouterState";var xM=se.createContext(!1),Uv=se.createContext({isTransitioning:!1});Uv.displayName="ViewTransition";var SM=se.createContext(new Map);SM.displayName="Fetchers";var yM=se.createContext(null);yM.displayName="Await";var yi=se.createContext(null);yi.displayName="Navigation";var ml=se.createContext(null);ml.displayName="Location";var Ra=se.createContext({outlet:null,matches:[],isDataRoute:!1});Ra.displayName="Route";var lp=se.createContext(null);lp.displayName="RouteError";var Lv="REACT_ROUTER_ERROR",MM="REDIRECT",EM="ROUTE_ERROR_RESPONSE";function bM(s){if(s.startsWith(`${Lv}:${MM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function TM(s){if(s.startsWith(`${Lv}:${EM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new mM(e.status,e.statusText,e.data)}catch{}}function AM(s,{relative:e}={}){en(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=se.useContext(yi),{hash:l,pathname:c,search:f}=_l(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ma([i,c])),r.createHref({pathname:h,search:f,hash:l})}function gl(){return se.useContext(ml)!=null}function kr(){return en(gl(),"useLocation() may be used only in the context of a <Router> component."),se.useContext(ml).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ov(s){se.useContext(yi).static||se.useLayoutEffect(s)}function Ca(){let{isDataRoute:s}=se.useContext(Ra);return s?BM():wM()}function wM(){en(gl(),"useNavigate() may be used only in the context of a <Router> component.");let s=se.useContext(eo),{basename:e,navigator:i}=se.useContext(yi),{matches:r}=se.useContext(Ra),{pathname:l}=kr(),c=JSON.stringify(Av(r)),f=se.useRef(!1);return Ov(()=>{f.current=!0}),se.useCallback((m,p={})=>{if(Ni(f.current,Nv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=wv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ma([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,c,l,s])}se.createContext(null);function _l(s,{relative:e}={}){let{matches:i}=se.useContext(Ra),{pathname:r}=kr(),l=JSON.stringify(Av(i));return se.useMemo(()=>wv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function RM(s,e){return Pv(s,e)}function Pv(s,e,i,r,l){en(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=se.useContext(yi),{matches:f}=se.useContext(Ra),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",g=h&&h.route;{let D=g&&g.path||"";zv(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=kr(),M;if(e){let D=typeof e=="string"?$s(e):e;en(_==="/"||D.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=x;let b=M.pathname||"/",T=b;if(_!=="/"){let D=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=Mv(s,{pathname:T});Ni(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ni(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=NM(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Ma([_,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?_:Ma([_,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,r,l);return e&&v?se.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function CM(){let s=FM(),e=gM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=se.createElement(se.Fragment,null,se.createElement("p",null,"💿 Hey developer 👋"),se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",se.createElement("code",{style:c},"ErrorBoundary")," or"," ",se.createElement("code",{style:c},"errorElement")," prop on your route.")),se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),i?se.createElement("pre",{style:l},i):null,f)}var DM=se.createElement(CM,null),Iv=class extends se.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=TM(s.digest);i&&(s=i)}let e=s!==void 0?se.createElement(Ra.Provider,{value:this.props.routeContext},se.createElement(lp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?se.createElement(UM,{error:s},e):e}};Iv.contextType=xM;var Rd=new WeakMap;function UM({children:s,error:e}){let{basename:i}=se.useContext(yi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=bM(e.digest);if(r){let l=Rd.get(e);if(l)throw l;let c=Cv(r.location,i);if(Rv&&!Rd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Rd.set(e,f),f}return se.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function LM({routeContext:s,match:e,children:i}){let r=se.useContext(eo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),se.createElement(Ra.Provider,{value:s},i)}function NM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);en(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,m=-1;if(i)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:x,errors:M}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(_,g)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:_M(i.matches),errorInfo:g})}:void 0;return c.reduceRight((_,g,x)=>{let M,b=!1,T=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||DM,h&&(m<0&&x===0?(zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===x&&(b=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,x+1)),D=()=>{let C;return M?C=T:b?C=y:g.route.Component?C=se.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=_,se.createElement(LM,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:C})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?se.createElement(Iv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:D(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):D()},null)}function cp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OM(s){let e=se.useContext(eo);return en(e,cp(s)),e}function PM(s){let e=se.useContext(du);return en(e,cp(s)),e}function IM(s){let e=se.useContext(Ra);return en(e,cp(s)),e}function up(s){let e=IM(s),i=e.matches[e.matches.length-1];return en(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function zM(){return up("useRouteId")}function FM(){let s=se.useContext(lp),e=PM("useRouteError"),i=up("useRouteError");return s!==void 0?s:e.errors?.[i]}function BM(){let{router:s}=OM("useNavigate"),e=up("useNavigate"),i=se.useRef(!1);return Ov(()=>{i.current=!0}),se.useCallback(async(l,c={})=>{Ni(i.current,Nv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var y_={};function zv(s,e,i){!e&&!y_[s]&&(y_[s]=!0,Ni(!1,i))}se.memo(HM);function HM({routes:s,future:e,state:i,onError:r}){return Pv(s,void 0,i,r,e)}function Sa(s){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function GM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){en(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=se.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=$s(i));let{pathname:p="/",search:_="",hash:g="",state:x=null,key:M="default"}=i,b=se.useMemo(()=>{let T=Ta(p,h);return T==null?null:{location:{pathname:T,search:_,hash:g,state:x,key:M},navigationType:r}},[h,p,_,g,x,M,r]);return Ni(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:se.createElement(yi.Provider,{value:m},se.createElement(ml.Provider,{children:e,value:b}))}function VM({children:s,location:e}){return RM(fh(s),e)}function fh(s,e=[]){let i=[];return se.Children.forEach(s,(r,l)=>{if(!se.isValidElement(r))return;let c=[...e,l];if(r.type===se.Fragment){i.push.apply(i,fh(r.props.children,c));return}en(r.type===Sa,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=fh(r.props.children,c)),i.push(f)}),i}var eu="get",tu="application/x-www-form-urlencoded";function hu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function kM(s){return hu(s)&&s.tagName.toLowerCase()==="button"}function XM(s){return hu(s)&&s.tagName.toLowerCase()==="form"}function WM(s){return hu(s)&&s.tagName.toLowerCase()==="input"}function qM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function YM(s,e){return s.button===0&&(!e||e==="_self")&&!qM(s)}var Nc=null;function jM(){if(Nc===null)try{new FormData(document.createElement("form"),0),Nc=!1}catch{Nc=!0}return Nc}var ZM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(s){return s!=null&&!ZM.has(s)?(Ni(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):s}function KM(s,e){let i,r,l,c,f;if(XM(s)){let h=s.getAttribute("action");r=h?Ta(h,e):null,i=s.getAttribute("method")||eu,l=Cd(s.getAttribute("enctype"))||tu,c=new FormData(s)}else if(kM(s)||WM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Ta(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||eu,l=Cd(s.getAttribute("formenctype"))||Cd(h.getAttribute("enctype"))||tu,c=new FormData(h,s),!jM()){let{name:p,type:_,value:g}=s;if(_==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(hu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,r=null,l=tu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function QM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&Ta(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function JM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $M(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function eE(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await JM(c,i);return f.links?f.links():[]}return[]}));return aE(r.flat(1).filter($M).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function M_(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function tE(s,e,{includeHydrateFallback:i}={}){return nE(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function nE(s){return[...new Set(s)]}function iE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function aE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(iE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Fv(){let s=se.useContext(eo);return fp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function rE(){let s=se.useContext(du);return fp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var dp=se.createContext(void 0);dp.displayName="FrameworkContext";function Bv(){let s=se.useContext(dp);return fp(s,"You must render this element inside a <HydratedRouter> element"),s}function sE(s,e){let i=se.useContext(dp),[r,l]=se.useState(!1),[c,f]=se.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,x=se.useRef(null);se.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=v=>{v.forEach(D=>{f(D.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),se.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:$o(h,M),onBlur:$o(m,b),onMouseEnter:$o(p,M),onMouseLeave:$o(_,b),onTouchStart:$o(g,M)}]:[!1,x,{}]}function $o(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function oE({page:s,...e}){let{router:i}=Fv(),r=se.useMemo(()=>Mv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?se.createElement(cE,{page:s,matches:r,...e}):null}function lE(s){let{manifest:e,routeModules:i}=Bv(),[r,l]=se.useState([]);return se.useEffect(()=>{let c=!1;return eE(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function cE({page:s,matches:e,...i}){let r=kr(),{manifest:l,routeModules:c}=Bv(),{basename:f}=Fv(),{loaderData:h,matches:m}=rE(),p=se.useMemo(()=>M_(s,e,m,l,r,"data"),[s,e,m,l,r]),_=se.useMemo(()=>M_(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=se.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,T=!1;if(e.forEach(v=>{let D=l.routes[v.route.id];!D||!D.hasLoader||(!p.some(C=>C.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:b.add(v.route.id))}),b.size===0)return[];let y=QM(s,f,"data");return T&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,s,c]),x=se.useMemo(()=>tE(_,l),[_,l]),M=lE(_);return se.createElement(se.Fragment,null,g.map(b=>se.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),x.map(b=>se.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:T})=>se.createElement("link",{key:b,nonce:i.nonce,...T})))}function uE(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var fE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fE&&(window.__reactRouterVersion="7.11.0")}catch{}function dE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=se.useRef();l.current==null&&(l.current=qy({window:r,v5Compat:!0}));let c=l.current,[f,h]=se.useState({action:c.action,location:c.location}),m=se.useCallback(p=>{i===!1?h(p):se.startTransition(()=>h(p))},[i]);return se.useLayoutEffect(()=>c.listen(m),[c,m]),se.createElement(GM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gv=se.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b){let{basename:T,unstable_useTransitions:y}=se.useContext(yi),v=typeof p=="string"&&Hv.test(p),D=Cv(p,T);p=D.to;let C=AM(p,{relative:l}),[L,z,B]=sE(r,M),F=gE(p,{replace:f,state:h,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y});function j(U){e&&e(U),U.defaultPrevented||F(U)}let A=se.createElement("a",{...M,...B,href:D.absoluteURL||C,onClick:D.isExternal||c?e:j,ref:uE(b,z),target:m,"data-discover":!v&&i==="render"?"true":void 0});return L&&!v?se.createElement(se.Fragment,null,A,se.createElement(oE,{page:C})):A});Gv.displayName="Link";var hE=se.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},_){let g=_l(f,{relative:p.relative}),x=kr(),M=se.useContext(du),{navigator:b,basename:T}=se.useContext(yi),y=M!=null&&yE(g)&&h===!0,v=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,D=x.pathname,C=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&T&&(C=Ta(C,T)||C);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=D===v||!l&&D.startsWith(v)&&D.charAt(L)==="/",B=C!=null&&(C===v||!l&&C.startsWith(v)&&C.charAt(v.length)==="/"),F={isActive:z,isPending:B,isTransitioning:y},j=z?e:void 0,A;typeof r=="function"?A=r(F):A=[r,z?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let U=typeof c=="function"?c(F):c;return se.createElement(Gv,{...p,"aria-current":j,className:A,ref:_,style:U,to:f,viewTransition:h},typeof m=="function"?m(F):m)});hE.displayName="NavLink";var pE=se.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=eu,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b)=>{let{unstable_useTransitions:T}=se.useContext(yi),y=xE(),v=SE(h,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",C=typeof h=="string"&&Hv.test(h),L=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let B=z.nativeEvent.submitter,F=B?.getAttribute("formmethod")||f,j=()=>y(B||z.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?se.startTransition(()=>j()):j()};return se.createElement("form",{ref:b,method:D,action:v,onSubmit:r?m:L,...M,"data-discover":!C&&s==="render"?"true":void 0})});pE.displayName="Form";function mE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vv(s){let e=se.useContext(eo);return en(e,mE(s)),e}function gE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=Ca(),_=kr(),g=_l(s,{relative:c});return se.useCallback(x=>{if(YM(x,e)){x.preventDefault();let M=i!==void 0?i:cl(_)===cl(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?se.startTransition(()=>b()):b()}},[_,p,g,i,r,e,s,l,c,f,h,m])}var _E=0,vE=()=>`__${String(++_E)}__`;function xE(){let{router:s}=Vv("useSubmit"),{basename:e}=se.useContext(yi),i=zM(),r=s.fetch,l=s.navigate;return se.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:_,body:g}=KM(c,e);if(f.navigate===!1){let x=f.fetcherKey||vE();await r(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function SE(s,{relative:e}={}){let{basename:i}=se.useContext(yi),r=se.useContext(Ra);en(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={..._l(s||".",{relative:e})},f=kr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let _=h.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ma([i,c.pathname])),cl(c)}function yE(s,{relative:e}={}){let i=se.useContext(Uv);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vv("useViewTransitionState"),l=_l(s,{relative:e});if(!i.isTransitioning)return!1;let c=Ta(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ta(i.nextLocation.pathname,r)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}const ME="/assets/city2-CLHMET0Y.png";function EE(){const s=Ca(),[e,i]=se.useState(!1);se.useEffect(()=>{i(!0)},[]);const r=()=>{s("/City")};return ce.jsxs("div",{className:"min-h-screen w-full relative flex items-center justify-center overflow-hidden",children:[ce.jsx("div",{className:"absolute inset-0",children:ce.jsx("img",{src:ME,alt:"City background",className:"w-full h-full object-cover object-center"})}),ce.jsx("div",{className:"absolute inset-0 bg-black/60 "}),ce.jsxs("div",{className:"absolute inset-0 opacity-30",children:[ce.jsx("div",{className:"absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"}),ce.jsx("div",{className:"absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300"}),ce.jsx("div",{className:"absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"})]}),ce.jsxs("div",{className:`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[ce.jsxs("h1",{className:"text-5xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight",children:[ce.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 mt-2",children:"Social Media"}),ce.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300",children:"&"}),ce.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300",children:"Platforms"}),ce.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 mb-18 mt-10",children:"City"})]}),ce.jsx("p",{className:"text-white text-3xl mb-10",children:"This Game help you to explore social media apps and platofroms to use it with benefit way and develop yourself in life and career"}),ce.jsxs("button",{onClick:r,className:`group relative px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl 
                     bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-size-200 
                     text-black shadow-2xl shadow-emerald-500/40
                     hover:shadow-cyan-400/60 hover:scale-105 
                     active:scale-95
                     transition-all duration-300 ease-out
                     animate-gradient-x
                     overflow-hidden`,children:[ce.jsx("span",{className:"relative z-10 flex items-center justify-center gap-2 sm:gap-3",children:ce.jsx("span",{children:"Enter the City"})}),ce.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"})]})]}),ce.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 pointer-events-none"}),ce.jsx("style",{jsx:!0,children:`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `})]})}const hp="182",bE=0,E_=1,TE=2,nu=1,kv=2,ol=3,fr=0,Kn=1,Vi=2,Ea=0,qs=1,b_=2,T_=3,A_=4,AE=5,zr=100,wE=101,RE=102,CE=103,DE=104,UE=200,LE=201,NE=202,OE=203,dh=204,hh=205,PE=206,IE=207,zE=208,FE=209,BE=210,HE=211,GE=212,VE=213,kE=214,ph=0,mh=1,gh=2,js=3,_h=4,vh=5,xh=6,Sh=7,Xv=0,XE=1,WE=2,Wi=0,Wv=1,qv=2,Yv=3,jv=4,Zv=5,Kv=6,Qv=7,Jv=300,Vr=301,Zs=302,yh=303,Mh=304,pu=306,Eh=1e3,ya=1001,bh=1002,Ln=1003,qE=1004,Oc=1005,Fn=1006,Dd=1007,Hr=1008,si=1009,$v=1010,ex=1011,ul=1012,pp=1013,ji=1014,ki=1015,Aa=1016,mp=1017,gp=1018,fl=1020,tx=35902,nx=35899,ix=1021,ax=1022,Li=1023,wa=1026,Gr=1027,rx=1028,_p=1029,Ks=1030,vp=1031,xp=1033,iu=33776,au=33777,ru=33778,su=33779,Th=35840,Ah=35841,wh=35842,Rh=35843,Ch=36196,Dh=37492,Uh=37496,Lh=37488,Nh=37489,Oh=37490,Ph=37491,Ih=37808,zh=37809,Fh=37810,Bh=37811,Hh=37812,Gh=37813,Vh=37814,kh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,jh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,tp=36285,np=36286,YE=3200,sx=0,jE=1,lr="",Si="srgb",Qs="srgb-linear",cu="linear",Vt="srgb",Us=7680,w_=519,ZE=512,KE=513,QE=514,Sp=515,JE=516,$E=517,yp=518,eb=519,R_=35044,C_="300 es",Xi=2e3,uu=2001;function ox(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tb(){const s=dl("canvas");return s.style.display="block",s}const D_={};function U_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function wt(...s){const e="THREE."+s.shift();console.error(e,...s)}function hl(...s){const e=s.join(" ");e in D_||(D_[e]=!0,ut(...s))}function nb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class to{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,ip=180/Math.PI;function vl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function ib(s,e){return(s%e+e)%e}function Ld(s,e,i){return(1-i)*s+i*e}function el(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=c[f+0],M=c[f+1],b=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==x||p!==M||_!==b){let y=m*x+p*M+_*b+g*T;y<0&&(x=-x,M=-M,b=-b,T=-T,y=-y);let v=1-h;if(y<.9995){const D=Math.acos(y),C=Math.sin(D);v=Math.sin(v*D)/C,h=Math.sin(h*D)/C,m=m*v+x*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h}else{m=m*v+x*h,p=p*v+M*h,_=_*v+b*h,g=g*v+T*h;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[f],x=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+_*g+m*M-p*x,e[i+1]=m*b+_*x+p*g-h*M,e[i+2]=p*b+_*M+h*x-m*g,e[i+3]=_*b-h*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"YXZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"ZXY":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"ZYX":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"YZX":this._x=x*_*g+p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g-x*M*b;break;case"XZY":this._x=x*_*g-p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g+x*M*b;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+h+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),_=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*_,this.y=r+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new re,L_=new xl;class mt{constructor(e,i,r,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],M=r[5],b=r[8],T=l[0],y=l[3],v=l[6],D=l[1],C=l[4],L=l[7],z=l[2],B=l[5],F=l[8];return c[0]=f*T+h*D+m*z,c[3]=f*y+h*C+m*B,c[6]=f*v+h*L+m*F,c[1]=p*T+_*D+g*z,c[4]=p*y+_*C+g*B,c[7]=p*v+_*L+g*F,c[2]=x*T+M*D+b*z,c[5]=x*y+M*C+b*B,c[8]=x*v+M*L+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,x=h*m-_*c,M=p*c-f*m,b=i*g+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*r)*T,e[2]=(h*r-l*f)*T,e[3]=x*T,e[4]=(_*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Od.makeScale(e,i)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new mt,N_=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=Ys(l.r),l.g=Ys(l.g),l.b=Ys(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===lr?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:r,transfer:cu,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Rt=ab();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class rb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=dl("canvas")),Ls.width=e.width,Ls.height=e.height;const l=Ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=dl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sb=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Pd(l[f].image)):c.push(Pd(l[f]))}else c=Pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let ob=0;const Id=new re;class Nn extends to{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=ya,l=ya,c=Fn,f=Hr,h=Li,m=si,p=Nn.DEFAULT_ANISOTROPY,_=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=vl(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Jv;Nn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,L=(M+1)/2,z=(v+1)/2,B=(_+x)/4,F=(g+T)/4,j=(b+y)/4;return C>L&&C>z?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=B/r,c=F/r):L>z?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=B/l,c=j/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=F/c,l=j/c),this.set(r,l,c,i),this}let D=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(g-T)/D,this.z=(x-_)/D,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lb extends to{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Nn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Mp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends lb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class lx extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cb extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ri):Ri.fromBufferAttribute(c,f),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pc.copy(r.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),Ic.subVectors(this.max,tl),Ns.subVectors(e.a,tl),Os.subVectors(e.b,tl),Ps.subVectors(e.c,tl),nr.subVectors(Os,Ns),ir.subVectors(Ps,Os),Dr.subVectors(Ns,Ps);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Dr.z,Dr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Dr.z,0,-Dr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Dr.y,Dr.x,0];return!zd(i,Ns,Os,Ps,Ic)||(i=[1,0,0,0,1,0,0,0,1],!zd(i,Ns,Os,Ps,Ic))?!1:(zc.crossVectors(nr,ir),i=[zc.x,zc.y,zc.z],zd(i,Ns,Os,Ps,Ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new re,new re,new re,new re,new re,new re,new re,new re],Ri=new re,Pc=new Sl,Ns=new re,Os=new re,Ps=new re,nr=new re,ir=new re,Dr=new re,tl=new re,Ic=new re,zc=new re,Ur=new re;function zd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ur.fromArray(s,c);const h=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),_=r.dot(Ur);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const ub=new Sl,nl=new re,Fd=new re;class Ep{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ub.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const i=nl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(nl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(Fd)),this.expandByPoint(nl.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new re,Bd=new re,Fc=new re,ar=new re,Hd=new re,Bc=new re,Gd=new re;class cx{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bd.copy(e).add(i).multiplyScalar(.5),Fc.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Fc),h=ar.dot(this.direction),m=-ar.dot(Fc),p=ar.lengthSq(),_=Math.abs(1-f*f);let g,x,M,b;if(_>0)if(g=f*m-h,x=f*h-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,M=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Bd).addScaledVector(Fc,x),M}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,r,l,c){Hd.subVectors(i,e),Bc.subVectors(r,e),Gd.crossVectors(Hd,Bc);let f=this.direction.dot(Gd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ar.subVectors(this.origin,e);const m=h*this.direction.dot(Bc.crossVectors(ar,Bc));if(m<0)return null;const p=h*this.direction.dot(Hd.cross(ar));if(p<0||m+p>f)return null;const _=-h*ar.dot(Gd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,c,f,h,m,p,_,g,x,M,b,T,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,_,g,x,M,b,T,y)}set(e,i,r,l,c,f,h,m,p,_,g,x,M,b,T,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Is.setFromMatrixColumn(e,0).length(),c=1/Is.setFromMatrixColumn(e,1).length(),f=1/Is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x+T*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=M*h-b,i[6]=T+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x-T*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*_,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*_,M=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+b,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=f*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fb,e,db)}lookAt(e,i,r){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),rr.crossVectors(r,ai),rr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),rr.crossVectors(r,ai)),rr.normalize(),Hc.crossVectors(ai,rr),l[0]=rr.x,l[4]=Hc.x,l[8]=ai.x,l[1]=rr.y,l[5]=Hc.y,l[9]=ai.y,l[2]=rr.z,l[6]=Hc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],M=r[13],b=r[2],T=r[6],y=r[10],v=r[14],D=r[3],C=r[7],L=r[11],z=r[15],B=l[0],F=l[4],j=l[8],A=l[12],U=l[1],O=l[5],V=l[9],X=l[13],ie=l[2],ae=l[6],P=l[10],H=l[14],$=l[3],pe=l[7],fe=l[11],N=l[15];return c[0]=f*B+h*U+m*ie+p*$,c[4]=f*F+h*O+m*ae+p*pe,c[8]=f*j+h*V+m*P+p*fe,c[12]=f*A+h*X+m*H+p*N,c[1]=_*B+g*U+x*ie+M*$,c[5]=_*F+g*O+x*ae+M*pe,c[9]=_*j+g*V+x*P+M*fe,c[13]=_*A+g*X+x*H+M*N,c[2]=b*B+T*U+y*ie+v*$,c[6]=b*F+T*O+y*ae+v*pe,c[10]=b*j+T*V+y*P+v*fe,c[14]=b*A+T*X+y*H+v*N,c[3]=D*B+C*U+L*ie+z*$,c[7]=D*F+C*O+L*ae+z*pe,c[11]=D*j+C*V+L*P+z*fe,c[15]=D*A+C*X+L*H+z*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],M=e[14],b=e[3],T=e[7],y=e[11],v=e[15],D=m*M-p*x,C=h*M-p*g,L=h*x-m*g,z=f*M-p*_,B=f*x-m*_,F=f*g-h*_;return i*(T*D-y*C+v*L)-r*(b*D-y*z+v*B)+l*(b*C-T*z+v*F)-c*(b*L-T*B+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],M=e[11],b=e[12],T=e[13],y=e[14],v=e[15],D=g*y*p-T*x*p+T*m*M-h*y*M-g*m*v+h*x*v,C=b*x*p-_*y*p-b*m*M+f*y*M+_*m*v-f*x*v,L=_*T*p-b*g*p+b*h*M-f*T*M-_*h*v+f*g*v,z=b*g*m-_*T*m-b*h*x+f*T*x+_*h*y-f*g*y,B=i*D+r*C+l*L+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=D*F,e[1]=(T*x*c-g*y*c-T*l*M+r*y*M+g*l*v-r*x*v)*F,e[2]=(h*y*c-T*m*c+T*l*p-r*y*p-h*l*v+r*m*v)*F,e[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*M-r*m*M)*F,e[4]=C*F,e[5]=(_*y*c-b*x*c+b*l*M-i*y*M-_*l*v+i*x*v)*F,e[6]=(b*m*c-f*y*c-b*l*p+i*y*p+f*l*v-i*m*v)*F,e[7]=(f*x*c-_*m*c+_*l*p-i*x*p-f*l*M+i*m*M)*F,e[8]=L*F,e[9]=(b*g*c-_*T*c-b*r*M+i*T*M+_*r*v-i*g*v)*F,e[10]=(f*T*c-b*h*c+b*r*p-i*T*p-f*r*v+i*h*v)*F,e[11]=(_*h*c-f*g*c-_*r*p+i*g*p+f*r*M-i*h*M)*F,e[12]=z*F,e[13]=(_*T*l-b*g*l+b*r*x-i*T*x-_*r*y+i*g*y)*F,e[14]=(b*h*l-f*T*l-b*r*m+i*T*m+f*r*y-i*h*y)*F,e[15]=(f*g*l-_*h*l+_*r*m-i*g*m-f*r*x+i*h*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,x=c*p,M=c*_,b=c*g,T=f*_,y=f*g,v=h*g,D=m*p,C=m*_,L=m*g,z=r.x,B=r.y,F=r.z;return l[0]=(1-(T+v))*z,l[1]=(M+L)*z,l[2]=(b-C)*z,l[3]=0,l[4]=(M-L)*B,l[5]=(1-(x+v))*B,l[6]=(y+D)*B,l[7]=0,l[8]=(b+C)*F,l[9]=(y-D)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Is.set(l[0],l[1],l[2]).length();const f=Is.set(l[4],l[5],l[6]).length(),h=Is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ci.copy(this);const p=1/c,_=1/f,g=1/h;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Xi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(h===Xi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===uu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Xi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(h===Xi)b=-2/(f-c),T=-(f+c)/(f-c);else if(h===uu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Is=new re,Ci=new tn,fb=new re(0,0,0),db=new re(1,1,1),rr=new re,Hc=new re,ai=new re,P_=new tn,I_=new xl;class Zi{constructor(e=0,i=0,r=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hb=0;const z_=new re,zs=new xl,_a=new tn,Gc=new re,il=new re,pb=new re,mb=new xl,F_=new re(1,0,0),B_=new re(0,1,0),H_=new re(0,0,1),G_={type:"added"},gb={type:"removed"},Fs={type:"childadded",child:null},Vd={type:"childremoved",child:null};class Bn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new re,i=new Zi,r=new xl,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new mt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return zs.setFromAxisAngle(e,i),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,i){return zs.setFromAxisAngle(e,i),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Gc.copy(e):Gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(il,Gc,this.up):_a.lookAt(Gc,il,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),zs.setFromRotationMatrix(_a),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gb),Vd.child=e,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new re(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new re,va=new re,kd=new re,xa=new re,Bs=new re,Hs=new re,V_=new re,Xd=new re,Wd=new re,qd=new re,Yd=new sn,jd=new sn,Zd=new sn;class Ui{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Di.subVectors(l,i),va.subVectors(r,i),kd.subVectors(e,i);const f=Di.dot(Di),h=Di.dot(va),m=Di.dot(kd),p=va.dot(va),_=va.dot(kd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-h*_)*x,b=(f*_-h*m)*x;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(h,xa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Yd.setScalar(0),jd.setScalar(0),Zd.setScalar(0),Yd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yd,c.x),f.addScaledVector(jd,c.y),f.addScaledVector(Zd,c.z),f}static isFrontFacing(e,i,r,l){return Di.subVectors(r,i),va.subVectors(e,i),Di.cross(va).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Bs.subVectors(l,r),Hs.subVectors(c,r),Xd.subVectors(e,r);const m=Bs.dot(Xd),p=Hs.dot(Xd);if(m<=0&&p<=0)return i.copy(r);Wd.subVectors(e,l);const _=Bs.dot(Wd),g=Hs.dot(Wd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Bs,f);qd.subVectors(e,c);const M=Bs.dot(qd),b=Hs.dot(qd);if(b>=0&&M<=b)return i.copy(c);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Hs,h);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return V_.subVectors(c,l),h=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(V_,h);const v=1/(y+T+x);return f=T*v,h=x*v,i.copy(r).addScaledVector(Bs,f).addScaledVector(Hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function Kd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=ib(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Kd(f,c,e+1/3),this.g=Kd(f,c,e),this.b=Kd(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=ux[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Rt.workingToColorSpace(zn.copy(this),e),Math.round(bt(zn.r*255,0,255))*65536+Math.round(bt(zn.g*255,0,255))*256+Math.round(bt(zn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Si){Rt.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Vc);const r=Ld(sr.h,Vc.h,i),l=Ld(sr.s,Vc.s,i),c=Ld(sr.l,Vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ct;Ct.NAMES=ux;let _b=0;class yl extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=vl(),this.name="",this.type="Material",this.blending=qs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=hh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dh&&(r.blendSrc=this.blendSrc),this.blendDst!==hh&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fx extends yl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new re,kc=new Dt;let vb=0;class Yi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=R_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)kc.fromBufferAttribute(this,i),kc.applyMatrix3(e),this.setXY(i,kc.x,kc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=el(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=el(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=el(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=el(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=el(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class dx extends Yi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hx extends Yi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vn extends Yi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xb=0;const vi=new tn,Qd=new Bn,Gs=new re,ri=new Sl,al=new Sl,Sn=new re;class Oi extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?hx:dx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,r){return vi.makeTranslation(e,i,r),this.applyMatrix4(vi),this}scale(e,i,r){return vi.makeScale(e,i,r),this.applyMatrix4(vi),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ep);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];al.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ri.min,al.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,al.max),ri.expandByPoint(Sn)):(ri.expandByPoint(al.min),ri.expandByPoint(al.max))}ri.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Sn.fromBufferAttribute(h,p),m&&(Gs.fromBufferAttribute(e,p),Sn.add(Gs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new re,m[j]=new re;const p=new re,_=new re,g=new re,x=new Dt,M=new Dt,b=new Dt,T=new re,y=new re;function v(j,A,U){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),x.fromBufferAttribute(c,j),M.fromBufferAttribute(c,A),b.fromBufferAttribute(c,U),_.sub(p),g.sub(p),M.sub(x),b.sub(x);const O=1/(M.x*b.y-b.x*M.y);isFinite(O)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(O),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(O),h[j].add(T),h[A].add(T),h[U].add(T),m[j].add(y),m[A].add(y),m[U].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,A=D.length;j<A;++j){const U=D[j],O=U.start,V=U.count;for(let X=O,ie=O+V;X<ie;X+=3)v(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const C=new re,L=new re,z=new re,B=new re;function F(j){z.fromBufferAttribute(l,j),B.copy(z);const A=h[j];C.copy(A),C.sub(z.multiplyScalar(z.dot(A))).normalize(),L.crossVectors(B,A);const O=L.dot(m[j])<0?-1:1;f.setXYZW(j,C.x,C.y,C.z,O)}for(let j=0,A=D.length;j<A;++j){const U=D[j],O=U.start,V=U.count;for(let X=O,ie=O+V;X<ie;X+=3)F(e.getX(X+0)),F(e.getX(X+1)),F(e.getX(X+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,_=new re,g=new re;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[M++]}return new Yi(x,_,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,M=g.length;x<M;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new tn,Lr=new cx,Xc=new Ep,X_=new re,Wc=new re,qc=new re,Yc=new re,Jd=new re,jc=new re,W_=new re,Zc=new re;class pt extends Bn{constructor(e=new Oi,i=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Jd.fromBufferAttribute(g,e),f?jc.addScaledVector(Jd,_):jc.addScaledVector(Jd.sub(i),_))}i.add(jc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Xc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Xc,X_)===null||Lr.origin.distanceToSquared(X_)>(e.far-e.near)**2))&&(k_.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(k_),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],D=Math.max(y.start,M.start),C=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let L=D,z=C;L<z;L+=3){const B=h.getX(L),F=h.getX(L+1),j=h.getX(L+2);l=Kc(this,v,e,r,p,_,g,B,F,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const D=h.getX(y),C=h.getX(y+1),L=h.getX(y+2);l=Kc(this,f,e,r,p,_,g,D,C,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],D=Math.max(y.start,M.start),C=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=D,z=C;L<z;L+=3){const B=L,F=L+1,j=L+2;l=Kc(this,v,e,r,p,_,g,B,F,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const D=y,C=y+1,L=y+2;l=Kc(this,f,e,r,p,_,g,D,C,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Sb(s,e,i,r,l,c,f,h){let m;if(e.side===Kn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===fr,h),m===null)return null;Zc.copy(h),Zc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Zc);return p<i.near||p>i.far?null:{distance:p,point:Zc.clone(),object:s}}function Kc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Wc),s.getVertexPosition(m,qc),s.getVertexPosition(p,Yc);const _=Sb(s,e,i,r,Wc,qc,Yc,W_);if(_){const g=new re;Ui.getBarycoord(W_,Wc,qc,Yc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new Dt)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new Dt)),f&&(_.normal=Ui.getInterpolatedAttribute(f,h,m,p,g,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};Ui.getNormal(Wc,qc,Yc,x.normal),_.face=x,_.barycoord=g}return _}class oi extends Oi{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(g,2));function b(T,y,v,D,C,L,z,B,F,j,A){const U=L/F,O=z/j,V=L/2,X=z/2,ie=B/2,ae=F+1,P=j+1;let H=0,$=0;const pe=new re;for(let fe=0;fe<P;fe++){const N=fe*O-X;for(let ee=0;ee<ae;ee++){const ve=ee*U-V;pe[T]=ve*D,pe[y]=N*C,pe[v]=ie,p.push(pe.x,pe.y,pe.z),pe[T]=0,pe[y]=0,pe[v]=B>0?1:-1,_.push(pe.x,pe.y,pe.z),g.push(ee/F),g.push(1-fe/j),H+=1}}for(let fe=0;fe<j;fe++)for(let N=0;N<F;N++){const ee=x+N+ae*fe,ve=x+N+ae*(fe+1),Ae=x+(N+1)+ae*(fe+1),Pe=x+(N+1)+ae*fe;m.push(ee,ve,Pe),m.push(ve,Ae,Pe),$+=6}h.addGroup(M,$,A),M+=$,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(s){const e={};for(let i=0;i<s.length;i++){const r=Js(s[i]);for(const l in r)e[l]=r[l]}return e}function yb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function px(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Mb={clone:Js,merge:Gn};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends yl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new re,q_=new Dt,Y_=new Dt;class yn extends mx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,i){return this.getViewBounds(e,q_,Y_),i.subVectors(Y_,q_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Vs=-90,ks=1;class Tb extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yn(Vs,ks,e,i);l.layers=this.layers,this.add(l);const c=new yn(Vs,ks,e,i);c.layers=this.layers,this.add(c);const f=new yn(Vs,ks,e,i);f.layers=this.layers,this.add(f);const h=new yn(Vs,ks,e,i);h.layers=this.layers,this.add(h);const m=new yn(Vs,ks,e,i);m.layers=this.layers,this.add(m);const p=new yn(Vs,ks,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class gx extends Nn{constructor(e=[],i=Vr,r,l,c,f,h,m,p,_){super(e,i,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _x extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new oi(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new pt(l,c),h=i.minFilter;return i.minFilter===Hr&&(i.minFilter=Fn),new Tb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class cr extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new cr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Tp{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=i,this.far=r}clone(){return new Tp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xr extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wb extends Nn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=Ln,_=Ln,g,x){super(null,f,h,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new re,Rb=new re,Cb=new mt;class Ir{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=eh.subVectors(r,i).cross(Rb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Cb.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Ep,Db=new Dt(.5,.5),Qc=new re;class Ap{constructor(e=new Ir,i=new Ir,r=new Ir,l=new Ir,c=new Ir,f=new Ir){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Xi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],M=c[7],b=c[8],T=c[9],y=c[10],v=c[11],D=c[12],C=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-f,M-_,v-b,z-D).normalize(),l[1].setComponents(p+f,M+_,v+b,z+D).normalize(),l[2].setComponents(p+h,M+g,v+T,z+C).normalize(),l[3].setComponents(p-h,M-g,v-T,z-C).normalize(),r)l[4].setComponents(m,x,y,L).normalize(),l[5].setComponents(p-m,M-x,v-y,z-L).normalize();else if(l[4].setComponents(p-m,M-x,v-y,z-L).normalize(),i===Xi)l[5].setComponents(p+m,M+x,v+y,z+L).normalize();else if(i===uu)l[5].setComponents(m,x,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=Db.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Qc.x=l.normal.x>0?e.max.x:e.min.x,Qc.y=l.normal.y>0?e.max.y:e.min.y,Qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class th extends Nn{constructor(e,i,r,l,c,f,h,m,p){super(e,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends Nn{constructor(e,i,r=ji,l,c,f,h=Ln,m=Ln,p,_=wa,g=1){if(_!==wa&&_!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ub extends pl{constructor(e,i=ji,r=Vr,l,c,f=Ln,h=Ln,m,p=wa){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vx extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends Oi{constructor(e=1,i=1,r=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],M=[];let b=0;const T=[],y=r/2;let v=0;D(),f===!1&&(e>0&&C(!0),i>0&&C(!1)),this.setIndex(_),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(x,3)),this.setAttribute("uv",new Vn(M,2));function D(){const L=new re,z=new re;let B=0;const F=(i-e)/r;for(let j=0;j<=c;j++){const A=[],U=j/c,O=U*(i-e)+e;for(let V=0;V<=l;V++){const X=V/l,ie=X*m+h,ae=Math.sin(ie),P=Math.cos(ie);z.x=O*ae,z.y=-U*r+y,z.z=O*P,g.push(z.x,z.y,z.z),L.set(ae,F,P).normalize(),x.push(L.x,L.y,L.z),M.push(X,1-U),A.push(b++)}T.push(A)}for(let j=0;j<l;j++)for(let A=0;A<c;A++){const U=T[A][j],O=T[A+1][j],V=T[A+1][j+1],X=T[A][j+1];(e>0||A!==0)&&(_.push(U,O,X),B+=3),(i>0||A!==c-1)&&(_.push(O,V,X),B+=3)}p.addGroup(v,B,0),v+=B}function C(L){const z=b,B=new Dt,F=new re;let j=0;const A=L===!0?e:i,U=L===!0?1:-1;for(let V=1;V<=l;V++)g.push(0,y*U,0),x.push(0,U,0),M.push(.5,.5),b++;const O=b;for(let V=0;V<=l;V++){const ie=V/l*m+h,ae=Math.cos(ie),P=Math.sin(ie);F.x=A*P,F.y=y*U,F.z=A*ae,g.push(F.x,F.y,F.z),x.push(0,U,0),B.x=ae*.5+.5,B.y=P*.5*U+.5,M.push(B.x,B.y),b++}for(let V=0;V<l;V++){const X=z+V,ie=O+V;L===!0?_.push(ie,ie+1,X):_.push(ie+1,ie,X),j+=3}p.addGroup(v,j,L===!0?1:2),v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xi extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=e/h,x=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const D=v*x-f;for(let C=0;C<p;C++){const L=C*g-c;b.push(L,-D,0),T.push(0,0,1),y.push(C/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const C=D+p*v,L=D+p*(v+1),z=D+1+p*(v+1),B=D+1+p*v;M.push(C,L,B),M.push(L,z,B)}this.setIndex(M),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(T,3)),this.setAttribute("uv",new Vn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class fu extends Oi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const _=[],g=new re,x=new re,M=[],b=[],T=[],y=[];for(let v=0;v<=r;v++){const D=[],C=v/r;let L=0;v===0&&f===0?L=.5/i:v===r&&m===Math.PI&&(L=-.5/i);for(let z=0;z<=i;z++){const B=z/i;g.x=-e*Math.cos(l+B*c)*Math.sin(f+C*h),g.y=e*Math.cos(f+C*h),g.z=e*Math.sin(l+B*c)*Math.sin(f+C*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(B+L,1-C),D.push(p++)}_.push(D)}for(let v=0;v<r;v++)for(let D=0;D<i;D++){const C=_[v][D+1],L=_[v][D],z=_[v+1][D],B=_[v+1][D+1];(v!==0||f>0)&&M.push(C,L,B),(v!==r-1||m<Math.PI)&&M.push(L,z,B)}this.setIndex(M),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(T,3)),this.setAttribute("uv",new Vn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lb extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rn extends yl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sx,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nb extends yl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends yl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pb{constructor(e,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ib=new Pb;class wp{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class zb extends wp{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=nh.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0);else{let g=Xs.get(f);g===void 0&&(g=[],Xs.set(f,g)),g.push({onLoad:i,onError:l})}return f}const h=dl("img");function m(){_(),i&&i(this);const g=Xs.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onLoad&&M.onLoad(this)}Xs.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),nh.remove(`image:${e}`);const x=Xs.get(this)||[];for(let M=0;M<x.length;M++){const b=x[M];b.onError&&b.onError(g)}Xs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),nh.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class Wr extends wp{constructor(e){super(e)}load(e,i,r,l){const c=new Nn,f=new zb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class xx extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ih=new tn,j_=new re,Z_=new re;class Fb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;j_.setFromMatrixPosition(e.matrixWorld),i.position.copy(j_),Z_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Z_),i.updateMatrixWorld(),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rp extends mx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Bb extends Fb{constructor(){super(new Rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qr extends xx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Bb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Yr extends xx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hb extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class no{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const K_=new tn;class Gb{constructor(e,i,r=0,l=1/0){this.ray=new cx(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return K_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(K_),this}intersectObject(e,i=!0,r=[]){return ap(e,this,r,i),r.sort(Q_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)ap(e[l],this,r,i);return r.sort(Q_),r}}function Q_(s,e){return s.distance-e.distance}function ap(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)ap(c[f],e,i,!0)}}function J_(s,e,i,r){const l=Vb(r);switch(i){case ix:return s*e;case rx:return s*e/l.components*l.byteLength;case _p:return s*e/l.components*l.byteLength;case Ks:return s*e*2/l.components*l.byteLength;case vp:return s*e*2/l.components*l.byteLength;case ax:return s*e*3/l.components*l.byteLength;case Li:return s*e*4/l.components*l.byteLength;case xp:return s*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Rh:return Math.max(s,16)*Math.max(e,8)/4;case Th:case wh:return Math.max(s,8)*Math.max(e,8)/2;case Ch:case Dh:case Lh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uh:case Oh:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tp:case np:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vb(s){switch(s){case si:case $v:return{byteLength:1,components:1};case ul:case ex:case Aa:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case ji:case pp:case ki:return{byteLength:4,components:1};case tx:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);function Sx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function kb(s){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
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
#endif`,$b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iT=`#ifdef USE_IRIDESCENCE
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
#endif`,aT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hT=`#define PI 3.141592653589793
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
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mT=`vec3 transformedNormal = objectNormal;
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
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
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
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`uniform sampler2D dfgLUT;
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
}`,kT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,Q1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,rA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,dA=`#define PHONG
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
}`,hA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,yA=`uniform float rotation;
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
}`,MA=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Xb,alphahash_pars_fragment:Wb,alphamap_fragment:qb,alphamap_pars_fragment:Yb,alphatest_fragment:jb,alphatest_pars_fragment:Zb,aomap_fragment:Kb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:$b,begin_vertex:eT,beginnormal_vertex:tT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:cT,color_pars_fragment:uT,color_pars_vertex:fT,color_vertex:dT,common:hT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:_T,emissivemap_fragment:vT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:yT,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:bT,envmap_pars_vertex:TT,envmap_physical_pars_fragment:IT,envmap_vertex:AT,fog_vertex:wT,fog_pars_vertex:RT,fog_fragment:CT,fog_pars_fragment:DT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:OT,lights_pars_begin:PT,lights_toon_fragment:zT,lights_toon_pars_fragment:FT,lights_phong_fragment:BT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:kT,lights_fragment_maps:XT,lights_fragment_end:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:jT,logdepthbuf_vertex:ZT,map_fragment:KT,map_pars_fragment:QT,map_particle_fragment:JT,map_particle_pars_fragment:$T,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:S1,dithering_fragment:y1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:w1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:D1,skinning_vertex:U1,skinnormal_vertex:L1,specularmap_fragment:N1,specularmap_pars_fragment:O1,tonemapping_fragment:P1,tonemapping_pars_fragment:I1,transmission_fragment:z1,transmission_pars_fragment:F1,uv_pars_fragment:B1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:k1,background_frag:X1,backgroundCube_vert:W1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:j1,depth_vert:Z1,depth_frag:K1,distance_vert:Q1,distance_frag:J1,equirect_vert:$1,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:xA,shadow_frag:SA,sprite_vert:yA,sprite_frag:MA},Fe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Jc={r:0,b:0,g:0},Or=new Zi,EA=new tn;function bA(s,e,i,r,l,c,f){const h=new Ct(0);let m=c===!0?0:1,p,_,g=null,x=0,M=null;function b(C){let L=C.isScene===!0?C.background:null;return L&&L.isTexture&&(L=(C.backgroundBlurriness>0?i:e).get(L)),L}function T(C){let L=!1;const z=b(C);z===null?v(h,m):z&&z.isColor&&(v(z,1),L=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(C,L){const z=b(L);z&&(z.isCubeTexture||z.mapping===pu)?(_===void 0&&(_=new pt(new oi(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Js(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Or.copy(L.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Or)),_.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Vt,(g!==z||x!==z.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=z,x=z.version,M=s.toneMapping),_.layers.enableAll(),C.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new pt(new xi(2,2),new Ki({name:"BackgroundMaterial",uniforms:Js(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Vt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,M=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function v(C,L){C.getRGB(Jc,px(s)),r.buffers.color.setClear(Jc.r,Jc.g,Jc.b,L,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),m=L,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,v(h,m)},render:T,addToRenderList:y,dispose:D}}function TA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(U,O,V,X,ie){let ae=!1;const P=g(X,V,O);c!==P&&(c=P,p(c.object)),ae=M(U,X,V,ie),ae&&b(U,X,V,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ae||f)&&(f=!1,L(U,O,V,X),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function _(U){return s.deleteVertexArray(U)}function g(U,O,V){const X=V.wireframe===!0;let ie=r[U.id];ie===void 0&&(ie={},r[U.id]=ie);let ae=ie[O.id];ae===void 0&&(ae={},ie[O.id]=ae);let P=ae[X];return P===void 0&&(P=x(m()),ae[X]=P),P}function x(U){const O=[],V=[],X=[];for(let ie=0;ie<i;ie++)O[ie]=0,V[ie]=0,X[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:X,object:U,attributes:{},index:null}}function M(U,O,V,X){const ie=c.attributes,ae=O.attributes;let P=0;const H=V.getAttributes();for(const $ in H)if(H[$].location>=0){const fe=ie[$];let N=ae[$];if(N===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),fe===void 0||fe.attribute!==N||N&&fe.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==X}function b(U,O,V,X){const ie={},ae=O.attributes;let P=0;const H=V.getAttributes();for(const $ in H)if(H[$].location>=0){let fe=ae[$];fe===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(fe=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(fe=U.instanceColor));const N={};N.attribute=fe,fe&&fe.data&&(N.data=fe.data),ie[$]=N,P++}c.attributes=ie,c.attributesNum=P,c.index=X}function T(){const U=c.newAttributes;for(let O=0,V=U.length;O<V;O++)U[O]=0}function y(U){v(U,0)}function v(U,O){const V=c.newAttributes,X=c.enabledAttributes,ie=c.attributeDivisors;V[U]=1,X[U]===0&&(s.enableVertexAttribArray(U),X[U]=1),ie[U]!==O&&(s.vertexAttribDivisor(U,O),ie[U]=O)}function D(){const U=c.newAttributes,O=c.enabledAttributes;for(let V=0,X=O.length;V<X;V++)O[V]!==U[V]&&(s.disableVertexAttribArray(V),O[V]=0)}function C(U,O,V,X,ie,ae,P){P===!0?s.vertexAttribIPointer(U,O,V,ie,ae):s.vertexAttribPointer(U,O,V,X,ie,ae)}function L(U,O,V,X){T();const ie=X.attributes,ae=V.getAttributes(),P=O.defaultAttributeValues;for(const H in ae){const $=ae[H];if($.location>=0){let pe=ie[H];if(pe===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),pe!==void 0){const fe=pe.normalized,N=pe.itemSize,ee=e.get(pe);if(ee===void 0)continue;const ve=ee.buffer,Ae=ee.type,Pe=ee.bytesPerElement,Q=Ae===s.INT||Ae===s.UNSIGNED_INT||pe.gpuType===pp;if(pe.isInterleavedBufferAttribute){const ue=pe.data,be=ue.stride,De=pe.offset;if(ue.isInstancedInterleavedBuffer){for(let we=0;we<$.locationSize;we++)v($.location+we,ue.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let we=0;we<$.locationSize;we++)y($.location+we);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let we=0;we<$.locationSize;we++)C($.location+we,N/$.locationSize,Ae,fe,be*Pe,(De+N/$.locationSize*we)*Pe,Q)}else{if(pe.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)v($.location+ue,pe.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ue=0;ue<$.locationSize;ue++)y($.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ue=0;ue<$.locationSize;ue++)C($.location+ue,N/$.locationSize,Ae,fe,N*Pe,N/$.locationSize*ue*Pe,Q)}}else if(P!==void 0){const fe=P[H];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv($.location,fe);break;case 3:s.vertexAttrib3fv($.location,fe);break;case 4:s.vertexAttrib4fv($.location,fe);break;default:s.vertexAttrib1fv($.location,fe)}}}}D()}function z(){j();for(const U in r){const O=r[U];for(const V in O){const X=O[V];for(const ie in X)_(X[ie].object),delete X[ie];delete O[V]}delete r[U]}}function B(U){if(r[U.id]===void 0)return;const O=r[U.id];for(const V in O){const X=O[V];for(const ie in X)_(X[ie].object),delete X[ie];delete O[V]}delete r[U.id]}function F(U){for(const O in r){const V=r[O];if(V[U.id]===void 0)continue;const X=V[U.id];for(const ie in X)_(X[ie].object),delete X[ie];delete V[U.id]}}function j(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function AA(s,e,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function wA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Li&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const j=F===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!j)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ut("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:L,maxSamples:z,samples:B}}function RA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Ir,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||c&&!y)c?_(null):p();else{const D=c?0:r,C=D*4;let L=v.clippingState||null;m.value=L,L=_(b,x,C,M);for(let z=0;z!==C;++z)L[z]=i[z];v.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let C=0,L=M;C!==T;++C,L+=4)f.copy(g[C]).applyMatrix4(D,h),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function CA(s){let e=new WeakMap;function i(f,h){return h===yh?f.mapping=Vr:h===Mh&&(f.mapping=Zs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===yh||h===Mh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new _x(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ur=4,$_=[.125,.215,.35,.446,.526,.582],Br=20,DA=256,rl=new Rp,ev=new Ct;let ah=null,rh=0,sh=0,oh=!1;const UA=new re;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=UA}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Aa,format:Li,colorSpace:Qs,depthBuffer:!1},l=nv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LA(c)),this._blurMaterial=OA(c,e,i),this._ggxMaterial=NA(c,e,i)}return l}_compileMaterial(e){const i=new pt(new Oi,e);this._renderer.compile(i,rl)}_sceneToCubeUV(e,i,r,l,c){const m=new yn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(ev),g.toneMapping=Wi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new oi,new fx({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,v=!0):(y.color.copy(ev),v=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[C],c.y,c.z)):L===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[C]));const z=this._cubeSize;Ws(l,L*z,C>2?z:0,z,z),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===Zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ws(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,rl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,M=g*x,{_lodMax:b}=this,T=this._sizeLods[r],y=3*T*(r>b-ur?r-b+ur:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ws(c,y,v,3*T,2*T),l.setRenderTarget(c),l.render(h,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Ws(e,y,v,3*T,2*T),l.setRenderTarget(e),l.render(h,rl)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Br-1),T=c/b,y=isFinite(c)?1+Math.floor(_*T):Br;y>Br&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Br}`);const v=[];let D=0;for(let F=0;F<Br;++F){const j=F/T,A=Math.exp(-j*j/2);v.push(A),F===0?D+=A:F<y&&(D+=2*A)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:C}=this;x.dTheta.value=b,x.mipInt.value=C-r;const L=this._sizeLods[l],z=3*L*(l>C-ur?l-C+ur:0),B=4*(this._cubeSize-L);Ws(i,z,B,3*L,2*L),m.setRenderTarget(i),m.render(g,rl)}}function LA(s){const e=[],i=[],r=[];let l=s;const c=s-ur+1+$_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-ur?m=$_[f-s+ur-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,D=new Float32Array(T*b*M),C=new Float32Array(y*b*M),L=new Float32Array(v*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,j=B>2?0:-1,A=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];D.set(A,T*b*B),C.set(x,y*b*B);const U=[B,B,B,B,B,B];L.set(U,v*b*B)}const z=new Oi;z.setAttribute("position",new Yi(D,T)),z.setAttribute("uv",new Yi(C,y)),z.setAttribute("faceIndex",new Yi(L,v)),r.push(new pt(z,null)),l>ur&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function nv(s,e,i){const r=new qi(s,e,i);return r.texture.mapping=pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function NA(s,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function OA(s,e,i){const r=new Float32Array(Br),l=new re(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function iv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function av(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function PA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===yh||m===Mh,_=m===Vr||m===Zs;if(p||_){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new tv(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new tv(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function IA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&hl("WebGLRenderer: "+r+" extension not supported."),l}}}function zA(s,e,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let C=0,L=D.length;C<L;C+=3){const z=D[C+0],B=D[C+1],F=D[C+2];x.push(z,B,B,F,F,z)}}else if(b!==void 0){const D=b.array;T=b.version;for(let C=0,L=D.length/3-1;C<L;C+=3){const z=C+0,B=C+1,F=C+2;x.push(z,B,B,F,F,z)}}else return;const y=new(ox(x)?hx:dx)(x,1);y.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,y)}function _(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function FA(s,e,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*f,b),i.update(M,r,b))}function _(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function g(x,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,T,0,b);let v=0;for(let D=0;D<b;D++)v+=M[D]*T[D];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function BA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HA(s,e,i){const r=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let U=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var M=U;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),y===!0&&(L=3);let z=h.attributes.position.count*L,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*B*4*g),j=new lx(F,z,B,g);j.type=ki,j.needsUpdate=!0;const A=L*4;for(let O=0;O<g;O++){const V=v[O],X=D[O],ie=C[O],ae=z*B*4*O;for(let P=0;P<V.count;P++){const H=P*A;b===!0&&(l.fromBufferAttribute(V,P),F[ae+H+0]=l.x,F[ae+H+1]=l.y,F[ae+H+2]=l.z,F[ae+H+3]=0),T===!0&&(l.fromBufferAttribute(X,P),F[ae+H+4]=l.x,F[ae+H+5]=l.y,F[ae+H+6]=l.z,F[ae+H+7]=0),y===!0&&(l.fromBufferAttribute(ie,P),F[ae+H+8]=l.x,F[ae+H+9]=l.y,F[ae+H+10]=l.z,F[ae+H+11]=ie.itemSize===4?l.w:1)}}x={count:g,texture:j,size:new Dt(z,B)},r.set(h,x),h.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function GA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const VA={[Wv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[jv]:"ACES_FILMIC_TONE_MAPPING",[Kv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function kA(s,e,i,r,l){const c=new qi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new qi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),h=new Oi;h.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Vn([0,2,0,0,2,0],2));const m=new Lb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new pt(h,m),_=new Rp(-1,1,1,-1,0,1);let g=null,x=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(D,C){c.setSize(D,C),f.setSize(D,C);for(let L=0;L<y.length;L++){const z=y[L];z.setSize&&z.setSize(D,C)}},this.setEffects=function(D){y=D,v=y.length>0&&y[0].isRenderPass===!0;const C=c.width,L=c.height;for(let z=0;z<y.length;z++){const B=y[z];B.setSize&&B.setSize(C,L)}},this.begin=function(D,C){if(M||D.toneMapping===Wi&&y.length===0)return!1;if(T=C,C!==null){const L=C.width,z=C.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return v===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Wi,!0},this.hasRenderPass=function(){return v},this.end=function(D,C){D.toneMapping=b,M=!0;let L=c,z=f;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(D,z,L,C),F.needsSwap!==!1)){const j=L;L=z,z=j}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},Rt.getTransfer(g)===Vt&&(m.defines.SRGB_TRANSFER="");const B=VA[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(T),D.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const yx=new Nn,rp=new pl(1,1),Mx=new lx,Ex=new cb,bx=new gx,rv=[],sv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function io(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=rv[l];if(c===void 0&&(c=new Float32Array(l),rv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function gu(s,e){let i=sv[e];i===void 0&&(i=new Int32Array(e),sv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function XA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function qA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function YA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function jA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;cv.set(r),s.uniformMatrix2fv(this.addr,!1,cv),vn(i,r)}}function ZA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;lv.set(r),s.uniformMatrix3fv(this.addr,!1,lv),vn(i,r)}}function KA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;ov.set(r),s.uniformMatrix4fv(this.addr,!1,ov),vn(i,r)}}function QA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function ew(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function tw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function nw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function iw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function aw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function rw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(rp.compareFunction=i.isReversedDepthBuffer()?yp:Sp,c=rp):c=yx,i.setTexture2D(e||c,l)}function sw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ex,l)}function ow(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||bx,l)}function lw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Mx,l)}function cw(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return qA;case 35666:return YA;case 35674:return jA;case 35675:return ZA;case 35676:return KA;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return $A;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}function uw(s,e){s.uniform1fv(this.addr,e)}function fw(s,e){const i=io(e,this.size,2);s.uniform2fv(this.addr,i)}function dw(s,e){const i=io(e,this.size,3);s.uniform3fv(this.addr,i)}function hw(s,e){const i=io(e,this.size,4);s.uniform4fv(this.addr,i)}function pw(s,e){const i=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function mw(s,e){const i=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function gw(s,e){const i=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function _w(s,e){s.uniform1iv(this.addr,e)}function vw(s,e){s.uniform2iv(this.addr,e)}function xw(s,e){s.uniform3iv(this.addr,e)}function Sw(s,e){s.uniform4iv(this.addr,e)}function yw(s,e){s.uniform1uiv(this.addr,e)}function Mw(s,e){s.uniform2uiv(this.addr,e)}function Ew(s,e){s.uniform3uiv(this.addr,e)}function bw(s,e){s.uniform4uiv(this.addr,e)}function Tw(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=rp:f=yx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function Aw(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ex,c[f])}function ww(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||bx,c[f])}function Rw(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Mx,c[f])}function Cw(s){switch(s){case 5126:return uw;case 35664:return fw;case 35665:return dw;case 35666:return hw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return _w;case 35667:case 35671:return vw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return yw;case 36294:return Mw;case 36295:return Ew;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Rw}}class Dw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=cw(i.type)}}class Uw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Cw(i.type)}}class Lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function uv(s,e){s.seq.push(e),s.map[e.id]=e}function Nw(s,e,i){const r=s.name,l=r.length;for(lh.lastIndex=0;;){const c=lh.exec(r),f=lh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){uv(i,p===void 0?new Dw(h,s,e):new Uw(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new Lw(h),uv(i,g)),i=g}}}class ou{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);Nw(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function fv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Ow=37297;let Pw=0;function Iw(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const dv=new mt;function zw(s){Rt._getMatrix(dv,Rt.workingColorSpace,s);const e=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case cu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Iw(s.getShaderSource(e),h)}else return c}function Fw(s,e){const i=zw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Bw={[Wv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[jv]:"ACESFilmic",[Kv]:"AgX",[Qv]:"Neutral",[Zv]:"Custom"};function Hw(s,e){const i=Bw[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new re;function Gw(){Rt.getLuminanceCoefficients($c);const s=$c.x.toFixed(4),e=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function kw(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Xw(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function ll(s){return s!==""}function pv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(s){return s.replace(Ww,Yw)}const qw=new Map;function Yw(s,e){let i=gt[e];if(i===void 0){const r=qw.get(e);if(r!==void 0)i=gt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sp(i)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(s){return s.replace(jw,Zw)}function Zw(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kw={[nu]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function Qw(s){return Kw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jw={[Vr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function $w(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Jw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eR={[Zs]:"ENVMAP_MODE_REFRACTION"};function tR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nR={[Xv]:"ENVMAP_BLENDING_MULTIPLY",[XE]:"ENVMAP_BLENDING_MIX",[WE]:"ENVMAP_BLENDING_ADD"};function iR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nR[s.combine]||"ENVMAP_BLENDING_NONE"}function aR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=Qw(i),p=$w(i),_=tR(i),g=iR(i),x=aR(i),M=Vw(i),b=kw(c),T=l.createProgram();let y,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),v.length>0&&(v+=`
`)):(y=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),v=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Wi?Hw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Fw("linearToOutputTexel",i.outputColorSpace),Gw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=sp(f),f=pv(f,i),f=mv(f,i),h=sp(h),h=pv(h,i),h=mv(h,i),f=gv(f),h=gv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=D+y+f,L=D+v+h,z=fv(l,l.VERTEX_SHADER,C),B=fv(l,l.FRAGMENT_SHADER,L);l.attachShader(T,z),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(O){if(s.debug.checkShaderErrors){const V=l.getProgramInfoLog(T)||"",X=l.getShaderInfoLog(z)||"",ie=l.getShaderInfoLog(B)||"",ae=V.trim(),P=X.trim(),H=ie.trim();let $=!0,pe=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,z,B);else{const fe=hv(l,z,"vertex"),N=hv(l,B,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ae+`
`+fe+`
`+N)}else ae!==""?ut("WebGLProgram: Program Info Log:",ae):(P===""||H==="")&&(pe=!1);pe&&(O.diagnostics={runnable:$,programLog:ae,vertexShader:{log:P,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(z),l.deleteShader(B),j=new ou(l,T),A=Xw(l,T)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,Ow)),U},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=B,this}let sR=0;class oR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new lR(e),i.set(e,r)),r}}class lR{constructor(e){this.id=sR++,this.code=e,this.usedTimes=0}}function cR(s,e,i,r,l,c,f){const h=new bp,m=new oR,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,U,O,V,X){const ie=V.fog,ae=X.geometry,P=A.isMeshStandardMaterial?V.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||P),$=H&&H.mapping===pu?H.image.height:null,pe=b[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&ut("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const fe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,N=fe!==void 0?fe.length:0;let ee=0;ae.morphAttributes.position!==void 0&&(ee=1),ae.morphAttributes.normal!==void 0&&(ee=2),ae.morphAttributes.color!==void 0&&(ee=3);let ve,Ae,Pe,Q;if(pe){const At=Gi[pe];ve=At.vertexShader,Ae=At.fragmentShader}else ve=A.vertexShader,Ae=A.fragmentShader,m.update(A),Pe=m.getVertexShaderID(A),Q=m.getFragmentShaderID(A);const ue=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),De=X.isInstancedMesh===!0,we=X.isBatchedMesh===!0,We=!!A.map,vt=!!A.matcap,it=!!H,at=!!A.aoMap,_t=!!A.lightMap,st=!!A.bumpMap,kt=!!A.normalMap,k=!!A.displacementMap,Xt=!!A.emissiveMap,Tt=!!A.metalnessMap,It=!!A.roughnessMap,Ze=A.anisotropy>0,I=A.clearcoat>0,E=A.dispersion>0,Y=A.iridescence>0,_e=A.sheen>0,Me=A.transmission>0,me=Ze&&!!A.anisotropyMap,Qe=I&&!!A.clearcoatMap,Le=I&&!!A.clearcoatNormalMap,qe=I&&!!A.clearcoatRoughnessMap,rt=Y&&!!A.iridescenceMap,Te=Y&&!!A.iridescenceThicknessMap,Re=_e&&!!A.sheenColorMap,Ge=_e&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Ne=!!A.specularColorMap,dt=!!A.specularIntensityMap,q=Me&&!!A.transmissionMap,Ie=Me&&!!A.thicknessMap,Ce=!!A.gradientMap,He=!!A.alphaMap,Ee=A.alphaTest>0,ye=!!A.alphaHash,Ue=!!A.extensions;let ot=Wi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Ft={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Pe,customFragmentShaderID:Q,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:we,batchingColor:we&&X._colorsTexture!==null,instancing:De,instancingColor:De&&X.instanceColor!==null,instancingMorph:De&&X.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Qs,alphaToCoverage:!!A.alphaToCoverage,map:We,matcap:vt,envMap:it,envMapMode:it&&H.mapping,envMapCubeUVHeight:$,aoMap:at,lightMap:_t,bumpMap:st,normalMap:kt,displacementMap:k,emissiveMap:Xt,normalMapObjectSpace:kt&&A.normalMapType===jE,normalMapTangentSpace:kt&&A.normalMapType===sx,metalnessMap:Tt,roughnessMap:It,anisotropy:Ze,anisotropyMap:me,clearcoat:I,clearcoatMap:Qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:qe,dispersion:E,iridescence:Y,iridescenceMap:rt,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Ne,specularIntensityMap:dt,transmission:Me,transmissionMap:q,thicknessMap:Ie,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===qs&&A.alphaToCoverage===!1,alphaMap:He,alphaTest:Ee,alphaHash:ye,combine:A.combine,mapUv:We&&T(A.map.channel),aoMapUv:at&&T(A.aoMap.channel),lightMapUv:_t&&T(A.lightMap.channel),bumpMapUv:st&&T(A.bumpMap.channel),normalMapUv:kt&&T(A.normalMap.channel),displacementMapUv:k&&T(A.displacementMap.channel),emissiveMapUv:Xt&&T(A.emissiveMap.channel),metalnessMapUv:Tt&&T(A.metalnessMap.channel),roughnessMapUv:It&&T(A.roughnessMap.channel),anisotropyMapUv:me&&T(A.anisotropyMap.channel),clearcoatMapUv:Qe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(A.sheenRoughnessMap.channel),specularMapUv:Be&&T(A.specularMap.channel),specularColorMapUv:Ne&&T(A.specularColorMap.channel),specularIntensityMapUv:dt&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:Ie&&T(A.thicknessMap.channel),alphaMapUv:He&&T(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(kt||Ze),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ae.attributes.uv&&(We||He),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:We&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:Xt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Vi,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||we)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function v(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)U.push(O),U.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(D(U,A),C(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function D(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function C(A,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const U=b[A.type];let O;if(U){const V=Gi[U];O=Mb.clone(V.uniforms)}else O=A.uniforms;return O}function z(A,U){let O=g.get(U);return O!==void 0?++O.usedTimes:(O=new rR(s,U,A,c),_.push(O),g.set(U,O)),O}function B(A){if(--A.usedTimes===0){const U=_.indexOf(A);_[U]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function F(A){m.remove(A)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:L,acquireProgram:z,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:j}}function uR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function fR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,b,T,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),e++,v}function h(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||fR),r.length>1&&r.sort(x||vv),l.length>1&&l.sort(x||vv)}function _(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function dR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new xv,s.set(r,[f])):l>=c.length?(f=new xv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function hR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ct};break;case"SpotLight":i={position:new re,direction:new re,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function pR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let mR=0;function gR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _R(s){const e=new hR,i=pR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,c=new tn,f=new tn;function h(p){let _=0,g=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,D=0,C=0,L=0,z=0,B=0,F=0;p.sort(gR);for(let A=0,U=p.length;A<U;A++){const O=p[A],V=O.color,X=O.intensity,ie=O.distance;let ae=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ks?ae=O.shadow.map.texture:ae=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)_+=V.r*X,g+=V.g*X,x+=V.b*X;else if(O.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(O.sh.coefficients[P],X);F++}else if(O.isDirectionalLight){const P=e.get(O);if(P.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const H=O.shadow,$=i.get(O);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=ae,r.directionalShadowMatrix[M]=O.shadow.matrix,D++}r.directional[M]=P,M++}else if(O.isSpotLight){const P=e.get(O);P.position.setFromMatrixPosition(O.matrixWorld),P.color.copy(V).multiplyScalar(X),P.distance=ie,P.coneCos=Math.cos(O.angle),P.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),P.decay=O.decay,r.spot[T]=P;const H=O.shadow;if(O.map&&(r.spotLightMap[z]=O.map,z++,H.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[T]=H.matrix,O.castShadow){const $=i.get(O);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[T]=$,r.spotShadowMap[T]=ae,L++}T++}else if(O.isRectAreaLight){const P=e.get(O);P.color.copy(V).multiplyScalar(X),P.halfWidth.set(O.width*.5,0,0),P.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=P,y++}else if(O.isPointLight){const P=e.get(O);if(P.color.copy(O.color).multiplyScalar(O.intensity),P.distance=O.distance,P.decay=O.decay,O.castShadow){const H=O.shadow,$=i.get(O);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=ae,r.pointShadowMatrix[b]=O.shadow.matrix,C++}r.point[b]=P,b++}else if(O.isHemisphereLight){const P=e.get(O);P.skyColor.copy(O.color).multiplyScalar(X),P.groundColor.copy(O.groundColor).multiplyScalar(X),r.hemi[v]=P,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==D||j.numPointShadows!==C||j.numSpotShadows!==L||j.numSpotMaps!==z||j.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=L+z-B,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,j.directionalLength=M,j.pointLength=b,j.spotLength=T,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=D,j.numPointShadows=C,j.numSpotShadows=L,j.numSpotMaps=z,j.numLightProbes=F,r.version=mR++)}function m(p,_){let g=0,x=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const C=p[v];if(C.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),g++}else if(C.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(C.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(C.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(C.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(y),T++}}}return{setup:h,setupView:m,state:r}}function Sv(s){const e=new _R(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function vR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Sv(s),e.set(l,[h])):c>=f.length?(h=new Sv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
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
}`,yR=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],MR=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],yv=new tn,sl=new re,ch=new re;function ER(s,e,i){let r=new Ap;const l=new Dt,c=new Dt,f=new sn,h=new Nb,m=new Ob,p={},_=i.maxTextureSize,g={[fr]:Kn,[Kn]:fr,[Vi]:Vi},x=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:xR,fragmentShader:SR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Oi;b.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new pt(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let v=this.type;this.render=function(B,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===kv&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=nu);const A=s.getRenderTarget(),U=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Ea),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=v!==this.type;X&&F.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(ae=>ae.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,ae=B.length;ie<ae;ie++){const P=B[ie],H=P.shadow;if(H===void 0){ut("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();if(l.multiply($),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,H.mapSize.y=c.y)),H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ol){if(P.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(l.x,l.y,{format:Ks,type:Aa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new pl(l.x,l.y,ki),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else{P.isPointLight?(H.map=new _x(l.x),H.map.depthTexture=new Ub(l.x,ji)):(H.map=new qi(l.x,l.y),H.map.depthTexture=new pl(l.x,l.y,ji)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=wa;const fe=s.state.buffers.depth.getReversed();this.type===nu?(H.map.depthTexture.compareFunction=fe?yp:Sp,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln)}H.camera.updateProjectionMatrix()}const pe=H.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<pe;fe++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(fe);f.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),V.viewport(f)}if(P.isPointLight){const N=H.camera,ee=H.matrix,ve=P.distance||N.far;ve!==N.far&&(N.far=ve,N.updateProjectionMatrix()),sl.setFromMatrixPosition(P.matrixWorld),N.position.copy(sl),ch.copy(N.position),ch.add(yR[fe]),N.up.copy(MR[fe]),N.lookAt(ch),N.updateMatrixWorld(),ee.makeTranslation(-sl.x,-sl.y,-sl.z),yv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yv,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(P);r=H.getFrustum(),L(F,j,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===ol&&D(H,j),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(A,U,O)};function D(B,F){const j=e.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qi(l.x,l.y,{format:Ks,type:Aa})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,j,x,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,j,M,T,null)}function C(B,F,j,A){let U=null;const O=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)U=O;else if(U=j.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const V=U.uuid,X=F.uuid;let ie=p[V];ie===void 0&&(ie={},p[V]=ie);let ae=ie[X];ae===void 0&&(ae=U.clone(),ie[X]=ae,F.addEventListener("dispose",z)),U=ae}if(U.visible=F.visible,U.wireframe=F.wireframe,A===ol?U.side=F.shadowSide!==null?F.shadowSide:F.side:U.side=F.shadowSide!==null?F.shadowSide:g[F.side],U.alphaMap=F.alphaMap,U.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,U.map=F.map,U.clipShadows=F.clipShadows,U.clippingPlanes=F.clippingPlanes,U.clipIntersection=F.clipIntersection,U.displacementMap=F.displacementMap,U.displacementScale=F.displacementScale,U.displacementBias=F.displacementBias,U.wireframeLinewidth=F.wireframeLinewidth,U.linewidth=F.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const V=s.properties.get(U);V.light=j}return U}function L(B,F,j,A,U){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===ol)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const X=e.update(B),ie=B.material;if(Array.isArray(ie)){const ae=X.groups;for(let P=0,H=ae.length;P<H;P++){const $=ae[P],pe=ie[$.materialIndex];if(pe&&pe.visible){const fe=C(B,pe,A,U);B.onBeforeShadow(s,B,F,j,X,fe,$),s.renderBufferDirect(j,null,X,fe,B,$),B.onAfterShadow(s,B,F,j,X,fe,$)}}}else if(ie.visible){const ae=C(B,ie,A,U);B.onBeforeShadow(s,B,F,j,X,ae,null),s.renderBufferDirect(j,null,X,ae,B,null),B.onAfterShadow(s,B,F,j,X,ae,null)}}const V=B.children;for(let X=0,ie=V.length;X<ie;X++)L(V[X],F,j,A,U)}function z(B){B.target.removeEventListener("dispose",z);for(const j in p){const A=p[j],U=B.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const bR={[ph]:mh,[gh]:xh,[_h]:Sh,[js]:vh,[mh]:ph,[xh]:gh,[Sh]:_h,[vh]:js};function TR(s,e){function i(){let q=!1;const Ie=new sn;let Ce=null;const He=new sn(0,0,0,0);return{setMask:function(Ee){Ce!==Ee&&!q&&(s.colorMask(Ee,Ee,Ee,Ee),Ce=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,ye,Ue,ot,Ft){Ft===!0&&(Ee*=ot,ye*=ot,Ue*=ot),Ie.set(Ee,ye,Ue,ot),He.equals(Ie)===!1&&(s.clearColor(Ee,ye,Ue,ot),He.copy(Ie))},reset:function(){q=!1,Ce=null,He.set(-1,0,0,0)}}}function r(){let q=!1,Ie=!1,Ce=null,He=null,Ee=null;return{setReversed:function(ye){if(Ie!==ye){const Ue=e.get("EXT_clip_control");ye?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ie=ye;const ot=Ee;Ee=null,this.setClear(ot)}},getReversed:function(){return Ie},setTest:function(ye){ye?ue(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(ye){Ce!==ye&&!q&&(s.depthMask(ye),Ce=ye)},setFunc:function(ye){if(Ie&&(ye=bR[ye]),He!==ye){switch(ye){case ph:s.depthFunc(s.NEVER);break;case mh:s.depthFunc(s.ALWAYS);break;case gh:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case _h:s.depthFunc(s.EQUAL);break;case vh:s.depthFunc(s.GEQUAL);break;case xh:s.depthFunc(s.GREATER);break;case Sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}He=ye}},setLocked:function(ye){q=ye},setClear:function(ye){Ee!==ye&&(Ie&&(ye=1-ye),s.clearDepth(ye),Ee=ye)},reset:function(){q=!1,Ce=null,He=null,Ee=null,Ie=!1}}}function l(){let q=!1,Ie=null,Ce=null,He=null,Ee=null,ye=null,Ue=null,ot=null,Ft=null;return{setTest:function(At){q||(At?ue(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(At){Ie!==At&&!q&&(s.stencilMask(At),Ie=At)},setFunc:function(At,On,Mi){(Ce!==At||He!==On||Ee!==Mi)&&(s.stencilFunc(At,On,Mi),Ce=At,He=On,Ee=Mi)},setOp:function(At,On,Mi){(ye!==At||Ue!==On||ot!==Mi)&&(s.stencilOp(At,On,Mi),ye=At,Ue=On,ot=Mi)},setLocked:function(At){q=At},setClear:function(At){Ft!==At&&(s.clearStencil(At),Ft=At)},reset:function(){q=!1,Ie=null,Ce=null,He=null,Ee=null,ye=null,Ue=null,ot=null,Ft=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,D=null,C=null,L=null,z=null,B=null,F=new Ct(0,0,0),j=0,A=!1,U=null,O=null,V=null,X=null,ie=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),P=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=H>=2);let pe=null,fe={};const N=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ve=new sn().fromArray(N),Ae=new sn().fromArray(ee);function Pe(q,Ie,Ce,He){const Ee=new Uint8Array(4),ye=s.createTexture();s.bindTexture(q,ye),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<Ce;Ue++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ie+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ye}const Q={};Q[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ue(s.DEPTH_TEST),f.setFunc(js),st(!1),kt(E_),ue(s.CULL_FACE),at(Ea);function ue(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function be(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function De(q,Ie){return g[q]!==Ie?(s.bindFramebuffer(q,Ie),g[q]=Ie,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ie),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function we(q,Ie){let Ce=M,He=!1;if(q){Ce=x.get(Ie),Ce===void 0&&(Ce=[],x.set(Ie,Ce));const Ee=q.textures;if(Ce.length!==Ee.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ue=Ee.length;ye<Ue;ye++)Ce[ye]=s.COLOR_ATTACHMENT0+ye;Ce.length=Ee.length,He=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,He=!0);He&&s.drawBuffers(Ce)}function We(q){return b!==q?(s.useProgram(q),b=q,!0):!1}const vt={[zr]:s.FUNC_ADD,[wE]:s.FUNC_SUBTRACT,[RE]:s.FUNC_REVERSE_SUBTRACT};vt[CE]=s.MIN,vt[DE]=s.MAX;const it={[UE]:s.ZERO,[LE]:s.ONE,[NE]:s.SRC_COLOR,[dh]:s.SRC_ALPHA,[BE]:s.SRC_ALPHA_SATURATE,[zE]:s.DST_COLOR,[PE]:s.DST_ALPHA,[OE]:s.ONE_MINUS_SRC_COLOR,[hh]:s.ONE_MINUS_SRC_ALPHA,[FE]:s.ONE_MINUS_DST_COLOR,[IE]:s.ONE_MINUS_DST_ALPHA,[HE]:s.CONSTANT_COLOR,[GE]:s.ONE_MINUS_CONSTANT_COLOR,[VE]:s.CONSTANT_ALPHA,[kE]:s.ONE_MINUS_CONSTANT_ALPHA};function at(q,Ie,Ce,He,Ee,ye,Ue,ot,Ft,At){if(q===Ea){T===!0&&(be(s.BLEND),T=!1);return}if(T===!1&&(ue(s.BLEND),T=!0),q!==AE){if(q!==y||At!==A){if((v!==zr||L!==zr)&&(s.blendEquation(s.FUNC_ADD),v=zr,L=zr),At)switch(q){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b_:s.blendFunc(s.ONE,s.ONE);break;case T_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case A_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case b_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case T_:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}D=null,C=null,z=null,B=null,F.set(0,0,0),j=0,y=q,A=At}return}Ee=Ee||Ie,ye=ye||Ce,Ue=Ue||He,(Ie!==v||Ee!==L)&&(s.blendEquationSeparate(vt[Ie],vt[Ee]),v=Ie,L=Ee),(Ce!==D||He!==C||ye!==z||Ue!==B)&&(s.blendFuncSeparate(it[Ce],it[He],it[ye],it[Ue]),D=Ce,C=He,z=ye,B=Ue),(ot.equals(F)===!1||Ft!==j)&&(s.blendColor(ot.r,ot.g,ot.b,Ft),F.copy(ot),j=Ft),y=q,A=!1}function _t(q,Ie){q.side===Vi?be(s.CULL_FACE):ue(s.CULL_FACE);let Ce=q.side===Kn;Ie&&(Ce=!Ce),st(Ce),q.blending===qs&&q.transparent===!1?at(Ea):at(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const He=q.stencilWrite;h.setTest(He),He&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Xt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(q){U!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),U=q)}function kt(q){q!==bE?(ue(s.CULL_FACE),q!==O&&(q===E_?s.cullFace(s.BACK):q===TE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),O=q}function k(q){q!==V&&(P&&s.lineWidth(q),V=q)}function Xt(q,Ie,Ce){q?(ue(s.POLYGON_OFFSET_FILL),(X!==Ie||ie!==Ce)&&(s.polygonOffset(Ie,Ce),X=Ie,ie=Ce)):be(s.POLYGON_OFFSET_FILL)}function Tt(q){q?ue(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function It(q){q===void 0&&(q=s.TEXTURE0+ae-1),pe!==q&&(s.activeTexture(q),pe=q)}function Ze(q,Ie,Ce){Ce===void 0&&(pe===null?Ce=s.TEXTURE0+ae-1:Ce=pe);let He=fe[Ce];He===void 0&&(He={type:void 0,texture:void 0},fe[Ce]=He),(He.type!==q||He.texture!==Ie)&&(pe!==Ce&&(s.activeTexture(Ce),pe=Ce),s.bindTexture(q,Ie||Q[q]),He.type=q,He.texture=Ie)}function I(){const q=fe[pe];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function _e(){try{s.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Me(){try{s.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Le(){try{s.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function qe(){try{s.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function rt(){try{s.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Te(){try{s.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Re(q){ve.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function Ge(q){Ae.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function Be(q,Ie){let Ce=p.get(Ie);Ce===void 0&&(Ce=new WeakMap,p.set(Ie,Ce));let He=Ce.get(q);He===void 0&&(He=s.getUniformBlockIndex(Ie,q.name),Ce.set(q,He))}function Ne(q,Ie){const He=p.get(Ie).get(q);m.get(Ie)!==He&&(s.uniformBlockBinding(Ie,He,q.__bindingPointIndex),m.set(Ie,He))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},pe=null,fe={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,D=null,C=null,L=null,z=null,B=null,F=new Ct(0,0,0),j=0,A=!1,U=null,O=null,V=null,X=null,ie=null,ve.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ue,disable:be,bindFramebuffer:De,drawBuffers:we,useProgram:We,setBlending:at,setMaterial:_t,setFlipSided:st,setCullFace:kt,setLineWidth:k,setPolygonOffset:Xt,setScissorTest:Tt,activeTexture:It,bindTexture:Ze,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:rt,texImage3D:Te,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:Le,texStorage3D:qe,texSubImage2D:_e,texSubImage3D:Me,compressedTexSubImage2D:me,compressedTexSubImage3D:Qe,scissor:Re,viewport:Ge,reset:dt}}function AR(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,_=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,E){return M?new OffscreenCanvas(I,E):dl("canvas")}function T(I,E,Y){let _e=1;const Me=Ze(I);if((Me.width>Y||Me.height>Y)&&(_e=Y/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const me=Math.floor(_e*Me.width),Qe=Math.floor(_e*Me.height);g===void 0&&(g=b(me,Qe));const Le=E?b(me,Qe):g;return Le.width=me,Le.height=Qe,Le.getContext("2d").drawImage(I,0,0,me,Qe),ut("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+me+"x"+Qe+")."),Le}else return"data"in I&&ut("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){s.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(I,E,Y,_e,Me=!1){if(I!==null){if(s[I]!==void 0)return s[I];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=E;if(E===s.RED&&(Y===s.FLOAT&&(me=s.R32F),Y===s.HALF_FLOAT&&(me=s.R16F),Y===s.UNSIGNED_BYTE&&(me=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.R8UI),Y===s.UNSIGNED_SHORT&&(me=s.R16UI),Y===s.UNSIGNED_INT&&(me=s.R32UI),Y===s.BYTE&&(me=s.R8I),Y===s.SHORT&&(me=s.R16I),Y===s.INT&&(me=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(me=s.RG32F),Y===s.HALF_FLOAT&&(me=s.RG16F),Y===s.UNSIGNED_BYTE&&(me=s.RG8)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RG8UI),Y===s.UNSIGNED_SHORT&&(me=s.RG16UI),Y===s.UNSIGNED_INT&&(me=s.RG32UI),Y===s.BYTE&&(me=s.RG8I),Y===s.SHORT&&(me=s.RG16I),Y===s.INT&&(me=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(me=s.RGB16UI),Y===s.UNSIGNED_INT&&(me=s.RGB32UI),Y===s.BYTE&&(me=s.RGB8I),Y===s.SHORT&&(me=s.RGB16I),Y===s.INT&&(me=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),Y===s.UNSIGNED_INT&&(me=s.RGBA32UI),Y===s.BYTE&&(me=s.RGBA8I),Y===s.SHORT&&(me=s.RGBA16I),Y===s.INT&&(me=s.RGBA32I)),E===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),E===s.RGBA){const Qe=Me?cu:Rt.getTransfer(_e);Y===s.FLOAT&&(me=s.RGBA32F),Y===s.HALF_FLOAT&&(me=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(me=Qe===Vt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(I,E){let Y;return I?E===null||E===ji||E===fl?Y=s.DEPTH24_STENCIL8:E===ki?Y=s.DEPTH32F_STENCIL8:E===ul&&(Y=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===fl?Y=s.DEPTH_COMPONENT24:E===ki?Y=s.DEPTH_COMPONENT32F:E===ul&&(Y=s.DEPTH_COMPONENT16),Y}function z(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function B(I){const E=I.target;E.removeEventListener("dispose",B),j(E),E.isVideoTexture&&_.delete(E)}function F(I){const E=I.target;E.removeEventListener("dispose",F),U(E)}function j(I){const E=r.get(I);if(E.__webglInit===void 0)return;const Y=I.source,_e=x.get(Y);if(_e){const Me=_e[E.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&A(I),Object.keys(_e).length===0&&x.delete(Y)}r.remove(I)}function A(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const Y=I.source,_e=x.get(Y);delete _e[E.__cacheKey],f.memory.textures--}function U(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Me=0;Me<E.__webglFramebuffer[_e].length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Me]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=I.textures;for(let _e=0,Me=Y.length;_e<Me;_e++){const me=r.get(Y[_e]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(Y[_e])}r.remove(I)}let O=0;function V(){O=0}function X(){const I=O;return I>=l.maxTextures&&ut("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),O+=1,I}function ie(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ae(I,E){const Y=r.get(I);if(I.isVideoTexture&&Tt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const _e=I.image;if(_e===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,I,E);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function P(I,E){const Y=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Q(Y,I,E);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function H(I,E){const Y=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Q(Y,I,E);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function $(I,E){const Y=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){ue(Y,I,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const pe={[Eh]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[bh]:s.MIRRORED_REPEAT},fe={[Ln]:s.NEAREST,[qE]:s.NEAREST_MIPMAP_NEAREST,[Oc]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Dd]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},N={[ZE]:s.NEVER,[eb]:s.ALWAYS,[KE]:s.LESS,[Sp]:s.LEQUAL,[QE]:s.EQUAL,[yp]:s.GEQUAL,[JE]:s.GREATER,[$E]:s.NOTEQUAL};function ee(I,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Dd||E.magFilter===Oc||E.magFilter===Hr||E.minFilter===Fn||E.minFilter===Dd||E.minFilter===Oc||E.minFilter===Hr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,pe[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,fe[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Oc&&E.minFilter!==Hr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",B));const _e=E.source;let Me=x.get(_e);Me===void 0&&(Me={},x.set(_e,Me));const me=ie(E);if(me!==I.__cacheKey){Me[me]===void 0&&(Me[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),Me[me].usedTimes++;const Qe=Me[I.__cacheKey];Qe!==void 0&&(Me[I.__cacheKey].usedTimes--,Qe.usedTimes===0&&A(E)),I.__cacheKey=me,I.__webglTexture=Me[me].texture}return Y}function Ae(I,E,Y){return Math.floor(Math.floor(I/Y)/E)}function Pe(I,E,Y,_e){const me=I.updateRanges;if(me.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Y,_e,E.data);else{me.sort((Te,Re)=>Te.start-Re.start);let Qe=0;for(let Te=1;Te<me.length;Te++){const Re=me[Qe],Ge=me[Te],Be=Re.start+Re.count,Ne=Ae(Ge.start,E.width,4),dt=Ae(Re.start,E.width,4);Ge.start<=Be+1&&Ne===dt&&Ae(Ge.start+Ge.count-1,E.width,4)===Ne?Re.count=Math.max(Re.count,Ge.start+Ge.count-Re.start):(++Qe,me[Qe]=Ge)}me.length=Qe+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Te=0,Re=me.length;Te<Re;Te++){const Ge=me[Te],Be=Math.floor(Ge.start/4),Ne=Math.ceil(Ge.count/4),dt=Be%E.width,q=Math.floor(Be/E.width),Ie=Ne,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,dt,q,Ie,Ce,Y,_e,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function Q(I,E,Y){let _e=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=s.TEXTURE_3D);const Me=ve(I,E),me=E.source;i.bindTexture(_e,I.__webglTexture,s.TEXTURE0+Y);const Qe=r.get(me);if(me.version!==Qe.__version||Me===!0){i.activeTexture(s.TEXTURE0+Y);const Le=Rt.getPrimaries(Rt.workingColorSpace),qe=E.colorSpace===lr?null:Rt.getPrimaries(E.colorSpace),rt=E.colorSpace===lr||Le===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Te=T(E.image,!1,l.maxTextureSize);Te=It(E,Te);const Re=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Be=C(E.internalFormat,Re,Ge,E.colorSpace,E.isVideoTexture);ee(_e,E);let Ne;const dt=E.mipmaps,q=E.isVideoTexture!==!0,Ie=Qe.__version===void 0||Me===!0,Ce=me.dataReady,He=z(E,Te);if(E.isDepthTexture)Be=L(E.format===Gr,E.type),Ie&&(q?i.texStorage2D(s.TEXTURE_2D,1,Be,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,Be,Te.width,Te.height,0,Re,Ge,null));else if(E.isDataTexture)if(dt.length>0){q&&Ie&&i.texStorage2D(s.TEXTURE_2D,He,Be,dt[0].width,dt[0].height);for(let Ee=0,ye=dt.length;Ee<ye;Ee++)Ne=dt[Ee],q?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Ne.width,Ne.height,0,Re,Ge,Ne.data);E.generateMipmaps=!1}else q?(Ie&&i.texStorage2D(s.TEXTURE_2D,He,Be,Te.width,Te.height),Ce&&Pe(E,Te,Re,Ge)):i.texImage2D(s.TEXTURE_2D,0,Be,Te.width,Te.height,0,Re,Ge,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,He,Be,dt[0].width,dt[0].height,Te.depth);for(let Ee=0,ye=dt.length;Ee<ye;Ee++)if(Ne=dt[Ee],E.format!==Li)if(Re!==null)if(q){if(Ce)if(E.layerUpdates.size>0){const Ue=J_(Ne.width,Ne.height,E.format,E.type);for(const ot of E.layerUpdates){const Ft=Ne.data.subarray(ot*Ue/Ne.data.BYTES_PER_ELEMENT,(ot+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,ot,Ne.width,Ne.height,1,Re,Ft)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ne.width,Ne.height,Te.depth,Re,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Ne.width,Ne.height,Te.depth,0,Ne.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ne.width,Ne.height,Te.depth,Re,Ge,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Ne.width,Ne.height,Te.depth,0,Re,Ge,Ne.data)}else{q&&Ie&&i.texStorage2D(s.TEXTURE_2D,He,Be,dt[0].width,dt[0].height);for(let Ee=0,ye=dt.length;Ee<ye;Ee++)Ne=dt[Ee],E.format!==Li?Re!==null?q?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Ne.width,Ne.height,Re,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Be,Ne.width,Ne.height,0,Ne.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ne.width,Ne.height,Re,Ge,Ne.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Ne.width,Ne.height,0,Re,Ge,Ne.data)}else if(E.isDataArrayTexture)if(q){if(Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,He,Be,Te.width,Te.height,Te.depth),Ce)if(E.layerUpdates.size>0){const Ee=J_(Te.width,Te.height,E.format,E.type);for(const ye of E.layerUpdates){const Ue=Te.data.subarray(ye*Ee/Te.data.BYTES_PER_ELEMENT,(ye+1)*Ee/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Te.width,Te.height,1,Re,Ge,Ue)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Ge,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Te.width,Te.height,Te.depth,0,Re,Ge,Te.data);else if(E.isData3DTexture)q?(Ie&&i.texStorage3D(s.TEXTURE_3D,He,Be,Te.width,Te.height,Te.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Ge,Te.data)):i.texImage3D(s.TEXTURE_3D,0,Be,Te.width,Te.height,Te.depth,0,Re,Ge,Te.data);else if(E.isFramebufferTexture){if(Ie)if(q)i.texStorage2D(s.TEXTURE_2D,He,Be,Te.width,Te.height);else{let Ee=Te.width,ye=Te.height;for(let Ue=0;Ue<He;Ue++)i.texImage2D(s.TEXTURE_2D,Ue,Be,Ee,ye,0,Re,Ge,null),Ee>>=1,ye>>=1}}else if(dt.length>0){if(q&&Ie){const Ee=Ze(dt[0]);i.texStorage2D(s.TEXTURE_2D,He,Be,Ee.width,Ee.height)}for(let Ee=0,ye=dt.length;Ee<ye;Ee++)Ne=dt[Ee],q?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Re,Ge,Ne):i.texImage2D(s.TEXTURE_2D,Ee,Be,Re,Ge,Ne);E.generateMipmaps=!1}else if(q){if(Ie){const Ee=Ze(Te);i.texStorage2D(s.TEXTURE_2D,He,Be,Ee.width,Ee.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ge,Te)}else i.texImage2D(s.TEXTURE_2D,0,Be,Re,Ge,Te);y(E)&&v(_e),Qe.__version=me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ue(I,E,Y){if(E.image.length!==6)return;const _e=ve(I,E),Me=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Y);const me=r.get(Me);if(Me.version!==me.__version||_e===!0){i.activeTexture(s.TEXTURE0+Y);const Qe=Rt.getPrimaries(Rt.workingColorSpace),Le=E.colorSpace===lr?null:Rt.getPrimaries(E.colorSpace),qe=E.colorSpace===lr||Qe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!rt&&!Te?Re[ye]=T(E.image[ye],!0,l.maxCubemapSize):Re[ye]=Te?E.image[ye].image:E.image[ye],Re[ye]=It(E,Re[ye]);const Ge=Re[0],Be=c.convert(E.format,E.colorSpace),Ne=c.convert(E.type),dt=C(E.internalFormat,Be,Ne,E.colorSpace),q=E.isVideoTexture!==!0,Ie=me.__version===void 0||_e===!0,Ce=Me.dataReady;let He=z(E,Ge);ee(s.TEXTURE_CUBE_MAP,E);let Ee;if(rt){q&&Ie&&i.texStorage2D(s.TEXTURE_CUBE_MAP,He,dt,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Ee=Re[ye].mipmaps;for(let Ue=0;Ue<Ee.length;Ue++){const ot=Ee[Ue];E.format!==Li?Be!==null?q?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,ot.width,ot.height,Be,ot.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,dt,ot.width,ot.height,0,ot.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,ot.width,ot.height,Be,Ne,ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,dt,ot.width,ot.height,0,Be,Ne,ot.data)}}}else{if(Ee=E.mipmaps,q&&Ie){Ee.length>0&&He++;const ye=Ze(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,He,dt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Te){q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,Be,Ne,Re[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Re[ye].width,Re[ye].height,0,Be,Ne,Re[ye].data);for(let Ue=0;Ue<Ee.length;Ue++){const Ft=Ee[Ue].image[ye].image;q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Ft.width,Ft.height,Be,Ne,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,dt,Ft.width,Ft.height,0,Be,Ne,Ft.data)}}else{q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Ne,Re[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Be,Ne,Re[ye]);for(let Ue=0;Ue<Ee.length;Ue++){const ot=Ee[Ue];q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Be,Ne,ot.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,dt,Be,Ne,ot.image[ye])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),me.__version=Me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function be(I,E,Y,_e,Me,me){const Qe=c.convert(Y.format,Y.colorSpace),Le=c.convert(Y.type),qe=C(Y.internalFormat,Qe,Le,Y.colorSpace),rt=r.get(E),Te=r.get(Y);if(Te.__renderTarget=E,!rt.__hasExternalTextures){const Re=Math.max(1,E.width>>me),Ge=Math.max(1,E.height>>me);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,me,qe,Re,Ge,E.depth,0,Qe,Le,null):i.texImage2D(Me,me,qe,Re,Ge,0,Qe,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),Xt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Me,Te.__webglTexture,0,k(E)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Me,Te.__webglTexture,me),i.bindFramebuffer(s.FRAMEBUFFER,null)}function De(I,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const _e=E.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,me=L(E.stencilBuffer,Me),Qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),me,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Qe,s.RENDERBUFFER,I)}else{const _e=E.textures;for(let Me=0;Me<_e.length;Me++){const me=_e[Me],Qe=c.convert(me.format,me.colorSpace),Le=c.convert(me.type),qe=C(me.internalFormat,Qe,Le,me.colorSpace);Xt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),qe,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(I,E,Y){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=r.get(E.depthTexture);if(Me.__renderTarget=E,(!Me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Me.__webglTexture===void 0){Me.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),ee(s.TEXTURE_CUBE_MAP,E.depthTexture);const rt=c.convert(E.depthTexture.format),Te=c.convert(E.depthTexture.type);let Re;E.depthTexture.format===wa?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===Gr&&(Re=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Re,E.width,E.height,0,rt,Te,null)}}else ae(E.depthTexture,0);const me=Me.__webglTexture,Qe=k(E),Le=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,qe=E.depthTexture.format===Gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===wa)Xt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Le,me,0,Qe):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Le,me,0);else if(E.depthTexture.format===Gr)Xt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Le,me,0,Qe):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Le,me,0);else throw new Error("Unknown depthTexture format")}function We(I){const E=r.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const _e=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),E.__depthDisposeCallback=Me}E.__boundDepthTexture=_e}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let _e=0;_e<6;_e++)we(E.__webglFramebuffer[_e],I,_e);else{const _e=I.texture.mipmaps;_e&&_e.length>0?we(E.__webglFramebuffer[0],I,0):we(E.__webglFramebuffer,I,0)}else if(Y){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=s.createRenderbuffer(),De(E.__webglDepthbuffer[_e],I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,me)}}else{const _e=I.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),De(E.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,me)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(I,E,Y){const _e=r.get(I);E!==void 0&&be(_e.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&We(I)}function it(I){const E=I.texture,Y=r.get(I),_e=r.get(E);I.addEventListener("dispose",F);const Me=I.textures,me=I.isWebGLCubeRenderTarget===!0,Qe=Me.length>1;if(Qe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=E.version,f.memory.textures++),me){Y.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Le]=[];for(let qe=0;qe<E.mipmaps.length;qe++)Y.__webglFramebuffer[Le][qe]=s.createFramebuffer()}else Y.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)Y.__webglFramebuffer[Le]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Qe)for(let Le=0,qe=Me.length;Le<qe;Le++){const rt=r.get(Me[Le]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&Xt(I)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Le=0;Le<Me.length;Le++){const qe=Me[Le];Y.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Le]);const rt=c.convert(qe.format,qe.colorSpace),Te=c.convert(qe.type),Re=C(qe.internalFormat,rt,Te,qe.colorSpace,I.isXRRenderTarget===!0),Ge=k(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Re,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){i.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ee(s.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)be(Y.__webglFramebuffer[Le][qe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,qe);else be(Y.__webglFramebuffer[Le],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qe){for(let Le=0,qe=Me.length;Le<qe;Le++){const rt=Me[Le],Te=r.get(rt);let Re=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),ee(Re,rt),be(Y.__webglFramebuffer,I,rt,s.COLOR_ATTACHMENT0+Le,Re,0),y(rt)&&v(Re)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,_e.__webglTexture),ee(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)be(Y.__webglFramebuffer[qe],I,E,s.COLOR_ATTACHMENT0,Le,qe);else be(Y.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Le,0);y(E)&&v(Le),i.unbindTexture()}I.depthBuffer&&We(I)}function at(I){const E=I.textures;for(let Y=0,_e=E.length;Y<_e;Y++){const Me=E[Y];if(y(Me)){const me=D(I),Qe=r.get(Me).__webglTexture;i.bindTexture(me,Qe),v(me),i.unbindTexture()}}}const _t=[],st=[];function kt(I){if(I.samples>0){if(Xt(I)===!1){const E=I.textures,Y=I.width,_e=I.height;let Me=s.COLOR_BUFFER_BIT;const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Qe=r.get(I),Le=E.length>1;if(Le)for(let rt=0;rt<E.length;rt++)i.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const qe=I.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[rt]);const Te=r.get(E[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,Y,_e,0,0,Y,_e,Me,s.NEAREST),m===!0&&(_t.length=0,st.length=0,_t.push(s.COLOR_ATTACHMENT0+rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_t.push(me),st.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,st)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let rt=0;rt<E.length;rt++){i.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[rt]);const Te=r.get(E[rt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function k(I){return Math.min(l.maxSamples,I.samples)}function Xt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(I){const E=f.render.frame;_.get(I)!==E&&(_.set(I,E),I.update())}function It(I,E){const Y=I.colorSpace,_e=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Qs&&Y!==lr&&(Rt.getTransfer(Y)===Vt?(_e!==Li||Me!==si)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Y)),E}function Ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=vt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wR(s,e){function i(r,l=lr){let c;const f=Rt.getTransfer(l);if(r===si)return s.UNSIGNED_BYTE;if(r===mp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===nx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$v)return s.BYTE;if(r===ex)return s.SHORT;if(r===ul)return s.UNSIGNED_SHORT;if(r===pp)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Aa)return s.HALF_FLOAT;if(r===ix)return s.ALPHA;if(r===ax)return s.RGB;if(r===Li)return s.RGBA;if(r===wa)return s.DEPTH_COMPONENT;if(r===Gr)return s.DEPTH_STENCIL;if(r===rx)return s.RED;if(r===_p)return s.RED_INTEGER;if(r===Ks)return s.RG;if(r===vp)return s.RG_INTEGER;if(r===xp)return s.RGBA_INTEGER;if(r===iu||r===au||r===ru||r===su)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===Ah||r===wh||r===Rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ch||r===Dh)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lh)return c.COMPRESSED_R11_EAC;if(r===Nh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Oh)return c.COMPRESSED_RG11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ih||r===zh||r===Fh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ih)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Kh)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===ep||r===tp||r===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CR=`
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

}`;class DR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new vx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ki({vertexShader:RR,fragmentShader:CR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pt(new xi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UR extends to{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new DR,v={},D=i.getContextAttributes();let C=null,L=null;const z=[],B=[],F=new Dt;let j=null;const A=new yn;A.viewport=new sn;const U=new yn;U.viewport=new sn;const O=[A,U],V=new Hb;let X=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=z[Q];return ue===void 0&&(ue=new $d,z[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=z[Q];return ue===void 0&&(ue=new $d,z[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=z[Q];return ue===void 0&&(ue=new $d,z[Q]=ue),ue.getHandSpace()};function ae(Q){const ue=B.indexOf(Q.inputSource);if(ue===-1)return;const be=z[ue];be!==void 0&&(be.update(Q.inputSource,Q.frame,p||f),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let Q=0;Q<z.length;Q++){const ue=B[Q];ue!==null&&(B[Q]=null,z[Q].disconnect(ue))}X=null,ie=null,y.reset();for(const Q in v)delete v[Q];e.setRenderTarget(C),M=null,x=null,g=null,l=null,L=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,De=null,we=null;D.depth&&(we=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=D.stencil?Gr:wa,De=D.stencil?fl:ji);const We={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(We),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new qi(x.textureWidth,x.textureHeight,{format:Li,type:si,depthTexture:new pl(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new qi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:si,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(Q){for(let ue=0;ue<Q.removed.length;ue++){const be=Q.removed[ue],De=B.indexOf(be);De>=0&&(B[De]=null,z[De].disconnect(be))}for(let ue=0;ue<Q.added.length;ue++){const be=Q.added[ue];let De=B.indexOf(be);if(De===-1){for(let We=0;We<z.length;We++)if(We>=B.length){B.push(be),De=We;break}else if(B[We]===null){B[We]=be,De=We;break}if(De===-1)break}const we=z[De];we&&we.connect(be)}}const $=new re,pe=new re;function fe(Q,ue,be){$.setFromMatrixPosition(ue.matrixWorld),pe.setFromMatrixPosition(be.matrixWorld);const De=$.distanceTo(pe),we=ue.projectionMatrix.elements,We=be.projectionMatrix.elements,vt=we[14]/(we[10]-1),it=we[14]/(we[10]+1),at=(we[9]+1)/we[5],_t=(we[9]-1)/we[5],st=(we[8]-1)/we[0],kt=(We[8]+1)/We[0],k=vt*st,Xt=vt*kt,Tt=De/(-st+kt),It=Tt*-st;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(It),Q.translateZ(Tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ze=vt+Tt,I=it+Tt,E=k-It,Y=Xt+(De-It),_e=at*it/I*Ze,Me=_t*it/I*Ze;Q.projectionMatrix.makePerspective(E,Y,_e,Me,Ze,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function N(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ue=Q.near,be=Q.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(be=y.depthFar)),V.near=U.near=A.near=ue,V.far=U.far=A.far=be,(X!==V.near||ie!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,ie=V.far),V.layers.mask=Q.layers.mask|6,A.layers.mask=V.layers.mask&3,U.layers.mask=V.layers.mask&5;const De=Q.parent,we=V.cameras;N(V,De);for(let We=0;We<we.length;We++)N(we[We],De);we.length===2?fe(V,A,U):V.projectionMatrix.copy(A.projectionMatrix),ee(Q,V,De)};function ee(Q,ue,be){be===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ip*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(Q){return v[Q]};let ve=null;function Ae(Q,ue){if(_=ue.getViewerPose(p||f),b=ue,_!==null){const be=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let De=!1;be.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let it=0;it<be.length;it++){const at=be[it];let _t=null;if(M!==null)_t=M.getViewport(at);else{const kt=g.getViewSubImage(x,at);_t=kt.viewport,it===0&&(e.setRenderTargetTextures(L,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(L))}let st=O[it];st===void 0&&(st=new yn,st.layers.enable(it),st.viewport=new sn,O[it]=st),st.matrix.fromArray(at.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(at.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(_t.x,_t.y,_t.width,_t.height),it===0&&(V.matrix.copy(st.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(st)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const it=g.getDepthInformation(be[0]);it&&it.isValid&&it.texture&&y.init(it,l.renderState)}if(we&&we.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<be.length;it++){const at=be[it].camera;if(at){let _t=v[at];_t||(_t=new vx,v[at]=_t);const st=g.getCameraImage(at);_t.sourceTexture=st}}}}for(let be=0;be<z.length;be++){const De=B[be],we=z[be];De!==null&&we!==void 0&&we.update(De,ue,p||f)}ve&&ve(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),b=null}const Pe=new Sx;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(Q){ve=Q},this.dispose=function(){}}}const Pr=new Zi,LR=new tn;function NR(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,px(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,D,C,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),g(y,v)):v.isMeshPhongMaterial?(c(y,v),_(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,L)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,D,C):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),C=D.envMap,L=D.envMapRotation;C&&(y.envMap.value=C,Pr.copy(L),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),y.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(Pr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,D,C){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=C*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function OR(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,C){const L=C.program;r.uniformBlockBinding(D,L)}function p(D,C){let L=l[D.id];L===void 0&&(b(D),L=_(D),l[D.id]=L,D.addEventListener("dispose",y));const z=C.program;r.updateUBOMapping(D,z);const B=e.render.frame;c[D.id]!==B&&(x(D),c[D.id]=B)}function _(D){const C=g();D.__bindingPointIndex=C;const L=s.createBuffer(),z=D.__size,B=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,z,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function g(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const C=l[D.id],L=D.uniforms,z=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let B=0,F=L.length;B<F;B++){const j=Array.isArray(L[B])?L[B]:[L[B]];for(let A=0,U=j.length;A<U;A++){const O=j[A];if(M(O,B,A,z)===!0){const V=O.__offset,X=Array.isArray(O.value)?O.value:[O.value];let ie=0;for(let ae=0;ae<X.length;ae++){const P=X[ae],H=T(P);typeof P=="number"||typeof P=="boolean"?(O.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,V+ie,O.__data)):P.isMatrix3?(O.__data[0]=P.elements[0],O.__data[1]=P.elements[1],O.__data[2]=P.elements[2],O.__data[3]=0,O.__data[4]=P.elements[3],O.__data[5]=P.elements[4],O.__data[6]=P.elements[5],O.__data[7]=0,O.__data[8]=P.elements[6],O.__data[9]=P.elements[7],O.__data[10]=P.elements[8],O.__data[11]=0):(P.toArray(O.__data,ie),ie+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,C,L,z){const B=D.value,F=C+"_"+L;if(z[F]===void 0)return typeof B=="number"||typeof B=="boolean"?z[F]=B:z[F]=B.clone(),!0;{const j=z[F];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return z[F]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function b(D){const C=D.uniforms;let L=0;const z=16;for(let F=0,j=C.length;F<j;F++){const A=Array.isArray(C[F])?C[F]:[C[F]];for(let U=0,O=A.length;U<O;U++){const V=A[U],X=Array.isArray(V.value)?V.value:[V.value];for(let ie=0,ae=X.length;ie<ae;ie++){const P=X[ie],H=T(P),$=L%z,pe=$%H.boundary,fe=$+pe;L+=pe,fe!==0&&z-fe<H.storage&&(L+=z-fe),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=L,L+=H.storage}}}const B=L%z;return B>0&&(L+=z-B),D.__size=L,D.__cache={},this}function T(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",D),C}function y(D){const C=D.target;C.removeEventListener("dispose",y);const L=f.indexOf(C.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function v(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const PR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function IR(){return Hi===null&&(Hi=new wb(PR,16,16,Ks,Aa),Hi.name="DFG_LUT",Hi.minFilter=Fn,Hi.magFilter=Fn,Hi.wrapS=ya,Hi.wrapT=ya,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class jr{constructor(e={}){const{canvas:i=tb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=M,y=new Set([xp,vp,_p]),v=new Set([si,ji,ul,fl,mp,gp]),D=new Uint32Array(4),C=new Int32Array(4);let L=null,z=null;const B=[],F=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=Si;let O=0,V=0,X=null,ie=-1,ae=null;const P=new sn,H=new sn;let $=null;const pe=new Ct(0);let fe=0,N=i.width,ee=i.height,ve=1,Ae=null,Pe=null;const Q=new sn(0,0,N,ee),ue=new sn(0,0,N,ee);let be=!1;const De=new Ap;let we=!1,We=!1;const vt=new tn,it=new re,at=new sn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function kt(){return X===null?ve:1}let k=r;function Xt(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hp}`),i.addEventListener("webglcontextlost",ot,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",At,!1),k===null){const Z="webgl2";if(k=Xt(Z,R),k===null)throw Xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Tt,It,Ze,I,E,Y,_e,Me,me,Qe,Le,qe,rt,Te,Re,Ge,Be,Ne,dt,q,Ie,Ce,He,Ee;function ye(){Tt=new IA(k),Tt.init(),Ce=new wR(k,Tt),It=new wA(k,Tt,e,Ce),Ze=new TR(k,Tt),It.reversedDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),I=new BA(k),E=new uR,Y=new AR(k,Tt,Ze,E,It,Ce,I),_e=new CA(A),Me=new PA(A),me=new kb(k),He=new TA(k,me),Qe=new zA(k,me,I,He),Le=new GA(k,Qe,me,I),dt=new HA(k,It,Y),Ge=new RA(E),qe=new cR(A,_e,Me,Tt,It,He,Ge),rt=new NR(A,E),Te=new dR,Re=new vR(Tt),Ne=new bA(A,_e,Me,Ze,Le,b,m),Be=new ER(A,Le,It),Ee=new OR(k,I,It,Ze),q=new AA(k,Tt,I),Ie=new FA(k,Tt,I),I.programs=qe.programs,A.capabilities=It,A.extensions=Tt,A.properties=E,A.renderLists=Te,A.shadowMap=Be,A.state=Ze,A.info=I}ye(),T!==si&&(j=new kA(T,i.width,i.height,l,c));const Ue=new UR(A,k);this.xr=Ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(N,ee,!1))},this.getSize=function(R){return R.set(N,ee)},this.setSize=function(R,Z,de=!0){if(Ue.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,ee=Z,i.width=Math.floor(R*ve),i.height=Math.floor(Z*ve),de===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(N*ve,ee*ve).floor()},this.setDrawingBufferSize=function(R,Z,de){N=R,ee=Z,ve=de,i.width=Math.floor(R*de),i.height=Math.floor(Z*de),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(T===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,Z,de,oe){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,Z,de,oe),Ze.viewport(P.copy(Q).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,Z,de,oe){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,Z,de,oe),Ze.scissor(H.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Ze.setScissorTest(be=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,de=!0){let oe=0;if(R){let J=!1;if(X!==null){const Oe=X.texture.format;J=y.has(Oe)}if(J){const Oe=X.texture.type,Ve=v.has(Oe),ze=Ne.getClearColor(),ke=Ne.getClearAlpha(),Ye=ze.r,et=ze.g,je=ze.b;Ve?(D[0]=Ye,D[1]=et,D[2]=je,D[3]=ke,k.clearBufferuiv(k.COLOR,0,D)):(C[0]=Ye,C[1]=et,C[2]=je,C[3]=ke,k.clearBufferiv(k.COLOR,0,C))}else oe|=k.COLOR_BUFFER_BIT}Z&&(oe|=k.DEPTH_BUFFER_BIT),de&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ot,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ne.dispose(),Te.dispose(),Re.dispose(),E.dispose(),_e.dispose(),Me.dispose(),Le.dispose(),He.dispose(),Ee.dispose(),qe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Kr),Ue.removeEventListener("sessionend",so),Pi.stop()};function ot(R){R.preventDefault(),U_("WebGLRenderer: Context Lost."),U=!0}function Ft(){U_("WebGLRenderer: Context Restored."),U=!1;const R=I.autoReset,Z=Be.enabled,de=Be.autoUpdate,oe=Be.needsUpdate,J=Be.type;ye(),I.autoReset=R,Be.enabled=Z,Be.autoUpdate=de,Be.needsUpdate=oe,Be.type=J}function At(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const Z=R.target;Z.removeEventListener("dispose",On),Mi(Z)}function Mi(R){Ml(R),E.remove(R)}function Ml(R){const Z=E.get(R).programs;Z!==void 0&&(Z.forEach(function(de){qe.releaseProgram(de)}),R.isShaderMaterial&&qe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,de,oe,J,Oe){Z===null&&(Z=_t);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,ze=dr(R,Z,de,oe,J);Ze.setMaterial(oe,Ve);let ke=de.index,Ye=1;if(oe.wireframe===!0){if(ke=Qe.getWireframeAttribute(de),ke===void 0)return;Ye=2}const et=de.drawRange,je=de.attributes.position;let tt=et.start*Ye,Nt=(et.start+et.count)*Ye;Oe!==null&&(tt=Math.max(tt,Oe.start*Ye),Nt=Math.min(Nt,(Oe.start+Oe.count)*Ye)),ke!==null?(tt=Math.max(tt,0),Nt=Math.min(Nt,ke.count)):je!=null&&(tt=Math.max(tt,0),Nt=Math.min(Nt,je.count));const Jt=Nt-tt;if(Jt<0||Jt===1/0)return;He.setup(J,oe,ze,de,ke);let Zt,zt=q;if(ke!==null&&(Zt=me.get(ke),zt=Ie,zt.setIndex(Zt)),J.isMesh)oe.wireframe===!0?(Ze.setLineWidth(oe.wireframeLinewidth*kt()),zt.setMode(k.LINES)):zt.setMode(k.TRIANGLES);else if(J.isLine){let Je=oe.linewidth;Je===void 0&&(Je=1),Ze.setLineWidth(Je*kt()),J.isLineSegments?zt.setMode(k.LINES):J.isLineLoop?zt.setMode(k.LINE_LOOP):zt.setMode(k.LINE_STRIP)}else J.isPoints?zt.setMode(k.POINTS):J.isSprite&&zt.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))zt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Je=J._multiDrawStarts,Ot=J._multiDrawCounts,lt=J._multiDrawCount,En=ke?me.get(ke).bytesPerElement:1,Qi=E.get(oe).currentProgram.getUniforms();for(let bn=0;bn<lt;bn++)Qi.setValue(k,"_gl_DrawID",bn),zt.render(Je[bn]/En,Ot[bn])}else if(J.isInstancedMesh)zt.renderInstances(tt,Jt,J.count);else if(de.isInstancedBufferGeometry){const Je=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ot=Math.min(de.instanceCount,Je);zt.renderInstances(tt,Jt,Ot)}else zt.render(tt,Jt)};function ao(R,Z,de){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Jr(R,Z,de),R.side=fr,R.needsUpdate=!0,Jr(R,Z,de),R.side=Vi):Jr(R,Z,de)}this.compile=function(R,Z,de=null){de===null&&(de=R),z=Re.get(de),z.init(Z),F.push(z),de.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),R!==de&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(z.pushLight(J),J.castShadow&&z.pushShadow(J))}),z.setupLights();const oe=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Oe=J.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const ze=Oe[Ve];ao(ze,de,J),oe.add(ze)}else ao(Oe,de,J),oe.add(Oe)}),z=F.pop(),oe},this.compileAsync=function(R,Z,de=null){const oe=this.compile(R,Z,de);return new Promise(J=>{function Oe(){if(oe.forEach(function(Ve){E.get(Ve).currentProgram.isReady()&&oe.delete(Ve)}),oe.size===0){J(R);return}setTimeout(Oe,10)}Tt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Zr=null;function ro(R){Zr&&Zr(R)}function Kr(){Pi.stop()}function so(){Pi.start()}const Pi=new Sx;Pi.setAnimationLoop(ro),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Zr=R,Ue.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},Ue.addEventListener("sessionstart",Kr),Ue.addEventListener("sessionend",so),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const de=Ue.enabled===!0&&Ue.isPresenting===!0,oe=j!==null&&(X===null||de)&&j.begin(A,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Z),Z=Ue.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Z,X),z=Re.get(R,F.length),z.init(Z),F.push(z),vt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),De.setFromProjectionMatrix(vt,Xi,Z.reversedDepth),We=this.localClippingEnabled,we=Ge.init(this.clippingPlanes,We),L=Te.get(R,B.length),L.init(),B.push(L),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=A.xr.getDepthSensingMesh();Ve!==null&&li(Ve,Z,-1/0,A.sortObjects)}li(R,Z,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Ae,Pe),st=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,st&&Ne.addToRenderList(L,R),this.info.render.frame++,we===!0&&Ge.beginShadows();const J=z.state.shadowsArray;if(Be.render(J,R,Z),we===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&j.hasRenderPass())===!1){const Ve=L.opaque,ze=L.transmissive;if(z.setupLights(),Z.isArrayCamera){const ke=Z.cameras;if(ze.length>0)for(let Ye=0,et=ke.length;Ye<et;Ye++){const je=ke[Ye];Mn(Ve,ze,R,je)}st&&Ne.render(R);for(let Ye=0,et=ke.length;Ye<et;Ye++){const je=ke[Ye];cn(L,R,je,je.viewport)}}else ze.length>0&&Mn(Ve,ze,R,Z),st&&Ne.render(R),cn(L,R,Z)}X!==null&&V===0&&(Y.updateMultisampleRenderTarget(X),Y.updateRenderTargetMipmap(X)),oe&&j.end(A),R.isScene===!0&&R.onAfterRender(A,R,Z),He.resetDefaultState(),ie=-1,ae=null,F.pop(),F.length>0?(z=F[F.length-1],we===!0&&Ge.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function li(R,Z,de,oe){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||De.intersectsSprite(R)){oe&&at.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Ve=Le.update(R),ze=R.material;ze.visible&&L.push(R,Ve,ze,de,at.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||De.intersectsObject(R))){const Ve=Le.update(R),ze=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),at.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),at.copy(Ve.boundingSphere.center)),at.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(ze)){const ke=Ve.groups;for(let Ye=0,et=ke.length;Ye<et;Ye++){const je=ke[Ye],tt=ze[je.materialIndex];tt&&tt.visible&&L.push(R,Ve,tt,de,at.z,je)}}else ze.visible&&L.push(R,Ve,ze,de,at.z,null)}}const Oe=R.children;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++)li(Oe[Ve],Z,de,oe)}function cn(R,Z,de,oe){const{opaque:J,transmissive:Oe,transparent:Ve}=R;z.setupLightsView(de),we===!0&&Ge.setGlobalState(A.clippingPlanes,de),oe&&Ze.viewport(P.copy(oe)),J.length>0&&Ei(J,Z,de),Oe.length>0&&Ei(Oe,Z,de),Ve.length>0&&Ei(Ve,Z,de),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Mn(R,Z,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[oe.id]===void 0){const tt=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[oe.id]=new qi(1,1,{generateMipmaps:!0,type:tt?Aa:si,minFilter:Hr,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Oe=z.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||P;Oe.setSize(Ve.z*A.transmissionResolutionScale,Ve.w*A.transmissionResolutionScale);const ze=A.getRenderTarget(),ke=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(Oe),A.getClearColor(pe),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),st&&Ne.render(de);const et=A.toneMapping;A.toneMapping=Wi;const je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),z.setupLightsView(oe),we===!0&&Ge.setGlobalState(A.clippingPlanes,oe),Ei(R,de,oe),Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Nt=0,Jt=Z.length;Nt<Jt;Nt++){const Zt=Z[Nt],{object:zt,geometry:Je,material:Ot,group:lt}=Zt;if(Ot.side===Vi&&zt.layers.test(oe.layers)){const En=Ot.side;Ot.side=Kn,Ot.needsUpdate=!0,Qr(zt,de,oe,Je,Ot,lt),Ot.side=En,Ot.needsUpdate=!0,tt=!0}}tt===!0&&(Y.updateMultisampleRenderTarget(Oe),Y.updateRenderTargetMipmap(Oe))}A.setRenderTarget(ze,ke,Ye),A.setClearColor(pe,fe),je!==void 0&&(oe.viewport=je),A.toneMapping=et}function Ei(R,Z,de){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Oe=R.length;J<Oe;J++){const Ve=R[J],{object:ze,geometry:ke,group:Ye}=Ve;let et=Ve.material;et.allowOverride===!0&&oe!==null&&(et=oe),ze.layers.test(de.layers)&&Qr(ze,Z,de,ke,et,Ye)}}function Qr(R,Z,de,oe,J,Oe){R.onBeforeRender(A,Z,de,oe,J,Oe),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(A,Z,de,oe,R,Oe),J.transparent===!0&&J.side===Vi&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,A.renderBufferDirect(de,Z,oe,J,R,Oe),J.side=fr,J.needsUpdate=!0,A.renderBufferDirect(de,Z,oe,J,R,Oe),J.side=Vi):A.renderBufferDirect(de,Z,oe,J,R,Oe),R.onAfterRender(A,Z,de,oe,J,Oe)}function Jr(R,Z,de){Z.isScene!==!0&&(Z=_t);const oe=E.get(R),J=z.state.lights,Oe=z.state.shadowsArray,Ve=J.state.version,ze=qe.getParameters(R,J.state,Oe,Z,de),ke=qe.getProgramCacheKey(ze);let Ye=oe.programs;oe.environment=R.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(R.isMeshStandardMaterial?Me:_e).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",On),Ye=new Map,oe.programs=Ye);let et=Ye.get(ke);if(et!==void 0){if(oe.currentProgram===et&&oe.lightsStateVersion===Ve)return oo(R,ze),et}else ze.uniforms=qe.getUniforms(R),R.onBeforeCompile(ze,A),et=qe.acquireProgram(ze,ke),Ye.set(ke,et),oe.uniforms=ze.uniforms;const je=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ge.uniform),oo(R,ze),oe.needsLights=Da(R),oe.lightsStateVersion=Ve,oe.needsLights&&(je.ambientLightColor.value=J.state.ambient,je.lightProbe.value=J.state.probe,je.directionalLights.value=J.state.directional,je.directionalLightShadows.value=J.state.directionalShadow,je.spotLights.value=J.state.spot,je.spotLightShadows.value=J.state.spotShadow,je.rectAreaLights.value=J.state.rectArea,je.ltc_1.value=J.state.rectAreaLTC1,je.ltc_2.value=J.state.rectAreaLTC2,je.pointLights.value=J.state.point,je.pointLightShadows.value=J.state.pointShadow,je.hemisphereLights.value=J.state.hemi,je.directionalShadowMap.value=J.state.directionalShadowMap,je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,je.spotShadowMap.value=J.state.spotShadowMap,je.spotLightMatrix.value=J.state.spotLightMatrix,je.spotLightMap.value=J.state.spotLightMap,je.pointShadowMap.value=J.state.pointShadowMap,je.pointShadowMatrix.value=J.state.pointShadowMatrix),oe.currentProgram=et,oe.uniformsList=null,et}function El(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function oo(R,Z){const de=E.get(R);de.outputColorSpace=Z.outputColorSpace,de.batching=Z.batching,de.batchingColor=Z.batchingColor,de.instancing=Z.instancing,de.instancingColor=Z.instancingColor,de.instancingMorph=Z.instancingMorph,de.skinning=Z.skinning,de.morphTargets=Z.morphTargets,de.morphNormals=Z.morphNormals,de.morphColors=Z.morphColors,de.morphTargetsCount=Z.morphTargetsCount,de.numClippingPlanes=Z.numClippingPlanes,de.numIntersection=Z.numClipIntersection,de.vertexAlphas=Z.vertexAlphas,de.vertexTangents=Z.vertexTangents,de.toneMapping=Z.toneMapping}function dr(R,Z,de,oe,J){Z.isScene!==!0&&(Z=_t),Y.resetTextureUnits();const Oe=Z.fog,Ve=oe.isMeshStandardMaterial?Z.environment:null,ze=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Qs,ke=(oe.isMeshStandardMaterial?Me:_e).get(oe.envMap||Ve),Ye=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,et=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),je=!!de.morphAttributes.position,tt=!!de.morphAttributes.normal,Nt=!!de.morphAttributes.color;let Jt=Wi;oe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Jt=A.toneMapping);const Zt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,zt=Zt!==void 0?Zt.length:0,Je=E.get(oe),Ot=z.state.lights;if(we===!0&&(We===!0||R!==ae)){const An=R===ae&&oe.id===ie;Ge.setState(oe,R,An)}let lt=!1;oe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ot.state.version||Je.outputColorSpace!==ze||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isBatchedMesh&&Je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Je.instancingMorph===!1&&J.morphTexture!==null||Je.envMap!==ke||oe.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ge.numPlanes||Je.numIntersection!==Ge.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==et||Je.morphTargets!==je||Je.morphNormals!==tt||Je.morphColors!==Nt||Je.toneMapping!==Jt||Je.morphTargetsCount!==zt)&&(lt=!0):(lt=!0,Je.__version=oe.version);let En=Je.currentProgram;lt===!0&&(En=Jr(oe,Z,J));let Qi=!1,bn=!1,ci=!1;const Bt=En.getUniforms(),Tn=Je.uniforms;if(Ze.useProgram(En.program)&&(Qi=!0,bn=!0,ci=!0),oe.id!==ie&&(ie=oe.id,bn=!0),Qi||ae!==R){Ze.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(k,"projectionMatrix",R.projectionMatrix),Bt.setValue(k,"viewMatrix",R.matrixWorldInverse);const wn=Bt.map.cameraPosition;wn!==void 0&&wn.setValue(k,it.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Bt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),ae!==R&&(ae=R,bn=!0,ci=!0)}if(Je.needsLights&&(Ot.state.directionalShadowMap.length>0&&Bt.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,Y),Ot.state.spotShadowMap.length>0&&Bt.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,Y),Ot.state.pointShadowMap.length>0&&Bt.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,Y)),J.isSkinnedMesh){Bt.setOptional(k,J,"bindMatrix"),Bt.setOptional(k,J,"bindMatrixInverse");const An=J.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Bt.setValue(k,"boneTexture",An.boneTexture,Y))}J.isBatchedMesh&&(Bt.setOptional(k,J,"batchingTexture"),Bt.setValue(k,"batchingTexture",J._matricesTexture,Y),Bt.setOptional(k,J,"batchingIdTexture"),Bt.setValue(k,"batchingIdTexture",J._indirectTexture,Y),Bt.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Bt.setValue(k,"batchingColorTexture",J._colorsTexture,Y));const mn=de.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&dt.update(J,de,En),(bn||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,Bt.setValue(k,"receiveShadow",J.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Tn.envMap.value=ke,Tn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=IR()),bn&&(Bt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&lo(Tn,ci),Oe&&oe.fog===!0&&rt.refreshFogUniforms(Tn,Oe),rt.refreshMaterialUniforms(Tn,oe,ve,ee,z.state.transmissionRenderTarget[R.id]),ou.upload(k,El(Je),Tn,Y)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ou.upload(k,El(Je),Tn,Y),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue(k,"center",J.center),Bt.setValue(k,"modelViewMatrix",J.modelViewMatrix),Bt.setValue(k,"normalMatrix",J.normalMatrix),Bt.setValue(k,"modelMatrix",J.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const An=oe.uniformsGroups;for(let wn=0,$r=An.length;wn<$r;wn++){const bi=An[wn];Ee.update(bi,En),Ee.bind(bi,En)}}return En}function lo(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Da(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Z,de){const oe=E.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Z,E.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const de=E.get(R);de.__webglFramebuffer=Z,de.__useDefaultFramebuffer=Z===void 0};const Ua=k.createFramebuffer();this.setRenderTarget=function(R,Z=0,de=0){X=R,O=Z,V=de;let oe=null,J=!1,Oe=!1;if(R){const ze=E.get(R);if(ze.__useDefaultFramebuffer!==void 0){Ze.bindFramebuffer(k.FRAMEBUFFER,ze.__webglFramebuffer),P.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest,Ze.viewport(P),Ze.scissor(H),Ze.setScissorTest($),ie=-1;return}else if(ze.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(ze.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(ze.__boundDepthTexture!==et){if(et!==null&&E.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Oe=!0);const Ye=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?oe=Ye[Z][de]:oe=Ye[Z],J=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?oe=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?oe=Ye[de]:oe=Ye,P.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest}else P.copy(Q).multiplyScalar(ve).floor(),H.copy(ue).multiplyScalar(ve).floor(),$=be;if(de!==0&&(oe=Ua),Ze.bindFramebuffer(k.FRAMEBUFFER,oe)&&Ze.drawBuffers(R,oe),Ze.viewport(P),Ze.scissor(H),Ze.setScissorTest($),J){const ze=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,de)}else if(Oe){const ze=Z;for(let ke=0;ke<R.textures.length;ke++){const Ye=E.get(R.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,Ye.__webglTexture,de,ze)}}else if(R!==null&&de!==0){const ze=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,de)}ie=-1},this.readRenderTargetPixels=function(R,Z,de,oe,J,Oe,Ve,ze=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){Ze.bindFramebuffer(k.FRAMEBUFFER,ke);try{const Ye=R.textures[ze],et=Ye.format,je=Ye.type;if(!It.textureFormatReadable(et)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(je)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-oe&&de>=0&&de<=R.height-J&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Z,de,oe,J,Ce.convert(et),Ce.convert(je),Oe))}finally{const Ye=X!==null?E.get(X).__webglFramebuffer:null;Ze.bindFramebuffer(k.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,Z,de,oe,J,Oe,Ve,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(Z>=0&&Z<=R.width-oe&&de>=0&&de<=R.height-J){Ze.bindFramebuffer(k.FRAMEBUFFER,ke);const Ye=R.textures[ze],et=Ye.format,je=Ye.type;if(!It.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.bufferData(k.PIXEL_PACK_BUFFER,Oe.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Z,de,oe,J,Ce.convert(et),Ce.convert(je),0);const Nt=X!==null?E.get(X).__webglFramebuffer:null;Ze.bindFramebuffer(k.FRAMEBUFFER,Nt);const Jt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nb(k,Jt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Oe),k.deleteBuffer(tt),k.deleteSync(Jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,de=0){const oe=Math.pow(2,-de),J=Math.floor(R.image.width*oe),Oe=Math.floor(R.image.height*oe),Ve=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;Y.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,de,0,0,Ve,ze,J,Oe),Ze.unbindTexture()};const hr=k.createFramebuffer(),La=k.createFramebuffer();this.copyTextureToTexture=function(R,Z,de=null,oe=null,J=0,Oe=null){Oe===null&&(J!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=J,J=0):Oe=0);let Ve,ze,ke,Ye,et,je,tt,Nt,Jt;const Zt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(de!==null)Ve=de.max.x-de.min.x,ze=de.max.y-de.min.y,ke=de.isBox3?de.max.z-de.min.z:1,Ye=de.min.x,et=de.min.y,je=de.isBox3?de.min.z:0;else{const mn=Math.pow(2,-J);Ve=Math.floor(Zt.width*mn),ze=Math.floor(Zt.height*mn),R.isDataArrayTexture?ke=Zt.depth:R.isData3DTexture?ke=Math.floor(Zt.depth*mn):ke=1,Ye=0,et=0,je=0}oe!==null?(tt=oe.x,Nt=oe.y,Jt=oe.z):(tt=0,Nt=0,Jt=0);const zt=Ce.convert(Z.format),Je=Ce.convert(Z.type);let Ot;Z.isData3DTexture?(Y.setTexture3D(Z,0),Ot=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),Ot=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const lt=k.getParameter(k.UNPACK_ROW_LENGTH),En=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qi=k.getParameter(k.UNPACK_SKIP_PIXELS),bn=k.getParameter(k.UNPACK_SKIP_ROWS),ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ye),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const Bt=R.isDataArrayTexture||R.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),An=E.get(Z),wn=E.get(mn.__renderTarget),$r=E.get(An.__renderTarget);Ze.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let bi=0;bi<ke;bi++)Bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,je+bi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Oe,Jt+bi)),k.blitFramebuffer(Ye,et,Ve,ze,tt,Nt,Ve,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),An=E.get(Z);Ze.bindFramebuffer(k.READ_FRAMEBUFFER,hr),Ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,La);for(let wn=0;wn<ke;wn++)Bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,J,je+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,J),Tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Oe,Jt+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Oe),J!==0?k.blitFramebuffer(Ye,et,Ve,ze,tt,Nt,Ve,ze,k.COLOR_BUFFER_BIT,k.NEAREST):Tn?k.copyTexSubImage3D(Ot,Oe,tt,Nt,Jt+wn,Ye,et,Ve,ze):k.copyTexSubImage2D(Ot,Oe,tt,Nt,Ye,et,Ve,ze);Ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ot,Oe,tt,Nt,Jt,Ve,ze,ke,zt,Je,Zt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Oe,tt,Nt,Jt,Ve,ze,ke,zt,Zt.data):k.texSubImage3D(Ot,Oe,tt,Nt,Jt,Ve,ze,ke,zt,Je,Zt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Oe,tt,Nt,Ve,ze,zt,Je,Zt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Oe,tt,Nt,Zt.width,Zt.height,zt,Zt.data):k.texSubImage2D(k.TEXTURE_2D,Oe,tt,Nt,Ve,ze,zt,Je,Zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,En),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ci),Oe===0&&Z.generateMipmaps&&k.generateMipmap(Ot),Ze.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){O=0,V=0,X=null,Ze.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const Tx="/Reddit.jpeg",Ax="/youtube.png",wx="/instagram.png",Rx="/linkedin.png",zR="/github.png",Cx="/discord.png",FR="/pinterest.png",BR="/stackoverflow.png",HR="/udemy.jpg",GR="/notion.png",VR="/google.png",kR="/udacity.jpg",XR="/chatgpt.png",WR="/coursera.png",qR="/gemini.png",YR="/behance.png";function jR(){const s=se.useRef(null),e=se.useRef(null),i=se.useRef(null),r=se.useRef(null),l=se.useRef(null),c=se.useRef([]);se.useRef(new Wr);const f=se.useRef({forward:!1,backward:!1,left:!1,right:!1}),[h,m]=se.useState(null),[p,_]=se.useState(!1),[g,x]=se.useState(new Set),M=Ca(),b=()=>{h&&(x(O=>new Set([...O,h.name])),h.route?M(h.route):window.open(h.link,"_blank"))},T=[{name:"Reddit",color:16729344,description:"The front page of the internet. Community-driven discussions and content sharing.",link:"https://reddit.com",position:{x:-15,z:-10},route:"/reddit",localImage:Tx},{name:"YouTube",color:16711680,description:"World's largest video sharing platform. Watch, create, and share videos.",link:"https://youtube.com",position:{x:15,z:-10},route:"/youtube",localImage:Ax},{name:"Instagram",color:14757996,description:"Photo and video sharing social network. Connect through visual content.",link:"https://instagram.com",position:{x:-15,z:-30},route:"/instagram",localImage:wx},{name:"LinkedIn",color:30645,description:"Professional networking platform. Connect with colleagues and find opportunities.",link:"https://linkedin.com",position:{x:15,z:-30},route:"/linkedin",localImage:Rx},{name:"GitHub",color:1578775,description:"Code hosting platform for version control and collaboration.",link:"https://github.com",position:{x:0,z:-50},route:"/github",localImage:zR},{name:"Discord",color:5793266,description:"Voice, video, and text communication platform for communities.",link:"https://discord.com",position:{x:-20,z:-70},route:"/discord",localImage:Cx},{name:"Pinterest",color:15073315,description:"Visual discovery engine for finding ideas and inspiration.",link:"https://pinterest.com",position:{x:20,z:-70},route:"/pinterest",localImage:FR},{name:"Stack Overflow",color:16023588,description:"Q&A platform for programmers. Find solutions to coding problems.",link:"https://stackoverflow.com",position:{x:-15,z:-90},route:"/stackoverflow",localImage:BR},{name:"Udemy",color:10761712,description:"Online learning platform with thousands of courses.",link:"https://udemy.com",position:{x:15,z:-90},route:"/udemy",localImage:HR},{name:"Notion",color:0,description:"All-in-one workspace for notes, tasks, wikis, and databases.",link:"https://notion.so",position:{x:0,z:-110},route:"/notion",localImage:GR},{name:"Google Workspace",color:4359668,description:"A suite of productivity and collaboration tools including Gmail, Docs, Drive, and Calendar.",link:"https://google.com",position:{x:-25,z:-130},route:"/google",localImage:VR},{name:"Udacity",color:177124,description:"Online learning platform with nanodegree programs.",link:"https://udacity.com",position:{x:25,z:-130},route:"/udacity",localImage:kR},{name:"Coursera",color:2782156,description:"Online courses and certifications from top universities.",link:"https://coursera.org",position:{x:-15,z:-150},route:"/coursera",localImage:WR},{name:"ChatGPT",color:0,description:"AI-powered chatbot developed by OpenAI.",link:"https://chat.openai.com",position:{x:15,z:-150},route:"/chatgpt",localImage:XR},{name:"Gemini",color:255,description:"Google’s AI-powered platform for generative AI and next-gen tools.",link:"https://gemini.com",position:{x:-20,z:-170},route:"/gemini",localImage:qR},{name:"Behance",color:1534463,description:"Showcase and discover creative work online.",link:"https://behance.net",position:{x:20,z:-170},route:"/behance",localImage:YR}],y=()=>{const O=new Xr;O.background=new Ct(8900331),O.fog=new Tp(8900331,50,150),e.current=O;const V=new yn(60,window.innerWidth/window.innerHeight,.1,1e3);V.position.set(0,15,25),i.current=V;const X=new jr({antialias:!0});return X.setSize(window.innerWidth,window.innerHeight),X.shadowMap.enabled=!0,X.shadowMap.type=kv,s.current.appendChild(X.domElement),r.current=X,{scene:O,camera:V,renderer:X}},v=O=>{const V=new Yr(16777215,.6);O.add(V);const X=new qr(16777215,.8);X.position.set(50,50,50),X.castShadow=!0,X.shadow.mapSize.width=2048,X.shadow.mapSize.height=2048,X.shadow.camera.left=-80,X.shadow.camera.right=80,X.shadow.camera.top=80,X.shadow.camera.bottom=-80,O.add(X)},D=O=>{const V=new xi(400,600),X=new rn({color:5592405,roughness:.8}),ie=new pt(V,X);return ie.rotation.x=-Math.PI/2,ie.receiveShadow=!0,O.add(ie),ie},C=(O,V)=>{const X=new rn({color:0,roughness:.9}),ie=new pt(new xi(8,250),X);ie.rotation.x=-Math.PI/2,ie.position.set(0,.01,-90),ie.receiveShadow=!0,O.add(ie);const ae=Math.min(...V.map(pe=>pe.position.z)),P=Math.ceil(Math.abs(ae)/20);for(let pe=0;pe<P;pe++){const fe=new pt(new xi(60,6),X);fe.rotation.x=-Math.PI/2,fe.position.set(0,.01,-pe*20-10),fe.receiveShadow=!0,O.add(fe)}const H=new rn({color:16777215,emissive:16777215,emissiveIntensity:.3}),$=Math.ceil(Math.abs(ae)/10);for(let pe=0;pe<$;pe++){const fe=new pt(new xi(.3,3),H);fe.rotation.x=-Math.PI/2,fe.position.set(0,.02,-pe*10),O.add(fe)}},L=O=>{const V=new cr,X=new Fr(.4,.4,1.2,8),ie=new rn({color:3447003}),ae=new pt(X,ie);ae.position.y=.6,ae.castShadow=!0,V.add(ae);const P=new fu(.35,8,8),H=new rn({color:16767916}),$=new pt(P,H);$.position.y=1.5,$.castShadow=!0,V.add($);const pe=new Fr(.12,.12,.7,6),fe=new rn({color:3447003}),N=new pt(pe,fe);N.position.set(-.5,.8,0),N.castShadow=!0;const ee=new pt(pe,fe);ee.position.set(.5,.8,0),ee.castShadow=!0,V.add(N,ee);const ve=new Fr(.15,.15,.7,6),Ae=new rn({color:2899536}),Pe=new pt(ve,Ae);Pe.position.set(-.2,.1,0),Pe.castShadow=!0;const Q=new pt(ve,Ae);return Q.position.set(.2,.1,0),Q.castShadow=!0,V.add(Pe,Q),V.position.set(0,0,10),O.add(V),l.current=V,V},z=O=>{const V=new cr,X=8+Math.random()*4,ie=new oi(6,X,6),ae=new rn({color:O.color,roughness:.7,metalness:.3}),P=new pt(ie,ae);P.position.y=X/2,P.castShadow=!0,P.receiveShadow=!0,V.add(P);const H=new oi(6.5,.5,6.5),$=new rn({color:3355443}),pe=new pt(H,$);pe.position.y=X+.25,pe.castShadow=!0,V.add(pe);const fe=new rn({color:16777130,emissive:16777130,emissiveIntensity:.5}),N=new xi(.8,1),ee=Math.floor(X/2);for(let Q=0;Q<ee;Q++){const ue=Q*2+2,be=new pt(N,fe),De=new pt(N,fe);be.position.set(-1.5,ue,3.01),De.position.set(1.5,ue,3.01);const we=new pt(N,fe),We=new pt(N,fe);we.position.set(-1.5,ue,-3.01),We.position.set(1.5,ue,-3.01),we.rotation.y=Math.PI,We.rotation.y=Math.PI;const vt=new pt(N,fe),it=new pt(N,fe);vt.position.set(3.01,ue,-1.5),it.position.set(3.01,ue,1.5),vt.rotation.y=-Math.PI/2,it.rotation.y=-Math.PI/2;const at=new pt(N,fe),_t=new pt(N,fe);at.position.set(-3.01,ue,-1.5),_t.position.set(-3.01,ue,1.5),at.rotation.y=Math.PI/2,_t.rotation.y=Math.PI/2,V.add(be,De,we,We,vt,it,at,_t)}(async Q=>new Promise(ue=>{const be=document.createElement("canvas");be.width=512,be.height=512;const De=be.getContext("2d");De.fillStyle=`#${Q.color.toString(16).padStart(6,"0")}`,De.fillRect(0,0,be.width,be.height),De.fillStyle="#ffffff",De.font="bold 48px Arial",De.textAlign="center",De.textBaseline="top",De.fillText(Q.name,be.width/2,50);const we=new Image;we.crossOrigin="anonymous",we.src=Q.localImage,we.onload=()=>{const vt=(be.width-300)/2,it=(be.height-300)/2+50;De.drawImage(we,vt,it,300,300);const at=new th(be),_t=new xi(5,5),st=new rn({map:at,transparent:!0}),kt=new pt(_t,st);kt.position.set(0,X/2,3.1),kt.castShadow=!0,ue(kt)},we.onerror=()=>{const We=new th(be),vt=new xi(5,5),it=new rn({map:We,transparent:!0}),at=new pt(vt,it);at.position.set(0,X/2,3.1),at.castShadow=!0,ue(at)}}))(O).then(Q=>{V.add(Q)});const Pe=(()=>{const Q=new cr,ue=new Fr(.5,.5,.2,16),be=new rn({color:O.color}),De=new pt(ue,be);De.position.y=X+1.5,Q.add(De);const we=new Image;return we.crossOrigin="anonymous",we.src=O.localImage,we.onload=()=>{const We=document.createElement("canvas");We.width=256,We.height=256;const vt=We.getContext("2d");vt.clearRect(0,0,We.width,We.height),vt.beginPath(),vt.arc(We.width/2,We.height/2,We.width/2-10,0,Math.PI*2),vt.fillStyle="#ffffff",vt.fill();const it=180,at=(We.width-it)/2,_t=(We.height-it)/2;vt.drawImage(we,at,_t,it,it);const st=new th(We),kt=new xi(2,2),k=new rn({map:st,transparent:!0,side:Vi}),Xt=new pt(kt,k);Xt.position.y=X+2,Xt.lookAt(new re(0,X+2,0)),Q.add(Xt)},Q})();return V.add(Pe),V.position.set(O.position.x,0,O.position.z),V.userData={type:"building",platform:O,onClick:()=>{l.current&&l.current.position.distanceTo(V.position)<10&&(m(O),x(ue=>new Set([...ue,O.name])),P.material.color.set(16777215),setTimeout(()=>{P.material.color.set(O.color)},300),setTimeout(()=>{O.route?M(O.route):window.open(O.link,"_blank")},800))}},V},B=(O,V=22)=>{for(let X=0;X<V;X++){const ie=new cr,ae=new Fr(.1,.1,6,8),P=new rn({color:0}),H=new pt(ae,P);H.position.y=3,H.castShadow=!0,ie.add(H);const $=new fu(.3,8,8),pe=new rn({color:16777130,emissive:16777130,emissiveIntensity:1}),fe=new pt($,pe);fe.position.y=6,ie.add(fe);const N=10*(X%2===0?1:-1),ee=-X*10-5;ie.position.set(N,0,ee),O.add(ie)}},F=O=>{const V={w:!1,a:!1,s:!1,d:!1,ArrowUp:!1,ArrowLeft:!1,ArrowDown:!1,ArrowRight:!1},X=pe=>{const fe=pe.key.toLowerCase();V.hasOwnProperty(fe)&&(V[fe]=!0),V.hasOwnProperty(pe.key)&&(V[pe.key]=!0)},ie=pe=>{const fe=pe.key.toLowerCase();V.hasOwnProperty(fe)&&(V[fe]=!1),V.hasOwnProperty(pe.key)&&(V[pe.key]=!1)};window.addEventListener("keydown",X),window.addEventListener("keyup",ie);const ae=new Gb,P=new Dt,H=pe=>{const fe=O.domElement.getBoundingClientRect();P.x=(pe.clientX-fe.left)/fe.width*2-1,P.y=-((pe.clientY-fe.top)/fe.height)*2+1,ae.setFromCamera(P,i.current);const N=ae.intersectObjects(c.current);if(N.length>0){const ee=N[0].object;ee.userData&&ee.userData.onClick&&ee.userData.onClick()}};O.domElement.addEventListener("mousedown",H),O.domElement.addEventListener("touchstart",pe=>{if(pe.touches.length===1){const fe=pe.touches[0],N={clientX:fe.clientX,clientY:fe.clientY};H(N)}},{passive:!1});const $=()=>{i.current.aspect=window.innerWidth/window.innerHeight,i.current.updateProjectionMatrix(),r.current.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",$),{keys:V,handleKeyDown:X,handleKeyUp:ie,handleResize:$}},j=O=>{let V=0,X,ie=null;const ae=()=>{if(X=requestAnimationFrame(ae),!l.current||!i.current||!r.current)return;const P=l.current,H=i.current,$=e.current,pe=r.current;let fe=!1;const N=new re,ee=.2,ve=.05;if((O.w||O.ArrowUp||f.current.forward)&&(N.z-=1,fe=!0),(O.s||O.ArrowDown||f.current.backward)&&(N.z+=1,fe=!0),(O.a||O.ArrowLeft||f.current.left)&&(P.rotation.y+=ve),(O.d||O.ArrowRight||f.current.right)&&(P.rotation.y-=ve),fe){N.normalize(),N.applyQuaternion(P.quaternion),P.position.add(N.multiplyScalar(ee)),V+=.2;const De=P.children.filter(We=>We.geometry&&We.geometry.type==="CylinderGeometry"&&We.position.y>.5),we=P.children.filter(We=>We.geometry&&We.geometry.type==="CylinderGeometry"&&We.position.y<.5);De.length>=2&&(De[0].rotation.x=Math.sin(V)*.5,De[1].rotation.x=Math.sin(V+Math.PI)*.5),we.length>=2&&(we[0].rotation.x=Math.sin(V+Math.PI)*.3,we[1].rotation.x=Math.sin(V)*.3)}else P.children.filter(we=>we.geometry&&we.geometry.type==="CylinderGeometry").forEach(we=>{we.rotation.x=0});let Ae=null,Pe=1/0;c.current.forEach(De=>{if(De.userData&&De.userData.platform){const we=P.position.distanceTo(De.position);we<8&&we<Pe&&(Pe=we,Ae=De.userData.platform)}}),Ae!==ie&&(ie=Ae,m(Ae),Ae&&x(De=>new Set([...De,Ae.name])));const Q=new re(0,12,18);Q.applyQuaternion(P.quaternion);const ue=P.position.clone().add(Q);H.position.lerp(ue,.1);const be=P.position.clone();be.y+=2,H.lookAt(be),pe.render($,H)};return ae(),()=>{cancelAnimationFrame(X)}};se.useEffect(()=>{if(_(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),!s.current)return;const{scene:O,renderer:V}=y();v(O),D(O),C(O,T),L(O),c.current=T.map($=>{const pe=z($);return O.add(pe),pe}),B(O);const{keys:X,handleKeyDown:ie,handleKeyUp:ae,handleResize:P}=F(V),H=j(X);return()=>{window.removeEventListener("keydown",ie),window.removeEventListener("keyup",ae),window.removeEventListener("resize",P),V.domElement.parentNode&&V.domElement.parentNode.removeChild(V.domElement),V.dispose(),H&&H()}},[M]);const A=(O,V)=>{V.preventDefault(),f.current[O]=!0},U=(O,V)=>{V.preventDefault(),f.current[O]=!1};return ce.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"relative",touchAction:"none"},children:[ce.jsx("div",{ref:s}),h&&ce.jsxs("div",{style:{position:"absolute",bottom:"500px",left:"50%",transform:"translateX(-50%)",background:"rgba(0, 0, 0, 0.85)",color:"white",padding:"20px",fontFamily:"Arial, sans-serif",maxWidth:"400px",width:"100%",zIndex:100,backdropFilter:"blur(10px)",display:"flex",flexDirection:"column",alignItems:"center"},children:[ce.jsx("div",{style:{width:"80px",height:"80px",marginBottom:"15px"},children:ce.jsx("img",{src:h.localImage,alt:h.name,style:{width:"100%",height:"100%",objectFit:"contain"},crossOrigin:"anonymous",onError:O=>{O.target.style.display="none"}})}),ce.jsx("h3",{style:{margin:"0 0 10px 0",color:`#${h.color.toString(16).padStart(6,"0")}`,textAlign:"center"},children:h.name}),ce.jsx("div",{style:{fontSize:"14px",opacity:.8,marginBottom:"10px"},children:g.has(h.name)}),ce.jsx("p",{style:{fontSize:"14px",lineHeight:"1.5",marginBottom:"15px",textAlign:"center"},children:h.description}),ce.jsx("button",{onClick:b,style:{fontSize:"12px",padding:"8px 12px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",textAlign:"center",width:"100%",transition:"background 0.3s ease"},onMouseEnter:O=>{O.target.style.background="rgba(255, 255, 255, 0.2)"},onMouseLeave:O=>{O.target.style.background="rgba(255, 255, 255, 0.1)"},children:p?"Tap here to enter building":"Click here to enter building"})]}),p&&ce.jsxs(ce.Fragment,{children:[ce.jsxs("div",{style:{position:"absolute",right:"20px",bottom:"160px",display:"flex",flexDirection:"column",gap:"15px",zIndex:100},children:[ce.jsx("button",{onTouchStart:O=>A("forward",O),onTouchEnd:O=>U("forward",O),style:{width:"80px",height:"80px",fontSize:"36px",border:"none",borderRadius:"50%",background:"linear-gradient(135deg, #3498db, #2980b9)",color:"white",boxShadow:"0 6px 20px rgba(52, 152, 219, 0.4)",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"▲"}),ce.jsx("button",{onTouchStart:O=>A("backward",O),onTouchEnd:O=>U("backward",O),style:{width:"80px",height:"80px",fontSize:"36px",border:"none",borderRadius:"50%",background:"linear-gradient(135deg, #3498db, #2980b9)",color:"white",boxShadow:"0 6px 20px rgba(52, 152, 219, 0.4)",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"▼"})]}),ce.jsxs("div",{style:{position:"absolute",left:"20px",bottom:"160px",display:"flex",gap:"15px",zIndex:100},children:[ce.jsx("button",{onTouchStart:O=>A("left",O),onTouchEnd:O=>U("left",O),style:{width:"80px",height:"80px",fontSize:"36px",border:"none",borderRadius:"50%",background:"linear-gradient(135deg, #e74c3c, #c0392b)",color:"white",boxShadow:"0 6px 20px rgba(231, 76, 60, 0.4)",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"◄"}),ce.jsx("button",{onTouchStart:O=>A("right",O),onTouchEnd:O=>U("right",O),style:{width:"80px",height:"80px",fontSize:"36px",border:"none",borderRadius:"50%",background:"linear-gradient(135deg, #e74c3c, #c0392b)",color:"white",boxShadow:"0 6px 20px rgba(231, 76, 60, 0.4)",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:"►"})]})]})]})}function ZR(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load(Tx),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF4500] leading-tight",children:"Reddit"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"Reddit is a social platform where users can share content, participate in discussions, and vote on posts across countless communities called subreddits."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-10",children:ce.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10`,children:[ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/Ubbj5gRbIU4",title:"Video 1",frameBorder:"0",allowFullScreen:!0})})}),ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/0FeEdmYRmeE?si=OU_k9Rk4PhAyqgx0",title:"Video 2",frameBorder:"0",allowFullScreen:!0})})})]})})]})]})}function KR(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load(Ax),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D02525] leading-tight",children:"YouTube"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"YouTube is a video-sharing platform where users can watch, upload, and share videos, subscribe to channels, and engage with creators through likes, comments, and live streams."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-14",children:ce.jsx("div",{className:"w-full max-w-[800px]",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/eLYizanla8A?si=LeWvRqkYUzVhGcg1",title:"Video",frameBorder:"0",allowFullScreen:!0})})})})]})]})}function QR(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load(wx),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E1306C] leading-tight",children:"Instagram"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"Instagram is a visual social platform where users share photos and videos, connect through stories and reels, and engage with creators and communities worldwide."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-10",children:ce.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10`,children:[ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/j4nBDjsyGZ0?si=1zBSdlXdwefaH8XI",title:"Video 1",frameBorder:"0",allowFullScreen:!0})})}),ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/zAruD5upXoM?si=feaI-C2Wn7m6_YqI",title:"Video 2",frameBorder:"0",allowFullScreen:!0})})})]})})]})]})}function JR(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load(Rx),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e76a8] leading-tight",children:"LinkedIn"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"LinkedIn is a professional networking platform where users connect with others in their industry, share updates, and build their professional profiles."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-10",children:ce.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10`,children:[ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/QU5BHmuK140?si=O5xFjIlfq8CM6ud-",title:"Video 1",frameBorder:"0",allowFullScreen:!0})})}),ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/k3EywfEK02s?si=H_SoKN4yCpon0moj",title:"Video 2",frameBorder:"0",allowFullScreen:!0})})})]})})]})]})}const $R="/github-logo.png";function eC(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load($R),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight",children:"GitHub"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"GitHub is a platform for version control and collaboration, where developers can store, manage, and share their code."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-10",children:ce.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10`,children:[ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/v5gnvDUWqFM?si=W13Vg2hyzSu_W4JW",title:"Video 1",frameBorder:"0",allowFullScreen:!0})})}),ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/vA5TTz6BXhY?si=ajth-hSAOg_HpACN",title:"Video 2",frameBorder:"0",allowFullScreen:!0})})})]})})]})]})}function tC(){const s=se.useRef(null),e=se.useRef(!1),i=se.useRef(null),r=Ca();return se.useEffect(()=>{if(!s.current||e.current)return;e.current=!0;const l=()=>Math.min(window.innerHeight*.5,400),c=s.current.clientWidth,f=l(),h=new Xr,m=new yn(75,c/f,.1,1e3);m.position.z=5;const p=new jr({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(p.domElement);const g=new Wr().load(Cx),x=new oi(2.5,2.5,2.5),M=new rn({map:g,metalness:.3,roughness:.4}),b=new pt(x,M);h.add(b),h.add(new Yr(16777215,.6));const T=new qr(16777215,.8);T.position.set(5,5,5),h.add(T);const y=new no,v=()=>{i.current=requestAnimationFrame(v);const C=y.getElapsedTime();b.rotation.x=C*.6,b.rotation.y=C*.8,p.render(h,m)};v();const D=()=>{if(!s.current)return;const C=s.current.clientWidth,L=l();m.aspect=C/L,m.updateProjectionMatrix(),p.setSize(C,L)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(i.current),window.removeEventListener("resize",D),s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),x.dispose(),M.dispose(),g.dispose(),p.dispose(),e.current=!1}},[]),ce.jsxs("div",{className:"min-h-screen bg-black",children:[ce.jsx("button",{onClick:()=>r("/City"),className:`fixed top-4 left-4 z-50
                    bg-blue-600 text-white
                    px-5 py-2 rounded-xl
                    font-semibold
                    shadow-lg
                    hover:bg-blue-500
                    transition`,children:"Go to City"}),ce.jsx("div",{className:"w-full flex justify-center items-start h-64 sm:h-80 md:h-96 mb-20",children:ce.jsx("div",{ref:s,className:"w-full max-w-4xl h-full"})}),ce.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20",children:[ce.jsxs("div",{className:"text-center space-y-6 sm:space-y-8",children:[ce.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight",children:"GitHub"}),ce.jsx("p",{className:"text-base sm:text-2xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto",children:"GitHub is a platform for version control and collaboration, where developers can store, manage, and share their code."})]}),ce.jsx("div",{className:"w-full flex justify-center mt-10",children:ce.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2
                  w-full
                  mx-auto mt-16 gap-10`,children:[ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/v5gnvDUWqFM?si=W13Vg2hyzSu_W4JW",title:"Video 1",frameBorder:"0",allowFullScreen:!0})})}),ce.jsx("div",{className:"w-full",children:ce.jsx("div",{className:"relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl",children:ce.jsx("iframe",{className:"absolute inset-0 w-full h-full",src:"https://www.youtube.com/embed/vA5TTz6BXhY?si=ajth-hSAOg_HpACN",title:"Video 2",frameBorder:"0",allowFullScreen:!0})})})]})})]})]})}function nC(){return ce.jsxs(VM,{children:[ce.jsx(Sa,{path:"/",element:ce.jsx(EE,{})}),ce.jsx(Sa,{path:"/City",element:ce.jsx(jR,{})}),ce.jsx(Sa,{path:"/reddit",element:ce.jsx(ZR,{})}),ce.jsx(Sa,{path:"/youtube",element:ce.jsx(KR,{})}),ce.jsx(Sa,{path:"/instagram",element:ce.jsx(QR,{})}),ce.jsx(Sa,{path:"/linkedin",element:ce.jsx(JR,{})}),ce.jsx(Sa,{path:"/github",element:ce.jsx(eC,{})}),ce.jsx(Sa,{path:"/discord",element:ce.jsx(tC,{})})]})}Wy.createRoot(document.getElementById("root")).render(ce.jsx(dE,{children:ce.jsx(nC,{})}));
