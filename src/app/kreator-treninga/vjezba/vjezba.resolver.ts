//
// Ovaj fajl mora kompletno rucno da se napravi. Ne postoji komanda za njegovo kreiranje u verziji Angilar 10.
//

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { Vjezba } from './../../sustina/Vjezba';
import { KreatorVjezbeService } from './../kt-servisi/kreator-vjezbe.service';

@Injectable()
export class VjezbaResolver implements Resolve<Vjezba> {

    vjezba: Vjezba;

    constructor(private kreatorVjezbeServis: KreatorVjezbeService, private router: Router) {};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Vjezba {

        let idVjezbe: string = route.paramMap.get('id');

        if (!idVjezbe) idVjezbe = '';

        this.vjezba = this.kreatorVjezbeServis.zapocniIzgradnju(idVjezbe);

        if (this.vjezba) {
            return this.vjezba;
        }
        else {
            this.router.navigate(['/kreator/vjezbe']);
            return null;
        }
    }
}

