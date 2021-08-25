import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatiranjeSekundiPipe } from './formatiranje-sekundi.pipe';
import { PoredjajPoPipe } from './poredjaj-po.pipe';



@NgModule({
  declarations: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe
  ]
})
export class RazmjenaModule { }
