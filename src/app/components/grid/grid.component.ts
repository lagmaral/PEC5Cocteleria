import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef, MatCellDef } from '@angular/material/table';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatHeaderCellDef, MatCellDef],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<string>();

  displayedColumns: string[] = ['thumbnail', 'name', 'description'];
}
