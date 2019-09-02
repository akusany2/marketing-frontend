import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
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
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: []
})
export class SharedModule {}
