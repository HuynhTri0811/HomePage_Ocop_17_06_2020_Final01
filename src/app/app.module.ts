import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCtaLayoutComponent } from './components/product-cta-layout/product-cta-layout.component';
import { DateFormatPipe } from './settings/dateformatpipe';
import { DateNumberFormatPipe } from './settings/datenumberformatpipe';
import { DateTimeNumberFormatPipe } from './settings/datetimenumberformat';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MainImgSiderComponent } from './components/main-img-sider/main-img-sider.component';
import { DateTimeFormatPipe } from './settings/datetimeformat';
import { ProductHomepageComponent } from './components/product-homepage/product-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCtaLayoutComponent,
    DateTimeNumberFormatPipe,
    DateNumberFormatPipe,
    DateFormatPipe,
    DateTimeFormatPipe,
    ProductDetailComponent,
    MainImgSiderComponent,
    ProductHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
