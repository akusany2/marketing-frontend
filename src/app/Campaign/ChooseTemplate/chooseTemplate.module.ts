import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd';
import { SharedModule } from '../../sharedModule/shared.module';
import { ChooseTemplateComponent } from './chooseTemplate.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzCardModule
  ],
  declarations: [ChooseTemplateComponent]
})
export class ChooseTemplateModule { }
