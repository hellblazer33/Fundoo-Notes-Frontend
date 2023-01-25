import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';



@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() notecard:any; 
  @Output() trashiconstotrash = new EventEmitter<string>();
  token:any;
  trashNotes:any;
  localnotes:any;
  title:any;
  description:any;
  dialogRef: any;
  msg:any;
  

  constructor(private notes:NotesService,public dialog: MatDialog) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getAllTrashNotes();
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

 

  getAllTrashNotes(){
    this.notes.usergetallnotes().subscribe((response:any)=> {
      this.trashNotes = response.filter((response:any)=>{
        this.localnotes = response.isTrash === true
        return this.localnotes
       })
       this.trashNotes.reverse()
      })
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllTrashNotes()
  }

}
