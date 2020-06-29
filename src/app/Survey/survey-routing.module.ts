import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../sharedServices/auth.guard";
import { SurveyComponent } from "./survey.component";
import { SurveyCreateComponent } from "./surveyCreate/surveyCreate.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: SurveyComponent,
      },
      {
        path: "create",
        component: SurveyCreateComponent,
      },
      // {
      //   path: "audience",
      //   component: AudienceComponent,
      //   data: { method: "selectAudience", from: "surveyCreate" },
      // },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutesModule {}
