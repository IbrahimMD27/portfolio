import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelMa } from './level-ma';

describe('LevelMa', () => {
  let component: LevelMa;
  let fixture: ComponentFixture<LevelMa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelMa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelMa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
