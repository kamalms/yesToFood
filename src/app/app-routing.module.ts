import { FaqaComponent } from './faqa/faqa.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path:'login' ,component:LoginComponent },
  {
    path :'products',
    component: ProductsComponent,
    children:[
      {path:'productlist' , component :ListComponent, outlet:'productlist' },
      {
        path:'addproduct', component: AddProductComponent, outlet:'productlist'
      },
      {path:'dashboard',component:DashboardComponent, outlet:'productlist' },
      {
        path:'about', component: AboutComponent, outlet:'productlist',
      },
      {path:'contact',component:ContactComponent, outlet:'productlist' },
      {
        path:'legal', component: LegalComponent, outlet:'productlist',
      },
      {path:'faqs',component:FaqaComponent, outlet:'productlist' }
    ]
  },
{ path: '', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
