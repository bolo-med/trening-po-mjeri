import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalniComponent } from './horizontalni.component';

describe('HorizontalniComponent', () => {
  let component: HorizontalniComponent;
  let fixture: ComponentFixture<HorizontalniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
