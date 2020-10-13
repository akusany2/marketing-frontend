import { SurveyAudienceInterface } from "./survey-audience.interface";
export class SurveyInterface {
  _id?: string;
  stats?: object;
  name: string;
  message: string;
  formJson: string;
  companyId: string;
  audiences?: [SurveyAudienceInterface];
}
