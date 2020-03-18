(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Campaign-campaign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Campaign/ChooseTemplate/chooseTemplate.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Campaign/ChooseTemplate/chooseTemplate.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"h-100pt\">\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n    <form nz-form [formGroup]=\"campaignInitForm\" class=\"\">\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"2\" [nzXs]=\"24\" [nzXl]=\"2\" nzRequired nzFor=\"campaignName\">Campaign\r\n          name</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"10\" nzErrorTip=\"Campaign name required\" nzHasFeedback>\r\n          <input type=\"text\" nz-input formControlName=\"campaignName\" placeholder=\"Campaign name\" required />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n\r\n    <br>\r\n    <h3>Choose template</h3>\r\n    <div [ngClass]=\"{'disable-with-feedback': !campaignInitForm.valid}\">\r\n\r\n      <div nz-row [nzGutter]=\"8\">\r\n        <div nz-col [nzSpan]=\"4\" class=\"mb-10\" *ngFor=\"let template of templates\"\r\n          (click)=\"selectTemplate(null, template.name, template.templateId)\">\r\n          <nz-card nzHoverable style=\"width:240px\" [nzCover]=\"coverTemplate\">\r\n            <nz-card-meta nzTitle={{template.name}}></nz-card-meta>\r\n          </nz-card>\r\n          <ng-template #coverTemplate>\r\n            <img alt=\"{{template.name}}\" src=\"/assets/templates/email/{{template.name}}.JPG\" />\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </nz-content>\r\n  <!-- <nz-footer>Footer</nz-footer> -->\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Campaign/TemplateEditor/templateEditor.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Campaign/TemplateEditor/templateEditor.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n\r\n    <div nz-row>\r\n      <div nz-col nzSpan=\"12\">\r\n        <h2 align=\"center\">Template editor</h2>\r\n        <form nz-form [formGroup]=\"templateEditForm\" class=\"\">\r\n\r\n          <!-- <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" nzRequired nzFor=\"campaignName\">Campaign\r\n              name</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"10\" nzErrorTip=\"Campaign name required\" nzHasFeedback>\r\n              <input type=\"text\" nz-input formControlName=\"campaignName\" placeholder=\"Campaign name\" required />\r\n            </nz-form-control>\r\n          </nz-form-item> -->\r\n\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\" nzRequired nzFor=\"templateName\">Template\r\n              name</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"10\" nzErrorTip=\"Template name required\" nzHasFeedback>\r\n              <input type=\"text\" nz-input formControlName=\"templateName\" placeholder=\"Template name\" required />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\">Primary text\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"10\">\r\n              <textarea nz-input formControlName=\"primaryText\" placeholder=\"Primary text\"\r\n                [nzAutosize]=\"{ minRows: 4, maxRows: 12 }\"></textarea>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" [nzXl]=\"6\">Secondary text\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzXl]=\"10\">\r\n              <textarea nz-input formControlName=\"secondaryText\" placeholder=\"Secondary text\"\r\n                [nzAutosize]=\"{ minRows: 4, maxRows: 12 }\"></textarea>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n\r\n        </form>\r\n        <br><br>\r\n        <div nz-row>\r\n          <div nz-col nzSpan=\"12\" nzOffset=\"1\">\r\n            <!-- <button (click)=\"submitTemplate(templateEditForm.value)\" [disabled]=\"!templateEditForm.valid\" nz-button\r\n              class=\"login-form-button\" [nzType]=\"'primary'\">Save Template</button> -->\r\n            <button (click)=\"submitAndSelectAudience(templateEditForm.value)\" [disabled]=\"!templateEditForm.valid\"\r\n              nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Save Template and Select Audience</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <iframe id=\"templatePreview\" #templateIframe src=\"\" frameborder=\"0\" class=\"template-editor-iframe\"></iframe>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </nz-content>\r\n\r\n  <br><br>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Campaign/campaign.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Campaign/campaign.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"h-100pt\">\r\n  <nz-header class=\"mb-10\">\r\n    <app-header></app-header>\r\n  </nz-header>\r\n  <nz-content>\r\n    <div *ngIf=\"(loading$ | async); else campaignList\">\r\n      <i nz-icon nzType=\"loading\" style=\"font-size: 24px;\"></i>\r\n    </div>\r\n\r\n    <ng-template #campaignList>\r\n      <nz-empty [nzNotFoundImage]=\"\r\n        'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'\r\n      \" [nzNotFoundContent]=\"contentTpl\" [nzNotFoundFooter]=\"footerTpl\"\r\n        *ngIf=\"(showCampaign$ | async) == 0; else showCampaigns\">\r\n        <ng-template #contentTpl>\r\n          <span> No campaigns found </span>\r\n        </ng-template>\r\n        <ng-template #footerTpl>\r\n          <button nz-button nzType=\"primary\" routerLink=\"/campaign/choose-template\">New Campaign</button>\r\n        </ng-template>\r\n      </nz-empty>\r\n\r\n\r\n      <ng-template #showCampaigns class=\"wrap\">\r\n        <h2 class=\"pull-left\">Campaigns</h2>\r\n        <button nz-button nzType=\"primary\" routerLink=\"/campaign/choose-template\" class=\"pull-right\">New\r\n          Campaign</button>\r\n        <br><br>\r\n        <nz-row [nzGutter]=\"16\" class=\"bg-white p-15 mb-10\" *ngFor=\"let campaign of campaignList$ | async\">\r\n          <nz-col [nzSpan]=\"6\">\r\n            <nz-statistic [nzValue]=\"campaign.name\" [nzTitle]=\"'Campaign name'\"></nz-statistic>\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"6\">\r\n            <nz-statistic [nzValue]=\"campaign.audiences.length | number\" [nzTitle]=\"'Total Audiences'\"></nz-statistic>\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"6\">\r\n            <nz-statistic [nzValue]=\"campaign.stats.delivered\" [nzTitle]=\"'Delivered'\"></nz-statistic>\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"6\">\r\n            <nz-statistic [nzValue]=\"campaign.stats.open\" [nzTitle]=\"'Opened'\"></nz-statistic>\r\n          </nz-col>\r\n        </nz-row>\r\n\r\n      </ng-template>\r\n    </ng-template>\r\n\r\n\r\n  </nz-content>\r\n  <!-- <nz-footer>Footer</nz-footer> -->\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/Campaign/ChooseTemplate/chooseTemplate.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Campaign/ChooseTemplate/chooseTemplate.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NhbXBhaWduL0Nob29zZVRlbXBsYXRlL2Nob29zZVRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Campaign/ChooseTemplate/chooseTemplate.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Campaign/ChooseTemplate/chooseTemplate.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTemplateComponent", function() { return ChooseTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _campaign_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaign.store */ "./src/app/Campaign/campaign.store.ts");
/* harmony import */ var _chooseTemplate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chooseTemplate.service */ "./src/app/Campaign/ChooseTemplate/chooseTemplate.service.ts");





