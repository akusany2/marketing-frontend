(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Audience-audience-module~Campaign-campaign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Audience/AudienceDetails/audience-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Audience/AudienceDetails/audience-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"h-100pt\">\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n\r\n    <h2 *ngIf=\"!audienceDataEntity\" align=\"center\">Add Audience</h2>\r\n    <h2 *ngIf=\"audienceDataEntity\" align=\"center\">Edit Audience</h2>\r\n    <br>\r\n\r\n    <form nz-form [formGroup]=\"audienceCreateForm\" class=\"login-form\">\r\n      <!-- <nz-form-item *ngIf=\"audienceValidation\">\r\n        <nz-alert nzType=\"error\" nzMessage=\"{{audienceValidation.message}}\" nzCloseable nzShowIcon\r\n          (nzOnClose)=\"closeAudienceValidation()\">\r\n        </nz-alert>\r\n      </nz-form-item> -->\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" [nzOffset]=\"3\" nzRequired nzFor=\"firstName\">First name\r\n        </nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"6\" nzErrorTip=\"First name required\" nzHasFeedback>\r\n          <input type=\"text\" nz-input formControlName=\"firstName\" placeholder=\"First name\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" [nzOffset]=\"3\" nzRequired nzFor=\"lastName\">Last name\r\n        </nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"6\" nzErrorTip=\"Last name required\" nzHasFeedback>\r\n          <input type=\"text\" nz-input formControlName=\"lastName\" placeholder=\"Last name\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" [nzOffset]=\"3\" nzRequired nzFor=\"email\">Email</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"6\" nzErrorTip=\"Please input your Email!\" nzHasFeedback>\r\n          <input type=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" [nzOffset]=\"3\" nzRequired nzFor=\"phone\">Phone</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"6\" nzErrorTip=\"Please input your Phone!\" nzHasFeedback>\r\n          <input type=\"number\" nz-input formControlName=\"phone\" placeholder=\"phone\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" [nzOffset]=\"3\" nzRequired nzFor=\"source\">Source</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"6\" nzErrorTip=\"Must define the Source!\" nzHasFeedback>\r\n          <input type=\"text\" nz-input formControlName=\"source\" placeholder=\"Source\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item class=\"flex-center\">\r\n        <button *ngIf=\"!audienceDataEntity\" (click)=\"submitCreateAudience(audienceCreateForm.value)\" nz-button\r\n          class=\"login-form-button\" [nzType]=\"'primary'\">Submit\r\n          Audience</button>\r\n        <button *ngIf=\"audienceDataEntity\" (click)=\"submitEditAudience(audienceCreateForm.value)\" nz-button\r\n          class=\"login-form-button\" [nzType]=\"'primary'\">Edit Audience</button>\r\n      </nz-form-item>\r\n      <!-- <nz-form-item>\r\n    <nz-form-control>\r\n      <label nz-checkbox formControlName=\"remember\">\r\n        <span>Remember me</span>\r\n      </label>\r\n      <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a>\r\n    </div>\r\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\r\n      Or\r\n      <a>register now!</a>\r\n    </nz-form-control>\r\n  </nz-form-item> -->\r\n    </form>\r\n  </nz-content>\r\n  <!-- <nz-footer>Footer</nz-footer> -->\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Audience/audience.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Audience/audience.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"h-100pt\">\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n    <div class=\"pos-rel\">\r\n      <h2 *ngIf=\"isEditable\" class=\"pull-left\">Select Audience - <span>{{ numberOfChecked }} selected</span></h2>\r\n      <button *ngIf=\"!isEditable\" nz-button nzType=\"primary\" routerLink=\"/audience/create\" class=\"mb-15 pull-right\">\r\n        <i nz-icon nzType=\"plus\"></i>Add audience\r\n      </button>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n    <div class=\"inner-content\">\r\n\r\n      <nz-table #filterTable [nzData]=\"listOfDisplayAudience$ | async\" [nzLoading]=\"isListLoading$ | async\"\r\n        [nzShowPagination]=\"false\">\r\n        <thead>\r\n          <tr>\r\n            <th *ngIf=\"isEditable\" nzShowCheckbox [(nzChecked)]=\"isAllDisplayDataChecked\"\r\n              (nzCheckedChange)=\"checkAll($event)\" [nzIndeterminate]=\"isIndeterminate\"></th>\r\n            <th>\r\n              Name\r\n            </th>\r\n            <th>Source</th>\r\n            <th>\r\n              Email\r\n            </th>\r\n            <th *ngIf=\"!isEditable\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let data of filterTable.data\">\r\n            <td *ngIf=\"isEditable\" nzShowCheckbox [(nzChecked)]=\"mapOfCheckedId[data._id]\"\r\n              (nzCheckedChange)=\"refreshStatus()\"></td>\r\n            <td>{{ data.firstName }}</td>\r\n            <td>{{ data.source }}</td>\r\n            <td>{{ data.email }}</td>\r\n            <td *ngIf=\"!isEditable\">\r\n              <a (click)=\"editAudience(data._id)\">Edit</a>\r\n              <nz-divider nzType=\"vertical\"></nz-divider>\r\n              <a (click)=\"deleteAudience(data._id)\">Delete</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </nz-table>\r\n    </div>\r\n    <div *ngIf=\"isEditable\" nz-row>\r\n      <div nz-col nzSpan=\"8\">\r\n        <br><br>\r\n        <button (click)=\"addAudienceToCampaign()\" [disabled]=\"numberOfChecked == 0\" nz-button class=\"login-form-button\"\r\n          [nzType]=\"'primary'\">Save and Start Campaign</button>\r\n        <!-- <button (click)=\"submitAndSelectAudience(templateEditForm.value)\" [disabled]=\"!templateEditForm.valid\" nz-button\r\n          class=\"login-form-button\" [nzType]=\"'primary'\">Save Campaign and Select Audience</button> -->\r\n      </div>\r\n\r\n    </div>\r\n  </nz-content>\r\n\r\n  <!-- <nz-footer>Footer</nz-footer> -->\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/SharedComponent/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/SharedComponent/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 style=\"text-align: center\">Not found!</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/Audience/AudienceDetails/audience-details.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Audience/AudienceDetails/audience-details.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1ZGllbmNlL0F1ZGllbmNlRGV0YWlscy9hdWRpZW5jZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Audience/AudienceDetails/audience-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Audience/AudienceDetails/audience-details.component.ts ***!
  \************************************************************************/
/*! exports provided: AudienceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceDetailComponent", function() { return AudienceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audience.store */ "./src/app/Audience/audience.store.ts");
/* harmony import */ var _audience_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audience-details.service */ "./src/app/Audience/AudienceDetails/audience-details.service.ts");







