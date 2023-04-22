import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusLinkComponent } from './bonus-link.component';

describe('BonusLinkComponent', () => {
  let component: BonusLinkComponent;
  let fixture: ComponentFixture<BonusLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
