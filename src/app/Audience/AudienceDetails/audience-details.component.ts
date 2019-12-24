import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../Login/login.service";
import { AudienceCreateInterface } from './audience-create.interface';
import { AudienceDetailService } from "./audience-details.service";

@Component({
  selector: "app-audience-details",
  templateUrl: "./audience-details.component.html",
  styleUrls: ["./audience-details.component.scss"]
})
export class AudienceDetailComponent implements OnInit {
  audienceCreateForm: FormGroup;
  constructor(
    private createAudience: AudienceDetailService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.audienceCreateForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      surname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email]),
      phone: new FormControl("", [Validators.required]),
      source: new FormControl("website", [Validators.required])
    });
  }

  submitCreateAudience(audienceData: AudienceCreateInterface) {
    if (audienceData) {
      // audienceData.modifiedBy = this.userProfileQuery.getAll();
    }
    // console.log(this.loginService.getUser());
    // console.log(audienceData);
    audienceData.userId = this.loginService.getUser()._id;
    this.createAudience.audienceCreate(audienceData).subscribe(data => {
      this.router.navigate(["/audience"]);
    }, err => {
      console.log(err);
    });
  }
}
