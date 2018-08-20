import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProductComponent } from './products.component';
import { ProductService } from './products.services';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule,
        
        RouterModule.forChild([   
            {path:'products', component:ProductComponent},
          ])
    ],
    declarations:[
        ProductComponent
    ],
    providers:[
        ProductService,
      ]
})

export class ProductModule{

}