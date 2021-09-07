//
// Ovaj fajl mora kompletno rucno da se napravi. Ne postoji komanda za njegovo kreiranje.
//

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KreatorTreningaComponent } from './kreator-treninga.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { TreningComponent } from './trening/trening.component';
import { VjezbeComponent } from './vjezbe/vjezbe.component';
import { VjezbaComponent } from './vjezba/vjezba.component';
import { TreningResolver } from './trening/trening.resolver';
import { VjezbaResolver } from './vjezba/vjezba.resolver';

const routes: Routes = [
    {
        path: '',
        component: KreatorTreningaComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'treninzi' },
            { path: 'treninzi', component: TreninziComponent },
            { path: 'trening/novi', component: TreningComponent, resolve: { trening: TreningResolver } },
            { path: 'trening/:id', component: TreningComponent, resolve: { trening: TreningResolver }  },
            { path: 'vjezbe', component: VjezbeComponent },
            { path: 'vjezba/nova', component: VjezbaComponent, resolve: {vjezba: VjezbaResolver} },
            { path: 'vjezba/:id', component: VjezbaComponent, resolve: {vjezba: VjezbaResolver} }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class KreatorTreningaRoutingModule { }

  