var AudienceDetailComponent = /** @class */ (function () {
    function AudienceDetailComponent(createAudience, loginService, route, router, audienceQuery) {
        this.createAudience = createAudience;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.audienceQuery = audienceQuery;
    }
    AudienceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if audience does not exists
        if (!this.audienceQuery.getHasCache()) {
            this.router.navigate(["/audience"]);
        }
        this.audienceCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("website", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.route.data.subscribe(function (data) {
            _this.route.params.subscribe(function (params) {
                _this.audienceDataEntity = _this.audienceQuery.getEntity(params.id);
                if (data.method !== "add" && !_this.audienceDataEntity) {
                    _this.router.navigate(["/audience"]);
                }
                else {
                    _this.audienceCreateForm.patchValue(_this.audienceDataEntity || {});
                }
            });
        });
    };
    AudienceDetailComponent.prototype.submitCreateAudience = function (audienceData) {
        audienceData.userId = this.loginService.getUser()._id;
        this.createAudience.audienceCreate(audienceData);
    };
    AudienceDetailComponent.prototype.submitEditAudience = function (audienceData) {
        audienceData.userId = this.loginService.getUser()._id;
        audienceData._id = this.audienceDataEntity._id;
        this.createAudience.audienceEdit(audienceData);
    };
    AudienceDetailComponent.ctorParameters = function () { return [
        { type: _audience_details_service__WEBPACK_IMPORTED_MODULE_6__["AudienceDetailService"] },
        { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceQuery"] }
    ]; };
    AudienceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-audience-details",
            template: __webpack_require__(/*! raw-loader!./audience-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/Audience/AudienceDetails/audience-details.component.html"),
            styles: [__webpack_require__(/*! ./audience-details.component.scss */ "./src/app/Audience/AudienceDetails/audience-details.component.scss")]
        })
    ], AudienceDetailComponent);
    return AudienceDetailComponent;
}());



