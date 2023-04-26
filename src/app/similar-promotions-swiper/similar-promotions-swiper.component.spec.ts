import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPromotionsSwiperComponent } from './similar-promotions-swiper.component';

describe('SimilarPromotionsSwiperComponent', () => {
  let component: SimilarPromotionsSwiperComponent;
  let fixture: ComponentFixture<SimilarPromotionsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarPromotionsSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarPromotionsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
