import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBotellaComponent } from './detalle-botella.component';

describe('DetalleBotellaComponent', () => {
  let component: DetalleBotellaComponent;
  let fixture: ComponentFixture<DetalleBotellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleBotellaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleBotellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
