//
// Ovaj fajl mora kompletno rucno da se napravi. Ne postoji komanda za njegovo kreiranje.
//

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokretacTreningaComponent } from './pokretac-treninga.component';
import { KontejnerComponent } from './kontejner/kontejner.component';
import { KontejnerResolver } from './kontejner/kontejner.resolver';

const routes: Routes = [
    {
        path: '',
        component: PokretacTreningaComponent,
    },
    {
        path: ':id',
        component: KontejnerComponent,
        resolve: {trening: KontejnerResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PokretacTreningaRoutingModule { }

  