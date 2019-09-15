import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {BookService} from '../../shared/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  test() {
    this.loading = true;
    this.bookService.getBooks().pipe(first())
      .subscribe(data => {
          console.log(data);
        },
        () => {
          console.log('Error');
        },
        () => {
          this.loading = false;
          console.log('Completado');
        }
      );
  }

}
