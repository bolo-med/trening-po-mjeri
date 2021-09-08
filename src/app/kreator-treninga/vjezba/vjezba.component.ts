import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vjezba } from 'src/app/sustina/Vjezba';
import { KreatorVjezbeService } from '../kt-servisi/kreator-vjezbe.service';

@Component({
  selector: 'app-vjezba',
  templateUrl: './vjezba.component.html',
  styleUrls: ['./vjezba.component.scss']
})
export class VjezbaComponent implements OnInit, OnDestroy {

  vjezba: Vjezba;
  sub: any;
  vjezbaObrazac: FormGroup;
  nizZaFormu: FormArray = new FormArray([]);
  potvrdjena: boolean = false;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kreatorVjezbeServis: KreatorVjezbeService, 
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((data: {vjezba: Vjezba}) => {
      this.vjezba = data.vjezba;
    });

    this.napraviObrazac();
  }

  napraviObrazac() {
    this.vjezbaObrazac = this.formBuilder.group({
      'nazivID': [this.vjezba.nazivID, Validators.required],
      'naslov': [this.vjezba.naslov, Validators.required],
      'opis': [this.vjezba.opis, Validators.required],
      'trajanje': [this.vjezba.trajanje, Validators.required],
      'slika': [this.vjezba.slika, Validators.required],
      'zvuk': [this.vjezba.zvuk],
      'snimci': this.napraviNizZaFormu()
    });
  }

  napraviNizZaFormu(): FormArray {
    if (this.vjezba.snimci) {
      for (let snimak of this.vjezba.snimci) {
        this.nizZaFormu.push(new FormControl(snimak, Validators.required));
      }
    }
    return this.nizZaFormu;
  }

  potvrdaUnosa(forma: FormGroup) {
    this.potvrdjena = true;
  }

  ukloniSnimak(index: number): void {
    this.kreatorVjezbeServis.ukloniSnimak(index);
    let n = <FormArray>this.vjezbaObrazac.controls['snimci'];
    n.removeAt(index);
  }

  dodajPoljeSnimka() {
    if (!this.vjezba.snimci || this.vjezba.snimci.length <= 4) {
      this.kreatorVjezbeServis.dodajPrazanSnimak();
      let n = <FormArray>this.vjezbaObrazac.controls['snimci'];
      n.push(new FormControl('', Validators.required));
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
