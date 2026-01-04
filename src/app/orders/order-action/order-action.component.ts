import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../../modal/modal-info/modal-info.component';
import { ModalSettleComponent } from '../../modal/modal-settle/modal-settle.component';
import { OrdersTableComponent } from '../orders-table/orders-table.component';
import { ConfirmCloseComponent } from '../../modal/confirm-close/confirm-close.component';  // Adjust the path accordingly
import { TransferOrderModalComponent } from '../../modal/transfer-order-modal/transfer-order-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-order-action',
  templateUrl: './order-action.component.html',
  styleUrls: ['./order-action.component.scss']
})
export class OrderActionComponent {
  @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() orders: any[] = [];
  @ViewChild(OrdersTableComponent) ordersTable!: OrdersTableComponent;
  selectedRowId: string | null = null;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  onRowSelected(Id: string): void {
    this.selectedRowId = Id;
  }

  openDialog(): void {
    if (this.selectedRowId) {
      const dialogRef = this.dialog.open(ModalInfoComponent, {
        width: '300px',
        data: { id: this.selectedRowId }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      alert('No row selected');
    }
  }

  openModalSettle(): void {
    if (this.selectedRowId) {
      const dialogRef = this.dialog.open(ModalSettleComponent, {
        width: '90%',
        height: '100%',
        maxWidth: '100%',
        data: { id: this.selectedRowId }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The settle dialog was closed');
      });
    } else {
      alert('No row selected');
    }
  }

  closeOrder(): void {
    if (this.selectedRowId) {
      const dialogRef = this.dialog.open(ConfirmCloseComponent, {
        width: '300px',
        data: { message: 'Are you sure you want to close this order?' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.ordersTable.closeOrder(this.selectedRowId!);
        }
      });
    } else {
      alert('No row selected');
    }
  }

  transferOrder(): void {
    if (this.selectedRowId) {
      // Utilisez MatDialog pour afficher une fenêtre de confirmation personnalisée
      const dialogRef = this.dialog.open(ConfirmCloseComponent, {
        width: '300px',
        data: { message: 'Are you sure you want to transfer this order?' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const dialogRef = this.dialog.open(TransferOrderModalComponent, {
            width: '400px',
            data: { dataSource: this.ordersTable.dataSource.data } // Pass the dataSource correctly
          });

          dialogRef.afterClosed().subscribe(selectedServer => {
            if (selectedServer) {
              this.ordersTable.transferOrder(this.selectedRowId!, selectedServer);
              this.snackBar.open('Order transferred successfully!', 'Close', { duration: 2000 });
            }
          });
        }
      });
    } else {
      // Remplacer l'alerte 'No row selected' par une fenêtre HTML
      alert('No row selected');

    }
  }

  onTabChange(event: any) {
    let filterValue = '';
    switch (event.index) {
      case 0:
        filterValue = 'Order Info';
        break;
      case 1:
        filterValue = 'Edit';
        break;
      case 2:
        filterValue = 'Send';
        break;
      case 3:
        filterValue = 'Settle';
        break;
      case 4:
        filterValue = 'Split';
        break;
      case 5:
        filterValue = 'Close Order';
        break;
    }
    this.tabChanged.emit(filterValue);
  }
}