/***/ }),

/***/ "./src/app/Audience/AudienceDetails/audience-details.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Audience/AudienceDetails/audience-details.service.ts ***!
  \**********************************************************************/
/*! exports provided: AudienceDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceDetailService", function() { return AudienceDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audience.store */ "./src/app/Audience/audience.store.ts");







var AudienceDetailService = /** @class */ (function () {
    function AudienceDetailService(http, router, audienceStore, audienceQuery, nzMessageService) {
        this.http = http;
        this.router = router;
        this.audienceStore = audienceStore;
        this.audienceQuery = audienceQuery;
        this.nzMessageService = nzMessageService;
    }
    AudienceDetailService.prototype.checkDuplicateAudience = function (audienceData) {
        return this.audienceQuery.getCount(function (audience) { return audience.email === audienceData.email; });
    };
    AudienceDetailService.prototype.audienceCreate = function (audienceData) {
        var _this = this;
        var isDuplicate = this.checkDuplicateAudience(audienceData);
        if (isDuplicate) {
            this.nzMessageService.create("error", "Audience already exists!", {
                nzDuration: 5000
            });
        }
        else {
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/audience", audienceData).subscribe(function (data) {
                var id = data["_id"];
                _this.audienceStore.upsert(id, audienceData);
                _this.router.navigate(["/audience"]);
            }, function (err) { return console.log(err); });
        }
    };
    AudienceDetailService.prototype.audienceEdit = function (audienceData) {
        var _this = this;
        var isDuplicate = this.checkDuplicateAudience(audienceData);
        if (isDuplicate) {
            this.nzMessageService.create("error", "Audience already exists!", {
                nzDuration: 5000
            });
        }
        else {
            this.http.put(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/audience", audienceData).subscribe(function (data) {
                _this.audienceStore.update(audienceData._id, audienceData);
                _this.router.navigate(["/audience"]);
            }, function (err) { return console.log(err); });
        }
    };
    AudienceDetailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceStore"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceQuery"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    AudienceDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AudienceDetailService);
    return AudienceDetailService;
}());



/***/ }),

/***/ "./src/app/Audience/audience-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Audience/audience-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AudienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceRoutingModule", function() { return AudienceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _audience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audience.component */ "./src/app/Audience/audience.component.ts");
/* harmony import */ var _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceDetails/audience-details.component */ "./src/app/Audience/AudienceDetails/audience-details.component.ts");






var routes = [
    {
        path: "", canActivate: [_sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: "",
                component: _audience_component__WEBPACK_IMPORTED_MODULE_4__["AudienceComponent"]
            },
            {
                path: "create",
                component: _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_5__["AudienceDetailComponent"],
                data: { method: 'add' }
            },
            {
                path: "edit/:id",
                component: _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_5__["AudienceDetailComponent"]
            }
        ]
    }
];
var AudienceRoutingModule = /** @class */ (function () {
    function AudienceRoutingModule() {
    }
    AudienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AudienceRoutingModule);
    return AudienceRoutingModule;
}());



/***/ }),

/***/ "./src/app/Audience/audience.component.css":
/*!*************************************************!*\
  !*** ./src/app/Audience/audience.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1ZGllbmNlL2F1ZGllbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Audience/audience.component.ts":
/*!************************************************!*\
  !*** ./src/app/Audience/audience.component.ts ***!
  \************************************************/
