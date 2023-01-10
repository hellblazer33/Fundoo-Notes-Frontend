import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

  forgotemailForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {

    this.forgotemailForm =this.formBuilder.group({
      phoneOrEmail:['',[Validators.required]]
    })
  }
  // convenience getter for easy access to form fields
  // get f() { return this.  forgotemailForm.controls;}

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.forgotemailForm.valid) {
          console.log(this.forgotemailForm.value);
          let forgotemailobject={
            email:this.forgotemailForm.value.phoneOrEmail
          }
          this.user.userforgotemail(forgotemailobject).subscribe((response:any)=>{
            console.log("************Mail Sent Successfully**********",response);
          })
      }else{
        console.log("enter data");
      }

      // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.  forgotemailForm.value, null, 4));
    }

    // onReset() {
    //     this.submitted = false;
    //     this.  forgotemailForm.reset();
    // }


  }