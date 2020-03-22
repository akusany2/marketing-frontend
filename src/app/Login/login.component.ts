import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { StatusMessageEnum } from "../sharedServices/status-message.enum";
import { UserProfileStore } from "../User.store";
import { UserLoginInterface } from "./interfaces/login.interface";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginHttpError = { status: false, message: "" };
  constructor(
    private loginService: LoginService,
    private router: Router,
    private userProfileStore: UserProfileStore
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      companyId: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  login(userData: UserLoginInterface) {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls[i].value.length === 0) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }

    this.loginService.loginUser(userData).subscribe(
      data => {
        this.loginService.removeToken();
        switch (data["message"]) {
          case StatusMessageEnum.invalidCredentials:
            this.loginHttpError.status = true;
            this.loginHttpError.message = "Invalid credentials!";
            break;
          case StatusMessageEnum.companyNotFound:
            this.loginHttpError.status = true;
            this.loginHttpError.message = "Invalid company ID!";
          default:
            this.loginService.setToken(data["token"]);
            this.loginService.setUser(JSON.stringify(data["user"]));
            this.userProfileStore.set({ userProfile: data["user"] });
            this.router.navigate(["/dashboard"]);
            break;
        }
      },
      err => {
        this.loginHttpError.status = true;
        this.loginHttpError.message =
          "Something went wrong, please contact Admin";
        return Observable.throw(err);
      }
    );
  }
  closeHttpErrorAlert() {
    this.loginHttpError.status = false;
  }
}
