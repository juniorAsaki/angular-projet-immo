import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBookingComponent } from './dash-booking.component';

describe('DashBookingComponent', () => {
  let component: DashBookingComponent;
  let fixture: ComponentFixture<DashBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
