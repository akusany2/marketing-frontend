import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { LoginInterface } from './interfaces/login.interface';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }


  login(userData: LoginInterface) {
    console.log(userData);
  }
}
