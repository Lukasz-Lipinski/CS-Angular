import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthSubcategoryComponent } from './auth/auth-subcategory/auth-subcategory.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './Home/Home.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AdvertComponent } from './components/advert/advert.component';
import { SigninModule } from './signin/signin.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { SigninPageGuard } from './signin/signin.component.guard';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    FooterComponent,
    SpecialOffersComponent,
    AuthSubcategoryComponent,
    AdvertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SigninModule,
    CategoryModule,
    SharedModule,
  ],
  providers: [SigninPageGuard, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
