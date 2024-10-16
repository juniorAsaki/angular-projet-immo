import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesResidenceComponent } from './images-residence.component';

describe('ImagesResidenceComponent', () => {
  let component: ImagesResidenceComponent;
  let fixture: ComponentFixture<ImagesResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesResidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
