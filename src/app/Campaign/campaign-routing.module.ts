import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../sharedServices/auth.guard';
import { CampaignComponent } from './campaign.component';
import { ChooseTemplateComponent } from './ChooseTemplate/chooseTemplate.component';
import { TemplateEditorComponent } from './TemplateEditor/templateEditor.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: CampaignComponent,
      }, {
        path: "choose-template",
        component: ChooseTemplateComponent
      }, {
        path: "template-editor",
        component: TemplateEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
