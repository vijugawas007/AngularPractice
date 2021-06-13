import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserserviceService } from 'src/app/services/userservice.service';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule}  from '@angular/common/http';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { GalleryComponent } from './gallery/gallery.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    ViewusersComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }