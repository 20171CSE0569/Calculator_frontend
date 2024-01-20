import { Component, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.css'
})
export class HistoryTableComponent {
  calculations!: any[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['serialNumber', 'expression', 'result'];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getAllCalculations().subscribe(data => {
      this.calculations = data;
      this.dataSource = new MatTableDataSource<any>(this.calculations);
    });
  }

}
