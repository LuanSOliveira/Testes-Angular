import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoComponenteComponent } from './descricao-componente.component';

describe('DescricaoComponenteComponent', () => {
  let component: DescricaoComponenteComponent;
  let fixture: ComponentFixture<DescricaoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
