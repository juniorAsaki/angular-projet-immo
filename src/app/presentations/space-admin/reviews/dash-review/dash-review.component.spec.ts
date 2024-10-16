import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReviewComponent } from './dash-review.component';

describe('DashReviewComponent', () => {
  let component: DashReviewComponent;
  let fixture: ComponentFixture<DashReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
