## Aplikacija za fiskulturni trening

Aplikacija se sastoji iz dva dijela. Prvi služi za kreiranje i izmjenu vježbi i treninga. Drugi služi za vizuelni i zvučni prikaz toka treninga, kao svojevrsna pomoć pri treniranju.

<br />

![01.png](/docs/assets/images/01.png)
*Slika 1 - Stranica 'Kreiraj / Treninzi i vježbe / Svi treninzi' prikazuje sve treninge, koje su dostupne korisniku. Klikom na trening je moguće izvršiti izmjene.*

<br />

![02.png](/docs/assets/images/02.png)
*Slika 2 - Moguće je dodati novu vježbu iz menija sa strane, ukloniti vježbu, promijeniti raspored i trajanje vježbi. Moguća je izmjena ostalih podataka. Aplikacija vrši proračum ukupnog trajanja treninga.*

<br />

![03.png](/docs/assets/images/03.png)
*Slika 3 - Stranica 'Kreiraj / Treninzi i vježbe / Sve vježbe' prikazuje sve vježbe, koje su dostupne korisniku. Klikom na vježbu je moguće izvršiti izmjene.*

<br />

![04.png](/docs/assets/images/04.png)
*Slika 4 - Forma za izmjenu podataka o vježbi. Zvuk, ilustracija, video snimci.*

<br />

![05.png](/docs/assets/images/05.png)
*Slika 5 - Forma zakreiranje novog treninga.*

<br />

![06.png](/docs/assets/images/06.png)
*Slika 6 - Forma za kreiranje nove vježbe.*

<br />

![07.png](/docs/assets/images/07.png)
*Slika 7 - Stranica 'Treniraj'. Prikazani su svi treninzi. Odabirom se započinje trening.*

<br />

![08.png](/docs/assets/images/08.png)
*Slika 8 - Grafički prikaz toka treninga.*

<br />

## Neke od tehnologija

- Angular modules za organizaciju koda
- Child routing sa lazy loadingom
- Route guards - Resolve<T>
- Template-driven i Reactive forme
- @Directive i @ViewChild - za upravljanje HTML audio elementima
- @Output - za emitovanje custom događaja, za potrebe zvučne signalizacije
- @Pipe - za transformaciju prikaza podataka
- DomSanitizer - za URL-ove video snimaka, kako napadač ne bi mogao da ubaci JavaScript kod
