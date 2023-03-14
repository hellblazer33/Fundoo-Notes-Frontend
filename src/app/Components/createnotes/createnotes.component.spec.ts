import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreatenotesComponent } from './createnotes.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('CreatenotesComponent', () => {
  let component: CreatenotesComponent;
  let fixture: ComponentFixture<CreatenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
        
    ],
      declarations: [ CreatenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
