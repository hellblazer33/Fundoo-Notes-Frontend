import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  @Input() notecard:any;
  color : any
  
  showIcons: boolean = true;

  colors = [
    {
      name: 'Red', bgColorValue: '#f28b82' 
    },  
 
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      name: 'white', bgColorValue: '#ffffff'
    }
  ];
 
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


  changeColor(noteColor:any){
    
    this.notecard.noteColor= noteColor;
    let colorr=noteColor.replace("#","%23")
    this.color=colorr
    let reqdata={
      
      
      notesId: [this.notecard.notesId],  
      color: this.color
    }

    this.note.usercolor(reqdata).subscribe((response:any) =>{
      console.log("****Color changed successfully**********)",response);

      
      

    })
    
  }

  

}


