import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  @Input() notecard:any;
 
  
  showIcons: boolean = true;

 
 
  constructor(private note: NotesService ) { }

  ngOnInit(): void {
  }

  deletenote(){

    let reqdata= {
      
      notesId: [this.notecard.notesId],  
       
    }
    console.log(reqdata)
    this.note.userdeletenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted");
      
      console.log(response)

       
    })
    
  }
  
  Archivenote(){

    let reqdata={
      
      notesId: [this.notecard.notesId], 
      
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      
        
    })
   
  }

  Unarchive(){
     
    let reqdata={
      
      notesId: [this.notecard.notesId], 
        
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is Unarchived");

      console.log(response);
      
       
    })
    
  }

  

}


