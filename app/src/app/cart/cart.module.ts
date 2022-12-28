import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { ChosenProductComponent } from './chosen-product/chosen-product.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CartComponent, ChosenProductComponent, CounterComponent],
  imports: [SharedModule],
})
export class CartModule {}
