import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CampaignService } from "./campaign.service";
import { CampaignQuery, CampaignStore } from "./campaign.store";
import { CampaignInterface } from "./interfaces/campaign.interface";

@Component({
  selector: "app-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.css"]
})
export class CampaignComponent implements OnInit {
  campaignList$: Observable<CampaignInterface[]>;
  showCampaign$: Observable<number>;
  loading$: Observable<boolean>;
  constructor(
    private campaignQuery: CampaignQuery,
    private campaignStore: CampaignStore,
    private campaignService: CampaignService
  ) {}
  addMetaDataCampaign() {
    this.campaignList$.subscribe(campaigns => {
      console.log(campaigns);
      // campaigns.
    });
  }
  ngOnInit() {
    this.campaignList$ = this.campaignQuery.selectAll();
    this.showCampaign$ = this.campaignQuery.selectCount();
    this.loading$ = this.campaignQuery.selectLoading();
    this.campaignService.getAllCampaign();

    this.addMetaDataCampaign();
  }
}
