var se=Object.defineProperty,ie=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var X=(s,a,r)=>a in s?se(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,E=(s,a)=>{for(var r in a||(a={}))de.call(a,r)&&X(s,r,a[r]);if(W)for(var r of W(a))me.call(a,r)&&X(s,r,a[r]);return s},G=(s,a)=>ie(s,ne(a));var c=(s,a,r)=>new Promise((D,b)=>{var V=d=>{try{g(r.next(d))}catch(m){b(m)}},A=d=>{try{g(r.throw(d))}catch(m){b(m)}},g=d=>d.done?D(d.value):Promise.resolve(d.value).then(V,A);g((r=r.apply(s,a)).next())});import{_ as H}from"./ContentWrap.vue_vue_type_script_setup_true_lang-gw4AIzEh.js";import{i as p,c as ue}from"./index-vIJQlKXh.js";import{_ as ce}from"./Table.vue_vue_type_script_lang-bz7heZFD.js";/* empty css                *//* empty css                    *//* empty css                   */import{g as Q,b as pe,c as fe,e as ve}from"./index-xfMp2bQJ.js";import{u as he}from"./useTable-WNCemngM.js";import{_ as ge}from"./Search.vue_vue_type_script_setup_true_lang-cXVlXnkF.js";import{_ as _e}from"./Write.vue_vue_type_script_setup_true_lang-jYgd-FcK.js";import{_ as ye}from"./Detail.vue_vue_type_script_setup_true_lang-URDNVJ5g.js";import{_ as De}from"./Dialog.vue_vue_type_style_index_0_lang-67BO-xFO.js";import{g as be}from"./index-3Wt1w8zY.js";import{u as xe}from"./useCrudSchemas-Wb0jYVCT.js";import{x as we,n as ke,ab as Se}from"./element-plus--p0OFoYR.js";import{l as Ce,J as Ne,O as i,P as Ve,a as n,b as Ae,u as e,m as S,p as Re,R as u,q as C,W as h,V as N,B as Y,S as I,X as z,y as Te,n as $e}from"./vue-chunks-zxmGq976.js";/* empty css                *//* empty css                  *//* empty css               *//* empty css                      *//* empty css                        */import"./el-radio-button-QmBXs8ZR.js";/* empty css                         *//* empty css                  */import"./index-ZaTVt7tI.js";import"./Form-Y4uO6fbb.js";/* empty css               *//* empty css                        *//* empty css                    */import"./InputPassword-vnX-6xhq.js";import"./style.css_vue_type_style_index_0_src_true_lang-o25J0qT9.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-8ZN0fevK.js";import"./IconPicker-OpkHdX1e.js";import"./useForm-YNKevIZ4.js";import"./useIcon-_eonvDxq.js";import"./useValidator-Ay8Mdyux.js";import"./Descriptions-3r2bJ1hh.js";import"./tree-sBP3NezW.js";const Le={class:"flex w-100% h-100%"},Pe={class:"flex justify-center items-center"},Ue={class:"flex-1"},Be=["title"],Ee={class:"mb-10px"};function j(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Te(s)}const St=Ce({__name:"User",setup(s){const{t:a}=ue(),{tableRegister:r,tableState:D,tableMethods:b}=he({fetchDataApi:()=>c(this,null,function*(){const{pageSize:o,currentPage:t}=D,l=yield pe(E({id:e(_),pageIndex:e(t),pageSize:e(o)},e(K)));return{list:l.data.list||[],total:l.data.total||0}}),fetchDelApi:()=>c(this,null,function*(){return!!(yield fe(e(P)))})}),{total:V,loading:A,dataList:g,pageSize:d,currentPage:m}=D,{getList:R,getElTableExpose:Z,delList:ee}=b,te=Ne([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:a("userDemo.index"),form:{hidden:!0},search:{hidden:!0},detail:{hidden:!0},table:{type:"index"}},{field:"username",label:a("userDemo.username")},{field:"account",label:a("userDemo.account")},{field:"department.id",label:a("userDemo.department"),detail:{hidden:!0},search:{hidden:!0},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:()=>c(this,null,function*(){return(yield Q()).data.list})},table:{hidden:!0}},{field:"role",label:a("userDemo.role"),search:{hidden:!0},form:{component:"Select",value:[],componentProps:{multiple:!0,collapseTags:!0,maxCollapseTags:1},optionApi:()=>c(this,null,function*(){var t,l;return(l=(t=(yield be()).data)==null?void 0:t.list)==null?void 0:l.map(v=>({label:v.roleName,value:v.id}))})}},{field:"email",label:a("userDemo.email"),form:{component:"Input"},search:{hidden:!0}},{field:"createTime",label:a("userDemo.createTime"),form:{component:"Input"},search:{hidden:!0}},{field:"action",label:a("userDemo.action"),form:{hidden:!0},detail:{hidden:!0},search:{hidden:!0},table:{width:240,slots:{default:o=>{let t,l,v;const B=o.row;return i(Ve,null,[i(p,{type:"primary",onClick:()=>J(B,"edit")},j(t=a("exampleDemo.edit"))?t:{default:()=>[t]}),i(p,{type:"success",onClick:()=>J(B,"detail")},j(l=a("exampleDemo.detail"))?l:{default:()=>[l]}),i(p,{type:"danger",onClick:()=>F(B)},j(v=a("exampleDemo.del"))?v:{default:()=>[v]})])}}}}]),{allSchemas:x}=xe(te),K=n({}),O=o=>{m.value=1,K.value=o,R()},w=n(),_=n(""),q=n([]);c(this,null,function*(){var t,l;const o=yield Q();q.value=o.data.list,_.value=o.data.list[0]&&((t=o.data.list[0])==null?void 0:t.children)&&o.data.list[0].children[0].id||"",yield $e(),(l=e(w))==null||l.setCurrentKey(_.value)});const T=n("");Ae(()=>T.value,o=>{e(w).filter(o)});const ae=o=>{_.value=o.id,m.value=1,R()},le=(o,t)=>o?t.departmentName.includes(o):!0,f=n(!1),$=n(""),k=n(),y=n(""),oe=()=>{$.value=a("exampleDemo.add"),k.value=void 0,f.value=!0,y.value=""},L=n(!1),P=n([]),F=o=>c(this,null,function*(){const t=yield Z();P.value=o?[o.id]:(t==null?void 0:t.getSelectionRows().map(l=>l.id))||[],L.value=!0,yield ee(e(P).length).finally(()=>{L.value=!1})}),J=(o,t)=>{var l;$.value=a(t==="edit"?"exampleDemo.edit":"exampleDemo.detail"),y.value=t,k.value=G(E({},o),{department:((l=e(w))==null?void 0:l.getCurrentNode())||{}}),f.value=!0},M=n(),U=n(!1),re=()=>c(this,null,function*(){const o=e(M),t=yield o==null?void 0:o.submit();if(t){U.value=!0;try{(yield ve(t))&&(m.value=1,R())}catch(l){}finally{U.value=!1,f.value=!1}}});return(o,t)=>(S(),Re("div",Le,[i(e(H),{class:"w-250px"},{default:u(()=>[C("div",Pe,[C("div",Ue,h(e(a)("userDemo.departmentList")),1),i(e(we),{modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=l=>T.value=l),class:"flex-[2]",placeholder:e(a)("userDemo.searchDepartment"),clearable:""},null,8,["modelValue","placeholder"])]),i(e(ke)),i(e(Se),{ref_key:"treeEl",ref:w,data:q.value,"default-expand-all":"","expand-on-click-node":!1,"node-key":"id","current-node-key":_.value,props:{label:"departmentName"},"filter-node-method":le,onCurrentChange:ae},{default:u(({data:l})=>[C("div",{title:l.departmentName,class:"whitespace-nowrap overflow-ellipsis overflow-hidden"},h(l.departmentName),9,Be)]),_:1},8,["data","current-node-key"])]),_:1}),i(e(H),{class:"flex-[3] ml-20px"},{default:u(()=>[i(e(ge),{schema:e(x).searchSchema,onReset:O,onSearch:O},null,8,["schema"]),C("div",Ee,[i(e(p),{type:"primary",onClick:oe},{default:u(()=>[N(h(e(a)("exampleDemo.add")),1)]),_:1}),i(e(p),{loading:L.value,type:"danger",onClick:t[1]||(t[1]=l=>F())},{default:u(()=>[N(h(e(a)("exampleDemo.del")),1)]),_:1},8,["loading"])]),i(e(ce),{"current-page":e(m),"onUpdate:currentPage":t[2]||(t[2]=l=>Y(m)?m.value=l:null),"page-size":e(d),"onUpdate:pageSize":t[3]||(t[3]=l=>Y(d)?d.value=l:null),columns:e(x).tableColumns,data:e(g),loading:e(A),onRegister:e(r),pagination:{total:e(V)}},null,8,["current-page","page-size","columns","data","loading","onRegister","pagination"])]),_:1}),i(e(De),{modelValue:f.value,"onUpdate:modelValue":t[5]||(t[5]=l=>f.value=l),title:$.value},{footer:u(()=>[y.value!=="detail"?(S(),I(e(p),{key:0,type:"primary",loading:U.value,onClick:re},{default:u(()=>[N(h(e(a)("exampleDemo.save")),1)]),_:1},8,["loading"])):z("",!0),i(e(p),{onClick:t[4]||(t[4]=l=>f.value=!1)},{default:u(()=>[N(h(e(a)("dialogDemo.close")),1)]),_:1})]),default:u(()=>[y.value!=="detail"?(S(),I(_e,{key:0,ref_key:"writeRef",ref:M,"form-schema":e(x).formSchema,"current-row":k.value},null,8,["form-schema","current-row"])):z("",!0),y.value==="detail"?(S(),I(ye,{key:1,"detail-schema":e(x).detailSchema,"current-row":k.value},null,8,["detail-schema","current-row"])):z("",!0)]),_:1},8,["modelValue","title"])]))}});export{St as default};
