import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { StatusMessageEnums } from '../sharedServices/StatusMessage.enum';
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
      username: '',
      password: ''
    });
  }
  login(userData: UserLoginInterface) {
    // this.loginService.setToken()
    this.loginService.loginUser(userData).subscribe(data => {
      console.log(data);
      if (data["message"] === StatusMessageEnums.invalidCredentials) {
        this.loginHttpError = true;
      }
    }, error => {
      console.log(error);
      this.loginHttpError = true;
    });
    console.log(userData);
  }
  closeHttpErrorAlert() {
    this.loginHttpError = false;
  }
}
