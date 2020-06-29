import { SurveyAudienceInterface } from "./survey-audience.interface";
export class SurveyInterface {
  _id?: string;
  stats: object;
  name: string;
  message: string;
  companyId: string;
  description: string;
  audiences: [SurveyAudienceInterface];
}
