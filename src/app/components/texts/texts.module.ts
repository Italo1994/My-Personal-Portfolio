import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxInformationComponent } from './box-information/box-information.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

import { ListaModule } from '../lista/lista.module';


@NgModule({
  declarations: [
    BoxInformationComponent,
    ButtonComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ListaModule
  ],
  exports: [
    BoxInformationComponent,
    ButtonComponent,
    FormComponent,
    FooterComponent
  ]
})
export class TextsModule { }
