import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../sharedModule/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { LoginService } from './login.service';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
