import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-split-result-modal',
  templateUrl: './split-result-modal.component.html',
  styleUrls: ['./split-result-modal.component.scss']
})
export class SplitResultModalComponent {
  tickets: { amount: number }[];

  constructor(
    public dialogRef: MatDialogRef<SplitResultModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { total: number, splits: number }
  ) {
    this.tickets = this.generateTickets(data.total, data.splits);
  }

  generateTickets(total: number, splits: number): { amount: number }[] {
    const amountPerSplit = total / splits;
    return Array(splits).fill({ amount: amountPerSplit });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
