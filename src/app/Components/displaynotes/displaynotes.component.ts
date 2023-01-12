import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
   


}
