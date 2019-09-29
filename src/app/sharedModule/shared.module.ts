import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzFormModule } from 'ng-zorro-antd';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NzFormModule,
    ReactiveFormsModule],
  exports: [FormsModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule],
  declarations: [SharedComponent]
})
export class SharedModule { }
