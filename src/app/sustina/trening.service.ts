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

  dajTrening(id: string): Trening {
    for (const trening of this.treninzi) {
      if (trening.nazivID === id) {
        return this.noveRefTrening(trening);
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
        'Vježba za gornji dio tijela. Najviše pogađa pektoralis i triceps.',
        30,
        'sklekovi.jpg',
        'sklekovi.mp3',
        ['bfBts05uD7c', 'dCqqJg-zxQw']
      )
    );

    this.vjezbe.push(
      new Vjezba(
        'trbusnjaci',
        'Trbušnjaci',
        'Vježba za mišiće abdomena. Najviše pogađa gornji dio abdomena.',
        30,
        'trbusnjaci.png',
        'trbusnjaci.mp3',
        ['u5kontm7ix8']
      )
    );

    this.vjezbe.push(
      new Vjezba(
        'cucnjevi',
        'Čučnjevi',
        'Vježba za mišiće nogu. Najviše pogađa kvadriceps.',
        30,
        'cucnjevi.png',
        'cucnjevi.mp3',
        ['WU_ks_hJ7nY', 'E374izHLDL4', 'mGvzVjuY8SY']
      )
    );

    // console.log(this.vjezbe);
    
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
        'Trominutni trening',
        45,
        this.noveReference(this.vjezbe),
        'neki opis'
      )
    );

    this.treninzi.push(
      new Trening(
        'tr03',
        '3 i po minutni trening',
        60,
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
      if (vjezbaOrig.zvuk) vjezbaNova.zvuk = vjezbaOrig.zvuk;
      if (vjezbaOrig.snimci) vjezbaNova.snimci = vjezbaOrig.snimci.slice();
      vjezbe.push(vjezbaNova);
    }

    return vjezbe;
  }

  noveRefTrening(t: Trening): Trening {
    let vje: Vjezba[] = [];
    let nrt: Trening = new Trening('', '', 0, vje, '');
    nrt.nazivID = t.nazivID;
    nrt.naslov = t.naslov;
    nrt.trajanjeOdmora = t.trajanjeOdmora;
    nrt.vjezbe = this.noveReference(t.vjezbe);
    if (t.opis) nrt.opis = t.opis;
    return nrt;
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

  dodajVjezbu(vjezba: Vjezba) {
    this.vjezbe.push(vjezba);
  }

  azurirajVjezbu(vjezba: Vjezba) {
    for (let i = 0; i < this.vjezbe.length; i++) {
      if (this.vjezbe[i].nazivID === vjezba.nazivID) {
        this.vjezbe[i] = vjezba;
        break;
      }
    }
  }

  uvrstenaUTrening(idVjezbe: string): boolean {
    for (let t of this.treninzi) {
      for (let v of t.vjezbe) {
        if (v.nazivID === idVjezbe) return true;
      }
    }
    return false;
  }

  ukloniVjezbu(id: string): void {
    for (let v of this.vjezbe) {
      if (v.nazivID === id) {
        const index: number = this.vjezbe.indexOf(v);
        this.vjezbe.splice(index, 1);
        return;
      }
    }
  }

}

