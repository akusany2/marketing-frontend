import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-audience-create',
  templateUrl: './audience-create.component.html',
  styleUrls: ['./audience-create.component.scss']
})
export class AudienceCreateComponent implements OnInit {
  audienceCreateForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.audienceCreateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      source: new FormControl('website', [
        Validators.required
      ])
    });
  }
}
