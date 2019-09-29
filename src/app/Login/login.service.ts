import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerUrl } from '../../config';
import { UserLoginInterface } from './interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  loginUser(user: UserLoginInterface) {
    console.log("asda");
    this.http.post(apiServerUrl + '/users/login', user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
