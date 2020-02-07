import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { apiServerUrl } from "../../../config";
import { AudienceQuery, AudienceStore } from "../audience.store";

@Injectable()
export class AudienceDetailService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private audienceStore: AudienceStore,
    private audienceQuery: AudienceQuery,
    private nzMessageService: NzMessageService
  ) {}
  checkDuplicateAudience(audienceData) {
    return this.audienceQuery.getCount(
      audience => audience.email === audienceData.email
    );
  }
  audienceCreate(audienceData) {
    const isDuplicate = this.checkDuplicateAudience(audienceData);
    if (isDuplicate) {
      this.nzMessageService.create("error", "Audience already exists!", {
        nzDuration: 5000
      });
    } else {
      this.http.post(apiServerUrl + "/audience", audienceData).subscribe(
        data => {
          const id: any = data["_id"];
          this.audienceStore.upsert(id, audienceData);
          this.router.navigate(["/audience"]);
        },
        err => console.log(err)
      );
    }
  }

  audienceEdit(audienceData) {
    const isDuplicate = this.checkDuplicateAudience(audienceData);
    if (isDuplicate) {
      this.nzMessageService.create("error", "Audience already exists!", {
        nzDuration: 5000
      });
    } else {
      this.http.put(apiServerUrl + "/audience", audienceData).subscribe(
        data => {
          this.audienceStore.update(audienceData._id, audienceData);
          this.router.navigate(["/audience"]);
        },
        err => console.log(err)
      );
    }
  }
}
