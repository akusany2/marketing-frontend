import { Injectable } from "@angular/core";
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig
} from "@datorama/akita";
import { AudienceInterface } from "./Interfaces/audience.interface";

export interface AudienceState extends EntityState<AudienceInterface, number> {}

@Injectable()
@StoreConfig({ name: "audience" })
export class AudienceStore extends EntityStore<
  AudienceState,
  AudienceInterface
> {
  constructor() {
    super();
  }
}

@Injectable()
export class AudienceQuery extends QueryEntity<AudienceState> {
  constructor(protected store: AudienceStore) {
    super(store);
  }
}
