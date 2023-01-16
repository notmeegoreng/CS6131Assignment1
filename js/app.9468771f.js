(function(){"use strict";var e={5740:function(e,t,s){var r=s(144),o=s(1096),n=s(9203),a=s(7179),i=s(3058),l=s(5223),c=s(3974),u=s(5452),d=s(4192),p=s(5057),m=s(7615),f=s(248),h=s(1908),_=s(2755),v=s(5093),Z=s(3551),g=s(1495),x=s(5294),w=s(2680),y=s(9200),b=s(5952),C=s(2370),k=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o.Z,[t(n.Z,{attrs:{app:""}},[t(x.Z,{attrs:{align:"center"}},[t(C.qW,{staticClass:"mx-4"},[e._v("Name")]),t(d.Z,{attrs:{vertical:""}}),t(a.Z,{staticClass:"ml-4 mr-2",attrs:{text:"",to:{name:"home"},exact:""}},[e._v("Home")]),t(a.Z,{staticClass:"mx-2",attrs:{text:"",to:{name:"latest"}}},[e._v("Latest")]),t(a.Z,{staticClass:"mx-2",attrs:{text:"",to:{name:"all_users"},exact:""}},[e._v("Users")]),t(m.Z,{staticClass:"mx-4",attrs:{"align-center":"","justify-end":""}},[e.user_id?[t(a.Z,{staticClass:"mx-2",attrs:{text:"",to:{name:"users",params:{user_id:e.user_id}}}},[e._v("Profile")]),t(u.Z,{attrs:{width:"400"},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[t(a.Z,e._g({staticClass:"ml-2 mr-4",attrs:{text:""}},s),[e._v("Logout")])]}}],null,!1,3767900084),model:{value:e.logout_dialog,callback:function(t){e.logout_dialog=t},expression:"logout_dialog"}},[t(i.Z,[t(l.EB,[e._v("Logout")]),t(l.ZB,[e._v("Are you sure you wish to log out?")]),t(l.h7,[t(a.Z,{attrs:{text:""},on:{click:e.logout}},[e._v("Logout")]),t(a.Z,{attrs:{text:""},on:{click:function(t){e.logout_dialog=!1}}},[e._v("Cancel")])],1)],1)],1)]:t(a.Z,{staticClass:"mx-4 ma-0",attrs:{text:"",to:"/login"}},[e._v("Login")]),t(g.Z,{attrs:{"close-on-content-click":!1,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[t(a.Z,e._g({staticClass:"mx-4",attrs:{icon:""}},s),[t(p.Z,[e._v("mdi-cog")])],1)]}}])},[t(w.Z,[e._v("Theme")]),t(f.Z,[t(h.Z,[t(_.Z,[t(y.Z,{attrs:{inset:"",color:"black"},on:{click:e.toggleTheme}})],1),t(v.km,[e._v(" "+e._s((e.dark?"Dark":"Light")+" Mode")+" ")])],1),e.spoiler_hide?t(h.Z,[t(v.km,[t(a.Z,[e._v(" Hide Spoilers ")])],1)],1):e._e()],1)],1),t(g.Z,{staticStyle:{opacity:"1"},attrs:{"close-on-content-click":!1,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[t(a.Z,e._g({staticClass:"mx-4",attrs:{icon:""}},s),[t(p.Z,[e._v("mdi-magnify")])],1)]}}])},[t(f.Z,[t(h.Z,[t(_.Z,[t(b.Z,{attrs:{placeholder:"Search"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.on_enter.apply(null,arguments)}},model:{value:e.search_text,callback:function(t){e.search_text=t},expression:"search_text"}})],1)],1)],1)],1)],2)],1)],1),t(Z.Z,[t(c.Z,{attrs:{fluid:""}},[t("router-view",{key:e.$route.fullPath})],1)],1)],1)},P=[];s(7658);const S=(0,r.iH)(null),T=(0,r.iH)(!1);var A=r.ZP.extend({name:"App",data(){return{logout_dialog:!1,dark:!0,search_text:""}},methods:{toggleTheme(){this.dark=!this.dark,this.$vuetify.theme.dark=!this.$vuetify.theme.dark},logout(){this.logout_dialog=!1,S.value=null},on_enter(){console.log(this.search_text),this.$router.push({name:"search",params:{query:this.search_text}})}},setup(){return{user_id:S,spoiler_hide:T}}}),B=A,O=s(3736),q=(0,O.Z)(B,k,P,!1,null,null,null),j=q.exports,F=s(8345),L=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"px-8",attrs:{fluid:""}},[t("SectionedCoversComponent",{attrs:{sections:e.all_forums}})],1)},$=[],E=s(8819),M=s(8942),z=function(){var e=this,t=e._self._c;return t(c.Z,{attrs:{fluid:""}},e._l(e.sections,(function(s,r){return t("div",{key:r},[t("span",{attrs:{id:s.header.toLowerCase().replaceAll(" ","-")}}),t(i.Z,{staticClass:"mb-8 rounded-lg"},[t(l.EB,{domProps:{textContent:e._s(s.header)}}),e._l(s.covers,(function(s,r){return t("div",{key:r+"a"},[t(d.Z),t(h.Z,{attrs:{"three-line":"",to:s.to}},[s.avatar?t(M.Z,{attrs:{size:"52"}},[t(E.Z,{attrs:{color:s.avatar.color,size:"52"},domProps:{textContent:e._s(s.avatar.name)}})],1):e._e(),t(v.km,[t(v.V9,{domProps:{textContent:e._s(s.title)}}),t(v.oZ,{domProps:{textContent:e._s(s.description)}})],1)],1)],1)}))],2)],1)})),0)},D=[],H={name:"sectioned_headers",props:{sections:Array[{header:String,covers:Array[{avatar:{name:String,color:String},title:String,description:String}]}]}},U=H,Q=(0,O.Z)(U,z,D,!1,null,"57edbb0a",null),R=Q.exports;const N=[{header:"Top Forums",covers:[{title:"On the concept of thermodynamics",description:"Discuss the heat death of the universe here!",to:"forums/ab"},{title:"B",description:"BBB",to:"forums/bb"}]},{header:"Vertical Forums",covers:[]},{header:"Bottom Forums",covers:[{title:"Q",description:"QQQ",to:"forums/aaa"},{title:"P",description:"PP",to:"forums/dddd"}]},{header:"filler",covers:[{title:"filter",description:"to filter filters is utmost filtration"}]},{header:"filler",covers:[{title:"filter",description:"to filter filters is utmost filtration"}]},{header:"filled",covers:[{title:"filter",description:"to filter filters is utmost filtration"}]},{header:"filler",covers:[{title:"filter",description:"to filter filters is utmost filtration"}]},{header:"filler",covers:[{title:"filter",description:"to filter filters is utmost filtration"}]}],V={ab:{section:"Top Forums",name:"On the concept of thermodynamics"},bb:{section:"Top Forums",name:"B"},aaa:{section:"Bottom Forums",name:"Q"},dddd:{section:"Bottom Forums",name:"P"}},I=[{header:"Pinned Threads",covers:[{avatar:{name:"M",color:"blue"},title:"On Moderation",description:["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth","twentieth"].join("ly, how dare you. ")+"ly, how dare you.",to:"ab/threads/b"},{avatar:{name:"Ww",color:"orange"},title:"BAA BAA",description:"black sheep",to:"ab/threads/ccc"}]},{header:"Normal Threads",covers:[{title:"OO",description:"woah",to:"ab/threads/d"},{title:"Moose",description:"craze",to:"ab/threads/ee"}]}];var W=r.ZP.extend({name:"Thread",components:{SectionedCoversComponent:R},data(){return{all_forums:N}},computed:{}}),G=W,J=(0,O.Z)(G,L,$,!1,null,null,null),K=J.exports,X=s(6904),Y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"pl-4",attrs:{fluid:""}},[t(X.Z,{ref:"form"},[t(x.Z,[t(b.Z,{attrs:{label:"Username",rules:[e.required],filled:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t(x.Z,[t(b.Z,{attrs:{label:"Password",rules:[e.required],type:e.password_show?"text":"password",filled:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(x.Z,[t(a.Z,{attrs:{color:"primary"},on:{click:e.on_login}},[e._v(" Login ")]),t(a.Z,{staticClass:"mx-8",attrs:{color:"secondary"},on:{click:e.on_register}},[e._v(" Register ")])],1)],1)],1)},ee=[],te=r.ZP.extend({name:"Thread",data(){return{username:"",password:"",password_show:!1}},methods:{required(e){return!!e||"Required"},on_login(){this.$refs.form.validate()&&(S.value="testID",this.$router.push({name:"home"}))},on_register(){this.$router.push({name:"register",params:{initial_username:this.username,initial_password:this.password}})}},computed:{}}),se=te,re=(0,O.Z)(se,Y,ee,!1,null,null,null),oe=re.exports,ne=s(6072),ae=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"pl-4",attrs:{fluid:""}},[t(X.Z,{ref:"form",staticClass:"ma-18"},[t(x.Z,[t(b.Z,{attrs:{label:"Username",rules:[e.required,e.user_valid],filled:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t(x.Z,[t(b.Z,{attrs:{label:"Password",rules:[e.required],type:e.password_show?"text":"password","append-icon":e.password_show?"mdi-eye":"mdi-eye-off",required:"",filled:""},on:{"click:append":function(t){e.password_show=!e.password_show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(x.Z,[t(b.Z,{attrs:{label:"Confirm Password",rules:[e.required,e.match],type:e.confirm_password_show?"text":"password","append-icon":e.confirm_password_show?"mdi-eye":"mdi-eye-off",filled:""},on:{"click:append":function(t){e.confirm_password_show=!e.confirm_password_show}},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1),t(x.Z,[t(ne.Z,{staticClass:"mb-8",attrs:{label:"Do you agree?",rules:[e=>!!e||"Please agree to continue"]}},[e._v("Agree")])],1),t(x.Z,[t(a.Z,{on:{click:e.on_register}},[e._v("Register")])],1)],1)],1)},ie=[],le=r.ZP.extend({name:"Thread",props:{initial_username:{type:String},initial_password:{type:String}},data(){return{username:"",password:"",confirm_password:"",password_show:!1,confirm_password_show:!1}},methods:{user_valid(e){return"admin"!=e||"This username is already used!"},required(e){return!!e||"Required"},match(e){return e==this.password||"The passwords do not match!"},on_register(){if(this.$refs.form.validate()){const e="testID";this.$router.push({name:"users",params:{user_id:e}})}}},computed:{},created(){this.username=this.initial_username??"",this.password=this.initial_password??""}}),ce=le,ue=(0,O.Z)(ce,ae,ie,!1,null,null,null),de=ue.exports,pe=s(4437),me=function(){var e=this,t=e._self._c;return t(c.Z,{attrs:{fluid:""}},e._l(e.latest,(function(s,r){return t(i.Z,{key:r,staticClass:"pa-4 rounded-xl"},[t(m.Z,[t(pe.Z,{staticClass:"mx-4 px-2 my-7 py-8 rounded-0",attrs:{cols:"2"}},[t(x.Z,{staticClass:"justify-center"},[t(E.Z,{attrs:{color:s.user.avatar.color,size:"60"},domProps:{textContent:e._s(s.user.name.split(" ",2).map((e=>e.charAt(0).toUpperCase())).join(""))}})],1),t(x.Z,{staticClass:"justify-center mt-12"},[t("p",[e._v("text profile")])])],1),t(d.Z,{staticStyle:{"border-width":"1px"},attrs:{vertical:""}}),t(pe.Z,{staticClass:"my-4 flex-grow-1"},[t("p",{staticClass:"ma-4 text-h5"},[e._v(e._s(s.name))]),t("p",{staticClass:"ma-4"},[e._v(e._s(s.description))])])],1)],1)})),1)},fe=[],he={name:"latest",data(){return{latest:[{user:{name:"Above Broad",avatar:{color:"brown"}},name:"Fortune Favors Flickering",description:"Once, whence, twice, when there was night, floating mites fought for kites and longish tights"}]}}},_e=he,ve=(0,O.Z)(_e,me,fe,!1,null,"33b4a7d6",null),Ze=ve.exports,ge=function(){var e=this,t=e._self._c;return t(c.Z)},xe=[],we={name:"all_users"},ye=we,be=(0,O.Z)(ye,ge,xe,!1,null,"d2d72270",null),Ce=be.exports,ke=s(5617),Pe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"pl-4",attrs:{fluid:""}},[t(i.Z,{staticClass:"mx-4 pa-8 rounded-xl"},[t(l.EB,[e.image_src?t(E.Z,{attrs:{size:"80"}},[t("img",{attrs:{src:e.image_src,alt:"Profile Picture"}})]):t(E.Z,{attrs:{color:e.user.avatar.color,size:"80"},domProps:{textContent:e._s(e.user.name.split(" ",2).map((e=>e.charAt(0).toUpperCase())).join(""))}}),t("p",{staticClass:"ma-4 ml-8"},[e._v(e._s(e.user.name))])],1),t(h.Z,[t(v.km,[t(v.V9,[t("p",[e._v("Description")])]),t(ke.Z,{attrs:{disabled:e.not_editing,solo:""},model:{value:e.user.description,callback:function(t){e.$set(e.user,"description",t)},expression:"user.description"}})],1)],1),t(l.h7,{staticClass:"align-center"},[t(m.Z,{attrs:{"justify-end":""}},[t(a.Z,{staticClass:"align-center",on:{click:function(t){e.not_editing=!e.not_editing}}},[e._v("Edit")])],1)],1)],1)],1)},Se=[],Te=r.ZP.extend({name:"Thread",props:{user_id:{type:String,required:!0}},components:{},data(){return{image_src:"",user:{avatar:{name:"AB",color:"brown"},name:"Above Broad",description:"Most Ardently Enormous"},not_editing:!0}},methods:{}}),Ae=Te,Be=(0,O.Z)(Ae,Pe,Se,!1,null,null,null),Oe=Be.exports,qe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"px-8",attrs:{fluid:""}},[t("TitledBreadcrumbs",{attrs:{prev_pages:e.prev_pages}}),t("SectionedCoversComponent",{attrs:{sections:e.threads}})],1)},je=[],Fe=s(7130),Le=s(1726),$e=function(){var e=this,t=e._self._c;return t("div",[t(Fe.Z,{attrs:{large:"",items:e.prev_pages},scopedSlots:e._u([{key:"divider",fn:function(){return[t(p.Z,[e._v("mdi-menu-right")])]},proxy:!0},{key:"item",fn:function({item:s}){return[t(Le.Z,{attrs:{to:s.to}},[e._v(e._s(s.last?"":s.text))])]}}])}),t("div",{staticClass:"text-h4 px-6 mb-8"},[e._v(e._s(e.prev_pages[e.prev_pages.length-1].text))])],1)},Ee=[],Me={name:"TitledBreadcrumbs",props:{prev_pages:{}}},ze=Me,De=(0,O.Z)(ze,$e,Ee,!1,null,null,null),He=De.exports,Ue=r.ZP.extend({name:"Forum",props:{forum_id:String},components:{TitledBreadcrumbs:He,SectionedCoversComponent:R},data(){return{threads:I}},computed:{prev_pages(){console.log(this.forum_id);const e=V[this.forum_id];return console.log(e),[{text:"Home",to:{name:"home",hash:`#${e.section.toLowerCase().replaceAll(" ","-")}`}},{text:e.name,last:!0}]}}}),Qe=Ue,Re=(0,O.Z)(Qe,qe,je,!1,null,null,null),Ne=Re.exports,Ve=s(833),Ie=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"pl-4",attrs:{fluid:""}},[t(X.Z,[t(Ve.Z,{attrs:{label:"Forum",items:e.forums},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),t(b.Z,{attrs:{label:"Thread Title",rules:[e=>!!e||"Required"]},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1)},We=[],Ge=r.ZP.extend({name:"NewThread",components:{},data(){return{forums:["test","test2"],selected:null,title:""}},computed:{},methods:{},created(){console.log("new_thread loaded")}}),Je=Ge,Ke=(0,O.Z)(Je,Ie,We,!1,null,null,null),Xe=Ke.exports,Ye=s(3823),et=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(c.Z,{staticClass:"pl-4",attrs:{fluid:""}},[t("TitledBreadcrumbs",{attrs:{prev_pages:e.prev_pages}}),t("div",{staticClass:"mb-16"},e._l(e.posts,(function(e,s){return t("PostComponent",{key:s,attrs:{post:e}})})),1),t(Ye.Z,{attrs:{length:"10"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},tt=[],st=s(6318);class rt{constructor(e,t){(0,st.Z)(this,"poster",void 0),(0,st.Z)(this,"content",void 0),this.poster=e,this.content=t}}class ot{constructor(e,t){(0,st.Z)(this,"name",void 0),(0,st.Z)(this,"img",void 0),this.name=e,this.img=t}}var nt=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(i.Z,{staticClass:"d-flex rounded-xl ma-4",attrs:{elevation:"4"}},[t(pe.Z,{staticClass:"mx-4 px-2 my-7 py-8 rounded-0",staticStyle:{"border-right":"solid 2px gray"},attrs:{cols:"2"}},[e._v(" text text profile text "),t("br"),e._v(" "+e._s(e.post.poster.name)+" ")]),t(pe.Z,{staticClass:"my-4 flex-grow-1"},[t("div",{domProps:{innerHTML:e._s(e.processed_text)}})])],1)},at=[],it=r.ZP.extend({name:"PostComponent",props:{post:{type:rt,required:!0}},methods:{},computed:{processed_text(){return this.post.content||""}},data(){return{not_done:!0}},mounted(){this.not_done&&(this.not_done=!1,Array.from(document.querySelectorAll(".spoiler")).forEach((e=>{e.addEventListener("click",(t=>{e.classList.add("opened-spoiler")}))}),!1))}}),lt=it,ct=(0,O.Z)(lt,nt,at,!1,null,null,null),ut=ct.exports,dt=r.ZP.extend({name:"Thread",props:{forum_id:String,thread_id:String},components:{TitledBreadcrumbs:He,PostComponent:ut},data(){return{posts:[new rt(new ot("green!",4),"1 text test <b> <i> green </i>  a </b>"),new rt(new ot("weewoo",4),'2 <span class=spoiler @click="spoil"> test </span>'),new rt(new ot("green!",4),"1 text test <b> <i> green </i>  a </b>"),new rt(new ot("green!",4),"1 text test <b> <i> green </i>  a </b>"),new rt(new ot("weewoo",4),'2 <span class=spoiler @click="spoil"> test </span>')],page:4}},computed:{prev_pages(){const e=V[this.forum_id];return console.log(e),[{text:"Home",to:{name:"home",hash:`#${e.section.toLowerCase().replaceAll(" ","-")}`}},{text:e.name,to:{name:"forum",props:{forum_id:this.forum_id}}},{text:"Test Thread",last:!0}]}},methods:{hide_spoilers(){Array.from(document.querySelectorAll(".spoiler")).forEach((e=>{e.classList.remove("opened-spoiler")}),!1)}},created(){T.value=!0},beforeDestroy(){T.value=!1}}),pt=dt,mt=(0,O.Z)(pt,et,tt,!1,null,null,null),ft=mt.exports,ht=s(3407),_t=function(){var e=this,t=e._self._c;return t(c.Z,{attrs:{fluid:""}},[t(b.Z,{attrs:{placeholder:"Search","prepend-icon":"mdi-magnify"}}),t(ht.Z,{staticClass:"mt-3",on:{change:e.test},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[t(a.Z,[e._v("Forums")]),t(a.Z,[e._v("Threads")]),t(a.Z,[e._v("Posts")]),t(a.Z,[e._v("Users")])],1),t(d.Z,{staticClass:"my-8"}),e._l(e.found,(function(s,r){return t(i.Z,{key:r,staticClass:"pa-4"},[t(l.EB,[t(E.Z,{attrs:{color:s.avatar.color,size:"60"},domProps:{textContent:e._s(s.name.split(" ",2).map((e=>e.charAt(0).toUpperCase())).join(""))}}),t("p",{staticClass:"ma-4 ml-8"},[e._v(e._s(s.name))])],1),t(l.ZB,[e._v(e._s(s.description))])],1)}))],2)},vt=[],Zt={name:"search",props:{query:{type:String,default:""}},data(){return{selected:3,found:[{avatar:{name:"AB",color:"brown"},name:"Above Broad",description:"Most Ardently Enormous"}]}},methods:{test(){console.log(this.selected)}}},gt=Zt,xt=(0,O.Z)(gt,_t,vt,!1,null,"e0a47592",null),wt=xt.exports;r.ZP.use(F.ZP);const yt=[{path:"/",name:"home",component:K},{path:"/login/",name:"login",component:oe},{path:"/login/register/",name:"register",component:de},{path:"/latest/",name:"latest",component:Ze},{path:"/users/",name:"all_users",component:Ce},{path:"/users/:user_id/",name:"users",props:!0,component:Oe},{path:"/forums/:forum_id/",name:"forum",props:!0,component:Ne},{path:"/forums/:forum_id/new_thread/",name:"newThread",props:!0,component:Xe},{path:"/forums/:forum_id/threads/:thread_id/",name:"thread",props:!0,component:ft},{path:"/search/",name:"search",props:!0,component:wt}],bt=new F.ZP({mode:"history",base:"/CS6131Assignment1/",routes:yt,scrollBehavior(e,t,s){return e.hash?{selector:e.hash,behavior:"smooth",offset:{x:0,y:80}}:s||void 0}});var Ct=bt,kt=s(2250);r.ZP.use(kt.Z);var Pt=new kt.Z({theme:{dark:!0}});r.ZP.config.productionTip=!1,new r.ZP({router:Ct,vuetify:Pt,render:e=>e(j)}).$mount("#app")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,n){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(t&&t(r);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},r=self["webpackChunkassignment1"]=self["webpackChunkassignment1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(5740)}));r=s.O(r)})();
//# sourceMappingURL=app.9468771f.js.map