import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

  forgotemailForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.forgotemailForm =this.formBuilder.group({
      phoneOrEmail:['',[Validators.required]]
    })
  }
  get f() { return this.forgotemailForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotemailForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotemailForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.forgotemailForm.reset();
  }

  }