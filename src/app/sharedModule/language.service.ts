import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor() {}

  lang() {
    return {
      audienceTypes: {
        customer: {
          text: "Customer",
          value: "customer",
        },
        nonCustomer: { text: "Non Customer", value: "nonCustomer" },
      },
    };
  }
}
