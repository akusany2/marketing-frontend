import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AudienceService } from "./audience.service";
import { AudienceQuery, AudienceStore } from "./audience.store";
import { AudienceInterface } from './Interfaces/audience.interface';

@Component({
  selector: "app-audience",
  templateUrl: "./audience.component.html",
  styleUrls: ["./audience.component.css"]
})
export class AudienceComponent implements OnInit {
  constructor(
    private audienceService: AudienceService,
    private audienceStore: AudienceStore,
    private audienceQuery: AudienceQuery,
    private router: Router
  ) { }
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfDisplayAudience$: Observable<AudienceInterface[]>;
  isListLoading$: Observable<boolean>;

  deleteAudience(id) {
    if (id && this.listOfDisplayAudience$) {
      this.audienceService.deleteAudience(id);
    }
  }

  editAudience(id) {
    this.router.navigate(["/audience/edit/" + id]);
  }

  ngOnInit(): void {
    this.isListLoading$ = this.audienceQuery.selectLoading();
    this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
    this.audienceService.getAllAudience();
  }
}
