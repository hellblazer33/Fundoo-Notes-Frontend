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

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.mobileQuery.removeListener(this._mobileQueryListener);
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
  Archive() {
    this.route.navigateByUrl('dashboard/archiveNotes')
  }
  Trash() {
    this.route.navigateByUrl('dashboard/trash')
  }
  Reminder() {
    this.route.navigateByUrl('dashboard/reminderNotes')
  }


  Logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/signin')
  }
}


