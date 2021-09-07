import { TestBed } from '@angular/core/testing';

import { KreatorVjezbeService } from './kreator-vjezbe.service';

describe('KreatorVjezbeService', () => {
  let service: KreatorVjezbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KreatorVjezbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
