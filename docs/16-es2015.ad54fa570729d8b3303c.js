(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(t,n,e){"use strict";e.r(n),e.d(n,"LoginPageModule",(function(){return u}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),b=e("tyNb"),c=e("fXoL"),s=e("ej43");const a=[{path:"",component:(()=>{class t{constructor(t,n){this.authService=t,this.router=n}ngOnInit(){}logIn(t,n){this.authService.signIn(t.value,n.value).then(t=>{if(!this.authService.isEmailVerified)return window.alert("Email \u5c1a\u672a\u9a57\u8b49"),!1;this.router.navigate(["dashboard"])}).catch(t=>{window.alert(t.message)})}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(s.a),c.Kb(b.g))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-login"]],decls:22,vars:0,consts:[["slot","start"],["defaultHref","/"],["lines","full"],["position","floating"],["type","text","required",""],["email",""],["type","password","required",""],["phrase",""],["type","submit","expand","block",3,"click"]],template:function(t,n){if(1&t){const t=c.Ob();c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar"),c.Nb(2,"ion-buttons",0),c.Lb(3,"ion-back-button",1),c.Mb(),c.Nb(4,"ion-title"),c.lc(5,"\u767b\u5165"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content"),c.Nb(7,"form"),c.Nb(8,"ion-item",2),c.Nb(9,"ion-label",3),c.lc(10,"Email"),c.Mb(),c.Lb(11,"ion-input",4,5),c.Mb(),c.Nb(13,"ion-item",2),c.Nb(14,"ion-label",3),c.lc(15,"Password"),c.Mb(),c.Lb(16,"ion-input",6,7),c.Mb(),c.Nb(18,"ion-row"),c.Nb(19,"ion-col"),c.Nb(20,"ion-button",8),c.Vb("click",(function(){c.hc(t);const e=c.gc(12),i=c.gc(17);return n.logIn(e,i)})),c.lc(21,"\u767b\u5165"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}},directives:[r.l,r.v,r.e,r.b,r.c,r.u,r.g,o.h,o.e,o.f,r.o,r.p,r.n,r.A,r.s,r.f,r.d],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[b.i.forChild(a)],b.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[i.c,o.a,r.w,l]]}),t})()}}]);