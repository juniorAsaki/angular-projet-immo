import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPaiementComponent } from './reservation-paiement.component';

describe('ReservationPaiementComponent', () => {
  let component: ReservationPaiementComponent;
  let fixture: ComponentFixture<ReservationPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationPaiementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
