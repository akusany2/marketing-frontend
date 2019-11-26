import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/router";
import { LoginService } from "../Login/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private route: Route, private loginService: LoginService) {}

  ngOnInit() {}

  logout() {
    this.loginService.logoutUser();
    this.route.navigate(["/login"]);
  }
}
