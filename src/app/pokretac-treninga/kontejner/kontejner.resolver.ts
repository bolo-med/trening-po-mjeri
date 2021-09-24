//
// Ovaj fajl mora kompletno rucno da se napravi. Ne postoji komanda za njegovo kreiranje u verziji Angilar 10.
//

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { Trening } from './../../sustina/Trening';
import { TreningService } from './../../sustina/trening.service';
@Injectable()
export class KontejnerResolver implements Resolve<Trening> {

    trening: Trening;

    constructor(private treningServis: TreningService, private router: Router) {};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Trening {

        const idTreninga: string = route.paramMap.get('id');

        this.trening = this.treningServis.dajTrening(idTreninga);

        if (this.trening) {
            return this.trening;
        }
        else {
            this.router.navigate(['/kreator']);
            return null;
        }
    }
}

