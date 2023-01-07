import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  {path:'forgotemail',component:ForgotemailComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
