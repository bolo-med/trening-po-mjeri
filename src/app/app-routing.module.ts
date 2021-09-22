import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';

import { KreatorTreningaModule } from './kreator-treninga/kreator-treninga.module'; // Ovo je obavezno!!!
import { PokretacTreningaModule } from './pokretac-treninga/pokretac-treninga.module'; // Ovo je obavezno!!!

const routes: Routes = [
  {
    path: '',
    component: PocetnaComponent
  },
  {
    path: 'kreator',
    loadChildren: './kreator-treninga/kreator-treninga.module#KreatorTreningaModule' // lazy loading
  },
  {
    path: 'pokretac',
    loadChildren: './pokretac-treninga/pokretac-treninga.module#PokretacTreningaModule' // lazy loading
  },
  // Ovo mora da bude na zadnjem mjestu.
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
