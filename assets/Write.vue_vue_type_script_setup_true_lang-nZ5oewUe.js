var f=(s,m,t)=>new Promise((n,c)=>{var i=e=>{try{a(t.next(e))}catch(o){c(o)}},u=e=>{try{a(t.throw(e))}catch(o){c(o)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,u);a((t=t.apply(s,m)).next())});import{F as g}from"./Form-Y4uO6fbb.js";import{u as w}from"./useForm-YNKevIZ4.js";import{u as _}from"./useValidator-Ay8Mdyux.js";import{l as v,J as x,b as y,m as F,S as R,u as l}from"./vue-chunks-zxmGq976.js";const E=v({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:m}){const{required:t}=_(),n=s,c=x({id:[t()],status:[t()]}),{formRegister:i,formMethods:u}=w(),{setValues:a,getFormData:e,getElFormExpose:o}=u,p=()=>f(this,null,function*(){const r=yield o();if(yield r==null?void 0:r.validate().catch(h=>{}))return yield e()});return y(()=>n.currentRow,r=>{r&&a(r)},{deep:!0,immediate:!0}),m({submit:p}),(r,d)=>(F(),R(l(g),{rules:c,onRegister:l(i),schema:s.formSchema},null,8,["rules","onRegister","schema"]))}});export{E as _};
