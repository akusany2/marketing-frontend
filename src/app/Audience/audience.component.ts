import { Component, OnInit } from '@angular/core';
import { AudienceService } from './audience.service';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent implements OnInit {
  constructor(private audienceService: AudienceService) { }
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfDisplayAudience: any[] = [];

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
        this.sortValue === 'ascend'
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
  ngOnInit(): void {
    this.audienceService.getAllAudience().subscribe(data => {
      this.listOfDisplayAudience = data as any;
    }, error => {
      console.error(error);
    });
  }

}
