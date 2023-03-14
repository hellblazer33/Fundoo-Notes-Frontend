import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { TrashiconsComponent } from './trashicons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('TrashiconsComponent', () => {
  let component: TrashiconsComponent;
  let fixture: ComponentFixture<TrashiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
  imports: [HttpClientTestingModule,MatMenuModule
   
    ],
      declarations: [ TrashiconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
