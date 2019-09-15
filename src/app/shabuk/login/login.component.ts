import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/service/auth/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  loading: boolean;
  returnUrl: string;


  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit() {
    this.frmLogin = this.formBuilder.group(
      {
        txtEmail: ['', [Validators.required]],
        txtPassword: ['', [Validators.required]]
      }
    );
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

  }

  login() {
    const email = this.frmLogin.get('txtEmail').value;
    const password = this.frmLogin.get('txtPassword').value;
    this.loading = true;
    this.authenticationService.login(email, password).pipe(first())
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
          console.log(data);
        },
        () => {
          console.log('Error');
          this.loading = false;
        },
        () => {
          console.log('Completado');
        }
      );
  }

}