let ChooseTemplateComponent = class ChooseTemplateComponent {
    constructor(chooseTemplateService, campaignStore) {
        this.chooseTemplateService = chooseTemplateService;
        this.campaignStore = campaignStore;
        this.templates = [];
    }
    ngOnInit() {
        this.getAllTemplates();
        this.campaignInitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            campaignName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    getAllTemplates() {
        this.chooseTemplateService.getAllTemplates().subscribe(data => {
            this.templates = data;
        });
    }
    selectTemplate(type, name, templateId) {
        this.campaignStore.upsert(0, {
            name: this.campaignInitForm.value.campaignName
        });
        this.campaignStore.setActive(0);
        this.chooseTemplateService.getTemplate(type, name, templateId);
    }
};
ChooseTemplateComponent.ctorParameters = () => [
    { type: _chooseTemplate_service__WEBPACK_IMPORTED_MODULE_4__["ChooseTemplateService"] },
    { type: _campaign_store__WEBPACK_IMPORTED_MODULE_3__["CampaignStore"] }
];
ChooseTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-choose-template",
        template: __webpack_require__(/*! raw-loader!./chooseTemplate.component.html */ "./node_modules/raw-loader/index.js!./src/app/Campaign/ChooseTemplate/chooseTemplate.component.html"),
        styles: [__webpack_require__(/*! ./chooseTemplate.component.css */ "./src/app/Campaign/ChooseTemplate/chooseTemplate.component.css")]
    })
], ChooseTemplateComponent);



