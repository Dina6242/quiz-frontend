import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component ({
  templateUrl: './login.component.html'
})
export class LoginComponent{
  form: FormGroup ;
  constructor(public auth: AuthService, private fb: FormBuilder){
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
