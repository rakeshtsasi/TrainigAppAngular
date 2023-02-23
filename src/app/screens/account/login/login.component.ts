
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

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
     }),
     food:new FormControl('',[Validators.required]),
     option:new FormControl('pizza-1'),
     slider:new FormControl(25)
  },{validators:[this.passwordMatchValidator]});


  constructor(private http:HttpClient){
  //  http.get("https://639d95413542a261304ae6e2.mockapi.io/api/users")
  //  .subscribe((res)=>{
  //    console.log(res);
  //  });

  //  http.post("https://639d95413542a261304ae6e2.mockapi.io/api/users",{
  //   "name":"Inserted name from angular",
  //   "qualifications":["Qual from angular", "Qual from angular 2"]
  //  })
  //  .subscribe((res)=>{
  //    console.log(res);
  //  });

  // http.get("https://639d95413542a261304ae6e2.mockapi.io/api/users/6")
  // .subscribe((res)=>{
  //   console.log(res);
  // });

  // http.put("https://639d95413542a261304ae6e2.mockapi.io/api/users/6",{
  //   "name":"Updated from angular",
  //    "qualifications":["Updated Qual from angular"]
  // })
  // .subscribe((res)=>{
  //   console.log(res);
  // });
 
  }

  deleteRecord(){
    this.http.delete("https://639d95413542a261304ae6e2.mockapi.io/api/users/2").
    subscribe((res)=>{
      console.log(res);
      alert("Deleted");
    });
  }

  foods: Food[] = [
    {value: 'steak-0',viewValue:'Steak' },
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  get userNameCtrl(): FormControl{
    //return this.formLogin.get('userName') as FormControl;
    return <FormControl>this.formLogin.get('userName');
  }

  get passwordCtrl(): FormControl{
    //return this.formLogin.get('userName') as FormControl;
    return <FormControl>this.formLogin.get('password');
  }
  get confirmPasswordCtrl(): FormControl{
    return <FormControl>this.formLogin.get('confirmpassword');
  }
  get foodCtrl(): FormControl{
    return <FormControl>this.formLogin.get('food');
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
