(window.webpackJsonp=window.webpackJsonp||[]).push([[45,6,9,10,18,19],{295:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("4f9ebf5a",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);var r=n(299),o=n.n(r),l=n(77),d=n.n(l),c={data:function(){return{url:"https://cms.akademisepakbola.com",token:"Bearer "+this.$auth.$storage.getLocalStorage("access_token"),form:{id:"",name:""}}},methods:{logout:function(){localStorage.clear(),this.$auth.logout({headers:{"Content-Type":"application/json",Authorization:this.token}}),o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",o.a.stopTimer),t.addEventListener("mouseleave",o.a.resumeTimer)}}).fire({icon:"info",title:"Logout Berhasil!"})}},mounted:function(){var t=this,e={"Content-Type":"application/json",Authorization:this.token};d.a.get(this.url+"/api/user",{headers:e}).then((function(e){return t.form=e.data})).catch((function(t){return console.log(t)}))}},m=(n(297),n(66)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"topnav d-none d-md-block",attrs:{id:"myTopnav"}},[n("a",{staticClass:"x",attrs:{href:""},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out"}),t._v(" Logout")]),t._v(" "),n("nuxt-link",{staticClass:"x",attrs:{to:"/auth/user/"}},[n("i",{staticClass:"fa fa-user-o"}),t._v(" "+t._s(t.form.name))])],1)])}),[],!1,null,"07ca20c4",null);e.default=component.exports},297:function(t,e,n){"use strict";n(295)},298:function(t,e,n){var r=n(64)(!1);r.push([t.i,"body[data-v-07ca20c4]{margin:0;font-family:Arial,Helvetica,sans-serif}.topnav[data-v-07ca20c4]{overflow:hidden;background-color:#02554f}.topnav a[data-v-07ca20c4]{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav a[data-v-07ca20c4]:hover{background-color:#f6b756;color:#02554f}.topnav a.active[data-v-07ca20c4]{background-color:#04aa6d;color:#fff}.topnav .icon[data-v-07ca20c4]{display:none}.topnav .x[data-v-07ca20c4]{float:right}@media screen and (max-width:600px){.topnav a[data-v-07ca20c4]:not(:first-child){display:none}.topnav a.icon[data-v-07ca20c4]{float:right;display:block}}@media screen and (max-width:600px){.topnav.responsive[data-v-07ca20c4]{position:relative}.topnav.responsive .icon[data-v-07ca20c4]{position:absolute;right:0;top:0}.topnav.responsive a[data-v-07ca20c4]{float:none;display:block;text-align:left}}",""]),t.exports=r},300:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7ede9156",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(300)},307:function(t,e,n){var r=n(64)(!1);r.push([t.i,".btnnav[data-v-1a44de2e]{background-color:#02554f;color:#f1f1f1;border:1px solid #02554f;margin-bottom:-2px;font-weight:450}.btnnav[data-v-1a44de2e]:hover{background-color:#02312e;color:#f1f1f1;border:1px solid #014943;transition:.5s;font-weight:500}.footer[data-v-1a44de2e]{background-color:#035b53;color:#fff;box-sizing:border-box}.text-title[data-v-1a44de2e]{font-weight:700;color:#2e3a53}.footer-2-2 .list-space[data-v-1a44de2e]{margin-bottom:1rem}.footer-2-2 .list[data-v-1a44de2e]:hover{margin-bottom:1rem;transition:.7s;color:#fff;border-bottom:1px solid #eee}.footer-2-2 .footer-text-title[data-v-1a44de2e]{font-size:1.2rem;font-weight:600;color:#f5f5f5;margin-bottom:1.5rem}.footer-2-2 .list-menu[data-v-1a44de2e]{color:#c7c7c7;text-decoration:none!important}.footer-2-2 hr.hr[data-v-1a44de2e]{margin:0;border:0;border-top:1px solid rgba(0,0,0,.1)}.footer-2-2 .border-color[data-v-1a44de2e],.footer-2-2 .footer-link[data-v-1a44de2e]{color:#c7c7c7}.footer-2-2 .footer-link[data-v-1a44de2e]:hover{color:#555252}.footer-2-2 .social-media-c:hover circle[data-v-1a44de2e],.footer-2-2 .social-media-p:hover path[data-v-1a44de2e]{fill:#555252}.footer-2-2 .footer-info-space[data-v-1a44de2e]{padding-top:1rem}.footer-2-2 .list-footer[data-v-1a44de2e]{padding:2rem 1rem 3rem}.footer-2-2 .info-footer[data-v-1a44de2e]{padding:0 1rem 3rem}@media (min-width:576px){.footer-2-2 .list-footer[data-v-1a44de2e]{padding:2rem 2rem 3rem}.footer-2-2 .info-footer[data-v-1a44de2e]{padding:0 2rem 3rem}}",""]),t.exports=r},308:function(t,e,n){"use strict";n.r(e);n(306);var r=n(66),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-100 w-100 pt-4 footer",staticStyle:{"font-family":"'Inter', sans-serif"},attrs:{id:"footer"}},[n("div",{staticClass:"footer-2-2 container p-0 text-white"},[n("div",{staticClass:"list-footer "},[n("div",{staticClass:"row gap-md-0 gap-3"},[n("div",{staticClass:"col-sm-3 col-xs-6"},[n("h2",{staticClass:"footer-text-title"},[t._v("Halaman")]),t._v(" "),n("nav",{staticClass:"list-unstyled"},[n("li",{staticClass:"list-space"},[n("nuxt-link",{staticClass:"list list-menu",attrs:{to:"/tim"}},[t._v("Daftar Tim")])],1),t._v(" "),n("li",{staticClass:"list-space"},[n("nuxt-link",{staticClass:"list list-menu",attrs:{to:"/blog"}},[t._v("Blog Berita")])],1),t._v(" "),n("li",{staticClass:"list-space"},[n("nuxt-link",{staticClass:"list list-menu",attrs:{to:"/auth/masuk"}},[t._v("Halaman Masuk ")])],1),t._v(" "),n("li",{staticClass:"list-space"},[n("nuxt-link",{staticClass:"list list-menu",attrs:{to:"/auth/daftar"}},[t._v("Halaman Pendaftaran ")])],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"col-sm-3 col-xs-6"},[n("h2",{staticClass:"footer-text-title"},[t._v("Social Media")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-sm mb-1 btnnav",attrs:{to:"/"}},[n("i",{staticClass:"fa fa-envelope  p-1"})]),t._v(" "),t._m(2),t._v(" "),n("nuxt-link",{staticClass:"btn btn-sm mb-1 btnnav",attrs:{to:"/"}},[n("i",{staticClass:"fa fa-facebook p-1"})]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-sm mb-1 btnnav",attrs:{to:"/"}},[n("i",{staticClass:"fa fa-whatsapp p-1"})])],1)])]),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 col-xs-6"},[n("div",{staticClass:"list-space"},[n("h2",{staticClass:"footer-text-title"},[t._v("Informasi")]),t._v(" "),n("nav",{staticClass:"list-unstyled"},[n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:"/tentang-kami"}},[t._v("Tentang Kami")])]),t._v(" "),n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:"/road-map"}},[t._v("Road Map Developer")])]),t._v(" "),n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:""}},[t._v("Syarat & Ketentuan")])]),t._v(" "),n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:""}},[t._v("Dokumentasi Pengunaan")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 col-xs-6"},[n("h2",{staticClass:"footer-text-title"},[t._v("Didukung oleh")]),t._v(" "),n("nav",{staticClass:"list-unstyled"},[n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:""}},[t._v("sponsor     sponsor")])]),t._v(" "),n("li",{staticClass:"list-space"},[n("a",{staticClass:"list list-menu",attrs:{href:""}},[t._v("sponsor     sponsor")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-sm mb-1 btnnav",attrs:{href:"https://www.instagram.com/akademi_sepakbola/"}},[e("i",{staticClass:"fa fa-instagram p-1"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-color info-footer"},[n("div",{},[n("hr",{staticClass:"hr"})]),t._v(" "),n("div",{staticClass:"mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4"},[n("div",{staticClass:"d-flex title-font font-medium align-items-center gap-4"},[n("p",{staticClass:"list-menu text-left"},[t._v("Email: admin@akademisepakbola.com")])]),t._v(" "),n("nav",{staticClass:"mx-auto d-flex flex-wrap align-items-center justify-content-center gap-4"}),t._v(" "),n("nav",{staticClass:"d-flex flex-lg-row flex-column align-items-center justify-content-end"},[n("p",[t._v("©2021 AkademiSepakbola.com")])])])])}],!1,null,"1a44de2e",null);e.default=component.exports;installComponents(component,{Nav:n(296).default})},313:function(t,e,n){t.exports=n.p+"img/logo11.4a367c2.png"},314:function(t,e,n){t.exports=n.p+"img/k22.22304f8.png"},315:function(t,e,n){t.exports=n.p+"img/ux.f05b4d8.png"},316:function(t,e,n){t.exports=n.p+"img/uxx.bfe1fc5.png"},323:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("387d865d",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("394c2300",content,!0,{sourceMap:!1})},325:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("57bc89e8",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n(323)},329:function(t,e,n){var r=n(64)(!1);r.push([t.i,'.navbar-atas[data-v-be003c70]{background-color:#f5f5f5}.nuxtlink[data-v-be003c70]:hover{background-color:#eee}.nav-item[data-v-be003c70]{display:inline-block;color:#000;text-decoration:none}.nav-item[data-v-be003c70]:after{content:"";display:block;margin-left:11px;width:0;height:2px;background:#005a51;transition:width .3s}.nav-item[data-v-be003c70]:hover:after{width:100%;transition:width .3s}.nuxtlink[data-v-be003c70]{color:#035b53;text-decoration:none}.btnnav[data-v-be003c70]{background-color:#f5f5f5;color:#02554f;border:1px solid #005a51;margin-bottom:-2px;font-weight:450;border-radius:1%}.btnnav[data-v-be003c70]:hover{background-color:#005a51;color:#f1f1f1;border:1px solid #02554f;transition:.5s;font-weight:500}',""]),t.exports=r},330:function(t,e,n){"use strict";n(324)},331:function(t,e,n){var r=n(64)(!1);r.push([t.i,'.banner[data-v-2d29d633]{background:#174e46;background:linear-gradient(90deg,#174e46,#225e54 76%)}.images-hero[data-v-2d29d633]{width:75%;margin-bottom:10%}.navbar-atas[data-v-2d29d633]{background-color:#f5f5f5}.header-4-2 .modal-item.modal[data-v-2d29d633]{top:2rem}.nuxtlink[data-v-2d29d633]:hover{background-color:#eee}.nav-item[data-v-2d29d633]{display:inline-block;color:#f5f5f5;text-decoration:none}.nav-item[data-v-2d29d633]:after{content:"";display:block;margin-left:11px;width:0;height:2px;background:#f6b756;transition:width .3s}.nav-item[data-v-2d29d633]:hover:after{width:100%;transition:width .3s}.nuxtlink[data-v-2d29d633]{color:#205c53;text-decoration:none}.header-4-2 .hero[data-v-2d29d633],.header-4-2 .navbar[data-v-2d29d633]{padding:3rem 2rem}.header-4-2 .navbar-light .navbar-nav .nav-link[data-v-2d29d633],.header-4-2 .navbar-light .navbar-nav .nav-link[data-v-2d29d633]:hover{color:#f5f5f5;transition:.3s}.header-4-2 .navbar-light .navbar-nav .active>.nav-link[data-v-2d29d633],.header-4-2 .navbar-light .navbar-nav .nav-link.active[data-v-2d29d633],.header-4-2 .navbar-light .navbar-nav .nav-link.show[data-v-2d29d633],.header-4-2 .navbar-light .navbar-nav .show>.nav-link[data-v-2d29d633]{font-weight:600;transition:.3s}.header-4-2 .btn[data-v-2d29d633]:active,.header-4-2 .btn[data-v-2d29d633]:focus{outline:none!important}.header-4-2 .btn-fill[data-v-2d29d633]{background-color:#205c53;border-radius:12px;padding:12px 32px;transition:.3s}.header-4-2 .btn-fill[data-v-2d29d633]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);transition:.3s}.header-4-2 .btn-no-fill[data-v-2d29d633]{color:#f5f5f5;padding:12px 32px;transition:.3s}.header-4-2 .modal-item .modal-dialog .modal-content[data-v-2d29d633]{border-radius:8px;transition:.3s}.header-4-2 .responsive li a[data-v-2d29d633]{padding:1rem;transition:.3s}.header-4-2 .text-caption[data-v-2d29d633]{box-shadow:#205c53;margin-bottom:2.5rem}.header-4-2 .left-column[data-v-2d29d633]{margin-bottom:2.75rem;width:100%}.header-4-2 .right-column[data-v-2d29d633]{width:100%}.header-4-2 .title-text-big[data-v-2d29d633]{margin-bottom:2rem;color:#f5f5f5}.header-4-2 .btn-try[data-v-2d29d633]{border:2px solid #174e46;color:#174e46;padding:1rem 1.3rem;border-radius:.75rem;background-color:#f6b756;transition:.3s}.header-4-2 .btn-try[data-v-2d29d633]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.3),0 4px 6px -2px rgba(0,0,0,0.07);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);transition:.3s;border:2px solid #174e46}.header-4-2 .btn-outline[data-v-2d29d633]{border:2px solid #205c53;color:#205c53;padding:1rem 1.5rem;border-radius:.4 5rem;background-color:#f6b756;transition:.3s}.header-4-2 .btn-outline[data-v-2d29d633]:hover{border:2px solid #205c53;color:#174e46;transition:.3s}.header-4-2 .btn-outline:hover div path[data-v-2d29d633]{fill:#205c53;transition:.3s}@media (min-width:768px){.header-4-2 .navbar[data-v-2d29d633]{padding:3rem 4rem}.header-4-2 .hero[data-v-2d29d633]{padding:3rem 4rem 5rem}.header-4-2 .left-column[data-v-2d29d633]{margin-bottom:3rem}}@media (min-width:992px){.header-4-2 .navbar-expand-lg .navbar-nav .nav-link[data-v-2d29d633]{padding-right:1.25rem;padding-left:1.25rem}.header-4-2 .navbar[data-v-2d29d633]{padding:3rem 6rem}.header-4-2 .hero[data-v-2d29d633]{padding:3rem 6rem 5rem}.header-4-2 .left-column[data-v-2d29d633]{width:50%;margin-bottom:0}.header-4-2 .right-column[data-v-2d29d633]{width:50%}.header-4-2 .title-text-big[data-v-2d29d633]{font-size:3.75rem;line-height:1.2}}',""]),t.exports=r},332:function(t,e,n){"use strict";n(325)},333:function(t,e,n){var r=n(64)(!1);r.push([t.i,".timdev[data-v-c054f544]{text-decoration:none}.bg-kontak[data-v-c054f544],.timdev[data-v-c054f544]{background-color:#f8f8f8}.ava[data-v-c054f544]{background-color:#205c53;margin-bottom:10px}.ava[data-v-c054f544],.ava[data-v-c054f544]:hover{border-radius:1%}.ava[data-v-c054f544]:hover{background-color:#184d45;transition:1s;cursor:pointer;image-resolution:120%}.card-kategori[data-v-c054f544]:hover{text-decoration:none;box-shadow:inset 0 1px 1px #fff,0 0 4px #6c6e72}.card[data-v-c054f544]{text-decoration:none;background-color:#205c53;border:2px solid #205c53;color:#f5f5f5}.card[data-v-c054f544]:hover{border:2px solid #f6b756}.icon[data-v-c054f544]{background-color:#205c53;border-radius:10%;width:35%}.kategori[data-v-c054f544]{background-color:#f5f5f5}.text-x[data-v-c054f544]{font-weight:600;color:#13413a}.title[data-v-c054f544]{font-weight:700;color:#f5f5f5}",""]),t.exports=r},373:function(t,e,n){"use strict";n.r(e);var r=n(299),o=n.n(r),l=n(77),d=n.n(l),c={data:function(){return{url:"https://cms.akademisepakbola.com",form:{email:"",nama:"",no_telepone:"",subject:"",isi_pesan:""},errors:[]}},methods:{kirimPesan:function(t){d.a.post(this.url+"/api/kirim-pesan/",this.form).then((function(t){o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:4e3,timerProgressBar:!1,didOpen:function(t){t.addEventListener("mouseenter",o.a.stopTimer),t.addEventListener("mouseleave",o.a.resumeTimer)}}).fire({icon:"success",title:"Pesan berhasil dikirim!"}),window.$nuxt.$router.push("/tentang-kami")})).catch((function(t){return console.log(t)}))},reset:function(){this.form.email="",this.form.nama="",this.form.no_telepone="",this.form.subject="",this.form.isi_pesan=""}},mounted:function(){this.pesan=this.$route.query.pesan}},m=(n(332),n(66)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"timdev pt-5 pb-5"},[r("div",{staticClass:"container pt-3 pb-4"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid mt-2 ava",attrs:{id:"img-fluid",src:n(315),alt:""}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(315)}})]),t._v(" "),t._m(3),t._v(" "),t._m(4)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(316)}})]),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(316)}})]),t._v(" "),t._m(7),t._v(" "),t._m(8)],1)])]),t._v(" "),t._m(9),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid mt-2 ava",attrs:{id:"img-fluid",src:n(315),alt:""}})]),t._v(" "),t._m(10),t._v(" "),t._m(11)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(315)}})]),t._v(" "),t._m(12),t._v(" "),t._m(13)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(316)}})]),t._v(" "),t._m(14),t._v(" "),t._m(15)],1)]),t._v(" "),r("div",{staticClass:"col-sm-3 col-6 mb-2"},[r("div",{staticClass:" p-3 text-center"},[r("center",[r("img",{staticClass:"img-fluid ava mt-2",attrs:{id:"img-fluid",src:n(316)}})]),t._v(" "),t._m(16),t._v(" "),t._m(17)],1)])]),t._v(" "),r("div",{staticClass:"row bg-kontak p-4 pt-5"},[r("div",{staticClass:"col-sm-12 col-12 mb-2"},[t._m(18),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.kirimPesan.apply(null,arguments)}}},[r("validationObserver",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 mb-3"},[r("label",{staticClass:"text-secondary label",attrs:{for:""}},[t._v("Nama Anda "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|max:125"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama,expression:"form.nama"}],staticClass:"form-control is-danger",class:{input:!0,"is-danger":n},attrs:{type:"text",id:"nama",maxlength:"125",required:""},domProps:{value:t.form.nama},on:{input:function(e){e.target.composing||t.$set(t.form,"nama",e.target.value)}}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"col-sm-6 mb-3"},[r("label",{staticClass:"text-secondary label",attrs:{for:""}},[t._v("Email Anda "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|email|max:125"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:" form-control",attrs:{type:"email",id:"email",maxlength:"125",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"col-sm-6 mb-3"},[r("label",{staticClass:"text-secondary label",attrs:{for:""}},[t._v(" Nomer Telepone "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|max:15"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.no_telepone,expression:"form.no_telepone"}],staticClass:" form-control",attrs:{type:"number",id:"no_telepone",maxlength:"15",required:""},domProps:{value:t.form.no_telepone},on:{input:function(e){e.target.composing||t.$set(t.form,"no_telepone",e.target.value)}}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"col-sm-12 mb-3"},[r("label",{staticClass:"text-secondary label",attrs:{for:""}},[t._v("Subject "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|max:125"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"  form-control",attrs:{type:"text",maxlength:"125",id:"subject",required:""},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"col-sm-12 mb-3"},[r("label",{staticClass:"text-secondary label",attrs:{for:""}},[t._v("Pesan Anda "),r("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|max:255"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.isi_pesan,expression:"form.isi_pesan"}],staticClass:" form-control",attrs:{type:"number",maxlength:"255",id:"isi_pesan",rows:"4",required:""},domProps:{value:t.form.isi_pesan},on:{input:function(e){e.target.composing||t.$set(t.form,"isi_pesan",e.target.value)}}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"col-sm-12 mt-2 text-right"},[r("button",{staticClass:"btn btn-h ",attrs:{type:"submit",width:"200"}},[t._v("Kirim Pesan")])])])])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column text-center w-100"},[n("h5",{staticClass:"pt-5 pb-4"},[n("b",[t._v("TIM KAMI ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("FOUNDER")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("DEVELOPER")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("DEVELOPER")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("DESAIN GRAFIS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"p-3 mt-5"},[n("b",[t._v("DI DUKUNG OLEH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("-")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("-")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("-")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("b",[t._v("MR.X")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("b",{staticClass:"text-center text-secondary"},[t._v("-")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"pt-5 pb-4 pl-1 text-left"},[n("b",[t._v("KONTAK KAMI ")])])}],!1,null,"c054f544",null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e);n(328);var r=n(66),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-atas d-none d-md-block"},[r("b-navbar",{staticClass:"text-white navbar-atas p-2",attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("span",{staticClass:"ml-5"}),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"pl-3",attrs:{src:n(313),alt:"",width:"200"}})])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto mr-5"},[r("nuxt-link",{attrs:{to:"/auth/daftar"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:!t.$auth.$storage.getLocalStorage("loggedIn",!0),expression:"!$auth.$storage.getLocalStorage('loggedIn', true)"}],staticClass:"btn  mr-2 mb-1 btnnav"},[r("i",{staticClass:"fa fa-edit"}),t._v(" Daftarkan Tim ")])]),t._v(" "),r("nuxt-link",{attrs:{to:"/auth/dashboard"}},[t.$auth.$storage.getLocalStorage("loggedIn")?r("p",{staticClass:"btn  mr-2 mb-1 btnnav"},[t._v(" Dashboard ")]):t._e()])],1),t._v(" "),r("span",{staticClass:"mr-3"})],1)],1)],1)}),[],!1,null,"be003c70",null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4 text-right d-none d-md-block"},[e("img",{staticClass:"img-fluid images-hero",attrs:{src:n(314)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4 text-center d-md-none"},[e("img",{staticClass:"img-fluid images-hero",attrs:{src:n(314)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-white ml-3 text-justify",staticStyle:{"margin-top":"15%","line-spacing":"2","line-height":"1.8"}},[n("b",[t._v("Akademisepakbola.com ")]),t._v(" adalah sebuah platform untuk pencarian informasi tentang akademi, diklat, dan sekolah sepakbola di Indonesia. Akademi sepakbola di buat untuk membantu masyarakat umum dalam mendapatkan informasi secara detail tentang akademi, diklat, maupun ssb yang ada di Indonesia. Akademi sepakbola juga dapat menjadi wadah untuk para pengguna, pengelola tim agar bisa saling terhubung dan terkoneksi satu sama lain.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-white ml-3 text-justify",staticStyle:{"margin-top":"15%","line-spacing":"2","line-height":"1.8"}},[n("b",[t._v("Akademisepakbola.com ")]),t._v(" adalah sebuah platform untuk pencarian informasi tentang akademi, diklat, dan sekolah sepakbola di Indonesia. Akademi sepakbola di buat untuk membantu masyarakat umum dalam mendapatkan informasi secara detail tentang akademi, diklat, maupun ssb yang ada di Indonesia. Akademi sepakbola juga dapat menjadi wadah untuk para pengguna, pengelola tim agar bisa saling terhubung dan terkoneksi satu sama lain.")])}],o=(n(330),n(66)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-4-2 banner container-xxl"},[n("div",{staticClass:"row p-5 mw-100"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"col-sm-6 pt-5 p-4 text-left d-none d-md-block"},[t._m(2),t._v(" "),n("p",{staticClass:"text-white ml-3 mt-4 text-justify",staticStyle:{"line-spacing":"2","line-height":"1.8"}},[t._v("Kami bertekad untuk terus berinovasi demi memajukan sepakbola usia muda di Indonesia melalui platfrom akademisepakbola.com para pemilik dan pengelola akademi, ssb dan diklat dapat mempromosikan timnya secara gratis..")]),t._v(" "),n("p",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link text-white",attrs:{to:"/road-map"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Road map developer  ")])],1)]),t._v(" "),n("div",{staticClass:"col-sm-6 pt-2 p-2 text-left d-md-none"},[t._m(3),t._v(" "),n("p",{staticClass:"text-white ml-3 mt-4 text-justify",staticStyle:{"line-spacing":"2","line-height":"1.8"}},[t._v("Kami bertekad untuk terus berinovasi demi memajukan sepakbola usia muda di Indonesia melalui platfrom akademisepakbola.com para pemilik dan pengelola akademi, ssb dan diklat dapat mempromosikan timnya secara gratis..")]),t._v(" "),n("p",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link text-white",attrs:{to:"/road-map"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Road map developer  ")])],1)]),t._v(" "),n("div",{staticClass:"col-sm-2 text-right"})])])}),r,!1,null,"2d29d633",null);e.default=component.exports},454:function(t,e,n){"use strict";n.r(e);var r={head:{title:"AkademiSepakbola - SSB, Diklat, Akademi Sepakbola Indonesia",meta:[{hid:"description",name:"description",content:"AkademiSepakbla.com"}]}},o=n(66),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("TentangKami"),t._v(" "),n("TimDeveloper"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(375).default,TentangKami:n(376).default,TimDeveloper:n(373).default,Footer:n(308).default})}}]);