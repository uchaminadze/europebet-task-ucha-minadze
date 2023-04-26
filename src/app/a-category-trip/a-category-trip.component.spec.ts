import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACategoryTripComponent } from './a-category-trip.component';

describe('ACategoryTripComponent', () => {
  let component: ACategoryTripComponent;
  let fixture: ComponentFixture<ACategoryTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACategoryTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACategoryTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
