(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-center flex-direction-column w-100pt h-100pt\">\r\n  <h2>LionCRM!</h2>\r\n  <br>\r\n\r\n  <form nz-form [formGroup]=\"loginForm\" class=\"login-form\" (ngSubmit)=\"login(loginForm.value)\">\r\n    <nz-form-item *ngIf=\"loginHttpError.status\">\r\n      <nz-alert nzType=\"error\" nzMessage=\"{{loginHttpError.message}}\" nzCloseable nzShowIcon\r\n        (nzOnClose)=\"closeHttpErrorAlert()\">\r\n      </nz-alert>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input your company ID!\" nzHasFeedback>\r\n        <nz-input-group nzPrefixIcon=\"bulb\">\r\n          <input type=\"text\" nz-input formControlName=\"companyId\" placeholder=\"Company ID\" required />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input your username!\" nzHasFeedback>\r\n        <nz-input-group nzPrefixIcon=\"user\">\r\n          <input type=\"text\" nz-input formControlName=\"username\" placeholder=\"Username\" required />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input your Password!\" nzHasFeedback>\r\n        <nz-input-group nzPrefixIcon=\"lock\">\r\n          <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" required />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item class=\"flex-center\">\r\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\r\n    </nz-form-item>\r\n    <!-- <nz-form-item>\r\n    <nz-form-control>\r\n      <label nz-checkbox formControlName=\"remember\">\r\n        <span>Remember me</span>\r\n      </label>\r\n      <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a>\r\n    </div>\r\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\r\n      Or\r\n      <a>register now!</a>\r\n    </nz-form-control>\r\n  </nz-form-item> -->\r\n  </form>"

/***/ }),

/***/ "./src/app/Login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/Login/login.component.ts");




var routes = [
    {
        path: "",
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/Login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/Login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/Login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sharedServices_status_message_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedServices/status-message.enum */ "./src/app/sharedServices/status-message.enum.ts");
/* harmony import */ var _User_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../User.store */ "./src/app/User.store.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/app/Login/login.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, userProfileStore) {
        this.loginService = loginService;
        this.router = router;
        this.userProfileStore = userProfileStore;
        this.loginHttpError = { status: false, message: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    LoginComponent.prototype.login = function (userData) {
        var _this = this;
        for (var i in this.loginForm.controls) {
            if (this.loginForm.controls[i].value.length === 0) {
                this.loginForm.controls[i].markAsDirty();
                this.loginForm.controls[i].updateValueAndValidity();
            }
        }
        this.loginService.loginUser(userData).subscribe(function (data) {
            _this.loginService.removeToken();
            if (data["message"] === _sharedServices_status_message_enum__WEBPACK_IMPORTED_MODULE_5__["StatusMessageEnum"].invalidCredentials) {
                _this.loginHttpError.status = true;
                _this.loginHttpError.message = "Invalid credentials!";
            }
            else {
                _this.loginService.setToken(data["token"]);
                _this.loginService.setUser(JSON.stringify(data["user"]));
                _this.userProfileStore.set({ userProfile: data["user"] });
                _this.router.navigate(["/dashboard"]);
            }
        }, function (err) {
            _this.loginHttpError.status = true;
            _this.loginHttpError.message =
                "Something went wrong, please contact Admin";
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        });
    };
    LoginComponent.prototype.closeHttpErrorAlert = function () {
        this.loginHttpError.status = false;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _User_store__WEBPACK_IMPORTED_MODULE_6__["UserProfileStore"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/Login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/Login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/Login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/app/Login/login.service.ts");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"], _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/sharedServices/status-message.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/sharedServices/status-message.enum.ts ***!
  \*******************************************************/
/*! exports provided: StatusMessageEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageEnum", function() { return StatusMessageEnum; });
var StatusMessageEnum;
(function (StatusMessageEnum) {
    StatusMessageEnum["invalidCredentials"] = "invalidCredentials";
})(StatusMessageEnum || (StatusMessageEnum = {}));


/***/ })

}]);
//# sourceMappingURL=Login-login-module-es5.js.map