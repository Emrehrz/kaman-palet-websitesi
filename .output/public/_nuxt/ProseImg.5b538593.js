import{h as i,l as a,F as n,f as c,o,J as h,u}from"./entry.3dc56757.js";import"./utils.d2eec17c.js";const d=["src","alt","width","height"],g=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=a(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?n(e.src,c().app.baseURL):e.src});return(r,l)=>(o(),h("img",{src:u(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{g as default};
