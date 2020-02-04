import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CampaignService {
  constructor(private readonly httpClient: HttpClient) {}
}
