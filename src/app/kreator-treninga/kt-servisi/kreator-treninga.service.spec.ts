import { TestBed } from '@angular/core/testing';

import { KreatorTreningaService } from './kreator-treninga.service';

describe('KreatorTreningaService', () => {
  let service: KreatorTreningaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KreatorTreningaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
