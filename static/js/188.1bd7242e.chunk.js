"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[188],{5524:function(e,a,s){var l=s(885),n=s(2791),t=s(184);a.Z=function(e){var a=e.labelTitle,s=e.labelStyle,r=e.type,i=e.containerStyle,d=e.defaultValue,c=e.placeholder,o=e.updateFormValue,m=e.updateType,u=(0,n.useState)(d),x=(0,l.Z)(u,2),p=x[0],h=x[1];return(0,t.jsxs)("div",{className:"form-control w-full ".concat(i),children:[(0,t.jsx)("label",{className:"label",children:(0,t.jsx)("span",{className:"label-text text-base-content "+s,children:a})}),(0,t.jsx)("input",{type:r||"text",value:p,placeholder:c||"",onChange:function(e){return a=e.target.value,h(a),void o({updateType:m,value:a});var a},className:"input  input-bordered w-full "})]})}},9697:function(e,a,s){var l=s(184);a.Z=function(e){var a=e.styleClass,s=e.children;return(0,l.jsx)("p",{className:"text-center  text-error ".concat(a),children:s})}},2124:function(e,a,s){var l=s(4623),n=s(184);a.Z=function(){return(0,n.jsx)("div",{className:"hero min-h-full rounded-l-xl bg-base-200",children:(0,n.jsx)("div",{className:"hero-content py-12",children:(0,n.jsxs)("div",{className:"max-w-md",children:[(0,n.jsxs)("h1",{className:"text-3xl text-center font-bold ",children:[(0,n.jsx)("img",{src:"/logo192.png",className:"w-12 inline-block mr-2 mask mask-circle",alt:"dashwind-logo"}),"DashWind"]}),(0,n.jsx)("div",{className:"text-center mt-12",children:(0,n.jsx)("img",{src:"./intro.png",alt:"Dashwind Admin Template",className:"w-48 inline-block"})}),(0,n.jsx)(l.Z,{})]})})})}},4623:function(e,a,s){var l=s(184);a.Z=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"text-2xl mt-8 font-bold",children:"Admin Dashboard Starter Kit"}),(0,l.jsxs)("p",{className:"py-2 mt-4",children:["\u2713 ",(0,l.jsx)("span",{className:"font-semibold",children:"Light/dark"})," mode toggle"]}),(0,l.jsxs)("p",{className:"py-2 ",children:["\u2713 ",(0,l.jsx)("span",{className:"font-semibold",children:"Redux toolkit"})," and other utility libraries configured"]}),(0,l.jsxs)("p",{className:"py-2",children:["\u2713 ",(0,l.jsx)("span",{className:"font-semibold",children:"Calendar, Modal, Sidebar "})," components"]}),(0,l.jsxs)("p",{className:"py-2  ",children:["\u2713 User-friendly ",(0,l.jsx)("span",{className:"font-semibold",children:"documentation"})]}),(0,l.jsxs)("p",{className:"py-2  mb-4",children:["\u2713 ",(0,l.jsx)("span",{className:"font-semibold",children:"Daisy UI"})," components, ",(0,l.jsx)("span",{className:"font-semibold",children:"Tailwind CSS"})," support"]})]})}},5188:function(e,a,s){s.r(a),s.d(a,{default:function(){return x}});var l=s(2791),n=s(4942),t=s(1413),r=s(885),i=s(1087),d=s(2124),c=s(9697),o=s(5524),m=s(184);var u=function(){var e=(0,l.useState)(!1),a=(0,r.Z)(e,2),s=a[0],u=a[1],x=(0,l.useState)(""),p=(0,r.Z)(x,2),h=p[0],j=p[1],f=(0,l.useState)({name:"",password:"",emailId:""}),b=(0,r.Z)(f,2),v=b[0],N=b[1],y=function(e){var a=e.updateType,s=e.value;j(""),N((0,t.Z)((0,t.Z)({},v),{},(0,n.Z)({},a,s)))};return(0,m.jsx)("div",{className:"min-h-screen bg-base-200 flex items-center",children:(0,m.jsx)("div",{className:"card mx-auto w-full max-w-5xl  shadow-xl",children:(0,m.jsxs)("div",{className:"grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl",children:[(0,m.jsx)("div",{className:"",children:(0,m.jsx)(d.Z,{})}),(0,m.jsxs)("div",{className:"py-24 px-10",children:[(0,m.jsx)("h2",{className:"text-2xl font-semibold mb-2 text-center",children:"Register"}),(0,m.jsxs)("form",{onSubmit:function(e){return function(e){return e.preventDefault(),j(""),""===v.name.trim()?j("Name is required! (use any value)"):""===v.emailId.trim()?j("Email Id is required! (use any value)"):""===v.password.trim()?j("Password is required! (use any value)"):(u(!0),localStorage.setItem("token","DumyTokenHere"),u(!1),void(window.location.href="/app/welcome"))}(e)},children:[(0,m.jsxs)("div",{className:"mb-4",children:[(0,m.jsx)(o.Z,{defaultValue:v.name,updateType:"name",containerStyle:"mt-4",labelTitle:"Name",updateFormValue:y}),(0,m.jsx)(o.Z,{defaultValue:v.emailId,updateType:"emailId",containerStyle:"mt-4",labelTitle:"Email Id",updateFormValue:y}),(0,m.jsx)(o.Z,{defaultValue:v.password,type:"password",updateType:"password",containerStyle:"mt-4",labelTitle:"Password",updateFormValue:y})]}),(0,m.jsx)(c.Z,{styleClass:"mt-8",children:h}),(0,m.jsx)("button",{type:"submit",className:"btn mt-2 w-full btn-primary"+(s?" loading":""),children:"Register"}),(0,m.jsxs)("div",{className:"text-center mt-4",children:["Already have an account? ",(0,m.jsx)(i.rU,{to:"/login",children:(0,m.jsx)("span",{className:"  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",children:"Login"})})]})]})]})]})})})};var x=function(){return(0,m.jsx)("div",{className:"",children:(0,m.jsx)(u,{})})}}}]);
//# sourceMappingURL=188.1bd7242e.chunk.js.map