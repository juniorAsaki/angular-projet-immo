import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCustumerComponent } from './dash-custumer.component';

describe('DashCustumerComponent', () => {
  let component: DashCustumerComponent;
  let fixture: ComponentFixture<DashCustumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCustumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
