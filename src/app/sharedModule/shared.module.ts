import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgZorroAntdModule,
  NzFormModule,
  NzLayoutModule,
  NzPageHeaderModule,
  NzTableModule,
} from "ng-zorro-antd";
import { HeaderModule } from "../Header/header.module";
import { LanguageService } from "./language.service";
import { SharedComponent } from "./shared.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NzFormModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzTableModule,
    HeaderModule,
  ],
  exports: [
    FormsModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzTableModule,
    HeaderModule,
  ],
  declarations: [SharedComponent],
  providers: [LanguageService],
})
export class SharedModule {}
