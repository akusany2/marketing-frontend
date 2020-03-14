import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiServerUrl } from "../../config";
import { CampaignQuery, CampaignStore } from "./campaign.store";
import { TemplateQuery, TemplateStore } from "./template.store";

@Injectable()
export class CampaignService {
  constructor(
    private readonly httpClient: HttpClient,
    private templateQuery: TemplateQuery,
    private templateStore: TemplateStore,
    private campaignStore: CampaignStore,
    private campaignQuery: CampaignQuery,
    private router: Router
  ) {}

  createCampaign() {
    this.httpClient.post(apiServerUrl + "/campaign", { something: 123 });
  }

  updateTemplate() {
    this.httpClient
      .put(apiServerUrl + "/template", this.templateQuery.getActive())
      .subscribe(
        data => {},
        err => {
          console.log(err);
        }
      );
  }
  // updateAudienceInTemplate(audiences: string[]) {
  //   const activeId = this.templateQuery.getActiveId();
  //   this.httpClient
  //     .put(apiServerUrl + "/template/audience", {
  //       id: activeId,
  //       audiences
  //     })
  //     .subscribe(
  //       data => {
  //         this.templateStore.update(activeId, { audiences: data["audiences"] });
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }
  addAudienceToCampaign(audiences) {
    const templateId = this.templateQuery.getActiveId();
    this.campaignStore.updateActive({
      audiences,
      sgTemplateId: this.templateQuery.getEntity(templateId).sgTemplateId,
      templateId: templateId
    });
    this.httpClient
      .post(apiServerUrl + "/campaign", this.campaignQuery.getActive())
      .subscribe(
        data => {},
        err => {
          console.log(err);
        }
      );
  }
}
