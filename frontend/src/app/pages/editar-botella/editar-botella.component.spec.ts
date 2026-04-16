import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBotellaComponent } from './editar-botella.component';

describe('EditarBotellaComponent', () => {
  let component: EditarBotellaComponent;
  let fixture: ComponentFixture<EditarBotellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarBotellaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBotellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
