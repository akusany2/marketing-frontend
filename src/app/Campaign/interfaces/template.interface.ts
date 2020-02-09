export interface CreateTemplateDTO {
  companyId: string;
  templateName: string;
  templateHtml: string;
  description?: string;
  audiences?: string[];
}
