import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './Home/Home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'special-offers', component: SpecialOffersComponent},
  { path: 'contact', component: SpecialOffersComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'claims', component: SpecialOffersComponent},
  { path: 'cart', component: SpecialOffersComponent},
  { path: ':category/:products', component: SpecialOffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }