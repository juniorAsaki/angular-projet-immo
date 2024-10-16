import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationInfosClientComponent } from './reservation-infos-client.component';

describe('ReservationInfosClientComponent', () => {
  let component: ReservationInfosClientComponent;
  let fixture: ComponentFixture<ReservationInfosClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationInfosClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationInfosClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
