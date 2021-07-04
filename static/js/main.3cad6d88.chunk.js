(this["webpackJsonpform-task"]=this["webpackJsonpform-task"]||[]).push([[0],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(65),r=n.n(o),s=(n(79),n(80),n(4)),c=n(3),l=n(19),p=n(8),d=n(20),u=n(74),m=n(1),b=c.a.div.withConfig({displayName:"InputField__InputGroup",componentId:"sc-azky35-0"})(["margin-bottom:20px;max-width:325px;"]),h=c.a.label.withConfig({displayName:"InputField__Label",componentId:"sc-azky35-1"})(["font-size:14px;font-weight:500;display:block;"]),x=c.a.input.withConfig({displayName:"InputField__Input",componentId:"sc-azky35-2"})(["width:325px;height:40px;border:1px solid #e2e6ea;border-radius:5px;padding:5px 15px;margin-top:3px;font-size:14px;background-color:transparent;transition:all 0.25s ease-in-out;&:focus,&:hover,&:not(:placeholder-shown){outline:none;border:1px solid #3961aa;}&::placeholder{color:#e2e6ea;opacity:1;}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"]),g=c.a.textarea.withConfig({displayName:"InputField__Textarea",componentId:"sc-azky35-3"})(["width:325px;height:75px;padding:10px 15px;margin-top:3px;border:1px solid #e2e6ea;border-radius:5px;font-size:14px;background-color:transparent;transition:all 0.25s ease-in-out;resize:vertical;&:focus,&:hover,&:not(:placeholder-shown){outline:none;border:1px solid #3961aa;}&::placeholder{color:#e2e6ea;opacity:1;}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"]),j=c.a.div.withConfig({displayName:"InputField__Error",componentId:"sc-azky35-4"})(["color:#cf3e35;font-size:12px;font-weight:500;margin-top:2px;"]),f=function(e){var t=e.label,n=e.id,a=e.as,i=Object(u.a)(e,["label","id","as"]),o=Object(l.c)(i),r=Object(s.a)(o,2),c=r[0],p=r[1];return Object(m.jsxs)(b,{children:[Object(m.jsx)(h,{htmlFor:n,children:t}),"input"===a&&Object(m.jsx)(x,Object(d.a)(Object(d.a)({id:n},c),i)),"textarea"===a&&Object(m.jsx)(g,Object(d.a)(Object(d.a)({id:n},c),i)),p.touched&&p.error?Object(m.jsx)(j,{className:"error",children:p.error}):null]})},w=c.a.div.withConfig({displayName:"Message__Wrapper",componentId:"sc-1k2kx6h-0"})(["width:325px;padding:15px 20px;margin-bottom:16px;border-radius:5px;color:white;background:",";"],(function(e){return{error:"#cf3e35",success:"#72be6c"}[e.type]})),y=c.a.h4.withConfig({displayName:"Message__Title",componentId:"sc-1k2kx6h-1"})(["font-size:15px;margin-bottom:3px;"]),O=c.a.p.withConfig({displayName:"Message__MessageText",componentId:"sc-1k2kx6h-2"})(["font-size:14px;"]),k=function(e){var t=e.message,n=t.messageType,a=t.title,i=t.text;return Object(m.jsxs)(w,{type:n,children:[Object(m.jsx)(y,{children:a}),Object(m.jsx)(O,{children:i})]})},I=c.a.div.withConfig({displayName:"Form__Wrapper",componentId:"sc-3w5gcl-0"})(["display:flex;justify-content:space-between;flex-direction:column;max-width:375px;padding:25px;margin:auto;border:1px solid #e2e6ea;"]),_=c.a.h1.withConfig({displayName:"Form__Title",componentId:"sc-3w5gcl-1"})(["color:#000;font-size:32px;margin-bottom:1rem;"]),v=c.a.button.withConfig({displayName:"Form__Button",componentId:"sc-3w5gcl-2"})(["height:40px;width:100%;max-width:325px;border:none;border-radius:5px;color:white;background-color:#3961aa;cursor:pointer;outline:none;&:hover{background-color:#4d6db1;}"]),C={name:"",email:"",phone:"",message:""},z=p.a().shape({email:p.b().email("Invalid email address").when("phone",{is:function(e){return!e||0===e.length},then:p.b().email().required("Please enter your e-mail or phone"),otherwise:p.b()}),phone:p.b().matches(/^[+]?[()/0-9. -]{9,}$/,"Invalid phone number").when("email",{is:function(e){return!e||0===e.length},then:p.b().required("Please enter your e-mail or phone"),otherwise:p.b()}),message:p.b().required("Please enter your message")},[["email","phone"]]);function N(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(null),r=Object(s.a)(o,2),c=r[0],p=r[1],d=Object(a.useState)(!1),u=Object(s.a)(d,2),b=u[0],h=u[1];return Object(m.jsxs)(I,{children:[Object(m.jsx)(_,{children:"Contact Us"}),c&&Object(m.jsx)(k,{message:c}),n?Object(m.jsx)(l.b,{initialValues:C,validationSchema:z,onSubmit:function(e){!function(e){h(!0),setTimeout((function(){h(!1),i(!1),"neexistujici@email.cz"===e.email?p({messageType:"error",title:"Error!",text:"E-mail doesn't exist."}):p({messageType:"success",title:"Thank you!",text:"Your message was sent successfully."})}),3e3)}(e)},children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(f,{label:"Name",id:"name",name:"name",type:"text",placeholder:"Name",as:"input"}),Object(m.jsx)(f,{label:"E-mail",id:"email",name:"email",type:"email",placeholder:"E-mail",as:"input"}),Object(m.jsx)(f,{label:"Phone",id:"phone",name:"phone",type:"text",placeholder:"Phone",as:"input"}),Object(m.jsx)(f,{label:"Message",id:"message",name:"message",placeholder:"Type your message here",as:"textarea"}),Object(m.jsx)(v,{type:"submit",children:b?"Submitting...":"Submit"})]})}):Object(m.jsx)(v,{type:"button",onClick:function(){p(null),i(!0)},children:"Send new message"})]})}var F=function(){return Object(m.jsx)(N,{})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),T()},79:function(e,t,n){},80:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.3cad6d88.chunk.js.map