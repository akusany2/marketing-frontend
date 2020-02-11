import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiServerUrl } from "../../config";
import { TemplateQuery, TemplateStore } from "./template.store";

@Injectable()
export class CampaignService {
  constructor(
    private readonly httpClient: HttpClient,
    private templateQuery: TemplateQuery,
    private templateStore: TemplateStore,
    private router: Router
  ) {}
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
  updateAudienceInTemplate(audiences: string[]) {
    const activeId = this.templateQuery.getActiveId();
    this.httpClient
      .put(apiServerUrl + "/template/audience", {
        id: activeId,
        audiences
      })
      .subscribe(
        data => {
          this.templateStore.update(activeId, { audiences: data["audiences"] });
        },
        err => {
          console.log(err);
        }
      );
  }
  startCampaign(audiences: string) {
    console.log(this.templateQuery.getActive());
  }
}
