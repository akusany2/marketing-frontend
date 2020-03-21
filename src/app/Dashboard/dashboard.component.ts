import { Component, OnInit } from "@angular/core";
import { LoginService } from "../Login/login.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  userProfile;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.userProfile = this.loginService.getUser();
  }
}
