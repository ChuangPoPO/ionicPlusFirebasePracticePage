(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-idea-list-idea-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-list/idea-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-list/idea-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My IdeaList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/idea\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let idea of (ideas | async)\" [routerLink]=\"['/idea', idea.id]\">\n      {{ idea.name }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/idea-list/idea-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/idea-list/idea-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IdeaListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaListPageRoutingModule", function() { return IdeaListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _idea_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idea-list.page */ "./src/app/pages/idea-list/idea-list.page.ts");




const routes = [
    {
        path: '',
        component: _idea_list_page__WEBPACK_IMPORTED_MODULE_3__["IdeaListPage"]
    }
];
let IdeaListPageRoutingModule = class IdeaListPageRoutingModule {
};
IdeaListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeaListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/idea-list/idea-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/idea-list/idea-list.module.ts ***!
  \*****************************************************/
/*! exports provided: IdeaListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaListPageModule", function() { return IdeaListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _idea_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idea-list-routing.module */ "./src/app/pages/idea-list/idea-list-routing.module.ts");
/* harmony import */ var _idea_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idea-list.page */ "./src/app/pages/idea-list/idea-list.page.ts");







let IdeaListPageModule = class IdeaListPageModule {
};
IdeaListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _idea_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeaListPageRoutingModule"]
        ],
        declarations: [_idea_list_page__WEBPACK_IMPORTED_MODULE_6__["IdeaListPage"]]
    })
], IdeaListPageModule);



/***/ }),

/***/ "./src/app/pages/idea-list/idea-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/idea-list/idea-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lkZWEtbGlzdC9pZGVhLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/idea-list/idea-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/idea-list/idea-list.page.ts ***!
  \***************************************************/
/*! exports provided: IdeaListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaListPage", function() { return IdeaListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/idea.service */ "./src/app/services/idea.service.ts");



let IdeaListPage = class IdeaListPage {
    constructor(ideaService) {
        this.ideaService = ideaService;
    }
    ngOnInit() {
        this.ideas = this.ideaService.getIdeas();
    }
};
IdeaListPage.ctorParameters = () => [
    { type: src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_2__["IdeaService"] }
];
IdeaListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./idea-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-list/idea-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./idea-list.page.scss */ "./src/app/pages/idea-list/idea-list.page.scss")).default]
    })
], IdeaListPage);



/***/ })

}]);
//# sourceMappingURL=pages-idea-list-idea-list-module-es2015.js.map