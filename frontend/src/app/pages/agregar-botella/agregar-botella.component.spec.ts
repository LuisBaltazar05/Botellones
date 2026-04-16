import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBotellaComponent } from './agregar-botella.component';

describe('AgregarBotellaComponent', () => {
  let component: AgregarBotellaComponent;
  let fixture: ComponentFixture<AgregarBotellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarBotellaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarBotellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
