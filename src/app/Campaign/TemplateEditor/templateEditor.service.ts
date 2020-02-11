import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { apiServerUrl } from "../../../config";
import { CreateTemplateDTO } from "../interfaces/template.interface";
import { TemplateQuery, TemplateStore } from "../template.store";

@Injectable()
export class TemplateEditorService {
  constructor(
    private httpClient: HttpClient,
    private templateStore: TemplateStore,
    private templateQuery: TemplateQuery,
    private router: Router
  ) {}

  createTemplate(template: CreateTemplateDTO) {
    this.templateStore.setLoading(true);
    const setTemplate = this.httpClient
      .post(apiServerUrl + "/template", template)
      .subscribe(
        data => {
          this.templateStore.upsert(data["_id"], template);
          this.templateStore.setLoading(false);
          this.templateStore.setActive(data["_id"]);
          // this.router.navigate(["/campaign"]);
        },
        error => {
          console.log(error);
          this.templateStore.setLoading(false);
        }
      );
    return this.templateQuery.getHasCache() ? of() : setTemplate;
  }
}
