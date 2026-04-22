import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rit } from './rit';

describe('Rit', () => {
  let component: Rit;
  let fixture: ComponentFixture<Rit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rit],
    }).compileComponents();

    fixture = TestBed.createComponent(Rit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
