import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  book:any;

  @Output() onEdit = new EventEmitter<boolean>();

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
