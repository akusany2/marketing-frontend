import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiServerUrl } from "../../../config";
import { CreateTemplateDTO } from "../interfaces/template.interface";
import { TemplateStore } from "../template.store";

@Injectable()
export class TemplateEditorService {
  constructor(
    private httpClient: HttpClient,
    private templateStore: TemplateStore,
    private router: Router
  ) {}

  createTemplate(template: CreateTemplateDTO) {
    this.templateStore.setLoading(true);
    this.httpClient.post(apiServerUrl + "/template", template).subscribe(
      data => {
        this.templateStore.upsert(data["_id"], template);
        this.templateStore.setLoading(false);
        this.router.navigate(["/campaign"]);
      },
      error => {
        console.log(error);
        this.templateStore.setLoading(false);
      }
    );
  }
}
