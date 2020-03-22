import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SortByPipe } from "./sortBy.pipe";

@NgModule({
  imports: [CommonModule],
  exports: [SortByPipe],
  declarations: [SortByPipe]
})
export class PipeModule {}
