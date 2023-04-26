import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverydayTournamentsSatellitesComponent } from './everyday-tournaments-satellites.component';

describe('EverydayTournamentsSatellitesComponent', () => {
  let component: EverydayTournamentsSatellitesComponent;
  let fixture: ComponentFixture<EverydayTournamentsSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverydayTournamentsSatellitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverydayTournamentsSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
