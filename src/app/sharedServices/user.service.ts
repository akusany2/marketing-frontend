import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiServerUrl } from "../../config";
import { UserProfileStore } from "../Login/User.store";

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private userProfileStore: UserProfileStore
  ) {}
  getUserProfile() {
    return this.http.get(apiServerUrl + "/users/me").subscribe(data => {
      // this.userProfileStore.set
    });
  }
}
