(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),s=n.n(a),c=n(7),i=n.n(c),r=n(2),d=n(3),l=n(5),u=n(4);var h=function(){return Object(o.jsx)("div",{className:"text-center p-5",children:Object(o.jsxs)("h1",{className:"text-info d-flex justify-content-center align-items-center",children:[Object(o.jsx)("i",{class:"fa fa-list fa-2x mr-3","aria-hidden":"true"}),"Todo"]})})},j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(t){t.preventDefault();var n={todo:document.forms[0][0].value,id:10*Math.random()};document.forms[0][0].value="",e.props.addTodo(n)},e.checked=function(e){e.target.parentNode.previousSibling.style.textDecoration="line-through"},e.autoType=function(){var e=document.getElementsByClassName("examples")[0],t=["play ball","work out","take a hike","go to the beach","hangout with friends"],n=0,o=0;function a(){setTimeout((function(){e.innerHTML=t[o].slice(0,n+1),++n>=t[o].length?setTimeout((function(){s()}),1e3):a()}),200)}function s(){setTimeout((function(){e.innerHTML=t[o].slice(0,n-1),--n<=0?(o+1<t.length?o++:o=0,a()):s()}),50)}a()},e.handleClick=function(){setTimeout((function(){e.autoType()}),1e3)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todos.length?this.props.todos.map((function(t){return Object(o.jsxs)("div",{className:"todo border d-flex py-2 px-3",children:[Object(o.jsx)("span",{className:"montserrat text-decoration-cross",children:t.todo}),Object(o.jsxs)("div",{className:"ml-auto",children:[Object(o.jsx)("i",{onClick:e.checked,class:"fa fa-check text-info mr-3","aria-hidden":"true"}),Object(o.jsx)("i",{onClick:function(){e.props.deleteTodo(t.id)},class:"fa fa-trash text-danger","aria-hidden":"true"})]})]},t.id)})):Object(o.jsx)("div",{className:"border p-3 text-center",children:Object(o.jsx)("span",{children:Object(o.jsx)("strong",{children:"You have no todos. Yay!!!"})})});return Object(o.jsxs)("div",{className:"col-lg-6 col-md-9 col-sm-12 m-auto",children:[Object(o.jsx)("div",{className:"overflow-hidden rounded-lg card",children:t}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{className:"add my-4",onSubmit:this.handleSubmit,children:[Object(o.jsx)("input",{type:"text",placeholder:"Add a task",required:!0,minLength:"3"}),Object(o.jsx)("button",{children:Object(o.jsx)("i",{class:"fa fa-plus","aria-hidden":"true"})})]}),Object(o.jsxs)("p",{className:"text-disabled text-center",children:["E.g: ",Object(o.jsx)("span",{className:"examples bold"})]})]}),this.handleClick()]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.addTodo=function(t){var n=e.state.todos.map((function(e){return e}));n.push(t),e.setState({todos:n})},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"app container",children:[Object(o.jsx)(h,{}),Object(o.jsx)(j,{todos:this.state.todos,addTodo:this.addTodo,deleteTodo:this.deleteTodo})]})}}]),n}(a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),s(e),c(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.5bd381d0.chunk.js.map