import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesReviewComponent } from './prizes-review.component';

describe('PrizesReviewComponent', () => {
  let component: PrizesReviewComponent;
  let fixture: ComponentFixture<PrizesReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizesReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
