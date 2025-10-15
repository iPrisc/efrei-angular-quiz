import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: any[] = [];
  constructor(private http: HttpClient) { }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const category of categories) {
          this.http.get(`http://localhost:3000/categories?id=${category.id}`).subscribe((questions: any) => {
            this.categories.push({
            id: category.id,
            category: category.category,
          });
        });
      }
    });
  }

}
