var Q=Object.defineProperty;var U=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var q=(i,n,r)=>n in i?Q(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,F=(i,n)=>{for(var r in n||(n={}))Y.call(n,r)&&q(i,r,n[r]);if(U)for(var r of U(n))Z.call(n,r)&&q(i,r,n[r]);return i};var v=(i,n,r)=>new Promise((y,D)=>{var C=m=>{try{b(r.next(m))}catch(d){D(d)}},P=m=>{try{b(r.throw(m))}catch(d){D(d)}},b=m=>m.done?y(m.value):Promise.resolve(m.value).then(C,P);b((r=r.apply(i,n)).next())});import{_ as ee}from"./ContentWrap.vue_vue_type_script_setup_true_lang-gw4AIzEh.js";import{_ as te}from"./Search.vue_vue_type_script_setup_true_lang-cXVlXnkF.js";import{_ as ae}from"./Dialog.vue_vue_type_style_index_0_lang-67BO-xFO.js";import{i as p,c as le}from"./index-vIJQlKXh.js";/* empty css               */import{_ as oe}from"./Table.vue_vue_type_script_lang-bz7heZFD.js";import{g as re,a as se,d as ne,s as ie}from"./index-xfMp2bQJ.js";import{u as me}from"./useTable-WNCemngM.js";import{_ as ue}from"./Write.vue_vue_type_script_setup_true_lang-nZ5oewUe.js";import{_ as de}from"./Detail.vue_vue_type_script_setup_true_lang-7hwnQ-LJ.js";import{u as pe}from"./useCrudSchemas-Wb0jYVCT.js";import{y as J}from"./element-plus--p0OFoYR.js";import{l as ce,a as u,J as fe,O as o,P as c,u as a,m as w,p as ge,R as f,q as ve,V as x,W as k,B as K,S as T,X as $,y as be}from"./vue-chunks-zxmGq976.js";/* empty css                *//* empty css                  */import"./Form-Y4uO6fbb.js";/* empty css               *//* empty css                    */import"./el-radio-button-QmBXs8ZR.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-vnX-6xhq.js";import"./style.css_vue_type_style_index_0_src_true_lang-o25J0qT9.js";import"./wang-editor-Ei5P05uq.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-8ZN0fevK.js";import"./IconPicker-OpkHdX1e.js";import"./useForm-YNKevIZ4.js";import"./useIcon-_eonvDxq.js";/* empty css                        *//* empty css                         *//* empty css                  */import"./index-ZaTVt7tI.js";import"./useValidator-Ay8Mdyux.js";import"./Descriptions-3r2bJ1hh.js";import"./tree-sBP3NezW.js";const he={class:"mb-10px"};function z(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!be(i)}const ot=ce({__name:"Department",setup(i){const n=u([]),{tableRegister:r,tableState:y,tableMethods:D}=me({fetchDataApi:()=>v(this,null,function*(){const{currentPage:e,pageSize:t}=y,s=yield se(F({pageIndex:a(e),pageSize:a(t)},a(L)));return{list:s.data.list,total:s.data.total}}),fetchDelApi:()=>v(this,null,function*(){return!!(yield ne(a(n)))})}),{loading:C,dataList:P,total:b,currentPage:m,pageSize:d}=y,{getList:B,getElTableExpose:M,delList:W}=D,L=u({}),j=e=>{L.value=e,B()},{t:l}=le(),X=fe([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:l("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"id",label:l("userDemo.departmentName"),table:{slots:{default:e=>o(c,null,[e.row.departmentName])}},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:()=>v(this,null,function*(){return(yield re()).data.list})},detail:{slots:{default:e=>o(c,null,[e.departmentName])}}},{field:"status",label:l("userDemo.status"),search:{hidden:!0},table:{slots:{default:e=>{const t=e.row.status;return o(c,null,[o(J,{type:t===0?"danger":"success"},{default:()=>[l(t===1?"userDemo.enable":"userDemo.disable")]})])}}},form:{component:"Select",componentProps:{options:[{value:0,label:l("userDemo.disable")},{value:1,label:l("userDemo.enable")}]}},detail:{slots:{default:e=>o(c,null,[o(J,{type:e.status===0?"danger":"success"},{default:()=>[e.status===1?l("userDemo.enable"):l("userDemo.disable")]})])}}},{field:"createTime",label:l("tableDemo.displayTime"),search:{hidden:!0},form:{hidden:!0}},{field:"remark",label:l("userDemo.remark"),search:{hidden:!0},form:{component:"Input",componentProps:{type:"textarea",rows:5},colProps:{span:24}},detail:{slots:{default:e=>o(c,null,[e.remark])}}},{field:"action",width:"260px",label:l("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let t,s,N;return o(c,null,[o(p,{type:"primary",onClick:()=>I(e.row,"edit")},z(t=l("exampleDemo.edit"))?t:{default:()=>[t]}),o(p,{type:"success",onClick:()=>I(e.row,"detail")},z(s=l("exampleDemo.detail"))?s:{default:()=>[s]}),o(p,{type:"danger",onClick:()=>E(e.row)},z(N=l("exampleDemo.del"))?N:{default:()=>[N]})])}}}}]),{allSchemas:_}=pe(X),g=u(!1),R=u(""),S=u(null),h=u(""),G=()=>{R.value=l("exampleDemo.add"),S.value=null,g.value=!0,h.value=""},V=u(!1),E=e=>v(this,null,function*(){const t=yield M();n.value=e?[e.id]:(t==null?void 0:t.getSelectionRows().map(s=>s.id))||[],V.value=!0,yield W(a(n).length).finally(()=>{V.value=!1})}),I=(e,t)=>{R.value=l(t==="edit"?"exampleDemo.edit":"exampleDemo.detail"),h.value=t,S.value=e,g.value=!0},O=u(),A=u(!1),H=()=>v(this,null,function*(){const e=a(O),t=yield e==null?void 0:e.submit();t&&(A.value=!0,(yield ie(t).catch(()=>{}).finally(()=>{A.value=!1}))&&(g.value=!1,m.value=1,B()))});return(e,t)=>(w(),ge(c,null,[o(a(ee),null,{default:f(()=>[o(a(te),{schema:a(_).searchSchema,onSearch:j,onReset:j},null,8,["schema"]),ve("div",he,[o(a(p),{type:"primary",onClick:G},{default:f(()=>[x(k(a(l)("exampleDemo.add")),1)]),_:1}),o(a(p),{loading:V.value,type:"danger",onClick:t[0]||(t[0]=s=>E(null))},{default:f(()=>[x(k(a(l)("exampleDemo.del")),1)]),_:1},8,["loading"])]),o(a(oe),{pageSize:a(d),"onUpdate:pageSize":t[1]||(t[1]=s=>K(d)?d.value=s:null),currentPage:a(m),"onUpdate:currentPage":t[2]||(t[2]=s=>K(m)?m.value=s:null),columns:a(_).tableColumns,data:a(P),loading:a(C),pagination:{total:a(b)},onRegister:a(r)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1}),o(a(ae),{modelValue:g.value,"onUpdate:modelValue":t[4]||(t[4]=s=>g.value=s),title:R.value},{footer:f(()=>[h.value!=="detail"?(w(),T(a(p),{key:0,type:"primary",loading:A.value,onClick:H},{default:f(()=>[x(k(a(l)("exampleDemo.save")),1)]),_:1},8,["loading"])):$("",!0),o(a(p),{onClick:t[3]||(t[3]=s=>g.value=!1)},{default:f(()=>[x(k(a(l)("dialogDemo.close")),1)]),_:1})]),default:f(()=>[h.value!=="detail"?(w(),T(ue,{key:0,ref_key:"writeRef",ref:O,"form-schema":a(_).formSchema,"current-row":S.value},null,8,["form-schema","current-row"])):$("",!0),h.value==="detail"?(w(),T(de,{key:1,"detail-schema":a(_).detailSchema,"current-row":S.value},null,8,["detail-schema","current-row"])):$("",!0)]),_:1},8,["modelValue","title"])],64))}});export{ot as default};
