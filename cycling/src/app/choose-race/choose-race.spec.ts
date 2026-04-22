import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRace } from './choose-race';

describe('ChooseRace', () => {
  let component: ChooseRace;
  let fixture: ComponentFixture<ChooseRace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseRace],
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseRace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
