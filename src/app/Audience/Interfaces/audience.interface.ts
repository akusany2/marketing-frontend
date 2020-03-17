export interface AudienceInterface {
  // id: ID;
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  source: string;
  coupons: CouponsInterface[];
  addedBy: string;
  modifiedBy: string;
  lastPurchaseAt: string;
}

interface CouponsInterface {}
