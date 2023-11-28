import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = "SAIBA MAIS";
  @Input() isDefaultButton: boolean = true;
  @Input() isSubmitActive: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }
}
