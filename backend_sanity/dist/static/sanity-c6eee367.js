import{d as s,E as a,r as m,_ as r,a as l,b as p,c,e as y}from"./desk-eb7b3548-3f23594c.js";const g=s(e=>{const{name:t,title:n,icon:i,...o}=e||{};return{name:"@sanity/vision",tools:[{name:t||"vision",title:n||"Vision",icon:i||a,component:m.lazy(()=>r(()=>import("./SanityVision-8a519187-848d11b4.js"),["static/SanityVision-8a519187-848d11b4.js","static/desk-eb7b3548-3f23594c.js","static/index-a0a7bb59.js"])),options:o,router:l.create("/*")}]}}),d={name:"abouts",title:"Abouts",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"description",title:"Description",type:"string"},{name:"imgUrl",title:"ImgUrl",type:"image",options:{hotspot:!0}}]},u={name:"brands",title:"Brands",type:"document",fields:[{name:"imgUrl",title:"ImgUrl",type:"image",options:{hotspot:!0}},{name:"name",title:"Name",type:"string"}]},f={name:"contact",title:"Contact",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"email",title:"Email",type:"string"},{name:"message",title:"Message",type:"text"}]},k={name:"experiences",title:"Experiences",type:"document",fields:[{name:"year",title:"Year",type:"string"},{name:"works",title:"Works",type:"array",of:[{type:"workExperience"}]}]},E={name:"skills",title:"Skills",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"bgColor",title:"BgColor",type:"string"},{name:"icon",title:"Icon",type:"image",options:{hotspot:!0}}]},T={name:"testimonials",title:"Testimonials",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"company",title:"Company",type:"string"},{name:"imageurl",title:"ImgURL",type:"image",options:{hotspot:!0}},{name:"feedback",title:"Feedback",type:"string"}]},b={name:"workExperience",title:"Work Experience",type:"document",fields:[{name:"name",title:"name",type:"string"},{name:"company",title:"Company",type:"string"},{name:"desc",title:"Desc",type:"string"}]},x={name:"works",title:"Works",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"description",title:"Description",type:"string"},{name:"projectLink",title:"Project Link",type:"string"},{name:"codeLink",title:"Code Link",type:"string"},{name:"imgUrl",title:"ImageUrl",type:"image",options:{hotspot:!0}},{name:"tags",title:"Tags",type:"array",of:[{name:"tag",title:"Tag",type:"string"}]}]},I=[d,u,f,k,E,T,b,x],_=p({name:"default",title:"VincentTam_2023Portfolio",projectId:"7y0rdknn",dataset:"production",plugins:[c(),g()],schema:{types:I}});y(document.getElementById("sanity"),_,!1);