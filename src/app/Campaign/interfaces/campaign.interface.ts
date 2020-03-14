import { CampaignAudienceInterface } from "./campaignAudience.interface";
export interface CampaignInterface {
  name: string;
  companyId: string;
  templateId: string;
  sgTemplateId: string;
  description: string;
  audiences: [CampaignAudienceInterface];
}
