import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NotificationService} from './notification.service';


@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const notifier = this.injector.get(NotificationService);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log(request);
        if (event instanceof HttpResponse && event.status === 201) {
          notifier.showSuccess('Evaluar qué mostrar');
        }
      })
    );


  }
}
