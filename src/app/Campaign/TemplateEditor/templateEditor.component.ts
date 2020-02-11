import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AudienceService } from "../../Audience/audience.service";
import { AudienceInterface } from "../../Audience/Interfaces/audience.interface";
import { UserProfileQuery } from "../../User.store";
import { CampaignQuery } from "../campaign.store";
import { CreateTemplateDTO } from "../interfaces/template.interface";
import { AudienceQuery } from "./../../Audience/audience.store";
import { TemplateEditorService } from "./templateEditor.service";

@Component({
  selector: "app-template-editor",
  templateUrl: "./templateEditor.component.html",
  styleUrls: ["./templateEditor.component.css"]
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
    private campaignQuery: CampaignQuery,
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

    if (!this.campaignQuery.getValue().templateHtml) {
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
    this.iframeDoc.write(this.campaignQuery.getValue().templateHtml);
    this.iframeDoc.close();
    this.primaryTextSelector = this.iframeDoc.querySelector("#primaryText");
    this.secondaryTextSelector = this.iframeDoc.querySelector("#secondaryText");

    this.templateEditForm.patchValue({
      // templateName: "asd",
      primaryText: this.primaryTextSelector.innerHTML,
      secondaryText: this.secondaryTextSelector.innerHTML
    });
  }

  handleTextChanges() {
    this.templateEditForm.valueChanges.subscribe(form => {
      this.primaryTextSelector.innerHTML = form.primaryText;
      this.secondaryTextSelector.innerHTML = form.secondaryText;
    });
  }
  saveTemplate(templateData) {
    this.templateEditorService.createTemplate({
      companyId: this.userProfileQuery.getEntity("userProfile").companyId,
      templateName: templateData.templateName,
      templateHtml: this.iframeDoc.documentElement.innerHTML
    });
  }
  submitTemplate(templateData: CreateTemplateDTO) {
    this.saveTemplate(templateData);
    this.router.navigate(["/template"]);
  }

  submitAndSelectAudience(templateData: CreateTemplateDTO) {
    this.saveTemplate(templateData);
    this.router.navigate(["/campaign/template-editor/audience"]);
  }
}
