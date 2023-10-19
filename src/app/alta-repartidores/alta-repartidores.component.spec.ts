import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartidoresComponent } from './alta-repartidores.component';

describe('AltaRepartidoresComponent', () => {
  let component: AltaRepartidoresComponent;
  let fixture: ComponentFixture<AltaRepartidoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaRepartidoresComponent]
    });
    fixture = TestBed.createComponent(AltaRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
