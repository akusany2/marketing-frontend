import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AudienceService } from "../../Audience/audience.service";
import { AudienceInterface } from "../../Audience/Interfaces/audience.interface";
import { UserProfileQuery } from "../../User.store";
import { CreateTemplateDTO } from "../interfaces/template.interface";
import { TemplateQuery } from "../template.store";
import { AudienceQuery } from "./../../Audience/audience.store";
import { TemplateEditorService } from "./templateEditor.service";

@Component({
  selector: "app-template-editor",
  templateUrl: "./templateEditor.component.html",
  styleUrls: ["./templateEditor.component.scss"]
})
export class TemplateEditorComponent implements OnInit {
  @ViewChild("templateIframe", { static: true }) templateIframe: ElementRef;
  templateEditForm: FormGroup;
  listOfDisplayAudience$: Observable<AudienceInterface[]>;
  isListLoading$: Observable<boolean>;
  iframeDoc;
  primaryTextSelector;
  secondaryTextSelector;

  constructor(
    private templateQuery: TemplateQuery,
    private router: Router,
    private templateEditorService: TemplateEditorService,
    private userProfileQuery: UserProfileQuery,
    private audienceQuery: AudienceQuery,
    private audienceService: AudienceService
  ) {}

  ngOnInit() {
    this.templateEditForm = new FormGroup({
      templateName: new FormControl("", [Validators.required]),
      primaryText: new FormControl("Primary text"),
      secondaryText: new FormControl("Secondary text")
    });

    if (!this.templateQuery.getValue().templateHtml) {
      this.router.navigate(["/campaign"]);
    } else {
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
  submitTemplate(templateData: CreateTemplateDTO) {
    this.saveTemplate(templateData);
  }

  submitAndSelectAudience(templateData: CreateTemplateDTO) {
    this.saveTemplate(templateData);
    this.router.navigate(["/campaign/template-editor/audience"]);
  }
}
