import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CampaignQuery } from "../campaign.store";
import { CreateTemplateDTO } from '../interfaces/template.interface';
import { TemplateEditorService } from './templateEditor.service';

@Component({
  selector: "app-template-editor",
  templateUrl: "./templateEditor.component.html",
  styleUrls: ["./templateEditor.component.css"]
})
export class TemplateEditorComponent implements OnInit {
  @ViewChild('templateIframe', { static: true }) templateIframe: ElementRef;
  templateEditForm: FormGroup;
  iframeDoc;
  primaryTextSelector;
  secondaryTextSelector;
  constructor(private campaignQuery: CampaignQuery, private router: Router, private templateEditorService: TemplateEditorService) { }

  ngOnInit() {
    this.templateEditForm = new FormGroup({
      templateName: new FormControl("", [Validators.required]),
      primaryText: new FormControl("Primary text"),
      secondaryText: new FormControl("Secondary text")
    });

    if (!this.campaignQuery.getValue().templateHtml) {
      this.router.navigate(["/campaign"]);
    } else {
      this.readyTemplatePreview();
      this.handleTextChanges();
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

  submitTemplate(templateData: CreateTemplateDTO) {
    this.templateEditorService.createTemplate({
      templateName: templateData.templateName,
      templateHtml: this.iframeDoc.documentElement.innerHTML
    });
  }
}
