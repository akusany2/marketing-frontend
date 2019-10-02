import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { HeaderModule } from '../Header/header.module';
import { LoginService } from '../Login/login.service';
import { SharedModule } from '../sharedModule/shared.module';
import { TokenInterceptor } from '../sharedServices/token-interceptor';
import { UserService } from '../sharedServices/user.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule, HeaderModule, SharedModule],
  declarations: [DashboardComponent],
  providers: [
    UserService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule { }
