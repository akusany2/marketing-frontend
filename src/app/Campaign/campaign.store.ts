import { Injectable } from "@angular/core";
import { EntityState, EntityStore, QueryEntity, StoreConfig } from "@datorama/akita";
import { CampaignInterface } from "./interfaces/campaign.interface";

export interface CampaignState extends EntityState<CampaignInterface, number> {
  templateName: string;
  templateHtml: string;
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "campaign" })
export class CampaignStore extends EntityStore<
CampaignState,
CampaignInterface
> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: "root" })
export class CampaignQuery extends QueryEntity<CampaignState> {
  constructor(protected store: CampaignStore) {
    super(store);
  }
}
