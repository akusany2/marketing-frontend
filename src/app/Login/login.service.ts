import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiServerUrl } from "../../config";
import { UserLoginInterface } from "./interfaces/login.interface";

@Injectable()
export class LoginService {
  tokenKey = "token";
  userKey = "userData";
  constructor(private http: HttpClient) {}
  loginUser(user: UserLoginInterface): Observable<any> {
    return this.http.post(apiServerUrl + "/users/login", user);
  }
  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  setUser(user) {
    localStorage.setItem(this.userKey, user);
  }
  getUser() {
    return localStorage.getItem(this.userKey);
  }
  removeUser() {
    localStorage.removeItem(this.userKey);
  }

  logoutUser() {
    this.removeToken();
    this.removeUser();
  }
}
