import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetallnotesComponent } from './getallnotes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GetallnotesComponent', () => {
  let component: GetallnotesComponent;
  let fixture: ComponentFixture<GetallnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule],
      declarations: [ GetallnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
