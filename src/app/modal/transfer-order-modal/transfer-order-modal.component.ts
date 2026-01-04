import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-order-modal',
  templateUrl: './transfer-order-modal.component.html',
  styleUrl: './transfer-order-modal.component.scss'
})

export class TransferOrderModalComponent {
  servers: string[] = ['John', 'Adam', 'Sophia', 'David']; // Liste des serveurs
  selectedServer: string | null = null;
  displayedColumns: string[] = ['serverName']; // Nom de la colonne pour le tableau

  constructor(
    public dialogRef: MatDialogRef<TransferOrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  selectServer(server: string): void {
    this.selectedServer = server;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
