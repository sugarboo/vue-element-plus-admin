var c=(p,e,i)=>new Promise((l,o)=>{var n=a=>{try{t(i.next(a))}catch(m){o(m)}},r=a=>{try{t(i.throw(a))}catch(m){o(m)}},t=a=>a.done?l(a.value):Promise.resolve(a.value).then(n,r);t((i=i.apply(p,e)).next())});import{_ as u}from"./ContentWrap.vue_vue_type_script_setup_true_lang-gw4AIzEh.js";import{c as f}from"./index-vIJQlKXh.js";import{_}from"./Table.vue_vue_type_script_lang-bz7heZFD.js";import{g as b}from"./index-IUv6DGNd.js";import{l as v,a as d,m as g,S as w,R as D,O as h,u as s}from"./vue-chunks-zxmGq976.js";/* empty css                *//* empty css                  */import"./element-plus--p0OFoYR.js";/* empty css                    *//* empty css               *//* empty css                      *//* empty css                        */import"./el-radio-button-QmBXs8ZR.js";/* empty css                         *//* empty css                  */import"./index-ZaTVt7tI.js";const j=v({__name:"TableVideoPreview",setup(p){const{t:e}=f(),i=[{field:"title",label:e("tableDemo.title")},{field:"video_uri",label:e("tableDemo.videoPreview")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"pageviews",label:e("tableDemo.pageviews")}],l=d(!0);let o=d([]);return(r=>c(this,null,function*(){const t=yield b(r||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{l.value=!1});t&&(o.value=t.data.list)}))(),(r,t)=>(g(),w(s(u),{title:s(e)("router.PicturePreview")},{default:D(()=>[h(s(_),{columns:i,data:s(o),loading:l.value,"video-preview":["image_uri","video_uri"]},null,8,["data","loading"])]),_:1},8,["title"]))}});export{j as default};
