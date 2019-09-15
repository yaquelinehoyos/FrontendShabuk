import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const resourceUrl = environment.SERVER_API_URL + 'users';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  constructor(private http: HttpClient) {
  }

  verifyEmail(verificationCode: string, email: string): Observable<any> {
    console.log(`${resourceUrl}/verify-email`);
    const params = new HttpParams().set('verification_code', verificationCode).set('email', email);
    return this.http.post(`${resourceUrl}/verify-email/`, params);
  }

}
