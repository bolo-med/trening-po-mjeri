import { Injectable } from '@angular/core';
import { Trening } from 'src/app/sustina/Trening';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from 'src/app/sustina/Vjezba';

@Injectable({
  providedIn: 'root'
})
export class KreatorTreningaService {

  predmetniTrening: Trening;
  noviTrening: boolean;
  prvaVjezba: boolean = true;

  constructor(private treningServis: TreningService) {}

  zapocniKonstruisanje(naziv: string): Trening {
    if (naziv) {
      this.predmetniTrening = this.treningServis.dajTrening(naziv);
      this.noviTrening = false;
    }
    else {
      this.predmetniTrening = new Trening('', '', 30, []);
      this.noviTrening = true;
    }
    return this.predmetniTrening;
  }

  ukloniVjezbu(vje: Vjezba): void {
    const indVjezbe: number = this.predmetniTrening.vjezbe.map((vjezba) => vjezba.nazivID).indexOf(vje.nazivID);
    this.predmetniTrening.vjezbe.splice(indVjezbe, 1);
  }

  dodajVjezbu(vje: Vjezba): void {
    if (this.noviTrening && this.prvaVjezba) {
      // this.predmetniTrening.vjezbe.splice(0, 1); // Nepotrebno?
      this.prvaVjezba = false;
    }
    this.predmetniTrening.vjezbe.push(vje);
  }

  premjestiVjezbuNa(vjezba: Vjezba, noviIndeks: number): void {

    if (noviIndeks < 0 || noviIndeks >= this.predmetniTrening.vjezbe.length) return;

    const stariIndeks: number = this.predmetniTrening.vjezbe.indexOf(vjezba);
    this.predmetniTrening.vjezbe.splice(stariIndeks, 1);
    this.predmetniTrening.vjezbe.splice(noviIndeks, 0, vjezba);
    //this.predmetniTrening.vjezbe.splice(noviIndeks, 0, this.predmetniTrening.vjezbe.splice(stariIndeks, 1)[0]); // jedna linija
  }

  sacuvaj() {
    let trening = this.noviTrening ? this.treningServis.dodajTrening(this.predmetniTrening) : 
                                     this.treningServis.azurirajTrening(this.predmetniTrening);
    this.noviTrening = false;
    return trening;
  }

}

