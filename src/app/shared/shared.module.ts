import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from '../components/info/info.component';
import { UpperletterPipe } from '../components/footer/upperletter.pipe';
import { LinkDirective } from '../auth/link.directive';
import { DetailsComponent } from '../components/details/details.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  declarations: [
    SharedComponent,
    InfoComponent,
    UpperletterPipe,
    LinkDirective,
    DetailsComponent,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    DetailsComponent,
    ReactiveFormsModule,
    InfoComponent,
    UpperletterPipe,
    LinkDirective,
  ],
})
export class SharedModule {}
