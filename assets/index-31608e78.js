(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function bc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Tc(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ee(s)?zm(s):Tc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ee(t))return t;if(le(t))return t}}const jm=/;(?![^(]*\))/g,Hm=/:([^]+)/,Km=/\/\*.*?\*\//gs;function zm(t){const e={};return t.replace(Km,"").split(jm).forEach(n=>{if(n){const s=n.split(Hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ec(t){let e="";if(Ee(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Ec(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=bc(Wm);function pd(t){return!!t||t===""}function Qm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=so(t[s],e[s]);return n}function so(t,e){if(t===e)return!0;let n=au(t),s=au(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Js(t),s=Js(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Qm(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!so(t[o],e[o]))return!1}}return String(t)===String(e)}function Ym(t,e){return t.findIndex(n=>so(n,e))}const sn=t=>Ee(t)?t:t==null?"":$(t)||le(t)&&(t.toString===yd||!z(t.toString))?JSON.stringify(t,gd,2):String(t),gd=(t,e)=>e&&e.__v_isRef?gd(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ro(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!$(e)&&!vd(e)?String(e):e,ae={},rs=[],mt=()=>{},Jm=()=>!1,Xm=/^on[^a-z]/,io=t=>Xm.test(t),Cc=t=>t.startsWith("onUpdate:"),Be=Object.assign,Sc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zm=Object.prototype.hasOwnProperty,J=(t,e)=>Zm.call(t,e),$=Array.isArray,os=t=>Ii(t)==="[object Map]",ro=t=>Ii(t)==="[object Set]",au=t=>Ii(t)==="[object Date]",z=t=>typeof t=="function",Ee=t=>typeof t=="string",Js=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",md=t=>le(t)&&z(t.then)&&z(t.catch),yd=Object.prototype.toString,Ii=t=>yd.call(t),ey=t=>Ii(t).slice(8,-1),vd=t=>Ii(t)==="[object Object]",Ac=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dr=bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ty=/-(\w)/g,Pt=oo(t=>t.replace(ty,(e,n)=>n?n.toUpperCase():"")),ny=/\B([A-Z])/g,Ts=oo(t=>t.replace(ny,"-$1").toLowerCase()),ao=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ea=oo(t=>t?`on${ao(t)}`:""),Xs=(t,e)=>!Object.is(t,e),fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ar=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cu;const sy=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class wd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function iy(t){return new wd(t)}function ry(t,e=dt){e&&e.active&&e.effects.push(t)}function oy(){return dt}const kc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_d=t=>(t.w&hn)>0,Id=t=>(t.n&hn)>0,ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hn},cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];_d(i)&&!Id(i)?i.delete(t):e[n++]=i,i.w&=~hn,i.n&=~hn}e.length=n}},Aa=new WeakMap;let Ls=0,hn=1;const ka=30;let pt;const xn=Symbol(""),Da=Symbol("");class Dc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ry(this,s)}run(){if(!this.active)return this.fn();let e=pt,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pt,pt=this,rn=!0,hn=1<<++Ls,Ls<=ka?ay(this):lu(this),this.fn()}finally{Ls<=ka&&cy(this),hn=1<<--Ls,pt=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(lu(this),this.onStop&&this.onStop(),this.active=!1)}}function lu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const bd=[];function Es(){bd.push(rn),rn=!1}function Cs(){const t=bd.pop();rn=t===void 0?!0:t}function Je(t,e,n){if(rn&&pt){let s=Aa.get(t);s||Aa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=kc()),Td(i)}}function Td(t,e){let n=!1;Ls<=ka?Id(t)||(t.n|=hn,n=!_d(t)):n=!t.has(pt),n&&(t.add(pt),pt.deps.push(t))}function jt(t,e,n,s,i,r){const o=Aa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ac(n)&&a.push(o.get("length")):(a.push(o.get(xn)),os(t)&&a.push(o.get(Da)));break;case"delete":$(t)||(a.push(o.get(xn)),os(t)&&a.push(o.get(Da)));break;case"set":os(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&Ra(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ra(kc(c))}}function Ra(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&uu(s);for(const s of n)s.computed||uu(s)}function uu(t,e){(t!==pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ly=bc("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Js)),uy=Rc(),hy=Rc(!1,!0),dy=Rc(!0),hu=fy();function fy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let r=0,o=this.length;r<o;r++)Je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es();const s=ee(this)[e].apply(this,n);return Cs(),s}}),t}function py(t){const e=ee(this);return Je(e,"has",t),e.hasOwnProperty(t)}function Rc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ry:Dd:e?kd:Ad).get(s))return s;const o=$(s);if(!t){if(o&&J(hu,i))return Reflect.get(hu,i,r);if(i==="hasOwnProperty")return py}const a=Reflect.get(s,i,r);return(Js(i)?Ed.has(i):ly(i))||(t||Je(s,"get",i),e)?a:Fe(a)?o&&Ac(i)?a:a.value:le(a)?t?Rd(a):Mc(a):a}}const gy=Cd(),my=Cd(!0);function Cd(t=!1){return function(n,s,i,r){let o=n[s];if(fs(o)&&Fe(o)&&!Fe(i))return!1;if(!t&&(!kr(i)&&!fs(i)&&(o=ee(o),i=ee(i)),!$(n)&&Fe(o)&&!Fe(i)))return o.value=i,!0;const a=$(n)&&Ac(s)?Number(s)<n.length:J(n,s),c=Reflect.set(n,s,i,r);return n===ee(r)&&(a?Xs(i,o)&&jt(n,"set",s,i):jt(n,"add",s,i)),c}}function yy(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&jt(t,"delete",e,void 0),s}function vy(t,e){const n=Reflect.has(t,e);return(!Js(e)||!Ed.has(e))&&Je(t,"has",e),n}function wy(t){return Je(t,"iterate",$(t)?"length":xn),Reflect.ownKeys(t)}const Sd={get:uy,set:gy,deleteProperty:yy,has:vy,ownKeys:wy},_y={get:dy,set(t,e){return!0},deleteProperty(t,e){return!0}},Iy=Be({},Sd,{get:hy,set:my}),Nc=t=>t,co=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ee(t),r=ee(e);n||(e!==r&&Je(i,"get",e),Je(i,"get",r));const{has:o}=co(i),a=s?Nc:n?Lc:Zs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,s=ee(n),i=ee(t);return e||(t!==i&&Je(s,"has",t),Je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function er(t,e=!1){return t=t.__v_raw,!e&&Je(ee(t),"iterate",xn),Reflect.get(t,"size",t)}function du(t){t=ee(t);const e=ee(this);return co(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function fu(t,e){e=ee(e);const n=ee(this),{has:s,get:i}=co(n);let r=s.call(n,t);r||(t=ee(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Xs(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function pu(t){const e=ee(this),{has:n,get:s}=co(e);let i=n.call(e,t);i||(t=ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&jt(e,"delete",t,void 0),r}function gu(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function tr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ee(o),c=e?Nc:t?Lc:Zs;return!t&&Je(a,"iterate",xn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function nr(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=os(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Nc:e?Lc:Zs;return!e&&Je(r,"iterate",c?Da:xn),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function by(){const t={get(r){return Xi(this,r)},get size(){return er(this)},has:Zi,add:du,set:fu,delete:pu,clear:gu,forEach:tr(!1,!1)},e={get(r){return Xi(this,r,!1,!0)},get size(){return er(this)},has:Zi,add:du,set:fu,delete:pu,clear:gu,forEach:tr(!1,!0)},n={get(r){return Xi(this,r,!0)},get size(){return er(this,!0)},has(r){return Zi.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:tr(!0,!1)},s={get(r){return Xi(this,r,!0,!0)},get size(){return er(this,!0)},has(r){return Zi.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=nr(r,!1,!1),n[r]=nr(r,!0,!1),e[r]=nr(r,!1,!0),s[r]=nr(r,!0,!0)}),[t,n,e,s]}const[Ty,Ey,Cy,Sy]=by();function Oc(t,e){const n=e?t?Sy:Cy:t?Ey:Ty;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Ay={get:Oc(!1,!1)},ky={get:Oc(!1,!0)},Dy={get:Oc(!0,!1)},Ad=new WeakMap,kd=new WeakMap,Dd=new WeakMap,Ry=new WeakMap;function Ny(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ny(ey(t))}function Mc(t){return fs(t)?t:Pc(t,!1,Sd,Ay,Ad)}function My(t){return Pc(t,!1,Iy,ky,kd)}function Rd(t){return Pc(t,!0,_y,Dy,Dd)}function Pc(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Oy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function as(t){return fs(t)?as(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function Nd(t){return as(t)||fs(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function xc(t){return Sr(t,"__v_skip",!0),t}const Zs=t=>le(t)?Mc(t):t,Lc=t=>le(t)?Rd(t):t;function Od(t){rn&&pt&&(t=ee(t),Td(t.dep||(t.dep=kc())))}function Md(t,e){t=ee(t);const n=t.dep;n&&Ra(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function Py(t){return xy(t,!1)}function xy(t,e){return Fe(t)?t:new Ly(t,e)}class Ly{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Zs(e)}get value(){return Od(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||fs(e);e=n?e:ee(e),Xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zs(e),Md(this))}}function Uy(t){return Fe(t)?t.value:t}const Fy={get:(t,e,n)=>Uy(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Pd(t){return as(t)?t:new Proxy(t,Fy)}var xd;class $y{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xd]=!1,this._dirty=!0,this.effect=new Dc(e,()=>{this._dirty||(this._dirty=!0,Md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ee(this);return Od(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xd="__v_isReadonly";function Vy(t,e,n=!1){let s,i;const r=z(t);return r?(s=t,i=mt):(s=t.get,i=t.set),new $y(s,i,r||!i,n)}function on(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){lo(r,e,n)}return i}function at(t,e,n,s){if(z(t)){const r=on(t,e,n,s);return r&&md(r)&&r.catch(o=>{lo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(at(t[r],e,n,s));return i}function lo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}By(t,n,i,s)}function By(t,e,n,s=!0){console.error(t)}let ei=!1,Na=!1;const Le=[];let Dt=0;const cs=[];let $t=null,Sn=0;const Ld=Promise.resolve();let Uc=null;function qy(t){const e=Uc||Ld;return t?e.then(this?t.bind(this):t):e}function jy(t){let e=Dt+1,n=Le.length;for(;e<n;){const s=e+n>>>1;ti(Le[s])<t?e=s+1:n=s}return e}function Fc(t){(!Le.length||!Le.includes(t,ei&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?Le.push(t):Le.splice(jy(t.id),0,t),Ud())}function Ud(){!ei&&!Na&&(Na=!0,Uc=Ld.then($d))}function Hy(t){const e=Le.indexOf(t);e>Dt&&Le.splice(e,1)}function Ky(t){$(t)?cs.push(...t):(!$t||!$t.includes(t,t.allowRecurse?Sn+1:Sn))&&cs.push(t),Ud()}function mu(t,e=ei?Dt+1:0){for(;e<Le.length;e++){const n=Le[e];n&&n.pre&&(Le.splice(e,1),e--,n())}}function Fd(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,s)=>ti(n)-ti(s)),Sn=0;Sn<$t.length;Sn++)$t[Sn]();$t=null,Sn=0}}const ti=t=>t.id==null?1/0:t.id,zy=(t,e)=>{const n=ti(t)-ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $d(t){Na=!1,ei=!0,Le.sort(zy);const e=mt;try{for(Dt=0;Dt<Le.length;Dt++){const n=Le[Dt];n&&n.active!==!1&&on(n,null,14)}}finally{Dt=0,Le.length=0,Fd(),ei=!1,Uc=null,(Le.length||cs.length)&&$d()}}function Wy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||ae;f&&(i=n.map(g=>Ee(g)?g.trim():g)),d&&(i=n.map(Ar))}let a,c=s[a=ea(e)]||s[a=ea(Pt(e))];!c&&r&&(c=s[a=ea(Ts(e))]),c&&at(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,at(l,t,6,i)}}function Vd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=Vd(l,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(le(t)&&s.set(t,null),null):($(r)?r.forEach(c=>o[c]=null):Be(o,r),le(t)&&s.set(t,o),o)}function uo(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Ts(e))||J(t,e))}let tt=null,Bd=null;function Dr(t){const e=tt;return tt=t,Bd=t&&t.type.__scopeId||null,e}function Gy(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Su(-1);const r=Dr(e);let o;try{o=t(...i)}finally{Dr(r),s._d&&Su(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ta(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:g,ctx:E,inheritAttrs:T}=t;let P,j;const X=Dr(t);try{if(n.shapeFlag&4){const Z=i||s;P=At(u.call(Z,Z,d,r,g,f,E)),j=c}else{const Z=e;P=At(Z.length>1?Z(r,{attrs:c,slots:a,emit:l}):Z(r,null)),j=e.props?c:Qy(c)}}catch(Z){js.length=0,lo(Z,t,1),P=ct(yt)}let U=P;if(j&&T!==!1){const Z=Object.keys(j),{shapeFlag:ue}=U;Z.length&&ue&7&&(o&&Z.some(Cc)&&(j=Yy(j,o)),U=dn(U,j))}return n.dirs&&(U=dn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),P=U,Dr(X),P}const Qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},Yy=(t,e)=>{const n={};for(const s in t)(!Cc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jy(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?yu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!uo(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?yu(s,o,l):!0:!!o;return!1}function yu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!uo(n,r))return!0}return!1}function Xy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Zy=t=>t.__isSuspense;function ev(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Ky(t)}function tv(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function pr(t,e,n=!1){const s=me||tt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&z(e)?e.call(s.proxy):e}}const sr={};function na(t,e,n){return qd(t,e,n)}function qd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=oy()===(me==null?void 0:me.scope)?me:null;let c,l=!1,u=!1;if(Fe(t)?(c=()=>t.value,l=kr(t)):as(t)?(c=()=>t,s=!0):$(t)?(u=!0,l=t.some(U=>as(U)||kr(U)),c=()=>t.map(U=>{if(Fe(U))return U.value;if(as(U))return Rn(U);if(z(U))return on(U,a,2)})):z(t)?e?c=()=>on(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),at(t,a,3,[f])}:c=mt,e&&s){const U=c;c=()=>Rn(U())}let d,f=U=>{d=j.onStop=()=>{on(U,a,4)}},g;if(si)if(f=mt,e?n&&at(e,a,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const U=Zv();g=U.__watcherHandles||(U.__watcherHandles=[])}else return mt;let E=u?new Array(t.length).fill(sr):sr;const T=()=>{if(j.active)if(e){const U=j.run();(s||l||(u?U.some((Z,ue)=>Xs(Z,E[ue])):Xs(U,E)))&&(d&&d(),at(e,a,3,[U,E===sr?void 0:u&&E[0]===sr?[]:E,f]),E=U)}else j.run()};T.allowRecurse=!!e;let P;i==="sync"?P=T:i==="post"?P=()=>Ge(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),P=()=>Fc(T));const j=new Dc(c,P);e?n?T():E=j.run():i==="post"?Ge(j.run.bind(j),a&&a.suspense):j.run();const X=()=>{j.stop(),a&&a.scope&&Sc(a.scope.effects,j)};return g&&g.push(X),X}function nv(t,e,n){const s=this.proxy,i=Ee(t)?t.includes(".")?jd(s,t):()=>s[t]:t.bind(s,s);let r;z(e)?r=e:(r=e.handler,n=e);const o=me;ps(this);const a=qd(i,r.bind(s),n);return o?ps(o):Ln(),a}function jd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Rn(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))Rn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Rn(t[n],e);else if(ro(t)||os(t))t.forEach(n=>{Rn(n,e)});else if(vd(t))for(const n in t)Rn(t[n],e);return t}function sv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wd(()=>{t.isMounted=!0}),Gd(()=>{t.isUnmounting=!0}),t}const ot=[Function,Array],iv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=Hv(),s=sv();let i;return()=>{const r=e.default&&Kd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const T of r)if(T.type!==yt){o=T;break}}const a=ee(t),{mode:c}=a;if(s.isLeaving)return sa(o);const l=vu(o);if(!l)return sa(o);const u=Oa(l,a,s,n);Ma(l,u);const d=n.subTree,f=d&&vu(d);let g=!1;const{getTransitionKey:E}=l.type;if(E){const T=E();i===void 0?i=T:T!==i&&(i=T,g=!0)}if(f&&f.type!==yt&&(!An(l,f)||g)){const T=Oa(f,a,s,n);if(Ma(f,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},sa(o);c==="in-out"&&l.type!==yt&&(T.delayLeave=(P,j,X)=>{const U=Hd(s,f);U[String(f.key)]=f,P._leaveCb=()=>{j(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=X})}return o}}},rv=iv;function Hd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oa(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:T,onAppear:P,onAfterAppear:j,onAppearCancelled:X}=e,U=String(t.key),Z=Hd(n,t),ue=(W,fe)=>{W&&at(W,s,9,fe)},rt=(W,fe)=>{const he=fe[1];ue(W,fe),$(W)?W.every(Xe=>Xe.length<=1)&&he():W.length<=1&&he()},We={mode:r,persisted:o,beforeEnter(W){let fe=a;if(!n.isMounted)if(i)fe=T||a;else return;W._leaveCb&&W._leaveCb(!0);const he=Z[U];he&&An(t,he)&&he.el._leaveCb&&he.el._leaveCb(),ue(fe,[W])},enter(W){let fe=c,he=l,Xe=u;if(!n.isMounted)if(i)fe=P||c,he=j||l,Xe=X||u;else return;let Tt=!1;const Ut=W._enterCb=Ms=>{Tt||(Tt=!0,Ms?ue(Xe,[W]):ue(he,[W]),We.delayedLeave&&We.delayedLeave(),W._enterCb=void 0)};fe?rt(fe,[W,Ut]):Ut()},leave(W,fe){const he=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return fe();ue(d,[W]);let Xe=!1;const Tt=W._leaveCb=Ut=>{Xe||(Xe=!0,fe(),Ut?ue(E,[W]):ue(g,[W]),W._leaveCb=void 0,Z[he]===t&&delete Z[he])};Z[he]=t,f?rt(f,[W,Tt]):Tt()},clone(W){return Oa(W,e,n,s)}};return We}function sa(t){if(ho(t))return t=dn(t),t.children=null,t}function vu(t){return ho(t)?t.children?t.children[0]:void 0:t}function Ma(t,e){t.shapeFlag&6&&t.component?Ma(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ft?(o.patchFlag&128&&i++,s=s.concat(Kd(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?dn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const gr=t=>!!t.type.__asyncLoader,ho=t=>t.type.__isKeepAlive;function ov(t,e){zd(t,"a",e)}function av(t,e){zd(t,"da",e)}function zd(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ho(i.parent.vnode)&&cv(s,e,n,i),i=i.parent}}function cv(t,e,n,s){const i=fo(e,t,s,!0);Qd(()=>{Sc(s[e],i)},n)}function fo(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es(),ps(n);const a=at(e,n,t,o);return Ln(),Cs(),a});return s?i.unshift(r):i.push(r),r}}const Qt=t=>(e,n=me)=>(!si||t==="sp")&&fo(t,(...s)=>e(...s),n),lv=Qt("bm"),Wd=Qt("m"),uv=Qt("bu"),hv=Qt("u"),Gd=Qt("bum"),Qd=Qt("um"),dv=Qt("sp"),fv=Qt("rtg"),pv=Qt("rtc");function gv(t,e=me){fo("ec",t,e)}function et(t,e){const n=tt;if(n===null)return t;const s=mo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=ae]=e[r];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&Rn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function bn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Es(),at(c,n,8,[t.el,a,t,e]),Cs())}}const Yd="components";function Rr(t,e){return yv(Yd,t,!0,e)||t}const mv=Symbol();function yv(t,e,n=!0,s=!1){const i=tt||me;if(i){const r=i.type;if(t===Yd){const a=Qv(r,!1);if(a&&(a===e||a===Pt(e)||a===ao(Pt(e))))return r}const o=wu(i[t]||r[t],e)||wu(i.appContext[t],e);return!o&&s?r:o}}function wu(t,e){return t&&(t[e]||t[Pt(e)]||t[ao(Pt(e))])}function vv(t,e,n,s){let i;const r=n&&n[s];if($(t)||Ee(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Pa=t=>t?uf(t)?mo(t)||t.proxy:Pa(t.parent):null,qs=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$emit:t=>t.emit,$options:t=>$c(t),$forceUpdate:t=>t.f||(t.f=()=>Fc(t.update)),$nextTick:t=>t.n||(t.n=qy.bind(t.proxy)),$watch:t=>nv.bind(t)}),ia=(t,e)=>t!==ae&&!t.__isScriptSetup&&J(t,e),wv={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ia(s,e))return o[e]=1,s[e];if(i!==ae&&J(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,r[e];if(n!==ae&&J(n,e))return o[e]=4,n[e];xa&&(o[e]=0)}}const u=qs[e];let d,f;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ae&&J(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,J(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ia(i,e)?(i[e]=n,!0):s!==ae&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&J(t,o)||ia(e,o)||(a=r[0])&&J(a,o)||J(s,o)||J(qs,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let xa=!0;function _v(t){const e=$c(t),n=t.proxy,s=t.ctx;xa=!1,e.beforeCreate&&_u(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:E,activated:T,deactivated:P,beforeDestroy:j,beforeUnmount:X,destroyed:U,unmounted:Z,render:ue,renderTracked:rt,renderTriggered:We,errorCaptured:W,serverPrefetch:fe,expose:he,inheritAttrs:Xe,components:Tt,directives:Ut,filters:Ms}=e;if(l&&Iv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ie=o[pe];z(ie)&&(s[pe]=ie.bind(n))}if(i){const pe=i.call(n,n);le(pe)&&(t.data=Mc(pe))}if(xa=!0,r)for(const pe in r){const ie=r[pe],_n=z(ie)?ie.bind(n,n):z(ie.get)?ie.get.bind(n,n):mt,Yi=!z(ie)&&z(ie.set)?ie.set.bind(n):mt,In=Jv({get:_n,set:Yi});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>In.value,set:Et=>In.value=Et})}if(a)for(const pe in a)Jd(a[pe],s,n,pe);if(c){const pe=z(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ie=>{tv(ie,pe[ie])})}u&&_u(u,t,"c");function He(pe,ie){$(ie)?ie.forEach(_n=>pe(_n.bind(n))):ie&&pe(ie.bind(n))}if(He(lv,d),He(Wd,f),He(uv,g),He(hv,E),He(ov,T),He(av,P),He(gv,W),He(pv,rt),He(fv,We),He(Gd,X),He(Qd,Z),He(dv,fe),$(he))if(he.length){const pe=t.exposed||(t.exposed={});he.forEach(ie=>{Object.defineProperty(pe,ie,{get:()=>n[ie],set:_n=>n[ie]=_n})})}else t.exposed||(t.exposed={});ue&&t.render===mt&&(t.render=ue),Xe!=null&&(t.inheritAttrs=Xe),Tt&&(t.components=Tt),Ut&&(t.directives=Ut)}function Iv(t,e,n=mt,s=!1){$(t)&&(t=La(t));for(const i in t){const r=t[i];let o;le(r)?"default"in r?o=pr(r.from||i,r.default,!0):o=pr(r.from||i):o=pr(r),Fe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function _u(t,e,n){at($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jd(t,e,n,s){const i=s.includes(".")?jd(n,s):()=>n[s];if(Ee(t)){const r=e[t];z(r)&&na(i,r)}else if(z(t))na(i,t.bind(n));else if(le(t))if($(t))t.forEach(r=>Jd(r,e,n,s));else{const r=z(t.handler)?t.handler.bind(n):e[t.handler];z(r)&&na(i,r,t)}}function $c(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Nr(c,l,o,!0)),Nr(c,e,o)),le(e)&&r.set(e,c),c}function Nr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Nr(t,r,n,!0),i&&i.forEach(o=>Nr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bv={data:Iu,props:En,emits:En,methods:En,computed:En,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:En,directives:En,watch:Ev,provide:Iu,inject:Tv};function Iu(t,e){return e?t?function(){return Be(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Tv(t,e){return En(La(t),La(e))}function La(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?Be(Be(Object.create(null),t),e):e}function Ev(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function Cv(t,e,n,s=!1){const i={},r={};Sr(r,go,1),t.propsDefaults=Object.create(null),Xd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:My(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(uo(t.emitsOptions,f))continue;const g=e[f];if(c)if(J(r,f))g!==r[f]&&(r[f]=g,l=!0);else{const E=Pt(f);i[E]=Ua(c,a,E,g,t,!1)}else g!==r[f]&&(r[f]=g,l=!0)}}}else{Xd(t,e,i,r)&&(l=!0);let u;for(const d in a)(!e||!J(e,d)&&((u=Ts(d))===d||!J(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ua(c,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!J(e,d))&&(delete r[d],l=!0)}l&&jt(t,"set","$attrs")}function Xd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(dr(c))continue;const l=e[c];let u;i&&J(i,u=Pt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:uo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ee(n),l=a||ae;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ua(i,c,d,l[d],t,!J(l,d))}}return o}function Ua(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&z(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(ps(i),s=l[n]=c.call(null,e),Ln())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ts(n))&&(s=!0))}return s}function Zd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!z(t)){const u=d=>{c=!0;const[f,g]=Zd(d,e,!0);Be(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return le(t)&&s.set(t,rs),rs;if($(r))for(let u=0;u<r.length;u++){const d=Pt(r[u]);bu(d)&&(o[d]=ae)}else if(r)for(const u in r){const d=Pt(u);if(bu(d)){const f=r[u],g=o[d]=$(f)||z(f)?{type:f}:Object.assign({},f);if(g){const E=Cu(Boolean,g.type),T=Cu(String,g.type);g[0]=E>-1,g[1]=T<0||E<T,(E>-1||J(g,"default"))&&a.push(d)}}}const l=[o,a];return le(t)&&s.set(t,l),l}function bu(t){return t[0]!=="$"}function Tu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Eu(t,e){return Tu(t)===Tu(e)}function Cu(t,e){return $(e)?e.findIndex(n=>Eu(n,t)):z(e)&&Eu(e,t)?0:-1}const ef=t=>t[0]==="_"||t==="$stable",Vc=t=>$(t)?t.map(At):[At(t)],Av=(t,e,n)=>{if(e._n)return e;const s=Gy((...i)=>Vc(e(...i)),n);return s._c=!1,s},tf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ef(i))continue;const r=t[i];if(z(r))e[i]=Av(i,r,s);else if(r!=null){const o=Vc(r);e[i]=()=>o}}},nf=(t,e)=>{const n=Vc(e);t.slots.default=()=>n},kv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),Sr(e,"_",n)):tf(e,t.slots={})}else t.slots={},e&&nf(t,e);Sr(t.slots,go,1)},Dv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Be(i,e),!n&&a===1&&delete i._):(r=!e.$stable,tf(e,i)),o=e}else e&&(nf(t,e),o={default:1});if(r)for(const a in i)!ef(a)&&!(a in o)&&delete i[a]};function sf(){return{app:null,config:{isNativeTag:Jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rv=0;function Nv(t,e){return function(s,i=null){z(s)||(s=Object.assign({},s)),i!=null&&!le(i)&&(i=null);const r=sf(),o=new Set;let a=!1;const c=r.app={_uid:Rv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ew,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,d){if(!a){const f=ct(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,d),a=!0,c._container=l,l.__vue_app__=c,mo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Fa(t,e,n,s,i=!1){if($(t)){t.forEach((f,g)=>Fa(f,e&&($(e)?e[g]:e),n,s,i));return}if(gr(s)&&!i)return;const r=s.shapeFlag&4?mo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(Ee(l)?(u[l]=null,J(d,l)&&(d[l]=null)):Fe(l)&&(l.value=null)),z(c))on(c,a,12,[o,u]);else{const f=Ee(c),g=Fe(c);if(f||g){const E=()=>{if(t.f){const T=f?J(d,c)?d[c]:u[c]:c.value;i?$(T)&&Sc(T,r):$(T)?T.includes(r)||T.push(r):f?(u[c]=[r],J(d,c)&&(d[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,J(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ge(E,n)):E()}}}const Ge=ev;function Ov(t){return Mv(t)}function Mv(t,e){const n=sy();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=mt,insertStaticContent:E}=t,T=(h,p,m,_=null,w=null,S=null,k=!1,C=null,A=!!p.dynamicChildren)=>{if(h===p)return;h&&!An(h,p)&&(_=Ji(h),Et(h,w,S,!0),h=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:I,ref:x,shapeFlag:R}=p;switch(I){case po:P(h,p,m,_);break;case yt:j(h,p,m,_);break;case mr:h==null&&X(p,m,_,k);break;case ft:Tt(h,p,m,_,w,S,k,C,A);break;default:R&1?ue(h,p,m,_,w,S,k,C,A):R&6?Ut(h,p,m,_,w,S,k,C,A):(R&64||R&128)&&I.process(h,p,m,_,w,S,k,C,A,Zn)}x!=null&&w&&Fa(x,h&&h.ref,S,p||h,!p)},P=(h,p,m,_)=>{if(h==null)s(p.el=a(p.children),m,_);else{const w=p.el=h.el;p.children!==h.children&&l(w,p.children)}},j=(h,p,m,_)=>{h==null?s(p.el=c(p.children||""),m,_):p.el=h.el},X=(h,p,m,_)=>{[h.el,h.anchor]=E(h.children,p,m,_,h.el,h.anchor)},U=({el:h,anchor:p},m,_)=>{let w;for(;h&&h!==p;)w=f(h),s(h,m,_),h=w;s(p,m,_)},Z=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=f(h),i(h),h=m;i(p)},ue=(h,p,m,_,w,S,k,C,A)=>{k=k||p.type==="svg",h==null?rt(p,m,_,w,S,k,C,A):fe(h,p,w,S,k,C,A)},rt=(h,p,m,_,w,S,k,C)=>{let A,I;const{type:x,props:R,shapeFlag:L,transition:q,dirs:G}=h;if(A=h.el=o(h.type,S,R&&R.is,R),L&8?u(A,h.children):L&16&&W(h.children,A,null,_,w,S&&x!=="foreignObject",k,C),G&&bn(h,null,_,"created"),We(A,h,h.scopeId,k,_),R){for(const se in R)se!=="value"&&!dr(se)&&r(A,se,null,R[se],S,h.children,_,w,Ft);"value"in R&&r(A,"value",null,R.value),(I=R.onVnodeBeforeMount)&&St(I,_,h)}G&&bn(h,null,_,"beforeMount");const re=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;re&&q.beforeEnter(A),s(A,p,m),((I=R&&R.onVnodeMounted)||re||G)&&Ge(()=>{I&&St(I,_,h),re&&q.enter(A),G&&bn(h,null,_,"mounted")},w)},We=(h,p,m,_,w)=>{if(m&&g(h,m),_)for(let S=0;S<_.length;S++)g(h,_[S]);if(w){let S=w.subTree;if(p===S){const k=w.vnode;We(h,k,k.scopeId,k.slotScopeIds,w.parent)}}},W=(h,p,m,_,w,S,k,C,A=0)=>{for(let I=A;I<h.length;I++){const x=h[I]=C?Xt(h[I]):At(h[I]);T(null,x,p,m,_,w,S,k,C)}},fe=(h,p,m,_,w,S,k)=>{const C=p.el=h.el;let{patchFlag:A,dynamicChildren:I,dirs:x}=p;A|=h.patchFlag&16;const R=h.props||ae,L=p.props||ae;let q;m&&Tn(m,!1),(q=L.onVnodeBeforeUpdate)&&St(q,m,p,h),x&&bn(p,h,m,"beforeUpdate"),m&&Tn(m,!0);const G=w&&p.type!=="foreignObject";if(I?he(h.dynamicChildren,I,C,m,_,G,S):k||ie(h,p,C,null,m,_,G,S,!1),A>0){if(A&16)Xe(C,p,R,L,m,_,w);else if(A&2&&R.class!==L.class&&r(C,"class",null,L.class,w),A&4&&r(C,"style",R.style,L.style,w),A&8){const re=p.dynamicProps;for(let se=0;se<re.length;se++){const ye=re[se],ht=R[ye],es=L[ye];(es!==ht||ye==="value")&&r(C,ye,ht,es,w,h.children,m,_,Ft)}}A&1&&h.children!==p.children&&u(C,p.children)}else!k&&I==null&&Xe(C,p,R,L,m,_,w);((q=L.onVnodeUpdated)||x)&&Ge(()=>{q&&St(q,m,p,h),x&&bn(p,h,m,"updated")},_)},he=(h,p,m,_,w,S,k)=>{for(let C=0;C<p.length;C++){const A=h[C],I=p[C],x=A.el&&(A.type===ft||!An(A,I)||A.shapeFlag&70)?d(A.el):m;T(A,I,x,null,_,w,S,k,!0)}},Xe=(h,p,m,_,w,S,k)=>{if(m!==_){if(m!==ae)for(const C in m)!dr(C)&&!(C in _)&&r(h,C,m[C],null,k,p.children,w,S,Ft);for(const C in _){if(dr(C))continue;const A=_[C],I=m[C];A!==I&&C!=="value"&&r(h,C,I,A,k,p.children,w,S,Ft)}"value"in _&&r(h,"value",m.value,_.value)}},Tt=(h,p,m,_,w,S,k,C,A)=>{const I=p.el=h?h.el:a(""),x=p.anchor=h?h.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:q}=p;q&&(C=C?C.concat(q):q),h==null?(s(I,m,_),s(x,m,_),W(p.children,m,x,w,S,k,C,A)):R>0&&R&64&&L&&h.dynamicChildren?(he(h.dynamicChildren,L,m,w,S,k,C),(p.key!=null||w&&p===w.subTree)&&rf(h,p,!0)):ie(h,p,m,x,w,S,k,C,A)},Ut=(h,p,m,_,w,S,k,C,A)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?w.ctx.activate(p,m,_,k,A):Ms(p,m,_,w,S,k,A):tu(h,p,A)},Ms=(h,p,m,_,w,S,k)=>{const C=h.component=jv(h,_,w);if(ho(h)&&(C.ctx.renderer=Zn),Kv(C),C.asyncDep){if(w&&w.registerDep(C,He),!h.el){const A=C.subTree=ct(yt);j(null,A,p,m)}return}He(C,h,p,m,w,S,k)},tu=(h,p,m)=>{const _=p.component=h.component;if(Jy(h,p,m))if(_.asyncDep&&!_.asyncResolved){pe(_,p,m);return}else _.next=p,Hy(_.update),_.update();else p.el=h.el,_.vnode=p},He=(h,p,m,_,w,S,k)=>{const C=()=>{if(h.isMounted){let{next:x,bu:R,u:L,parent:q,vnode:G}=h,re=x,se;Tn(h,!1),x?(x.el=G.el,pe(h,x,k)):x=G,R&&fr(R),(se=x.props&&x.props.onVnodeBeforeUpdate)&&St(se,q,x,G),Tn(h,!0);const ye=ta(h),ht=h.subTree;h.subTree=ye,T(ht,ye,d(ht.el),Ji(ht),h,w,S),x.el=ye.el,re===null&&Xy(h,ye.el),L&&Ge(L,w),(se=x.props&&x.props.onVnodeUpdated)&&Ge(()=>St(se,q,x,G),w)}else{let x;const{el:R,props:L}=p,{bm:q,m:G,parent:re}=h,se=gr(p);if(Tn(h,!1),q&&fr(q),!se&&(x=L&&L.onVnodeBeforeMount)&&St(x,re,p),Tn(h,!0),R&&Zo){const ye=()=>{h.subTree=ta(h),Zo(R,h.subTree,h,w,null)};se?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ye()):ye()}else{const ye=h.subTree=ta(h);T(null,ye,m,_,h,w,S),p.el=ye.el}if(G&&Ge(G,w),!se&&(x=L&&L.onVnodeMounted)){const ye=p;Ge(()=>St(x,re,ye),w)}(p.shapeFlag&256||re&&gr(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&Ge(h.a,w),h.isMounted=!0,p=m=_=null}},A=h.effect=new Dc(C,()=>Fc(I),h.scope),I=h.update=()=>A.run();I.id=h.uid,Tn(h,!0),I()},pe=(h,p,m)=>{p.component=h;const _=h.vnode.props;h.vnode=p,h.next=null,Sv(h,p.props,_,m),Dv(h,p.children,m),Es(),mu(),Cs()},ie=(h,p,m,_,w,S,k,C,A=!1)=>{const I=h&&h.children,x=h?h.shapeFlag:0,R=p.children,{patchFlag:L,shapeFlag:q}=p;if(L>0){if(L&128){Yi(I,R,m,_,w,S,k,C,A);return}else if(L&256){_n(I,R,m,_,w,S,k,C,A);return}}q&8?(x&16&&Ft(I,w,S),R!==I&&u(m,R)):x&16?q&16?Yi(I,R,m,_,w,S,k,C,A):Ft(I,w,S,!0):(x&8&&u(m,""),q&16&&W(R,m,_,w,S,k,C,A))},_n=(h,p,m,_,w,S,k,C,A)=>{h=h||rs,p=p||rs;const I=h.length,x=p.length,R=Math.min(I,x);let L;for(L=0;L<R;L++){const q=p[L]=A?Xt(p[L]):At(p[L]);T(h[L],q,m,null,w,S,k,C,A)}I>x?Ft(h,w,S,!0,!1,R):W(p,m,_,w,S,k,C,A,R)},Yi=(h,p,m,_,w,S,k,C,A)=>{let I=0;const x=p.length;let R=h.length-1,L=x-1;for(;I<=R&&I<=L;){const q=h[I],G=p[I]=A?Xt(p[I]):At(p[I]);if(An(q,G))T(q,G,m,null,w,S,k,C,A);else break;I++}for(;I<=R&&I<=L;){const q=h[R],G=p[L]=A?Xt(p[L]):At(p[L]);if(An(q,G))T(q,G,m,null,w,S,k,C,A);else break;R--,L--}if(I>R){if(I<=L){const q=L+1,G=q<x?p[q].el:_;for(;I<=L;)T(null,p[I]=A?Xt(p[I]):At(p[I]),m,G,w,S,k,C,A),I++}}else if(I>L)for(;I<=R;)Et(h[I],w,S,!0),I++;else{const q=I,G=I,re=new Map;for(I=G;I<=L;I++){const Ze=p[I]=A?Xt(p[I]):At(p[I]);Ze.key!=null&&re.set(Ze.key,I)}let se,ye=0;const ht=L-G+1;let es=!1,iu=0;const Ps=new Array(ht);for(I=0;I<ht;I++)Ps[I]=0;for(I=q;I<=R;I++){const Ze=h[I];if(ye>=ht){Et(Ze,w,S,!0);continue}let Ct;if(Ze.key!=null)Ct=re.get(Ze.key);else for(se=G;se<=L;se++)if(Ps[se-G]===0&&An(Ze,p[se])){Ct=se;break}Ct===void 0?Et(Ze,w,S,!0):(Ps[Ct-G]=I+1,Ct>=iu?iu=Ct:es=!0,T(Ze,p[Ct],m,null,w,S,k,C,A),ye++)}const ru=es?Pv(Ps):rs;for(se=ru.length-1,I=ht-1;I>=0;I--){const Ze=G+I,Ct=p[Ze],ou=Ze+1<x?p[Ze+1].el:_;Ps[I]===0?T(null,Ct,m,ou,w,S,k,C,A):es&&(se<0||I!==ru[se]?In(Ct,m,ou,2):se--)}}},In=(h,p,m,_,w=null)=>{const{el:S,type:k,transition:C,children:A,shapeFlag:I}=h;if(I&6){In(h.component.subTree,p,m,_);return}if(I&128){h.suspense.move(p,m,_);return}if(I&64){k.move(h,p,m,Zn);return}if(k===ft){s(S,p,m);for(let R=0;R<A.length;R++)In(A[R],p,m,_);s(h.anchor,p,m);return}if(k===mr){U(h,p,m);return}if(_!==2&&I&1&&C)if(_===0)C.beforeEnter(S),s(S,p,m),Ge(()=>C.enter(S),w);else{const{leave:R,delayLeave:L,afterLeave:q}=C,G=()=>s(S,p,m),re=()=>{R(S,()=>{G(),q&&q()})};L?L(S,G,re):re()}else s(S,p,m)},Et=(h,p,m,_=!1,w=!1)=>{const{type:S,props:k,ref:C,children:A,dynamicChildren:I,shapeFlag:x,patchFlag:R,dirs:L}=h;if(C!=null&&Fa(C,null,m,h,!0),x&256){p.ctx.deactivate(h);return}const q=x&1&&L,G=!gr(h);let re;if(G&&(re=k&&k.onVnodeBeforeUnmount)&&St(re,p,h),x&6)qm(h.component,m,_);else{if(x&128){h.suspense.unmount(m,_);return}q&&bn(h,null,p,"beforeUnmount"),x&64?h.type.remove(h,p,m,w,Zn,_):I&&(S!==ft||R>0&&R&64)?Ft(I,p,m,!1,!0):(S===ft&&R&384||!w&&x&16)&&Ft(A,p,m),_&&nu(h)}(G&&(re=k&&k.onVnodeUnmounted)||q)&&Ge(()=>{re&&St(re,p,h),q&&bn(h,null,p,"unmounted")},m)},nu=h=>{const{type:p,el:m,anchor:_,transition:w}=h;if(p===ft){Bm(m,_);return}if(p===mr){Z(h);return}const S=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:C}=w,A=()=>k(m,S);C?C(h.el,S,A):A()}else S()},Bm=(h,p)=>{let m;for(;h!==p;)m=f(h),i(h),h=m;i(p)},qm=(h,p,m)=>{const{bum:_,scope:w,update:S,subTree:k,um:C}=h;_&&fr(_),w.stop(),S&&(S.active=!1,Et(k,h,p,m)),C&&Ge(C,p),Ge(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ft=(h,p,m,_=!1,w=!1,S=0)=>{for(let k=S;k<h.length;k++)Et(h[k],p,m,_,w)},Ji=h=>h.shapeFlag&6?Ji(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),su=(h,p,m)=>{h==null?p._vnode&&Et(p._vnode,null,null,!0):T(p._vnode||null,h,p,null,null,null,m),mu(),Fd(),p._vnode=h},Zn={p:T,um:Et,m:In,r:nu,mt:Ms,mc:W,pc:ie,pbc:he,n:Ji,o:t};let Xo,Zo;return e&&([Xo,Zo]=e(Zn)),{render:su,hydrate:Xo,createApp:Nv(su,Xo)}}function Tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rf(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Xt(i[r]),a.el=o.el),n||rf(o,a)),a.type===po&&(a.el=o.el)}}function Pv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const xv=t=>t.__isTeleport,ft=Symbol(void 0),po=Symbol(void 0),yt=Symbol(void 0),mr=Symbol(void 0),js=[];let gt=null;function we(t=!1){js.push(gt=t?null:[])}function Lv(){js.pop(),gt=js[js.length-1]||null}let ni=1;function Su(t){ni+=t}function of(t){return t.dynamicChildren=ni>0?gt||rs:null,Lv(),ni>0&&gt&&gt.push(t),t}function Re(t,e,n,s,i,r){return of(y(t,e,n,s,i,r,!0))}function $a(t,e,n,s,i){return of(ct(t,e,n,s,i,!0))}function Uv(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const go="__vInternal",af=({key:t})=>t??null,yr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ee(t)||Fe(t)||z(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,i=null,r=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&af(e),ref:e&&yr(e),scopeId:Bd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(Bc(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),ni>0&&!o&&gt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&gt.push(c),c}const ct=Fv;function Fv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mv)&&(t=yt),Uv(t)){const a=dn(t,e,!0);return n&&Bc(a,n),ni>0&&!r&&gt&&(a.shapeFlag&6?gt[gt.indexOf(t)]=a:gt.push(a)),a.patchFlag|=-2,a}if(Yv(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:a,style:c}=e;a&&!Ee(a)&&(e.class=Ec(a)),le(c)&&(Nd(c)&&!$(c)&&(c=Be({},c)),e.style=Tc(c))}const o=Ee(t)?1:Zy(t)?128:xv(t)?64:le(t)?4:z(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function $v(t){return t?Nd(t)||go in t?Be({},t):t:null}function dn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Vv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&af(a),ref:e&&e.ref?n&&i?$(i)?i.concat(yr(e)):[i,yr(e)]:yr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cf(t=" ",e=0){return ct(po,null,t,e)}function lf(t,e){const n=ct(mr,null,t);return n.staticCount=e,n}function Au(t="",e=!1){return e?(we(),$a(yt,null,t)):ct(yt,null,t)}function At(t){return t==null||typeof t=="boolean"?ct(yt):$(t)?ct(ft,null,t.slice()):typeof t=="object"?Xt(t):ct(po,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function Bc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Bc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(go in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[cf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ec([e.class,s.class]));else if(i==="style")e.style=Tc([e.style,s.style]);else if(io(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function St(t,e,n,s=null){at(t,e,7,[n,s])}const Bv=sf();let qv=0;function jv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Bv,r={uid:qv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zd(s,i),emitsOptions:Vd(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wy.bind(null,r),t.ce&&t.ce(r),r}let me=null;const Hv=()=>me||tt,ps=t=>{me=t,t.scope.on()},Ln=()=>{me&&me.scope.off(),me=null};function uf(t){return t.vnode.shapeFlag&4}let si=!1;function Kv(t,e=!1){si=e;const{props:n,children:s}=t.vnode,i=uf(t);Cv(t,n,i,e),kv(t,s);const r=i?zv(t,e):void 0;return si=!1,r}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xc(new Proxy(t.ctx,wv));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Gv(t):null;ps(t),Es();const r=on(s,t,0,[t.props,i]);if(Cs(),Ln(),md(r)){if(r.then(Ln,Ln),e)return r.then(o=>{ku(t,o,e)}).catch(o=>{lo(o,t,0)});t.asyncDep=r}else ku(t,r,e)}else hf(t,e)}function ku(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Pd(e)),hf(t,n)}let Du;function hf(t,e,n){const s=t.type;if(!t.render){if(!e&&Du&&!s.render){const i=s.template||$c(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Be(Be({isCustomElement:r,delimiters:a},o),c);s.render=Du(i,l)}}t.render=s.render||mt}ps(t),Es(),_v(t),Cs(),Ln()}function Wv(t){return new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}})}function Gv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Wv(t))},slots:t.slots,emit:t.emit,expose:e}}function mo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pd(xc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function Qv(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Yv(t){return z(t)&&"__vccOpts"in t}const Jv=(t,e)=>Vy(t,e,si),Xv=Symbol(""),Zv=()=>pr(Xv),ew="3.2.47",tw="http://www.w3.org/2000/svg",kn=typeof document<"u"?document:null,Ru=kn&&kn.createElement("template"),nw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?kn.createElementNS(tw,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ru.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ru.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iw(t,e,n){const s=t.style,i=Ee(n);if(n&&!i){if(e&&!Ee(e))for(const r in e)n[r]==null&&Va(s,r,"");for(const r in n)Va(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Nu=/\s*!important$/;function Va(t,e,n){if($(n))n.forEach(s=>Va(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=rw(t,e);Nu.test(n)?t.setProperty(Ts(s),n.replace(Nu,""),"important"):t[s]=n}}const Ou=["Webkit","Moz","ms"],ra={};function rw(t,e){const n=ra[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return ra[e]=s;s=ao(s);for(let i=0;i<Ou.length;i++){const r=Ou[i]+s;if(r in t)return ra[e]=r}return e}const Mu="http://www.w3.org/1999/xlink";function ow(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mu,e.slice(6,e.length)):t.setAttributeNS(Mu,e,n);else{const r=Gm(e);n==null||r&&!pd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function aw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Dn(t,e,n,s){t.addEventListener(e,n,s)}function cw(t,e,n,s){t.removeEventListener(e,n,s)}function lw(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=uw(e);if(s){const l=r[e]=fw(s,i);Dn(t,a,l,c)}else o&&(cw(t,a,o,c),r[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function uw(t){let e;if(Pu.test(t)){e={};let s;for(;s=t.match(Pu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let oa=0;const hw=Promise.resolve(),dw=()=>oa||(hw.then(()=>oa=0),oa=Date.now());function fw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at(pw(s,n.value),e,5,[s])};return n.value=t,n.attached=dw(),n}function pw(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const xu=/^on[a-z]/,gw=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?sw(t,s,i):e==="style"?iw(t,n,s):io(e)?Cc(e)||lw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mw(t,e,s,i))?aw(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ow(t,e,s,i))};function mw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&xu.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xu.test(e)&&Ee(n)?!1:e in t}const yw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};rv.props;const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>fr(e,n):e};function vw(t){t.target.composing=!0}function Lu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Or(i);const r=s||i.props&&i.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ar(a)),t._assign(a)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",vw),Dn(t,"compositionend",Lu),Dn(t,"change",Lu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Or(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ar(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qc={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ro(e);Dn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ar(Mr(o)):Mr(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Or(s)},mounted(t,{value:e}){Uu(t,e)},beforeUpdate(t,e,n){t._assign=Or(n)},updated(t,{value:e}){Uu(t,e)}};function Uu(t,e){const n=t.multiple;if(!(n&&!$(e)&&!ro(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Mr(r);if(n)$(e)?r.selected=Ym(e,o)>-1:r.selected=e.has(o);else if(so(Mr(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mr(t){return"_value"in t?t._value:t.value}const ww=["ctrl","shift","alt","meta"],_w={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ww.some(n=>t[`${n}Key`]&&!e.includes(n))},De=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=_w[e[i]];if(r&&r(n,e))return}return t(n,...s)},Iw=Be({patchProp:gw},nw);let Fu;function bw(){return Fu||(Fu=Ov(Iw))}const Tw=(...t)=>{const e=bw().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ew(s);if(!i)return;const r=e._component;!z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ew(t){return Ee(t)?document.querySelector(t):t}var Cw=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Sw=Symbol();var $u;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($u||($u={}));function Aw(){const t=iy(!0),e=t.run(()=>Py({}));let n=[],s=[];const i=xc({install(r){i._a=r,r.provide(Sw,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Cw?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[d],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw Error();const f=r<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const E=l<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dw=function(t){const e=df(t);return ff.encodeByteArray(e,!0)},Pr=function(t){return Dw(t).replace(/\./g,"")},pf=function(t){try{return ff.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=()=>Rw().__FIREBASE_DEFAULTS__,Ow=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pf(t[1]);return e&&JSON.parse(e)},jc=()=>{try{return Nw()||Ow()||Mw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gf=t=>{var e,n;return(n=(e=jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pw=t=>{const e=gf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xw=()=>{var t;return(t=jc())===null||t===void 0?void 0:t.config},mf=t=>{var e;return(e=jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pr(JSON.stringify(n)),Pr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function yf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vf(){try{return typeof indexedDB=="object"}catch{return!1}}function wf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Bw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="FirebaseError";class bt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qw,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?jw(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bt(i,a,s)}}function jw(t,e){return t.replace(Hw,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Hw=/\{\$([^}]+)}/g;function Kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vu(r)&&Vu(o)){if(!ii(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1e3,Yw=2,Jw=4*60*60*1e3,Xw=.5;function Bu(t,e=Qw,n=Yw){const s=e*Math.pow(n,t),i=Math.round(Xw*s*(Math.random()-.5)*2);return Math.min(Jw,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t_(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:e_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e_(t){return t===Cn?void 0:t}function t_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const s_={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},i_=te.INFO,r_={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},o_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=r_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yo{constructor(e){this.name=e,this._logLevel=i_,this._logHandler=o_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const a_=(t,e)=>e.some(n=>t instanceof n);let qu,ju;function c_(){return qu||(qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l_(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _f=new WeakMap,Ba=new WeakMap,If=new WeakMap,ca=new WeakMap,Hc=new WeakMap;function u_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_f.set(n,t)}).catch(()=>{}),Hc.set(e,t),e}function h_(t){if(Ba.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ba.set(t,e)}let qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||If.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function d_(t){qa=t(qa)}function f_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(la(this),e,...n);return If.set(s,e.sort?e.sort():[e]),an(s)}:l_().includes(t)?function(...e){return t.apply(la(this),e),an(_f.get(this))}:function(...e){return an(t.apply(la(this),e))}}function p_(t){return typeof t=="function"?f_(t):(t instanceof IDBTransaction&&h_(t),a_(t,c_())?new Proxy(t,qa):t)}function an(t){if(t instanceof IDBRequest)return u_(t);if(ca.has(t))return ca.get(t);const e=p_(t);return e!==t&&(ca.set(t,e),Hc.set(e,t)),e}const la=t=>Hc.get(t);function bf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return s&&o.addEventListener("upgradeneeded",c=>{s(an(o.result),c.oldVersion,c.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const g_=["get","getKey","getAll","getAllKeys","count"],m_=["put","add","delete","clear"],ua=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=m_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||g_.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ua.set(e,r),r}d_(t=>({...t,get:(e,n,s)=>Hu(e,n)||t.get(e,n,s),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function v_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ja="@firebase/app",Ku="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new yo("@firebase/app"),w_="@firebase/app-compat",__="@firebase/analytics-compat",I_="@firebase/analytics",b_="@firebase/app-check-compat",T_="@firebase/app-check",E_="@firebase/auth",C_="@firebase/auth-compat",S_="@firebase/database",A_="@firebase/database-compat",k_="@firebase/functions",D_="@firebase/functions-compat",R_="@firebase/installations",N_="@firebase/installations-compat",O_="@firebase/messaging",M_="@firebase/messaging-compat",P_="@firebase/performance",x_="@firebase/performance-compat",L_="@firebase/remote-config",U_="@firebase/remote-config-compat",F_="@firebase/storage",$_="@firebase/storage-compat",V_="@firebase/firestore",B_="@firebase/firestore-compat",q_="firebase",j_="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="[DEFAULT]",H_={[ja]:"fire-core",[w_]:"fire-core-compat",[I_]:"fire-analytics",[__]:"fire-analytics-compat",[T_]:"fire-app-check",[b_]:"fire-app-check-compat",[E_]:"fire-auth",[C_]:"fire-auth-compat",[S_]:"fire-rtdb",[A_]:"fire-rtdb-compat",[k_]:"fire-fn",[D_]:"fire-fn-compat",[R_]:"fire-iid",[N_]:"fire-iid-compat",[O_]:"fire-fcm",[M_]:"fire-fcm-compat",[P_]:"fire-perf",[x_]:"fire-perf-compat",[L_]:"fire-rc",[U_]:"fire-rc-compat",[F_]:"fire-gcs",[$_]:"fire-gcs-compat",[V_]:"fire-fst",[B_]:"fire-fst-compat","fire-js":"fire-js",[q_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,Ka=new Map;function K_(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(Ka.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of xr.values())K_(n,t);return!0}function Qn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new Gn("app","Firebase",z_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=j_;function Tf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ha,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=xw()),!n)throw cn.create("no-options");const r=xr.get(i);if(r){if(ii(n,r.options)&&ii(s,r.config))return r;throw cn.create("duplicate-app",{appName:i})}const o=new n_(i);for(const c of Ka.values())o.addComponent(c);const a=new W_(n,s,o);return xr.set(i,a),a}function Kc(t=Ha){const e=xr.get(t);if(!e&&t===Ha)return Tf();if(!e)throw cn.create("no-app",{appName:t});return e}function lt(t,e,n){var s;let i=(s=H_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}xt(new wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebase-heartbeat-database",Q_=1,ri="firebase-heartbeat-store";let ha=null;function Ef(){return ha||(ha=bf(G_,Q_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ri)}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),ha}async function Y_(t){try{return(await Ef()).transaction(ri).objectStore(ri).get(Cf(t))}catch(e){if(e instanceof bt)Bn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function zu(t,e){try{const s=(await Ef()).transaction(ri,"readwrite");return await s.objectStore(ri).put(e,Cf(t)),s.done}catch(n){if(n instanceof bt)Bn.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(s.message)}}}function Cf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1024,X_=30*24*60*60*1e3;class Z_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=X_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wu(),{heartbeatsToSend:n,unsentEntries:s}=eI(this._heartbeatsCache.heartbeats),i=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wu(){return new Date().toISOString().substring(0,10)}function eI(t,e=J_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vf()?wf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gu(t){return Pr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){xt(new wt("platform-logger",e=>new y_(e),"PRIVATE")),xt(new wt("heartbeat",e=>new Z_(e),"PRIVATE")),lt(ja,Ku,t),lt(ja,Ku,"esm2017"),lt("fire-js","")}nI("");function zc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Sf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sI=Sf,Af=new Gn("auth","Firebase",Sf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new yo("@firebase/auth");function vr(t,...e){Qu.logLevel<=te.ERROR&&Qu.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw Wc(t,...e)}function Nt(t,...e){return Wc(t,...e)}function iI(t,e,n){const s=Object.assign(Object.assign({},sI()),{[e]:n});return new Gn("auth","Firebase",s).create(e,{appName:t.name})}function Wc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Af.create(t,...e)}function F(t,e,...n){if(!t)throw Wc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function Ht(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function Bt(t){Ht(t instanceof Function,"Expected a class definition");let e=Yu.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e){const n=Qn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ii(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function oI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aI(){return Ju()==="http:"||Ju()==="https:"}function Ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aI()||yf()||"connection"in navigator)?navigator.onLine:!0}function lI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Fw()||$w()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Ei(3e4,6e4);function Ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Si(t,e,n,s,i={}){return Df(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kf.fetch()(Rf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Df(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uI),e);try{const i=new dI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ir(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ir(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ir(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw iI(t,u,l);_t(t,u)}}catch(i){if(i instanceof bt)throw i;_t(t,"network-request-failed")}}async function Ai(t,e,n,s,i={}){const r=await Si(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Rf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gc(t.config,i):`${t.config.apiScheme}://${i}`}class dI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),hI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ir(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Nt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function pI(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gI(t,e=!1){const n=Ce(t),s=await n.getIdToken(e),i=Qc(s);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Hs(da(i.auth_time)),issuedAtTime:Hs(da(i.iat)),expirationTime:Hs(da(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function da(t){return Number(t)*1e3}function Qc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const i=pf(n);return i?JSON.parse(i):(vr("Failed to decode base64 JWT payload"),null)}catch(i){return vr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mI(t){const e=Qc(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bt&&yI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await oi(t,pI(n,{idToken:s}));F(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?II(r.providerUserInfo):[],a=_I(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Nf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function wI(t){const e=Ce(t);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _I(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function II(t){return t.map(e=>{var{providerId:n}=e,s=zc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){const n=await Df(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Rf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await bI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ai;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Nf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gI(this,e)}reload(){return wI(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oi(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(l=n.createdAt)!==null&&l!==void 0?l:void 0,X=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:Z,isAnonymous:ue,providerData:rt,stsTokenManager:We}=n;F(U&&We,e,"internal-error");const W=ai.fromJSON(this.name,We);F(typeof U=="string",e,"internal-error"),Jt(d,e.name),Jt(f,e.name),F(typeof Z=="boolean",e,"internal-error"),F(typeof ue=="boolean",e,"internal-error"),Jt(g,e.name),Jt(E,e.name),Jt(T,e.name),Jt(P,e.name),Jt(j,e.name),Jt(X,e.name);const fe=new Un({uid:U,auth:e,email:f,emailVerified:Z,displayName:d,isAnonymous:ue,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:W,createdAt:j,lastLoginAt:X});return rt&&Array.isArray(rt)&&(fe.providerData=rt.map(he=>Object.assign({},he))),P&&(fe._redirectEventId=P),fe}static async _fromIdTokenResponse(e,n,s=!1){const i=new ai;i.updateFromServerResponse(n);const r=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Of.type="NONE";const Xu=Of;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=wr(this.userKey,i.apiKey,r),this.fullPersistenceKey=wr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ls(Bt(Xu),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Bt(Xu);const o=wr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Un._fromJSON(e,u);l!==r&&(a=d),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ls(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ls(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uf(e))return"Blackberry";if(Ff(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||Pf(e))&&!e.includes("edge/"))return"Chrome";if(Lf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mf(t=qe()){return/firefox\//i.test(t)}function Yc(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pf(t=qe()){return/crios\//i.test(t)}function xf(t=qe()){return/iemobile/i.test(t)}function Lf(t=qe()){return/android/i.test(t)}function Uf(t=qe()){return/blackberry/i.test(t)}function Ff(t=qe()){return/webos/i.test(t)}function vo(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TI(t=qe()){var e;return vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EI(){return Vw()&&document.documentMode===10}function $f(t=qe()){return vo(t)||Lf(t)||Ff(t)||Uf(t)||/windows phone/i.test(t)||xf(t)}function CI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e=[]){let n;switch(t){case"Browser":n=Zu(qe());break;case"Worker":n=`${Zu(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new SI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Af,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ce(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ki(t){return Ce(t)}class eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function kI(t,e,n){const s=ki(t);F(s._canInitEmulator,s,"emulator-config-failed"),F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Bf(e),{host:o,port:a}=DI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RI()}function Bf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DI(t){const e=Bf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:th(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:th(o)}}}function th(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function NI(t,e){return Si(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){return Ai(t,"POST","/v1/accounts:signInWithPassword",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Ci(t,e))}async function PI(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Jc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ci(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ci(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return OI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MI(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return NI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PI(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return Ai(t,"POST","/v1/accounts:signInWithIdp",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="http://localhost";class qn extends Jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=zc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UI(t){const e=Us(Fs(t)).link,n=e?Us(Fs(e)).deep_link_id:null,s=Us(Fs(t)).deep_link_id;return(s?Us(Fs(s)).link:null)||s||n||e||t}class Xc{constructor(e){var n,s,i,r,o,a;const c=Us(Fs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=LI((i=c.mode)!==null&&i!==void 0?i:null);F(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UI(e);try{return new Xc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xc.parseLink(n);return F(s,"argument-error"),ci._fromEmailAndCode(e,s.code,s.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Di{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return en.credential(n,s)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Di{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Di{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){return Ai(t,"POST","/v1/accounts:signUp",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Un._fromIdTokenResponse(e,s,i),o=nh(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=nh(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function nh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends bt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ur(e,n,s,i)}}function jf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,r,e,s):r})}async function $I(t,e,n=!1){const s=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await oi(t,jf(s,i,e,t),n);F(r.idToken,s,"internal-error");const o=Qc(r.idToken);F(o,s,"internal-error");const{sub:a}=o;return F(t.uid===a,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e,n=!1){const s="signIn",i=await jf(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function BI(t,e){return Hf(ki(t),e)}async function qI(t,e,n){const s=ki(t),i=await FI(s,{returnSecureToken:!0,email:e,password:n}),r=await jn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function jI(t,e,n){return BI(Ce(t),Ss.credential(e,n))}function HI(t,e,n,s){return Ce(t).onIdTokenChanged(e,n,s)}function KI(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function zI(t){return Ce(t).signOut()}const Fr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){const t=qe();return Yc(t)||vo(t)}const GI=1e3,QI=10;class zf extends Kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WI()&&CI(),this.fallbackToPolling=$f(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);EI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zf.type="LOCAL";const YI=zf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends Kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wf.type="SESSION";const Gf=Wf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new wo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await JI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Zc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function ZI(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function eb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nb(){return Qf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebaseLocalStorageDb",sb=1,$r="firebaseLocalStorage",Jf="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _o(t,e){return t.transaction([$r],e?"readwrite":"readonly").objectStore($r)}function ib(){const t=indexedDB.deleteDatabase(Yf);return new Ri(t).toPromise()}function Wa(){const t=indexedDB.open(Yf,sb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($r,{keyPath:Jf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($r)?e(s):(s.close(),await ib(),e(await Wa()))})})}async function sh(t,e,n){const s=_o(t,!0).put({[Jf]:e,value:n});return new Ri(s).toPromise()}async function rb(t,e){const n=_o(t,!1).get(e),s=await new Ri(n).toPromise();return s===void 0?null:s.value}function ih(t,e){const n=_o(t,!0).delete(e);return new Ri(n).toPromise()}const ob=800,ab=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ab)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(nb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eb(),!this.activeServiceWorker)return;this.sender=new XI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await sh(e,Fr,"1"),await ih(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_o(i,!1).getAll();return new Ri(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ob)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const cb=Xf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ub(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Nt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",lb().appendChild(s)})}function hb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t,e){return e?Bt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fb(t){return Hf(t.auth,new el(t),t.bypassAuthState)}function pb(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),VI(n,new el(t),t.bypassAuthState)}async function gb(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),$I(n,new el(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fb;case"linkViaPopup":case"linkViaRedirect":return gb;case"reauthViaPopup":case"reauthViaRedirect":return pb;default:_t(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new Ei(2e3,1e4);class ss extends Zf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mb.get())};e()}}ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="pendingRedirect",_r=new Map;class vb extends Zf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const s=await wb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wb(t,e){const n=bb(e),s=Ib(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function _b(t,e){_r.set(t._key(),e)}function Ib(t){return Bt(t._redirectPersistence)}function bb(t){return wr(yb,t.config.apiKey,t.name)}async function Tb(t,e,n=!1){const s=ki(t),i=db(s,e),o=await new vb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=10*60*1e3;class Cb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ep(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(e))}saveEventToCache(e){this.cachedEventUids.add(rh(e)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ab(t);for(const n of e)try{if(Nb(n))return}catch{}_t(t,"unauthorized-domain")}function Nb(t){const e=za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Db.test(n))return!1;if(kb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new Ei(3e4,6e4);function oh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mb(t){return new Promise((e,n)=>{var s,i,r;function o(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),n(Nt(t,"network-request-failed"))},timeout:Ob.get()})}if(!((i=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ot().gapi)===null||r===void 0)&&r.load)o();else{const a=hb("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},ub(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function Pb(t){return Ir=Ir||Mb(t),Ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new Ei(5e3,15e3),Lb="__/auth/iframe",Ub="emulator/auth/iframe",Fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gc(e,Ub):`https://${t.config.authDomain}/${Lb}`,s={apiKey:e.apiKey,appName:t.name,v:Ti},i=$b.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${bi(s).slice(1)}`}async function Bb(t){const e=await Pb(t),n=Ot().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Vb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{r(o)},xb.get());function c(){Ot().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jb=500,Hb=600,Kb="_blank",zb="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(t,e,n,s=jb,i=Hb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qb),{width:s.toString(),height:i.toString(),top:r,left:o}),l=qe().toLowerCase();n&&(a=Pf(l)?Kb:n),Mf(l)&&(e=e||zb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,E])=>`${f}${g}=${E},`,"");if(TI(l)&&a!=="_self")return Gb(e||"",a),new ah(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new ah(d)}function Gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="__/auth/handler",Yb="emulator/auth/handler";function ch(t,e,n,s,i,r){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ti,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof Di){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Jb(t)}?${bi(a).slice(1)}`}function Jb({config:t}){return t.emulator?Gc(t,Yb):`https://${t.authDomain}/${Qb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class Xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=Tb,this._overrideRedirectResult=_b}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ch(e,n,s,za(),i);return Wb(e,o,Zc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),ZI(ch(e,n,s,za(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Bb(e),s=new Cb(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fa,{type:fa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[fa];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $f()||Yc()||vo()}}const Zb=Xb;var lh="@firebase/auth",uh="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nT(t){xt(new wt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{F(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vf(t)},u=new AI(a,c,l);return oI(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xt(new wt("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(s=>new eT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(lh,uh,tT(t)),lt(lh,uh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=5*60,iT=mf("authIdTokenMaxAge")||sT;let hh=null;const rT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iT)return;const i=n==null?void 0:n.token;hh!==i&&(hh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tp(t=Kc()){const e=Qn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rI(t,{popupRedirectResolver:Zb,persistence:[cb,YI,Gf]}),s=mf("authTokenSyncURL");if(s){const r=rT(s);KI(n,r,()=>r(n.currentUser)),HI(n,o=>r(o))}const i=gf("auth");return i&&kI(n,`http://${i}`),n}nT("Browser");var oT="firebase",aT="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(oT,aT,"app");const np="@firebase/installations",tl="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=1e4,ip=`w:${tl}`,rp="FIS_v2",cT="https://firebaseinstallations.googleapis.com/v1",lT=60*60*1e3,uT="installations",hT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Hn=new Gn(uT,hT,dT);function op(t){return t instanceof bt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap({projectId:t}){return`${cT}/projects/${t}/installations`}function cp(t){return{token:t.token,requestStatus:2,expiresIn:pT(t.expiresIn),creationTime:Date.now()}}async function lp(t,e){const s=(await e.json()).error;return Hn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function up({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fT(t,{refreshToken:e}){const n=up(t);return n.append("Authorization",gT(e)),n}async function hp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pT(t){return Number(t.replace("s","000"))}function gT(t){return`${rp} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ap(t),i=up(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:rp,appId:t.appId,sdkVersion:ip},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await hp(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:cp(l.authToken)}}else throw await lp("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=/^[cdef][\w-]{21}$/,Ga="";function wT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_T(t);return vT.test(n)?n:Ga}catch{return Ga}}function _T(t){return yT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;function pp(t,e){const n=Io(t);gp(n,e),IT(n,e)}function gp(t,e){const n=fp.get(t);if(n)for(const s of n)s(e)}function IT(t,e){const n=bT();n&&n.postMessage({key:t,fid:e}),TT()}let Nn=null;function bT(){return!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=t=>{gp(t.data.key,t.data.fid)}),Nn}function TT(){fp.size===0&&Nn&&(Nn.close(),Nn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firebase-installations-database",CT=1,Kn="firebase-installations-store";let pa=null;function nl(){return pa||(pa=bf(ET,CT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}})),pa}async function Vr(t,e){const n=Io(t),i=(await nl()).transaction(Kn,"readwrite"),r=i.objectStore(Kn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&pp(t,e.fid),e}async function mp(t){const e=Io(t),s=(await nl()).transaction(Kn,"readwrite");await s.objectStore(Kn).delete(e),await s.done}async function bo(t,e){const n=Io(t),i=(await nl()).transaction(Kn,"readwrite"),r=i.objectStore(Kn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&pp(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){let e;const n=await bo(t.appConfig,s=>{const i=ST(s),r=AT(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Ga?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ST(t){const e=t||{fid:wT(),registrationStatus:0};return yp(e)}function AT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=kT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DT(t)}:{installationEntry:e}}async function kT(t,e){try{const n=await mT(t,e);return Vr(t.appConfig,n)}catch(n){throw op(n)&&n.customData.serverCode===409?await mp(t.appConfig):await Vr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DT(t){let e=await dh(t.appConfig);for(;e.registrationStatus===1;)await dp(100),e=await dh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await sl(t);return s||n}return e}function dh(t){return bo(t,e=>{if(!e)throw Hn.create("installation-not-found");return yp(e)})}function yp(t){return RT(t)?{fid:t.fid,registrationStatus:0}:t}function RT(t){return t.registrationStatus===1&&t.registrationTime+sp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT({appConfig:t,heartbeatServiceProvider:e},n){const s=OT(t,n),i=fT(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ip,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await hp(()=>fetch(s,a));if(c.ok){const l=await c.json();return cp(l)}else throw await lp("Generate Auth Token",c)}function OT(t,{fid:e}){return`${ap(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e=!1){let n;const s=await bo(t.appConfig,r=>{if(!vp(r))throw Hn.create("not-registered");const o=r.authToken;if(!e&&xT(o))return r;if(o.requestStatus===1)return n=MT(t,e),r;{if(!navigator.onLine)throw Hn.create("app-offline");const a=UT(r);return n=PT(t,a),a}});return n?await n:s.authToken}async function MT(t,e){let n=await fh(t.appConfig);for(;n.authToken.requestStatus===1;)await dp(100),n=await fh(t.appConfig);const s=n.authToken;return s.requestStatus===0?il(t,e):s}function fh(t){return bo(t,e=>{if(!vp(e))throw Hn.create("not-registered");const n=e.authToken;return FT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function PT(t,e){try{const n=await NT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Vr(t.appConfig,s),n}catch(n){if(op(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vr(t.appConfig,s)}throw n}}function vp(t){return t!==void 0&&t.registrationStatus===2}function xT(t){return t.requestStatus===2&&!LT(t)}function LT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lT}function UT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function FT(t){return t.requestStatus===1&&t.requestTime+sp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t){const e=t,{installationEntry:n,registrationPromise:s}=await sl(e);return s?s.catch(console.error):il(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e=!1){const n=t;return await BT(n),(await il(n,e)).token}async function BT(t){const{registrationPromise:e}=await sl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){if(!t||!t.options)throw ga("App Configuration");if(!t.name)throw ga("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ga(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ga(t){return Hn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="installations",jT="installations-internal",HT=t=>{const e=t.getProvider("app").getImmediate(),n=qT(e),s=Qn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},KT=t=>{const e=t.getProvider("app").getImmediate(),n=Qn(e,wp).getImmediate();return{getId:()=>$T(n),getToken:i=>VT(n,i)}};function zT(){xt(new wt(wp,HT,"PUBLIC")),xt(new wt(jT,KT,"PRIVATE"))}zT();lt(np,tl);lt(np,tl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="analytics",WT="firebase_id",GT="origin",QT=60*1e3,YT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_p="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new yo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JT(t,e){const n=document.createElement("script");n.src=`${_p}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function XT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZT(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await Ip(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){st.error(a)}t("config",i,r)}async function eE(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ip(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){st.error(r)}}function tE(t,e,n,s){async function i(r,o,a){try{r==="event"?await eE(t,e,n,o,a):r==="config"?await ZT(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(c){st.error(c)}}return i}function nE(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=tE(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function sE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_p)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ut=new Gn("analytics","Analytics",iE);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=30,oE=1e3;class aE{constructor(e={},n=oE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bp=new aE;function cE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lE(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:cE(s)},r=YT.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function uE(t,e=bp,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw ut.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fE;return setTimeout(async()=>{a.abort()},n!==void 0?n:QT),Tp({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Tp(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=bp){var r;const{appId:o,measurementId:a}=t;try{await hE(s,e)}catch(c){if(a)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await lE(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!dE(l)){if(i.deleteThrottleMetadata(o),a)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Bu(n,i.intervalMillis,rE):Bu(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),st.debug(`Calling attemptFetch again in ${u} millis`),Tp(t,d,s,i)}}function hE(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dE(t){if(!(t instanceof bt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pE(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(){if(vf())try{await wf()}catch(t){return st.warn(ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return st.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mE(t,e,n,s,i,r,o){var a;const c=uE(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>st.error(g)),e.push(c);const l=gE().then(g=>{if(g)return s.getId()}),[u,d]=await Promise.all([c,l]);sE(r)||JT(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[GT]="firebase",f.update=!0,d!=null&&(f[WT]=d),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.app=e}_delete(){return delete Ks[this.app.options.appId],Promise.resolve()}}let Ks={},ph=[];const gh={};let ma="dataLayer",vE="gtag",mh,Ep,yh=!1;function wE(){const t=[];if(yf()&&t.push("This is a browser extension environment."),Bw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ut.create("invalid-analytics-context",{errorInfo:e});st.warn(n.message)}}function _E(t,e,n){wE();const s=t.options.appId;if(!s)throw ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(Ks[s]!=null)throw ut.create("already-exists",{id:s});if(!yh){XT(ma);const{wrappedGtag:r,gtagCore:o}=nE(Ks,ph,gh,ma,vE);Ep=r,mh=o,yh=!0}return Ks[s]=mE(t,ph,gh,e,mh,ma,n),new yE(t)}function IE(t=Kc()){t=Ce(t);const e=Qn(t,Br);return e.isInitialized()?e.getImmediate():bE(t)}function bE(t,e={}){const n=Qn(t,Br);if(n.isInitialized()){const i=n.getImmediate();if(ii(e,n.getOptions()))return i;throw ut.create("already-initialized")}return n.initialize({options:e})}function TE(t,e,n,s){t=Ce(t),pE(Ep,Ks[t.app.options.appId],e,n,s).catch(i=>st.error(i))}const vh="@firebase/analytics",wh="0.9.3";function EE(){xt(new wt(Br,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _E(s,i,n)},"PUBLIC")),xt(new wt("analytics-internal",t,"PRIVATE")),lt(vh,wh),lt(vh,wh,"esm2017");function t(e){try{const n=e.getProvider(Br).getImmediate();return{logEvent:(s,i,r)=>TE(n,s,i,r)}}catch(n){throw ut.create("interop-component-reg-failed",{reason:n})}}}EE();var CE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,rl=rl||{},B=CE||self;function qr(){}function To(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SE(t){return Object.prototype.hasOwnProperty.call(t,ya)&&t[ya]||(t[ya]=++AE)}var ya="closure_uid_"+(1e9*Math.random()>>>0),AE=0;function kE(t,e,n){return t.call.apply(t.bind,arguments)}function DE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=kE:$e=DE,$e.apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function yn(){this.s=this.s,this.o=this.o}var RE=0;yn.prototype.s=!1;yn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),RE!=0)&&SE(this)};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ol(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _h(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(To(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var NE=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",qr,e),B.removeEventListener("test",qr,e)}catch{}return t}();function jr(t){return/^[\s\xa0]*$/.test(t)}var Ih=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function va(t,e){return t<e?-1:t>e?1:0}function Eo(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return Eo().indexOf(t)!=-1}function al(t){return al[" "](t),t}al[" "]=qr;function OE(t){var e=xE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ME=Rt("Opera"),gs=Rt("Trident")||Rt("MSIE"),Sp=Rt("Edge"),Qa=Sp||gs,Ap=Rt("Gecko")&&!(Eo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),PE=Eo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function kp(){var t=B.document;return t?t.documentMode:void 0}var Hr;e:{var wa="",_a=function(){var t=Eo();if(Ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sp)return/Edge\/([\d\.]+)/.exec(t);if(gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PE)return/WebKit\/(\S+)/.exec(t);if(ME)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_a&&(wa=_a?_a[1]:""),gs){var Ia=kp();if(Ia!=null&&Ia>parseFloat(wa)){Hr=String(Ia);break e}}Hr=wa}var xE={};function LE(){return OE(function(){let t=0;const e=Ih(String(Hr)).split("."),n=Ih("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=va(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||va(i[2].length==0,r[2].length==0)||va(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ya;if(B.document&&gs){var bh=kp();Ya=bh||parseInt(Hr,10)||void 0}else Ya=void 0;var UE=Ya;function li(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ap){e:{try{al(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&li.X.h.call(this)}}Me(li,Ve);var FE={2:"touch",3:"pen",4:"mouse"};li.prototype.h=function(){li.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oi="closure_listenable_"+(1e6*Math.random()|0),$E=0;function VE(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++$E,this.ba=this.ea=!1}function Co(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function cl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Dp(t){const e={};for(const n in t)e[n]=t[n];return e}const Th="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Th.length;r++)n=Th[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function So(t){this.src=t,this.g={},this.h=0}So.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Xa(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VE(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ja(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Cp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Co(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xa(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var ll="closure_lm_"+(1e6*Math.random()|0),ba={};function Np(t,e,n,s,i){if(s&&s.once)return Mp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Np(t,e[r],n,s,i);return null}return n=dl(n),t&&t[Oi]?t.N(e,n,Ni(s)?!!s.capture:!!s,i):Op(t,e,n,!1,s,i)}function Op(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ni(i)?!!i.capture:!!i,a=hl(t);if(a||(t[ll]=a=new So(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=BE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)NE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(xp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BE(){function t(n){return e.call(t.src,t.listener,n)}const e=qE;return t}function Mp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mp(t,e[r],n,s,i);return null}return n=dl(n),t&&t[Oi]?t.O(e,n,Ni(s)?!!s.capture:!!s,i):Op(t,e,n,!0,s,i)}function Pp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Pp(t,e[r],n,s,i);else s=Ni(s)?!!s.capture:!!s,n=dl(n),t&&t[Oi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Xa(r,n,s,i),-1<n&&(Co(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xa(e,n,s,i)),(n=-1<t?e[t]:null)&&ul(n))}function ul(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Oi])Ja(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(xp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hl(e))?(Ja(n,t),n.h==0&&(n.src=null,e[ll]=null)):Co(t)}}}function xp(t){return t in ba?ba[t]:ba[t]="on"+t}function qE(t,e){if(t.ba)t=!0;else{e=new li(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ul(t),t=n.call(s,e)}return t}function hl(t){return t=t[ll],t instanceof So?t:null}var Ta="__closure_events_fn_"+(1e9*Math.random()>>>0);function dl(t){return typeof t=="function"?t:(t[Ta]||(t[Ta]=function(e){return t.handleEvent(e)}),t[Ta])}function ke(){yn.call(this),this.i=new So(this),this.P=this,this.I=null}Me(ke,yn);ke.prototype[Oi]=!0;ke.prototype.removeEventListener=function(t,e,n,s){Pp(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var i=e;e=new Ve(s,t),Rp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=or(o,s,!0,e)&&i}if(o=e.g=t,i=or(o,s,!0,e)&&i,i=or(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=or(o,s,!1,e)&&i}ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Co(n[s]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ja(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var fl=B.JSON.stringify;function jE(){var t=Fp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HE{constructor(){this.h=this.g=null}add(e,n){const s=Lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new KE,t=>t.reset());class KE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zE(t){B.setTimeout(()=>{throw t},0)}function Up(t,e){Za||WE(),ec||(Za(),ec=!0),Fp.add(t,e)}var Za;function WE(){var t=B.Promise.resolve(void 0);Za=function(){t.then(GE)}}var ec=!1,Fp=new HE;function GE(){for(var t;t=jE();){try{t.h.call(t.g)}catch(n){zE(n)}var e=Lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ec=!1}function Ao(t,e){ke.call(this),this.h=t||1,this.g=e||B,this.j=$e(this.lb,this),this.l=Date.now()}Me(Ao,ke);N=Ao.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(pl(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){Ao.X.M.call(this),pl(this),delete this.g};function gl(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function $p(t){t.g=gl(()=>{t.g=null,t.i&&(t.i=!1,$p(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QE extends yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$p(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){yn.call(this),this.h=t,this.g={}}Me(ui,yn);var Eh=[];function Vp(t,e,n,s){Array.isArray(n)||(n&&(Eh[0]=n.toString()),n=Eh);for(var i=0;i<n.length;i++){var r=Np(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Bp(t){cl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ul(e)},t),t.g={}}ui.prototype.M=function(){ui.X.M.call(this),Bp(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ko(){this.g=!0}ko.prototype.Aa=function(){this.g=!1};function YE(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JE(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function is(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZE(t,n)+(s?" "+s:"")})}function XE(t,e){t.info(function(){return"TIMEOUT: "+e})}ko.prototype.info=function(){};function ZE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fl(n)}catch{return e}}var Yn={},Ch=null;function Do(){return Ch=Ch||new ke}Yn.Pa="serverreachability";function qp(t){Ve.call(this,Yn.Pa,t)}Me(qp,Ve);function hi(t){const e=Do();Oe(e,new qp(e))}Yn.STAT_EVENT="statevent";function jp(t,e){Ve.call(this,Yn.STAT_EVENT,t),this.stat=e}Me(jp,Ve);function ze(t){const e=Do();Oe(e,new jp(e,t))}Yn.Qa="timingevent";function Hp(t,e){Ve.call(this,Yn.Qa,t),this.size=e}Me(Hp,Ve);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Ro={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Kp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ml(){}ml.prototype.h=null;function Sh(t){return t.h||(t.h=t.i())}function zp(){}var Pi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yl(){Ve.call(this,"d")}Me(yl,Ve);function vl(){Ve.call(this,"c")}Me(vl,Ve);var tc;function No(){}Me(No,ml);No.prototype.g=function(){return new XMLHttpRequest};No.prototype.i=function(){return{}};tc=new No;function xi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ui(this),this.O=e0,t=Qa?125:void 0,this.T=new Ao(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wp}function Wp(){this.i=null,this.g="",this.h=!1}var e0=45e3,nc={},Kr={};N=xi.prototype;N.setTimeout=function(t){this.O=t};function sc(t,e,n){t.K=1,t.v=Mo(Kt(e)),t.s=n,t.P=!0,Gp(t,null)}function Gp(t,e){t.F=Date.now(),Li(t),t.A=Kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ng(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Wp,t.g=Tg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new QE($e(t.La,t,t.g),t.N)),Vp(t.S,t.g,"readystatechange",t.ib),e=t.H?Dp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),hi(),YE(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||Qa||this.g&&(this.h.h||this.g.fa()||Rh(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?hi(3):hi(2)),Oo(this);var n=this.g.aa();this.Y=n;t:if(Qp(this)){var s=Rh(this.g);t="";var i=s.length,r=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),zs(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,JE(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jr(a)){var l=a;break t}}l=null}if(n=l)is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ic(this,n);else{this.i=!1,this.o=3,ze(12),On(this),zs(this);break e}}this.P?(Yp(this,u,o),Qa&&this.i&&u==3&&(Vp(this.S,this.T,"tick",this.hb),this.T.start())):(is(this.j,this.m,o,null),ic(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?wg(this.l,this):(this.i=!1,Li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),On(this),zs(this)}}}catch{}finally{}};function Qp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=t0(t,n),i==Kr){e==4&&(t.o=4,ze(14),s=!1),is(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nc){t.o=4,ze(15),is(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else is(t.j,t.m,i,null),ic(t,i);Qp(t)&&i!=Kr&&i!=nc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cl(e),e.K=!0,ze(11))):(is(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),zs(t))}N.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(Oo(this),Yp(this,t,e),this.i&&t!=4&&Li(this))}};function t0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Kr:(n=Number(e.substring(n,s)),isNaN(n)?nc:(s+=1,s+n>e.length?Kr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,On(this)};function Li(t){t.V=Date.now()+t.O,Jp(t,t.O)}function Jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi($e(t.gb,t),e)}function Oo(t){t.B&&(B.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XE(this.j,this.A),this.K!=2&&(hi(),ze(17)),On(this),this.o=2,zs(this)):Jp(this,this.V-t)};function zs(t){t.l.G==0||t.I||wg(t.l,t)}function On(t){Oo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pl(t.T),Bp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ic(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rc(n.h,t))){if(!t.J&&rc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gr(n),Lo(n);else break e;El(n),ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Mi($e(n.cb,n),6e3));if(1>=rg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Mn(n,11)}else if((t.J||n.g==t)&&Gr(n),!jr(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.h;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wl(r,r.h),r.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,de(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=bg(s,s.H?s.ka:null,s.V),o.J){og(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Oo(a),Li(a)),s.g=o}else yg(s);0<n.i.length&&Uo(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):Tl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}hi(4)}catch{}}function n0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(To(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function s0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(To(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(To(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s0(t),s=n0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fn){this.h=e!==void 0?e:t.h,zr(this,t.j),this.s=t.s,this.g=t.g,Wr(this,t.m),this.l=t.l,e=t.i;var n=new di;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ah(this,n),this.o=t.o}else t&&(n=String(t).match(Zp))?(this.h=!!e,zr(this,n[1]||"",!0),this.s=$s(n[2]||""),this.g=$s(n[3]||"",!0),Wr(this,n[4]),this.l=$s(n[5]||"",!0),Ah(this,n[6]||"",!0),this.o=$s(n[7]||"")):(this.h=!!e,this.i=new di(null,this.h))}Fn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,kh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,kh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?a0:o0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,l0)),t.join("")};function Kt(t){return new Fn(t)}function zr(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ah(t,e,n){e instanceof di?(t.i=e,u0(t.i,t.h)):(n||(e=Vs(e,c0)),t.i=new di(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Mo(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,r0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function r0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kh=/[#\/\?@]/g,o0=/[#\?:]/g,a0=/[#\?]/g,c0=/[#\?@]/g,l0=/#/g;function di(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vn(t){t.g||(t.g=new Map,t.h=0,t.i&&i0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=di.prototype;N.add=function(t,e){vn(this),this.i=null,t=As(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eg(t,e){vn(t),e=As(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function tg(t,e){return vn(t),e=As(t,e),t.g.has(e)}N.forEach=function(t,e){vn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};N.oa=function(){vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};N.W=function(t){vn(this);let e=[];if(typeof t=="string")tg(this,t)&&(e=e.concat(this.g.get(As(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return vn(this),this.i=null,t=As(this,t),tg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ng(t,e,n){eg(t,e),0<n.length&&(t.i=null,t.g.set(As(t,e),ol(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function As(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function u0(t,e){e&&!t.j&&(vn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(eg(this,s),ng(this,i,n))},t)),t.j=e}var h0=class{constructor(e,n){this.h=e,this.g=n}};function sg(t){this.l=t||d0,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var d0=10;function ig(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rg(t){return t.h?1:t.g?t.g.size:0}function rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wl(t,e){t.g?t.g.add(e):t.h=e}function og(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sg.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ag(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ol(t.i)}function _l(){}_l.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};_l.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function f0(){this.g=new _l}function p0(t,e,n){const s=n||"";try{Xp(t,function(i,r){let o=i;Ni(i)&&(o=fl(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function g0(t,e){const n=new ko;if(B.Image){const s=new Image;s.onload=rr(ar,n,s,"TestLoadImage: loaded",!0,e),s.onerror=rr(ar,n,s,"TestLoadImage: error",!1,e),s.onabort=rr(ar,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=rr(ar,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ar(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ui(t){this.l=t.ac||null,this.j=t.jb||!1}Me(Ui,ml);Ui.prototype.g=function(){return new Po(this.l,this.j)};Ui.prototype.i=function(t){return function(){return t}}({});function Po(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Il,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Po,ke);var Il=0;N=Po.prototype;N.open=function(t,e){if(this.readyState!=Il)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fi(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=Il};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fi(this):fi(this),this.readyState==3&&cg(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Fi(this))};N.Ua=function(t){this.g&&(this.response=t,Fi(this))};N.ga=function(){this.g&&Fi(this)};function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fi(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var m0=B.JSON.parse;function ge(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lg,this.K=this.L=!1}Me(ge,ke);var lg="",y0=/^https?$/i,v0=["POST","PUT"];N=ge.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?Sh(this.u):Sh(tc),this.g.onreadystatechange=$e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Dh(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=Cp(v0,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dg(this),0<this.B&&((this.K=w0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.qa,this)):this.A=gl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Dh(this,r)}};function w0(t){return gs&&LE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof rl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Dh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ug(t),xo(t)}function ug(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),xo(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xo(this,!0)),ge.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?hg(this):this.fb())};N.fb=function(){hg(this)};function hg(t){if(t.h&&typeof rl<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)gl(t.Ha,0,t);else if(Oe(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Zp)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!y0.test(i?i.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ug(t)}}finally{xo(t)}}}}function xo(t,e){if(t.g){dg(t);const n=t.g,s=t.C[0]?qr:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function dg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),m0(e)}};function Rh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fg(t){let e="";return cl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function bl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=fg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pg(t){this.Ca=0,this.i=[],this.j=new ko,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,t),this.bb=xs("retryDelaySeedMs",1e4,t),this.$a=xs("forwardChannelMaxRetries",2,t),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sg(t&&t.concurrentRequestLimit),this.Fa=new f0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=pg.prototype;N.ma=8;N.G=1;function Tl(t){if(gg(t),t.G==3){var e=t.U++,n=Kt(t.F);de(n,"SID",t.I),de(n,"RID",e),de(n,"TYPE","terminate"),$i(t,n),e=new xi(t,t.j,e,void 0),e.K=2,e.v=Mo(Kt(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=Tg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Li(e)}Ig(t)}function Lo(t){t.g&&(Cl(t),t.g.cancel(),t.g=null)}function gg(t){Lo(t),t.u&&(B.clearTimeout(t.u),t.u=null),Gr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Uo(t){ig(t.h)||t.m||(t.m=!0,Up(t.Ja,t),t.C=0)}function _0(t,e){return rg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Mi($e(t.Ja,t,e),_g(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new xi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Dp(r),Rp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mg(this,i,e),n=Kt(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),$i(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(fg(r)))+"&"+e:this.o&&bl(n,this.o,r)),wl(this.h,i),this.Ya&&de(n,"TYPE","init"),this.O?(de(n,"$req",e),de(n,"SID","null"),i.Z=!0,sc(i,n,null)):sc(i,n,e),this.G=2}}else this.G==3&&(t?Nh(this,t):this.i.length==0||ig(this.h)||Nh(this))};function Nh(t,e){var n;e?n=e.m:n=t.U++;const s=Kt(t.F);de(s,"SID",t.I),de(s,"RID",n),de(s,"AID",t.T),$i(t,s),t.o&&t.s&&bl(s,t.o,t.s),n=new xi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=mg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wl(t.h,n),sc(n,s,e)}function $i(t,e){t.ia&&cl(t.ia,function(n,s){de(e,s,n)}),t.l&&Xp({},function(n,s){de(e,s,n)})}function mg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?$e(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{p0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function yg(t){t.g||t.u||(t.Z=1,Up(t.Ia,t),t.A=0)}function El(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Mi($e(t.Ia,t),_g(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,vg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Mi($e(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),Lo(this),vg(this))};function Cl(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function vg(t){t.g=new xi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kt(t.sa);de(e,"RID","rpc"),de(e,"SID",t.I),de(e,"CI",t.L?"0":"1"),de(e,"AID",t.T),de(e,"TYPE","xmlhttp"),$i(t,e),t.o&&t.s&&bl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mo(Kt(e)),n.s=null,n.P=!0,Gp(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Lo(this),El(this),ze(19))};function Gr(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function wg(t,e){var n=null;if(t.g==e){Gr(t),Cl(t),t.g=null;var s=2}else if(rc(t.h,e))n=e.D,og(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Do(),Oe(s,new Hp(s,n)),Uo(t)}else yg(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&_0(t,e)||s==2&&El(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Mn(t,5);break;case 4:Mn(t,10);break;case 3:Mn(t,6);break;default:Mn(t,2)}}}function _g(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Mn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=$e(t.kb,t);n||(n=new Fn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||zr(n,"https"),Mo(n)),g0(n.toString(),s)}else ze(2);t.G=0,t.l&&t.l.va(e),Ig(t),gg(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Ig(t){if(t.G=0,t.la=[],t.l){const e=ag(t.h);(e.length!=0||t.i.length!=0)&&(_h(t.la,e),_h(t.la,t.i),t.h.i.length=0,ol(t.i),t.i.length=0),t.l.ua()}}function bg(t,e,n){var s=n instanceof Fn?Kt(n):new Fn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Wr(s,s.m);else{var i=B.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Fn(null,void 0);s&&zr(r,s),e&&(r.g=e),i&&Wr(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&de(s,n,e),de(s,"VER",t.ma),$i(t,s),s}function Tg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ge(new Ui({jb:!0})):new ge(t.ra),e.Ka(t.H),e}function Eg(){}N=Eg.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Qr(){if(gs&&!(10<=Number(UE)))throw Error("Environmental error: no available transport.")}Qr.prototype.g=function(t,e){return new it(t,e)};function it(t,e){ke.call(this),this.g=new pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}Me(it,ke);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=bg(t,null,t.V),Uo(t)};it.prototype.close=function(){Tl(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fl(t),t=n);e.i.push(new h0(e.ab++,t)),e.G==3&&Uo(e)};it.prototype.M=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,it.X.M.call(this)};function Cg(t){yl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Cg,yl);function Sg(){vl.call(this),this.status=1}Me(Sg,vl);function ks(t){this.g=t}Me(ks,Eg);ks.prototype.xa=function(){Oe(this.g,"a")};ks.prototype.wa=function(t){Oe(this.g,new Cg(t))};ks.prototype.va=function(t){Oe(this.g,new Sg)};ks.prototype.ua=function(){Oe(this.g,"b")};Qr.prototype.createWebChannel=Qr.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Ro.NO_ERROR=0;Ro.TIMEOUT=8;Ro.HTTP_ERROR=6;Kp.COMPLETE="complete";zp.EventType=Pi;Pi.OPEN="a";Pi.CLOSE="b";Pi.ERROR="c";Pi.MESSAGE="d";ke.prototype.listen=ke.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;var I0=function(){return new Qr},b0=function(){return Do()},Ea=Ro,T0=Kp,E0=Yn,Oh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},C0=Ui,cr=zp,S0=ge;const Mh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new yo("@firebase/firestore");function Ph(){return zn.logLevel}function O(t,...e){if(zn.logLevel<=te.DEBUG){const n=e.map(Sl);zn.debug(`Firestore (${Ds}): ${t}`,...n)}}function zt(t,...e){if(zn.logLevel<=te.ERROR){const n=e.map(Sl);zn.error(`Firestore (${Ds}): ${t}`,...n)}}function oc(t,...e){if(zn.logLevel<=te.WARN){const n=e.map(Sl);zn.warn(`Firestore (${Ds}): ${t}`,...n)}}function Sl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw zt(e),new Error(e)}function oe(t,e){t||V()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class k0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class D0{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Pe(e)}}class R0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class N0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new R0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new O0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=P0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new be(0,0))}static max(){return new H(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s){n===void 0?n=0:n>e.length&&V(),s===void 0?s=e.length-n:s>e.length-n&&V(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends pi{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(v.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const x0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends pi{construct(e,n,s){return new Ue(e,n,s)}static isValidIdentifier(e){return x0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new D(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ce.fromString(e))}static fromName(e){return new M(ce.fromString(e).popFirst(5))}static empty(){return new M(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ce(e.slice()))}}function L0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new fn(i,M.empty(),e)}function U0(t){return new fn(t.readTime,t.key,-1)}class fn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new fn(H.min(),M.empty(),-1)}static max(){return new fn(H.max(),M.empty(),-1)}}function F0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==$0)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Al.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return t==null}function Yr(t){return t===0&&1/t==-1/0}function q0(t){return typeof t=="number"&&Number.isInteger(t)&&!Yr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const j0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(t){if(oe(!!t),typeof t=="string"){let e=0;const n=j0.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ng(t){const e=t.mapValue.fields.__previous_value__;return Rg(e)?Ng(e):e}function mi(t){const e=pn(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rg(t)?4:H0(t)?9007199254740991:10:V()}function Lt(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pn(s.timestampValue),o=pn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ys(s.bytesValue).isEqual(ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return _e(s.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return _e(s.integerValue)===_e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=_e(s.doubleValue),o=_e(i.doubleValue);return r===o?Yr(r)===Yr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(xh(r)!==xh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Lt(r[a],o[a])))return!1;return!0}(t,e);default:return V()}}function yi(t,e){return(t.values||[]).find(n=>Lt(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=Wn(t),s=Wn(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=_e(i.integerValue||i.doubleValue),a=_e(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lh(t.timestampValue,e.timestampValue);case 4:return Lh(mi(t),mi(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ys(i),a=ys(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ne(_e(i.latitude),_e(r.latitude));return o!==0?o:ne(_e(i.longitude),_e(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=vs(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===lr.mapValue&&r===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(r===lr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const d=ne(a[u],l[u]);if(d!==0)return d;const f=vs(o[a[u]],c[l[u]]);if(f!==0)return f}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw V()}}function Lh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=pn(t),s=pn(e),i=ne(n.seconds,s.seconds);return i!==0?i:ne(n.nanos,s.nanos)}function ws(t){return ac(t)}function ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=pn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ac(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ac(s.fields[a])}`;return r+"}"}(t.mapValue):V();var e,n}function Uh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cc(t){return!!t&&"integerValue"in t}function kl(t){return!!t&&"arrayValue"in t}function Fh(t){return!!t&&"nullValue"in t}function $h(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function br(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ws(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function H0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.position=e,this.inclusive=n}}function Vh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=vs(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{}class Ie extends Og{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new z0(e,n,s):n==="array-contains"?new Q0(e,s):n==="in"?new Y0(e,s):n==="not-in"?new J0(e,s):n==="array-contains-any"?new X0(e,s):new Ie(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new W0(e,s):new G0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class It extends Og{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new It(e,n)}matches(e){return Mg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Mg(t){return t.op==="and"}function Pg(t){return K0(t)&&Mg(t)}function K0(t){for(const e of t.filters)if(e instanceof It)return!1;return!0}function lc(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(Pg(t))return t.filters.map(e=>lc(e)).join(",");{const e=t.filters.map(n=>lc(n)).join(",");return`${t.op}(${e})`}}function xg(t,e){return t instanceof Ie?function(n,s){return s instanceof Ie&&n.op===s.op&&n.field.isEqual(s.field)&&Lt(n.value,s.value)}(t,e):t instanceof It?function(n,s){return s instanceof It&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&xg(r,s.filters[o]),!0):!1}(t,e):void V()}function Lg(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${ws(e.value)}`}(t):t instanceof It?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(t):"Filter"}class z0 extends Ie{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class W0 extends Ie{constructor(e,n){super(e,"in",n),this.keys=Ug("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G0 extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=Ug("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ug(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class Q0 extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kl(n)&&yi(n.arrayValue,this.value)}}class Y0 extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yi(this.value.arrayValue,n)}}class J0 extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yi(this.value.arrayValue,n)}}class X0 extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>yi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ur(this.root,e,this.comparator,!0)}}class ur{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=i??Ne.EMPTY,this.right=r??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ne(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qh(this.data.getIterator())}getIteratorFrom(e){return new qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Te(this.comparator);return n.data=e,n}}class qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new nt([])}unionWith(e){let n=new Te(Ue.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!br(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=Ue.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ws(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());br(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Jn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Qe(Ws(this.value))}}function Fg(t){const e=[];return Jn(t.fields,(n,s)=>{const i=new Ue([n]);if(br(s)){const r=Fg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,H.min(),H.min(),H.min(),Qe.empty(),0)}static newFoundDocument(e,n,s,i){return new xe(e,1,n,H.min(),s,i,0)}static newNoDocument(e,n){return new xe(e,2,n,H.min(),H.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,H.min(),H.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function jh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new eC(t,e,n,s,i,r,o)}function Dl(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>lc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Fo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ws(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ws(s)).join(",")),e.ft=n}return e.ft}function Rl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Z0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bh(t.startAt,e.startAt)&&Bh(t.endAt,e.endAt)}function uc(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function tC(t,e,n,s,i,r,o,a){return new qi(t,e,n,s,i,r,o,a)}function $g(t){return new qi(t)}function Hh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Bg(t){return t.collectionGroup!==null}function hs(t){const e=K(t);if(e.dt===null){e.dt=[];const n=Nl(e),s=Vg(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Gs(n)),e.dt.push(new Gs(Ue.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Gs(Ue.keyField(),r))}}}return e.dt}function Wt(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=jh(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of hs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Gs(r.field,o))}const s=e.endAt?new Jr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Jr(e.startAt.position,e.startAt.inclusive):null;e._t=jh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function hc(t,e){e.getFirstInequalityField(),Nl(t);const n=t.filters.concat([e]);return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dc(t,e,n){return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $o(t,e){return Rl(Wt(t),Wt(e))&&t.limitType===e.limitType}function qg(t){return`${Dl(Wt(t))}|lt:${t.limitType}`}function fc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Lg(s)).join(", ")}]`),Fo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ws(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ws(s)).join(",")),`Target(${n})`}(Wt(t))}; limitType=${t.limitType})`}function Vo(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of hs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Vh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,hs(n),s)||n.endAt&&!function(i,r,o){const a=Vh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,hs(n),s))}(t,e)}function nC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let s=!1;for(const i of hs(t)){const r=sC(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sC(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?vs(a,c):V()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function Kg(t){return{integerValue:""+t}}function iC(t,e){return q0(e)?Kg(e):Hg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this._=void 0}}function rC(t,e,n){return t instanceof Xr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof vi?Wg(t,e):t instanceof wi?Gg(t,e):function(s,i){const r=zg(s,i),o=Kh(r)+Kh(s.gt);return cc(r)&&cc(s.gt)?Kg(o):Hg(s.yt,o)}(t,e)}function oC(t,e,n){return t instanceof vi?Wg(t,e):t instanceof wi?Gg(t,e):n}function zg(t,e){return t instanceof Zr?cc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Xr extends Bo{}class vi extends Bo{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Qg(e);for(const s of t.elements)n.some(i=>Lt(i,s))||n.push(s);return{arrayValue:{values:n}}}class wi extends Bo{constructor(e){super(),this.elements=e}}function Gg(t,e){let n=Qg(e);for(const s of t.elements)n=n.filter(i=>!Lt(i,s));return{arrayValue:{values:n}}}class Zr extends Bo{constructor(e,n){super(),this.yt=e,this.gt=n}}function Kh(t){return _e(t.integerValue||t.doubleValue)}function Qg(t){return kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof vi&&s instanceof vi||n instanceof wi&&s instanceof wi?ms(n.elements,s.elements,Lt):n instanceof Zr&&s instanceof Zr?Lt(n.gt,s.gt):n instanceof Xr&&s instanceof Xr}(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qo{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ol(t.key,vt.none()):new ji(t.key,t.data,vt.none());{const n=t.data,s=Qe.empty();let i=new Te(Ue.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new wn(t.key,s,new nt(i.toArray()),vt.none())}}function lC(t,e,n){t instanceof ji?function(s,i,r){const o=s.value.clone(),a=Wh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wn?function(s,i,r){if(!Tr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Wh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Jg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,s){return t instanceof ji?function(i,r,o,a){if(!Tr(i.precondition,r))return o;const c=i.value.clone(),l=Gh(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof wn?function(i,r,o,a){if(!Tr(i.precondition,r))return o;const c=Gh(i.fieldTransforms,a,r),l=r.data;return l.setAll(Jg(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Tr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function uC(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=zg(s.transform,i||null);r!=null&&(n===null&&(n=Qe.empty()),n.set(s.field,r))}return n||null}function zh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ms(n,s,(i,r)=>aC(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ji extends qo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wn extends qo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wh(t,e,n){const s=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,oC(o,a,n[i]))}return s}function Gh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,rC(r,o,e))}return s}class Ol extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hC extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Y;function fC(t){switch(t){default:return V();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Xg(t){if(t===void 0)return zt("GRPC error has no .code"),v.UNKNOWN;switch(t){case ve.OK:return v.OK;case ve.CANCELLED:return v.CANCELLED;case ve.UNKNOWN:return v.UNKNOWN;case ve.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case ve.INTERNAL:return v.INTERNAL;case ve.UNAVAILABLE:return v.UNAVAILABLE;case ve.UNAUTHENTICATED:return v.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case ve.NOT_FOUND:return v.NOT_FOUND;case ve.ALREADY_EXISTS:return v.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return v.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case ve.ABORTED:return v.ABORTED;case ve.OUT_OF_RANGE:return v.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return v.UNIMPLEMENTED;case ve.DATA_LOSS:return v.DATA_LOSS;default:return V()}}(Y=ve||(ve={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Se(M.comparator);function Gt(){return pC}const Zg=new Se(M.comparator);function Bs(...t){let e=Zg;for(const n of t)e=e.insert(n.key,n);return e}function em(t){let e=Zg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Pn(){return Ys()}function tm(){return Ys()}function Ys(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const gC=new Se(M.comparator),mC=new Te(M.comparator);function Q(...t){let e=mC;for(const n of t)e=e.add(n);return e}const yC=new Te(ne);function nm(){return yC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new jo(H.min(),i,nm(),Gt(),Q())}}class Hi{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Hi(s,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class sm{constructor(e,n){this.targetId=e,this.Et=n}}class im{constructor(e,n,s=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qh{constructor(){this.At=0,this.Rt=Jh(),this.bt=je.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Q(),n=Q(),s=Q();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:V()}}),new Hi(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Jh()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class vC{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Gt(),this.qt=Yh(),this.Ut=new Te(ne)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(uc(r))if(s===0){const o=new M(r.path);this.Qt(n,o,xe.newNoDocument(o,H.min()))}else oe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&uc(a.target)){const c=new M(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,xe.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=Q();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new jo(e,n,this.Ut,this.Lt,s);return this.Lt=Gt(),this.qt=Yh(),this.Ut=new Te(ne),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Qh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Te(ne),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qh),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Yh(){return new Se(M.comparator)}function Jh(){return new Se(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_C=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),IC=(()=>({and:"AND",or:"OR"}))();class bC{constructor(e,n){this.databaseId=e,this.wt=n}}function eo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rm(t,e){return t.wt?e.toBase64():e.toUint8Array()}function TC(t,e){return eo(t,e.toTimestamp())}function Mt(t){return oe(!!t),H.fromTimestamp(function(e){const n=pn(e);return new be(n.seconds,n.nanos)}(t))}function Ml(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function om(t){const e=ce.fromString(t);return oe(um(e)),e}function pc(t,e){return Ml(t.databaseId,e.path)}function Ca(t,e){const n=om(e);if(n.get(1)!==t.databaseId.projectId)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(am(n))}function gc(t,e){return Ml(t.databaseId,e)}function EC(t){const e=om(t);return e.length===4?ce.emptyPath():am(e)}function mc(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function am(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xh(t,e,n){return{name:pc(t,e),fields:n.value.mapValue.fields}}function CC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(oe(l===void 0||typeof l=="string"),je.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?v.UNKNOWN:Xg(c.code);return new D(l,c.message||"")}(o);n=new im(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ca(t,s.document.name),r=Mt(s.document.updateTime),o=s.document.createTime?Mt(s.document.createTime):H.min(),a=new Qe({mapValue:{fields:s.document.fields}}),c=xe.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Er(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ca(t,s.document),r=s.readTime?Mt(s.readTime):H.min(),o=xe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Er([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ca(t,s.document),r=s.removedTargetIds||[];n=new Er([],r,i,null)}else{if(!("filter"in e))return V();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new dC(i),o=s.targetId;n=new sm(o,r)}}return n}function SC(t,e){let n;if(e instanceof ji)n={update:Xh(t,e.key,e.value)};else if(e instanceof Ol)n={delete:pc(t,e.key)};else if(e instanceof wn)n={update:Xh(t,e.key,e.data),updateMask:xC(e.fieldMask)};else{if(!(e instanceof hC))return V();n={verify:pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Xr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zr)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw V()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function AC(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Mt(s.updateTime):Mt(i);return r.isEqual(H.min())&&(r=Mt(i)),new cC(r,s.transformResults||[])}(n,e))):[]}function kC(t,e){return{documents:[gc(t,e.path)]}}function DC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=gc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return lm(It.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ts(u.field),direction:OC(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||Fo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function RC(t){let e=EC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){oe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=cm(u);return d instanceof It&&Pg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new Gs(ns(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Fo(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,f=u.values||[];return new Jr(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const d=!u.before,f=u.values||[];return new Jr(f,d)}(n.endAt)),tC(e,i,o,r,a,"F",c,l)}function NC(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ns(e.unaryFilter.field);return Ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(e.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(e.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ns(e.unaryFilter.field);return Ie.create(r,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create(ns(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return It.create(e.compositeFilter.filters.map(n=>cm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(t):V()}function OC(t){return wC[t]}function MC(t){return _C[t]}function PC(t){return IC[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return Ue.fromServerFormat(t.fieldPath)}function lm(t){return t instanceof Ie?function(e){if(e.op==="=="){if($h(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NAN"}};if(Fh(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($h(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NAN"}};if(Fh(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(e.field),op:MC(e.op),value:e.value}}}(t):t instanceof It?function(e){const n=e.getFilters().map(s=>lm(s));return n.length===1?n[0]:{compositeFilter:{op:PC(e.op),filters:n}}}(t):V()}function xC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function um(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&lC(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Qs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Qs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Yg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,s)=>zh(n,s))&&ms(this.baseMutations,e.baseMutations,(n,s)=>zh(n,s))}}class Pl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){oe(e.mutations.length===s.length);let i=gC;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Pl(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s,i,r=H.min(),o=H.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.ie=e}}function $C(t){const e=RC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.Je=new BC}addToCollectionParentIndex(e,n){return this.Je.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(fn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class BC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Te(ce.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Te(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new _s(0)}static vn(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Qs(s.mutation,i,nt.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Q()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Q()){const i=Pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Bs();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Pn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Q()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Gt();const o=Ys(),a=Ys();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof wn)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qs(u.mutation,l,u.mutation.getFieldMask(),be.now())):o.set(l.key,nt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new jC(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ys();let i=new Se((o,a)=>o-a),r=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||nt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const d=(i.get(a.batchId)||Q()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=tm();u.forEach(f=>{if(!r.has(f)){const g=Yg(n.get(f),s.get(f));g!==null&&d.set(f,g),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Pn());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Q())).next(u=>({batchId:a,changes:em(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let i=Bs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Bs();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new qi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,xe.newInvalidDocument(l)))});let o=Bs();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Qs(l.mutation,c,nt.empty(),be.now()),Vo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Mt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$C(s.bundledQuery),readTime:Mt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.overlays=new Se(M.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Pn();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Pn(),r=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Pn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UC(n,s));let r=this.es.get(n);r===void 0&&(r=Q(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.ns=new Te(Ae.ss),this.rs=new Te(Ae.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ae(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ae(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new M(new ce([])),s=new Ae(n,e),i=new Ae(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ce([])),s=new Ae(n,e),i=new Ae(n,e+1);let r=Q();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ae(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||ne(e._s,n._s)}static os(e,n){return ne(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Te(Ae.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LC(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ae(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Te(ne);return n.forEach(i=>{const r=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),b.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;M.isDocumentKey(r)||(r=r.child(""));const o=new Ae(new M(r),0);let a=new Te(ne);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return b.forEach(n.mutations,i=>{const r=new Ae(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ae(n,0),i=this.gs.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.Es=e,this.docs=new Se(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let s=Gt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():xe.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Gt();const o=n.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||F0(U0(u),s)<=0||(i.has(u.key)||Vo(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){V()}As(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new QC(this)}getSize(e){return b.resolve(this.size)}}class QC extends qC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.persistence=e,this.Rs=new Rs(n=>Dl(n),Rl),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xl,this.targetCount=0,this.vs=_s.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Al(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new YC(this),this.indexManager=new VC,this.remoteDocumentCache=function(s){return new GC(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new FC(n),this.Ns=new KC(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new WC(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new XC(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return b.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class XC extends V0{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.Fs=new xl,this.$s=null}static Bs(e){return new Ll(e)}get Ls(){if(this.$s)return this.$s;throw V()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,s=>{const i=M.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,H.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Q(),i=Q();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ul(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Hh(n))return b.resolve(null);let s=Wt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dc(n,null,"F"),s=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Q(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,dc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,i){return Hh(n)||i.isEqual(H.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Ph()<=te.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fc(n)),this.Bi(e,o,n,L0(i,-1)))})}Fi(e,n){let s=new Te(jg(e));return n.forEach((i,r)=>{Vo(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Ph()<=te.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",fc(n)),this.Ni.getDocumentsMatchingQuery(e,n,fn.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Se(ne),this.Ui=new Rs(r=>Dl(r),Rl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function tS(t,e,n,s){return new eS(t,e,n,s)}async function hm(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Q();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function nS(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,d=u.keys();let f=b.resolve();return d.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(E=>{const T=c.docVersions.get(g);oe(T!==null),E.version.compareTo(T)<0&&(u.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),l.addEntry(E)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Q();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function dm(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function sS(t,e){const n=K(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,d)=>{const f=i.get(d);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,d)));let g=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(je.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(d,g),function(E,T,P){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,g,u)&&a.push(n.Cs.updateTargetData(r,g))});let c=Gt(),l=Q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(iS(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(H.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(d=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.qi=i,r))}function iS(t,e,n){let s=Q(),i=Q();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Gt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function rS(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oS(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new $n(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function yc(t,e,n){const s=K(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bi(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Zh(t,e,n){const s=K(t);let i=H.min(),r=Q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=K(a),d=u.Ui.get(l);return d!==void 0?b.resolve(u.qi.get(d)):u.Cs.getTargetData(c,l)}(s,o,Wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?r:Q())).next(a=>(aS(s,nC(e),a),{documents:a,Hi:r})))}function aS(t,e,n){let s=t.Ki.get(e)||H.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class ed{constructor(){this.activeTargetIds=nm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cS{constructor(){this.Lr=new ed,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ed,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw oc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=uS[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new S0;a.setWithCredentials(!0),a.listenOnce(T0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ea.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Ea.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new D(v.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(E){const T=E.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(T)>=0?T:v.UNKNOWN}(f.status);o(new D(g,f.message))}else o(new D(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(v.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=I0(),o=b0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new C0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");O("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,d=!1;const f=new hS({Hr:E=>{d?O("Connection","Not sending because WebChannel is closed:",E):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",E),l.send(E))},Jr:()=>l.close()}),g=(E,T,P)=>{E.listen(T,j=>{try{P(j)}catch(X){setTimeout(()=>{throw X},0)}})};return g(l,cr.EventType.OPEN,()=>{d||O("Connection","WebChannel transport opened.")}),g(l,cr.EventType.CLOSE,()=>{d||(d=!0,O("Connection","WebChannel transport closed"),f.io())}),g(l,cr.EventType.ERROR,E=>{d||(d=!0,oc("Connection","WebChannel transport errored:",E),f.io(new D(v.UNAVAILABLE,"The operation could not be completed")))}),g(l,cr.EventType.MESSAGE,E=>{var T;if(!d){const P=E.data[0];oe(!!P);const j=P,X=j.error||((T=j[0])===null||T===void 0?void 0:T.error);if(X){O("Connection","WebChannel received error:",X);const U=X.status;let Z=function(rt){const We=ve[rt];if(We!==void 0)return Xg(We)}(U),ue=X.message;Z===void 0&&(Z=v.INTERNAL,ue="Unknown error status: "+U+" with message "+X.message),d=!0,f.io(new D(Z,ue)),l.close()}else O("Connection","WebChannel received:",P),f.ro(P)}}),g(o,E0.STAT_EVENT,E=>{E.stat===Oh.PROXY?O("Connection","Detected buffering proxy"):E.stat===Oh.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){return new bC(t,!0)}class fm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new fm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(zt(n.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new D(v.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fS extends pm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=CC(this.yt,e),s=function(i){if(!("targetChange"in i))return H.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?H.min():r.readTime?Mt(r.readTime):H.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=mc(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=uc(a)?{documents:kC(i,a)}:{query:DC(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=rm(i,r.resumeToken):r.snapshotVersion.compareTo(H.min())>0&&(o.readTime=eo(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=NC(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=mc(this.yt),n.removeTarget=e,this.Bo(n)}}class pS extends pm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=AC(e.writeResults,e.commitTime),s=Mt(e.commitTime);return this.listener.Zo(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=mc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>SC(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(v.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(v.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class mS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(zt(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Xn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c._u.add(4),await Ki(c),c.gu.set("Unknown"),c._u.delete(4),await Ko(c)}(this))})}),this.gu=new mS(s,i)}}async function Ko(t){if(Xn(t))for(const e of t.wu)await e(!0)}async function Ki(t){for(const e of t.wu)await e(!1)}function gm(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Vl(n)?$l(n):Ns(n).ko()&&Fl(n,e))}function mm(t,e){const n=K(t),s=Ns(n);n.du.delete(e),s.ko()&&ym(n,e),n.du.size===0&&(s.ko()?s.Fo():Xn(n)&&n.gu.set("Unknown"))}function Fl(t,e){t.yu.Ot(e.targetId),Ns(t).zo(e)}function ym(t,e){t.yu.Ot(e),Ns(t).Ho(e)}function $l(t){t.yu=new vC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ns(t).start(),t.gu.uu()}function Vl(t){return Xn(t)&&!Ns(t).No()&&t.du.size>0}function Xn(t){return K(t)._u.size===0}function vm(t){t.yu=void 0}async function vS(t){t.du.forEach((e,n)=>{Fl(t,e)})}async function wS(t,e){vm(t),Vl(t)?(t.gu.hu(e),$l(t)):t.gu.set("Unknown")}async function _S(t,e,n){if(t.gu.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await to(t,s)}else if(e instanceof Er?t.yu.Kt(e):e instanceof sm?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(H.min()))try{const s=await dm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(je.EMPTY_BYTE_STRING,c.snapshotVersion)),ym(i,a);const l=new $n(c.target,a,1,c.sequenceNumber);Fl(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await to(t,s)}}async function to(t,e,n){if(!Bi(e))throw e;t._u.add(1),await Ki(t),t.gu.set("Offline"),n||(n=()=>dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ko(t)})}function wm(t,e){return e().catch(n=>to(t,n,e))}async function zo(t){const e=K(t),n=gn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;IS(e);)try{const i=await rS(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,bS(e,i)}catch(i){await to(e,i)}_m(e)&&Im(e)}function IS(t){return Xn(t)&&t.fu.length<10}function bS(t,e){t.fu.push(e);const n=gn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function _m(t){return Xn(t)&&!gn(t).No()&&t.fu.length>0}function Im(t){gn(t).start()}async function TS(t){gn(t).eu()}async function ES(t){const e=gn(t);for(const n of t.fu)e.Xo(n.mutations)}async function CS(t,e,n){const s=t.fu.shift(),i=Pl.from(s,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zo(t)}async function SS(t,e){e&&gn(t).Yo&&await async function(n,s){if(i=s.code,fC(i)&&i!==v.ABORTED){const r=n.fu.shift();gn(n).Mo(),await wm(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await zo(n)}var i}(t,e),_m(t)&&Im(t)}async function nd(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=Xn(n);n._u.add(3),await Ki(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ko(n)}async function AS(t,e){const n=K(t);e?(n._u.delete(2),await Ko(n)):e||(n._u.add(2),await Ki(n),n.gu.set("Unknown"))}function Ns(t){return t.pu||(t.pu=function(e,n,s){const i=K(e);return i.su(),new fS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:vS.bind(null,t),Zr:wS.bind(null,t),Wo:_S.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Vl(t)?$l(t):t.gu.set("Unknown")):(await t.pu.stop(),vm(t))})),t.pu}function gn(t){return t.Iu||(t.Iu=function(e,n,s){const i=K(e);return i.su(),new pS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:TS.bind(null,t),Zr:SS.bind(null,t),tu:ES.bind(null,t),Zo:CS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await zo(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Bl(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(t,e){if(zt("AsyncQueue",`${e}: ${t}`),Bi(t))return new D(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=Bs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.Tu=new Se(M.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):V():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Is{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,ds.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.Au=void 0,this.listeners=[]}}class DS{constructor(){this.queries=new Rs(e=>qg(e),$o),this.onlineState="Unknown",this.Ru=new Set}}async function RS(t,e){const n=K(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kS),i)try{r.Au=await n.onListen(s)}catch(o){const a=ql(o,`Initialization of query '${fc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&jl(n)}async function NS(t,e){const n=K(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function OS(t,e){const n=K(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&jl(n)}function MS(t,e,n){const s=K(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function jl(t){t.Ru.forEach(e=>{e.next()})}class PS{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Is(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.key=e}}class Tm{constructor(e){this.key=e}}class xS{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Q(),this.mutatedKeys=Q(),this.Gu=jg(e),this.Qu=new ds(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new sd,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,d)=>{const f=i.get(u),g=Vo(this.query,d)?d:null,E=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;f&&g?f.data.isEqual(g.data)?E!==T&&(s.track({type:3,doc:g}),P=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),P=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),P=!0):f&&!g&&(s.track({type:1,doc:f}),P=!0,(c||l)&&(a=!0)),P&&(g?(o=o.add(g),r=T?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(d,f){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return g(d)-g(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Is(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new sd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Q(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Tm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new bm(s))}),n}tc(e){this.qu=e.Hi,this.Ku=Q();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Is.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class LS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class US{constructor(e){this.key=e,this.nc=!1}}class FS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Rs(a=>qg(a),$o),this.rc=new Map,this.oc=new Set,this.uc=new Se(M.comparator),this.cc=new Map,this.ac=new xl,this.hc={},this.lc=new Map,this.fc=_s.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $S(t,e){const n=QS(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await oS(n.localStore,Wt(e));n.isPrimaryClient&&gm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await VS(n,e,s,a==="current",o.resumeToken)}return i}async function VS(t,e,n,s,i){t._c=(d,f,g)=>async function(E,T,P,j){let X=T.view.Wu(P);X.$i&&(X=await Zh(E.localStore,T.query,!1).then(({documents:ue})=>T.view.Wu(ue,X)));const U=j&&j.targetChanges.get(T.targetId),Z=T.view.applyChanges(X,E.isPrimaryClient,U);return rd(E,T.targetId,Z.Xu),Z.snapshot}(t,d,f,g);const r=await Zh(t.localStore,e,!0),o=new xS(e,r.Hi),a=o.Wu(r.documents),c=Hi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);rd(t,n,l.Xu);const u=new LS(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function BS(t,e){const n=K(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!$o(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mm(n.remoteStore,s.targetId),vc(n,s.targetId)}).catch(Vi)):(vc(n,s.targetId),await yc(n.localStore,s.targetId,!0))}async function qS(t,e,n){const s=YS(t);try{const i=await function(r,o){const a=K(r),c=be.now(),l=o.reduce((f,g)=>f.add(g.key),Q());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Gt(),E=Q();return a.Gi.getEntries(f,l).next(T=>{g=T,g.forEach((P,j)=>{j.isValidDocument()||(E=E.add(P))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(T=>{u=T;const P=[];for(const j of o){const X=uC(j,u.get(j.key).overlayedDocument);X!=null&&P.push(new wn(j.key,X,Fg(X.value.mapValue),vt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,P,o)}).next(T=>{d=T;const P=T.applyToLocalDocumentSet(u,E);return a.documentOverlayCache.saveOverlays(f,T.batchId,P)})}).then(()=>({batchId:d.batchId,changes:em(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new Se(ne)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await zi(s,i.changes),await zo(s.remoteStore)}catch(i){const r=ql(i,"Failed to persist write");n.reject(r)}}async function Em(t,e){const n=K(t);try{const s=await sS(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?oe(o.nc):i.removedDocuments.size>0&&(oe(o.nc),o.nc=!1))}),await zi(n,s,e)}catch(s){await Vi(s)}}function id(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=K(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const d of u.listeners)d.bu(o)&&(c=!0)}),c&&jl(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jS(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Se(M.comparator);o=o.insert(r,xe.newNoDocument(r,H.min()));const a=Q().add(r),c=new jo(H.min(),new Map,new Te(ne),o,a);await Em(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),Hl(s)}else await yc(s.localStore,e,!1).then(()=>vc(s,e,n)).catch(Vi)}async function HS(t,e){const n=K(t),s=e.batch.batchId;try{const i=await nS(n.localStore,e);Sm(n,s,null),Cm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zi(n,i)}catch(i){await Vi(i)}}async function KS(t,e,n){const s=K(t);try{const i=await function(r,o){const a=K(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Sm(s,e,n),Cm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zi(s,i)}catch(i){await Vi(i)}}function Cm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Sm(t,e,n){const s=K(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Am(t,s)})}function Am(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(mm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Hl(t))}function rd(t,e,n){for(const s of n)s instanceof bm?(t.ac.addReference(s.key,e),zS(t,s)):s instanceof Tm?(O("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Am(t,s.key)):V()}function zS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.oc.add(s),Hl(t))}function Hl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new M(ce.fromString(e)),s=t.fc.next();t.cc.set(s,new US(n)),t.uc=t.uc.insert(n,s),gm(t.remoteStore,new $n(Wt($g(n.path)),s,2,Al.at))}}async function zi(t,e,n){const s=K(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Ul.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=K(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,d=>b.forEach(d.Si,f=>l.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>b.forEach(d.Di,f=>l.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Bi(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const f=l.qi.get(d),g=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(d,E)}}}(s.localStore,r))}async function WS(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await hm(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(v.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zi(n,s.ji)}}function GS(t,e){const n=K(t),s=n.cc.get(e);if(s&&s.nc)return Q().add(s.key);{let i=Q();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function QS(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jS.bind(null,e),e.sc.Wo=OS.bind(null,e.eventManager),e.sc.wc=MS.bind(null,e.eventManager),e}function YS(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class JS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return tS(this.persistence,new ZC,e.initialUser,this.yt)}yc(e){return new JC(Ll.Bs,this.yt)}gc(e){return new cS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>id(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=WS.bind(null,this.syncEngine),await AS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new DS}createDatastore(e){const n=Ho(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dS(i));var i;return function(r,o,a,c){return new gS(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>id(this.syncEngine,a,0),o=td.C()?new td:new lS,new yS(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new FS(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ki(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e,n){if(!n)throw new D(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZS(t,e,n,s){if(e===!0&&s===!0)throw new D(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function od(t){if(!M.isDocumentKey(t))throw new D(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ad(t){if(M.isDocumentKey(t))throw new D(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wo(t);throw new D(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Map;class ld{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ZS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new A0;switch(n.type){case"gapi":const s=n.client;return new N0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cd.get(e);n&&(O("ComponentProvider","Removing Datastore"),cd.delete(e),n.terminate())}(this),Promise.resolve()}}function eA(t,e,n,s={}){var i;const r=(t=mn(t,Go))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&oc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Pe.MOCK_USER;else{o=Uw(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(c)}t._authCredentials=new k0(new Ag(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}}class Os{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class un extends Os{constructor(e,n,s){super(e,n,$g(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new M(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function ud(t,e,...n){if(t=Ce(t),km("collection","path",e),t instanceof Go){const s=ce.fromString(e,...n);return ad(s),new un(t,null,s)}{if(!(t instanceof Ye||t instanceof un))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return ad(s),new un(t.firestore,null,s)}}function _i(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=kg.R()),km("doc","path",e),t instanceof Go){const s=ce.fromString(e,...n);return od(s),new Ye(t,null,new M(s))}{if(!(t instanceof Ye||t instanceof un))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return od(s),new Ye(t.firestore,t instanceof un?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=kg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ql(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function sA(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await hm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function iA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rA(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>nd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>nd(e.remoteStore,r)),t.onlineComponents=e}async function rA(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await sA(t,new JS)),t.offlineComponents}async function Dm(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await iA(t,new XS)),t.onlineComponents}function oA(t){return Dm(t).then(e=>e.syncEngine)}async function aA(t){const e=await Dm(t),n=e.eventManager;return n.onListen=$S.bind(null,e.syncEngine),n.onUnlisten=BS.bind(null,e.syncEngine),n}function cA(t,e,n={}){const s=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new tA({next:d=>{r.enqueueAndForget(()=>NS(i,u)),d.fromCache&&a.source==="server"?c.reject(new D(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new PS(o,l,{includeMetadataChanges:!0,Nu:!0});return RS(i,u)}(await aA(t),t.asyncQueue,e,n,s)),s.promise}class lA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new fm(this,"async_queue_retry"),this.Wc=()=>{const n=Sa();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Sa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ln;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Bi(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw zt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Bl.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&V()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Wi extends Go{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new lA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nm(this),this._firestoreClient.terminate()}}function uA(t,e){const n=typeof t=="object"?t:Kc(),s=typeof t=="string"?t:e||"(default)",i=Qn(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Pw("firestore");r&&eA(i,...r)}return i}function Rm(t){return t._firestoreClient||Nm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Nm(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new B0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nA(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(je.fromBase64String(e))}catch(n){throw new D(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=/^__.*__$/;class dA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ji(e,this.data,n,this.fieldTransforms)}}class Om{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Wl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return no(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Mm(this.sa)&&hA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class fA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Ho(e)}da(e,n,s,i=!1){return new Wl({sa:e,methodName:n,fa:s,path:Ue.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Gl(t){const e=t._freezeSettings(),n=Ho(t._databaseId);return new fA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pA(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Ql("Data must be an object, but it was:",o,s);const a=Pm(s,o);let c,l;if(r.merge)c=new nt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const f=wc(e,d,n);if(!o.contains(f))throw new D(v.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Lm(u,f)||u.push(f)}c=new nt(u),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new dA(new Qe(a),c,l)}class Yo extends Kl{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yo}}function gA(t,e,n,s){const i=t.da(1,e,n);Ql("Data must be an object, but it was:",i,s);const r=[],o=Qe.empty();Jn(s,(c,l)=>{const u=Yl(e,c,n);l=Ce(l);const d=i.ca(u);if(l instanceof Yo)r.push(u);else{const f=Gi(l,d);f!=null&&(r.push(u),o.set(u,f))}});const a=new nt(r);return new Om(o,a,i.fieldTransforms)}function mA(t,e,n,s,i,r){const o=t.da(1,e,n),a=[wc(e,s,n)],c=[i];if(r.length%2!=0)throw new D(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(wc(e,r[f])),c.push(r[f+1]);const l=[],u=Qe.empty();for(let f=a.length-1;f>=0;--f)if(!Lm(l,a[f])){const g=a[f];let E=c[f];E=Ce(E);const T=o.ca(g);if(E instanceof Yo)l.push(g);else{const P=Gi(E,T);P!=null&&(l.push(g),u.set(g,P))}}const d=new nt(l);return new Om(u,d,o.fieldTransforms)}function yA(t,e,n,s=!1){return Gi(n,t.da(s?4:3,e))}function Gi(t,e){if(xm(t=Ce(t)))return Ql("Unsupported field value:",e,t),Pm(t,e);if(t instanceof Kl)return function(n,s){if(!Mm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Gi(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iC(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:eo(s.yt,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eo(s.yt,i)}}if(n instanceof zl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bs)return{bytesValue:rm(s.yt,n._byteString)};if(n instanceof Ye){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ml(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Wo(n)}`)}(t,e)}function Pm(t,e){const n={};return Dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,(s,i)=>{const r=Gi(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof zl||t instanceof bs||t instanceof Ye||t instanceof Kl)}function Ql(t,e,n){if(!xm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Wo(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function wc(t,e,n){if((e=Ce(e))instanceof Qo)return e._internalPath;if(typeof e=="string")return Yl(t,e);throw no("Field path arguments must be of type string or ",t,!1,void 0,n)}const vA=new RegExp("[~\\*/\\[\\]]");function Yl(t,e,n){if(e.search(vA)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qo(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function no(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new D(v.INVALID_ARGUMENT,a+t+c)}function Lm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wA extends Um{data(){return super.data()}}function Jl(t,e){return typeof e=="string"?Yl(t,e):e instanceof Qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}class IA extends Xl{}function bA(t,e,...n){let s=[];e instanceof Xl&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Zl).length,o=i.filter(a=>a instanceof Jo).length;if(r>1||r>0&&o>0)throw new D(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Jo extends IA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Jo(e,n,s)}_apply(e){const n=this._parse(e);return Fm(e._query,n),new Os(e.firestore,e.converter,hc(e._query,n))}_parse(e){const n=Gl(e.firestore);return function(i,r,o,a,c,l,u){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){dd(u,l);const f=[];for(const g of u)f.push(hd(a,i,g));d={arrayValue:{values:f}}}else d=hd(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||dd(u,l),d=yA(o,r,u,l==="in"||l==="not-in");return Ie.create(c,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function TA(t,e,n){const s=e,i=Jl("where",t);return Jo._create(i,s,n)}class Zl extends Xl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:It.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Fm(r,a),r=hc(r,a)}(e._query,n),new Os(e.firestore,e.converter,hc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hd(t,e,n){if(typeof(n=Ce(n))=="string"){if(n==="")throw new D(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ce.fromString(n));if(!M.isDocumentKey(s))throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Uh(t,new M(s))}if(n instanceof Ye)return Uh(t,n._key);throw new D(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wo(n)}.`)}function dd(t,e){if(!Array.isArray(t)||t.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Fm(t,e){if(e.isInequality()){const s=Nl(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new D(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Vg(t);r!==null&&EA(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function EA(t,e,n){if(!n.isEqual(e))throw new D(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class CA{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const s={};return Jn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new zl(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ng(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const n=pn(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ce.fromString(e);oe(um(s));const i=new gi(s.get(1),s.get(3)),r=new M(s.popFirst(5));return i.isEqual(n)||zt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AA extends Um{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Jl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cr extends AA{data(e={}){return super.data(e)}}class kA{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new hr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Cr(this._firestore,this._userDataWriter,s.key,s,new hr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Cr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new hr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Cr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new hr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:DA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class RA extends CA{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function fd(t){t=mn(t,Os);const e=mn(t.firestore,Wi),n=Rm(e),s=new RA(e);return _A(t._query),cA(n,t._query).then(i=>new kA(e,s,t,i))}function _c(t,e,n){t=mn(t,Ye);const s=mn(t.firestore,Wi),i=SA(t.converter,e,n);return eu(s,[pA(Gl(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vt.none())])}function NA(t,e,n,...s){t=mn(t,Ye);const i=mn(t.firestore,Wi),r=Gl(i);let o;return o=typeof(e=Ce(e))=="string"||e instanceof Qo?mA(r,"updateDoc",t._key,e,n,s):gA(r,"updateDoc",t._key,e),eu(i,[o.toMutation(t._key,vt.exists(!0))])}function OA(t){return eu(mn(t.firestore,Wi),[new Ol(t._key,vt.none())])}function eu(t,e){return function(n,s){const i=new ln;return n.asyncQueue.enqueueAndForget(async()=>qS(await oA(n),s,i)),i.promise}(Rm(t),e)}(function(t,e=!0){(function(n){Ds=n})(Ti),xt(new wt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Wi(new D0(n.getProvider("auth-internal")),new M0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),lt(Mh,"3.8.3",t),lt(Mh,"3.8.3","esm2017")})();const MA={apiKey:"AIzaSyAy8O-ooVAj6PyWJWaLP-XojwSOesqbaPg",authDomain:"cost-management-766e1.firebaseapp.com",projectId:"cost-management-766e1",storageBucket:"cost-management-766e1.appspot.com",messagingSenderId:"662728695795",appId:"1:662728695795:web:96989b6f08c3fd622ffc86",measurementId:"G-KZDLDYVQBJ"},$m=Tf(MA),Ic=tp();IE($m);Ic.languageCode="it";const Vn=uA($m);const Qi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},PA={name:"login",data:function(){return{register:!1,name:"",email:"",password:"",confirmPassword:"",errorMsg:"",isPasswordVisible:!1,isPasswordVisible2:!1,mainCollection:"users",costsCollection:"costs"}},methods:{signUp:function(){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.test(this.email)?this.password!=this.confirmPassword?this.errorMsg="Confirm password failed":qI(Ic,this.email,this.password).then(e=>{this.email=e.user.email,this.register=!1,this.addUser(),this.errorMsg="",this.isPasswordVisible=!1,this.isPasswordVisible2=!1}).catch(e=>{const n=e.code,s=e.message;console.error(n,s),this.errorMsg=n}):this.errorMsg="Invalid email"},async addUser(){await _c(_i(Vn,this.mainCollection,this.email),{name:this.name,email:this.email}),await _c(_i(Vn,this.mainCollection,this.email,this.costsCollection,"example"),{name:"Example",cost:10,type:"Home"})},signIn:function(){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.test(this.email)?jI(Ic,this.email,this.password).then(e=>{this.$emit("login",e.user.email),this.error=""}).catch(e=>{this.errorMsg="Invalid email or password",console.error(e)}):this.errorMsg="Invalid email"},togglePasswordVisibility(){this.isPasswordVisible=!this.isPasswordVisible,this.isPasswordVisible2=!this.isPasswordVisible2,this.$refs.passwordInput.type=this.isPasswordVisible?"text":"password",this.$refs.passwordInput2.type=this.isPasswordVisible2?"text":"password"}}},xA={key:0,class:"login-box"},LA=y("h2",null,"Sign in",-1),UA={class:"user-box"},FA=y("label",null,"Email",-1),$A={class:"user-box"},VA=y("label",null,"Password",-1),BA=y("i",{class:"lock-icon fa-solid fa-lock"},null,-1),qA=[BA],jA=y("i",{class:"lock-icon fa-solid fa-lock-open"},null,-1),HA=[jA],KA={class:"text-danger",id:"error"},zA=y("span",null,"Submit",-1),WA=[zA],GA={class:"sign-method"},QA=y("small",null,"No account? Sign up",-1),YA=[QA],JA={key:1,class:"register-box"},XA=y("h2",null,"Sign up",-1),ZA={class:"user-box"},ek=y("label",null,"Name",-1),tk={class:"user-box"},nk=y("label",null,"Email",-1),sk={class:"user-box"},ik=y("label",null,"Password",-1),rk=y("i",{class:"lock-icon fa-solid fa-lock"},null,-1),ok=[rk],ak=y("i",{class:"lock-icon fa-solid fa-lock-open"},null,-1),ck=[ak],lk={class:"user-box"},uk=y("label",null,"Cofirm Password",-1),hk=y("i",{class:"lock-icon fa-solid fa-lock"},null,-1),dk=[hk],fk=y("i",{class:"lock-icon fa-solid fa-lock-open"},null,-1),pk=[fk],gk={class:"text-danger",id:"error"},mk=y("span",null,"Submit",-1),yk=[mk],vk={class:"sign-method"},wk=y("small",null,"Already have an account? Sign in",-1),_k=[wk];function Ik(t,e,n,s,i,r){return we(),Re("div",null,[t.register?(we(),Re("div",JA,[XA,y("form",{onSubmit:e[17]||(e[17]=De((...o)=>t.onSubmit&&t.onSubmit(...o),["prevent"]))},[y("div",ZA,[et(y("input",{type:"text",name:"name",required:"","onUpdate:modelValue":e[7]||(e[7]=o=>t.name=o)},null,512),[[kt,t.name]]),ek]),y("div",tk,[et(y("input",{type:"text",name:"email",required:"","onUpdate:modelValue":e[8]||(e[8]=o=>t.email=o)},null,512),[[kt,t.email]]),nk]),y("div",sk,[et(y("input",{type:"password",name:"password",required:"","onUpdate:modelValue":e[9]||(e[9]=o=>t.password=o),ref:"passwordInput"},null,512),[[kt,t.password]]),ik,t.isPasswordVisible?(we(),Re("a",{key:1,href:"",onClick:e[11]||(e[11]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},ck)):(we(),Re("a",{key:0,href:"",onClick:e[10]||(e[10]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},ok))]),y("div",lk,[et(y("input",{type:"password",name:"confirm_password",required:"","onUpdate:modelValue":e[12]||(e[12]=o=>t.confirmPassword=o),ref:"passwordInput2"},null,512),[[kt,t.confirmPassword]]),uk,t.isPasswordVisible2?(we(),Re("a",{key:1,href:"",onClick:e[14]||(e[14]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},pk)):(we(),Re("a",{key:0,href:"",onClick:e[13]||(e[13]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},dk))]),y("span",gk,sn(t.errorMsg),1),y("button",{type:"submit",id:"register",onClick:e[15]||(e[15]=o=>r.signUp())},yk),y("div",vk,[y("a",{href:"",onClick:e[16]||(e[16]=De(o=>t.register=!1,["prevent"]))},_k)])],32)])):(we(),Re("div",xA,[LA,y("form",{onSubmit:e[6]||(e[6]=De((...o)=>t.onSubmit&&t.onSubmit(...o),["prevent"]))},[y("div",UA,[et(y("input",{type:"text",name:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,512),[[kt,t.email]]),FA]),y("div",$A,[et(y("input",{type:"password",name:"password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),ref:"passwordInput"},null,512),[[kt,t.password]]),VA,t.isPasswordVisible?(we(),Re("a",{key:1,href:"",onClick:e[3]||(e[3]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},HA)):(we(),Re("a",{key:0,href:"",onClick:e[2]||(e[2]=De((...o)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...o),["prevent"]))},qA))]),y("span",KA,sn(t.errorMsg),1),y("button",{type:"submit",onClick:e[4]||(e[4]=(...o)=>r.signIn&&r.signIn(...o))},WA),y("div",GA,[y("a",{href:"",onClick:e[5]||(e[5]=De(o=>t.register=!0,["prevent"]))},YA)])],32)]))])}const bk=Qi(PA,[["render",Ik]]);const Tk={name:"popup",props:["user","costUpdate"],data:function(){return{name:"",cost:"",type:"",mainCollection:"users",costsCollection:"costs",errorMsg:""}},methods:{async add(){try{let t=this.name.replace(/^\s+/g,"");if(t==="")return this.errorMsg="Please complete all required fields",!1;if(this.cost==="")return this.errorMsg="Please complete all required fields",!1;if(this.type==="")return this.errorMsg="Please complete all required fields",!1;this.errorMsg="",await _c(_i(Vn,this.mainCollection,this.user,this.costsCollection,this.name),{name:t,cost:this.cost,type:this.type},this.$emit("close"),this.$emit("callData"))}catch(t){console.log(t)}}}},Ek={class:"container-modal"},Ck=y("i",{class:"cancel-btn fa-solid fa-xmark"},null,-1),Sk=[Ck],Ak={class:"user-box"},kk=y("label",null,"Name",-1),Dk={class:"user-box"},Rk=y("label",null,"Cost",-1),Nk={class:"user-box"},Ok=lf('<option value="">Select a Type</option><option value="Home">Home</option><option value="Work">Work</option><option value="Car">Car</option><option value="Hobbies">Hobbies</option>',5),Mk=[Ok],Pk=y("label",null,"Type",-1),xk={class:"text-danger",id:"error"},Lk=y("span",null,"Add",-1),Uk=[Lk];function Fk(t,e,n,s,i,r){return we(),Re("div",Ek,[y("a",{href:"",onClick:e[0]||(e[0]=De(o=>t.$emit("close"),["prevent"]))},Sk),y("form",{onSubmit:e[5]||(e[5]=De((...o)=>t.onSubmit&&t.onSubmit(...o),["prevent"]))},[y("div",Ak,[et(y("input",{type:"text",name:"name",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.name=o)},null,512),[[kt,t.name]]),kk]),y("div",Dk,[et(y("input",{type:"number",name:"cost",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>t.cost=o)},null,512),[[kt,t.cost]]),Rk]),y("div",Nk,[et(y("select",{class:"type","onUpdate:modelValue":e[3]||(e[3]=o=>t.type=o)},Mk,512),[[qc,t.type]]),Pk]),y("span",xk,sn(t.errorMsg),1),y("button",{type:"submit",onClick:e[4]||(e[4]=(...o)=>r.add&&r.add(...o))},Uk)],32)])}const $k=Qi(Tk,[["render",Fk]]);const Vk={name:"popup2",props:["user","costUpdate"],data:function(){return{id:this.costUpdate.id,nameUp:this.costUpdate.costData.name,costUp:this.costUpdate.costData.cost,typeUp:this.costUpdate.costData.type,mainCollection:"users",costsCollection:"costs",errorMsg:""}},methods:{async update(){try{let t=this.nameUp.replace(/^\s+/g,"");if(t==="")return this.errorMsg="Please complete all required fields",!1;if(this.costUp==="")return this.errorMsg="Please complete all required fields",!1;this.errorMsg="",await NA(_i(Vn,this.mainCollection,this.user,this.costsCollection,this.id),{name:t,cost:this.costUp,type:this.typeUp},this.$emit("close"),this.$emit("callData"))}catch(t){console.log(t)}}}},Bk={class:"container-modal"},qk=y("i",{class:"cancel-btn fa-solid fa-xmark"},null,-1),jk=[qk],Hk={class:"user-box"},Kk=y("label",null,"Name",-1),zk={class:"user-box"},Wk=y("label",null,"Cost",-1),Gk={class:"user-box"},Qk=y("option",{value:"Home"},"Home",-1),Yk=y("option",{value:"Work"},"Work",-1),Jk=y("option",{value:"Car"},"Car",-1),Xk=y("option",{value:"Hobbies"},"Hobbies",-1),Zk=[Qk,Yk,Jk,Xk],e1=y("label",null,"Type",-1),t1={class:"text-danger",id:"error"},n1=y("span",null,"Update",-1),s1=[n1];function i1(t,e,n,s,i,r){return we(),Re("div",Bk,[y("a",{href:"",onClick:e[0]||(e[0]=De(o=>t.$emit("close"),["prevent"]))},jk),y("form",{onSubmit:e[5]||(e[5]=De((...o)=>t.onSubmit&&t.onSubmit(...o),["prevent"]))},[y("div",Hk,[et(y("input",{type:"text",name:"name",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.nameUp=o)},null,512),[[kt,t.nameUp]]),Kk]),y("div",zk,[et(y("input",{type:"number",name:"cost",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>t.costUp=o)},null,512),[[kt,t.costUp]]),Wk]),y("div",Gk,[et(y("select",{class:"type","onUpdate:modelValue":e[3]||(e[3]=o=>t.typeUp=o)},Zk,512),[[qc,t.typeUp]]),e1]),y("span",t1,sn(t.errorMsg),1),y("button",{type:"submit",onClick:e[4]||(e[4]=(...o)=>r.update&&r.update(...o))},s1)],32)])}const r1=Qi(Vk,[["render",i1]]);const o1={name:"dash-board",props:["user"],data:function(){return{showModal:!1,showModal2:!1,mainCollection:"users",costsCollection:"costs",data:[],totalCost:0,costUpdate:{},order:""}},components:{popUp:$k,popUp2:r1},beforeMount:function(){this.obtainData()},methods:{async obtainData(){this.order==""?await fd(ud(Vn,this.mainCollection,this.user,this.costsCollection)).then(t=>{this.data=[],t.forEach(e=>{let n={id:e.id,costData:e.data()};this.data.push(n)}),this.calcTotalCost()}).catch(t=>{console.log(t)}):await fd(bA(ud(Vn,this.mainCollection,this.user,this.costsCollection),TA("type","==",this.order))).then(t=>{this.data=[],t.forEach(e=>{let n={id:e.id,costData:e.data()};this.data.push(n)}),this.calcTotalCost()}).catch(t=>{console.log(t)})},calcTotalCost:function(){let t=0;this.data.forEach(e=>{t+=e.costData.cost}),this.totalCost=t},async delete(t){await OA(_i(Vn,this.mainCollection,this.user,this.costsCollection,t)),this.obtainData()}}},a1={class:"container"},c1={class:"filter"},l1=y("label",{for:"cars"},"Sort by:",-1),u1=lf('<option value="">All</option><option value="Home">Home</option><option value="Work">Work</option><option value="Car">Car</option><option value="Hobbies">Hobbies</option>',5),h1=[u1],d1={class:"table"},f1={cellspacing:"0"},p1=y("thead",null,[y("tr",null,[y("th",null,"Name"),y("th",null,"Cost"),y("th",null,"Type"),y("th",{width:"230"},"Actions")])],-1),g1=["onClick"],m1=y("i",{class:"fa-regular fa-pen-to-square"},null,-1),y1=[m1],v1=["onClick"],w1=y("i",{class:"fa-regular fa-trash-can"},null,-1),_1=[w1],I1=y("td",null,"Total Cost",-1),b1=y("td",null,null,-1),T1=y("td",null,null,-1);function E1(t,e,n,s,i,r){const o=Rr("popUp"),a=Rr("popUp2");return we(),Re("div",a1,[y("div",c1,[l1,et(y("select",{class:"order-by","onUpdate:modelValue":e[0]||(e[0]=c=>t.order=c),onChange:e[1]||(e[1]=c=>this.obtainData())},h1,544),[[qc,t.order]]),y("button",{class:"add-btn",onClick:e[2]||(e[2]=c=>t.showModal=!0)},"Add Item")]),y("div",d1,[y("table",f1,[p1,(we(!0),Re(ft,null,vv(t.data,(c,l)=>(we(),Re("tbody",{key:l},[y("tr",null,[y("td",null,sn(c.costData.name),1),y("td",null,"$"+sn(c.costData.cost),1),y("td",null,sn(c.costData.type),1),y("td",null,[y("a",{href:"",name:"edit",class:"icon-button",id:"{{ index }}",onClick:De(u=>(t.showModal2=!0,t.costUpdate=c),["prevent"])},y1,8,g1),y("a",{href:"",name:"delete",class:"icon-button",id:"{{ index }}",onClick:De(u=>this.delete(c.id),["prevent"])},_1,8,v1)])])]))),128)),y("tfoot",null,[y("tr",null,[I1,y("td",null,"$"+sn(t.totalCost),1),b1,T1])])])]),t.showModal?(we(),$a(o,{key:0,user:n.user,onClose:e[3]||(e[3]=c=>t.showModal=!1),onCallData:e[4]||(e[4]=c=>this.obtainData())},null,8,["user"])):Au("",!0),t.showModal2?(we(),$a(a,{key:1,user:n.user,costUpdate:t.costUpdate,onClose:e[5]||(e[5]=c=>t.showModal2=!1),onCallData:e[6]||(e[6]=c=>this.obtainData())},null,8,["user","costUpdate"])):Au("",!0)])}const C1=Qi(o1,[["render",E1]]);const S1={name:"app",data:function(){return{logon:!1,idUser:""}},components:{login:bk,dashBoard:C1},methods:{login:function(t){this.logon=!0,this.idUser=t},logout:function(){const t=tp();zI(t).then(()=>{this.logon=!1,this.idUser=""}).catch(e=>{console.error(e)})}}},A1={key:0},k1={key:1,id:"dash-board"},D1={class:"nav-header"},R1=y("div",{class:"nav-brand"},[y("h2",null,"Cost Management App")],-1),N1={class:"header-links"},O1={"data-menuanchor":"secondPage"},M1=y("i",{class:"fa-solid fa-arrow-right-from-bracket"},null,-1),P1={class:"main-content"},x1=y("h1",{class:"rise-text"},"Cost List",-1);function L1(t,e,n,s,i,r){const o=Rr("login"),a=Rr("dash-board");return we(),Re("div",null,[t.logon?(we(),Re("div",k1,[y("div",D1,[R1,y("div",N1,[y("ul",null,[y("li",O1,[y("a",{href:"",onClick:e[1]||(e[1]=De((...c)=>r.logout&&r.logout(...c),["prevent"]))},[M1,cf(" Sign Out")])])])])]),y("div",P1,[x1,ct(a,{user:t.idUser},null,8,["user"])])])):(we(),Re("div",A1,[ct(o,{onLogin:e[0]||(e[0]=c=>r.login(c))})]))])}const U1=Qi(S1,[["render",L1]]);const Vm=Tw(U1);Vm.use(Aw());Vm.mount("#app");
