import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../Header/header.module";
import { LoginService } from "../Login/login.service";
import { NotFoundComponent } from "../SharedComponent/not-found.component";
import { SharedModule } from "../sharedModule/shared.module";
import { AuthGuard } from "../sharedServices/auth.guard";
import { TokenInterceptor } from "../sharedServices/token-interceptor";
import { AudienceRoutingModule } from "./audience-routing.module";
import { AudienceComponent } from "./audience.component";
import { AudienceService } from "./audience.service";
import { AudienceQuery, AudienceStore } from "./audience.store";
import { AudienceDetailComponent } from "./AudienceDetails/audience-details.component";
import { AudienceDetailService } from "./AudienceDetails/audience-details.service";

@NgModule({
  imports: [
    CommonModule,
    AudienceRoutingModule,
    HttpClientModule,
    HeaderModule,
    SharedModule
  ],
  declarations: [AudienceComponent, AudienceDetailComponent, NotFoundComponent],
  providers: [
    LoginService,
    AudienceService,
    AudienceDetailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    AudienceStore,
    AudienceQuery
  ]
})
export class AudienceModule {}
