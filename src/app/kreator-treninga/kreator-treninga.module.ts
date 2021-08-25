import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KreatorTreningaComponent } from './kreator-treninga.component';
import { VjezbaComponent } from './vjezba/vjezba.component';
import { VjezbeComponent } from './vjezbe/vjezbe.component';
import { TreningComponent } from './trening/trening.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { KreatorTreningaRoutingModule } from './kreator-treninga-routing.module';
import { HorizontalniComponent } from './meniji/horizontalni/horizontalni.component';
import { VertikalniComponent } from './meniji/vertikalni/vertikalni.component';
import { Vertikalni2Component } from './meniji/vertikalni2/vertikalni2.component';
import { RazmjenaModule } from '../razmjena/razmjena.module';
import { KreatorTreningaService } from './kt-servisi/kreator-treninga.service';
import { TreningResolver } from './trening/trening.resolver';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KreatorTreningaComponent, 
    VjezbaComponent, 
    VjezbeComponent, 
    TreningComponent, 
    TreninziComponent, 
    HorizontalniComponent, 
    VertikalniComponent, 
    Vertikalni2Component
  ],
  imports: [
    CommonModule,
    KreatorTreningaRoutingModule,
    RazmjenaModule,
    FormsModule
  ],
  // Bice ucitano samo kad se pristupi svojstvu kreator-treninga. NE moze mu se pristupiti iz ostalih modula.
  providers: [KreatorTreningaService, TreningResolver]
})
export class KreatorTreningaModule { }

