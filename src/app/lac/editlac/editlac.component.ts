import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editlac',
  templateUrl: './editlac.component.html',
  styleUrls: ['./editlac.component.scss']
})
export class EditlacComponent {

  displayedColumns: string[] = ['id', 'name', 'progress', 'colour'];
  dataSource: any;

  editRow(element: any): void {
    element.editable = true;
  }

  saveRow(element: any): void {
    element.editable = false;
  }

  cancelEdit(element: any): void {
    // Restore the original data before editing
    const originalData = this.dataSource.find((item: { id: any; }) => item.id === element.id);
    element.name = originalData.name;
    element.progress = originalData.progress;
    element.colour = originalData.colour;
    element.editable = false;
  }
}
