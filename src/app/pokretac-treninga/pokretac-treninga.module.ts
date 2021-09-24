import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokretacTreningaComponent } from './pokretac-treninga.component';
import { PkrTreningComponent } from './pkr-trening/pkr-trening.component';
import { PokretacTreningaRoutingModule } from './pokretac-treninga-routing.module';
import { RazmjenaModule } from '../razmjena/razmjena.module';
import { KontejnerComponent } from './kontejner/kontejner.component';
import { ZvukComponent } from './zvuk/zvuk.component';
import { KontejnerResolver } from './../pokretac-treninga/kontejner/kontejner.resolver';

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
  ],
  providers: [
    KontejnerResolver
  ]
})
export class PokretacTreningaModule { }
