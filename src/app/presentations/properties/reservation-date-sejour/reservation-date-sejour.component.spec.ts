import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDateSejourComponent } from './reservation-date-sejour.component';

describe('ReservationDateSejourComponent', () => {
  let component: ReservationDateSejourComponent;
  let fixture: ComponentFixture<ReservationDateSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationDateSejourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDateSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
