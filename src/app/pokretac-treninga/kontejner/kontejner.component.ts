import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trening } from 'src/app/sustina/Trening';

@Component({
  selector: 'app-kontejner',
  templateUrl: './kontejner.component.html',
  styleUrls: ['./kontejner.component.scss']
})
export class KontejnerComponent implements OnInit {

  sub: any;
  trening: Trening;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((data: {trening: Trening}) => {
      this.trening = data.trening;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

