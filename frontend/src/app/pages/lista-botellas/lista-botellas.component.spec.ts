import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBotellasComponent } from './lista-botellas.component';

describe('ListaBotellasComponent', () => {
  let component: ListaBotellasComponent;
  let fixture: ComponentFixture<ListaBotellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBotellasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBotellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
