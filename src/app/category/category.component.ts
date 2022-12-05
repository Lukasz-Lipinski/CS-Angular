import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../components/advert/advert.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (value: Params) => {
        const { category, products } = value;
        this.products$ = this.categoryService.getProducts(category, products);
      },
    });
  }
}
