import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZvukComponent } from './zvuk.component';

describe('ZvukComponent', () => {
  let component: ZvukComponent;
  let fixture: ComponentFixture<ZvukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZvukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZvukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