/***/ }),

/***/ "./src/app/Campaign/ChooseTemplate/chooseTemplate.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Campaign/ChooseTemplate/chooseTemplate.service.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTemplateService", function() { return ChooseTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _template_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template.store */ "./src/app/Campaign/template.store.ts");







let ChooseTemplateService = class ChooseTemplateService {
    constructor(httpClient, templateStore, router, templateQuery) {
        this.httpClient = httpClient;
        this.templateStore = templateStore;
        this.router = router;
        this.templateQuery = templateQuery;
    }
    getAllTemplates() {
        return this.httpClient.get(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/template/all");
    }
    getTemplate(type, name, id) {
        const template = this.httpClient
            .get(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/template/" + id + "." + name, {
            responseType: "text"
        })
            .subscribe(data => {
            this.templateStore.update({
                templateName: name,
                templateHtml: data,
                templateId: id
            });
            this.router.navigate(["/campaign/template-editor"]);
        }, error => {
            console.log(error);
        });
        return this.templateQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])() : template;
    }
};
ChooseTemplateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_6__["TemplateStore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_6__["TemplateQuery"] }
];
ChooseTemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ChooseTemplateService);



/***/ }),

/***/ "./src/app/Campaign/TemplateEditor/templateEditor-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Campaign/TemplateEditor/templateEditor-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TemplateEditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEditorRoutingModule", function() { return TemplateEditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Audience_audience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Audience/audience.component */ "./src/app/Audience/audience.component.ts");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _templateEditor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templateEditor.component */ "./src/app/Campaign/TemplateEditor/templateEditor.component.ts");






const routes = [
    {
        path: "",
        canActivate: [_sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: "",
                component: _templateEditor_component__WEBPACK_IMPORTED_MODULE_5__["TemplateEditorComponent"]
            },
            {
                path: "audience",
                component: _Audience_audience_component__WEBPACK_IMPORTED_MODULE_3__["AudienceComponent"],
                data: { method: "selectAudience", from: "templateEditor" }
            }
        ]
    }
];
let TemplateEditorRoutingModule = class TemplateEditorRoutingModule {
};
TemplateEditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TemplateEditorRoutingModule);



/***/ }),

/***/ "./src/app/Campaign/TemplateEditor/templateEditor.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Campaign/TemplateEditor/templateEditor.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".template-editor-iframe {\n  height: 100vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2FtcGFpZ24vVGVtcGxhdGVFZGl0b3IvRDpcXHRlc3RcXG1hcmtldGluZ1xcbWFya2V0aW5nLWZyb250ZW5kL3NyY1xcYXBwXFxDYW1wYWlnblxcVGVtcGxhdGVFZGl0b3JcXHRlbXBsYXRlRWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DYW1wYWlnbi9UZW1wbGF0ZUVkaXRvci90ZW1wbGF0ZUVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9DYW1wYWlnbi9UZW1wbGF0ZUVkaXRvci90ZW1wbGF0ZUVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wbGF0ZS1lZGl0b3ItaWZyYW1lIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi50ZW1wbGF0ZS1lZGl0b3ItaWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Campaign/TemplateEditor/templateEditor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Campaign/TemplateEditor/templateEditor.component.ts ***!
  \*********************************************************************/
/*! exports provided: TemplateEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEditorComponent", function() { return TemplateEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Audience_audience_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Audience/audience.service */ "./src/app/Audience/audience.service.ts");
/* harmony import */ var _User_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../User.store */ "./src/app/User.store.ts");
/* harmony import */ var _template_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template.store */ "./src/app/Campaign/template.store.ts");
/* harmony import */ var _Audience_audience_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Audience/audience.store */ "./src/app/Audience/audience.store.ts");
/* harmony import */ var _templateEditor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templateEditor.service */ "./src/app/Campaign/TemplateEditor/templateEditor.service.ts");









