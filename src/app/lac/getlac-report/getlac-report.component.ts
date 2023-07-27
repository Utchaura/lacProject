import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditlacComponent } from '../editlac/editlac.component';
import { MatDialog } from '@angular/material/dialog';
import { UserData } from 'src/app/model/UserData';
import { LacService } from 'src/app/services/lac.service';


@Component({
  selector: 'app-getlac-report',
  templateUrl: './getlac-report.component.html',
  styleUrls: ['./getlac-report.component.scss']
})

export class GetlacReportComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color','action'];
  dataSource: MatTableDataSource<UserData>;
  userdatas: UserData[] = [];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(public dialog: MatDialog,private lacservice:LacService) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//using for sorting and paginatior;->
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
//using for filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

//geyt all data by
  // getalldata(){
  // this.lacservice.getAll().subscribe((data:UserData[])=>{
  //   console.log(data);
  //   this.userdatas=data;
  // });




  openEditForm(row:any){}

  //using for pdf gemreated==>
     exportToPDF() {
//    this.exportService.generatePDF(this.userdatas, 'example');
}



  openPopup(): void {
    const dialogRef = this.dialog.open(EditlacComponent, {

      data: { /* You can pass data to the popup if needed */ }
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };



}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];









// //using for pdf
// exportToPDF() {
//   // this.exportService.generatePDF(this.users, 'example');
// }
//
