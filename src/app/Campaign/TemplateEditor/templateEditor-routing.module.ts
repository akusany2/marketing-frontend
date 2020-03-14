import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AudienceComponent } from "../../Audience/audience.component";
import { AuthGuard } from "../../sharedServices/auth.guard";
import { TemplateEditorComponent } from "./templateEditor.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: TemplateEditorComponent
      },
      {
        path: "audience",
        component: AudienceComponent,
        data: { method: "selectAudience", from: "templateEditor" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateEditorRoutingModule {}
