import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { apiServerUrl } from "../../../config";
import { CampaignQuery, CampaignStore } from '../campaign.store';

@Injectable()
export class ChooseTemplateService {
  constructor(private readonly httpClient: HttpClient, private campaignStore: CampaignStore, private router: Router,
    private campaignQuery: CampaignQuery) { }

  getAllTemplates() {
    return this.httpClient.get(apiServerUrl + "/template/all");
  }

  getTemplate(type, name) {
    const template = this.httpClient.get(apiServerUrl + "/template/" + name, { responseType: 'text' }).subscribe(data => {
      this.campaignStore.update({ templateName: name, templateHtml: data });
      this.router.navigate(['/campaign/template-editor']);
    }, error => {
      console.log(error);
    });
    return this.campaignQuery.getHasCache() ? of() : template;
  }
}
