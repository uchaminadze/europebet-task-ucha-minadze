import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsSatellitesComponent } from './tournaments-satellites.component';

describe('TournamentsSatellitesComponent', () => {
  let component: TournamentsSatellitesComponent;
  let fixture: ComponentFixture<TournamentsSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsSatellitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentsSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
