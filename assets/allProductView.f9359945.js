import{_,u as v,h as g,r as n,g as h,w as f,o as r,c,F as m,b as y,a as u,t as w,d as k,p as q,e as x,j as C,P}from"./index.3613c044.js";const V=s=>(q("data-v-2d829783"),s=s(),x(),s),I={key:0,class:"row"},S={key:1,class:"col-12 search-fail"},b={class:"title"},B=V(()=>u("div",{class:"suggest"},"\u5EFA\u8B70\u60A8\uFF0C\u6AA2\u67E5\u8F38\u5165\u5B57\u8A5E\u662F\u5426\u6709\u8AA4\u6216\u4F7F\u7528\u5176\u4ED6\u76F8\u95DC\u7684\u5B57\u8A5E\u518D\u641C\u5C0B",-1)),D={__name:"allProductView",setup(s){const d=v(),p=new g,o=n([]),i=n(!1);h(async()=>{o.value=await l(d.query.query),i.value=!0});const l=async t=>await p.get("/products").then(a=>a.map(e=>(e.image="/images/products/"+e.image,e))).then(a=>t?a.filter(e=>e.title.toLowerCase().includes(t)):a).catch(a=>(console.log(a),[]));return f(()=>d.query.query,async t=>{t!==void 0&&(o.value=await l(t))}),(t,a)=>i.value?(r(),c("div",I,[o.value.length>0?(r(!0),c(m,{key:0},y(o.value,e=>(r(),c("div",{key:e.id,class:"col-lg-4 col-md-4 col-sm-6 col-xs-6"},[C(P,{"show-cart":!1,title:e.title,"product-id":e.id,price:e.price,image:e.image,onClick:N=>t.$router.push({name:"product",params:{id:e.id}})},null,8,["title","product-id","price","image","onClick"])]))),128)):(r(),c("div",S,[u("div",b,"\u62B1\u6B49\uFF0C\u627E\u4E0D\u5230\u60A8\u6240\u67E5\u8A62\u7684\u300C"+w(t.$route.query.query)+"\u300D\u76F8\u95DC\u5546\u54C1",1),B]))])):k("",!0)}};var j=_(D,[["__scopeId","data-v-2d829783"]]);export{j as default};
