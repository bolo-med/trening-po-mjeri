import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokretacTreningaComponent } from './pokretac-treninga.component';

describe('PokretacTreningaComponent', () => {
  let component: PokretacTreningaComponent;
  let fixture: ComponentFixture<PokretacTreningaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokretacTreningaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokretacTreningaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
