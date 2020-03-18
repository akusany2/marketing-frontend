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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audience.store */ "./src/app/Audience/audience.store.ts");
/* harmony import */ var _audience_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audience-details.service */ "./src/app/Audience/AudienceDetails/audience-details.service.ts");







let AudienceDetailComponent = class AudienceDetailComponent {
    constructor(createAudience, loginService, route, router, audienceQuery) {
        this.createAudience = createAudience;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.audienceQuery = audienceQuery;
    }
    ngOnInit() {
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
        this.route.data.subscribe(data => {
            this.route.params.subscribe(params => {
                this.audienceDataEntity = this.audienceQuery.getEntity(params.id);
                if (data.method !== "add" && !this.audienceDataEntity) {
                    this.router.navigate(["/audience"]);
                }
                else {
                    this.audienceCreateForm.patchValue(this.audienceDataEntity || {});
                }
            });
        });
    }
    submitCreateAudience(audienceData) {
        audienceData.userId = this.loginService.getUser()._id;
        this.createAudience.audienceCreate(audienceData);
    }
    submitEditAudience(audienceData) {
        audienceData.userId = this.loginService.getUser()._id;
        audienceData._id = this.audienceDataEntity._id;
        this.createAudience.audienceEdit(audienceData);
    }
};
AudienceDetailComponent.ctorParameters = () => [
    { type: _audience_details_service__WEBPACK_IMPORTED_MODULE_6__["AudienceDetailService"] },
    { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceQuery"] }
];
AudienceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-audience-details",
        template: __webpack_require__(/*! raw-loader!./audience-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/Audience/AudienceDetails/audience-details.component.html"),
        styles: [__webpack_require__(/*! ./audience-details.component.scss */ "./src/app/Audience/AudienceDetails/audience-details.component.scss")]
    })
], AudienceDetailComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audience.store */ "./src/app/Audience/audience.store.ts");







let AudienceDetailService = class AudienceDetailService {
    constructor(http, router, audienceStore, audienceQuery, nzMessageService) {
        this.http = http;
        this.router = router;
        this.audienceStore = audienceStore;
        this.audienceQuery = audienceQuery;
        this.nzMessageService = nzMessageService;
    }
    checkDuplicateAudience(audienceData) {
        return this.audienceQuery.getCount(audience => audience.email === audienceData.email);
    }
    audienceCreate(audienceData) {
        const isDuplicate = this.checkDuplicateAudience(audienceData);
        if (isDuplicate) {
            this.nzMessageService.create("error", "Audience already exists!", {
                nzDuration: 5000
            });
        }
        else {
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/audience", audienceData).subscribe(data => {
                const id = data["_id"];
                this.audienceStore.upsert(id, audienceData);
                this.router.navigate(["/audience"]);
            }, err => console.log(err));
        }
    }
    audienceEdit(audienceData) {
        const isDuplicate = this.checkDuplicateAudience(audienceData);
        if (isDuplicate) {
            this.nzMessageService.create("error", "Audience already exists!", {
                nzDuration: 5000
            });
        }
        else {
            this.http.put(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/audience", audienceData).subscribe(data => {
                this.audienceStore.update(audienceData._id, audienceData);
                this.router.navigate(["/audience"]);
            }, err => console.log(err));
        }
    }
};
AudienceDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceStore"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceQuery"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
AudienceDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AudienceDetailService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _audience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audience.component */ "./src/app/Audience/audience.component.ts");
/* harmony import */ var _AudienceDetails_audience_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceDetails/audience-details.component */ "./src/app/Audience/AudienceDetails/audience-details.component.ts");






const routes = [
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
let AudienceRoutingModule = class AudienceRoutingModule {
};
AudienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AudienceRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Campaign/campaign.service */ "./src/app/Campaign/campaign.service.ts");
/* harmony import */ var _Campaign_campaign_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Campaign/campaign.store */ "./src/app/Campaign/campaign.store.ts");
/* harmony import */ var _audience_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audience.service */ "./src/app/Audience/audience.service.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audience.store */ "./src/app/Audience/audience.store.ts");







