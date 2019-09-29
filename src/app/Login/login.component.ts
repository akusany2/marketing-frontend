import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserLoginInterface } from './interfaces/login.interface';
import { LoginService } from './login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  loginHttpError = false;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(userData: UserLoginInterface) {
    // this.loginService.setToken()
    this.loginService.loginUser(userData);
    console.log(userData);
  }
  closeHttpErrorAlert() {
    this.loginHttpError = false;
  }
}
