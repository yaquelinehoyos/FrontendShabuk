import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './shabuk/login/login.component';
import {HomeComponent} from './shabuk/home/home.component';
import {RegistryComponent} from './shabuk/registry/registry.component';
import {HeaderComponent} from './shabuk/header/header.component';
import {FooterComponent} from './shabuk/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './shabuk/profile/profile.component';
import {MatFormFieldModule, MatStepperModule, MatButtonModule, MatSnackBarModule} from '@angular/material';
import {EditCreateBookComponent} from './shabuk/edit-create-book/edit-create-book.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UserBookCardComponent} from './shabuk/library/user-book-card/user-book-card.component';
import {LibraryComponent} from './shabuk/library/library.component';
import {BasicAuthInterceptor} from './shared/service/auth/basic-auth.interceptor';
import {ErrorInterceptor} from './http-error.interceptor';
import {SuccessInterceptor} from './http-success.interceptor';
import { BookCardComponent } from './shabuk/home/book-card/book-card.component';

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
    UserBookCardComponent,
    BookCardComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
