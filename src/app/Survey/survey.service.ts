import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiServerUrl } from "../../config";
import { LoginService } from "../Login/login.service";
import { SurveyInterface } from "./Interfaces/survey.interface";
import { SurveyStore } from "./survey.store";

@Injectable()
export class SurveyService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
    private surveyStore: SurveyStore
  ) {}
  getSurveyStats(audiences) {
    let stats = {
      delivered: 0,
      failed: 0,
    };
    audiences.forEach((audience) => {
      audience.event.delivered && stats.delivered++;
      audience.event.failed && stats.failed++;
    });
    return stats;
  }
  getAllSurvey() {
    this.surveyStore.setLoading(true);
    this.httpClient
      .post<SurveyInterface[]>(apiServerUrl + "/survey/all", {
        companyId: this.loginService.getUser().companyId,
      })
      .subscribe(
        (surveys) => {
          this.surveyStore.setLoading(false);
          surveys.forEach((survey) => {
            survey.stats = this.getSurveyStats(survey.audiences);
          });
          this.surveyStore.set(surveys as any);
        },
        (error) => {
          this.surveyStore.setLoading(false);
          this.surveyStore.setError(error);
          console.log(error);
        }
      );
    return "something";
  }
}
