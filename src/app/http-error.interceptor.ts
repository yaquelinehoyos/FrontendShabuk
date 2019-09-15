import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from './shared/service/auth/authentication.service';
import {NotificationService} from './notification.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService,
              private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const notifier = this.injector.get(NotificationService);

    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }

      const error = err.error.message || err.statusText;
      // TODO evaluar el tipo de error que se obtuvo y mostrar un mensaje adecuado
      console.log(err);

      notifier.showError(error);
      return throwError(err);
    }));
  }
}
