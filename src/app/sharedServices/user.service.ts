import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerUrl } from '../../config';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }
  getUserProfile() {
    return this.http.get(apiServerUrl + '/users/me');
  }
}
