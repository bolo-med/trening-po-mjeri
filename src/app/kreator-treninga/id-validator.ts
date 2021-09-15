// ID se moze sastojati samo od brojeva i slova.

import { FormControl } from '@angular/forms';

export class IdValidator {
    static nepravilanId(kontrola: FormControl): {[kljuc: string]: boolean} {
        if(!kontrola.value.match(/^[a-z0-9]+$/i)) {
            return {nepravilanId: true};
        }
        return null;
    }
}

