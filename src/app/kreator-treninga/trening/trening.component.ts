import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trening } from 'src/app/sustina/Trening';
import { KreatorTreningaService } from '../kt-servisi/kreator-treninga.service';
import { Vjezba } from './../../sustina/Vjezba';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.scss']
})
export class TreningComponent implements OnInit, OnDestroy {

  trening: Trening;
  sub: any;
  vecUklanjane: boolean = false;
  potvrdio: boolean = false;

  trajanja = [
    { slovima: '15 sekundi', iznos: 15 },
    { slovima: '30 sekundi', iznos: 30 },
    { slovima: '45 sekundi', iznos: 45 },
    { slovima: '1 minut', iznos: 60 },
    { slovima: '1 minut i 15 sekundi', iznos: 75 },
    { slovima: '1 minut i 30 sekundi', iznos: 90 },
    { slovima: '1 minut i 45 sekundi', iznos: 105 },
    { slovima: '2 minuta', iznos: 120 }
  ];

  constructor(
    private route: ActivatedRoute, 
    private ktServis: KreatorTreningaService, 
    private router: Router) { }

  ngOnInit(): void {
    // 'trening' - obavezno je da bude isto ime, kao u 'resolve' u 'kreator-treninga-routing'
    // radi i bez - ': {trening: Trening}'
    this.sub = this.route.data.subscribe((data: {trening: Trening}) => {
      this.trening = data.trening;
    });
  }

  premjestiVjezbu(v: Vjezba, i: number) {
    this.ktServis.premjestiVjezbuNa(v, i);
  }

  ukloniVjezbu(v: Vjezba) {
    this.vecUklanjane = true;
    this.ktServis.ukloniVjezbu(v);
  }

  sacuvaj(forma: FormGroup) {
    this.potvrdio = true;
    if (!forma.valid) {
      console.log('Obrazac nije pravilno popunjen!');
      return;
    }
    this.ktServis.sacuvaj();
    this.router.navigate(['/kreator/treninzi']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