/*! exports provided: AudienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceComponent", function() { return AudienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Campaign/campaign.service */ "./src/app/Campaign/campaign.service.ts");
/* harmony import */ var _Campaign_campaign_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Campaign/campaign.store */ "./src/app/Campaign/campaign.store.ts");
/* harmony import */ var _audience_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audience.service */ "./src/app/Audience/audience.service.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audience.store */ "./src/app/Audience/audience.store.ts");







var AudienceComponent = /** @class */ (function () {
    function AudienceComponent(audienceService, audienceQuery, campaignService, campaignQuery, router, route) {
        this.audienceService = audienceService;
        this.audienceQuery = audienceQuery;
        this.campaignService = campaignService;
        this.campaignQuery = campaignQuery;
        this.router = router;
        this.route = route;
        this.sortName = null;
        this.sortValue = null;
        this.isAllDisplayDataChecked = false;
        this.mapOfCheckedId = {};
        this.isIndeterminate = false;
        this.numberOfChecked = 0;
        this.isEditable = false;
        this.campaignSelection = false;
    }
    AudienceComponent.prototype.deleteAudience = function (id) {
        if (id && this.listOfDisplayAudience$) {
            this.audienceService.deleteAudience(id);
        }
    };
    AudienceComponent.prototype.editAudience = function (id) {
        this.router.navigate(["/audience/edit/" + id]);
    };
    AudienceComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.listOfDisplayAudience$.subscribe(function (data) {
            _this.isIndeterminate =
                data.some(function (item) { return _this.mapOfCheckedId[item._id]; }) &&
                    !_this.isAllDisplayDataChecked;
            _this.numberOfChecked = data.filter(function (item) { return _this.mapOfCheckedId[item._id]; }).length;
        });
    };
    AudienceComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfDisplayAudience$.subscribe(function (data) {
            data.forEach(function (item) { return (_this.mapOfCheckedId[item._id] = value); });
        });
        this.refreshStatus();
    };
    AudienceComponent.prototype.addAudienceToCampaign = function () {
        var _this = this;
        this.listOfDisplayAudience$.subscribe(function (data) {
            _this.campaignService.addAudienceToCampaign(data
                .filter(function (item) { return _this.mapOfCheckedId[item._id]; })
                .map(function (item) {
                return {
                    email: item.email,
                    userData: { firstName: item.firstName, lastName: item.lastName }
                };
            }));
        });
    };
    AudienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isListLoading$ = this.audienceQuery.selectLoading();
        this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
        if (!this.audienceQuery.getHasCache()) {
            this.audienceService.getAllAudience();
        }
        this.route.data.subscribe(function (data) {
            if (data.method === "selectAudience" && _this.campaignQuery.hasActive()) {
                _this.isEditable = true;
            }
            else {
                _this.router.navigate(["/audience"]);
            }
            if (data.method &&
                data.method.from &&
                data.method.from == "templateEditor") {
                _this.campaignSelection = true;
            }
        });
    };
    AudienceComponent.ctorParameters = function () { return [
        { type: _audience_service__WEBPACK_IMPORTED_MODULE_5__["AudienceService"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceQuery"] },
        { type: _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"] },
        { type: _Campaign_campaign_store__WEBPACK_IMPORTED_MODULE_4__["CampaignQuery"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AudienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-audience",
            template: __webpack_require__(/*! raw-loader!./audience.component.html */ "./node_modules/raw-loader/index.js!./src/app/Audience/audience.component.html"),
            styles: [__webpack_require__(/*! ./audience.component.css */ "./src/app/Audience/audience.component.css")]
        })
    ], AudienceComponent);
    return AudienceComponent;
}());



/***/ }),

/***/ "./src/app/Audience/audience.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Audience/audience.module.ts ***!
  \*********************************************/
