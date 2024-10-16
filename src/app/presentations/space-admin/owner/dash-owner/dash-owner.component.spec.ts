import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOwnerComponent } from './dash-owner.component';

describe('DashOwnerComponent', () => {
  let component: DashOwnerComponent;
  let fixture: ComponentFixture<DashOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
