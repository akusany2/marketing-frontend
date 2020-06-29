import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyInterface } from "./Interfaces/survey.interface";
import { SurveyService } from "./survey.service";
import { SurveyQuery } from "./survey.store";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  loading$: Observable<boolean>;
  surveyList$: Observable<SurveyInterface[]>;
  showSurvey$: Observable<number>;
  audienceDisplayInModal;
  surveyDetailModalTitle: string;
  isAudienceDetailModalVisible: boolean;
  constructor(
    private surveyService: SurveyService,
    private surveyQuery: SurveyQuery
  ) {}

  // openedEmailsOK() {
  //   this.isAudienceDetailModalVisible = false;
  // }

  // failedEmailsModal(surveyId) {
  //   this.audienceDisplayInModal = this.surveyQuery
  //     .getEntity(surveyId)
  //     .audiences.filter((audience) => audience.event.failed === true);
  //   this.isAudienceDetailModalVisible = true;
  //   this.surveyDetailModalTitle = "Failed survey";
  // }
  // deliveredEmailsModal(surveyId) {
  //   this.audienceDisplayInModal = this.surveyQuery
  //     .getEntity(surveyId)
  //     .audiences.filter((audience) => audience.event.delivered === true);
  //   this.isAudienceDetailModalVisible = true;
  //   this.surveyDetailModalTitle = "Delivered survey";
  // }

  ngOnInit() {
    this.loading$ = this.surveyQuery.selectLoading();
    this.surveyList$ = this.surveyQuery.selectAll();
    this.showSurvey$ = this.surveyQuery.selectCount();

    this.surveyService.getAllSurvey();
  }
}
