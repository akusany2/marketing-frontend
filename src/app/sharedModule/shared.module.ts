import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzFormModule, NzLayoutModule } from 'ng-zorro-antd';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NzFormModule,
    ReactiveFormsModule, NzLayoutModule],
  exports: [FormsModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule, NzLayoutModule],
  declarations: [SharedComponent]
})
export class SharedModule { }