let TemplateEditorComponent = class TemplateEditorComponent {
    constructor(templateQuery, router, templateEditorService, userProfileQuery, audienceQuery, audienceService) {
        this.templateQuery = templateQuery;
        this.router = router;
        this.templateEditorService = templateEditorService;
        this.userProfileQuery = userProfileQuery;
        this.audienceQuery = audienceQuery;
        this.audienceService = audienceService;
    }
    ngOnInit() {
        this.templateEditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            templateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            primaryText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Primary text"),
            secondaryText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Secondary text")
        });
        if (!this.templateQuery.getValue().templateHtml) {
            this.router.navigate(["/campaign"]);
        }
        else {
            if (!this.audienceQuery.getHasCache()) {
                this.audienceService.getAllAudience();
            }
            this.readyTemplatePreview();
            this.handleTextChanges();
            this.isListLoading$ = this.audienceQuery.selectLoading();
            this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
        }
    }
    readyTemplatePreview() {
        this.iframeDoc = this.templateIframe.nativeElement.contentDocument;
        this.iframeDoc.open();
        this.iframeDoc.write(this.templateQuery.getValue().templateHtml);
        this.iframeDoc.close();
        this.primaryTextSelector = this.iframeDoc.querySelector("#primaryText");
        this.secondaryTextSelector = this.iframeDoc.querySelector("#secondaryText");
        this.templateEditForm.patchValue({
            primaryText: this.primaryTextSelector.innerText,
            secondaryText: this.secondaryTextSelector.innerText
        });
    }
    handleTextChanges() {
        this.templateEditForm.valueChanges.subscribe(form => {
            this.primaryTextSelector.innerText = form.primaryText;
            this.secondaryTextSelector.innerText = form.secondaryText;
        });
    }
    saveTemplate(templateData) {
        this.templateEditorService.createTemplate({
            companyId: this.userProfileQuery.getEntity("userProfile").companyId,
            templateName: templateData.templateName,
            sgTemplateId: this.templateQuery.getValue().templateId,
            templateMetaData: {
                primaryText: this.primaryTextSelector.innerText,
                secondaryText: this.secondaryTextSelector.innerText
            },
            templateHtml: this.iframeDoc.documentElement.innerHTML
        });
    }
    submitTemplate(templateData) {
        this.saveTemplate(templateData);
    }
    submitAndSelectAudience(templateData) {
        this.saveTemplate(templateData);
        this.router.navigate(["/campaign/template-editor/audience"]);
    }
};
TemplateEditorComponent.ctorParameters = () => [
    { type: _template_store__WEBPACK_IMPORTED_MODULE_6__["TemplateQuery"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _templateEditor_service__WEBPACK_IMPORTED_MODULE_8__["TemplateEditorService"] },
    { type: _User_store__WEBPACK_IMPORTED_MODULE_5__["UserProfileQuery"] },
    { type: _Audience_audience_store__WEBPACK_IMPORTED_MODULE_7__["AudienceQuery"] },
    { type: _Audience_audience_service__WEBPACK_IMPORTED_MODULE_4__["AudienceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateIframe", { static: true })
], TemplateEditorComponent.prototype, "templateIframe", void 0);
TemplateEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-template-editor",
        template: __webpack_require__(/*! raw-loader!./templateEditor.component.html */ "./node_modules/raw-loader/index.js!./src/app/Campaign/TemplateEditor/templateEditor.component.html"),
        styles: [__webpack_require__(/*! ./templateEditor.component.scss */ "./src/app/Campaign/TemplateEditor/templateEditor.component.scss")]
    })
], TemplateEditorComponent);



/***/ }),

