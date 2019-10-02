import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../Header/header.module';
import { LoginService } from '../Login/login.service';
import { SharedModule } from '../sharedModule/shared.module';
import { TokenInterceptor } from '../sharedServices/token-interceptor';
import { AudienceRoutingModule } from './audience-routing.module';
import { AudienceComponent } from './audience.component';

@NgModule({
  imports: [
    CommonModule,
    AudienceRoutingModule,
    HttpClientModule, HeaderModule, SharedModule,
  ],
  declarations: [AudienceComponent],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class AudienceModule { }