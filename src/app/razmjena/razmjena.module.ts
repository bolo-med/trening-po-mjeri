import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatiranjeSekundiPipe } from './formatiranje-sekundi.pipe';
import { PoredjajPoPipe } from './poredjaj-po.pipe';
import { VideoPlejerComponent } from './video-plejer/video-plejer.component';



@NgModule({
  declarations: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe,
    VideoPlejerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe,
    VideoPlejerComponent
  ]
})
export class RazmjenaModule { }
