import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynotesComponent } from './displaynotes.component';

import {MatDialogModule} from '@angular/material/dialog';

import { SearchnotePipe } from 'src/app/pipe/searchnote.pipe';
describe('DisplaynotesComponent', () => {
  let component: DisplaynotesComponent;
  let fixture: ComponentFixture<DisplaynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule
        
      ],
      declarations: [ DisplaynotesComponent,SearchnotePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
