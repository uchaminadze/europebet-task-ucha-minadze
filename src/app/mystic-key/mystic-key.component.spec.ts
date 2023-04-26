import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticKeyComponent } from './mystic-key.component';

describe('MysticKeyComponent', () => {
  let component: MysticKeyComponent;
  let fixture: ComponentFixture<MysticKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysticKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysticKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
