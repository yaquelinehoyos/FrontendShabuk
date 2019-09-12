import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/service/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.frmLogin = this.formBuilder.group(
      {
        txtEmail: ['', [Validators.required]],
        txtPassword: ['', [Validators.required]]
      }
    );
  }

  login() {
    console.log(this.frmLogin.get('txtEmail').value);
    const email = this.frmLogin.get('txtEmail').value;
    const password = this.frmLogin.get('txtPassword').value;
    this.loginService.login(email, password).subscribe(data => {
        localStorage.setItem('apiToken', data.api_token);
        this.router.navigateByUrl('/home');
      },
      () => {
        console.log('Error');
      },
      () => {
        console.log('Completado');
      }
    );
  }

}
