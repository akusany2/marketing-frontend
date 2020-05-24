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
  @Input() refreshStatus;
  @Output() editAudience = new EventEmitter();
  @Output() deleteAudience = new EventEmitter();
  constructor() {}
  deleteAudienceClickHanlder(id) {
    this.deleteAudience.emit(id);
  }
  editAudienceClickHandler(id) {
    this.editAudience.emit(id);
  }
  ngOnInit() {}
}
