import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BlogpostModule }  from './blogpost/blogpost.module';
import { CmspageModule } from './cmspage/cmspage.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogpostModule,
    CmspageModule,
    AppRoutingModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
