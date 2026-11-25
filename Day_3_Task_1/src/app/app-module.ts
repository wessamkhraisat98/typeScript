import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Footer } from './footer/footer';
import { ShpopingCart } from './shpoping-cart/shpoping-cart';

@NgModule({
  declarations: [App, Header, Navbar, ProductList, ProductDetails, Footer, ShpopingCart],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
