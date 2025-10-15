import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categorie/categories.service';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}
  
  ngOnInit(): void {
    this.categoriesService.getCategories();
  }
}
