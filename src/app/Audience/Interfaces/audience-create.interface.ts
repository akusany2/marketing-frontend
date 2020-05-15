export interface AudienceCreateInterface {
  _id?: string;
  companyId: string;
  userId: string;
  name: string;
  surname: string;
  phone: number;
  email: string;
  source: string;
  addedBy: string;
  modifiedBy: string;
  lastPurchaseAt: string;
}
