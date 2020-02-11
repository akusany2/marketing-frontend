import { Injectable } from "@angular/core";
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig
} from "@datorama/akita";
import { CreateTemplateDTO } from "./interfaces/template.interface";

const inittialState = {
  active: null
};
export interface TemplateState extends EntityState<CreateTemplateDTO, number> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "template" })
export class TemplateStore extends EntityStore<
  TemplateState,
  CreateTemplateDTO
> {
  constructor() {
    super(inittialState);
  }
}

@Injectable({ providedIn: "root" })
export class TemplateQuery extends QueryEntity<TemplateState> {
  constructor(protected store: TemplateStore) {
    super(store);
  }
}
