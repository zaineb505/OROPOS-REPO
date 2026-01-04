import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-split-number-modal',
  templateUrl: './split-number-modal.component.html',
  styleUrls: ['./split-number-modal.component.scss']
})
export class SplitNumberModalComponent {
  splitNumber: number = 0;

  constructor(public dialogRef: MatDialogRef<SplitNumberModalComponent>) {}

  decrementSplitNumber(): void {
    this.splitNumber = Math.max(0, this.splitNumber - 1);
  }

  incrementSplitNumber(): void {
    this.splitNumber += 1;
  }

  appendNumber(num: number): void {
    this.splitNumber = parseInt(`${this.splitNumber}${num}`);
  }

  onClear(): void {
    this.splitNumber = 0;
  }

  onOk(): void {
    this.dialogRef.close(this.splitNumber);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
