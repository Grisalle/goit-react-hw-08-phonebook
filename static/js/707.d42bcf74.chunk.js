"use strict";(self.webpackChunkgrisalle_react_hw_08=self.webpackChunkgrisalle_react_hw_08||[]).push([[707],{5707:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r=t(2791),a=t(9434),c=t(1413),u=t(9439),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},i=t(229),s="NOT_FOUND";var l=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?l:r,c=t.maxSize,u=void 0===c?1:c,o=t.resultEqualityCheck,i=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),f=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(i):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return s}return{get:r,put:function(e,a){r(e)===s&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,i);function p(){var e=f.get(arguments);if(e===s){if(e=n.apply(null,arguments),o){var t=f.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var c,u=0,o={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(o=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],m=p(r),h=n.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return c=h.apply(null,n)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:h,dependencies:m,lastResult:function(){return c},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var m=d(f),h=function(n){return n.contacts.contacts.items},v=function(n){return n.contacts.contacts.isLoading},_=function(n){return n.contacts.contacts.error},g=m([h,function(n){return n.contacts.filterInput}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),y="ContactForm_contactForm__y0Rca",x="ContactForm_inputName__a8jFO",j="ContactForm_inputNumber__DBiVZ",C="ContactForm_addBtn__CACuJ",b=t(184),N=function(){var n=(0,r.useState)(""),e=(0,u.Z)(n,2),t=e[0],s=e[1],l=(0,r.useState)(""),f=(0,u.Z)(l,2),p=f[0],d=f[1],m=(0,a.I0)(),v=(0,a.v9)(h);return(0,b.jsxs)("form",{className:y,onSubmit:function(n){n.preventDefault();var e={name:t,phone:p};if(v.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))alert("".concat(t," is already in your contacts"));else{var r=(0,c.Z)((0,c.Z)({},e),{},{id:o()});m((0,i.v6)(r)),s(""),d(""),n.target.lastElementChild.blur()}},children:[(0,b.jsxs)("label",{children:[(0,b.jsx)("p",{children:"Name:"}),(0,b.jsx)("input",{className:x,type:"text",value:t,onChange:function(n){s(n.target.value)},name:"name",maxLength:"16",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("label",{children:[(0,b.jsx)("p",{children:"Number:"}),(0,b.jsx)("input",{className:j,type:"tel",value:p,onChange:function(n){d(n.target.value)},name:"number",maxLength:"13",pattern:"\\+?\\d{1,4}?[.\\-\\s]?\\(?\\d{1,3}?\\)?[.\\-\\s]?\\d{1,4}[.\\-\\s]?\\d{1,4}[.\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})},w="Search_search__Wncrn",A=function(){var n=(0,a.I0)();return(0,b.jsx)("input",{className:w,onChange:function(e){return n((0,i.W1)(e.target.value))}})},k="DeleteButton_deleteBtn__SVXuC",F=function(n){var e=n.userId,t=n.handleDeleteUser;return(0,b.jsx)("button",{className:k,onClick:function(){return t(e)},children:"Delete"})},S="ContactItem_contactItem__akpex",E="ContactItem_userName__UawSK",I=function(n){var e=n.contact,t=(0,a.I0)();return(0,b.jsxs)("li",{className:S,id:e.id,children:[(0,b.jsxs)("p",{children:[(0,b.jsx)("span",{className:E,children:"".concat(e.name,": ")}),"".concat(e.phone)]}),(0,b.jsx)(F,{handleDeleteUser:function(){return t((0,i.in)(e.id))}})]})},L="ContactList_contactList__UFVCg",z=function(){var n=(0,a.v9)(g);return(0,b.jsx)("ul",{className:L,children:n.map((function(n){return(0,b.jsx)(I,{contact:n},n.id)}))})},Z=t(3883),D="App_title__Xrt9W",O="App_contactsTitle__OFmg5",U="App_search__87ewE",q=function(){var n=(0,a.I0)(),e=(0,a.v9)(v),t=(0,a.v9)(_);return(0,r.useEffect)((function(){n((0,i.CL)())}),[n]),(0,b.jsx)("section",{className:"section",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h1",{className:D,children:"Phone book"}),(0,b.jsx)(N,{}),(0,b.jsx)("h2",{className:O,children:"Contacts"}),(0,b.jsx)("p",{className:U,children:"Find contacts by name"}),(0,b.jsx)(A,{}),e&&(0,b.jsx)(Z.a,{}),t&&(0,b.jsxs)("div",{children:["Something went wrong. Error message: ",t]}),(0,b.jsx)(z,{})]})})}}}]);
//# sourceMappingURL=707.d42bcf74.chunk.js.map