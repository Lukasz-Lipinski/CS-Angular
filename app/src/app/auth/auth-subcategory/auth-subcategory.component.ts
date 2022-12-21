import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-subcategory',
  templateUrl: './auth-subcategory.component.html',
  styleUrls: ['./auth-subcategory.component.css']
})
export class AuthSubcategoryComponent implements OnInit {
  @Input() category!: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get subcategories(): string[] {
    return this.authService.subcategories[this.category];
  }

}
