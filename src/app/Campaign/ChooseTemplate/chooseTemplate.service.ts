import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiServerUrl } from "../../../config";

@Injectable()
export class ChooseTemplateService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllTemplates() {
    return this.httpClient.get(apiServerUrl + "/template/all");
  }
}
