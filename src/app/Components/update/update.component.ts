import { Component, Inject, OnInit, Output,EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesservice/notes.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        //backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class UpdateComponent implements OnInit {
  title:any;
  description:any;

  constructor( private note: NotesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   
  ) {}

  @Output() updatetodisplay = new EventEmitter<string>()

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
      this.dialogRef.close(response) 

    })
    
    
    //window.location.reload();
  }

}
