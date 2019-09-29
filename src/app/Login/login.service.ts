import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiServerUrl } from '../../config';
import { UserLoginInterface } from './interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  loginUser(user: UserLoginInterface): Observable<object> {
    return this.http.post(apiServerUrl + '/users/login', user);
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