/*! exports provided: AudienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceModule", function() { return AudienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Campaign/campaign.service */ "./src/app/Campaign/campaign.service.ts");
/* harmony import */ var _Header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header/header.module */ "./src/app/Header/header.module.ts");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _SharedComponent_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedComponent/not-found.component */ "./src/app/SharedComponent/not-found.component.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sharedServices/token-interceptor */ "./src/app/sharedServices/token-interceptor.ts");
/* harmony import */ var _audience_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audience-routing.module */ "./src/app/Audience/audience-routing.module.ts");
/* harmony import */ var _audience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audience.component */ "./src/app/Audience/audience.component.ts");
/* harmony import */ var _audience_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audience.service */ "./src/app/Audience/audience.service.ts");
/* harmony import */ var _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AudienceDetails/audience-details.component */ "./src/app/Audience/AudienceDetails/audience-details.component.ts");
/* harmony import */ var _AudienceDetails_audience_details_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AudienceDetails/audience-details.service */ "./src/app/Audience/AudienceDetails/audience-details.service.ts");
















var AudienceModule = /** @class */ (function () {
    function AudienceModule() {
    }
    AudienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _audience_routing_module__WEBPACK_IMPORTED_MODULE_11__["AudienceRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _Header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_audience_component__WEBPACK_IMPORTED_MODULE_12__["AudienceComponent"], _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_14__["AudienceDetailComponent"], _SharedComponent_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]],
            providers: [
                _Login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
                _audience_service__WEBPACK_IMPORTED_MODULE_13__["AudienceService"],
                _AudienceDetails_audience_details_service__WEBPACK_IMPORTED_MODULE_15__["AudienceDetailService"],
                _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_4__["CampaignService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                    multi: true
                },
                _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]
            ]
        })
    ], AudienceModule);
    return AudienceModule;
}());



/***/ }),

/***/ "./src/app/Audience/audience.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Audience/audience.service.ts ***!
  \**********************************************/
/*! exports provided: AudienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceService", function() { return AudienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audience.store */ "./src/app/Audience/audience.store.ts");






var AudienceService = /** @class */ (function () {
    function AudienceService(httpClient, audienceStore, audienceQuery) {
        this.httpClient = httpClient;
        this.audienceStore = audienceStore;
        this.audienceQuery = audienceQuery;
    }
    AudienceService.prototype.getAllAudience = function () {
        var _this = this;
        this.audienceStore.setLoading(true);
        var allAudience = this.httpClient
            .get(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/audience")
            .subscribe(function (data) {
            var audienceList = {};
            data.forEach(function (audience) {
                audienceList[audience._id] = audience;
            });
            _this.audienceStore.set(audienceList);
            // callback(this.audienceQuery.getAll());
            _this.audienceStore.setLoading(false);
        }, function (error) {
            console.error(error);
            _this.audienceStore.setError(error);
            _this.audienceStore.setLoading(false);
        });
        return this.audienceQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])() : allAudience;
    };
    AudienceService.prototype.deleteAudience = function (id) {
        var _this = this;
        this.audienceStore.setLoading(true);
        return this.httpClient
            .delete(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/audience/" + id)
            .subscribe(function (data) {
            _this.audienceStore.remove(function (audience) { return audience._id === id; });
            _this.audienceStore.setLoading(false);
        });
    };
    AudienceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceStore"] },
        { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceQuery"] }
    ]; };
    AudienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AudienceService);
    return AudienceService;
}());



/***/ }),

/***/ "./src/app/Campaign/campaign.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Campaign/campaign.service.ts ***!
  \**********************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _campaign_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign.store */ "./src/app/Campaign/campaign.store.ts");
/* harmony import */ var _template_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.store */ "./src/app/Campaign/template.store.ts");








