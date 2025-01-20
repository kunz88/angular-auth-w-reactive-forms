import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';

export const mustContainQuestionMark = (control: AbstractControl<String>) => {
  if (control.value.includes('?')) {
    return null;
  }
  return {
    doesNotContainsQuestionMark: true,
  };
};

export const emailIsUnique = (control: AbstractControl<String>) => {
  if (control.value === 'test@example.com') {
    return of(null);
  }
  return of({ notUnique: true });
};

export const isPasswordEqual = (control: AbstractControl) => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    return null;
  }
  return { notEqual: true };
};
