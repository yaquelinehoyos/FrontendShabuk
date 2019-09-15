import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RegistryService} from '../../shared/service/registry.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VerifyEmailService} from '../../shared/service/verify-email.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistryComponent implements OnInit {
  frmRegistry: FormGroup;
  frmPin: FormGroup;
  passwordsEquals = false;
  formSended = false;

  constructor(private registryService: RegistryService,
              private verifyEmailService: VerifyEmailService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.frmRegistry = this.formBuilder.group(
      {
        txtEmail: ['', [Validators.required, Validators.email]],
        txtPassword: ['', [Validators.required]],
        txtPasswordConfirmation: ['', [Validators.required]]
      }
    );

    this.frmRegistry.get('txtPasswordConfirmation').valueChanges.subscribe(value => {
      const txtPassword = this.frmRegistry.get('txtPassword').value;
      if (txtPassword !== value) {
        this.passwordsEquals = false;
      } else {
        this.passwordsEquals = true;
      }

    });

    this.frmPin = this.formBuilder.group(
      {
        txtPin: ['', [Validators.required]],
      }
    );
  }

  validatePassword() {
    this.frmRegistry.get('txtPassword').valueChanges.subscribe(
      value => {
        const password = this.frmRegistry.get('txtPasswordConfirmation').value;
        if (password === value) {
          this.passwordsEquals = true;
        } else {
          this.passwordsEquals = false;
        }
      }
    );
  }

  registry() {
    console.log(this.frmRegistry.get('txtEmail').value);
    const email = this.frmRegistry.get('txtEmail').value;
    const password = this.frmRegistry.get('txtPassword').value;
    const passwordConfirmation = this.frmRegistry.get('txtPasswordConfirmation').value;
    this.registryService.registry(email, password, passwordConfirmation).subscribe(data => {
        console.log(data);
        this.formSended = true;
      },
      (er) => {
        console.log(er);
      },
      () => {
        console.log('Completado');
      }
    );
  }

  verifyEmail() {
    console.log(this.frmPin.get('txtPin').value);
    const email = this.frmRegistry.get('txtEmail').value;
    const pin = this.frmPin.get('txtPin').value;
    this.verifyEmailService.verifyEmail(pin, email).subscribe(data => {
        console.log(data);
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
