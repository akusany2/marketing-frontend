import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CampaignQuery } from "../campaign.store";

@Component({
  selector: "app-template-editor",
  templateUrl: "./templateEditor.component.html",
  styleUrls: ["./templateEditor.component.css"]
})
export class TemplateEditorComponent implements OnInit {
  templateEditForm: FormGroup;
  iframeDoc;
  // primaryText: string;
  // secondaryText: string;
  constructor(private campaignQuery: CampaignQuery, private router: Router) {}

  ngOnInit() {
    this.templateEditForm = new FormGroup({
      templateName: new FormControl("", [Validators.required]),
      primaryText: new FormControl("Primary text", [Validators.required]),
      secondaryText: new FormControl("Secondary text", [Validators.required])
    });

    if (!this.campaignQuery.getValue().templateHtml) {
      this.router.navigate(["/campaign"]);
    } else {
      this.readyTemplatePreview();
      this.handleTextChanges();
    }
  }

  readyTemplatePreview() {
    this.iframeDoc = document.getElementById(
      "templatePreview"
    ).contentWindow.document;
    this.iframeDoc.open();
    this.iframeDoc.write(this.campaignQuery.getValue().templateHtml);
    this.iframeDoc.close();
  }

  handleTextChanges() {
    let primaryText = this.iframeDoc.querySelector("#primaryText");
    let secondaryText = this.iframeDoc.querySelector("#secondaryText");
    this.templateEditForm.valueChanges.subscribe(form => {
      primaryText.innerHTML = form.primaryText;
      secondaryText.innerHTML = form.secondaryText;
    });
  }
}
