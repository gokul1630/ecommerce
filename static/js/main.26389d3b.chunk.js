(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{101:function(e,t,r){},103:function(e,t,r){},110:function(e,t,r){},112:function(e,t,r){},131:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(22),s=r.n(n),o=r(2),i=r(15),u=r(20),j=r(26),d=r(84),l=r(149),b=r(150),p=r(152),m=r(151),O=r(147),h=r(148),x=r(76),f="FETCH_PRODUCTS",g="FETCH_PRODUCT",v="ADD_CART_ITEM",y="FETCH_CART_ITEMS",w="UPDATE_QUANTITY",k="DELETE_CART_ITEM",N="SIGN_UP",C="SIGN_IN",S="UPDATE_PROFILE",I="UPLOAD_IMAGE",P=r(54),E=Object(P.b)({name:"ecomm",initialState:{products:[],product:[],cart:[],editUser:!1,progress:0,showModal:!1},reducers:{setProducts:function(e,t){e.products=t.payload},setCartItems:function(e,t){e.cart=t.payload},setProduct:function(e,t){e.product=t.payload},setEditUser:function(e,t){e.editUser=t.payload},setProgress:function(e,t){e.progress=t.payload},setShowModal:function(e,t){e.showModal=t.payload}}}),T=E.actions,U=T.setProducts,D=T.setCartItems,L=T.setProduct,G=T.setEditUser,_=T.setProgress,A=T.setShowModal,q=function(e){return e},B=E.reducer,M=(r(101),r(1)),F=function(){var e=Object(i.c)(q),t=Object(i.b)(),r=Object(a.useRef)();return Object(a.useEffect)((function(){t({type:y}),t({type:f}),r.current=e.cart.reduce((function(e,t){return e+t.price*t.quantity}),0)}),[t,e.cart.length]),Object(M.jsx)("div",{className:"container",children:r.current>=1?Object(M.jsx)(O.a,{children:Object(M.jsxs)(h.a,{children:[Object(M.jsx)(x.a,{xs:{span:12,order:2},md:{span:6,order:1},children:e.cart.map((function(r){return Object(M.jsxs)("div",{className:"cart-page",children:[Object(M.jsx)("div",{className:"cart-img",children:Object(M.jsx)("img",{src:r.imageLink,alt:r.name})}),Object(M.jsxs)("div",{className:"cart-description",children:[Object(M.jsx)(l.a,{variant:"h6",children:r.name}),Object(M.jsxs)(l.a,{color:"secondary",variant:"h5",children:["\u20b9",r.price]}),Object(M.jsxs)(l.a,{variant:"h6",children:["Qty"," ",Object(M.jsx)("select",{value:r.quantity,onChange:function(e){var a=Object(o.a)({},r);a.quantity=e.target.value,t({type:w,data:a}),t({type:y})},children:Object(d.a)(Array(r.stocks).keys()).map((function(e){return Object(M.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(M.jsx)(b.a,{onClick:function(){t({type:k,data:r}),t(D(e.cart.filter((function(e){return e._id!==r._id}))))},children:Object(M.jsx)(m.a,{})})]})]})]},r._id)}))}),Object(M.jsxs)(x.a,{xs:{span:12,order:1},md:{span:6,order:2},children:[Object(M.jsxs)("h4",{children:["Subtotal \u20b9",e.cart.reduce((function(e,t){return e+t.price*t.quantity}),0)]}),Object(M.jsxs)(p.a,{variant:"contained",color:"primary",className:"cart-btn",children:["Proceed to Buy (",e.cart.length," items)"]})]})]})}):Object(M.jsx)("h3",{children:"Your Cart Items Are Empty"})})},J=(r(103),r.p+"static/media/spinner.a7a5219e.svg"),R=function(e){return Object(M.jsx)("img",Object(o.a)(Object(o.a)({},e),{},{src:J,alt:""}))};var H=function(e){var t=Object(u.g)(),r=Object(i.b)();return Object(a.useEffect)((function(){localStorage.getItem("user")?(r({type:y}),t.push("/home")):t.push("/login")}),[]),Object(M.jsx)("div",{className:"loader",children:Object(M.jsx)(R,{})})},z=r(153),Y=r(154),K=r(155),Q=r(156),W=r(81),X=r.n(W);r(105);var V=function(e){var t=Object(i.c)(q),r=Object(u.g)();return Object(M.jsx)("div",{style:{marginBottom:"70px"},children:Object(M.jsx)(z.a,{children:Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(l.a,{id:"head-text",onClick:function(){return r.push("/home")},variant:"h6",noWrap:!0,style:{flexGrow:1},children:"WatchCenter"}),Object(M.jsx)(p.a,{color:"inherit",onClick:function(){return r.push("/cart")},children:Object(M.jsx)(K.a,{badgeContent:t.cart.length,color:"secondary",children:Object(M.jsx)(X.a,{})})}),Object(M.jsx)(b.a,{color:"inherit",onClick:function(){return r.push("/user")},children:Object(M.jsx)(Q.a,{})})]})})})},Z=r(28),$=r(159),ee=r(162),te=r(160),re=r(161),ae=function(e){var t=e.pickImage,r=e.uploadProduct,a=e.productData,c=e.setProductData;return Object(M.jsx)("div",{className:"forms",children:Object(M.jsxs)(te.a,{className:"bs-form",onSubmit:r,children:[Object(M.jsx)("h2",{children:"Add New Product"}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Pick Image"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return t(e)},type:"file",accept:"image/x-png,image/jpeg,webp",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Name"}),Object(M.jsx)(te.a.Control,{value:a.name,onChange:function(e){return c(Object(o.a)(Object(o.a)({},a),{},{name:e.target.value}))},type:"text",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Brand"}),Object(M.jsx)(te.a.Control,{value:a.brand,onChange:function(e){return c(Object(o.a)(Object(o.a)({},a),{},{brand:e.target.value}))},type:"text",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Description"}),Object(M.jsx)(te.a.Control,{value:a.description,onChange:function(e){return c(Object(o.a)(Object(o.a)({},a),{},{description:e.target.value}))},type:"text",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Stocks"}),Object(M.jsx)(te.a.Control,{value:a.stocks,onChange:function(e){return c(Object(o.a)(Object(o.a)({},a),{},{stocks:e.target.value}))},type:"number",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Price"}),Object(M.jsx)(te.a.Control,{value:a.price,onChange:function(e){return c(Object(o.a)(Object(o.a)({},a),{},{price:e.target.value}))},type:"number",required:!0})]}),Object(M.jsx)(re.a,{type:"submit",children:"Upload Product"})]})})},ce=function(){var e=Object(i.b)(),t=Object(i.c)(q),r=Object(a.useState)(null),c=Object(Z.a)(r,2),n=c[0],s=c[1],o=Object(a.useState)({name:"",brand:"",description:"",price:0,stocks:1,imageLink:""}),u=Object(Z.a)(o,2),j=u[0],d=u[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)($.a,{backdrop:"static",centered:!0,show:t.showModal,onHide:function(){return e(A(!1))},children:Object(M.jsx)(ee.a,{animated:!0,now:t.progress,label:t.progress})}),Object(M.jsx)(ae,{pickImage:function(e){var t=new FileReader,r=e.target.files[0];r?(t.onload=function(){2===t.readyState&&s(r)},t.readAsDataURL(e.target.files[0])):s(null)},uploadProduct:function(t){t.preventDefault(),e({type:I,image:n,productData:j,dispatch:e})},productData:j,setProductData:d})]})},ne=r(157),se=r(158);r(110);var oe=function(){var e=Object(i.c)(q);return Object(M.jsx)("div",{className:"products",children:e?e.products.map((function(e){return Object(M.jsxs)(ne.a,{className:"home-product",children:[Object(M.jsx)(se.a,{}),Object(M.jsx)(j.b,{className:"link",to:"/product/".concat(e._id),children:Object(M.jsx)("img",{className:"img",src:e.imageLink,alt:e.name})}),Object(M.jsx)("h5",{children:Object(M.jsx)(j.b,{className:"link",to:"/product/".concat(e._id),children:e.name})}),Object(M.jsx)("p",{children:e.brand}),Object(M.jsxs)("h5",{children:["\u20b9",e.price]})]},e._id)})):Object(M.jsx)(M.Fragment,{})})};var ie=function(e){var t=Object(i.b)();return Object(a.useEffect)((function(){t({type:f}),t({type:y})}),[t]),Object(M.jsx)(oe,{})},ue=r(10),je=r.n(ue),de=r(41);r(67);var le=function(e){var t=e.user,r=e.setUser,a=e.submit;return Object(M.jsx)("div",{className:"forms",children:Object(M.jsxs)(te.a,{className:"bs-form",onSubmit:a,children:[Object(M.jsx)("h2",{children:"Sign In"}),Object(M.jsxs)(te.a.Group,{className:"mb-1",controlId:"formBasicEmail",children:[Object(M.jsx)(te.a.Label,{children:"Email address"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{email:e.target.value}))},type:"email",placeholder:"Enter email",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(M.jsx)(te.a.Label,{children:"Password"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{password:e.target.value}))},type:"password",placeholder:"Password",required:!0})]}),Object(M.jsx)(re.a,{variant:"primary",type:"submit",children:"Log In"}),Object(M.jsxs)("p",{children:["Don't have an account?"," ",Object(M.jsx)(j.b,{className:"signup-link",to:"/signup",children:"Sign up"})]})]})})};var be=function(e){var t=Object(a.useState)({email:"",password:""}),r=Object(Z.a)(t,2),c=r[0],n=r[1],s=Object(u.g)(),o=Object(i.b)(),j=function(){var e=Object(de.a)(je.a.mark((function e(t){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o({type:C,user:c,history:s});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(le,{user:c,setUser:n,submit:j})};r(112);var pe=function(){var e=Object(i.c)(q),t=Object(i.b)(),r=Object(u.g)();return Object(M.jsx)(M.Fragment,{children:e.product.map((function(e){return Object(M.jsxs)("div",{className:"details",children:[Object(M.jsx)("div",{className:"details-img",children:Object(M.jsx)("img",{alt:e.name,src:e.imageLink})}),Object(M.jsxs)("div",{className:"products-description",children:[Object(M.jsx)(l.a,{className:"product-name",children:e.name}),Object(M.jsx)(l.a,{variant:"h6",className:"product-brand",children:e.brand}),Object(M.jsxs)(l.a,{className:"product-price",children:["\u20b9",e.price]}),Object(M.jsx)(p.a,{className:"product-btn",variant:"contained",color:"primary",onClick:function(){t({type:v,item:e,history:r})},children:"Add To Cart"}),Object(M.jsxs)(l.a,{className:"description",children:[Object(M.jsx)("span",{children:"Description:"})," ",e.description]})]})]},e._id)}))})};var me=function(e){var t=e.match.params.id,r=Object(i.b)();return Object(a.useEffect)((function(){return r({type:g,productId:t}),r({type:y}),function(){return r(L([]))}}),[r,t]),Object(M.jsx)(pe,{})};var Oe=function(e){var t=e.user,r=e.setUser,a=e.submit;return Object(M.jsx)("div",{className:"forms",children:Object(M.jsxs)(te.a,{className:"bs-form",onSubmit:a,children:[Object(M.jsx)("h2",{children:"Sign Up"}),Object(M.jsxs)(te.a.Group,{className:"mb-1",controlId:"formUserName",children:[Object(M.jsx)(te.a.Label,{children:"Name"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{name:e.target.value}))},type:"text",placeholder:"Enter Name",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",controlId:"formBasicEmail",children:[Object(M.jsx)(te.a.Label,{children:"Email address"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{email:e.target.value}))},type:"email",placeholder:"Enter email",required:!0})]}),Object(M.jsxs)(te.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(M.jsx)(te.a.Label,{children:"Password"}),Object(M.jsx)(te.a.Control,{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{password:e.target.value}))},type:"password",placeholder:"Password",required:!0})]}),Object(M.jsx)(re.a,{variant:"primary",type:"submit",children:"Sign Up"}),Object(M.jsxs)("p",{children:["Already have an account?"," ",Object(M.jsx)(j.b,{className:"signup-link",to:"/login",children:"Sign in"})]})]})})};var he=function(e){var t=Object(a.useState)({name:"",email:"",password:""}),r=Object(Z.a)(t,2),c=r[0],n=r[1],s=Object(i.b)(),o=Object(u.g)(),j=function(){var e=Object(de.a)(je.a.mark((function e(t){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s({type:N,user:c,history:o});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(Oe,{user:c,setUser:n,submit:j})},xe=function(e){var t=e.user,r=e.setUser,a=e.edit,c=e.dispatch,n=e.submit,s=Object(u.g)();return Object(M.jsx)("div",{className:"forms",children:Object(M.jsxs)(te.a,{className:"bs-form",onSubmit:n,children:[a?null:Object(M.jsxs)("h2",{children:["Hello ",t.user]}),Object(M.jsxs)(te.a.Group,{className:"mb-1",children:[Object(M.jsx)(te.a.Label,{children:"Name"}),Object(M.jsx)(te.a.Control,{value:t.user||"",onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{user:e.target.value}))},type:"text",placeholder:"Enter Name",required:!0,readOnly:!a})]}),Object(M.jsxs)(te.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(M.jsx)(te.a.Label,{children:"Email"}),Object(M.jsx)(te.a.Control,{value:t.email||"",onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{email:e.target.value}))},type:"email",placeholder:"Enter Email",required:!0,readOnly:!a})]}),a?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(te.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(M.jsx)(te.a.Label,{children:"Password"}),Object(M.jsx)(te.a.Control,{value:t.password,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{password:e.target.value}))},type:"password",placeholder:"Enter Password",required:!0})]}),Object(M.jsx)(re.a,{variant:"primary",type:"submit",children:"Submit"})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(re.a,{variant:"primary",onClick:function(e){return c(G(!0))},children:"Edit Profile"}),Object(M.jsx)(re.a,{variant:"primary",onClick:function(e){localStorage.clear(),s.push("/")},children:"Logout"}),Object(M.jsx)(re.a,{variant:"primary",onClick:function(e){s.push("/dashboard")},children:"Go To DashBoard"})]})]})})},fe=function(){var e=Object(a.useState)({user:"",email:"",password:""}),t=Object(Z.a)(e,2),r=t[0],c=t[1],n=Object(i.b)(),s=Object(i.c)(q);return Object(a.useEffect)((function(){var e=localStorage.getItem("user"),t=JSON.parse(e);c({user:t.user,email:t.email})}),[]),Object(M.jsx)(xe,{user:r,setUser:c,edit:s.editUser,dispatch:n,submit:function(e){e.preventDefault(),n({type:S,user:r})}})},ge=r(85),ve=r(14),ye=r(63),we=(r(133),ye.a.initializeApp({apiKey:"AIzaSyAGv4TMxYm8DB860XoN5SBp2OEiIsnHTJk",authDomain:"web-demo-1646e.firebaseapp.com",projectId:"web-demo-1646e",storageBucket:"web-demo-1646e.appspot.com",messagingSenderId:"275301593254",appId:"1:275301593254:web:3ab3900d1633275f210467"}),ye.a.storage()),ke=r(83),Ne=r.n(ke),Ce=function(){var e=Object(de.a)(je.a.mark((function e(t,r){var a,c,n,s,i,u;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},r),c=localStorage.getItem("token"),n=JSON.parse(c),s={"Content-Type":"application/json"},n&&(s.Authorization="Bearer ".concat(n)),(i=Object(o.a)(Object(o.a)({},a),{},{headers:s})).url="".concat("https://ecom-backend-app.herokuapp.com").concat(t),e.next=9,Ne()(i);case 9:if("OK"!==(u=e.sent).statusText){e.next=14;break}return e.abrupt("return",Promise.resolve(u.data));case 14:return e.abrupt("return",Promise.reject(u));case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Se=je.a.mark(Fe),Ie=je.a.mark(Je),Pe=je.a.mark(Re),Ee=je.a.mark(He),Te=je.a.mark(ze),Ue=je.a.mark(Ye),De=je.a.mark(Ke),Le=je.a.mark(Qe),Ge=je.a.mark(We),_e=je.a.mark(Xe),Ae=je.a.mark(Ve),qe=je.a.mark(Ze),Be=je.a.mark($e),Me=je.a.mark(tt);function Fe(){var e,t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={url:"/product/getProducts",configs:{method:"GET"}},r.next=3,Object(ve.b)(et,e);case 3:return t=r.sent,r.next=6,Object(ve.c)(U(t));case 6:case"end":return r.stop()}}),Se)}function Je(e){var t,r;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={url:"/product/getProducts",configs:{method:"GET",params:{_id:e.productId}}},a.next=3,Object(ve.b)(et,t);case 3:return r=a.sent,a.next=6,Object(ve.c)(L(r));case 6:case"end":return a.stop()}}),Ie)}function Re(){var e,t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={url:"/cart/getItems",configs:{method:"GET"}},r.next=3,Object(ve.b)(et,e);case 3:return t=r.sent,r.next=6,Object(ve.c)(D(t));case 6:case"end":return r.stop()}}),Pe)}function He(e){var t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"/cart/addNewItem",configs:{method:"POST",data:e.item}},r.prev=1,r.next=4,Object(ve.b)(et,t);case 4:if(!r.sent){r.next=10;break}return r.next=8,Object(ve.c)({type:y});case 8:return r.next=10,Object(ve.b)(e.history.push,"/cart");case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,alert(r.t0.response.data.message);case 16:case"end":return r.stop()}}),Ee,null,[[1,12]])}function ze(e){var t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"/cart/updateCartItem",configs:{method:"PATCH",data:e.data}},r.next=3,Object(ve.b)(et,t);case 3:case"end":return r.stop()}}),Te)}function Ye(e){var t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={url:"/cart/deleteCartItem",configs:{method:"DELETE",data:e.data}},r.next=3,Object(ve.b)(et,t);case 3:case"end":return r.stop()}}),Ue)}function Ke(e){var t,r;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={url:"/user/loginUser",configs:{method:"POST",data:{email:e.user.email,password:e.user.password}}},a.prev=1,a.next=4,Object(ve.b)(et,t);case 4:return r=a.sent,localStorage.setItem("user",JSON.stringify(r.user)),localStorage.setItem("token",JSON.stringify(r.token)),a.next=9,Object(ve.b)(e.history.push,"/home");case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,alert(a.t0.response.data.message);case 15:case"end":return a.stop()}}),De,null,[[1,11]])}function Qe(e){var t,r;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={url:"/user/signUpUser",configs:{method:"PUT",data:{user:e.user.name,email:e.user.email,password:e.user.password}}},a.prev=1,a.next=4,Object(ve.b)(et,t);case 4:return r=a.sent,localStorage.setItem("token",JSON.stringify(r.token)),localStorage.setItem("user",JSON.stringify(r.user)),a.next=9,Object(ve.b)(e.history.push,"/home");case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,alert(a.t0.response.data.message);case 15:case"end":return a.stop()}}),Le,null,[[1,11]])}function We(e){var t,r;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={url:"/user/updateUser",configs:{method:"PATCH",data:e.user}},a.prev=1,a.next=4,Object(ve.b)(et,t);case 4:return r=a.sent,localStorage.setItem("token",JSON.stringify(r.token)),localStorage.setItem("user",JSON.stringify(r.user)),a.next=9,Object(ve.c)(G(!1));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,alert(a.t0.response.data.message);case 15:case"end":return a.stop()}}),Ge,null,[[1,11]])}function Xe(e){var t;return je.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e.image){r.next=9;break}return r.next=4,we.ref().child(e.image.name);case 4:t=r.sent,t.put(e.image).on("state_changed",(function(t){var r=Math.round(t.bytesTransferred/t.totalBytes*100);e.dispatch(A(!0)),e.dispatch(_(r))}),(function(e){return console.log(e)}),(function(){t.getDownloadURL().then((function(t){e.productData.imageLink=t,et({url:"/product/addProducts",configs:{method:"PUT",data:e.productData}}),e.dispatch(A(!1)),e.dispatch(_(0))}))})),r.next=10;break;case 9:alert("Please select a image");case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0);case 15:case"end":return r.stop()}}),_e,null,[[0,12]])}function Ve(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.d)(C,Ke);case 2:return e.next=4,Object(ve.d)(N,Qe);case 4:return e.next=6,Object(ve.d)(S,We);case 6:case"end":return e.stop()}}),Ae)}function Ze(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.d)(f,Fe);case 2:return e.next=4,Object(ve.d)(g,Je);case 4:return e.next=6,Object(ve.d)(I,Xe);case 6:case"end":return e.stop()}}),qe)}function $e(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.d)(v,He);case 2:return e.next=4,Object(ve.d)(y,Re);case 4:return e.next=6,Object(ve.d)(w,ze);case 6:return e.next=8,Object(ve.d)(k,Ye);case 8:case"end":return e.stop()}}),Be)}function et(e){return Ce(e.url,e.configs)}function tt(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.a)([Ze(),$e(),Ve()]);case 2:case"end":return e.stop()}}),Me)}var rt=Object(ge.a)(),at=Object(P.a)({reducer:B,middleware:[rt]});rt.run(tt);var ct=function(e){var t=function(e){var t=e.exact,r=e.path,a=e.component;return Object(M.jsx)(u.b,{exact:t,path:r,render:function(e){return localStorage.getItem("user")?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(V,{}),Object(M.jsx)(a,Object(o.a)({},e))]}):Object(M.jsx)(u.a,{to:"/login"})}})};return Object(M.jsx)(j.a,{basename:"/",children:Object(M.jsx)(i.a,{store:at,children:Object(M.jsxs)(u.d,{children:[Object(M.jsx)(u.b,{exact:!0,path:"/",component:H}),Object(M.jsx)(u.b,{path:"/login",component:be}),Object(M.jsx)(u.b,{path:"/signup",component:he}),Object(M.jsx)(t,{path:"/home",component:ie}),Object(M.jsx)(t,{exact:!0,path:"/product/:id",component:me}),Object(M.jsx)(t,{path:"/cart",component:F}),Object(M.jsx)(t,{path:"/user",component:fe}),Object(M.jsx)(t,{exact:!0,path:"/dashboard",component:ce})]})})})};s.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(ct,{})}),document.getElementById("root"))},67:function(e,t,r){}},[[131,1,2]]]);
//# sourceMappingURL=main.26389d3b.chunk.js.map