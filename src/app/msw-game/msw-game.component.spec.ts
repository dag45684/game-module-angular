import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MswGameComponent } from './msw-game.component';

describe('MswGameComponent', () => {
  let component: MswGameComponent;
  let fixture: ComponentFixture<MswGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MswGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MswGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
