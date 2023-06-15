import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaVisualComponent } from './alerta-visual.component';

describe('AlertaVisualComponent', () => {
  let component: AlertaVisualComponent;
  let fixture: ComponentFixture<AlertaVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
