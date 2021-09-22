import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatiranjeSekundiPipe } from './formatiranje-sekundi.pipe';
import { PoredjajPoPipe } from './poredjaj-po.pipe';
import { VideoPlejerComponent } from './video-plejer/video-plejer.component';
import { ZvucnaSignalizacijaDirective } from './zvucna-signalizacija.directive';



@NgModule({
  declarations: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe,
    VideoPlejerComponent,
    ZvucnaSignalizacijaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatiranjeSekundiPipe,
    PoredjajPoPipe,
    VideoPlejerComponent,
    ZvucnaSignalizacijaDirective
  ]
})
export class RazmjenaModule { }
