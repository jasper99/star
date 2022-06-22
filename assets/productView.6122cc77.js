import{_ as y,r as w,w as C,o as u,c as v,a as c,F as b,b as P,d as E,p as V,e as A,u as F,h as O,s as R,m as U,f as x,g as X,i as G,j as _,t as z,k as L,P as H}from"./index.35a49480.js";const J={key:0,class:"product-show"},K={class:"picture"},Q=["src"],T={class:"icons"},W=["onClick"],Y=["src"],Z={__name:"productShow",props:{imageLarge:{type:Array,required:!0},imageIcon:{type:Array,required:!0}},setup(t){const h=t,s=w(),d=o=>{s.value=h.imageLarge[o],console.log("show")};return C(h.imageLarge,o=>{o.length>0&&d(0)},{immediate:!0}),(o,l)=>s.value?(u(),v("div",J,[c("div",K,[c("img",{class:"image-large",src:s.value},null,8,Q)]),c("div",T,[(u(!0),v(b,null,P(t.imageIcon,(r,p)=>(u(),v("div",{key:p,onClick:i=>d(p)},[c("img",{src:r},null,8,Y)],8,W))),128))])])):E("",!0)}};var D=y(Z,[["__scopeId","data-v-18214327"]]);const M=t=>(V("data-v-98962ce6"),t=t(),A(),t),cc={class:"amonut-select"},ac=M(()=>c("span",{class:"icon minus"},null,-1)),tc=[ac],dc=["value"],oc=M(()=>c("span",{class:"icon plus"},null,-1)),ec=[oc],ic={__name:"amountSelect",props:{value:{type:Number,default:1}},emits:["updateAmount"],setup(t,{emit:h}){const d=w(t.value);return C(d,o=>{o<1&&(d.value=1),h("updateAmount",o)}),(o,l)=>(u(),v("div",null,[c("div",cc,[c("div",{class:"btn",onClick:l[0]||(l[0]=r=>d.value--)},tc),c("input",{type:"text",value:d.value},null,8,dc),c("div",{class:"btn",onClick:l[1]||(l[1]=r=>d.value++)},ec)])]))}};var nc=y(ic,[["__scopeId","data-v-98962ce6"]]);const k=t=>(V("data-v-194cc157"),t=t(),A(),t),rc={class:"row"},sc={class:"col-lg-7 col-md-12 col-sm-12 col-xs-12"},lc={class:"col-lg-5 col-md-12 col-sm-12 col-xs-12 product-info"},pc=k(()=>c("div",{class:"spacer"},null,-1)),uc={class:"product-buy"},vc={class:"product-title"},mc={class:"product-price"},gc={class:"product-amount"},hc=k(()=>c("span",null,"\u6578\u91CF",-1)),fc=L('<div class="add-track" data-v-194cc157><span class="icon heart" data-v-194cc157></span> \u52A0\u5165\u8FFD\u8E64\u6E05\u55AE </div><div class="deliver-way" data-v-194cc157><input type="checkbox" id="chk-deliver" data-v-194cc157><span class="icon angle-down" data-v-194cc157></span><label for="chk-deliver" data-v-194cc157>\u9001\u8CA8\u65B9\u5F0F</label><ul class="dliver-info" data-v-194cc157><li data-v-194cc157>\u5B85\u914D</li></ul></div>',2),xc=L('<div class="col-12 product-desc" data-v-194cc157><div class="title" data-v-194cc157> \u5546\u54C1\u63CF\u8FF0 </div><div class="content" data-v-194cc157><div data-v-194cc157>\uFF1D\u5496\u5561\u7119\u5EA6/\u98A8\u5473\uFF1D</div><div data-v-194cc157>\uFF0B \u4E2D\u6DF1\u70D8\u7119</div><div data-v-194cc157>\uFF0B \u5805\u679C\u8ABF\u53CA\u98FD\u6EFF\u7684\u7126\u7CD6\u751C\u611F</div><div data-v-194cc157>\uFF0B \u719F\u97FB\u60A0\u9577\u7684\u9435\u89C0\u97F3\u5DE7\u514B\u529B\u8ABF\u6027</div><div data-v-194cc157>\uFF0B \u6574\u9AD4\u98A8\u683C\u517C\u5177\u751C\u82E6\u5E73\u8861</div><div class="content-spacer" data-v-194cc157></div><div data-v-194cc157>\uFF1D\u6C96\u716E\u5EFA\u8B70\uFF1D</div><div data-v-194cc157>\uFF0B \u6C96\u716E\u6C34\u6EAB\uFF1A95\xB0C</div><div data-v-194cc157>\uFF0B \u7E3D\u6C34\u91CF\uFF1A180cc</div><div data-v-194cc157>\uFF0B \u6C96\u716E\u6642\u9593\uFF1A\u7E3D\u6642\u95935\u5206\u9418\uFF0C\u6D78\u6CE1\u6642\u53EF\u9069\u7576\u652A\u62CC</div><div class="content-spacer" data-v-194cc157></div><div data-v-194cc157>\uFF1D\u5496\u5561\u7119\u5EA6/\u98A8\u5473\uFF1D</div><div data-v-194cc157>\uFF0B \u6DFA\u70D8\u7119</div><div data-v-194cc157>\uFF0B \u6C34\u679C\u8EDF\u7CD6\u9178\u751C\u8C50\u5BCC</div><div data-v-194cc157>\uFF0B \u85CD\u8393\u679C\u91AC\u8207\u7D05\u860B\u679C\u7684\u5C64\u6B21\u4EA4\u932F</div><div data-v-194cc157>\uFF0B \u7126\u7CD6\u3001\u53EF\u53EF\u9999\u6C23\u5C3E\u97FB\u7DBF\u9577\u4E0D\u65B7</div><div class="content-spacer" data-v-194cc157></div><div data-v-194cc157>\uFF1D\u6C96\u716E\u5EFA\u8B70\uFF1D</div><div data-v-194cc157>\uFF0B \u6C96\u716E\u6C34\u6EAB\uFF1A92\xB0C</div><div data-v-194cc157>\uFF0B \u7E3D\u6C34\u91CF\uFF1A200cc</div><div data-v-194cc157>\uFF0B \u6C96\u716E\u6642\u9593\uFF1A\u7E3D\u6642\u95932\u5206\u9418</div><div class="content-spacer" data-v-194cc157></div><div data-v-194cc157>\u5099\u8A3B\uFF5C</div><div data-v-194cc157>\u25B3 \u672C\u5546\u54C1\u70BA\u6613\u788E\u54C1\u50C5\u9650\u300E\u5B85\u914D\u300F\u65B9\u5F0F\u51FA\u8CA8 ; \u55AE\u7B46\u8A02\u55AE\u91D1\u984D\u6EFF2000\u5143\u5373\u4EAB\u5B85\u914D\u514D\u904B</div><div data-v-194cc157>\u25B3 \u8ACB\u4EE5\u624B\u6D17\u4E26\u8ACB\u4F7F\u7528\u4E2D\u6027\u6E05\u6D17\u5291\u8207\u6D77\u7DBF\u6E05\u6D17\uFF0C\u52FF\u4F7F\u7528\u83DC\u74DC\u5E03\u7B49\u5C16\u92B3\u7269</div><div data-v-194cc157>\u25B3 \u8ACB\u52FF\u7528\u65BC\u300C\u5FAE\u6CE2\u7210\u3001\u96FB\u78C1\u7210\u53CA\u76F4\u706B\u52A0\u71B1\u3001\u70E4\u7BB1\u300D\uFF0C\u4E26\u8ACB\u52FF\u653E\u65BC\u51B7\u51CD\u5EAB\u4E2D</div><div data-v-194cc157>\u25B3 \u8ACB\u52FF\u4F7F\u7528\u91D1\u5C6C\u6750\u8CEA\u652A\u62CC\u6216\u6572\u6253\uFF0C\u907F\u514D\u5F37\u529B\u78B0\u649E\uFF0C\u5982\u6709\u88C2\u75D5\u6216\u7F3A\u89D2\u8ACB\u505C\u6B62\u4F7F\u7528</div><div data-v-194cc157>\u25B3 \u8ACB\u907F\u514D\u77AC\u9593\u6025\u907D\u6EAB\u5DEE\uFF0C\u53EF\u80FD\u9020\u6210\u676F\u8EAB\u7834\u88C2</div><div data-v-194cc157>\u25B3 \u676F\u53E3\u8F49\u5F4E\u8655\u53CA\u628A\u624B\u929C\u63A5\u8655\u4E4B\u8272\u91C9\u4E9B\u5FAE\u5806\u7A4D\u70BA\u6B63\u5E38\u73FE\u8C61\uFF0C\u4E0D\u5F71\u97FF\u4F7F\u7528\u8207\u54C1\u8CEA</div><div data-v-194cc157>\u25B3 \u90E8\u4EFD\u5546\u54C1\u63D0\u4F9B\u6D77\u5916\u914D\u9001\u670D\u52D9\uFF0C\u8ACB\u4F9D\u3010\u8CFC\u7269\u8ECA\u7D50\u5E33\u3011\u7CFB\u7D71\u756B\u9762\u4E4B\u300C\u9001\u8CA8\u65B9\u5F0F\u300D\u6A19\u793A\u8AAA\u660E\u70BA\u6E96</div><div data-v-194cc157>\u25B3 \u4E0B\u55AE\u5F8C\u7D043-7\u500B\u5DE5\u4F5C\u5929(\u4E0D\u542B\u5047\u65E5)\u5167\u9678\u7E8C\u51FA\u8CA8\uFF0C\u5982\u6709\u6025\u7528\u9700\u6C42\uFF0C\u4E0B\u55AE\u524D\u8ACB\u81EA\u884C\u8A55\u4F30\u662F\u5426\u540C\u610F\u518D\u4E0B\u55AE</div><div data-v-194cc157>\u25B3 \u4E0B\u55AE\u5F8C\u6055\u4E0D\u53D7\u7406\u4FEE\u6539\u4EFB\u4F55\u8A02\u55AE\u5167\u5BB9\u3001\u6307\u5B9A\u5230\u8CA8\u65E5\u53CA\u5408\u4F75\u8A02\u55AE\u514D\u904B\u8CBB\u4E4B\u670D\u52D9</div></div></div>',1),_c={class:"row related-product"},bc=k(()=>c("div",{class:"col-12 related-product-title"}," \u76F8\u95DC\u7522\u54C1 ",-1)),yc={__name:"productView",setup(t){const s=F().params.id,d=new O,o=R(),l=U(),r=x([]),p=x([]),i=x({}),S=x({}),$=w(1),N=e=>{$.value=e},B=()=>{o.addCart(i.id,$.value),l.contentMask=!0,o.cartVisible=!0};X(async()=>{const e=d.get("/products"),m=d.get("/random");await Promise.all([e,m]).then(([a,f])=>{Object.assign(i,a.filter(g=>g.id===s)[0]),i.price=G(i.price),Object.assign(S,q(a,s)),r.push("/images/products/"+i.imageLarge),p.push("/images/products/"+i.imageSmall),f.forEach(g=>{r.push("/images/products/"+g.imageLarge),p.push("/images/products/"+g.imageSmall)})}),await Promise.all([...r.map(a=>I(a)),...p.map(a=>I(a))])});const I=e=>new Promise(m=>{const a=new Image;a.src=e,a.onload=()=>{m(e)}}),q=(e,m,a=4)=>{if(e.length-1<a)return;const f=()=>{const n=new Set(Array(a).fill(0).map(j=>Math.floor(Math.random()*(e.length-1))));return[...n].length===a?[...n]:f()},g=f();return e.filter(n=>n.id!==m).filter((n,j)=>g.includes(j)).map(n=>(n.image="/images/products/"+n.image,n))};return(e,m)=>(u(),v(b,null,[c("div",rc,[c("div",sc,[_(D,{"product-id":i.id,"image-large":r,"image-icon":p},null,8,["product-id","image-large","image-icon"])]),c("div",lc,[pc,c("div",uc,[c("div",vc,z(i.title),1),c("div",mc,z(i.price),1),c("div",gc,[hc,_(nc,{value:1,onUpdateAmount:N})]),c("div",{class:"product-buy"},[c("div",{class:"btn-buy menu-group",onClick:B}," \u52A0\u5165\u8CFC\u7269\u8ECA ")]),fc])]),xc]),c("div",_c,[bc,(u(!0),v(b,null,P(S,a=>(u(),v("div",{key:a.id,class:"col-lg-3 col-md-6 col-sm-6 col-xs-6"},[_(H,{price:a.price,"product-id":a.id,title:a.title,image:a.image,"show-cart":!1},null,8,["price","product-id","title","image"])]))),128))])],64))}};var kc=y(yc,[["__scopeId","data-v-194cc157"]]);export{kc as default};
