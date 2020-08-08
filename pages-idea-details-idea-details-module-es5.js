function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-idea-details-idea-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesIdeaDetailsIdeaDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons solt=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Idea Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"stacked\">Name</ion-label>\n    <ion-input [(ngModel)]=\"idea.name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Notes</ion-label>\n    <ion-textarea [(ngModel)]=\"idea.notes\" rows=\"8\"></ion-textarea>\n  </ion-item>\n</ion-content>\n\n<ion-footer *ngIf=\"!idea.id\">\n  <ion-toolbar color=\"success\">\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addIdea()\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      Add Idea\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"idea.id\">\n  <ion-row no-padding text-center>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deleteIdea()\">\n        <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n        Delete\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updateIdea()\">\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n        Update\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-toolbar color=\"success\">\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addIdea()\">\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n      Add Idea\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/@core/data/domain/model.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/data/domain/model.ts ***!
    \********************************************/

  /*! exports provided: BaseEntity, Idea, Task, JobContent, Staff */

  /***/
  function srcAppCoreDataDomainModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseEntity", function () {
      return BaseEntity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Idea", function () {
      return Idea;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobContent", function () {
      return JobContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Staff", function () {
      return Staff;
    });

    var BaseEntity = function BaseEntity() {
      _classCallCheck(this, BaseEntity);
    };

    var Idea = /*#__PURE__*/function (_BaseEntity) {
      _inherits(Idea, _BaseEntity);

      var _super = _createSuper(Idea);

      function Idea() {
        var _this;

        _classCallCheck(this, Idea);

        _this = _super.call(this);
        _this.name = '';
        _this.notes = '';
        return _this;
      }

      return Idea;
    }(BaseEntity);

    var Task = /*#__PURE__*/function (_BaseEntity2) {
      _inherits(Task, _BaseEntity2);

      var _super2 = _createSuper(Task);

      function Task() {
        _classCallCheck(this, Task);

        return _super2.apply(this, arguments);
      }

      return Task;
    }(BaseEntity);

    var JobContent = function JobContent() {
      _classCallCheck(this, JobContent);
    };

    var Staff = function Staff() {
      _classCallCheck(this, Staff);
    };
    /***/

  },

  /***/
  "./src/app/pages/idea-details/idea-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/idea-details/idea-details-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: IdeaDetailsPageRoutingModule */

  /***/
  function srcAppPagesIdeaDetailsIdeaDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeaDetailsPageRoutingModule", function () {
      return IdeaDetailsPageRoutingModule;
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


    var _idea_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./idea-details.page */
    "./src/app/pages/idea-details/idea-details.page.ts");

    var routes = [{
      path: '',
      component: _idea_details_page__WEBPACK_IMPORTED_MODULE_3__["IdeaDetailsPage"]
    }];

    var IdeaDetailsPageRoutingModule = function IdeaDetailsPageRoutingModule() {
      _classCallCheck(this, IdeaDetailsPageRoutingModule);
    };

    IdeaDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IdeaDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/idea-details/idea-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/idea-details/idea-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: IdeaDetailsPageModule */

  /***/
  function srcAppPagesIdeaDetailsIdeaDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeaDetailsPageModule", function () {
      return IdeaDetailsPageModule;
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


    var _idea_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./idea-details-routing.module */
    "./src/app/pages/idea-details/idea-details-routing.module.ts");
    /* harmony import */


    var _idea_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./idea-details.page */
    "./src/app/pages/idea-details/idea-details.page.ts");

    var IdeaDetailsPageModule = function IdeaDetailsPageModule() {
      _classCallCheck(this, IdeaDetailsPageModule);
    };

    IdeaDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _idea_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeaDetailsPageRoutingModule"]],
      declarations: [_idea_details_page__WEBPACK_IMPORTED_MODULE_6__["IdeaDetailsPage"]]
    })], IdeaDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/idea-details/idea-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/idea-details/idea-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesIdeaDetailsIdeaDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lkZWEtZGV0YWlscy9pZGVhLWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/idea-details/idea-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/idea-details/idea-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: IdeaDetailsPage */

  /***/
  function srcAppPagesIdeaDetailsIdeaDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeaDetailsPage", function () {
      return IdeaDetailsPage;
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


    var src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/idea.service */
    "./src/app/services/idea.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/@core/data/domain/model */
    "./src/app/@core/data/domain/model.ts");

    var IdeaDetailsPage = /*#__PURE__*/function () {
      function IdeaDetailsPage(activateRoute, ideaService, toastCtrl, router) {
        _classCallCheck(this, IdeaDetailsPage);

        this.activateRoute = activateRoute;
        this.ideaService = ideaService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.idea = new src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_5__["Idea"]();
        this.id = null;
      }

      _createClass(IdeaDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.activateRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          if (this.id) {
            this.ideaService.getIdea(this.id).subscribe(function (idea) {
              _this2.idea = idea;
            });
          }
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastCtrl.create({
            message: msg,
            duration: 2000
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "addIdea",
        value: function addIdea() {
          var _this3 = this;

          this.ideaService.addIdea(this.idea).then(function () {
            _this3.router.navigateByUrl('/');

            _this3.showToast('Idea added');
          }, function (err) {
            _this3.showToast('There was a problem adding your idea :(');
          });
        }
      }, {
        key: "updateIdea",
        value: function updateIdea() {
          var _this4 = this;

          this.ideaService.updateIdea(this.idea).then(function () {
            _this4.showToast('Idea updated');
          }, function (err) {
            _this4.showToast('There was a problem updating your idea :(');
          });
        }
      }, {
        key: "deleteIdea",
        value: function deleteIdea() {
          var _this5 = this;

          this.ideaService.deleteIdea(this.idea.id).then(function () {
            _this5.router.navigateByUrl('/');

            _this5.showToast('Idea deleted');
          }, function (err) {
            _this5.showToast('There was a problem deleting your idea :(');
          });
        }
      }]);

      return IdeaDetailsPage;
    }();

    IdeaDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_3__["IdeaService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    IdeaDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-idea-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./idea-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./idea-details.page.scss */
      "./src/app/pages/idea-details/idea-details.page.scss"))["default"]]
    })], IdeaDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-idea-details-idea-details-module-es5.js.map