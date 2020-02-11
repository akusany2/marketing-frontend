import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AudienceModule } from "../../Audience/audience.module";
import { AudienceService } from "../../Audience/audience.service";
import { SharedModule } from "../../sharedModule/shared.module";
import { TemplateEditorRoutingModule } from "./templateEditor-routing.module";
import { TemplateEditorComponent } from "./templateEditor.component";
import { TemplateEditorService } from "./templateEditor.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TemplateEditorRoutingModule,
    AudienceModule
  ],
  providers: [TemplateEditorService, AudienceService],
  declarations: [TemplateEditorComponent]
})
export class TemplateEditorModule {}
