import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitResultModalComponent } from './split-result-modal.component';

describe('SplitResultModalComponent', () => {
  let component: SplitResultModalComponent;
  let fixture: ComponentFixture<SplitResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitResultModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
