import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from '../../../shared/model/book.model'

@Component({
  selector: 'user-book-card',
  templateUrl: './user-book-card.component.html',
  styleUrls: ['./user-book-card.component.css']
})
export class UserBookCardComponent implements OnInit {

  @Input()
  book:Book;

  @Output() onEdit = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    
  }

  getBookAuthorsText(authors){
    return authors.map(x=>x.full_name).join(", ")
  }

  editBook(){
    this.onEdit.emit(Object.assign({}, this.book));
  }

}
