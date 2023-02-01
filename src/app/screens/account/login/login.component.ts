import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin : FormGroup = new FormGroup({
     userName:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(5)]),
     confirmpassword:new FormControl('',[Validators.required]),
     address:new FormGroup({
      addressline1:new FormControl('',[Validators.required]),
      addressline2:new FormControl(''),
      city:new FormControl('',[Validators.required]),
      postalcode:new FormControl(''),
     })
  },{validators:[this.passwordMatchValidator]});


  get userNameCtrl(): FormControl{
    //return this.formLogin.get('userName') as FormControl;
    return <FormControl>this.formLogin.get('userName');
  }

  get passwordCtrl(): FormControl{
    //return this.formLogin.get('userName') as FormControl;
    return <FormControl>this.formLogin.get('password');
  }
  get confirmPasswordCtrl(): FormControl{
    //return this.formLogin.get('userName') as FormControl;
    return <FormControl>this.formLogin.get('confirmpassword');
  }
  
   passwordMatchValidator(fg:AbstractControl<FormGroup>){
    return (fg.get('password')?.value===fg.get('confirmpassword')?.value)
    ?null:{notMatched:true}
   }

   frmSubmit(){
   // console.log(this.formLogin.value)
   console.log(this.formLogin);
   // alert();
   }
}
