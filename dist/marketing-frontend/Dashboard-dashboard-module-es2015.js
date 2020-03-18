(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"h-100pt\">\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n    <h2>Welcome {{(userProfile$ | async).username}}!</h2>\r\n  </nz-content>\r\n  <!-- <nz-footer>Footer</nz-footer> -->\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/Dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/Dashboard/dashboard.component.ts");





const routes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sharedServices_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedServices/user.service */ "./src/app/sharedServices/user.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userProfile$ = this.userService.getUserProfile();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _sharedServices_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/Dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/header.module */ "./src/app/Header/header.module.ts");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedServices/token-interceptor */ "./src/app/sharedServices/token-interceptor.ts");
/* harmony import */ var _sharedServices_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sharedServices/user.service */ "./src/app/sharedServices/user.service.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/Dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/Dashboard/dashboard.component.ts");












let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_10__["DashboardRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _Header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]],
        providers: [
            _sharedServices_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _Login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
                multi: true
            },
            _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/sharedServices/token-interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/sharedServices/token-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.loginService.getToken()}`
            }
        });
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/sharedServices/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/sharedServices/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUserProfile() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["apiServerUrl"] + '/users/me');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserService);



/***/ })

}]);
//# sourceMappingURL=Dashboard-dashboard-module-es2015.js.map