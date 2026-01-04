import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOrderModalComponent } from './transfer-order-modal.component';

describe('TransferOrderModalComponent', () => {
  let component: TransferOrderModalComponent;
  let fixture: ComponentFixture<TransferOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
