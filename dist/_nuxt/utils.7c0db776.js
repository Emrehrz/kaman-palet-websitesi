import{r as S,w as C,E as A,F as b,f as w,a as T}from"./entry.40aba5c9.js";const k=decodeURIComponent,E=encodeURIComponent,R=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function U(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");let r={},i=t||{},o=e.split(R),s=i.decode||k;for(let n=0;n<o.length;n++){let a=o[n],l=a.indexOf("=");if(l<0)continue;let y=a.substr(0,l).trim(),u=a.substr(++l,a.length).trim();u[0]=='"'&&(u=u.slice(1,-1)),r[y]==null&&(r[y]=D(u,s))}return r}function m(e,t,r){let i=r||{},o=i.encode||E;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");let s=o(t);if(s&&!c.test(s))throw new TypeError("argument val is invalid");let n=e+"="+s;if(i.maxAge!=null){let a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");n+="; Max-Age="+Math.floor(a)}if(i.domain){if(!c.test(i.domain))throw new TypeError("option domain is invalid");n+="; Domain="+i.domain}if(i.path){if(!c.test(i.path))throw new TypeError("option path is invalid");n+="; Path="+i.path}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n}function D(e,t){try{return t(e)}catch{return e}}const j={path:"/",watch:!0,decode:e=>A(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function O(e,t){var s;const r={...j,...t},i=B(r)||{},o=S(i[e]??((s=r.default)==null?void 0:s.call(r)));{const n=()=>{L(e,o.value,r)};r.watch?C(o,n,{deep:r.watch!=="shallow"}):n()}return o}function B(e={}){return U(document.cookie,e)}function I(e,t,r={}){return t==null?m(e,t,{...r,maxAge:-1}):m(e,t,r)}function L(e,t,r={}){document.cookie=I(e,t,r)}const M=["p","h1","h2","h3","h4","h5","h6","li"];function f(e,t){return e.type===t||typeof e.type=="object"&&e.type.tag===t||e.tag===t}function d(e){return f(e,"text")||typeof e.children=="string"}function g(e){var t;return Array.isArray(e.children)||typeof e.children=="string"?e.children:typeof((t=e.children)==null?void 0:t.default)=="function"?e.children.default():[]}function p(e){if(!e)return"";if(Array.isArray(e))return e.map(p).join("");if(d(e))return e.children||e.value;const t=g(e);return Array.isArray(t)?t.map(p).join(""):""}function h(e,t=["p"]){if(Array.isArray(e))return e.flatMap(i=>h(i,t));let r=e;return t.some(i=>i==="*"||f(e,i))&&(r=g(e)||e,!Array.isArray(r)&&M.some(i=>f(e,i))&&(r=[r])),r}function x(e,t=["p"]){return e=Array.isArray(e)?e:[e],t.length?e.flatMap(r=>x(h(r,[t[0]]),t.slice(1))).filter(r=>!(d(r)&&p(r).trim()==="")):e}const q=e=>b(e,w().public.content.api.baseURL),v=()=>({unwrap:h,flatUnwrap:x}),z=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},F=()=>{const{experimental:e}=w().content;if(e.clientDB)return!0;const t=T().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||O("previewToken").value)};export{z as a,v as b,F as s,O as u,q as w};
