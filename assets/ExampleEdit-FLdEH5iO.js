var d=(g,c,e)=>new Promise((u,m)=>{var i=t=>{try{p(e.next(t))}catch(o){m(o)}},n=t=>{try{p(e.throw(t))}catch(o){m(o)}},p=t=>t.done?u(t.value):Promise.resolve(t.value).then(i,n);p((e=e.apply(g,c)).next())});import{_ as k}from"./Write.vue_vue_type_script_setup_true_lang-u1kiVPF_.js";import{_ as D}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-N7bLbNVO.js";import{c as b}from"./index-vIJQlKXh.js";import{l as R,aB as C,aM as T,a as _,ah as $,m as E,S as V,R as l,O as v,V as x,W as B,u as s}from"./vue-chunks-zxmGq976.js";import{c as h,s as A}from"./index-IUv6DGNd.js";import{u as N}from"./useEventBus-xUD6fuCX.js";import"./Form-Y4uO6fbb.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-QmBXs8ZR.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-vnX-6xhq.js";import"./element-plus--p0OFoYR.js";import"./style.css_vue_type_style_index_0_src_true_lang-o25J0qT9.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-8ZN0fevK.js";import"./IconPicker-OpkHdX1e.js";import"./useForm-YNKevIZ4.js";import"./useValidator-Ay8Mdyux.js";/* empty css                */const mt=R({__name:"ExampleEdit",setup(g){const{emit:c}=N(),{push:e,go:u}=C(),{query:m}=T(),{t:i}=b(),n=_(null);d(this,null,function*(){const a=yield h(m.id);a&&(n.value=a.data)});const t=_(),o=_(!1),w=()=>d(this,null,function*(){const a=s(t),r=yield a==null?void 0:a.submit();r&&(o.value=!0,(yield A(r).catch(()=>{}).finally(()=>{o.value=!1}))&&(c("getList","editor"),e("/example/example-page")))});return(a,r)=>{const f=$("BaseButton");return E(),V(s(D),{title:s(i)("exampleDemo.edit"),onBack:r[1]||(r[1]=y=>s(e)("/example/example-page"))},{header:l(()=>[v(f,{onClick:r[0]||(r[0]=y=>s(u)(-1))},{default:l(()=>[x(B(s(i)("common.back")),1)]),_:1}),v(f,{type:"primary",loading:o.value,onClick:w},{default:l(()=>[x(B(s(i)("exampleDemo.save")),1)]),_:1},8,["loading"])]),default:l(()=>[v(k,{ref_key:"writeRef",ref:t,"current-row":n.value},null,8,["current-row"])]),_:1},8,["title"])}}});export{mt as default};
