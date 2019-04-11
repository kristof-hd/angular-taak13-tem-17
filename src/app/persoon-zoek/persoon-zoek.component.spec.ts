import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonZoekComponent } from './persoon-zoek.component';

describe('PersoonZoekComponent', () => {
  let component: PersoonZoekComponent;
  let fixture: ComponentFixture<PersoonZoekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoonZoekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoonZoekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
