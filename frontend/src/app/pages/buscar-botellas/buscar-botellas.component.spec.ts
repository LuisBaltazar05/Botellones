import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarBotellasComponent } from './buscar-botellas.component';

describe('BuscarBotellasComponent', () => {
  let component: BuscarBotellasComponent;
  let fixture: ComponentFixture<BuscarBotellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarBotellasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarBotellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
