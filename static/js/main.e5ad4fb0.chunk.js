(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(15),n(7)),i=n.n(l),u=n(9),s=n(4),E=n(2),m=Object(a.createContext)(),p={memos:{items:[],loading:!1,error:null},removedMemo:{id:0,loading:!1,error:null},editedMemo:{item:{id:0,type:"car",price:0,descriptio:"",totalprice:0},loading:!1,error:null},memoExpended:{item:{},id:0,loading:!1,error:null}};function d(e,t){switch(t.type){case"FETCH_MEMOS_REQUEST":return Object(E.a)({},e,{loading:!0,error:null});case"FETCH_MEMOS_SUCCESS":return{items:t.payload.items,loading:!1,error:null};case"FETCH_MEMOS_FAILURE":return Object(E.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function M(e,t){switch(t.type){case"REMOVE_MEMO_CONFIRM":return{id:t.payload.id,loading:!1,error:null};case"REMOVE_MEMO_CANCEL":return{id:0,loading:!1,error:null};case"REMOVE_MEMO_REQUEST":return Object(E.a)({},e,{loading:!0,error:null});case"REMOVE_MEMO_SUCCESS":return{id:0,loading:!1,error:null};case"REMOVE_MEMO_FAILURE":return Object(E.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function f(e,t){switch(t.type){case"EDIT_MEMO_FIELD_CHANGE":return Object(E.a)({},e,{item:Object(E.a)({},e.item,Object(s.a)({},t.payload.name,t.payload.value))});case"EDIT_MEMO_EXISTING":return{item:Object(E.a)({},t.payload.item),loading:!1,error:null};case"EDIT_MEMO_CANCEL":return{item:{id:0,type:"",totalprice:0,price:0,discription:""},loading:!1,error:null};case"EDIT_MEMO_REQUEST":return Object(E.a)({},e,{loading:!0,error:null});case"EDIT_MEMO_SUCCESS":return{item:{id:0,type:"",totalprice:0,price:0,discription:""},loading:!1,error:null};case"EDIT_MEMO_FAILURE":return Object(E.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function O(e,t){switch(t.type){case"FETCH_MEMOS_REQUEST":case"FETCH_MEMOS_SUCCESS":case"FETCH_MEMOS_FAILURE":return Object(E.a)({},e,{memos:d(e.memos,t)});case"REMOVE_MEMO_CONFIRM":case"REMOVE_MEMO_CANCEL":case"REMOVE_MEMO_REQUEST":case"REMOVE_MEMO_SUCCESS":case"REMOVE_MEMO_FAILURE":return Object(E.a)({},e,{removedMemo:M(e.removedMemo,t)});case"DESCRIPTION_MEMO_GET":return Object(E.a)({},e,{memos:Object(E.a)({},e.memos,{items:e.memos.items.map((function(e){return e.id===t.payload.id?Object(E.a)({},e,{open:!e.open}):Object(E.a)({},e,{open:!1})}))})});case"EDIT_MEMO_FIELD_CHANGE":case"EDIT_MEMO_EXISTING":case"EDIT_MEMO_CANCEL":case"EDIT_MEMO_REQUEST":case"EDIT_MEMO_SUCCESS":case"EDIT_MEMO_FAILURE":return Object(E.a)({},e,{editedMemo:f(e.editedMemo,e.memoExpended)});default:return e}}function _(e){var t=Object(a.useReducer)(O,p),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement(m.Provider,{value:{state:c,dispatch:o}},e.children," ")}var v=n(1),b=n.n(v),y=n(3),h=n(8),C=n.n(h);function S(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:C.a,alt:"",width:"150"}))}var I="https://islomzoda-back-end-app.herokuapp.com/api/memos/";function T(e){return R.apply(this,arguments)}function R(){return(R=Object(y.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,fetch(I);case 4:if((n=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.next=9,n.json();case 9:a=e.sent,t(N(a)),e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(1),t(w(e.t0)),e.t0;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function g(){return{type:"FETCH_MEMOS_REQUEST",payload:{}}}function N(e){return{type:"FETCH_MEMOS_SUCCESS",payload:{items:e}}}function w(e){return{type:"FETCH_MEMOS_FAILURE",payload:{error:e}}}function k(e,t){return x.apply(this,arguments)}function x(){return(x=Object(y.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j()),e.prev=1,e.next=4,fetch("".concat(I).concat(n),{method:"DELETE"});case 4:if(e.sent.ok){e.next=7;break}throw new Error;case 7:t(D()),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),t(U(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function j(){return{type:"REMOVE_MEMO_REQUEST",payload:{}}}function D(){return{type:"REMOVE_MEMO_SUCCESS",payload:{}}}function U(e){return{type:"REMOVE_MEMO_FAILURE",payload:{error:e}}}function F(e,t){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L()),e.prev=1,e.next=4,fetch("".concat(I),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(e.sent.ok){e.next=7;break}throw new Error;case 7:t(V()),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),t(H(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function L(){return{type:"EDIT_MEMO_REQUEST",payload:{}}}function V(){return{type:"EDIT_MEMO_SUCCESS",payload:{}}}function H(e){return{type:"EDIT_MEMO_FAILURE",payload:{error:e}}}function Q(e){var t=e.item,n=Object(a.useContext)(m),c=n.state.removedMemo,o=n.dispatch,l=function(e){e.preventDefault(),o(function(e){return{type:"EDIT_MEMO_EXISTING",payload:{item:e}}}(t))},i=function(e){e.preventDefault(),o({type:"REMOVE_MEMO_CONFIRM",payload:{id:t.id}})},u=function(){var e=Object(y.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,k(o,t.id);case 4:return e.next=6,T(o);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){e.preventDefault(),o({type:"REMOVE_MEMO_CANCEL",payload:{}})};return r.a.createElement("article",{className:"container mt-3"},r.a.createElement("div",{className:"accordion"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"mb-2"},r.a.createElement("button",{className:"btn btn-link",onClick:function(){return o({type:"DESCRIPTION_MEMO_GET",payload:{id:t.id}})},type:"button"},"\u0426\u0435\u043d\u0430:  ",t.price," $, \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:",t.type," "))," ",r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mb-2 bg-light text-dark"}," ",t.open&&r.a.createElement("span",null," ",t.description)))," ")," ")),c.id!==t.id?r.a.createElement("div",null,r.a.createElement("span",{className:"ml-2",onClick:l},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("span",{className:"ml-2",onClick:i},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):c.loading?r.a.createElement(S,null):c.error?r.a.createElement("div",null,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c?",r.a.createElement("span",{onClick:u},"\u0414\u0430"),r.a.createElement("span",{onClick:s},"\u041d\u0435\u0442")):r.a.createElement("div",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?",r.a.createElement("span",{onClick:u},"\u0414\u0430"),r.a.createElement("span",{href:"",onClick:s},"\u041d\u0435\u0442")))}function G(e){var t=e.items;return r.a.createElement("div",null,"\u0418\u0442\u043e\u0433: ",t.reduce((function(e,t){return e+parseInt(t.price,10)}),0))}function P(){var e=Object(a.useContext)(m),t=e.state,n=e.dispatch,c=t.memos,o=c.items,l=c.loading,i=c.error,u=function(){var e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(n);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(n);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[n]);var s=r.a.createElement("div",{className:"container mt-3"},r.a.createElement("p",null,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("button",{className:"btn btn-outline-success",onClick:u},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437"));return r.a.createElement("div",null,l&&r.a.createElement(S,null),o.map((function(e){return r.a.createElement(Q,{key:e.id,item:e})})),i&&s,r.a.createElement(G,{items:o}))}function J(){var e=Object(a.useContext)(m),t=e.state.editedMemo,n=e.dispatch;t.item.totalprice+=parseInt(t.item.price,10);var c=function(){var e=Object(y.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,F(n,t.item);case 4:return e.next=6,T(n);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.name,r=t.value;console.log(a,r),n(function(e,t){return{type:"EDIT_MEMO_FIELD_CHANGE",payload:{name:e,value:t}}}(a,r))};return r.a.createElement("div",{className:"container mt-5"},"   ",r.a.createElement("form",{onSubmit:c,onReset:function(){n({type:"EDIT_MEMO_CANCEL",payload:{}})}},r.a.createElement("select",{className:"form-control",name:"type",onChange:o,value:t.item.type},r.a.createElement("option",{value:"food"},"\u0415\u0434\u0430"),r.a.createElement("option",{value:"travel"},"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f"),r.a.createElement("option",{value:"car"},"\u041c\u0430\u0448\u0438\u043d\u0430"),r.a.createElement("option",{value:"study"},"\u0423\u0447\u0435\u0431\u0430")),r.a.createElement("input",{className:"form-control mt-3",name:"price",type:"number",onChange:o,value:t.item.price}),r.a.createElement("textarea",{className:"form-control mt-3",name:"description",onChange:o,value:t.item.description}),t.loading?r.a.createElement(S,null):t.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("button",{className:"btn btn-outline-info mt-3 ml-3"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement("button",{className:"btn btn-outline-warning mt-3 ml-3",type:"reset"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-outline-success mt-3"},0===t.item.id?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement("button",{className:"btn btn-outline-warning mt-3 ml-3",type:"reset"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))),r.a.createElement("div",null," ",t.item.totalprice," "))}var X=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(_,null,r.a.createElement(J,null),r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){},8:function(e,t,n){e.exports=n.p+"static/media/loader.91931453.gif"}},[[10,1,2]]]);
//# sourceMappingURL=main.e5ad4fb0.chunk.js.map