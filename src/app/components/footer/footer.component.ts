import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FooterLink, FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  earIcon = faPhone;
  footerData: FooterLink[] = [];

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerData = this.footerService.getLinks();
  }
}
