import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CampaignStore } from "../campaign.store";
import { ChooseTemplateService } from "./chooseTemplate.service";

@Component({
  selector: "app-choose-template",
  templateUrl: "./chooseTemplate.component.html",
  styleUrls: ["./chooseTemplate.component.css"]
})
export class ChooseTemplateComponent implements OnInit {
  templates = [];
  campaignInitForm: FormGroup;

  constructor(
    private chooseTemplateService: ChooseTemplateService,
    private campaignStore: CampaignStore
  ) {}

  ngOnInit() {
    this.getAllTemplates();
    this.campaignInitForm = new FormGroup({
      campaignName: new FormControl("", [Validators.required])
    });
  }

  getAllTemplates() {
    this.chooseTemplateService.getAllTemplates().subscribe(data => {
      this.templates = data as [];
    });
  }

  selectTemplate(type, name, templateId) {
    this.campaignStore.upsert(0, {
      name: this.campaignInitForm.value.campaignName
    });
    this.campaignStore.setActive(0);
    this.chooseTemplateService.getTemplate(type, name, templateId);
  }
}
