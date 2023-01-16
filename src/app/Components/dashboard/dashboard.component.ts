import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 200;

 


  constructor(private route: Router) {

  }
  ngOnInit(): void {
    

    
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    }
    else {
      this.contentMargin = 400;
    }
  }

  notes() {
    this.route.navigateByUrl('dashboard/getallnotes')
  }

  

  Logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/signin')
  }
}