/***/ "./src/app/Campaign/TemplateEditor/templateEditor.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Campaign/TemplateEditor/templateEditor.module.ts ***!
  \******************************************************************/
/*! exports provided: TemplateEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEditorModule", function() { return TemplateEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Audience_audience_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Audience/audience.module */ "./src/app/Audience/audience.module.ts");
/* harmony import */ var _Audience_audience_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Audience/audience.service */ "./src/app/Audience/audience.service.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _templateEditor_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templateEditor-routing.module */ "./src/app/Campaign/TemplateEditor/templateEditor-routing.module.ts");
/* harmony import */ var _templateEditor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templateEditor.component */ "./src/app/Campaign/TemplateEditor/templateEditor.component.ts");
/* harmony import */ var _templateEditor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templateEditor.service */ "./src/app/Campaign/TemplateEditor/templateEditor.service.ts");









let TemplateEditorModule = class TemplateEditorModule {
};
TemplateEditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _templateEditor_routing_module__WEBPACK_IMPORTED_MODULE_6__["TemplateEditorRoutingModule"],
            _Audience_audience_module__WEBPACK_IMPORTED_MODULE_3__["AudienceModule"]
        ],
        providers: [_templateEditor_service__WEBPACK_IMPORTED_MODULE_8__["TemplateEditorService"], _Audience_audience_service__WEBPACK_IMPORTED_MODULE_4__["AudienceService"]],
        declarations: [_templateEditor_component__WEBPACK_IMPORTED_MODULE_7__["TemplateEditorComponent"]]
    })
], TemplateEditorModule);



/***/ }),

/***/ "./src/app/Campaign/TemplateEditor/templateEditor.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Campaign/TemplateEditor/templateEditor.service.ts ***!
  \*******************************************************************/
/*! exports provided: TemplateEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEditorService", function() { return TemplateEditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _template_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template.store */ "./src/app/Campaign/template.store.ts");







let TemplateEditorService = class TemplateEditorService {
    constructor(httpClient, templateStore, templateQuery, router) {
        this.httpClient = httpClient;
        this.templateStore = templateStore;
        this.templateQuery = templateQuery;
        this.router = router;
    }
    createTemplate(template) {
        this.templateStore.setLoading(true);
        const setTemplate = this.httpClient
            .post(_config__WEBPACK_IMPORTED_MODULE_5__["apiServerUrl"] + "/template", template)
            .subscribe(data => {
            this.templateStore.upsert(data["_id"], template);
            this.templateStore.setLoading(false);
            this.templateStore.setActive(data["_id"]);
            // this.router.navigate(["/campaign"]);
        }, error => {
            console.log(error);
            this.templateStore.setLoading(false);
        });
        return this.templateQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])() : setTemplate;
    }
};
TemplateEditorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_6__["TemplateStore"] },
    { type: _template_store__WEBPACK_IMPORTED_MODULE_6__["TemplateQuery"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TemplateEditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TemplateEditorService);



/***/ }),

/***/ "./src/app/Campaign/campaign-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Campaign/campaign-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaign.component */ "./src/app/Campaign/campaign.component.ts");
/* harmony import */ var _ChooseTemplate_chooseTemplate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChooseTemplate/chooseTemplate.component */ "./src/app/Campaign/ChooseTemplate/chooseTemplate.component.ts");






const routes = [
    {
        path: "",
        canActivate: [_sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: "",
                component: _campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampaignComponent"]
            },
            {
                path: "choose-template",
                component: _ChooseTemplate_chooseTemplate_component__WEBPACK_IMPORTED_MODULE_5__["ChooseTemplateComponent"]
            },
            {
                path: "template-editor",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./TemplateEditor/templateEditor.module */ "./src/app/Campaign/TemplateEditor/templateEditor.module.ts")).then(mod => mod.TemplateEditorModule)
            }
        ]
    }
];
let CampaignRoutingModule = class CampaignRoutingModule {
};
CampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CampaignRoutingModule);



/***/ }),

