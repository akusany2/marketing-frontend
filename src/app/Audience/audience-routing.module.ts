import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../SharedComponent/not-found.component";
import { AuthGuard } from "../sharedServices/auth.guard";
import { AudienceComponent } from "./audience.component";
import { AudienceDetailComponent } from "./AudienceDetails/audience-details.component";

const routes: Routes = [
  {
    path: "",
    component: AudienceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create",
    component: AudienceDetailComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienceRoutingModule { }
