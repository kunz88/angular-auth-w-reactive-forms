import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

const mustContainQuestionMark = (control: AbstractControl<String>) => {
  if (control.value.includes('?')) {
    return null;
  }
  return {
    doesNotContainsQuestionMark: true,
  };
};

const emailIsUnique = (control: AbstractControl<String>) => {
  if (control.value === 'test@example.com') {
    return of(null);
  }
  return of({ notUnique: true });
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    // questo approccio ci fornisce un migliore supporto da parte di typescritp
    // ogni proprietà rappresenta un controllore del form
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        mustContainQuestionMark,
      ],
    }),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
