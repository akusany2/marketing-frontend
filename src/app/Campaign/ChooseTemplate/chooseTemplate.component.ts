import { Component, OnInit } from "@angular/core";
import { ChooseTemplateService } from "./chooseTemplate.service";

@Component({
  selector: "app-choose-template",
  templateUrl: "./chooseTemplate.component.html",
  styleUrls: ["./chooseTemplate.component.css"]
})
export class ChooseTemplateComponent implements OnInit {
  templates = [];
  constructor(private chooseTemplateService: ChooseTemplateService) {}

  ngOnInit() {
    this.getAllTemplates();
  }

  getAllTemplates() {
    this.chooseTemplateService.getAllTemplates().subscribe(data => {
      this.templates = data as [];
    });
  }

  selectTemplate(type, name, templateId) {
    this.chooseTemplateService.getTemplate(type, name, templateId);
  }
}
