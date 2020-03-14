export interface CreateTemplateDTO {
  companyId: string;
  templateName: string;
  sgTemplateId: string;
  templateMetaData: object;
  templateHtml: string;
  description?: string;
  // audiences?: string[];
}
