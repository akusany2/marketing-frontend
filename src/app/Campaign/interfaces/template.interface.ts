export interface CreateTemplateDTO {
  companyId: string;
  templateName: string;
  templateId: string;
  templateMetaData: object;
  templateHtml: string;
  description?: string;
  audiences?: string[];
}
