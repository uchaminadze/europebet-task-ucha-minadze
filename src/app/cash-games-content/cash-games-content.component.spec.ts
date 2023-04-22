import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashGamesContentComponent } from './cash-games-content.component';

describe('CashGamesContentComponent', () => {
  let component: CashGamesContentComponent;
  let fixture: ComponentFixture<CashGamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashGamesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashGamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
