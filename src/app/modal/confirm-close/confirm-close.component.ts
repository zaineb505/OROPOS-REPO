import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-close',
  templateUrl: './confirm-close.component.html',
  styleUrl: './confirm-close.component.scss'
})
export class ConfirmCloseComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmCloseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
