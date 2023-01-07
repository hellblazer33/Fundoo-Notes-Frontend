import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './Components/registration/registration.component';
import { SigninComponent } from './Components/signin/signin.component';

import {MatFormFieldModule} from '@angular/material/form-field';  //its is a parent module for input module, mat label, mat buttons, mat checkbox etc etc.... 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      //its a parent module for form control, form builder
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';    // used to connect with backend URL

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';


import {MatCardModule} from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';

import {MatMenuModule} from '@angular/material/menu';


import {MatDatepickerModule} from '@angular/material/datepicker';  // used for reminder pick date and time 
import {MatNativeDateModule} from '@angular/material/core'         // used for reminder pick date and time 
// import { MatMomentDateModule } from "@angular/material-moment-adapter";



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    ForgotemailComponent,
    ForgotpasswordComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
