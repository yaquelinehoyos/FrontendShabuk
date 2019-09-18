import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Book } from '../model/book.model';
import { Paginator } from '../model/paginator-model';
import { PaginationParams } from '../model/pagination-params.model';
import { BOOKS_STATES } from '../util/books-states';

const resourceUrl = environment.SERVER_API_URL + '/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(pagination:PaginationParams): Promise<Paginator<Book>> {
    return this.http.get(`${resourceUrl}?offset=${pagination.offset}&limit=${pagination.limit}`)
    .toPromise().then();
  }

  getBooksByUrl(url:String): Promise<Paginator<Book>> {
    return this.http.get(`${url}`)
    .toPromise().then();
  }

  getUserLocalBooks(): Promise<Book[]> {
    return this.http.get(`${resourceUrl}/user?state=${BOOKS_STATES.inLibrary}`)
    .toPromise().then();
  }

  getUserPublicBooks(): Promise<Book[]> {
    return this.http.get(`${resourceUrl}/user?state=${BOOKS_STATES.transfering}`)
    .toPromise().then();
  }

}
