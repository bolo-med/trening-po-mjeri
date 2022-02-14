# PersonalniTrener

*Kreiranje, izmjena i brisanje vježbe. Kreiranje i izmjena treninga. Kontrola toka treninga.*

## Prezentacija projekta: https://bolo-med.github.io/trening-po-mjeri/

<br /><br /><br /><br /><br /><br /><br />

### Zabilješke

Child routing sa lazy loadingom (bez lazy loadinga mi nije radilo) \
Lazy loading (modul se ucitava, tek kad postoji potreba; suprotno od SPA, gdje se svi moduli odmah ucitavaju)

![](sl01.PNG)
![](sl02.PNG)

Module - za organizaciju koda \
Niz providers, u modulu (bice ucitano samo kad se pristupi svojstvu kreator-treninga. NE moze mu se pristupiti iz ostalih modula.) \
Metoda splice, za manipulaciju nizom - dodavanje elementa, uklanjanje, premjestanje. \
Route guards - Resolve. \
ngModelGroup - grupisanje elemenata forme u jedan objekat. \
Forme - Template-driven i Reactive

