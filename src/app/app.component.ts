import { Component, OnInit } from "@angular/core";
import { LoginService } from "./Login/login.service";
import { UserProfileStore } from "./User.store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private userProfileStore: UserProfileStore
  ) {}

  ngOnInit() {
    if (this.loginService.getUser()) {
      this.userProfileStore.set({ userProfile: this.loginService.getUser() });
    }
  }
}
