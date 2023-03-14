import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = false;
  contentMargin = 200;
  display = true;
  isViewChange: boolean = false;
  

 


  constructor(private route: Router,changeDetectorRef: ChangeDetectorRef,private dataService:DataService) {

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

  viewChange(){
    this.isViewChange = !this.isViewChange;
    this.dataService.SendDisplayData(this.isViewChange);
    //window.location.reload();
  }

  notes() {
    this.route.navigateByUrl('dashboard/getallnotes')
  }

  Archive() {
    this.route.navigateByUrl('dashboard/archieve')
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

  label() {
    this.route.navigateByUrl('dashboard/label')
  }

  searchTitle(event: any){
    
    this.dataService.changeData(event.target.value)
    }

   
}


