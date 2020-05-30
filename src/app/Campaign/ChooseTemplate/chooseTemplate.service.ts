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

  getAllUserEmailTemplates() {
    const userEmailTemplate = this.httpClient.get(
      apiServerUrl + "/template/allUserEmail"
    );
    return userEmailTemplate;
  }

  getTemplate(type, name, id) {
    const template = this.httpClient
      .get(apiServerUrl + "/template/" + id + "." + name, {
        responseType: "text",
      })
      .subscribe(
        (data) => {
          this.templateStore.set({
            0: {
              templateName: name,
              templateHtml: data,
              templateId: id,
            },
          });
          this.templateStore.setActive(0);
          this.router.navigate(["/campaign/template-editor"]);
        },
        (error) => {
          console.log(error);
        }
      );
    return this.templateQuery.getHasCache() ? of() : template;
  }
  getUserDefinedTemplate(
    name,
    subject,
    htmlData,
    sgId,
    templateId,
    templateMetaData
  ) {
    this.templateStore.set({
      0: {
        templateName: name,
        subject,
        templateHtml: htmlData,
        sgTemplateId: sgId,
        templateId,
        templateMetaData: templateMetaData,
      },
    });
    this.templateStore.setActive(0);
    this.router.navigate(["/campaign/template-editor"]);
  }
}
