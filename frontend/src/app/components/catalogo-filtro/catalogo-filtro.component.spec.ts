import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoFiltroComponent } from './catalogo-filtro.component';

describe('CatalogoFiltroComponent', () => {
  let component: CatalogoFiltroComponent;
  let fixture: ComponentFixture<CatalogoFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
