import { Injectable } from "@angular/core";
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig
} from "@datorama/akita";
import { CreateTemplateDTO } from "./interfaces/template.interface";

export interface TemplateState extends EntityState<CreateTemplateDTO, number> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "template" })
export class TemplateStore extends EntityStore<
  TemplateState,
  CreateTemplateDTO
> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: "root" })
export class TemplateQuery extends QueryEntity<TemplateState> {
  constructor(protected store: TemplateStore) {
    super(store);
  }
}
