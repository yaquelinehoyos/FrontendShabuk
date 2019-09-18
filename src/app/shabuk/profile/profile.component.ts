import { Component, OnInit } from '@angular/core';
import { DummyService } from '../shared/service/dummy.service';
import { Router } from '@angular/router';
import {Book} from '../../shared/model/book.model'
import { BookService } from '../../shared/service/book.service';
import { AuthenticationService } from '../../shared/service/auth/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userEmail:String;
  constructor(private bookService:BookService, private router:Router, public authenticationService: AuthenticationService) {
    
   }

  localBooks:Book[]=[];
  publicBooks:Book[]=[];

  ngOnInit() {
      this.userEmail=this.authenticationService.currentUserValue.email;
      this.bookService.getUserLocalBooks().subscribe(x=>this.localBooks=x);
      this.bookService.getUserPublicBooks().subscribe(x=>this.publicBooks=x);
  }

  editBook(book){
    console.log("edit book",book);
    this.router.navigateByUrl('/edit-create-book',{state:{book:book}});
  }

}
