function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" #email required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" #phrase required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" (click)=\"signUp(email, phrase)\" expand=\"block\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/registration/registration-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppPagesRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");

    var routes = [{
      path: '',
      component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }];

    var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
      _classCallCheck(this, RegistrationPageRoutingModule);
    };

    RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppPagesRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/pages/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");

    var RegistrationPageModule = function RegistrationPageModule() {
      _classCallCheck(this, RegistrationPageModule);
    };

    RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
      declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.ts ***!
    \*********************************************************/

  /*! exports provided: RegistrationPage */

  /***/
  function srcAppPagesRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
      return RegistrationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var RegistrationPage = /*#__PURE__*/function () {
      function RegistrationPage(authService, router) {
        _classCallCheck(this, RegistrationPage);

        this.authService = authService;
        this.router = router;
      }

      _createClass(RegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp(email, phrase) {
          var _this = this;

          this.authService.registerUser(email.value, phrase.value).then(function (res) {
            console.log(res);

            _this.authService.sendVerificationMail();

            _this.router.navigate(['verify-email']);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        }
      }]);

      return RegistrationPage;
    }();

    RegistrationPage.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-registration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registration.page.scss */
      "./src/app/pages/registration/registration.page.scss"))["default"]]
    })], RegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registration-registration-module-es5.js.map