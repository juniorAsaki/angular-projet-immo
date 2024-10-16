import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResidenceComponent } from './dash-residence.component';

describe('DashResidenceComponent', () => {
  let component: DashResidenceComponent;
  let fixture: ComponentFixture<DashResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashResidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
