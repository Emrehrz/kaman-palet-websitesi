import{q as f,h as u,e as v,j as l,u as d}from"./query.c61c555a.js";import{f as _,_ as g,h,t as y,l as w,m as C,i as $,k as r}from"./entry.3dc56757.js";import"./utils.d2eec17c.js";import{_ as N}from"./nuxt-link.84c593e1.js";import{w as c,s as P,u as j,a as T}from"./utils.f255d8a4.js";import"./TheMainHero.vue.d44c57f3.js";import"./Icon.vue.bbdfa547.js";/* empty css                      *//* empty css                        *//* empty css                      *//* empty css                    */const x=async n=>{const{content:t}=_().public;typeof(n==null?void 0:n.params)!="function"&&(n=f(n));const a=n.params(),i=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.9b066100.js"),["./client-db.9b066100.js","./entry.3dc56757.js","./entry.45425a21.css","./utils.f255d8a4.js","./utils.d2eec17c.js","./query.c61c555a.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const I=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:i}=await d(`content-navigation-${u(a.value)}`,()=>x(a.value));return{navigation:i}},render(n){const t=$(),{navigation:a}=n,i=o=>r(N,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(s=>s.children?r("li",null,[i(s),e(s.children,p+1)]):r("li",null,i(s)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{I as default};
