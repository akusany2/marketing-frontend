import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CampaignService } from "../Campaign/campaign.service";
import { CampaignQuery } from "../Campaign/campaign.store";
import { AudienceService } from "./audience.service";
import { AudienceQuery } from "./audience.store";
import { AudienceInterface } from "./Interfaces/audience.interface";

@Component({
  selector: "app-audience",
  templateUrl: "./audience.component.html",
  styleUrls: ["./audience.component.css"]
})
export class AudienceComponent implements OnInit {
  constructor(
    private audienceService: AudienceService,
    private audienceQuery: AudienceQuery,
    private campaignService: CampaignService,
    private campaignQuery: CampaignQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfDisplayAudience$: Observable<AudienceInterface[]>;
  isListLoading$: Observable<boolean>;

  isAllDisplayDataChecked = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  isIndeterminate = false;
  numberOfChecked = 0;
  isEditable = false;
  campaignSelection = false;

  deleteAudience(id) {
    if (id && this.listOfDisplayAudience$) {
      this.audienceService.deleteAudience(id);
    }
  }

  editAudience(id) {
    this.router.navigate(["/audience/edit/" + id]);
  }

  refreshStatus(): void {
    this.listOfDisplayAudience$.subscribe(data => {
      this.isIndeterminate =
        data.some(item => this.mapOfCheckedId[item._id]) &&
        !this.isAllDisplayDataChecked;
      this.numberOfChecked = data.filter(
        item => this.mapOfCheckedId[item._id]
      ).length;
    });
  }

  checkAll(value: boolean): void {
    this.listOfDisplayAudience$.subscribe(data => {
      data.forEach(item => (this.mapOfCheckedId[item._id] = value));
    });
    this.refreshStatus();
  }
  addAudienceToCampaign() {
    this.listOfDisplayAudience$.subscribe(data => {
      this.campaignService.addAudienceToCampaign(
        data
          .filter(item => this.mapOfCheckedId[item._id])
          .map(item => {
            return { email: item.email };
          })
      );
    });
  }
  ngOnInit(): void {
    this.isListLoading$ = this.audienceQuery.selectLoading();
    this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
    if (!this.audienceQuery.getHasCache()) {
      this.audienceService.getAllAudience();
    }

    this.route.data.subscribe(data => {
      if (!this.campaignQuery.hasActive()) {
        this.router.navigate(["/campaign"]);
      } else {
        if (data.method === "selectAudience") {
          this.isEditable = true;
        }
        if (data.method.from && data.method.from == "templateEditor") {
          this.campaignSelection = true;
        }
      }
    });
  }
}
