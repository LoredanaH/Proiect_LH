import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdusService {

  products: any[]=[];
  cartSubject: any;

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('assets/data.json');
  }

  getProduct(){
    return this.products
  }

  saveCart(){
    localStorage.setItem('cart_items', JSON.stringify(this.products))
  }

  addToCart(addedProduct:any){

    this.products.push(addedProduct)
    this.saveCart();
  }

  loadCart(){
    this.products=JSON.parse(localStorage.getItem('cart_items') as any)|| [];
  }

  productsInCart(product: any){
    return this.products.findIndex((x:any)=>x.id===product.id) > -1
  }

  removeProduct(product: any){
    const index =this.products.findIndex((x:any)=>x.id===product.id)

    if(index>-1){
      this.products.splice(index,1);
      this.saveCart()
    }
  }

  clearProducts(){
    localStorage.clear();
  }

  getElementById(product:any){
    return product.id;
    
  }

}
