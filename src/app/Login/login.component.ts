import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { StatusMessageEnums } from "../sharedServices/status-message.enum";
import { UserLoginInterface } from "./interfaces/login.interface";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginHttpError = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
    // this.loginForm = this.formBuilder.group({
    //   username: ["", Validators.required],
    //   password: ["", Validators.required]
    // });
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
        console.log(data);
        this.loginService.removeToken();
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