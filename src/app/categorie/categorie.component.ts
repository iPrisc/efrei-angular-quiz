import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categorie/categories.service';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  categories: any[] = this.categoriesService.categories;
  filteredCategories: any[] = [];

  constructor(private categoriesService: CategoriesService) {}

  filterResults(text: string) {
    if (!text) {
      this.filteredCategories = this.categories;
      return;
    }

    const query = text.toLowerCase();
    this.filteredCategories = this.categories.filter(
      category => category?.category?.toLowerCase().includes(query)
    );
  }
  ngOnInit(): void {
    this.categoriesService.getCategories();
    this.filteredCategories = this.categories;
  }

}
