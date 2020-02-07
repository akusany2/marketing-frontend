import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { apiServerUrl } from "../../config";
import { AudienceQuery, AudienceStore } from "./audience.store";
import { AudienceInterface } from "./Interfaces/audience.interface";

@Injectable()
export class AudienceService {
  constructor(
    private httpClient: HttpClient,
    private audienceStore: AudienceStore,
    private audienceQuery: AudienceQuery
  ) {}

  getAllAudience() {
    this.audienceStore.setLoading(true);
    const allAudience = this.httpClient
      .get<AudienceInterface[]>(apiServerUrl + "/audience")
      .subscribe(
        data => {
          const audienceList = {};
          data.forEach(audience => {
            audienceList[audience._id] = audience;
          });
          this.audienceStore.set(audienceList);
          // callback(this.audienceQuery.getAll());
          this.audienceStore.setLoading(false);
        },
        error => {
          console.error(error);
          this.audienceStore.setError(error);
          this.audienceStore.setLoading(false);
        }
      );
    return this.audienceQuery.getHasCache() ? of() : allAudience;
  }

  deleteAudience(id) {
    this.audienceStore.setLoading(true);
    return this.httpClient
      .delete(apiServerUrl + "/audience/" + id)
      .subscribe(data => {
        this.audienceStore.remove(audience => audience._id === id);
        this.audienceStore.setLoading(false);
      });
  }
}
