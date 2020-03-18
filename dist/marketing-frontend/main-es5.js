(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu nzTheme=\"dark\" nzMode=\"horizontal\">\r\n  <li nz-menu-item nzMatchRouter=\"true\" routerLink=\"/dashboard\">\r\n    Dashboard\r\n  </li>\r\n  <li nz-menu-item nzMatchRouter=\"true\" routerLink=\"/audience\">\r\n    Audience\r\n  </li>\r\n  <li nz-menu-item nzMatchRouter=\"true\" routerLink=\"/campaign\">\r\n    Campaign\r\n  </li>\r\n  <li nz-menu-item nzMatchRouter=\"true\" (click)=\"logout()\" class=\"pull-right\">\r\n    Logout\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sharedModule/shared.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sharedModule/shared.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shared works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/Audience/audience.store.ts":
/*!********************************************!*\
  !*** ./src/app/Audience/audience.store.ts ***!
  \********************************************/
/*! exports provided: AudienceStore, AudienceQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceStore", function() { return AudienceStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceQuery", function() { return AudienceQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var AudienceStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AudienceStore, _super);
    function AudienceStore() {
        return _super.call(this) || this;
    }
    AudienceStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: "audience" })
    ], AudienceStore);
    return AudienceStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));

var AudienceQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AudienceQuery, _super);
    function AudienceQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    AudienceQuery.ctorParameters = function () { return [
        { type: AudienceStore }
    ]; };
    AudienceQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], AudienceQuery);
    return AudienceQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/Campaign/template.store.ts":
/*!********************************************!*\
  !*** ./src/app/Campaign/template.store.ts ***!
  \********************************************/
/*! exports provided: TemplateStore, TemplateQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateStore", function() { return TemplateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateQuery", function() { return TemplateQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var inittialState = {
    active: null
};
var TemplateStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateStore, _super);
    function TemplateStore() {
        return _super.call(this, inittialState) || this;
    }
    TemplateStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: "template" })
    ], TemplateStore);
    return TemplateStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));

var TemplateQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateQuery, _super);
    function TemplateQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    TemplateQuery.ctorParameters = function () { return [
        { type: TemplateStore }
    ]; };
    TemplateQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], TemplateQuery);
    return TemplateQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/Header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/Header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/Header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        this.loginService.logoutUser();
        this.router.navigate(["/login"]);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/Header/header.component.ts");






var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"]
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/Login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/Login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.tokenKey = "token";
        this.userKey = "userData";
    }
    LoginService.prototype.loginUser = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["apiServerUrl"] + "/users/login", user);
    };
    LoginService.prototype.setToken = function (token) {
        localStorage.setItem(this.tokenKey, token);
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem(this.tokenKey);
    };
    LoginService.prototype.removeToken = function () {
        localStorage.removeItem(this.tokenKey);
    };
    LoginService.prototype.setUser = function (user) {
        localStorage.setItem(this.userKey, user);
    };
    LoginService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem(this.userKey));
    };
    LoginService.prototype.removeUser = function () {
        localStorage.removeItem(this.userKey);
    };
    LoginService.prototype.logoutUser = function () {
        this.removeToken();
        this.removeUser();
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/User.store.ts":
/*!*******************************!*\
  !*** ./src/app/User.store.ts ***!
  \*******************************/
/*! exports provided: UserProfileStore, UserProfileQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileStore", function() { return UserProfileStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileQuery", function() { return UserProfileQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var UserProfileStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserProfileStore, _super);
    function UserProfileStore() {
        return _super.call(this) || this;
    }
    UserProfileStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: "userProfile" })
    ], UserProfileStore);
    return UserProfileStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));

var UserProfileQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserProfileQuery, _super);
    function UserProfileQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    UserProfileQuery.ctorParameters = function () { return [
        { type: UserProfileStore }
    ]; };
    UserProfileQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], UserProfileQuery);
    return UserProfileQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: "login",
        loadChildren: function () { return Promise.all(/*! import() | Login-login-module */[__webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module~Dashboard-dashboard-module~Login-login-module"), __webpack_require__.e("Login-login-module")]).then(__webpack_require__.bind(null, /*! ./Login/login.module */ "./src/app/Login/login.module.ts")).then(function (mod) { return mod.LoginModule; }); }
    },
    {
        path: "dashboard",
        loadChildren: function () { return Promise.all(/*! import() | Dashboard-dashboard-module */[__webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module~Dashboard-dashboard-module~Login-login-module"), __webpack_require__.e("Dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./Dashboard/dashboard.module */ "./src/app/Dashboard/dashboard.module.ts")).then(function (mod) { return mod.DashboardModule; }); }
    },
    {
        path: "audience",
        loadChildren: function () { return Promise.all(/*! import() | Audience-audience-module */[__webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module~Dashboard-dashboard-module~Login-login-module"), __webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module")]).then(__webpack_require__.bind(null, /*! ./Audience/audience.module */ "./src/app/Audience/audience.module.ts")).then(function (mod) { return mod.AudienceModule; }); }
    },
    {
        path: "campaign",
        loadChildren: function () { return Promise.all(/*! import() | Campaign-campaign-module */[__webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module~Dashboard-dashboard-module~Login-login-module"), __webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module"), __webpack_require__.e("Campaign-campaign-module")]).then(__webpack_require__.bind(null, /*! ./Campaign/campaign.module */ "./src/app/Campaign/campaign.module.ts")).then(function (mod) { return mod.CampaignModule; }); }
    },
    // -------------- temp
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    { path: '**', loadChildren: function () { return Promise.all(/*! import() | Dashboard-dashboard-module */[__webpack_require__.e("default~Audience-audience-module~Campaign-campaign-module~Dashboard-dashboard-module~Login-login-module"), __webpack_require__.e("Dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./Dashboard/dashboard.module */ "./src/app/Dashboard/dashboard.module.ts")).then(function (mod) { return mod.DashboardModule; }); } }
    // ------------------
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _User_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.store */ "./src/app/User.store.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, userProfileStore) {
        this.loginService = loginService;
        this.userProfileStore = userProfileStore;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.loginService.getUser()) {
            this.userProfileStore.set({ userProfile: this.loginService.getUser() });
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _User_store__WEBPACK_IMPORTED_MODULE_3__["UserProfileStore"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ "./node_modules/@datorama/akita-ng-router-store/fesm5/datorama-akita-ng-router-store.js");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "./node_modules/@datorama/akita-ngdevtools/fesm5/datorama-akita-ngdevtools.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Audience_audience_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Audience/audience.store */ "./src/app/Audience/audience.store.ts");
/* harmony import */ var _Campaign_template_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Campaign/template.store */ "./src/app/Campaign/template.store.ts");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _User_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./User.store */ "./src/app/User.store.ts");



















var sharedStores = [
    _User_store__WEBPACK_IMPORTED_MODULE_18__["UserProfileStore"],
    _User_store__WEBPACK_IMPORTED_MODULE_18__["UserProfileQuery"],
    _Audience_audience_store__WEBPACK_IMPORTED_MODULE_14__["AudienceStore"],
    _Audience_audience_store__WEBPACK_IMPORTED_MODULE_14__["AudienceQuery"],
    _Campaign_template_store__WEBPACK_IMPORTED_MODULE_15__["TemplateStore"],
    _Campaign_template_store__WEBPACK_IMPORTED_MODULE_15__["TemplateQuery"]
];
Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? [] : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_9__["AkitaNgDevtools"].forRoot({ shallow: false }),
                _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_8__["AkitaNgRouterStoreModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                // NgZorroAntdModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
                _Login_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"]
            ], sharedStores),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sharedModule/shared.component.css":
/*!***************************************************!*\
  !*** ./src/app/sharedModule/shared.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZE1vZHVsZS9zaGFyZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sharedModule/shared.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sharedModule/shared.component.ts ***!
  \**************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shared',
            template: __webpack_require__(/*! raw-loader!./shared.component.html */ "./node_modules/raw-loader/index.js!./src/app/sharedModule/shared.component.html"),
            styles: [__webpack_require__(/*! ./shared.component.css */ "./src/app/sharedModule/shared.component.css")]
        })
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "./src/app/sharedModule/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sharedModule/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _Header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header/header.module */ "./src/app/Header/header.module.ts");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.component */ "./src/app/sharedModule/shared.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzPageHeaderModule"],
                _Header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzPageHeaderModule"],
                _Header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"]],
            declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: apiServerUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiServerUrl", function() { return apiServerUrl; });
// export const apiServerUrl =
// "http://ec2-34-229-231-51.compute-1.amazonaws.com:3000/api";
var apiServerUrl = "http://localhost:3000/api";


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\test\marketing\marketing-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map