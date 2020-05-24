import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { StateHistoryPlugin } from "@datorama/akita";
import { LoginService } from "../../Login/login.service";
import { AudienceQuery } from "../audience.store";
import { AudienceCreateInterface } from "../Interfaces/audience-create.interface";
import { AudienceInterface } from "../Interfaces/audience.interface";
import { AudienceDetailService } from "./audience-details.service";

@Component({
  selector: "app-audience-details",
  templateUrl: "./audience-details.component.html",
  styleUrls: ["./audience-details.component.scss"],
})
export class AudienceDetailComponent implements OnInit {
  audienceCreateForm: FormGroup;
  audienceDataEntity: AudienceInterface;
  isEditAudience: boolean;
  stateHistory: StateHistoryPlugin;

  constructor(
    private createAudience: AudienceDetailService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private audienceQuery: AudienceQuery
  ) {}

  ngOnInit(): void {
    // if audience does not exists
    if (!this.audienceQuery.getHasCache()) {
      this.router.navigate(["/audience"]);
    }

    this.audienceCreateForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email]),
      phone: new FormControl("", [Validators.required]),
      source: new FormControl("website", [Validators.required]),
      type: new FormControl("customer", [Validators.required]),
    });

    this.route.data.subscribe((data) => {
      this.route.params.subscribe((params) => {
        this.audienceDataEntity = this.audienceQuery.getEntity(params.id);
        if (data.method !== "add" && !this.audienceDataEntity) {
          this.router.navigate(["/audience"]);
        } else {
          this.audienceCreateForm.patchValue(this.audienceDataEntity || {});
        }
      });
    });
  }

  submitCreateAudience(audienceData: AudienceCreateInterface) {
    audienceData.userId = this.loginService.getUser()._id;
    audienceData.companyId = this.loginService.getUser().companyId;
    this.createAudience.audienceCreate(audienceData);
  }

  submitEditAudience(audienceData: AudienceCreateInterface) {
    audienceData.userId = this.loginService.getUser()._id;
    audienceData._id = this.audienceDataEntity._id;
    this.createAudience.audienceEdit(audienceData);
  }
}
