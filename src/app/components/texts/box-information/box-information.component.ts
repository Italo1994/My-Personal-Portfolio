import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-information',
  templateUrl: './box-information.component.html',
  styleUrls: ['./box-information.component.css',
              './box-information.responsive.component.css'
            ]
})
export class BoxInformationComponent {
  @Input() sampleInformation: boolean = false;
  @Input() fullInformation: boolean = false;

  constructor() {

  }
}
