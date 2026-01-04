import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitNumberModalComponent } from './split-number-modal.component';

describe('SplitNumberModalComponent', () => {
  let component: SplitNumberModalComponent;
  let fixture: ComponentFixture<SplitNumberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitNumberModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitNumberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
