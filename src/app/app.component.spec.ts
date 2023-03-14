import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './Components/registration/registration.component';
import { SigninComponent } from './Components/signin/signin.component';

import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';    
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';

import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';


import {MatCardModule} from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';

import {MatMenuModule} from '@angular/material/menu';



import {MatDatepickerModule} from '@angular/material/datepicker';  
import {MatNativeDateModule} from '@angular/material/core'         
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateComponent } from './Components/update/update.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { SearchnotePipe } from './pipe/searchnote.pipe';
import { TrashiconsComponent } from './Components/trashicons/trashicons.component';

import { MatTooltipModule } from '@angular/material/tooltip'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
    RegistrationComponent,
    SigninComponent,
    ForgotemailComponent,
    ForgotpasswordComponent,
    CreatenotesComponent,
    GetallnotesComponent,
    DashboardComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdateComponent,
    ArchieveComponent,
    TrashComponent,
    SearchnotePipe,
    TrashiconsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fundonotes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fundonotes');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('fundonotes app is running!');
  // });
});
