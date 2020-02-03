import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzFormModule, NzLayoutModule, NzPageHeaderModule } from 'ng-zorro-antd';
import { HeaderModule } from '../Header/header.module';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NzFormModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    HeaderModule],
  exports: [FormsModule,
    NzFormModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    HeaderModule],
  declarations: [SharedComponent]
})
export class SharedModule { }
