import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkrTreningComponent } from './pkr-trening.component';

describe('PkrTreningComponent', () => {
  let component: PkrTreningComponent;
  let fixture: ComponentFixture<PkrTreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkrTreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkrTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
