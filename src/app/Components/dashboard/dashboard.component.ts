import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 200;
 
  

 


  constructor(private route: Router,changeDetectorRef: ChangeDetectorRef,private data:DataService) {

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

  Archive() {
    this.route.navigateByUrl('dashboard/archieve')
  }
  Trash() {
    this.route.navigateByUrl('dashboard/trash')
  }
  

  Logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/signin')
  }


  searchTitle(event: any){
    
    this.data.changeData(event.target.value)
    }
}


