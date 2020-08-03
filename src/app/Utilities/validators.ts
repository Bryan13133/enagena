import { FormControl, FormGroup } from '@angular/forms';
function emailValidator(control: FormControl){
    const {value} = control;
    const EMAIL_REX = new RegExp('^[a-z0-9%_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    return EMAIL_REX.test(value) ? null :{
        emailInvalid: true
    };
}
export { emailValidator};