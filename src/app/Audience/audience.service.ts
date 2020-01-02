import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { apiServerUrl } from "../../config";
import { AudienceQuery, AudienceStore } from "./audience.store";

@Injectable()
export class AudienceService {
  constructor(
    private httpClient: HttpClient,
    private audienceStore: AudienceStore,
    private audienceQuery: AudienceQuery
  ) {}

  getAllAudience(callback) {
    const allAudience = this.httpClient
      .get(apiServerUrl + "/audience")
      .subscribe(
        data => {
          this.audienceStore.set(data as any[]);
          callback(this.audienceQuery.getAll());
        },
        error => {
          console.error(error);
          callback([]);
        }
      );
    return this.audienceQuery.getHasCache() ? of() : allAudience;
  }

  deleteAudience(id) {
    return this.httpClient
      .delete(apiServerUrl + "/audience/" + id)
      .subscribe(data => {
        this.audienceStore.remove(audience => audience._id === id);
      });
  }
}
