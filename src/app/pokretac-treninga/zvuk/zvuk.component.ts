import { Component, OnInit, ViewChild } from '@angular/core';
import { ZvucnaSignalizacijaDirective } from 'src/app/razmjena/zvucna-signalizacija.directive';
import { PromjenaVjezbeEvent } from 'src/app/sustina/PromjenaVjezbeEvent';
import { TokVjezbeEvent } from 'src/app/sustina/TokVjezbeEvent';

@Component({
  selector: 'app-zvuk',
  templateUrl: './zvuk.component.html',
  styleUrls: ['./zvuk.component.scss']
})
export class ZvukComponent implements OnInit {

  @ViewChild('tiktak') private tik: ZvucnaSignalizacijaDirective;
  @ViewChild('pola') private pola: ZvucnaSignalizacijaDirective;
  @ViewChild('odbrojavanje') private odbr: ZvucnaSignalizacijaDirective;
  @ViewChild('nekst') private next: ZvucnaSignalizacijaDirective;
  @ViewChild('sledeca') private sled: ZvucnaSignalizacijaDirective;
  
  zvukSledece: string = 'odmor.mp3';

  constructor() { }

  ngOnInit(): void {
  }

  pocetak() {
    // this.tik.nastavi(); // nece ovako
    setTimeout(() => {this.tik.nastavi()}, 200);
  }

  stop() {
    this.tik.zaustavi();
    this.pola.zaustavi();
    this.odbr.zaustavi();
    this.next.zaustavi();
  }

  start() {
    this.tik.nastavi();
    if (this.pola.trenutno > 0 && !this.pola.jeLiZavrseno) {
      this.pola.nastavi();
    }
    else if (this.odbr.trenutno > 0 && !this.odbr.jeLiZavrseno) {
      this.odbr.nastavi();
    }
    else if (this.next.trenutno > 0 && !this.next.jeLiZavrseno) {
      this.next.nastavi();
    }
  }

  tokVjezbe(tok: TokVjezbeEvent) {
    if ((tok.protekloVrijeme === Math.floor(tok.vjezba.trajanje / 2)) && (tok.vjezba.nazivID !== 'odmor')) {
      this.pola.nastavi();
    }
    else if (tok.preostaloVrijeme === 3) {
      this.odbr.nastavi();
    }
    else if ((tok.preostaloVrijeme < 1) && (tok.preostaloVrijemeTreninga > 2)) {
      this.next.nastavi();
    }
  }

  promjenaVjezbe(prom: PromjenaVjezbeEvent) {
    this.zvukSledece = prom.trenutna.zvuk;
    setTimeout(() => {this.sled.nastavi()}, 1000);
    // this.sled.nastavi(); // nece da pusti
    // console.log(this.zvukSledece);
  }

}
