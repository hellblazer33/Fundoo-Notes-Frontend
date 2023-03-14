import {ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
	  el=de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async() => {
	component.onSubmit();
	expect(component.submitted).toBeTruthy();
});

it('should call the onSubmit method', async() => {
	fixture.detectChanges();
	spyOn(component, 'onSubmit');
	el = fixture.debugElement.query(By.css('button')).nativeElement;
	el.click(); 
	expect(component.onSubmit).toHaveBeenCalledTimes(1);

});


it('form should be invalid', async() => {
	component.registerForm.controls['firstName'].setValue(''); 
	component.registerForm.controls["lastName"].setValue('');
	component.registerForm.controls['userName'].setValue(''); 
	component.registerForm.controls['password'].setValue(''); 
	component.registerForm.controls['service'].setValue(''); 
	component.registerForm.controls['confirm'].setValue(''); 
	expect(component.registerForm.valid).toBeFalsy();
});


it(' form should be valid', async() => { 
	
  component.registerForm.controls['firstName'].setValue('pankaj'); 
	component.registerForm.controls["lastName"].setValue('kumar');
	component.registerForm.controls['userName'].setValue('ada@gmail.com'); 
	component.registerForm.controls['password'].setValue('11041995'); 
	component.registerForm.controls['service'].setValue(''); 
	component.registerForm.controls['confirm'].setValue('11041995');
	expect(component.registerForm.valid).toBeFalsy();
});

	it('should render title', () => {
	const fixture = TestBed.createComponent(RegistrationComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('h1')?.textContent).toContain('registration works!');
  });

});

