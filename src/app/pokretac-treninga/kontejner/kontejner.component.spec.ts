import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontejnerComponent } from './kontejner.component';

describe('KontejnerComponent', () => {
  let component: KontejnerComponent;
  let fixture: ComponentFixture<KontejnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontejnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontejnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
