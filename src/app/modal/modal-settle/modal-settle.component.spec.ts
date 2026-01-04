import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSettleComponent } from './modal-settle.component';

describe('ModalSettleComponent', () => {
  let component: ModalSettleComponent;
  let fixture: ComponentFixture<ModalSettleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSettleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
