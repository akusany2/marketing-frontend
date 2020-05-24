import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterPipe } from "./filter.pipe";
import { SortByPipe } from "./sortBy.pipe";

@NgModule({
  imports: [CommonModule],
  exports: [SortByPipe, FilterPipe],
  declarations: [SortByPipe, FilterPipe],
})
export class PipeModule {}
