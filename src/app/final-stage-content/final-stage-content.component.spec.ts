import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStageContentComponent } from './final-stage-content.component';

describe('FinalStageContentComponent', () => {
  let component: FinalStageContentComponent;
  let fixture: ComponentFixture<FinalStageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalStageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
