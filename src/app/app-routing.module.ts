import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from './shabuk/login/login.component';
import {RegistryComponent} from './shabuk/registry/registry.component';
import {HomeComponent} from './shabuk/home/home.component';
import {ProfileComponent} from './shabuk/profile/profile.component';
import {EditCreateBookComponent} from './shabuk/edit-create-book/edit-create-book.component';
import { LibraryComponent } from './shabuk/library/library.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'edit-create-book', component: EditCreateBookComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
