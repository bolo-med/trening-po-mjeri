import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-plejer',
  templateUrl: './video-plejer.component.html',
  styleUrls: ['./video-plejer.component.scss']
})
export class VideoPlejerComponent implements OnInit, OnChanges {

  @Input() snimci: Array<string>;
  @Input() komponenta: string;

  prefiks: string = 'https://www.youtube.com/embed/';
  urls: Array<SafeResourceUrl> = new Array<SafeResourceUrl>();

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.snimci) {
      this.urls = [];
      for (let s of this.snimci) {
        if (s) this.urls.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.prefiks + s + '?mute=1'));
      }
    }
    else {
      this.urls = null;
    }
  }

}

