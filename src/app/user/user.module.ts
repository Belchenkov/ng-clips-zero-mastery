import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    AuthModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
