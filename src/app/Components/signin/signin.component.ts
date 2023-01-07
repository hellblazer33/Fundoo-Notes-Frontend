import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  // convenience getter for easy access to form fields
  // get f() { return this. signinForm.controls;}

  get f() { return this.signinForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signinForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.signinForm.reset();
  }


}


