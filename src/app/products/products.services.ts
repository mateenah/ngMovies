import {Injectable} from '@angular/core';
import {IProduct} from './products';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { ProductComponent } from './products.component';

@Injectable()
export class ProductService{
    
    text ="Silicon%20Valley";
    public _productUrl="https://www.omdbapi.com/?t="+this.text+"&Season=1&apikey=a1ed6d26";
    
    constructor(private _http:Http){
        
    }

    getProducts(filterProducts):Observable<IProduct>{
        this.text=filterProducts;
        return this._http.get("https://www.omdbapi.com/?t="+this.text+"&Season=1&apikey=a1ed6d26")
                .map((response:Response) => <IProduct> response.json())
                .catch(this.handleError);
    }
    
    private handleError(error:Response) {
        return Observable.throw(error.json().error || "Server error----")
    }
    
}

