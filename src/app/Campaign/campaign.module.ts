import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../Header/header.module";
import { SharedModule } from "../sharedModule/shared.module";
import { AuthGuard } from "../sharedServices/auth.guard";
import { TokenInterceptor } from "../sharedServices/token-interceptor";
import { CampaignRoutingModule } from "./campaign-routing.module";
import { CampaignComponent } from "./campaign.component";
import { CampaignService } from "./campaign.service";
import { ChooseTemplateComponent } from "./ChooseTemplate/chooseTemplate.component";
import { ChooseTemplateService } from "./ChooseTemplate/chooseTemplate.service";
import { TemplateEditorModule } from "./TemplateEditor/templateEditor.module";

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    HeaderModule,
    SharedModule,
    TemplateEditorModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    CampaignService,
    ChooseTemplateService
  ],
  declarations: [CampaignComponent, ChooseTemplateComponent]
})
export class CampaignModule {}
