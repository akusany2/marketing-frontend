import { Injectable } from "@angular/core";
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig
} from "@datorama/akita";
import { UserProfileInterface } from "../Login/interfaces/user.interface";

export interface UserProfileState
  extends EntityState<UserProfileInterface, number> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "userProfile" })
export class UserProfileStore extends EntityStore<UserProfileState> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: "root" })
export class UserProfileQuery extends QueryEntity<UserProfileState> {
  constructor(protected store: UserProfileStore) {
    super(store);
  }
}
