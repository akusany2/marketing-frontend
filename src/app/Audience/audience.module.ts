import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CampaignService } from "../Campaign/campaign.service";
import { HeaderModule } from "../Header/header.module";
import { LoginService } from "../Login/login.service";
import { NotFoundComponent } from "../SharedComponent/not-found.component";
import { SharedModule } from "../sharedModule/shared.module";
import { PipeModule } from "../sharedPipes/pipe.module";
import { AuthGuard } from "../sharedServices/auth.guard";
import { TokenInterceptor } from "../sharedServices/token-interceptor";
import { AudienceRoutingModule } from "./audience-routing.module";
import { AudienceComponent } from "./audience.component";
import { AudienceService } from "./audience.service";
import { AudienceDetailComponent } from "./AudienceDetails/audience-details.component";
import { AudienceDetailService } from "./AudienceDetails/audience-details.service";
import { AudienceListComponent } from "./AudienceList/AudienceList.component";

@NgModule({
  imports: [
    CommonModule,
    AudienceRoutingModule,
    HttpClientModule,
    HeaderModule,
    PipeModule,
    SharedModule,
  ],
  declarations: [
    AudienceComponent,
    AudienceDetailComponent,
    AudienceListComponent,
    NotFoundComponent,
  ],
  providers: [
    LoginService,
    AudienceService,
    AudienceDetailService,
    CampaignService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class AudienceModule {}
