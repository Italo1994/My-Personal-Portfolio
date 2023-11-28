import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() isHorizontalMenu: boolean = true;
  @Input() isVerticalMenu: boolean = false;
  @Input() mainMenu: boolean = false;
  @Input() socialMenu: boolean = false;

  ngOnInit(): void {

  }
}
