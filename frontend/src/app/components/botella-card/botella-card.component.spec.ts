import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotellaCardComponent } from './botella-card.component';

describe('BotellaCardComponent', () => {
  let component: BotellaCardComponent;
  let fixture: ComponentFixture<BotellaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotellaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotellaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
