import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-plejer',
  templateUrl: './video-plejer.component.html',
  styleUrls: ['./video-plejer.component.scss']
})
export class VideoPlejerComponent implements OnInit, OnChanges {

  @Input() snimci: Array<string>;

  prefiks: string = 'https://www.youtube.com/embed/';
  urls: Array<SafeResourceUrl> = new Array<SafeResourceUrl>();

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.snimci) {
      for (let s of this.snimci) {
        this.urls.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.prefiks + s));
      }
    }
    else {
      this.urls = null;
    }
  }

}
