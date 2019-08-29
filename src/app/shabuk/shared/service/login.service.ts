import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

const resourceUrl = environment.SERVER_API_URL + 'users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    console.log(`${resourceUrl}/login`);
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.post(`${resourceUrl}/login/`, params);
  }

}
