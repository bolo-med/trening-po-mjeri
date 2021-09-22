import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: 'audio', // na ovaj nacin se odnosi na sve <audio> elemente
  selector: '[appZvucnaSignalizacija]',
  exportAs: 'zvucnaSignalizacija'
})
export class ZvucnaSignalizacijaDirective {

  private audioPlejer: HTMLAudioElement;

  constructor(e: ElementRef) {
    this.audioPlejer = e.nativeElement;
  }

  zaustavi() {
    this.audioPlejer.pause();
  }

  nastavi() {
    this.audioPlejer.play();
  }

  get trenutno() {
    return this.audioPlejer.currentTime;
  }

  get trajanje() {
    return this.audioPlejer.duration;
  }

  get jeLiZavrseno() {
    return this.trenutno == this.trajanje;
  }

}

