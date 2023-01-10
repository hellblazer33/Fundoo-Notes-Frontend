import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { RemindernotesComponent } from './Components/remindernotes/remindernotes.component';
import { SigninComponent } from './Components/signin/signin.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
// import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [ 
   { path:'', redirectTo:"/signin", pathMatch:'full' },

  { path:'register',component:RegistrationComponent},
  { path:'signin',component:SigninComponent},
  { path:'forgotemail',component:ForgotemailComponent},
  { path:'resetpassword/:token',component:ForgotpasswordComponent},
  { path:'dashboard',component:DashboardComponent,
  
     
    children:[
     { path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
     { path:'getallnotes',component:GetallnotesComponent},   // inside getallnotes we have given the selector of createnotes and display notes thats why below here we commented out the path of create notes & displaynotes 
     { path:'trash',component:TrashnotesComponent},
     { path:'archiveNotes',component:ArchivenotesComponent},
     { path:'reminderNotes',component:RemindernotesComponent}    
    ]}, 
  //{ path:'update',component:UpdateComponent},
    { path:'icons',component:IconsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
