import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuModule } from '@angular/material/menu';
import { TrashComponent } from './trash.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';
describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatMenuModule,MatDialogModule],

      declarations: [ TrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
