import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofGameComponent } from './cof-game.component';

describe('CofGameComponent', () => {
  let component: CofGameComponent;
  let fixture: ComponentFixture<CofGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
