import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../Header/header.module';
import { SharedModule } from '../sharedModule/shared.module';
import { AuthGuard } from '../sharedServices/auth.guard';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { ChooseTemplateModule } from './ChooseTemplate/chooseTemplate.module';
import { TemplateEditorModule } from './TemplateEditor/templateEditor.module';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    HeaderModule,
    SharedModule,
    ChooseTemplateModule,
    TemplateEditorModule
  ],
  providers: [AuthGuard],
  declarations: [CampaignComponent]
})
export class CampaignModule { }
