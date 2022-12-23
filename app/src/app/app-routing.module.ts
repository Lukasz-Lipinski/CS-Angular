import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './Home/Home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { CategoryComponent } from './category/category.component';
import { InfoComponent } from './components/info/info.component';
import { SigninPageGuard } from './signin/signin.component.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'special-offers', component: SpecialOffersComponent },
  { path: 'contact', component: SpecialOffersComponent },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [SigninPageGuard],
  },
  { path: 'claims', component: SpecialOffersComponent },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: ':info', component: InfoComponent },
  { path: ':category/:products', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
