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
import { AudienceCreateComponent } from "./AudienceCreate/audience-create.component";
import { AudienceCreateService } from "./AudienceCreate/audience-create.service";

@NgModule({
  imports: [
    CommonModule,
    AudienceRoutingModule,
    HttpClientModule,
    HeaderModule,
    SharedModule
  ],
  declarations: [AudienceComponent, AudienceCreateComponent, NotFoundComponent],
  providers: [
    LoginService,
    AudienceService,
    AudienceCreateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard
  ]
})
export class AudienceModule {}
