import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CocktailService } from '../../servicios/cocktail.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatTreeModule,
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  entity: any; // Data of the entity (character details).
  showDetails = false; // To toggle additional details.
  ingredients: { ingredient: string; measure: string }[] = [];
  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCharacterDetails(id);
    }
  }

  fetchCharacterDetails(id: string) {
    this.cocktailService.getCocktailById(id).subscribe((response: any) => {
      this.entity = response.drinks[0];
      this.extractIngredients();
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  extractIngredients(): void {
    this.ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.entity[`strIngredient${i}`];
      const measure = this.entity[`strMeasure${i}`];
      if (ingredient) {
        this.ingredients.push({ ingredient, measure: measure || '' });
      }
    }
  }

}


