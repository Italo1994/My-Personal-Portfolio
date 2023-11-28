import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CardComponent } from './card/card.component';

import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    MenuBarComponent,
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuBarComponent,
    CardComponent,
    CarouselComponent
  ]
})
export class ListaModule { }
