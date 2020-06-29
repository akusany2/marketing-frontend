import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CampaignService } from "../Campaign/campaign.service";
import { CampaignQuery } from "../Campaign/campaign.store";
import { LanguageService } from "../sharedModule/language.service";
import { AudienceService } from "./audience.service";
import { AudienceQuery } from "./audience.store";
import { AudienceInterface } from "./Interfaces/audience.interface";

@Component({
  selector: "app-audience",
  templateUrl: "./audience.component.html",
  styleUrls: ["./audience.component.css"],
})
export class AudienceComponent implements OnInit, OnDestroy {
  constructor(
    private audienceService: AudienceService,
    private audienceQuery: AudienceQuery,
    private campaignService: CampaignService,
    private campaignQuery: CampaignQuery,
    private router: Router,
    private route: ActivatedRoute,
    private languageService: LanguageService
  ) {}
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfDisplayAudience: AudienceInterface[];
  listOfDisplayAudienceReset: AudienceInterface[];
  listOfDisplayAudience$: Observable<AudienceInterface[]>;
  listOfDisplayAudienceSubscription$;
  isListLoading$: Observable<boolean>;
  listOfCurrentPageData: AudienceInterface[];
  isAllDisplayDataChecked = false;

  mapOfCheckedId: { [key: string]: boolean } = {};
  isIndeterminate = false;
  numberOfChecked = 0;
  isEditable = false;
  campaignSelection = false;

  routeFrom: string;

  filterAudienceByType = [
    {
      text: this.languageService.lang().audienceTypes.customer.text,
      value: this.languageService.lang().audienceTypes.customer.value,
    },
    {
      text: this.languageService.lang().audienceTypes.nonCustomer.text,
      value: this.languageService.lang().audienceTypes.nonCustomer.value,
    },
  ];

  filterAudienceByTypeChangeHandler(filters) {
    this.listOfDisplayAudience = this.listOfDisplayAudienceReset;
    if (filters.length) {
      this.listOfDisplayAudience = this.listOfDisplayAudience.filter(
        (audience) => {
          for (let index = 0; index < filters.length; index++) {
            if (audience.type == filters[index]) {
              return true;
            }
          }
          return false;
        }
      );
    }
  }

  deleteAudience(id) {
    if (id && this.listOfDisplayAudience$) {
      this.audienceService.deleteAudience(id);
    }
  }

  editAudience(id) {
    this.router.navigate(["/audience/edit/" + id]);
  }

  refreshStatus(): void {
    this.isIndeterminate =
      this.listOfDisplayAudience.some(
        (item) => this.mapOfCheckedId[item._id]
      ) && !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfDisplayAudience.filter(
      (item) => this.mapOfCheckedId[item._id]
    ).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayAudience.forEach(
      (item) => (this.mapOfCheckedId[item._id] = value)
    );
    this.refreshStatus();
  }
  addAudienceToCampaign() {
    this.campaignService.addAudienceToCampaign(
      this.listOfDisplayAudience
        .filter((item) => this.mapOfCheckedId[item._id])
        .map((item) => {
          return {
            email: item.email,
            userData: { firstName: item.firstName, lastName: item.lastName },
          };
        })
    );
  }

  ngOnInit(): void {
    window.s = this.audienceQuery;
    this.listOfDisplayAudience$ = this.audienceQuery.selectAll();
    if (!this.audienceQuery.getHasCache()) {
      this.audienceService.getAllAudience();
    }

    this.route.data.subscribe((data) => {
      if (data.method === "selectAudience" && this.campaignQuery.hasActive()) {
        this.isEditable = true;
      } else {
        this.router.navigate(["/audience"]);
      }
      if (
        data.method &&
        data.method.from &&
        data.method.from == "templateEditor"
      ) {
        this.routeFrom = "templateEditor";
        this.campaignSelection = true;
      }
    });

    this.listOfDisplayAudienceSubscription$ = this.listOfDisplayAudience$.subscribe(
      (data) => {
        this.listOfDisplayAudience = data;
        this.listOfDisplayAudienceReset = data;
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.listOfDisplayAudienceSubscription$.unsubscribe();
  }
}
