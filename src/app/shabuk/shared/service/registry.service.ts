import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

const resourceUrl = environment.SERVER_API_URL + 'users';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private http: HttpClient) {
  }

  registry(email: string, password: string, passwordConfirmation: string): Observable<any> {
    console.log(`${resourceUrl}/signup`);
    const params = new HttpParams().set('email', email).set('password', password).set('password_confirmation', passwordConfirmation);
    return this.http.post(`${resourceUrl}/signup/`, params);
  }

}
