(window.webpackJsonp=window.webpackJsonp||[]).push([[32,9],{295:function(t,e,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("4f9ebf5a",content,!0,{sourceMap:!1})},296:function(t,e,o){"use strict";o.r(e);var r=o(299),n=o.n(r),l=o(77),c=o.n(l),d={data:function(){return{url:"https://cms.akademisepakbola.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),form:{id:"",name:""}}},methods:{logout:function(){localStorage.clear(),this.$auth.logout({headers:{"Content-Type":"application/json",Authorization:this.token}}),n.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",n.a.stopTimer),t.addEventListener("mouseleave",n.a.resumeTimer)}}).fire({icon:"info",title:"Logout Berhasil!"})}},mounted:function(){var t=this,e={"Content-Type":"application/json",Authorization:this.token};c.a.get(this.url+"/api/user",{headers:e}).then((function(e){return t.form=e.data})).catch((function(t){return console.log(t)}))}},m=(o(297),o(66)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"topnav d-none d-md-block",attrs:{id:"myTopnav"}},[o("a",{staticClass:"x",attrs:{href:""},on:{click:t.logout}},[o("i",{staticClass:"fa fa-sign-out"}),t._v(" Logout")]),t._v(" "),o("nuxt-link",{staticClass:"x",attrs:{to:"/auth/user/"}},[o("i",{staticClass:"fa fa-user-o"}),t._v(" "+t._s(t.form.name))])],1)])}),[],!1,null,"07ca20c4",null);e.default=component.exports},297:function(t,e,o){"use strict";o(295)},298:function(t,e,o){var r=o(64)(!1);r.push([t.i,"body[data-v-07ca20c4]{margin:0;font-family:Arial,Helvetica,sans-serif}.topnav[data-v-07ca20c4]{overflow:hidden;background-color:#02554f}.topnav a[data-v-07ca20c4]{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a[data-v-07ca20c4]:hover{background-color:#f6b756;color:#02554f}.topnav a.active[data-v-07ca20c4]{background-color:#04aa6d;color:#fff}.topnav .icon[data-v-07ca20c4]{display:none}.topnav .x[data-v-07ca20c4]{float:right}@media screen and (max-width:600px){.topnav a[data-v-07ca20c4]:not(:first-child){display:none}.topnav a.icon[data-v-07ca20c4]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[data-v-07ca20c4]{position:relative}.topnav.responsive .icon[data-v-07ca20c4]{position:absolute;right:0;top:0}.topnav.responsive a[data-v-07ca20c4]{float:none;display:block;text-align:left}}",""]),t.exports=r},352:function(t,e,o){var content=o(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("49db1797",content,!0,{sourceMap:!1})},405:function(t,e,o){"use strict";o(352)},406:function(t,e,o){var r=o(64)(!1);r.push([t.i,".timprofil[data-v-3dc1afe1]{background-color:#e4e5e6}",""]),t.exports=r},464:function(t,e,o){"use strict";o.r(e);var r=o(25),n=(o(78),o(18),o(299)),l=o.n(n),c=o(77),d=o.n(c),m={middleware:"authuser",data:function(){return{url:"https://cms.akademisepakbola.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),user_id:this.$auth.$storage.getLocalStorage("user").id,selectedFile:null,selectedName:"Pilih foto ..",kota:[],kat:[],form:{id:"",nama_tim:"",kategori_id:"",city_id:"",alamat:"",logo:"",email_tim:"",no_hp_tim:"",homebase:"",onwer:"",staf_pelatih:"",deskripsi:"",link_facebook:"",link_instagram:"",link_youtube:"",status_tim:""}}},methods:{onFileSelected:function(t){this.selectedFile=t.target.files[0],this.selectedName=t.target.files[0].name},updatetim:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={"Content-Type":"application/json",Authorization:t.token},[],e.next=5,t.$axios.$put("/updatetim",t.form,{headers:o}).then((function(t){l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",l.a.stopTimer),t.addEventListener("mouseleave",l.a.resumeTimer)}}).fire({icon:"success",title:"Update Berhasil!"})})).catch((function(t){(t.response.status=422)&&l.a.fire({icon:"error",title:"Update Gagal!",text:"xxx",confirmButtonColor:"#F27474"})}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},updateFoto:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={"Content-Type":"application/json",Authorization:t.token},[],(r=new FormData).append("image",t.selectedFile),e.next=7,t.$axios.$post("/update-logo/"+t.form.id,r,{headers:o}).then((function(t){l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:4e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",l.a.stopTimer),t.addEventListener("mouseleave",l.a.resumeTimer)}}).fire({icon:"success",title:"Update Logo Berhasil!"}),location.reload("/auth/timprofil")})).catch((function(t){(t.response.status=422)&&l.a.fire({icon:"error",title:"Update Logo Gagal!",text:"Type: PNG, max: 2Mb",confirmButtonColor:"#F27474"})}));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){var t=this;d.a.get(this.url+"/api/getcity").then((function(e){return t.kota=e.data.data})).catch((function(t){return console.log(t)})),d.a.get(this.url+"/api/getkategoritim").then((function(e){return t.kat=e.data.data})).catch((function(t){return console.log(t)})),d.a.get(this.url+"/api/teamku/"+this.user_id).then((function(e){return t.form=e.data.data})).catch((function(t){return console.log(t)}))}},v=(o(405),o(66)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex timprofil",attrs:{id:"wrapper"}},[o("Sidebar2"),t._v(" "),o("div",{attrs:{id:"page-content-wrapper"}},[o("Nav"),t._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row p-4"},[o("div",{staticClass:"col-sm-12 mt-4"},[o("div",{staticClass:"title"},[o("h6",{staticClass:"text-secondary mb-2"},[o("b",[o("nuxt-link",{staticClass:"text-secondary",attrs:{to:"/auth/dashboard"}},[t._v("Dashboard ")]),t._v(" "),o("i",{staticClass:"fa fa-angle-right"}),t._v(" "),o("span",{staticClass:"text-h"},[t._v(" Tim Profil ")])],1)])]),t._v(" "),o("div",{staticClass:"row p-1"},[o("div",{staticClass:"col-sm-9"},[o("div",{staticClass:"card bg-white p-4"},[o("form",{staticClass:"pt-2 pb-4",on:{submit:function(e){return e.preventDefault(),t.updatetim.apply(null,arguments)}}},[o("validationObserver",[o("table",{staticClass:"table-sm text-secondary",attrs:{width:"100%"}},[o("thead",{staticClass:"text-secondary"},[o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Nama Tim")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("ValidationProvider",{attrs:{rules:"required|max:150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama_tim,expression:"form.nama_tim"}],staticClass:"form-control",attrs:{type:"text",maxlength:"150",minlength:"5",required:""},domProps:{value:t.form.nama_tim},on:{input:function(e){e.target.composing||t.$set(t.form,"nama_tim",e.target.value)}}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Kategori")]),t._v(" "),o("td",{attrs:{width:"75%"}},[t.kat.length>0?o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.kategori_id,expression:"form.kategori_id"}],staticClass:"form-control",attrs:{name:"kat",id:"kat",tabindex:"12",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"kategori_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("Pilih kategori")]),t._v(" "),t._l(t.kat,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.team_kategori)+"\n                                        ")])}))],2):t._e()])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Kota/Kab")]),t._v(" "),o("td",{attrs:{width:"75%"}},[t.kota.length>0?o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.city_id,expression:"form.city_id"}],staticClass:"form-control",attrs:{name:"kota",id:"kota",tabindex:"12",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"city_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("Pilih kabupaten / kota")]),t._v(" "),t._l(t.kota,(function(e){return o("optgroup",{key:e.id,attrs:{label:e.title_province}},t._l(e.city,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title_city))])})),0)}))],2):t._e()])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Alamat Sekretariat")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.alamat,expression:"form.alamat"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255",required:""},domProps:{value:t.form.alamat},on:{input:function(e){e.target.composing||t.$set(t.form,"alamat",e.target.value)}}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Email Tim")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("ValidationProvider",{attrs:{rules:"required|max:125"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email_tim,expression:"form.email_tim"}],staticClass:"form-control",attrs:{type:"email",maxlength:"125",required:""},domProps:{value:t.form.email_tim},on:{input:function(e){e.target.composing||t.$set(t.form,"email_tim",e.target.value)}}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("No Telepone")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("ValidationProvider",{attrs:{rules:"required|max:15"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.no_hp_tim,expression:"form.no_hp_tim"}],staticClass:"form-control",attrs:{type:"text",maxlength:"15",required:""},domProps:{value:t.form.no_hp_tim},on:{input:function(e){e.target.composing||t.$set(t.form,"no_hp_tim",e.target.value)}}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Homebase")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("ValidationProvider",{attrs:{rules:"required|max:150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.homebase,expression:"form.homebase"}],staticClass:"form-control",attrs:{type:"text",maxlength:"150",required:""},domProps:{value:t.form.homebase},on:{input:function(e){e.target.composing||t.$set(t.form,"homebase",e.target.value)}}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Onwer")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.onwer,expression:"form.onwer"}],staticClass:"form-control",attrs:{type:"text",maxlength:"125"},domProps:{value:t.form.onwer},on:{input:function(e){e.target.composing||t.$set(t.form,"onwer",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Staf Pelatih")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.staf_pelatih,expression:"form.staf_pelatih"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255"},domProps:{value:t.form.staf_pelatih},on:{input:function(e){e.target.composing||t.$set(t.form,"staf_pelatih",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Deskripsi")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("b-form-textarea",{attrs:{id:"textarea",placeholder:"",rows:"3","max-rows":"6"},model:{value:t.form.deskripsi,callback:function(e){t.$set(t.form,"deskripsi",e)},expression:"form.deskripsi"}})],1)]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Link Facebook")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link_facebook,expression:"form.link_facebook"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255"},domProps:{value:t.form.link_facebook},on:{input:function(e){e.target.composing||t.$set(t.form,"link_facebook",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Link Instagram")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link_instagram,expression:"form.link_instagram"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255"},domProps:{value:t.form.link_instagram},on:{input:function(e){e.target.composing||t.$set(t.form,"link_instagram",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Link Youtube")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link_youtube,expression:"form.link_youtube"}],staticClass:"form-control",attrs:{type:"text",maxlength:"255"},domProps:{value:t.form.link_youtube},on:{input:function(e){e.target.composing||t.$set(t.form,"link_youtube",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{width:"25%"}},[t._v("Status Publikasi")]),t._v(" "),o("td",{attrs:{width:"75%"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status_tim,expression:"form.status_tim"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status_tim",e.target.multiple?o:o[0])}}},[o("option",{staticClass:"text-danger",attrs:{value:"0"}},[t._v("Non Aktif")]),t._v(" "),o("option",{staticClass:"text-success",attrs:{value:"1"}},[t._v("Aktif")])])])]),t._v(" "),o("tr",{staticClass:"pt-2"},[o("td",{staticClass:"text-right mb-0",attrs:{colspan:"2"}},[o("br"),t._v(" "),o("nuxt-link",{staticClass:"btn btn-r text-white",attrs:{to:"/auth/dashboard",align:"right"}},[t._v("Kembali")]),t._v(" "),o("button",{staticClass:"btn btn-h",attrs:{align:"right",type:"submit"}},[t._v("Update Data")])],1)])])])])],1)])]),t._v(" "),o("div",{staticClass:"col-sm-3"},[o("div",{staticClass:"card bg-white"},[o("div",{staticClass:"col-sm-12 p-4 text-center"},[o("img",{staticClass:"img-fluid mt-0 p-2",attrs:{src:t.url+t.form.logo,alt:"",width:"80%"}})]),t._v(" "),o("div",{staticClass:"col-sm-12 p-4 text-white"},[o("hr"),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"custom-file"},[o("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"validatedCustomFile",required:""},on:{change:t.onFileSelected}}),t._v(" "),o("label",{staticClass:"custom-file-label text-secondary ",attrs:{for:"validatedCustomFile"}},[t._v(" "+t._s(t.selectedName))]),t._v(" "),o("div",{staticClass:"invalid-feedback"})]),t._v(" "),o("button",{staticClass:"btn btn-h  btn-block mt-3 mb-2",on:{click:t.updateFoto}},[t._v(" Update Logo")])])])])])])])])],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"text-secondary"},[t._v("Ganti Logo "),o("small",{staticClass:"text-danger"},[t._v("*file: png"),o("br"),t._v("  Max: 2mb \n                                ukuran di sarankan 400 x 400 pixel "),o("br"),t._v("Tanpa background atau background putih")])])}],!1,null,"3dc1afe1",null);e.default=component.exports;installComponents(component,{Sidebar2:o(304).default,Nav:o(296).default})}}]);