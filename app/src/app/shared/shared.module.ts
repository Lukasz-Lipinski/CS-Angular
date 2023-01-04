import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from '../components/info/info.component';
import { UpperletterPipe } from '../components/footer/upperletter.pipe';
import { LinkDirective } from '../auth/link.directive';
import { DetailsComponent } from '../components/details/details.component';
import { ParagraphComponent } from '../components/paragraph/paragraph.component';
import { ListPipe } from '../other-page/ListPipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InfoComponent,
    UpperletterPipe,
    LinkDirective,
    DetailsComponent,
    ParagraphComponent,
    ListPipe,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    DetailsComponent,
    ReactiveFormsModule,
    InfoComponent,
    ParagraphComponent,
    ListPipe,
    UpperletterPipe,
    LinkDirective,
  ],
})
export class SharedModule {}
