import { Injectable } from '@angular/core';
import { Trening } from 'src/app/sustina/Trening';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from 'src/app/sustina/Vjezba';

@Injectable({
  providedIn: 'root'
})
export class KreatorTreningaService {

  konstruisanjeTreninga: Trening;
  noviTrening: boolean;
  prvaVjezba: boolean = true;

  constructor(private treningServis: TreningService) {}

  zapocniKonstruisanje(naziv: string): Trening {
    if (naziv) {
      this.konstruisanjeTreninga = this.treningServis.dajTrening(naziv);
      this.noviTrening = false;
    }
    else {
      this.konstruisanjeTreninga = new Trening('', '', 30, []);
      this.noviTrening = true;
    }
    return this.konstruisanjeTreninga;
  }

  ukloniVjezbu(vje: Vjezba): void {
    const indVjezbe: number = this.konstruisanjeTreninga.vjezbe.map((vjezba) => vjezba.nazivID).indexOf(vje.nazivID);
    this.konstruisanjeTreninga.vjezbe.splice(indVjezbe, 1);
  }

  dodajVjezbu(vje: Vjezba): void {
    if (this.noviTrening && this.prvaVjezba) {
      // this.konstruisanjeTreninga.vjezbe.splice(0, 1); // Nepotrebno?
      this.prvaVjezba = false;
    }
    this.konstruisanjeTreninga.vjezbe.push(vje);
  }

  premjestiVjezbuNa(vjezba: Vjezba, noviIndeks: number): void {

    if (noviIndeks < 0 || noviIndeks >= this.konstruisanjeTreninga.vjezbe.length) return;

    const stariIndeks: number = this.konstruisanjeTreninga.vjezbe.indexOf(vjezba);
    this.konstruisanjeTreninga.vjezbe.splice(stariIndeks, 1);
    this.konstruisanjeTreninga.vjezbe.splice(noviIndeks, 0, vjezba);
    //this.konstruisanjeTreninga.vjezbe.splice(noviIndeks, 0, this.konstruisanjeTreninga.vjezbe.splice(stariIndeks, 1)[0]); // jedna linija
  }

}

