import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Trening } from 'src/app/sustina/Trening';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from './../../sustina/Vjezba';
import { TokVjezbeEvent } from './../../sustina/TokVjezbeEvent';
import { PromjenaVjezbeEvent } from './../../sustina/PromjenaVjezbeEvent';

@Component({
  selector: 'app-pkr-trening',
  templateUrl: './pkr-trening.component.html',
  styleUrls: ['./pkr-trening.component.scss']
})
export class PkrTreningComponent implements OnInit {

  @Input() trening: Trening;

  odmor: Vjezba;
  preostaloVrijemeTreninga: number;
  indeksTrenutneVjezbe: number;
  trenutnaVjezba: Vjezba;
  protekloVrijemeVjezbe: number;
  intervalID: number;
  treningZaustavljen: boolean = false;

  @Output() treningPocetak: EventEmitter<Trening> = new EventEmitter<Trening>();
  @Output() treningKraj: EventEmitter<Trening> = new EventEmitter<Trening>();
  @Output() vjezbaZaustavljena: EventEmitter<number> = new EventEmitter<number>();
  @Output() vjezbaNastavljena: EventEmitter<number> = new EventEmitter<number>();
  @Output() vjezbaTok: EventEmitter<TokVjezbeEvent> = new EventEmitter<TokVjezbeEvent>();
  @Output() vjezbaPromjena: EventEmitter<PromjenaVjezbeEvent> = new EventEmitter<PromjenaVjezbeEvent>();

  constructor(private route: ActivatedRoute, private treningServis: TreningService) { }

  ngOnInit(): void {
    this.odmor = new Vjezba('odmor', 'Odmorite se', 'Kratak predah između vježbi.', this.trening.trajanjeOdmora, 'odmor.png', 'odmor.mp3');
    this.zapocniTrening();
  }

  zapocniTrening() {
    this.preostaloVrijemeTreninga = this.trening.trajanjeTreninga();
    this.indeksTrenutneVjezbe = 0;
    this.zapocniVjezbu(this.trening.vjezbe[this.indeksTrenutneVjezbe]);
    this.treningPocetak.emit(this.trening);
  }

  zapocniVjezbu(vjezba: Vjezba) {
    this.trenutnaVjezba = vjezba;
    this.protekloVrijemeVjezbe = 0;
    this.kontrolisiTokVjezbe();
  }

  kontrolisiTokVjezbe(): void {
    this.intervalID = setInterval(() => {
      if (this.protekloVrijemeVjezbe >= this.trenutnaVjezba.trajanje) {
        clearInterval(this.intervalID);
        const sledecaVjezba = this.dajSledecuVjezbu();
        if (sledecaVjezba) {
          if (sledecaVjezba !== this.odmor) this.indeksTrenutneVjezbe++;
          this.zapocniVjezbu(sledecaVjezba);
          this.vjezbaPromjena.emit(new PromjenaVjezbeEvent(sledecaVjezba, null));
        }
        else {
          console.log('Kraj treninga!');
          this.treningKraj.emit(this.trening);
        }
      }
      else {
        this.protekloVrijemeVjezbe++;
        this.preostaloVrijemeTreninga--;
        this.vjezbaTok.emit(new TokVjezbeEvent(this.trenutnaVjezba, this.protekloVrijemeVjezbe, 
                                               this.trenutnaVjezba.trajanje - this.protekloVrijemeVjezbe, 
                                               this.preostaloVrijemeTreninga));
      }
    }, 1000);
  }

  dajSledecuVjezbu(): Vjezba {
    let sledeca: Vjezba = null;
    if (this.trenutnaVjezba === this.odmor) {
      sledeca = this.trening.vjezbe[this.indeksTrenutneVjezbe + 1];
    }
    else if (this.indeksTrenutneVjezbe < this.trening.vjezbe.length - 1) {
      sledeca = this.odmor;
    }
    return sledeca;
  }

  zaustaviTrening() {
    clearInterval(this.intervalID);
    this.treningZaustavljen = true;
    this.vjezbaZaustavljena.emit(this.indeksTrenutneVjezbe);
  }

  nastaviTrening() {
    this.kontrolisiTokVjezbe();
    this.treningZaustavljen = false;
    this.vjezbaNastavljena.emit(this.indeksTrenutneVjezbe);
  }

  zaustaviNastavi() {
    if (this.treningZaustavljen) {
      this.nastaviTrening();
    }
    else {
      this.zaustaviTrening();
    }
  }

  taster(t: KeyboardEvent) {
    if (t.key === 'p' || t.key === 'P') {
      this.zaustaviNastavi();
    }
  }

}

