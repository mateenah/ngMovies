import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/products.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    
    ProductModule,
    HttpClientModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
     
      {path:'', redirectTo:'products', pathMatch:'full'},
      
      
    ])
    
  ],
  declarations: [
    AppComponent,
   
  ],
  bootstrap: [AppComponent],
  providers:[
  ]
})
export class AppModule { }
