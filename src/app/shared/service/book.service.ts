import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Book } from '../model/book.model';
import { Paginator } from '../model/paginator-model';
import { PaginationParams } from '../model/pagination-params.model';
import { BOOKS_STATES } from '../util/books-states';
import { Observable } from 'rxjs';

const resourceUrl = environment.SERVER_API_URL + '/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(pagination:PaginationParams): Observable<Paginator<Book>> {
    return this.http.get<Paginator<Book>>(`${resourceUrl}?offset=${pagination.offset}&limit=${pagination.limit}`);
  }

  getBooksByUrl(url:String): Observable<Paginator<Book>> {
    return this.http.get<Paginator<Book>>(`${url}`);
  }

  getUserLocalBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${resourceUrl}/user?state=${BOOKS_STATES.inLibrary}`)
  }

  getUserPublicBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${resourceUrl}/user?state=${BOOKS_STATES.transfering}`);
  }

}
