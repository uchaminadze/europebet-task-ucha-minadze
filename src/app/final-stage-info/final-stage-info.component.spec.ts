import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStageInfoComponent } from './final-stage-info.component';

describe('FinalStageInfoComponent', () => {
  let component: FinalStageInfoComponent;
  let fixture: ComponentFixture<FinalStageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalStageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
