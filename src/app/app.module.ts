import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { FaqaComponent } from './faqa/faqa.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DashboardComponent,
    LoginComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    LegalComponent,
    FaqaComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
