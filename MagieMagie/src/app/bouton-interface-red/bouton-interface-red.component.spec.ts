import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonInterfaceRedComponent } from './bouton-interface-red.component';

describe('BoutonInterfaceRedComponent', () => {
  let component: BoutonInterfaceRedComponent;
  let fixture: ComponentFixture<BoutonInterfaceRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonInterfaceRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonInterfaceRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
