import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreningService } from './../../sustina/trening.service';
import { Trening } from './../../sustina/Trening';

@Component({
  selector: 'app-treninzi',
  templateUrl: './treninzi.component.html',
  styleUrls: ['./treninzi.component.scss']
})
export class TreninziComponent implements OnInit {

  spisakTreninga: Trening[] = [];

  constructor(private router: Router, private treningService: TreningService) { }

  ngOnInit(): void {
    this.spisakTreninga = this.treningService.dajTreninge();
  }

  nakonOdabira(trening: Trening) {
    this.router.navigate(['./kreator/trening', trening.nazivID]);
  }

}
