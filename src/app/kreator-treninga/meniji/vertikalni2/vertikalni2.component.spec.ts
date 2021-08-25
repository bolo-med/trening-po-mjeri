import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vertikalni2Component } from './vertikalni2.component';

describe('Vertikalni2Component', () => {
  let component: Vertikalni2Component;
  let fixture: ComponentFixture<Vertikalni2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vertikalni2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vertikalni2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
