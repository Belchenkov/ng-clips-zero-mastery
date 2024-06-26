import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import IUser from '../../models/user.model';
import { RegisterValidators } from "../validators/register-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private auth: AuthService,
  ) {}

  inSubmission = false;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  email = new FormControl('',[
    Validators.required,
    Validators.email,
  ]);
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [
    Validators.required,
  ]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  }, [RegisterValidators.match('password','confirm_password')]);

  showAlert = false;
  alertColor = 'blue';
  alertMsg = '';

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    const { email, password } = this.registerForm.value;

    if (!email || !password) {
      console.log('Empty email or password');
      return;
    }

    try {
      await this.auth.createUser(this.registerForm.value as IUser);
    } catch (err) {
      console.error(err);
      this.alertMsg = 'An unexpected error occurred. Please try again later.'
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMsg = 'Success! Your account has been created.';
    this.alertColor = 'green';
  }
}
