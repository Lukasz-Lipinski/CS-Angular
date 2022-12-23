import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { ChosenProductComponent } from './chosen-product/chosen-product.component';

@NgModule({
  declarations: [CartComponent, ChosenProductComponent],
  imports: [SharedModule],
})
export class CartModule {}