/***/ "./src/app/Campaign/campaign.component.css":
/*!*************************************************!*\
  !*** ./src/app/Campaign/campaign.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Campaign/campaign.component.ts":
/*!************************************************!*\
  !*** ./src/app/Campaign/campaign.component.ts ***!
  \************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign.service */ "./src/app/Campaign/campaign.service.ts");
/* harmony import */ var _campaign_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign.store */ "./src/app/Campaign/campaign.store.ts");




let CampaignComponent = class CampaignComponent {
    constructor(campaignQuery, campaignStore, campaignService) {
        this.campaignQuery = campaignQuery;
        this.campaignStore = campaignStore;
        this.campaignService = campaignService;
    }
    addMetaDataCampaign() {
        this.campaignList$.subscribe(campaigns => {
            console.log(campaigns);
            // campaigns.
        });
    }
    ngOnInit() {
        this.campaignList$ = this.campaignQuery.selectAll();
        this.showCampaign$ = this.campaignQuery.selectCount();
        this.loading$ = this.campaignQuery.selectLoading();
        this.campaignService.getAllCampaign();
        this.addMetaDataCampaign();
        window.t = this;
    }
};
CampaignComponent.ctorParameters = () => [
    { type: _campaign_store__WEBPACK_IMPORTED_MODULE_3__["CampaignQuery"] },
    { type: _campaign_store__WEBPACK_IMPORTED_MODULE_3__["CampaignStore"] },
    { type: _campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"] }
];
CampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-campaign",
        template: __webpack_require__(/*! raw-loader!./campaign.component.html */ "./node_modules/raw-loader/index.js!./src/app/Campaign/campaign.component.html"),
        styles: [__webpack_require__(/*! ./campaign.component.css */ "./src/app/Campaign/campaign.component.css")]
    })
], CampaignComponent);



/***/ }),

/***/ "./src/app/Campaign/campaign.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Campaign/campaign.module.ts ***!
  \*********************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/header.module */ "./src/app/Header/header.module.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedServices/auth.guard */ "./src/app/sharedServices/auth.guard.ts");
/* harmony import */ var _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedServices/token-interceptor */ "./src/app/sharedServices/token-interceptor.ts");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campaign-routing.module */ "./src/app/Campaign/campaign-routing.module.ts");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campaign.component */ "./src/app/Campaign/campaign.component.ts");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./campaign.service */ "./src/app/Campaign/campaign.service.ts");
/* harmony import */ var _ChooseTemplate_chooseTemplate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChooseTemplate/chooseTemplate.component */ "./src/app/Campaign/ChooseTemplate/chooseTemplate.component.ts");
/* harmony import */ var _ChooseTemplate_chooseTemplate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChooseTemplate/chooseTemplate.service */ "./src/app/Campaign/ChooseTemplate/chooseTemplate.service.ts");
/* harmony import */ var _TemplateEditor_templateEditor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TemplateEditor/templateEditor.module */ "./src/app/Campaign/TemplateEditor/templateEditor.module.ts");














let CampaignModule = class CampaignModule {
};
CampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _campaign_routing_module__WEBPACK_IMPORTED_MODULE_8__["CampaignRoutingModule"],
            _Header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _TemplateEditor_templateEditor_module__WEBPACK_IMPORTED_MODULE_13__["TemplateEditorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _sharedServices_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                multi: true
            },
            _sharedServices_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
            _campaign_service__WEBPACK_IMPORTED_MODULE_10__["CampaignService"],
            _ChooseTemplate_chooseTemplate_service__WEBPACK_IMPORTED_MODULE_12__["ChooseTemplateService"]
        ],
        declarations: [_campaign_component__WEBPACK_IMPORTED_MODULE_9__["CampaignComponent"], _ChooseTemplate_chooseTemplate_component__WEBPACK_IMPORTED_MODULE_11__["ChooseTemplateComponent"]]
    })
], CampaignModule);



/***/ })

}]);
//# sourceMappingURL=Campaign-campaign-module-es2015.js.map