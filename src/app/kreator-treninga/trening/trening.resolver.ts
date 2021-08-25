//
// Ovaj fajl mora kompletno rucno da se napravi. Ne postoji komanda za njegovo kreiranje, u verziji Angilar 10.
//

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Trening } from './../../sustina/Trening';
import { KreatorTreningaService } from './../kt-servisi/kreator-treninga.service';

@Injectable()
export class TreningResolver implements Resolve<Trening> {

  public trening: Trening;

  constructor(public ktServis: KreatorTreningaService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Trening {

    let treningId = route.paramMap.get('id');

    if (!treningId) treningId = '';

    this.trening = this.ktServis.zapocniKonstruisanje(treningId);

    if (this.trening) {
        return this.trening;
    }
    else {
        this.router.navigate(['/kreator/treninzi']);
        return null;
    }
  }

}
