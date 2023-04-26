import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearSeriesContentComponent } from './new-year-series-content.component';

describe('NewYearSeriesContentComponent', () => {
  let component: NewYearSeriesContentComponent;
  let fixture: ComponentFixture<NewYearSeriesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYearSeriesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearSeriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
