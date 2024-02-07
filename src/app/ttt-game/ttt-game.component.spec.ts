import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TttGameComponent } from './ttt-game.component';

describe('TttGameComponent', () => {
  let component: TttGameComponent;
  let fixture: ComponentFixture<TttGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TttGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TttGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
