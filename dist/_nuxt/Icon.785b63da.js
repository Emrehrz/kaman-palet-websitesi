import{h as k,p as A,m as N,r as B,l as o,w as C,R as b,u as e,o as r,J as g,S as h,c as z,U as D,V as q,W as E,I as F}from"./entry.40aba5c9.js";import{u as H}from"./config.0b6b2bc3.js";import{I as J,l as R}from"./Icon.vue.4bea81fd.js";const U=["width","height"],V=k({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(f){var y;let c,v;const i=f,S=A(),s=H();(y=s==null?void 0:s.nuxtIcon)!=null&&y.aliases;const m=N("icons",()=>({})),p=B(!1),a=o(()=>{var t;return(((t=s.nuxtIcon)==null?void 0:t.aliases)||{})[i.name]||i.name}),_=o(()=>{var t;return(t=m.value)==null?void 0:t[a.value]}),l=o(()=>S.vueApp.component(a.value)),n=o(()=>{var d,I,w;if(!i.size&&typeof((d=s.nuxtIcon)==null?void 0:d.size)=="boolean"&&!((I=s.nuxtIcon)!=null&&I.size))return;const t=i.size||((w=s.nuxtIcon)==null?void 0:w.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=o(()=>{var t;return((t=s==null?void 0:s.nuxtIcon)==null?void 0:t.class)??"icon"});async function x(){var t;l.value||(t=m.value)!=null&&t[a.value]||(p.value=!0,m.value[a.value]=await R(a.value).catch(()=>{}),p.value=!1)}return C(()=>a.value,x),!l.value&&([c,v]=b(()=>x()),c=await c,v()),(t,d)=>e(p)?(r(),g("span",{key:0,class:h(e(u)),width:e(n),height:e(n)},null,10,U)):e(_)?(r(),z(e(J),{key:1,icon:e(_),class:h(e(u)),width:e(n),height:e(n)},null,8,["icon","class","width","height"])):e(l)?(r(),z(D(e(l)),{key:2,class:h(e(u)),width:e(n),height:e(n)},null,8,["class","width","height"])):(r(),g("span",{key:3,class:h(e(u)),style:E({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},q(f.name),7))}}),G=F(V,[["__scopeId","data-v-cf1ec82f"]]);export{G as default};
