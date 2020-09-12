import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: FormControl }|null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  static passwordMatchValidator(control: AbstractControl): void{
    const password: string = (control.get('password')as FormControl).value; // get password from our password form control
    const confirmPassword: string =
      (control.get('confirmPassword') as FormControl).value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      (control.get('confirmPassword')as FormControl).setErrors({ NoPassswordMatch: true });
    }
  }
}

