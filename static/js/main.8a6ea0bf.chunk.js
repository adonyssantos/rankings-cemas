(this["webpackJsonpranking-cemas"]=this["webpackJsonpranking-cemas"]||[]).push([[0],{431:function(e,n,c){},432:function(e,n,c){"use strict";c.r(n);var t=c(7),a=c.n(t),r=c(128),i=c.n(r),s=c(15);var o=function(e){var n=Object(t.useState)(!0),c=Object(s.a)(n,2),a=c[0],r=c[1],i=Object(t.useState)(!0),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(t.useEffect)((function(){return e.onAuthStateChanged((function(e){u(e||!1),a&&r(!1)}))}),[e,a]),{user:l,initializing:a}},l=c(47);c(134),c(433);l.a.initializeApp({apiKey:"AIzaSyB_WMkXgz1VGadOYztJs7OY30aSEZTuGIg",authDomain:"rankings-cemas.firebaseapp.com",projectId:"rankings-cemas",storageBucket:"rankings-cemas.appspot.com",messagingSenderId:"193263297303",appId:"1:193263297303:web:f285432a75d975d8944d52",measurementId:"G-V17NRJM8LM"});l.a.firestore();var u=new l.a.auth.GoogleAuthProvider,d=c(35),j=c.n(d),b=c(57),h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.a.auth().useDeviceLanguage(),e.prev=1,e.next=4,l.a.auth().signInWithPopup(u);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),p=c(2),O=function(e){var n=e.onClick,c=void 0===n?null:n,t=e.children,a=void 0===t?null:t;return Object(p.jsx)("div",{className:"container_center",children:Object(p.jsxs)("button",{className:"log_in",onClick:c,children:[" ",a," "]})})},x=c(36),f=function(e){var n=e.estudiante;return Object(p.jsxs)("article",{children:[Object(p.jsxs)("h3",{className:"nombre",children:[n.nombre_estudiante,Object(p.jsxs)("span",{className:"numero",children:["#",n.numero_estudiante]})]}),Object(p.jsxs)("div",{className:"datos",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Asignaturas :"})," ",n.asignaturas.map((function(e){return Object(p.jsx)("span",{children:e.codigo_asignatura})}))]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"M\xf3dulos :"})," ",n.modulos.map((function(e){return Object(p.jsxs)("span",{children:[e.codigo_asignatura," "]})}))]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Promedio Ac\xe1demico :"})," ","".concat(n.idx_academico)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Promedio T\xe9cnico :"})," ","".concat(n.idx_tecnico)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Promedio General :"})," ","".concat(n.idx_general)]}),Object(p.jsx)("div",{className:"grado",children:Object(p.jsx)("span",{children:n.curso})})]})]})},g=function(e){var n=0,c=0;return e?(e.forEach((function(e,t){n+=parseFloat(e.cf),c=t})),n/(c+1)):0},v=function(e,n){return e&&n?(n+e)/2:e&&!n?e:0},N=function(e,n){var c=0,t=0;switch(n[0]){case"4":case"5":return e.forEach((function(e,n){c+=parseFloat(e.acumulado),t=n})),c/(t+1);case"6":return e.forEach((function(e,n){if("MF0000_FCT"===e.codigo_asignatura){var a=100*parseFloat(e.acumulado)/e.total;c+=a}else c+=parseFloat(e.acumulado);t=n})),c/(t+1);default:return null}},_=(c(137),function(e,n){var c=function(e,n){var c=e||0,t=n||0;return c<t?1:c>t?-1:0};return e.sort((function(e,t){switch(n){case"num-lista":var a=parseFloat(e.numero_estudiante),r=parseFloat(t.numero_estudiante);return c(r,a);case"idx-academico":return c(e.idx_academico,t.idx_academico);case"idx-tecnico":return c(e.idx_tecnico,t.idx_tecnico);case"idx-general":return c(e.idx_general,t.idx_general);default:return null}}))});function k(e){var n=e.url,c=e.orden,a=function(e){var n=Object(t.useRef)(!0),c=Object(t.useState)({data:null,loading:!0,error:null}),a=Object(s.a)(c,2),r=a[0],i=a[1];return Object(t.useEffect)((function(){return function(){n.current=!1}}),[]),Object(t.useEffect)((function(){i({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){n.current&&i({loading:!1,error:null,data:e})})).catch((function(){i({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),r}(n),r=a.data,i=a.loading,o=a.error;if(i&&n)return Object(p.jsx)("h1",{className:"load",children:"Loading.."});if(o)return console.log(o),Object(p.jsx)("h3",{children:o});var l=function(e){var n=e.data.filter((function(e){return e.asignaturas.length>2})).map((function(e){var n=g(e.asignaturas),c=N(null===e||void 0===e?void 0:e.modulos,null===e||void 0===e?void 0:e.curso),t=v(n,c),a=e.curso,r=e.periodo;return Object(x.a)(Object(x.a)({},e),{},{idx_academico:n,idx_tecnico:c,idx_general:t,curso:a,periodo:r})}));return _(n,c)}(r);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{className:"encabezado_boletines",children:"Lista de boletines de los estudiantes:"}),Object(p.jsx)("span",{className:"periodo",children:l[0].periodo})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"list-group",children:l.map((function(e){return Object(p.jsx)(f,{estudiante:e},e._id)}))})]})}var w=function(e,n){var c="/boletin/".concat(e,":").concat(n,":");return"".concat("https://cemasapi.herokuapp.com").concat("/reportes").concat(encodeURI(c))},C=c(58);function F(e){var n=e.handleUrl,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(t.useState)(e),c=Object(s.a)(n,2),a=c[0],r=c[1];return[a,function(e){var n=e.target;r(Object(x.a)(Object(x.a)({},a),{},Object(C.a)({},n.name,n.value)))},function(){r(e)}]}({curso:"",periodo:"",ordenar:"num-lista"}),a=Object(s.a)(c,3),r=a[0],i=a[1],o=a[2],l=r.curso,u=r.periodo,d=r.ordenar;return Object(p.jsx)("nav",{children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.info("Form Values: ",l,u,d);var c=w(l,u);console.info("URL: ",c),n(c,d),o()},children:Object(p.jsxs)("div",{className:"form-row",children:[Object(p.jsxs)("label",{className:"col-md-3 col-sm-6",children:[Object(p.jsx)("span",{children:"Curso"}),Object(p.jsx)("input",{type:"text",className:"curso",placeholder:"6D",required:!0,name:"curso",value:l,onChange:i})]}),Object(p.jsxs)("label",{className:"col-md-3 col-sm-6",children:[Object(p.jsx)("span",{children:"Periodo"}),Object(p.jsx)("input",{type:"text",className:"periodo",placeholder:"2020-2021",required:!0,name:"periodo",value:u,onChange:i})]}),Object(p.jsxs)("label",{className:"col-md-4 col-sm-6",children:[Object(p.jsx)("span",{children:"Ordenar"}),Object(p.jsxs)("select",{id:"filter",className:"filter dropdown",name:"ordenar",value:d,onChange:i,children:[Object(p.jsx)("option",{value:"num-lista",children:"N\xfamero (Defecto)"}),Object(p.jsx)("option",{value:"idx-academico",children:"Indice Acad\xe9mico"}),Object(p.jsx)("option",{value:"idx-tecnico",children:"Indice T\xe9cnico"}),Object(p.jsx)("option",{value:"idx-general",children:"Indice General"})]})]}),Object(p.jsx)("div",{className:"container-button col-md-2 col-sm-6",children:Object(p.jsx)("button",{className:"buscar",type:"submit",children:"Buscar"})})]})})})}var S=function(e){var n=e.onClick,c=void 0===n?null:n,t=e.children,a=void 0===t?null:t;return Object(p.jsxs)("button",{className:"log_out",onClick:c,children:[" ",a," "]})},I=function(){return Object(p.jsx)("div",{className:"menu container-fluid",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("header",{className:"col-lg-12",children:[Object(p.jsxs)("div",{className:"cemas",children:[Object(p.jsx)("img",{className:"logo",src:"https://i.imgur.com/KT8UtmZ.png",alt:""}),Object(p.jsx)("h1",{className:"title",children:"Ranking Cemas"})]}),Object(p.jsx)(S,{onClick:m,children:" Salir "})]})})})};var G=function(){var e=Object(t.useState)(null),n=Object(s.a)(e,2),c=n[0],a=n[1],r=Object(t.useState)("num-lista"),i=Object(s.a)(r,2),u=i[0],d=i[1],j=o(l.a.auth()),b=j.user,m=j.itializing;return Object(p.jsxs)("div",{children:[function(){if(m)return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Loading..."})})}(),b?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(I,{}),Object(p.jsxs)("div",{className:"container",id:"ranking",children:[Object(p.jsx)(F,{handleUrl:function(e,n){a(e),d(n)}}),c&&Object(p.jsx)(k,{url:c,orden:u})]})]}):Object(p.jsxs)(O,{onClick:h,children:[Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png",alt:""}),"Sign in with Google"]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,434)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;c(e),t(e),a(e),r(e),i(e)}))};c(431);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),L()}},[[432,1,2]]]);
//# sourceMappingURL=main.8a6ea0bf.chunk.js.map