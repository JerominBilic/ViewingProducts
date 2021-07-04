import { Component, OnInit } from '@angular/core';
import { GetproductsService } from 'src/app/services/getproducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  stationary:any = [];

 
  constructor(private service: GetproductsService) {

    this.stationary = service.getProducts();
  }

  ngOnInit(): void {
  }
}