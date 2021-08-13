//import { Product } from './../../Models/Product';
import { ProductResponseModel } from "./../../Models/productResponseModel";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/Models/Product";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  // fake data
  products: Product[] = [];
  apiUrl = "https://localhost:44327/api/Products/getall";
  // productResponseModel:ProductResponseModel={
  //   data: this.products,
  //   message:"",
  //   success:true
  // };

  // injection hazır olarak geliyor
  constructor(private HttpClient: HttpClient) {}

  // component açıldığında çalışan ilk metot
  ngOnInit(): void {
    this.getProducts();
  }
  // postman de yaptığımız get post metotları gibi burası
  getProducts() {
    this.HttpClient.get<ProductResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.products = response.data;
      }
    );
  }
}
