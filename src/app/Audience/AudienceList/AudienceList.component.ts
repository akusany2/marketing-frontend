import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { AudienceInterface } from "../Interfaces/audience.interface";

@Component({
  selector: "app-audience-list",
  templateUrl: "./AudienceList.component.html",
  styleUrls: ["./AudienceList.component.css"],
})
export class AudienceListComponent implements OnInit {
  @Input() audienceList: AudienceInterface[];
  @Input() isListLoading$: Observable<boolean>;
  @Input() isEditable: boolean;
  @Input() mapOfCheckedId;
  @Output() editAudience = new EventEmitter();
  @Output() deleteAudience = new EventEmitter();
  @Output() checkAll = new EventEmitter();
  @Output() refreshStatus = new EventEmitter();

  constructor() {}
  deleteAudienceClickHanlder(id) {
    this.deleteAudience.emit(id);
  }
  editAudienceClickHandler(id) {
    this.editAudience.emit(id);
  }
  checkAllChangeHandler($event) {
    this.checkAll.emit($event);
  }
  refreshStatusHandler() {
    this.refreshStatus.emit();
  }
  ngOnInit() {}
}
