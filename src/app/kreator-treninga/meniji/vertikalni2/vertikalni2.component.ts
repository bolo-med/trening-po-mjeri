import { Component, OnInit } from '@angular/core';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from 'src/app/sustina/Vjezba';
import { KreatorTreningaService } from '../../kt-servisi/kreator-treninga.service';

@Component({
  selector: 'app-vertikalni2',
  templateUrl: './vertikalni2.component.html',
  styleUrls: ['./vertikalni2.component.scss']
})
export class Vertikalni2Component implements OnInit {

  spisakVjezbi: Vjezba[] = [];

  constructor(private treningService: TreningService, private kreatorTreningaServis: KreatorTreningaService) { }

  ngOnInit(): void {
    this.spisakVjezbi = this.treningService.dajVjezbe();
  }

  dodajVjezbu(vjezba: Vjezba) {
    this.kreatorTreningaServis.dodajVjezbu(vjezba);
  }

}
