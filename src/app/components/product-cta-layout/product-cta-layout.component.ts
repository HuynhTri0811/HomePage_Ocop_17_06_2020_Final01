import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-cta-layout',
  templateUrl: './product-cta-layout.component.html',
  styleUrls: ['./product-cta-layout.component.css']
})
export class ProductCtaLayoutComponent implements OnInit {

  @Input('typeCta')
  typeCta = 'alt';


  @Input('layoutSize')
  layoutSize = 'medium';


  constructor() { }

  ngOnInit() {
  }

}
