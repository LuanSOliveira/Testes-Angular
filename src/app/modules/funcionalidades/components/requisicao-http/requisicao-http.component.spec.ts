import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoHttpComponent } from './requisicao-http.component';

describe('RequisicaoHttpComponent', () => {
  let component: RequisicaoHttpComponent;
  let fixture: ComponentFixture<RequisicaoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisicaoHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicaoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
