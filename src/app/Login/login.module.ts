import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../sharedModule/shared.module";
import { AuthGuard } from "../sharedServices/auth.guard";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";

@NgModule({
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  providers: [LoginService, AuthGuard],
  declarations: [LoginComponent]
})
export class LoginModule {}
