import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefGameComponent } from './ref-game.component';

describe('RefGameComponent', () => {
  let component: RefGameComponent;
  let fixture: ComponentFixture<RefGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
