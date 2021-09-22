import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokretacTreningaComponent } from './pokretac-treninga.component';
import { PkrTreningComponent } from './pkr-trening/pkr-trening.component';
import { PokretacTreningaRoutingModule } from './pokretac-treninga-routing.module';
import { RazmjenaModule } from '../razmjena/razmjena.module';
import { KontejnerComponent } from './kontejner/kontejner.component';
import { ZvukComponent } from './zvuk/zvuk.component';

@NgModule({
  declarations: [
    PokretacTreningaComponent,
    PkrTreningComponent,
    KontejnerComponent,
    ZvukComponent
  ],
  imports: [
    CommonModule,
    PokretacTreningaRoutingModule,
    RazmjenaModule
  ]
})
export class PokretacTreningaModule { }
