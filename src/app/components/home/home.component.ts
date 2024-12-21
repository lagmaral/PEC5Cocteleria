import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from '../card/card.component';
import { GridComponent } from '../grid/grid.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CocktailService } from '../../servicios/cocktail.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule, CardComponent, GridComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]

})

export class HomeComponent implements OnInit {
  cocktails: any[] = [];
  viewMode: 'cards' | 'table' = 'cards';
  loading = true;

  constructor(private cocktailService: CocktailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cocktailService.getCocktailList().subscribe((response: any) => {
      this.cocktails = response.drinks || [];
      this.loading = false;
    });
  }

  toggleView(mode: 'cards' | 'table') {
    this.viewMode = mode;
  }

  navigateToDetail(id: string) {
    this.router.navigate(['/detalle', id]);
  }
}
