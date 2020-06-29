import { Injectable } from "@angular/core";
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig,
} from "@datorama/akita";
import { SurveyInterface } from "./Interfaces/survey.interface";

export interface SurveyState extends EntityState<SurveyInterface, number> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "Survey", idKey: "_id" })
export class SurveyStore extends EntityStore<SurveyState, SurveyInterface> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: "root" })
export class SurveyQuery extends QueryEntity<SurveyState> {
  constructor(protected store: SurveyStore) {
    super(store);
  }
}
