import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface OrderItem {
  product: string;
  price: number;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-modal-settle',
  templateUrl: './modal-settle.component.html',
  styleUrls: ['./modal-settle.component.scss']
})
export class ModalSettleComponent {

  orderItems: OrderItem[] = [
    { product: 'Pepperoni', price: 12.99, quantity: 1, total: 12.99 * 1 },
    { product: 'Pepperoni', price: 12.99, quantity: 1, total: 12.99 * 1 },
    { product: 'Pepperoni', price: 12.99, quantity: 1, total: 12.99 * 1 }
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalSettleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTotal(item: OrderItem): void {
    item.total = item.price * item.quantity;
  }
}

