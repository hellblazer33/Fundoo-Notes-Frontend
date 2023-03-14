import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuModule } from '@angular/material/menu';
import { IconsComponent } from './icons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatMenuModule],
      declarations: [ IconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
