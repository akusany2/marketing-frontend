import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiServerUrl } from "../../../config";
import { AudienceStore } from "../audience.store";

@Injectable()
export class AudienceDetailService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private audienceStore: AudienceStore
  ) { }

  audienceCreate(audienceData) {
    return this.http.post(apiServerUrl + "/audience", audienceData).subscribe(
      data => {
        this.audienceStore.add(audienceData, { prepend: true });
        this.router.navigate(["/audience"]);
      },
      err => console.log(err)
    );
  }

  audienceEdit(audienceData) {
    return this.http.put(apiServerUrl + "/audience", audienceData).subscribe(
      data => {
        this.audienceStore.update(audienceData._id, audienceData);
        this.router.navigate(["/audience"]);
      },
      err => console.log(err)
    );
  }
}
