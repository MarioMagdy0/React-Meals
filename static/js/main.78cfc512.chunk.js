(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3UgXp",control:"Checkout_control__l4Z-q",actions:"Checkout_actions__3okkz",submit:"Checkout_submit__1a05G",invalid:"Checkout_invalid__1B9mb"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2vJ-N",total:"Cart_total__XNlQc",actions:"Cart_actions__1baKX","button--alt":"Cart_button--alt__abHKv",button:"Cart_button__IPfJ5"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__jRqEt",summary:"CartItem_summary__3Vub8",price:"CartItem_price__1kvYC",amount:"CartItem_amount__34Qx-",actions:"CartItem_actions__fDs50"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1T_EE",icon:"HeaderCartButton_icon__641d9",badge:"HeaderCartButton_badge__3J7oH",bump:"HeaderCartButton_bump__3L70b"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2NQB-",modal:"Modal_modal__RIUGC","slide-down":"Modal_slide-down__3C4H7"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__iHIYA","meals-appear":"AvailableMeals_meals-appear__RCrL6",MealsLoading:"AvailableMeals_MealsLoading__2Uxjv",MealsError:"AvailableMeals_MealsError__13d0f"}},function(e,t,n){e.exports={meal:"MealItem_meal__3MjKq",description:"MealItem_description__3MB5m",price:"MealItem_price__rCvGT"}},function(e,t,n){e.exports={header:"Header_header__2rp0q","main-image":"Header_main-image__1a9FI"}},,,,function(e,t,n){e.exports={card:"Card_card__2sOmu"}},function(e,t,n){e.exports={input:"Input_input__ACcTq"}},function(e,t,n){e.exports={form:"MealItemForm_form__2t2bG"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2al5a"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),r=(n(31),n(2)),s=n(1),i=n.n(s),o=n(6),l=n(12),u=n(4),d=n(13),j=n.n(d),m=n(10),b=n.n(m),O=n(0),x=function(e){return Object(O.jsx)("div",{className:j.a.backdrop,onClick:e.onClose})},h=function(e){return Object(O.jsx)("div",{className:j.a.modal,children:Object(O.jsx)("div",{className:j.a.content,children:e.children})})},p=document.getElementById("overlays"),f=function(e){return Object(O.jsxs)(O.Fragment,{children:[b.a.createPortal(Object(O.jsx)(x,{onClose:e.onClose}),p),b.a.createPortal(Object(O.jsx)(h,{children:e.children}),p)]})},_=n(5),v=n.n(_),C=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),N=n(7),y=n.n(N),g=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:y.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:y.a.summary,children:[Object(O.jsx)("span",{className:y.a.price,children:t}),Object(O.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:y.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},A=n(3),k=n.n(A),I=function(e){return""===e.trim()},M=function(e){var t=Object(s.useState)({name:!0,city:!0,postalCode:!0,street:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d="".concat(k.a.control," ").concat(a.name?"":k.a.invalid),j="".concat(k.a.control," ").concat(a.street?"":k.a.invalid),m="".concat(k.a.control," ").concat(a.city?"":k.a.invalid),b="".concat(k.a.control," ").concat(a.postalCode?"":k.a.invalid);return Object(O.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,d=!I(n),j=!I(a),m=!I(s),b=5===r.trim().length;c({name:d,city:m,street:j,postalCode:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(O.jsxs)("div",{className:d,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(O.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(O.jsx)("p",{children:"Please enter a valid name!"})]}),Object(O.jsxs)("div",{className:j,children:[Object(O.jsx)("label",{htmlFor:"street",children:"Street"}),Object(O.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(O.jsx)("p",{children:"Please enter a valid street!"})]}),Object(O.jsxs)("div",{className:b,children:[Object(O.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(O.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(O.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(O.jsxs)("div",{className:m,children:[Object(O.jsx)("label",{htmlFor:"city",children:"City"}),Object(O.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(O.jsx)("p",{children:"Please enter a valid city!"})]}),Object(O.jsxs)("div",{className:k.a.actions,children:[Object(O.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(O.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},w=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!1),d=Object(r.a)(i,2),j=d[0],m=d[1],b=Object(s.useState)(!1),x=Object(r.a)(b,2),h=x[0],p=x[1],_=Object(s.useContext)(C),N="".concat(_.totalAmount.toFixed(2)),y=_.items.length>0,A=function(e){_.removeItem(e)},k=function(e){_.addItem(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},I=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://meals-app-17db9-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:_.items})});case 3:m(!1),p(!0),_.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(O.jsx)("ul",{className:v.a["cart-items"],children:_.items.map((function(e){return Object(O.jsx)(g,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:k.bind(null,e)},e.id)}))}),S=Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{className:v.a["button--alt"],onClick:e.onClose,children:"Close"}),y&&Object(O.jsx)("button",{className:v.a.button,onClick:function(){c(!0)},children:"Order"})]}),R=Object(O.jsxs)(O.Fragment,{children:[w,Object(O.jsxs)("div",{className:v.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsx)("span",{children:N})]}),a&&Object(O.jsx)(M,{onConfirm:I,onCancel:e.onClose}),!a&&S]}),E=Object(O.jsx)("p",{children:"Sending oreder data..."}),F=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Successfully sent the order!"}),Object(O.jsx)("div",{className:v.a.actions,children:Object(O.jsx)("button",{className:v.a.button,onClick:e.onClose,children:"Close"})})]});return Object(O.jsxs)(f,{onClose:e.onClose,children:[!j&&!h&&R,j&&E,!j&&h&&F]})},S=n.p+"static/media/meals.2971f633.jpg",R=n(16),E=n.n(R),F=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},H=n(9),P=n.n(H),B=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(C).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(P.a.button," ").concat(a?P.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(O.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(O.jsx)("span",{className:P.a.icon,children:Object(O.jsx)(F,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:P.a.badge,children:o})]})},T=function(e){return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsxs)("header",{className:E.a.header,children:[Object(O.jsx)("h1",{children:"ReactMeals"}),Object(O.jsx)(B,{onClick:e.onShowCart})]}),Object(O.jsx)("div",{className:E.a["main-image"],children:Object(O.jsx)("img",{src:S,alt:"A table full of delicious food!"})})]})},D=n(20),L=n.n(D),q=function(e){return Object(O.jsx)("div",{className:L.a.card,children:e.children})},J=n(14),Y=n.n(J),z=n(15),G=n.n(z),V=n(21),K=n.n(V),Q=i.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:K.a.input,children:[Object(O.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(u.a)({ref:t},e.input))]})})),U=n(22),X=n.n(U),$=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(O.jsxs)("form",{className:X.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(O.jsx)(Q,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(O.jsx)("button",{children:"+ Add"}),!a&&Object(O.jsx)("p",{children:"Please enter a valid number (1-5)."})]})},Z=function(e){var t=Object(s.useContext)(C),n="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:G.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:G.a.description,children:e.description}),Object(O.jsx)("div",{className:G.a.price,children:n})]}),Object(O.jsx)("div",{children:Object(O.jsx)($,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},W=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),u=i[0],d=i[1],j=Object(s.useState)(),m=Object(r.a)(j,2),b=m[0],x=m[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,c,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://meals-app-17db9-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),x(e.message)}))}),[]),u)return Object(O.jsx)("section",{className:Y.a.MealsLoading,children:Object(O.jsx)("p",{children:"Loading..."})});if(b)return Object(O.jsx)("section",{className:Y.a.MealsError,children:Object(O.jsx)("p",{children:b})});var h=n.map((function(e){return Object(O.jsx)(Z,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(O.jsx)("section",{className:Y.a.meals,children:Object(O.jsx)(q,{children:Object(O.jsx)("ul",{children:h})})})},ee=n(23),te=n.n(ee),ne=function(){return Object(O.jsxs)("section",{className:te.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ae=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ne,{}),Object(O.jsx)(W,{})]})},ce=n(17),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(u.a)(Object(u.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(u.a)(Object(u.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=j}return{items:i,totalAmount:d}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(O.jsx)(C.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)(ie,{children:[n&&Object(O.jsx)(w,{onClose:function(){a(!1)}}),Object(O.jsx)(T,{onShowCart:function(){a(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(ae,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.78cfc512.chunk.js.map