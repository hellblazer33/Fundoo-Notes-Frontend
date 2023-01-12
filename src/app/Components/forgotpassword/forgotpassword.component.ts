import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  token: any;
  forgotpasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.forgotpasswordForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],  
    })
    this.token = localStorage.getItem("token");
    console.log(this.token);
  }


  onSubmit() {
    this.submitted = true;

   
    if (this.forgotpasswordForm.valid) {
      let payload = {
        newPassword: this.forgotpasswordForm.value.password,
        confirmPassword: this.forgotpasswordForm.value.confirmpassword,
       
      }
      console.log(payload)

      this.user.Reset(payload, this.token).subscribe((response: any) => {
        console.log('password response', response);
        localStorage.setItem("token",response.data);
      })
    }


    else {
      console.log("enter data");
    }

  }

 


}
