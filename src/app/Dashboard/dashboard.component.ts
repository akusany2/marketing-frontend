import { Component, OnInit } from "@angular/core";
import { UserService } from "../sharedServices/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  userProfile$;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userProfile$ = this.userService.getUserProfile();
  }
}
