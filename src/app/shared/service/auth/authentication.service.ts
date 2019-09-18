import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {User} from '../../model/user.model';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password', password);

    return this.http.post<any>(`${environment.SERVER_API_URL}/users/login/`, params)
      .pipe(map(data => {
        const user = data.user;
        const api_token = data.api_token;
// store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('api_token', JSON.stringify(api_token));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('api_token');
    this.currentUserSubject.next(null);

  }

  public getAccessToken(): string {
    const apiToken = JSON.parse(localStorage.getItem('api_token'));
    if (apiToken) {
      return apiToken.access;
    } else {
      return null;
    }
  }
}
