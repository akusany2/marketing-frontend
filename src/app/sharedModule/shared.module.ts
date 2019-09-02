import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule {}
