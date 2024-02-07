import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprGameComponent } from './spr-game.component';

describe('SprGameComponent', () => {
  let component: SprGameComponent;
  let fixture: ComponentFixture<SprGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
