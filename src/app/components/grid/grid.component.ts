import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef, MatCellDef } from '@angular/material/table';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatHeaderCellDef, MatCellDef],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  animations: [
    trigger('tableAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('100ms', [
              animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class GridComponent {
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<string>();

  displayedColumns: string[] = ['thumbnail', 'name', 'description'];
}
