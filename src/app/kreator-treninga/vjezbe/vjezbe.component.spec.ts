import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjezbeComponent } from './vjezbe.component';

describe('VjezbeComponent', () => {
  let component: VjezbeComponent;
  let fixture: ComponentFixture<VjezbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjezbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
