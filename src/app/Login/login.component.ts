import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { StatusMessageEnum } from "../sharedServices/status-message.enum";
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
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
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
        if (data["message"] === StatusMessageEnum.invalidCredentials) {
          this.loginHttpError.status = true;
          this.loginHttpError.message = "Invalid credentials!";
        } else {
          this.loginService.setToken(data["token"]);
          this.loginService.setUser(JSON.stringify(data["userObj"]));
          this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        this.loginHttpError.status = true;
        this.loginHttpError.message = "Something went wrong, please contact Admin";
        return Observable.throw(err);
      }
    );
  }
  closeHttpErrorAlert() {
    this.loginHttpError.status = false;
  }
}
