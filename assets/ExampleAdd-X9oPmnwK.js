var d=(u,n,o)=>new Promise((l,r)=>{var i=t=>{try{s(o.next(t))}catch(e){r(e)}},m=t=>{try{s(o.throw(t))}catch(e){r(e)}},s=t=>t.done?l(t.value):Promise.resolve(t.value).then(i,m);s((o=o.apply(u,n)).next())});import{_ as g}from"./Write.vue_vue_type_script_setup_true_lang-u1kiVPF_.js";import{_ as k}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-N7bLbNVO.js";import{c as y}from"./index-vIJQlKXh.js";import{l as C,aB as w,a as _,ah as D,m as R,S as $,R as p,O as c,V as x,W as v,u as a}from"./vue-chunks-zxmGq976.js";import{s as b}from"./index-IUv6DGNd.js";import{u as V}from"./useEventBus-xUD6fuCX.js";import"./Form-Y4uO6fbb.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-QmBXs8ZR.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-vnX-6xhq.js";import"./element-plus--p0OFoYR.js";import"./style.css_vue_type_style_index_0_src_true_lang-o25J0qT9.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-8ZN0fevK.js";import"./IconPicker-OpkHdX1e.js";import"./useForm-YNKevIZ4.js";import"./useValidator-Ay8Mdyux.js";/* empty css                */const ot=C({__name:"ExampleAdd",setup(u){const{emit:n}=V(),{push:o,go:l}=w(),{t:r}=y(),i=_(),m=_(!1),s=()=>d(this,null,function*(){const t=a(i),e=yield t==null?void 0:t.submit();e&&(m.value=!0,(yield b(e).catch(()=>{}).finally(()=>{m.value=!1}))&&(n("getList","add"),o("/example/example-page")))});return(t,e)=>{const f=D("BaseButton");return R(),$(a(k),{title:a(r)("exampleDemo.add"),onBack:e[1]||(e[1]=B=>a(o)("/example/example-page"))},{header:p(()=>[c(f,{onClick:e[0]||(e[0]=B=>a(l)(-1))},{default:p(()=>[x(v(a(r)("common.back")),1)]),_:1}),c(f,{type:"primary",loading:m.value,onClick:s},{default:p(()=>[x(v(a(r)("exampleDemo.save")),1)]),_:1},8,["loading"])]),default:p(()=>[c(g,{ref_key:"writeRef",ref:i},null,512)]),_:1},8,["title"])}}});export{ot as default};
