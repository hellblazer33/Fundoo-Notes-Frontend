import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  @Input() notesArraylist:any;    
  
  title:any;
  description:any;
  dialogRef: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
   
 
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '650px',     
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.title=result;
      this.description=result;
      
    });
    
  }
 

}
