import { Component, OnInit } from "@angular/core";
import { AudienceService } from "./audience.service";
import { AudienceQuery, AudienceStore } from "./audience.store";

@Component({
  selector: "app-audience",
  templateUrl: "./audience.component.html",
  styleUrls: ["./audience.component.css"]
})
export class AudienceComponent implements OnInit {
  constructor(
    private audienceService: AudienceService,
    private audienceStore: AudienceStore,
    private audienceQuery: AudienceQuery
  ) {}
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfDisplayAudience: any[] = [];
  audienceDataLoading: boolean = false;

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    // const filterFunc = (item: { name: string; age: number; address: string }) =>
    //   (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
    //   (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    // const data = this.listOfData.filter(item => filterFunc(item));

    if (this.sortName && this.sortValue) {
      this.listOfDisplayAudience = this.listOfDisplayAudience.sort((a, b) =>
        this.sortValue === "ascend"
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.listOfDisplayAudience = this.listOfDisplayAudience;
    }
  }

  deleteAudience(id) {
    this.audienceDataLoading = true;
    if (this.listOfDisplayAudience) {
      // this.audienceService.deleteAudience(id).subscribe(data => {
      //   for (
      //     var index = 0;
      //     index < this.listOfDisplayAudience.length;
      //     index++
      //   ) {
      //     if (this.listOfDisplayAudience[index]._id === id) {
      //       this.listOfDisplayAudience.splice(index, 1);
      //       break;
      //     }
      //   }
      //   // To trigger change detection
      //   this.listOfDisplayAudience = [...this.listOfDisplayAudience];
      //   this.audienceDataLoading = false;
      // });
      this.audienceService.deleteAudience(id);
    }
  }

  ngOnInit(): void {
    this.audienceService.getAllAudience(data => {
      this.listOfDisplayAudience = data;
    });
  }
}
