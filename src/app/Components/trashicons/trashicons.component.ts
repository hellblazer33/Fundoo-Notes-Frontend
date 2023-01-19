import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-trashicons',
  templateUrl: './trashicons.component.html',
  styleUrls: ['./trashicons.component.scss']
})
export class TrashiconsComponent implements OnInit{
  constructor(private note:NotesService){}

  @Input() notecard:any;
  @Input() color:any

  title:any;
  description:any;
  dialogRef: any;
  

  ngOnInit(): void {
  }

  isUnTrash(){
    
    let reqdata= {
      
      notesId: [this.notecard.notesId], 
      isTrash: false,  
       
    }
    console.log(reqdata)
    this.note.userdeletenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted");
      
      console.log(response)
    })
  }
  


  isDelete(){
    this.note.deletenote(this.notecard).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
