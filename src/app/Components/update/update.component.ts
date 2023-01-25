import { Component, Inject, OnInit, Output,EventEmitter} from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: any,   
  ) {}

  @Output() iconstodisplay = new EventEmitter<string>()

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
     
    
    this.title=this.data.title,
    this.description=this.data.description
    
  }

  Updatenotes(){

    let updatenoteobject={
      
      notesId:this.data.notesId,
      title:this.title,
      description:this.description,
    }

    this.note.userupdatenotes(updatenoteobject).subscribe((response:any) => {
      console.log("*******Notes updated successfull************",response)
      this.iconstodisplay.emit(response);

    })
    this.dialogRef.close()  
    
    //window.location.reload();
  }

}
