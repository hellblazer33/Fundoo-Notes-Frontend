import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';
import { NotesService } from 'src/app/services/notesservice/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() changeColorOfNote = new EventEmitter<any>();  // this o/p decorator is coming from displaynotes.html
  @Input() notecard:any;
  // dataservice: any;
  
  showIcons: boolean = true;

  colors = [
    {
      name: 'Red', bgColorValue: '#f28b82' // this format of color in #f28b82 is called as hexadecimal
    },  
    // {
    //   name: 'Pink', bgColorValue: '#FFEBCC'
    // },
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
 
  constructor(private note: NotesService, private dataservice:DataService ) { }

  ngOnInit(): void {
  }

  deletenote(){

    let reqdata= {
      
      noteIdList: [this.notecard.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: true,  // it is coming from backend 
    }
    this.note.userdeletenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    window.location.reload();
  }
  
  Archivenote(){

    let reqdata={
      
      noteIdList: [this.notecard.id], //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isArchived:true,  // it is coming from backend api
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      
      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    window.location.reload();
  }

  Unarchive(){
     
    let reqdata={
      
      noteIdList: [this.notecard.id], //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isArchived:false,  // it is coming from backend api
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is Unarchived");

      console.log(response);
      
      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    window.location.reload();
  }

  

  changeColor(noteColor:any){
    
    this.notecard.noteColor= noteColor;
    let reqdata={
      
      //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      noteIdList: [this.notecard.id],  // this noteIdlist is a key where we are storing our id as a value
      color: noteColor
    }

    this.note.usercolor(reqdata).subscribe((response:any) =>{
      console.log(response);

      this.changeColorOfNote.emit(noteColor)
      

    })
    window.location.reload();
  }

  deletePermanently(){
    
    let reqdata= {
      
      noteIdList: [this.notecard.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: true,  // it is coming from backend 
    }
    this.note.userpermanentdelete(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted permanently");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    window.location.reload();
  }
  
  restorenote(){
    let reqdata= {
      
      noteIdList: [this.notecard.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: false,  // it is coming from backend 
    }
    this.note.userdeletenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is restored");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    // window.location.reload();
  }

  reminder(){
    let reqdata= {
      
      noteIdList: [this.notecard.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      reminder: "string",  // it is coming from backend 
    }
    this.note.useraddreminder(reqdata).subscribe((response:any) =>{
      console.log("reminder is added");
      
      console.log(response)

      
    })
    window.location.reload();
  }
}


