import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { StatusMessageEnums } from "../sharedServices/StatusMessage.enum";
import { UserLoginInterface } from "./interfaces/login.interface";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  loginHttpError = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login(userData: UserLoginInterface) {
    this.loginService.loginUser(userData).subscribe(
      data => {
        if (data["message"] === StatusMessageEnums.invalidCredentials) {
          this.loginHttpError = true;
        } else {
          this.loginService.setToken(data["token"]);
          this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        this.loginHttpError = true;
        return Observable.throw(err);
      }
    );
  }
  closeHttpErrorAlert() {
    this.loginHttpError = false;
  }
}
