import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiServerUrl } from "../../config";
import { LoginService } from "../Login/login.service";
import { CampaignQuery, CampaignStore } from "./campaign.store";
import { CampaignInterface } from "./interfaces/campaign.interface";
import { TemplateQuery, TemplateStore } from "./template.store";

@Injectable()
export class CampaignService {
  constructor(
    private readonly httpClient: HttpClient,
    private templateQuery: TemplateQuery,
    private templateStore: TemplateStore,
    private campaignStore: CampaignStore,
    private campaignQuery: CampaignQuery,
    private loginService: LoginService,
    private router: Router
  ) {}

  createCampaign() {
    // this.httpClient.post(apiServerUrl + "/campaign", { something: 123 });
  }
  getStats(audiences) {
    let stats = {
      delivered: 0,
      open: 0,
      bounce: 0
    };
    audiences.forEach(audience => {
      if (audience.event) {
        stats.delivered = audience.event["delivered"]
          ? stats.delivered + 1
          : stats.delivered;
        stats.open = audience.event["open"] ? stats.open + 1 : stats.open;
        stats.bounce = audience.event["bounce"]
          ? stats.bounce + 1
          : stats.bounce;
      }
    });
    return stats;
  }
  getAllCampaign() {
    return this.httpClient
      .post<CampaignInterface[]>(apiServerUrl + "/campaign/all", {
        companyId: this.loginService.getUser().companyId
      })
      .subscribe(
        campaigns => {
          const campaignList = {};
          campaigns.forEach(campaign => {
            campaign.stats = this.getStats(campaign.audiences);
            campaignList[campaign._id] = campaign;
          });
          this.campaignStore.set(campaignList);
          this.campaignStore.setLoading(false);
        },
        error => {
          console.error(error);
          this.campaignStore.setError(error);
          this.campaignStore.setLoading(false);
        }
      );
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

  addAudienceToCampaign(audiences) {
    const templateId = this.templateQuery.getActiveId();
    this.campaignStore.updateActive({
      companyId: this.loginService.getUser().companyId,
      audiences: audiences,
      sgTemplateId: this.templateQuery.getEntity(templateId).sgTemplateId,
      templateId: templateId
    });
    this.httpClient
      .post(apiServerUrl + "/campaign", this.campaignQuery.getActive())
      .subscribe(
        data => {
          this.router.navigate(["/campaign"]);
        },
        err => {
          this.router.navigate(["/campaign"]);
          console.log(err);
        }
      );
  }
}
