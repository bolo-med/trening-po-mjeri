import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreningService } from 'src/app/sustina/trening.service';
import { Vjezba } from 'src/app/sustina/Vjezba';

@Component({
  selector: 'app-vjezbe',
  templateUrl: './vjezbe.component.html',
  styleUrls: ['./vjezbe.component.scss']
})
export class VjezbeComponent implements OnInit {

  spisakVjezbi: Vjezba[] = [];

  constructor(private treningService: TreningService, private router: Router) {}

  ngOnInit(): void {
    this.spisakVjezbi = this.treningService.dajVjezbe();
  }

  naOdabir(vjezba: Vjezba) {
    this.router.navigate(['./kreator/vjezba', vjezba.nazivID]);
  }

}
