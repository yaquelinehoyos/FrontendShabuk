import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {BookService} from '../../shared/service/book.service';
import { Book } from '../../shared/model/book.model';
import { PaginationParams } from 'src/app/shared/model/pagination-params.model';
import { Paginator } from 'src/app/shared/model/paginator-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  books:Book[]=[];
  paginationParams:PaginationParams=new PaginationParams(0,10);
  lastResponse:Paginator<Book>=new Paginator<Book>(); 

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.bookService.getBooks(this.paginationParams).then(this.extractBooksFromResponse.bind(this))
  }

  getNextBooks(){
    if(this.lastResponse.next){
      this.loading = true;
      this.bookService.getBooksByUrl(this.lastResponse.next).then(this.extractBooksFromResponse.bind(this))
    }
  }

  extractBooksFromResponse(booksPaginator:Paginator<Book>){
    this.loading=false;
    this.lastResponse=booksPaginator;
    this.books=this.books.concat(booksPaginator.results);
    console.log("last response",this.lastResponse);
    console.log("books",this.books);
  }

}
