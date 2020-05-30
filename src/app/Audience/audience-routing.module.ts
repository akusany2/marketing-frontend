import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../sharedServices/auth.guard";
import { AudienceComponent } from "./audience.component";
import { AudienceDetailComponent } from "./AudienceDetails/audience-details.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: AudienceComponent,
      },
      {
        path: "create",
        component: AudienceDetailComponent,
        data: { method: "add" },
      },
      {
        path: "edit/:id",
        component: AudienceDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudienceRoutingModule {}
