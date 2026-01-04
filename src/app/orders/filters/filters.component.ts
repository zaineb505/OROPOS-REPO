import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],

})
export class FiltersComponent {

  @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();

  onTabChange(event: any) {
    let filterValue = '';
    switch (event.index) {
      case 0:
        filterValue = 'All';
        break;
      case 1:
        filterValue = 'Pizza ++';
        break;
      case 2:
        filterValue = 'Delivery & Pick Up';
        break;
    }
    this.tabChanged.emit(filterValue);
  }
}
