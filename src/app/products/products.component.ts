import { Component,OnInit } from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './products.services'; 
import {Location} from '@angular/common';

@Component({
    selector: 'prod-comp', 
    templateUrl: './products.component.html',   
    styleUrls: ['./products.component.css']
})

export class ProductComponent implements OnInit{
    title:string="TV SHOWS";
    showButton=false;
    filterProducts="Silicon Valley";
    products:IProduct;
    imgWidth=50;
    errorMessage:string;
    average:number;
    toggleBtn():void{
        this.showButton=!this.showButton;
    }
    onRatingClicked(message:string):void{
        this.title="Product List ......" +message;
    }

    constructor(private _productService:ProductService){} 
     ngOnInit():void{

        this._productService.getProducts(this.filterProducts).subscribe(data => {this.products = data; 
            console.log('data',this.products)});
     }
     
    
    goToSearch(filterProducts){
        
        this._productService.getProducts(this.filterProducts)
        .subscribe(data => {this.products = data; 
            console.log('data',this.products)});
            
        }      
        getTotal() {
            let total = 0;
            for (var i = 0; i < this.products.Episodes.length; i++) {
                if (this.products.Episodes[i].imdbRating) {
                    total =total+Number(this.products.Episodes[i].imdbRating);
                }
            }
            let totalaverage = (total/Number(this.products.Episodes.length));
            this.average = totalaverage;
            return totalaverage;
        }

        


}