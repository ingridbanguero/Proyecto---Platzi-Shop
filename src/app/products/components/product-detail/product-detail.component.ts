import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductsService} from './../../../core/services/products/products.service';
import {Product} from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      const id = params.id;
      this.fetchProduct(id);
      /* this.product = this.productsService.getProduct(id); */
      console.log(this.product);
    });
  }
  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe( product => {
      this.product = product;
    })
  }

  createProduct(){
    const newProduct: Product = {
      id: "222",
      title: "Nuevo desde angular",
      image: "assets/images/banner-1.jpg",
      price: 30000,
      description: "Nuevo Producto"
    }
    this.productsService.createProduct(newProduct)
    .subscribe( product => {
      console.log(product);
    })
  }
  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 555,
      description: "Edicion titulo"
    }
    this.productsService.updateProduct('222', updateProduct)
    .subscribe( product => {
      console.log(product);
    })
  }
  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    })
  }   
}
