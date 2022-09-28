import { AdvertService } from './advert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  adverts: any[] = [];
  index: number = 1;
  change: boolean = false;

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.adverts = this.advertService.downloadAdverts();
  };

  changeAdvert(advert: "next" | "previous") {
    this.change = true;

    setTimeout(
      () => {
        this.change = false;
        if (advert === "next" && this.index < this.adverts.length-1 ) {
          this.index++;
        } else if (advert === "previous" && this.index > 0) {
          this.index--;
        };
        console.log(this.index);
      }, 500
      
      );
    
  };

  

}
