import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { KreatorTreningaModule } from './kreator-treninga/kreator-treninga.module';

import { FormsModule } from '@angular/forms';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { RazmjenaModule } from './razmjena/razmjena.module';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // KreatorTreningaModule, // mora da se izbaci da bi radio lazy loading
    FormsModule,
    RazmjenaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
