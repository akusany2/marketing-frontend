import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared.module';
import { TemplateEditorComponent } from './templateEditor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TemplateEditorComponent]
})
export class TemplateEditorModule { }
