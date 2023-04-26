import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { CashGamesContentComponent } from './cash-games-content/cash-games-content.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { PrizesReviewComponent } from './prizes-review/prizes-review.component';
import { BonusLinkComponent } from './bonus-link/bonus-link.component';
import { BonusInfoComponent } from './bonus-info/bonus-info.component';
import { RulesConditionsComponent } from './rules-conditions/rules-conditions.component';
import { SimilarPromotionsSwiperComponent } from './similar-promotions-swiper/similar-promotions-swiper.component';
import { NewYearSeriesContentComponent } from './new-year-series-content/new-year-series-content.component';
import { FinalStageContentComponent } from './final-stage-content/final-stage-content.component';
import { TournamentsSatellitesComponent } from './tournaments-satellites/tournaments-satellites.component';
import { EverydayTournamentsSatellitesComponent } from './everyday-tournaments-satellites/everyday-tournaments-satellites.component';
import { FinalStageInfoComponent } from './final-stage-info/final-stage-info.component';
import { ACategoryTripComponent } from './a-category-trip/a-category-trip.component';
import { ThirtyAprilTournamentsComponent } from './thirty-april-tournaments/thirty-april-tournaments.component';
import { MysticKeyComponent } from './mystic-key/mystic-key.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    CashGamesContentComponent,
    CustomTableComponent,
    PrizesReviewComponent,
    BonusLinkComponent,
    BonusInfoComponent,
    RulesConditionsComponent,
    SimilarPromotionsSwiperComponent,
    NewYearSeriesContentComponent,
    FinalStageContentComponent,
    TournamentsSatellitesComponent,
    EverydayTournamentsSatellitesComponent,
    FinalStageInfoComponent,
    ACategoryTripComponent,
    ThirtyAprilTournamentsComponent,
    MysticKeyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
