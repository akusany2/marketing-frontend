import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import en from "@angular/common/locales/en";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { en_US, NZ_I18N } from "ng-zorro-antd";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AudienceQuery, AudienceStore } from "./Audience/audience.store";
import { TemplateQuery, TemplateStore } from "./Campaign/template.store";
import { LoginService } from "./Login/login.service";
import { SharedModule } from "./sharedModule/shared.module";
import { UserProfileQuery, UserProfileStore } from "./User.store";

declare global {
  interface Window {
    s: any;
    ss: any;
  }
}

const sharedStores = [
  UserProfileStore,
  UserProfileQuery,
  AudienceStore,
  AudienceQuery,
  TemplateStore,
  TemplateQuery,
];
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({ shallow: false }),
    AkitaNgRouterStoreModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    // NgZorroAntdModule,
    FormsModule,
  ],
  exports: [],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LoginService,
    ...sharedStores,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
