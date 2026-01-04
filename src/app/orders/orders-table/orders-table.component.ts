import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements AfterViewInit {
  @Output() rowSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() orderClosed: EventEmitter<string> = new EventEmitter<string>();

  @Input() closeOrderId: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = ['Id', 'Token', 'Server', 'Created', 'Customer', 'Dadress', 'Ddate', 'Type', 'Status', 'Total', 'Due'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.loadOrders());
  selectedRowId: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadOrders(): PeriodicElement[] {
    if (typeof localStorage !== 'undefined') {
      const storedOrders = localStorage.getItem('orders');
      return storedOrders ? JSON.parse(storedOrders) : ELEMENT_DATA;
    }
    return ELEMENT_DATA;
  }

  saveOrders(orders: PeriodicElement[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(Id: string) {
    this.selectedRowId = Id;
    this.rowSelected.emit(Id);
  }

  isRowSelected(id: string): boolean {
    return this.selectedRowId === id;
  }

  closeOrder(Id: string) {
    const order = this.dataSource.data.find(order => order.Id === Id);
    if (order) {
      order.Status.Closed = 'Closed';
      delete order.Status.Open;
      this.dataSource.data = [...this.dataSource.data];
      this.saveOrders(this.dataSource.data);
      this.orderClosed.emit(Id);
    }
  }

  transferOrder(Id: string, newServer: string) {
    const order = this.dataSource.data.find(order => order.Id === Id);
    if (order) {
      order.Server = newServer;
      this.dataSource.data = [...this.dataSource.data];
      this.saveOrders(this.dataSource.data);
    }
  }

}

export interface PeriodicElement {
  Id: string;
  Token: string;
  Server: string;
  Created: string;
  Customer: string;
  Dadress: string;
  Ddate: string;
  Type: string;
  Status: {
    Open?: string;
    Closed?: string;
  };
  Total: string;
  Due: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Id: 'A3651', Token: '5', Server: 'John', Created: '12:30 PM', Customer: 'Guest', Dadress: '', Ddate: '12/06/2024', Type: 'All',
    Status: {
      Open: 'Open'
    },
    Total: '8.3', Due: '8.3'
  },

  {
    Id: 'A3652', Token: '2', Server: 'Adam', Created: '12:45 PM', Customer: 'Guest', Dadress: '', Ddate: '12/06/2024', Type: 'Pizza ++', Status: {
      Open: 'Open'
    },
    Total: '12.99', Due: '12.99'
  },
  {
    Id: 'A3653', Token: '6', Server: 'David', Created: '13:00 PM', Customer: 'Guest', Dadress: '', Ddate: '12/06/2024', Type: 'Delivery & Pick Up', Status: {
      Closed: 'Closed'
    },
    Total: '24.99', Due: '24.99'
  },
  {
    Id: 'A3654', Token: '1', Server: 'Sophia', Created: '16:00 PM', Customer: 'Guest', Dadress: '', Ddate: '12/06/2024', Type: 'All', Status: {
      Closed: 'Closed'
    },
    Total: '8.3', Due: '8.3'
  },




];
