import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadesFilhoComponent } from './propriedades-filho.component';

describe('PropriedadesFilhoComponent', () => {
  let component: PropriedadesFilhoComponent;
  let fixture: ComponentFixture<PropriedadesFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadesFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropriedadesFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
