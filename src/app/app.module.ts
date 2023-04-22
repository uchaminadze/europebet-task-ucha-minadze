import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RulesComponent } from './rules/rules.component';
import { RulesConditionsComponent } from './rules-conditions/rules-conditions.component';

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
    RulesComponent,
    RulesConditionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
