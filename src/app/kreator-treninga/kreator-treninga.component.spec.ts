import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreatorTreningaComponent } from './kreator-treninga.component';

describe('KreatorTreningaComponent', () => {
  let component: KreatorTreningaComponent;
  let fixture: ComponentFixture<KreatorTreningaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreatorTreningaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreatorTreningaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
