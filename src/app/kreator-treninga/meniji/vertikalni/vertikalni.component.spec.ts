import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertikalniComponent } from './vertikalni.component';

describe('VertikalniComponent', () => {
  let component: VertikalniComponent;
  let fixture: ComponentFixture<VertikalniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertikalniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertikalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
