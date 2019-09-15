import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const resourceUrl = environment.SERVER_API_URL + '/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    console.log(`${resourceUrl}/`);
    return this.http.get(`${resourceUrl}/`);
  }

}
