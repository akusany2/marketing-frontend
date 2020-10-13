import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { v1 as uuidv1 } from "uuid";
import { LoginService } from "../../Login/login.service";
import { SurveyStore } from "../survey.store";
declare var $: any;

@Component({
  selector: "app-surveyCreate",
  templateUrl: "./surveyCreate.component.html",
  styleUrls: ["./surveyCreate.component.css"],
})
export class SurveyCreateComponent implements AfterViewInit {
  @ViewChild("formBuilder", { static: false }) formBuilder: ElementRef;
  surveyForm;
  formData = [];
  surveyCreateForm: FormGroup;
  constructor(
    private router: Router,
    private surveyStore: SurveyStore,
    private loginService: LoginService,
    private nzMessageService: NzMessageService
  ) {
    this.surveyCreateForm = new FormGroup({
      surveyName: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
    });
  }

  ngAfterViewInit() {
    this.surveyForm = $(this.formBuilder.nativeElement).formBuilder({
      formData: [],
      disabledAttrs: ["name", "className", "access"],
      disableFields: ["autocomplete", "file", "date", "button", "hidden"],
      disabledSubtypes: {
        text: ["password"],
      },
      disabledActionButtons: ["data"],
      onSave: (event) => {
        this.formData = this.surveyForm.actions.getData("json", true);
        console.log(this.surveyForm.actions.getData());
        // $(this.formBuilder.nativeElement).formRender({
        //   formData: this.surveyForm.actions.getData("json", true),
        //   dataType: "json",
        // });
      },
    });
  }
  addActiveSurveyToStore() {
    if (this.formData.length > 0) {
      let id = uuidv1();
      this.surveyStore.add(
        {
          _id: id,
          name: this.surveyCreateForm.value.surveyName,
          message: this.surveyCreateForm.value.message,
          formJson: this.surveyForm.actions.getData("json", true),
          companyId: this.loginService.getUser().companyId,
        },
        { prepend: true }
      );
      this.surveyStore.setActive(id);
      this.router.navigate(["/survey/audience"]);
    } else {
      this.nzMessageService.create(
        "error",
        "Form builder should not be empty! Add something to Survey Form and click Save.",
        {
          nzDuration: 5000,
        }
      );
    }
  }
  selectAudience() {
    this.router.navigate(["/survey/audience"]);
  }
}
