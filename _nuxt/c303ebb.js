(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9],{295:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("4f9ebf5a",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);var o=n(299),r=n.n(o),c=n(77),l=n.n(c),d={data:function(){return{url:"https://cms.akademisepakbola.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),form:{id:"",name:""}}},methods:{logout:function(){localStorage.clear(),this.$auth.logout({headers:{"Content-Type":"application/json",Authorization:this.token}}),r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",r.a.stopTimer),t.addEventListener("mouseleave",r.a.resumeTimer)}}).fire({icon:"info",title:"Logout Berhasil!"})}},mounted:function(){var t=this,e={"Content-Type":"application/json",Authorization:this.token};l.a.get(this.url+"/api/user",{headers:e}).then((function(e){return t.form=e.data})).catch((function(t){return console.log(t)}))}},h=(n(297),n(66)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"topnav d-none d-md-block",attrs:{id:"myTopnav"}},[n("a",{staticClass:"x",attrs:{href:""},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out"}),t._v(" Logout")]),t._v(" "),n("nuxt-link",{staticClass:"x",attrs:{to:"/auth/user/"}},[n("i",{staticClass:"fa fa-user-o"}),t._v(" "+t._s(t.form.name))])],1)])}),[],!1,null,"07ca20c4",null);e.default=component.exports},297:function(t,e,n){"use strict";n(295)},298:function(t,e,n){var o=n(64)(!1);o.push([t.i,"body[data-v-07ca20c4]{margin:0;font-family:Arial,Helvetica,sans-serif}.topnav[data-v-07ca20c4]{overflow:hidden;background-color:#02554f}.topnav a[data-v-07ca20c4]{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a[data-v-07ca20c4]:hover{background-color:#f6b756;color:#02554f}.topnav a.active[data-v-07ca20c4]{background-color:#04aa6d;color:#fff}.topnav .icon[data-v-07ca20c4]{display:none}.topnav .x[data-v-07ca20c4]{float:right}@media screen and (max-width:600px){.topnav a[data-v-07ca20c4]:not(:first-child){display:none}.topnav a.icon[data-v-07ca20c4]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[data-v-07ca20c4]{position:relative}.topnav.responsive .icon[data-v-07ca20c4]{position:absolute;right:0;top:0}.topnav.responsive a[data-v-07ca20c4]{float:none;display:block;text-align:left}}",""]),t.exports=o},343:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("d9f5d280",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(343)},386:function(t,e,n){var o=n(64)(!1);o.push([t.i,".agenda[data-v-4da76be2]{background-color:#e4e5e6}",""]),t.exports=o},456:function(t,e,n){"use strict";n.r(e);n(9),n(16);var o=n(299),r=n.n(o),c=n(77),l=n.n(c),d={middleware:"authuser",data:function(){return{linkedit:"/auth/agendatim/editdata",url:"https://cms.akademisepakbola.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),user_id:this.$auth.$storage.getLocalStorage("user").id,team_id:this.$auth.$storage.getLocalStorage("team").id,slug:this.$auth.$storage.getLocalStorage("team").slug,agenda:{},team:""}},methods:{agendadelete:function(t){if(confirm("Apakah anda yakin ingin menghapus?")){var e={"Content-Type":"application/json",Authorization:this.token};l.a.delete(this.url+"/api/deleteagenda/"+t,{headers:e}).then((function(t){r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",r.a.stopTimer),t.addEventListener("mouseleave",r.a.resumeTimer)}}).fire({icon:"success",title:"Data Berhasil Dihapus!"}),location.replace("/auth/agendatim/")})).catch((function(t){return console.log(t)}))}}},mounted:function(){var t=this;l.a.get(this.url+"/api/agendatim?team_id="+this.team_id).then((function(e){return t.agenda=e.data.data})).catch((function(t){return console.log(t)}))}},h=(n(385),n(66)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"d-flex agenda",attrs:{id:"wrapper"}},[n("Sidebar2"),t._v(" "),n("div",{attrs:{id:"page-content-wrapper"}},[n("Nav"),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row p-4"},[n("div",{staticClass:"col-sm-12 mt-4"},[n("div",{staticClass:"title"},[n("h6",{staticClass:"text-secondary mb-2"},[n("b",[n("nuxt-link",{staticClass:"text-secondary",attrs:{to:"/auth/dashboard"}},[t._v("Dashboard ")]),t._v(" "),n("i",{staticClass:"fa fa-angle-right"}),t._v(" "),n("span",{staticClass:"text-h"},[t._v(" Agenda Tim ")])],1)])]),t._v(" "),n("div",{staticClass:"bg-white p-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 pl-4 pr-3 pt-3"},[n("p",[n("nuxt-link",{staticClass:"text-secondary ml-1",attrs:{to:/detailtim/+this.slug}},[n("i",{staticClass:"fa fa-long-arrow-right"}),t._v(" Lihat di profil  ")])],1)]),t._v(" "),n("div",{staticClass:"col-sm-6 pt-3 pb-1 pr-4 text-white text-right "},[n("nuxt-link",{staticClass:"btn btn-sm mb-2 btn-h text-white",attrs:{to:"/auth/agendatim/tambahdata",align:"right"}},[t._v(" Tambah Data ")])],1),t._v(" "),n("div",{staticClass:"col-sm-12 pl-4 pr-4 pb-3 text-light"},[n("table",{staticClass:"x-table text-secondary",staticStyle:{"font-size":"13px"},attrs:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.agenda.data,(function(e,o){return n("tr",{key:o},[n("td",{staticClass:"text-center"},[t._v(t._s(o+1))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.created_at))]),t._v(" "),n("td",{staticClass:"text-center"},[n("img",{staticStyle:{height:"50px"},attrs:{src:t.url+e.foto,width:"75"}})]),t._v(" "),n("td",[t._v(t._s(e.judul)+" ")]),t._v(" "),n("td",[t._v(t._s(e.link_info))]),t._v(" "),n("td",{staticClass:"text-right",attrs:{colspan:"2"}},[n("nuxt-link",{staticClass:"btn btn-sm btn-u",attrs:{to:t.linkedit+"?id="+e.id,align:"right"}},[n("i",{staticClass:"fa fa-edit"})]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-r",attrs:{align:"right"},on:{click:function(n){return t.agendadelete(e.id)}}},[n("i",{staticClass:"fa fa-trash"})])],1)])})),0)])])])])])])])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"bg-white "},[n("tr",[n("th",{staticClass:"text-center p-2",attrs:{width:"4%"}},[t._v("No")]),t._v(" "),n("th",{staticClass:"text-center p-2",attrs:{width:"10%"}},[t._v("Tanggal Upload")]),t._v(" "),n("th",{staticClass:"text-center p-2",attrs:{width:"15%"}},[t._v("Foto Agenda")]),t._v(" "),n("th",{staticClass:"p-2",attrs:{width:"25%"}},[t._v("Judul Agenda")]),t._v(" "),n("th",{staticClass:"p-2",attrs:{width:"35%"}},[t._v("Link Info")]),t._v(" "),n("th",{staticClass:"text-right p-2",attrs:{width:"11%"}},[t._v("Aksi")])])])}],!1,null,"4da76be2",null);e.default=component.exports;installComponents(component,{Sidebar2:n(304).default,Nav:n(296).default})}}]);