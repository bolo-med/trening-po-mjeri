import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trening } from '../sustina/Trening';
import { TreningService } from '../sustina/trening.service';

@Component({
  selector: 'app-pokretac-treninga',
  templateUrl: './pokretac-treninga.component.html',
  styleUrls: ['./pokretac-treninga.component.scss']
})
export class PokretacTreningaComponent implements OnInit {

  treninzi: Trening[];

  constructor(private treningServis: TreningService, private router: Router) { }

  ngOnInit(): void {
    this.treninzi = this.treningServis.dajTreninge();
  }

  izabran(trening: Trening) {
    this.router.navigate(['./pokretac', trening.nazivID]);
  }

}
