import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./Login/login.module").then((mod) => mod.LoginModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./Dashboard/dashboard.module").then((mod) => mod.DashboardModule),
  },
  {
    path: "audience",
    loadChildren: () =>
      import("./Audience/audience.module").then((mod) => mod.AudienceModule),
  },
  {
    path: "campaign",
    loadChildren: () =>
      import("./Campaign/campaign.module").then((mod) => mod.CampaignModule),
  },
  {
    path: "survey",
    loadChildren: () =>
      import("./Survey/survey.module").then((mod) => mod.SurveyModule),
  },
  // -------------- temp
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "**",
    loadChildren: () =>
      import("./Dashboard/dashboard.module").then((mod) => mod.DashboardModule),
  },
  // ------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
