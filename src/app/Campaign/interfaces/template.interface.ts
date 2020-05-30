export interface CreateTemplateDTO {
  companyId?: string;
  templateName: string;
  subject?: string;
  sgTemplateId?: string;
  templateId?: string;
  templateMetaData?: object;
  templateHtml: string;
  description?: string;
  // audiences?: string[];
}
