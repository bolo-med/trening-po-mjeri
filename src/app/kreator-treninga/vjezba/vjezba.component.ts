import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vjezba } from 'src/app/sustina/Vjezba';
import { KreatorVjezbeService } from '../kt-servisi/kreator-vjezbe.service';
import { IdValidator } from './../id-validator';

@Component({
  selector: 'app-vjezba',
  templateUrl: './vjezba.component.html',
  styleUrls: ['./vjezba.component.scss']
})
export class VjezbaComponent implements OnInit, OnDestroy {

  vjezba: Vjezba;
  sub: any;
  vjezbaObrazac: FormGroup;
  nizKontrola: FormArray = new FormArray([]);
  potvrdjena: boolean = false;
  pogresnaPutanja: boolean = false;
  nova: boolean;
  uvrstena: boolean;

  trajanja = [
    { slovima: '15 sekundi', iznos: 15 },
    { slovima: '30 sekundi', iznos: 30 },
    { slovima: '45 sekundi', iznos: 45 },
    { slovima: '1 minut', iznos: 60 },
    { slovima: '1 minut i 15 sekundi', iznos: 75 },
    { slovima: '1 minut i 30 sekundi', iznos: 90 },
    { slovima: '1 minut i 45 sekundi', iznos: 105 },
    { slovima: '2 minuta', iznos: 120 }
  ];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kreatorVjezbeServis: KreatorVjezbeService, 
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((data: {vjezba: Vjezba}) => {
      this.vjezba = data.vjezba;
    });
    this.jeLiNova(this.vjezba.nazivID);
    this.napraviObrazac();
  }

  jeLiNova(id: string) {
    if (id === '') {
      this.nova = true;
      this.uvrstena = false;
    }
    else {
      this.nova = false;
      this.uvrstena = this.kreatorVjezbeServis.uvrstena(id);
    }
  }

  napraviObrazac() {
    this.vjezbaObrazac = this.formBuilder.group({
      //'nazivID': [this.vjezba.nazivID, [Validators.required, IdValidator.nepravilanId]],
      'nazivID': [this.vjezba.nazivID, {
        updateOn: 'blur',
        validators: [Validators.required, IdValidator.nepravilanId]
      }],
      'naslov': [this.vjezba.naslov, Validators.required],
      'opis': [this.vjezba.opis, Validators.required],
      'trajanje': [this.vjezba.trajanje, Validators.required],
      'slika': [this.vjezba.slika, Validators.required],
      'zvuk': [this.vjezba.zvuk],
      'snimci': this.napraviNizKontrola()
    });
  }

  napraviNizKontrola(): FormArray {
    if (this.vjezba.snimci) {
      for (let snimak of this.vjezba.snimci) {
        this.nizKontrola.push(new FormControl(snimak, Validators.required));
      }
    }
    return this.nizKontrola;
  }

  ukloniSnimak(index: number): void {
    //this.kreatorVjezbeServis.ukloniSnimak(index); //Visak???////////////////////////////////////////////////////////////////////////////////
    let n = <FormArray>this.vjezbaObrazac.controls['snimci'];
    n.removeAt(index);
  }

  // dodajPoljeSnimka() {
  //   if (this.vjezba.snimci.length <= 4) {
  //     this.kreatorVjezbeServis.dodajPrazanSnimak();
  //     let n = <FormArray>this.vjezbaObrazac.controls['snimci'];
  //     n.push(new FormControl('', Validators.required));
  //   }
  // }

  dodajPoljeSnimka() {
    if (this.nizKontrola.controls.length <= 4) {
      //this.kreatorVjezbeServis.dodajPrazanSnimak();
      let n = <FormArray>this.vjezbaObrazac.controls['snimci'];
      n.push(new FormControl('', Validators.required));
    }
  }

  potvrdaUnosa(forma: FormGroup): void {
    this.potvrdjena = true;
    if(!forma.valid) {
      return;
    }
    this.mapirajFormu(forma);
    this.kreatorVjezbeServis.sacuvaj(this.vjezba);
    this.router.navigate(['/kreator/vjezbe']);
  }

  mapirajFormu(forma: FormGroup) {
    this.vjezba.nazivID = forma.controls['nazivID'].value;
    this.vjezba.naslov = forma.controls['naslov'].value;
    this.vjezba.opis = forma.controls['opis'].value;
    this.vjezba.trajanje = forma.controls['trajanje'].value;
    this.vjezba.slika = forma.controls['slika'].value;
    this.vjezba.zvuk = forma.controls['zvuk'].value;
    this.vjezba.snimci = forma.controls['snimci'].value;
  }

  nepostojecaPutanja() {
    this.pogresnaPutanja = true;
  }

  izmjena() {
    this.pogresnaPutanja = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
