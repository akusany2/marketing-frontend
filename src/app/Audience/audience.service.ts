import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiServerUrl } from "../../config";

@Injectable()
export class AudienceService {
  constructor(private httpClient: HttpClient) {}

  getAllAudience() {
    return this.httpClient.get(apiServerUrl + "/audience");
  }

  deleteAudience(id) {
    return this.httpClient.delete(apiServerUrl + "/audience/" + id);
  }
}
