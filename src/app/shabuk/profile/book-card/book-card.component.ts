import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  book:any;

  constructor() { }

  ngOnInit() {
    
  }

  getBookAuthorsText(authors){
    return authors.map(x=>x.full_name).join(", ")
  }

}
