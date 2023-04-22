import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusInfoComponent } from './bonus-info.component';

describe('BonusInfoComponent', () => {
  let component: BonusInfoComponent;
  let fixture: ComponentFixture<BonusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
