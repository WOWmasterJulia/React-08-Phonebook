"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{1006:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var a=t(2791),r=t(9434),c=t(5984),o={contactForm:"ContactForm_contactForm__y0Rca",labelForm:"ContactForm_labelForm__DEnf8",labelInput:"ContactForm_labelInput__Qk4qS",btnForm:"ContactForm_btnForm__cx8-v"},s=t(2561),l=t(6916),m=function(e){return e.contacts.items},i=function(e){return e.filter},u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},_=(0,l.P1)([m,i],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),h=t(5705),b=t(6727),f=t(184),x=(0,c.x0)(),p=(0,c.x0)(),F=b.Ry().shape({name:b.Z_().min(3).max(30).required(),number:b.Z_().min(6).max(15).required()}),j={name:"",number:""},C=function(){var e=(0,r.I0)(),n=(0,r.v9)(m);return(0,f.jsx)(h.J9,{initialValues:j,validationSchema:F,onSubmit:function(t,a){var r=a.resetForm;n.some((function(e){return e.name===t.name}))?alert("This contact has already been added."):(e((0,s.uK)(t)),r())},children:(0,f.jsxs)(h.l0,{className:o.contactForm,autoComplete:"off",children:[(0,f.jsx)("label",{htmlFor:x,className:o.labelForm,children:"Name"}),(0,f.jsx)(h.gN,{id:x,className:o.labelInput,type:"text",name:"name",placeholder:"Enter name"}),(0,f.jsx)(h.Bc,{name:"name",className:o.errorMessage}),(0,f.jsx)("label",{htmlFor:p,className:o.labelForm,children:"Number"}),(0,f.jsx)(h.gN,{id:p,className:o.labelInput,type:"tel",name:"number",placeholder:"Enter phone number"}),(0,f.jsx)(h.Bc,{name:"number",className:o.errorMessage}),(0,f.jsx)("button",{className:o.btnForm,type:"submit",children:"Add contact"})]})})},v="ContactItem_list_item__2NJz8",N="ContactItem_delete_btn__g7vZ0",y=function(e){var n=e.id,t=e.name,a=e.number,c=(0,r.I0)();return(0,f.jsxs)("li",{className:v,children:["".concat(t," : ").concat(a),(0,f.jsx)("button",{className:N,type:"button",onClick:function(){return c((0,s.GK)(n))},children:"Delete"})]})},g="ContactList_contacts_list__jhchV",k=function(){var e=(0,r.v9)(_);return(0,f.jsx)("ul",{className:g,children:e.map((function(e){return(0,f.jsx)(y,{id:e.id,name:e.name,number:e.number},e.id)}))})},I="ContactFind_find_label__Od46H",w="ContactFind_wrap_find__fEFTa",L="ContactFind_find_input__sRzmp",q=t(1473),E=function(){var e=(0,r.I0)(),n=(0,r.v9)(i),t=(0,c.x0)();return(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)("label",{className:I,htmlFor:t,children:"Find contacts by name"}),(0,f.jsx)("input",{id:t,className:L,type:"text",name:"find",value:n,placeholder:"Find name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,q.T)(t))}})]})},R="Phonebook_wrap__FGumr";function T(){var e=(0,r.I0)(),n=(0,r.v9)(u),t=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,s.CL)())}),[e]),(0,f.jsxs)("div",{className:R,children:[(0,f.jsx)("h2",{children:"Phonebook"}),(0,f.jsx)(C,{}),(0,f.jsx)("h3",{children:"Contacts"}),(0,f.jsx)(E,{}),n&&!t&&(0,f.jsx)("b",{children:"Request in progress..."}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=6.6ad2cf24.chunk.js.map