import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from '../../../shared/model/book.model'

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  book:Book;

  constructor() { }

  ngOnInit() {
    
  }

  getBookAuthorsText(authors){
    return authors.map(x=>x.full_name).join(", ")
  }

}
