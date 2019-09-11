import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shabuk/login/login.component';
import { HomeComponent } from './shabuk/home/home.component';
import { RegistryComponent } from './shabuk/registry/registry.component';
import { HeaderComponent } from './shabuk/header/header.component';
import { FooterComponent } from './shabuk/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './shabuk/profile/profile.component';
import {MatFormFieldModule, MatStepperModule} from '@angular/material';
import { EditCreateBookComponent } from './shabuk/edit-create-book/edit-create-book.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { BookCardComponent } from './shabuk/profile/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistryComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EditCreateBookComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
