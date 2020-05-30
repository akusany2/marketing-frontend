import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CampaignStore } from "../campaign.store";
import { ChooseTemplateService } from "./chooseTemplate.service";

@Component({
  selector: "app-choose-template",
  templateUrl: "./chooseTemplate.component.html",
  styleUrls: ["./chooseTemplate.component.css"],
})
export class ChooseTemplateComponent implements OnInit {
  templates = [];
  campaignInitForm: FormGroup;
  userDefinedTemplateSelected = "";
  userDefinedTemplates;
  selectedTemplate = {
    type: "",
    name: "",
    templateId: "",
    templateMetaData: {},
  };

  constructor(
    private chooseTemplateService: ChooseTemplateService,
    private campaignStore: CampaignStore
  ) {}

  ngOnInit() {
    this.getAllTemplates();
    this.campaignInitForm = new FormGroup({
      campaignName: new FormControl("", [Validators.required]),
    });
  }

  getAllTemplates() {
    this.chooseTemplateService.getAllTemplates().subscribe((data) => {
      this.templates = data as [];
    });
    this.chooseTemplateService.getAllUserEmailTemplates().subscribe((data) => {
      this.userDefinedTemplates = data;
    });
  }
  selectedTemplateHandler(type, name, templateId, templateMetaData) {
    this.userDefinedTemplateSelected = "";
    this.selectedTemplate = { type, name, templateId, templateMetaData };
  }
  selectTemplate() {
    this.campaignStore.upsert(0, {
      name: this.campaignInitForm.value.campaignName,
    });
    this.campaignStore.setActive(0);
    if (this.userDefinedTemplateSelected) {
      const template = this.userDefinedTemplates.filter(
        (template) => this.userDefinedTemplateSelected == template._id
      );
      this.chooseTemplateService.getUserDefinedTemplate(
        template[0].templateName,
        template[0].subject,
        template[0].templateHtml,
        template[0].sgTemplateId,
        template[0]._id,
        template[0].templateMetaData
      );
    } else {
      this.chooseTemplateService.getTemplate(
        this.selectedTemplate.type,
        this.selectedTemplate.name,
        this.selectedTemplate.templateId
      );
    }
  }
}
