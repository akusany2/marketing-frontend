import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { apiServerUrl } from "../../../config";
import { TemplateQuery, TemplateStore } from "../template.store";

@Injectable()
export class ChooseTemplateService {
  constructor(
    private readonly httpClient: HttpClient,
    private templateStore: TemplateStore,
    private router: Router,
    private templateQuery: TemplateQuery
  ) {}

  getAllTemplates() {
    return this.httpClient.get(apiServerUrl + "/template/all");
  }

  getTemplate(type, name, id) {
    const template = this.httpClient
      .get(apiServerUrl + "/template/" + id + "." + name, {
        responseType: "text"
      })
      .subscribe(
        data => {
          this.templateStore.update({
            templateName: name,
            templateHtml: data,
            templateId: id
          });
          this.router.navigate(["/campaign/template-editor"]);
        },
        error => {
          console.log(error);
        }
      );
    return this.templateQuery.getHasCache() ? of() : template;
  }
}
