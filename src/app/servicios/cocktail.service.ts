import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

  constructor(private http: HttpClient) {}


  getCocktailList() {
    return this.http.get(`${this.baseUrl}?f=a`);
  }

  getCocktailById(id: string) {
    return this.http.get(`${this.baseUrl}?s=${id}`);
  }
}
