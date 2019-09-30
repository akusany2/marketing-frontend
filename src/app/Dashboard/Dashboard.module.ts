import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TokenInterceptor } from "../sharedServices/token-interceptor";
import { DashboardComponent } from "./Dashboard.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule {}
