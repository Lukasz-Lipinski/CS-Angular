import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './Home/Home.component';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SigninPageGuard } from './signin/signin.component.guard';
import { CartComponent } from './cart/cart.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { FoundItemsComponent } from './components/found-items/found-items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [SigninPageGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'searcher',
    component: FoundItemsComponent,
  },
  {
    path: ':info',
    component: OtherPageComponent,
  },
  {
    path: ':category/:products',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
