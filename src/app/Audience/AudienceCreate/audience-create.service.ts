import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerUrl } from '../../../config';


@Injectable()
export class AudienceCreateService {
  constructor(private http: HttpClient) { }

  createAudience(audienceData) {
    return this.http.post(apiServerUrl + "/audience", audienceData);
  }
}
