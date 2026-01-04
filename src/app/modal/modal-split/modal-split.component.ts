import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-split',
  templateUrl: './modal-split.component.html',
  styleUrls: ['./modal-split.component.scss']
})
export class ModalSplitComponent {

  constructor(public dialogRef: MatDialogRef<ModalSplitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { status: string , total: string }) { console.log('Modal data:', data); }

  get isOpenStatus(): boolean {
    return this.data.status === 'Open';
  }

  get isClosedStatus(): boolean {
    return this.data.status === 'Closed';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSplitBySeat(): void {
    this.dialogRef.close('Split by Seat');
  }
}
