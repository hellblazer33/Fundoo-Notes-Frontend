import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title:any;
  description:any;

  constructor( private note: NotesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   // this data is coming from display notes.ts as we are injecting here from display.ts
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
     
    // this right side title and description is coming from display.html file
    this.title=this.data.title,
    this.description=this.data.description
    
  }

  Updatenotes(){

    let updatenoteobject={
      // this noteId, title,description is coming from backend API
      noteId:this.data.id,
      title:this.title,
      description:this.description,
    }

    this.note.userupdatenotes(updatenoteobject).subscribe((response:any) => {
      console.log(response)
    })
    this.dialogRef.close()   //this will close our update note card after clicking on close button
    window.location.reload();
  }

}
