import { Injectable } from '@angular/core';

import { Trening } from './Trening';
import { Vjezba } from './Vjezba';

@Injectable({
  providedIn: 'root'
  //providedIn: 'SustinaModule' // Ako napravim taj modul
})
export class TreningService {

  treninzi: Trening[] = [];
  vjezbe: Array<Vjezba> = [];

  constructor() {
    this.popuniVjezbe();
    this.popuniTreninge();
  }

  dajTreninge(): Trening[] {
    return this.treninzi;
  }

  dajTrening(naziv: string): Trening {
    for (const trening of this.treninzi) {
      if (trening.nazivID === naziv) {
        return trening;
      }
    }
    return null;
  }

  dajVjezbe(): Vjezba[] {
    return this.vjezbe;
  }

  dajVjezbu(id: string): Vjezba {
    for (let vjezba of this.vjezbe) {
      if (vjezba.nazivID === id) {
        return vjezba;
      }
    }
    return null;
  }

  popuniVjezbe() {
    this.vjezbe.push(
      new Vjezba(
        'sklekovi',
        'Sklekovi',
        'Vjezba za gornji dio tijela. Najvise pogadja pektoralis i triceps.',
        45,
        'sklekovi.jpg',
        '',
        []
      )
    );

    this.vjezbe.push(
      new Vjezba(
        'trbusnjaci',
        'Trbušnjaci',
        'Vjezba za misice abdomena. Najvise pogadja gornji dio abdomena.',
        60,
        'trbusnjaci.png',
        '',
        []
      )
    );

    this.vjezbe.push(
      new Vjezba(
        'cucnjevi',
        'Čučnjevi',
        'Vjezba za misice nogu. Najvise pogadja kvadriceps.',
        75,
        'cucnjevi.png',
        '',
        []
      )
    );
  }

  popuniTreninge() {
    this.treninzi.push(
      new Trening(
        'tr01',
        '2 i po minutni trening',
        30,
        this.noveReference(this.vjezbe),
        'Osnovni trening za snagu.'
      )
    );

    this.treninzi.push(
      new Trening(
        'tr02',
        'proba 02 aaaaaaaaa',
        32,
        this.noveReference(this.vjezbe),
        'neki opis'
      )
    );

    this.treninzi.push(
      new Trening(
        'tr03',
        'proba 03',
        50,
        this.noveReference(this.vjezbe),
        'neki opis'
      )
    );
  }

  noveReference(vjezbeOrig: Vjezba[]): Vjezba[] {
    let vjezbe: Vjezba[] = [];
    for (let vjezbaOrig of vjezbeOrig) {
      let vjezbaNova: Vjezba = new Vjezba(
        vjezbaOrig.nazivID,
        vjezbaOrig.naslov,
        vjezbaOrig.opis,
        vjezbaOrig.trajanje,
        vjezbaOrig.slika
      );
      //if (vjezbaOrig.zvuk) vjezbaNova.zvuk = vjezbaOrig.zvuk;
      //if (vjezbaOrig.snimci) vjezbaNova.snimci = vjezbaOrig.snimci.slice();
      vjezbe.push(vjezbaNova);
    }

    return vjezbe;
  }

  dodajTrening(trening: Trening): Trening {
    if (trening.nazivID) {
      this.treninzi.push(trening);
      return trening;
    }
    return null;
  }

  azurirajTrening(trening: Trening) {
    for (let i = 0; i < this.treninzi.length; i++) {
      if (this.treninzi[i].nazivID === trening.nazivID) {
        this.treninzi[i] = trening;
        break;
      }
    }
  }

}

