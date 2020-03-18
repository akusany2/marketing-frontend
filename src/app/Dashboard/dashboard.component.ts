import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserProfileInterface } from "../Login/interfaces/user.interface";
import { UserService } from "../sharedServices/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface>;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userProfile$ = this.userService.getUserProfile() as any;
  }
}
