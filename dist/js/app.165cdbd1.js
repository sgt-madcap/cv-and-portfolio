(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],m=0,g=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(g.length)g.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cv-and-portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("85ec"),a=i.n(s);a.a},"25e4":function(t,e,i){t.exports=i.p+"img/04crop.181c1f49.jpg"},"40cd":function(t,e,i){},"519a":function(t,e,i){"use strict";var s=i("aa32"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e),i.d(e,"eventEmitter",(function(){return Z}));i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"layout-wrapper"},[i("Topbar",{directives:[{name:"show",rawName:"v-show",value:t.windowWidth<=768,expression:"windowWidth <= 768"}],attrs:{links:t.translations.links,lang:t.lang,translations:t.translations[t.lang]},on:{langChanged:t.langChanged}}),this.windowWidth>768?i("Sidebar",{class:{open:t.show},attrs:{lang:t.lang,links:t.translations.links,translations:t.translations[t.lang]},on:{langChanged:t.langChanged,toggleSidebar:t.onToggle}}):t._e(),i("div",{staticClass:"content-wrapper",class:{contentSmall:t.windowWidth<=768}},[i("router-view",{staticClass:"app-content",class:{full:!t.show||t.windowWidth<=768,contentSmall:t.windowWidth<=768},attrs:{translations:t.translations[t.lang]}})],1)],1)])},n=[],r=(i("4160"),i("fb6a"),i("159b"),{links:[{eng:"About",rus:"Обо мне",url:"About",active:!0},{eng:"Skills",rus:"Навыки",url:"Skills",active:!1},{eng:"Certificates & Employment",rus:"Сертификаты и опыт работы",url:"CertsEmployment",active:!1},{eng:"Portfolio",rus:"Портфолио",url:"Portfolio",active:!1},{eng:"Resume",rus:"Резюме",url:"Resume",active:!1}],eng:{name:"Nikolai Tkachev",home:"Home",about:"About",portfolio:"Portfolio",skills:"Skills",blog:"Blog",section_about:{description:'Hi! I\'m a web developer from Moscow. Currently I work at the logistics company "917 Smith Inc", located in Chicago, USA on a remote basis - I am engaged in the support of the application I created. Programming for me is the art of doing complex things simply, looking at a task from different angles. Each project is like a new interesting quest, carrying a unique experience, a puzzle that can be assembled in various ways. I am constantly developing my skills and am ready for new experiences and projects.'},section_skills:{hardskills:{title:"Hard Skills"},softskills:{title:"Soft Skills",skills:["Critical thinking","Creativeness","Attentiveness","Responsibility","Perseverance","Easy learning","Sense of beauty","Friendly temper","I know how to google :)","Communication and team spirit"]}},section_certs_employment:{title:"Certificates & Employment",certificates:{title:"Certificates",certs:[{title:"Git. Easy Start",url:"https://geekbrains.ru/certificates/593653.en"},{title:"HTML & CSS",url:"https://geekbrains.ru/certificates/581770.en"},{title:"HTML5 and CSS3",url:"https://geekbrains.ru/certificates/595547.en"},{title:"JavaScript. Level 1",url:"https://geekbrains.ru/certificates/609760.en"},{title:"JavaScript. Level 2",url:"https://geekbrains.ru/certificates/811935.en"},{title:"PHP. Level 1",url:"https://geekbrains.ru/certificates/811943.en"}]},employment:{title:"Employment"}}},rus:{name:"Николай Ткачёв",about:"Обо мне",portfolio:"Портфолио",skills:"Навыки",blog:"Блог",section_about:{description:'Привет, я веб-разбаротчик из Москвы. На данный момент работаю в логистической компании "917 Smith Inc", находящейся в Чикаго, США на удаленной основе - занимаюсь поддержанием созданного мной приложения. Программирование для меня - это искусство делать сложные вещи просто, смотреть на задачу с разных углов. Каждый проект - как новый интересный квест, несущий в себе уникальный опыт, головоломка, которую можно собрать разными способами. Я постоянно развиваю свои навыки и готов к новому опыту и проектам.'},section_skills:{hardskills:{title:"Навыки"},softskills:{title:"Качества",skills:["Критическое мышление","Креативность","Внимательность","Ответственность","Упорство","Быстрая обучаемость","Чувство прекрасного","Дружелюбный характер","Я умею гуглить :)","Коммуникативность и командный дух"]}},section_certs_employment:{title:"Сертификаты и опыт работы",certificates:{title:"Сертификаты",certs:[{title:"Git. Быстрый старт",url:"https://geekbrains.ru/certificates/593653.ru"},{title:"HTML/CSS. Интерактивный курс",url:"https://geekbrains.ru/certificates/581770.ru"},{title:"HTML5 и CSS3",url:"https://geekbrains.ru/certificates/595547.ru"},{title:"JavaScript. Уровень 1",url:"https://geekbrains.ru/certificates/609760.ru"},{title:"JavaScript. Уровень 2",url:"https://geekbrains.ru/certificates/811935.ru"},{title:"PHP. Уровень 1",url:"https://geekbrains.ru/certificates/811943.ru"}]},employment:{title:"Опыт работы"}}}}),l=r,o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-sidenav"},[s("a",{staticClass:"btn-floating btn-small waves-effect waves-light black",on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[s("i",{staticClass:"material-icons"},[t._v("menu")])]),s("img",{staticClass:"avatar",attrs:{src:i("25e4"),alt:""}}),s("h4",[t._v(t._s(t.translations.name))]),s("h5",{staticClass:"cyan-text"},[t._v("Frontend Developer")]),s("div",{staticClass:"app-sidenav-links"},[s("ul",t._l(t.links,(function(e){return s("li",{key:e.url},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{offset:"About"===e.url?-30:0},expression:"{ offset: link.url === 'About' ? -30 : 0 }"}],class:{"cyan-text":e.active},attrs:{href:"#"+e.url},on:{click:function(e){return t.linkClicked()}}},[t._v(t._s(e[t.lang].toUpperCase()))])])})),0)]),s("LangSwitcher",{staticStyle:{margin:"1rem"}}),s("Social")],1)},c=[],u=(i("c740"),i("b0c0"),i("5377"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lang"},t._l(t.flags,(function(e){return i("img",{key:e.url,class:{activeLang:e.active},attrs:{src:e.url,alt:e.name},on:{click:function(i){return t.changeLang(e.name)}}})})),0)}),m=[],g={props:["lang","links","translations"],data:function(){return{flags:[{name:"rus",url:"/img/rus.svg",active:!1},{name:"eng",url:"/img/uk.svg",active:!0}]}},methods:{changeLang:function(t){Z.$emit("langChanged",t);var e=this.flags.findIndex((function(e){return e.name===t}));this.flags[e].active=!0,this.flags.forEach((function(e){e.name!==t&&(e.active=!1)}))}}},d=g,p=(i("519a"),i("2877")),f=Object(p["a"])(d,u,m,!1,null,"0fc2adb0",null),v=f.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"social"},[i("font-awesome-icon",{attrs:{id:"facebook",icon:["fab","facebook"],size:t.size?t.size:"2x"}}),i("font-awesome-icon",{attrs:{id:"youtube",icon:["fab","youtube"],size:t.size?t.size:"2x"}}),i("font-awesome-icon",{attrs:{id:"instagram",icon:["fab","instagram"],size:t.size?t.size:"2x"}}),i("font-awesome-icon",{attrs:{id:"github",icon:["fab","github"],size:t.size?t.size:"2x"}})],1)},b=[],k={props:["size"],name:"Social"},_=k,w=Object(p["a"])(_,h,b,!1,null,null,null),C=w.exports,y={components:{Social:C,LangSwitcher:v},props:["lang","links","translations"],data:function(){return{flags:[{name:"rus",url:"/img/rus.svg",active:!1},{name:"eng",url:"/img/uk.svg",active:!0}]}},methods:{toggle:function(){this.$emit("toggleSidebar")},changeLang:function(t){this.$emit("langChanged",t);var e=this.flags.findIndex((function(e){return e.name===t}));this.flags[e].active=!0,this.flags.forEach((function(e){e.name!==t&&(e.active=!1)}))},linkClicked:function(t){var e=t.target.innerHTML;this.$emit("linkClicked",{lang:this.lang,link:e})}}},S=y,x=Object(p["a"])(S,o,c,!1,null,null,null),q=x.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbarWrapper"},[s("div",{staticClass:"leftSide"},[s("LangSwitcher",{staticStyle:{"flex-direction":"column"},on:{langChanged:function(e){return t.changeLang(t.val)}}}),s("img",{staticClass:"avatar",attrs:{src:i("25e4"),alt:""}})],1),s("ul",{staticClass:"topbarLinks"},t._l(t.links,(function(e){return s("li",{key:e.url},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{offset:"About"===e.url?-30:0},expression:"{ offset: link.url === 'About' ? -30 : 0 }"}],class:{"cyan-text":e.active},attrs:{href:"#"+e.url},on:{click:t.linkClicked}},[t._v(t._s(e[t.lang].toUpperCase()))])])})),0),s("social",{staticStyle:{color:"lightgray"},attrs:{size:"lg"}})],1)},L=[],z={props:["lang","links","translations"],data:function(){return{flags:[{name:"rus",url:"/img/rus.svg",active:!1},{name:"eng",url:"/img/uk.svg",active:!0}]}},methods:{toggle:function(){this.$emit("toggleSidebar")},changeLang:function(t){this.$emit("langChanged",t);var e=this.flags.findIndex((function(e){return e.name===t}));this.flags[e].active=!0,this.flags.forEach((function(e){e.name!==t&&(e.active=!1)}))},linkClicked:function(t){var e=t.target.innerHTML;this.$emit("linkClicked",{lang:this.lang,link:e})}}},$={name:"Topbar",props:["lang","translations","links"],mixins:[z],components:{Social:C,LangSwitcher:v}},j=$,H=(i("6fa3"),Object(p["a"])(j,E,L,!1,null,null,null)),P=H.exports,A={data:function(){return{show:!1,lang:"eng",translations:l,windowWidth:0}},methods:{linkClicked:function(t){this.translations.links.forEach((function(e){e.url.toUpperCase()===t.toUpperCase()?e.active=!0:e.active=!1}))},onToggle:function(){this.show=!this.show},langChanged:function(t){this.lang=t},resizeHandler:function(t){this.windowWidth=t.target.innerWidth}},computed:{currentRoute:function(){return this.$route.hash.slice(1)}},watch:{currentRoute:function(t){this.linkClicked(t)}},mounted:function(){var t=this;setTimeout((function(){t.show=!0}),500),this.windowWidth=window.innerWidth},created:function(){var t=this;Z.$on("langChanged",(function(e){t.lang=e})),window.addEventListener("resize",this.resizeHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},components:{Sidebar:q,Topbar:P}},T=A,O=(i("034f"),Object(p["a"])(T,a,n,!1,null,null,null)),I=O.exports,M=i("8c4f"),W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{attrs:{id:"About"}},[i("h3",[t._v(t._s(t.translations.about))]),i("p",[t._v(t._s(t.translations.section_about.description))])]),i("section",{staticClass:"fullHeightSection",attrs:{id:"Skills"}},[i("div",{staticClass:"row row-header"},[i("h3",[t._v(t._s(t.translations.skills))])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col m12 lg6 xl6 s12"},[i("div",{staticClass:"skills"},[t._m(0),i("h5",[t._v(t._s(t.translations.section_skills.hardskills.title)+":")]),t._m(1)])]),i("div",{staticClass:"col m12 lg6 xl6 s12"},[i("div",{staticClass:"skills"},[t._m(2),i("h5",[t._v(t._s(t.translations.section_skills.softskills.title)+":")]),i("ul",t._l(t.translations.section_skills.softskills.skills,(function(e){return i("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])])])]),i("section",{staticClass:"fullHeightSection",attrs:{id:"CertsEmployment"}},[i("div",{staticClass:"row row-header"},[i("h3",[t._v(" "+t._s(t.translations.section_certs_employment.title)+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col m12 lg6 xl6 s12"},[i("div",{staticClass:"skills certificates"},[t._m(3),i("h5",[t._v(" "+t._s(t.translations.section_certs_employment.certificates.title)+": ")]),i("ul",t._l(t.translations.section_certs_employment.certificates.certs,(function(e){return i("li",{key:e.title},[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])])})),0)])]),i("div",{staticClass:"col m12 lg6 xl6 s12"},[i("div",{staticClass:"skills employment"},[t._m(4),i("h5",[t._v(" "+t._s(t.translations.section_certs_employment.employment.title)+": ")]),t._m(5)])])])]),i("section",{attrs:{id:"Portfolio"}},[i("h3",[t._v(t._s(t.translations.portfolio))]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet assumenda blanditiis consequuntur dignissimos distinctio dolorem, facere fugiat hic illum laborum maiores molestias nam nulla obcaecati odio placeat praesentium suscipit voluptas? Aliquam aperiam atque deleniti deserunt dignissimos eius esse fugiat incidunt, ipsa iste labore laudantium molestias mollitia necessitatibus obcaecati pariatur quae quaerat quasi qui, quibusdam tempore tenetur, voluptas voluptate. Architecto consectetur dolores iste iure necessitatibus, nemo qui sint? Aspernatur at cupiditate nihil quaerat repellendus sint tenetur! Aliquam aperiam architecto atque autem consequatur consequuntur corporis deleniti dignissimos doloremque ea eligendi eum ex ipsam iure, laboriosam laborum minima nobis nulla quae, quidem reprehenderit repudiandae sequi voluptas! Asperiores blanditiis consectetur consequatur corporis delectus doloremque dolorum eveniet in incidunt labore molestiae nam nisi non nulla officia optio possimus quia reprehenderit sequi sit tenetur unde ut veritatis vitae, voluptatibus! A alias aliquid animi dignissimos doloremque dolorum earum enim esse eum expedita inventore molestiae molestias nesciunt nostrum obcaecati omnis possimus quaerat quibusdam ratione recusandae rem reprehenderit similique sint, suscipit tenetur veniam voluptatibus. Accusamus accusantium animi autem cumque cupiditate debitis doloremque eligendi eos esse, in incidunt ipsam ipsum iste iure laudantium nemo non nulla odio optio possimus quae quisquam quod repellendus reprehenderit tempora tenetur totam ullam. ")])]),t._m(6)])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"left top skills-icon"},[i("img",{attrs:{src:"/img/hard-skills.svg",alt:"hard-skills"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("span",[t._v("HTML5")]),i("img",{attrs:{src:"/img/html5.svg",alt:"html5"}})]),i("li",[i("span",[t._v("CSS3")]),i("img",{attrs:{src:"/img/css3.svg",alt:"css3"}})]),i("li",[i("span",[t._v("Javascript, Typescript, NodeJS, PHP")]),i("img",{attrs:{src:"/img/javascript.svg",alt:"javascript"}}),i("img",{attrs:{src:"/img/typescript.svg",alt:"typescript"}}),i("img",{attrs:{src:"/img/nodejs.svg",alt:"nodejs"}}),i("img",{attrs:{src:"/img/php.svg",alt:"php"}})]),i("li",[i("span",[t._v("VueJS, Nuxt")]),i("img",{attrs:{src:"/img/vue.svg",alt:"vue"}}),i("img",{attrs:{src:"/img/nuxt.svg",alt:"nuxt"}})]),i("li",[i("span",[t._v("Webpack")]),i("img",{attrs:{src:"/img/webpack.svg",alt:"webpack"}})]),i("li",[i("span",[t._v("Sass, Less")]),i("img",{attrs:{src:"/img/sass.svg",alt:"sass"}}),i("img",{attrs:{src:"/img/less.svg",alt:"less"}})]),i("li",[i("span",[t._v("Bootstrap, Materializecss, Vuetify")]),i("img",{attrs:{src:"/img/bootstrap.svg",alt:"bootstrap"}}),i("img",{attrs:{src:"/img/materializecss.svg",alt:"materializecss"}}),i("img",{attrs:{src:"/img/vuetify.svg",alt:"vuetify"}})]),i("li",[i("span",[t._v("MongoDB, Firebase Realtime Database, Cloud Firestore, SQL")]),i("img",{attrs:{src:"/img/mongodb.svg",alt:"mongodb"}}),i("img",{attrs:{src:"/img/firebase-realtime-database.svg",alt:"firebase-realtime-database"}}),i("img",{attrs:{src:"/img/firebase-cloud-firestore.svg",alt:"firebase-cloud-firestore"}}),i("img",{attrs:{src:"/img/sql.svg",alt:"sql"}})]),i("li",[i("span",[t._v("Socket.IO")]),i("img",{attrs:{src:"/img/socket-io.svg",alt:"socket-io"}})]),i("li",[i("span",[t._v("REST.API")]),i("img",{attrs:{src:"/img/rest-api.svg",alt:"rest-api"}})]),i("li",[i("span",[t._v("Languages: English, Russian, Serbian")]),i("img",{attrs:{src:"/img/uk.svg",alt:"eng"}}),i("img",{attrs:{src:"/img/rus.svg",alt:"rus"}}),i("img",{attrs:{src:"/img/srb.svg",alt:"srb"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"left top skills-icon"},[i("img",{attrs:{src:"/img/soft-skills.svg",alt:"soft-skills"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"left top skills-icon"},[i("img",{attrs:{src:"/img/certificate.svg",alt:"hard-skills"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"left top skills-icon"},[i("img",{attrs:{src:"/img/employment2.svg",alt:"soft-skills"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://917smith.com/",target:"_blank"}},[t._v("917 Smith Inc")]),i("p",[t._v("I made some work: description goes here")])]),i("li",[t._v("Job 2")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"Resume"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col download-cv"},[i("button",{staticClass:"btn waves-effect cyan darken-2"},[t._v("Download CV")])])])])}],R={props:["translations"],name:"Home"},N=R,D=(i("7239"),Object(p["a"])(N,W,J,!1,null,"96c62304",null)),U=D.exports;s["a"].use(M["a"]);var F=[{path:"/",name:"Home",component:U}],B=new M["a"]({mode:"history",routes:F}),V=B,G=i("ecee"),Q=i("ad3d"),K=i("f2d1"),X=(i("5403"),i("5a58")),Y=i.n(X),Z=(i("4d5c"),i("dc53"),i("619b"),new s["a"]);G["c"].add(K["d"],K["b"],K["a"],K["c"],K["e"]),s["a"].component("font-awesome-icon",Q["a"]),s["a"].use(Y.a),s["a"].config.productionTip=!1,new s["a"]({router:V,render:function(t){return t(I)}}).$mount("#app")},"6fa3":function(t,e,i){"use strict";var s=i("729c"),a=i.n(s);a.a},7239:function(t,e,i){"use strict";var s=i("40cd"),a=i.n(s);a.a},"729c":function(t,e,i){},"85ec":function(t,e,i){},aa32:function(t,e,i){}});
//# sourceMappingURL=app.165cdbd1.js.map