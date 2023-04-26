import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyAprilTournamentsComponent } from './thirty-april-tournaments.component';

describe('ThirtyAprilTournamentsComponent', () => {
  let component: ThirtyAprilTournamentsComponent;
  let fixture: ComponentFixture<ThirtyAprilTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtyAprilTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirtyAprilTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
