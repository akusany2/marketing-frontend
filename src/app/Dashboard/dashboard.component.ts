import { Component, OnInit } from '@angular/core';
import { UserService } from '../sharedServices/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProfile = {
    name: '',
  };
  constructor(private userService: UserService) {
    this.userService.getUserProfile().subscribe(data => {
      this.userProfile = data as any;
    });

  }

  ngOnInit() {
  }

}
