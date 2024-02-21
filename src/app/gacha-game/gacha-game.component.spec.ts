import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaGameComponent } from './gacha-game.component';

describe('GachaGameComponent', () => {
  let component: GachaGameComponent;
  let fixture: ComponentFixture<GachaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GachaGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GachaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
