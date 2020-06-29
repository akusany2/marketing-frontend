import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { LoginService } from "./Login/login.service";
import { UserProfileStore } from "./User.store";
declare global {
  interface Window {
    t: any;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentRoute;
  constructor(
    private route: Router,
    private loginService: LoginService,
    private userProfileStore: UserProfileStore
  ) {}

  ngOnInit() {
    if (this.loginService.getUser()) {
      this.userProfileStore.set({ userProfile: this.loginService.getUser() });
    }
    this.route.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.route.url;
      }
    });
  }
}
