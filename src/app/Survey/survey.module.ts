import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AudienceModule } from "../Audience/audience.module";
import { AudienceService } from "../Audience/audience.service";
import { HeaderModule } from "../Header/header.module";
import { SharedModule } from "../sharedModule/shared.module";
import { PipeModule } from "../sharedPipes/pipe.module";
import { AuthGuard } from "../sharedServices/auth.guard";
import { TokenInterceptor } from "../sharedServices/token-interceptor";
import { SurveyRoutesModule } from "./survey-routing.module";
import { SurveyComponent } from "./survey.component";
import { SurveyService } from "./survey.service";
import { SurveyCreateComponent } from "./surveyCreate/surveyCreate.component";

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutesModule,
    HeaderModule,
    SharedModule,
    PipeModule,
    HttpClientModule,
    AudienceModule,
  ],
  declarations: [SurveyComponent, SurveyCreateComponent],
  providers: [
    SurveyService,
    AudienceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class SurveyModule {}