let AudienceComponent = class AudienceComponent {
    constructor(audienceService, audienceQuery, campaignService, campaignQuery, router, route) {
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
    deleteAudience(id) {
        if (id && this.listOfDisplayAudience$) {
            this.audienceService.deleteAudience(id);
        }
    }
    editAudience(id) {
        this.router.navigate(["/audience/edit/" + id]);
    }
    refreshStatus() {
        this.listOfDisplayAudience$.subscribe(data => {
            this.isIndeterminate =
                data.some(item => this.mapOfCheckedId[item._id]) &&
                    !this.isAllDisplayDataChecked;
            this.numberOfChecked = data.filter(item => this.mapOfCheckedId[item._id]).length;
        });
    }
    checkAll(value) {
        this.listOfDisplayAudience$.subscribe(data => {
            data.forEach(item => (this.mapOfCheckedId[item._id] = value));
        });
        this.refreshStatus();
    }
    addAudienceToCampaign() {
        this.listOfDisplayAudience$.subscribe(data => {
            this.campaignService.addAudienceToCampaign(data
                .filter(item => this.mapOfCheckedId[item._id])
                .map(item => {
                return {
                    email: item.email,
                    userData: { firstName: item.firstName, lastName: item.lastName }
                };
            }));
        });
    }
    ngOnInit() {
        this.isListLoading$ = this.audienceQuery.selectLoading();
        this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
        if (!this.audienceQuery.getHasCache()) {
            this.audienceService.getAllAudience();
        }
        this.route.data.subscribe(data => {
            if (data.method === "selectAudience" && this.campaignQuery.hasActive()) {
                this.isEditable = true;
            }
            else {
                this.router.navigate(["/audience"]);
            }
            if (data.method &&
                data.method.from &&
                data.method.from == "templateEditor") {
                this.campaignSelection = true;
            }
        });
    }
};
AudienceComponent.ctorParameters = () => [
    { type: _audience_service__WEBPACK_IMPORTED_MODULE_5__["AudienceService"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_6__["AudienceQuery"] },
    { type: _Campaign_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"] },
    { type: _Campaign_campaign_store__WEBPACK_IMPORTED_MODULE_4__["CampaignQuery"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AudienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-audience",
        template: __webpack_require__(/*! raw-loader!./audience.component.html */ "./node_modules/raw-loader/index.js!./src/app/Audience/audience.component.html"),
        styles: [__webpack_require__(/*! ./audience.component.css */ "./src/app/Audience/audience.component.css")]
    })
], AudienceComponent);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
















let AudienceModule = class AudienceModule {
};
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _audience_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audience.store */ "./src/app/Audience/audience.store.ts");






let AudienceService = class AudienceService {
    constructor(httpClient, audienceStore, audienceQuery) {
        this.httpClient = httpClient;
        this.audienceStore = audienceStore;
        this.audienceQuery = audienceQuery;
    }
    getAllAudience() {
        this.audienceStore.setLoading(true);
        const allAudience = this.httpClient
            .get(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/audience")
            .subscribe(data => {
            const audienceList = {};
            data.forEach(audience => {
                audienceList[audience._id] = audience;
            });
            this.audienceStore.set(audienceList);
            // callback(this.audienceQuery.getAll());
            this.audienceStore.setLoading(false);
        }, error => {
            console.error(error);
            this.audienceStore.setError(error);
            this.audienceStore.setLoading(false);
        });
        return this.audienceQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])() : allAudience;
    }
    deleteAudience(id) {
        this.audienceStore.setLoading(true);
        return this.httpClient
            .delete(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/audience/" + id)
            .subscribe(data => {
            this.audienceStore.remove(audience => audience._id === id);
            this.audienceStore.setLoading(false);
        });
    }
};
AudienceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceStore"] },
    { type: _audience_store__WEBPACK_IMPORTED_MODULE_5__["AudienceQuery"] }
];
AudienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AudienceService);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _Login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/login.service */ "./src/app/Login/login.service.ts");
/* harmony import */ var _campaign_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign.store */ "./src/app/Campaign/campaign.store.ts");
/* harmony import */ var _template_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.store */ "./src/app/Campaign/template.store.ts");








let CampaignService = class CampaignService {
    constructor(httpClient, templateQuery, templateStore, campaignStore, campaignQuery, loginService, router) {
        this.httpClient = httpClient;
        this.templateQuery = templateQuery;
        this.templateStore = templateStore;
        this.campaignStore = campaignStore;
        this.campaignQuery = campaignQuery;
        this.loginService = loginService;
        this.router = router;
    }
    createCampaign() {
        // this.httpClient.post(apiServerUrl + "/campaign", { something: 123 });
    }
    getStats(audiences) {
        let stats = {
            delivered: 0,
            open: 0,
            bounce: 0
        };
        audiences.forEach(audience => {
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
    }
    getAllCampaign() {
        this.campaignStore.setLoading(true);
        return this.httpClient
            .post(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/campaign/all", {
            companyId: this.loginService.getUser().companyId
        })
            .subscribe(campaigns => {
            const campaignList = {};
            campaigns.forEach(campaign => {
                campaign.stats = this.getStats(campaign.audiences);
                campaignList[campaign._id] = campaign;
            });
            this.campaignStore.set(campaignList);
            this.campaignStore.setLoading(false);
        }, error => {
            console.error(error);
            this.campaignStore.setError(error);
            this.campaignStore.setLoading(false);
        });
    }
    updateTemplate() {
        this.httpClient
            .put(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/template", this.templateQuery.getActive())
            .subscribe(data => { }, err => {
            console.log(err);
        });
    }
    addAudienceToCampaign(audiences) {
        const templateId = this.templateQuery.getActiveId();
        this.campaignStore.updateActive({
            companyId: this.loginService.getUser().companyId,
            audiences: audiences,
            sgTemplateId: this.templateQuery.getEntity(templateId).sgTemplateId,
            templateId: templateId
        });
        this.httpClient
            .post(_config__WEBPACK_IMPORTED_MODULE_4__["apiServerUrl"] + "/campaign", this.campaignQuery.getActive())
            .subscribe(data => {
            this.router.navigate(["/campaign"]);
        }, err => {
            this.router.navigate(["/campaign"]);
            console.log(err);
        });
    }
};
CampaignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_7__["TemplateQuery"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_7__["TemplateStore"] },
    { type: _campaign_store__WEBPACK_IMPORTED_MODULE_6__["CampaignStore"] },
    { type: _campaign_store__WEBPACK_IMPORTED_MODULE_6__["CampaignQuery"] },
    { type: _Login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CampaignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CampaignService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm2015/datorama-akita.js");



let CampaignStore = class CampaignStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
CampaignStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: "campaign" })
], CampaignStore);

let CampaignQuery = class CampaignQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
CampaignQuery.ctorParameters = () => [
    { type: CampaignStore }
];
CampaignQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], CampaignQuery);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/SharedComponent/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/SharedComponent/not-found.component.scss")]
    })
], NotFoundComponent);



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



/***/ })

}]);
//# sourceMappingURL=default~Audience-audience-module~Campaign-campaign-module-es2015.js.map