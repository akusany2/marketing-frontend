import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-surveyCreate",
  templateUrl: "./surveyCreate.component.html",
  styleUrls: ["./surveyCreate.component.css"],
})
export class SurveyCreateComponent implements AfterViewInit {
  @ViewChild("formBuilder", { static: false }) formBuilder: ElementRef;
  formData = [];
  surveyCreateForm: FormGroup;
  constructor(private router: Router) {
    this.surveyCreateForm = new FormGroup({
      surveyName: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
    });
  }

  ngAfterViewInit() {
    window.s = $(this.formBuilder.nativeElement).formBuilder({
      formData: this.formData,
      disabledAttrs: ["name", "className"],
      disableFields: ["autocomplete", "file", "date", "button", "hidden"],
      disabledSubtypes: {
        text: ["password"],
      },
    });
  }

  selectAudience() {
    this.router.navigate(["/survey/audience"]);
  }
}
