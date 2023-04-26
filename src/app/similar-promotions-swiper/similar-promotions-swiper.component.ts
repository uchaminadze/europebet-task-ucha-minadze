import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-similar-promotions-swiper',
  templateUrl: './similar-promotions-swiper.component.html',
  styleUrls: ['./similar-promotions-swiper.component.css']
})
export class SimilarPromotionsSwiperComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 13,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2.2,
        merge: true
      },
      740: {
        items: 3
      },
      800: {
        items: 3.65,
        merge: true
      }
    },
    nav: false
  }
}
