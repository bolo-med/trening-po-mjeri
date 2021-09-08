import { Injectable } from '@angular/core';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from 'src/app/sustina/Vjezba';

@Injectable({
  providedIn: 'root'
})
export class KreatorVjezbeService {

  predmetnaVjezba: Vjezba;
  novaVjezba: boolean;

  constructor(private treningServis: TreningService) {}

  zapocniIzgradnju(id: string): Vjezba {
    if (id) {
      this.predmetnaVjezba = this.treningServis.dajVjezbu(id);
      this.novaVjezba = false;
    }
    else {
      this.predmetnaVjezba = new Vjezba('', '', '', 0, '');
      this.novaVjezba = true;
    }
    return this.predmetnaVjezba;
  }

  ukloniSnimak(indeks: number): void {
    if (indeks >= 0) {
      this.predmetnaVjezba.snimci.splice(indeks, 1)
    };
  }

  dodajPrazanSnimak() {
    if (!this.predmetnaVjezba.snimci) {
      this.predmetnaVjezba.snimci = [];
    }
    this.predmetnaVjezba.snimci.push('');
  }


}
