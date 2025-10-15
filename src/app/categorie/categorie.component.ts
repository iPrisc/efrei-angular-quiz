import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categorie/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  categories: any[] = this.categoriesService.categories;
  filteredCategories: any[] = [];

  constructor(private categoriesService: CategoriesService, private router: Router) {}

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

  navigateToQuizCat(id: number) {
    console.log(id)
    this.router.navigate(['/quiz/', id]);
  }

}
