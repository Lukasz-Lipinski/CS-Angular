import { AdvertService } from './advert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  title: string = '';
  description: string = '';

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.title = this.advertService.downloadAdverts().title;
    this.description = this.advertService.downloadAdverts().description;
  }

}
