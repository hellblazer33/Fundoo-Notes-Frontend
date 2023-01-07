import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  token:any;
  forgotpasswordForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.forgotpasswordForm=this.formBuilder.group({
      newpassword:['',[Validators.required, Validators.minLength(6)]],  //this newpassword name in .ts file and the formcontrolname in .html file should be same
      confirmPassword:['',Validators.required]
    })
   
  }
  // convenience getter for easy access to form fields
  // get f() { return this.forgotpasswordForm.controls;}
  get f() { return this.forgotpasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotpasswordForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotpasswordForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.forgotpasswordForm.reset();
  }


  }
