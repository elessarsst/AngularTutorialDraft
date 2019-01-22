import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), SignupFormComponent.myValidation, SignupFormComponent.shouldBeUnique]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
  static myValidation(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0 ) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      console.log('ok');
    }, 2000);
    if (control.value === 'serhat') {
      return { shouldBeUnique: true };
    }
    return null;
  }
}
