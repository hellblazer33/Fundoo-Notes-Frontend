import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  @Input() notesArraylist:any;    // this notesArraylist is taken from forloop of displaynotes.html. From parent- child data sharing @input() decorator is used inside child.
  
  title:any;
  description:any;
  dialogRef: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
   
  // this below code is used to update the note i.e.,updatecomponent
  openDialog(note1object: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '650px',     
      data: note1object,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.title=result;
      this.description=result;
      
    });
    
  }
  messageReceivedFromNote(e:any){  // this is used for data sharing between icons(child) and displaynotes(parent)
    console.log(e);
    
  }

}
