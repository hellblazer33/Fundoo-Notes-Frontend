import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required], //this firstName name in .ts file and the formcontrolname in .html file should be exactly same
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: ['advance', Validators.required],
      confirm: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      let payload = {    
        firstName: this.registerForm.value.firstName, 
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.userName,
        password: this.registerForm.value.password,
        service: this.registerForm.value.service
        // confirm:this.registerForm.value.confirm,

      }
      this.user.userRegister(payload).subscribe((response: any) => {    
        console.log("********Registration Successfull*******",response)
      })
    } else {
      console.log("enter data");
    }
  }

}






