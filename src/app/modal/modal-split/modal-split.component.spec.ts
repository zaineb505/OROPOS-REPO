import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSplitComponent } from './modal-split.component';

describe('ModalSplitComponent', () => {
  let component: ModalSplitComponent;
  let fixture: ComponentFixture<ModalSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
