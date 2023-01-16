import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './Components/authentication.guard';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';

import { RegistrationComponent } from './Components/registration/registration.component';

import { SigninComponent } from './Components/signin/signin.component';



const routes: Routes = [ 
   { path:'', redirectTo:"/signin", pathMatch:'full' },

  { path:'register',component:RegistrationComponent},
  { path:'signin',component:SigninComponent},
  { path:'forgotemail',component:ForgotemailComponent},
  { path:'resetpassword/:token',component:ForgotpasswordComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  
     
    children:[
     { path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
     { path:'getallnotes',component:GetallnotesComponent},   
      
    ]}, 
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
