import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { apiServerUrl } from '../../../config';
import { CreateTemplateDTO } from '../interfaces/template.interface';

@Injectable()
export class TemplateEditorService {
  constructor(private httpClient: HttpClient) { }

  createTemplate(template: CreateTemplateDTO) {
    this.httpClient.post(apiServerUrl + "/template", template).subscribe(data => { },
      error => {
        console.log(error);
      });
  }
}
