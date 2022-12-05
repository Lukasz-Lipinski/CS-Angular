import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryTieComponent } from './category-tie/category-tie.component';
import { CategoryComponent } from './category.component';
import { FilteringMenuComponent } from './filtering-menu/filtering-menu.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryTieComponent,
    FilteringMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
})
export class CategoryModule {}
