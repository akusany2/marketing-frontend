import { CampaignAudienceInterface } from "./campaignAudience.interface";
export interface CampaignInterface {
  _id?: string;
  stats: object;
  name: string;
  companyId: string;
  templateId: string;
  sgTemplateId: string;
  description: string;
  audiences: [CampaignAudienceInterface];
}
