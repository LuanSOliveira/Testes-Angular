import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyCardComponent } from './on-destroy-card.component';

describe('OnDestroyCardComponent', () => {
  let component: OnDestroyCardComponent;
  let fixture: ComponentFixture<OnDestroyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDestroyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDestroyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