var CampaignService = /** @class */ (function () {
    function CampaignService(httpClient, templateQuery, templateStore, campaignStore, campaignQuery, loginService, router) {
        this.httpClient = httpClient;
        this.templateQuery = templateQuery;
        this.templateStore = templateStore;
        this.campaignStore = campaignStore;
        this.campaignQuery = campaignQuery;
        this.loginService = loginService;
        this.router = router;
    }
    CampaignService.prototype.createCampaign = function () {
        // this.httpClient.post(apiServerUrl + "/campaign", { something: 123 });
    };
    CampaignService.prototype.getStats = function (audiences) {
        var stats = {
            delivered: 0,
            open: 0,
            bounce: 0
        };
        audiences.forEach(function (audience) {
            if (audience.event) {
                stats.delivered = audience.event["delivered"]
                    ? stats.delivered + 1
                    : stats.delivered;
                stats.open = audience.event["open"] ? stats.open + 1 : stats.open;
                stats.bounce = audience.event["bounce"]
                    ? stats.bounce + 1
                    : stats.bounce;
            }
        });
        return stats;
    };
    CampaignService.prototype.getAllCampaign = function () {
        var _this = this;
        this.campaignStore.setLoading(true);
        return this.httpClient
            .post(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/campaign/all", {
            companyId: this.loginService.getUser().companyId
        })
            .subscribe(function (campaigns) {
            var campaignList = {};
            campaigns.forEach(function (campaign) {
                campaign.stats = _this.getStats(campaign.audiences);
                campaignList[campaign._id] = campaign;
            });
            _this.campaignStore.set(campaignList);
            _this.campaignStore.setLoading(false);
        }, function (error) {
            console.error(error);
            _this.campaignStore.setError(error);
            _this.campaignStore.setLoading(false);
        });
    };
    CampaignService.prototype.updateTemplate = function () {
        this.httpClient
            .put(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/template", this.templateQuery.getActive())
            .subscribe(function (data) { }, function (err) {
            console.log(err);
        });
    };
    CampaignService.prototype.addAudienceToCampaign = function (audiences) {
        var _this = this;
        var templateId = this.templateQuery.getActiveId();
        this.campaignStore.updateActive({
            companyId: this.loginService.getUser().companyId,
            audiences: audiences,
            sgTemplateId: this.templateQuery.getEntity(templateId).sgTemplateId,
            templateId: templateId
        });
        this.httpClient
            .post(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/campaign", this.campaignQuery.getActive())
            .subscribe(function (data) {
            _this.router.navigate(["/campaign"]);
        }, function (err) {
            _this.router.navigate(["/campaign"]);
            console.log(err);
        });
    };
    CampaignService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _template_store__WEBPACK_IMPORTED_MODULE_7__["TemplateQuery"] },
        { type: _template_store__WEBPACK_IMPORTED_MODULE_7__["TemplateStore"] },
        { type: _campaign_store__WEBPACK_IMPORTED_MODULE_6__["CampaignStore"] },
        { type: _campaign_store__WEBPACK_IMPORTED_MODULE_6__["CampaignQuery"] },
        { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CampaignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], CampaignService);
    return CampaignService;
}());



/***/ }),

/***/ "./src/app/Campaign/campaign.store.ts":
/*!********************************************!*\
  !*** ./src/app/Campaign/campaign.store.ts ***!
  \********************************************/
/*! exports provided: CampaignStore, CampaignQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignStore", function() { return CampaignStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignQuery", function() { return CampaignQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var CampaignStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CampaignStore, _super);
    function CampaignStore() {
        return _super.call(this) || this;
    }
    CampaignStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: "campaign" })
    ], CampaignStore);
    return CampaignStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));

var CampaignQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CampaignQuery, _super);
    function CampaignQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    CampaignQuery.ctorParameters = function () { return [
        { type: CampaignStore }
    ]; };
    CampaignQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], CampaignQuery);
    return CampaignQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/SharedComponent/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/SharedComponent/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZENvbXBvbmVudC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/SharedComponent/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/SharedComponent/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/SharedComponent/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/SharedComponent/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(loginService) {
        this.loginService = loginService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.loginService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ })

}]);
//# sourceMappingURL=default~Audience-audience-module~Campaign-campaign-module-es5.js.map