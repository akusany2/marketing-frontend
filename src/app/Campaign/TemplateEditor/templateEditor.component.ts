import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignQuery } from '../campaign.store';

@Component({
  selector: 'app-template-editor',
  templateUrl: './templateEditor.component.html',
  styleUrls: ['./templateEditor.component.css']
})
export class TemplateEditorComponent implements OnInit {

  constructor(private campaignQuery: CampaignQuery, private router: Router) { }

  ngOnInit() {
    if (!this.campaignQuery.getValue().templateHtml) {
      this.router.navigate(['/campaign']);
    }
  }

}
