import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoPdfComponent } from './arquivo-pdf.component';

describe('ArquivoPdfComponent', () => {
  let component: ArquivoPdfComponent;
  let fixture: ComponentFixture<ArquivoPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivoPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
