import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/labelservice/label.service';
import { CollabnotesComponent } from '../collabnotes/collabnotes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  @Input() notecard:any;
  @Output() iconstodisplay = new EventEmitter<string>()
  @Output() updateCollabUser = new EventEmitter<any>();
  @Output() changeNoteStatus = new EventEmitter<any>();
  color : any;
  labelArray:any=[];
  labelName:string='';
  label:any;
  collabUserData: any = [];
  
  showIcons: boolean = true;

  colors1 = [
    {
      name: 'Red', bgColorValue: '#f28b82' 
    },  
 
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
  
  ];
 colors2 = [
  {
    name: 'Lime', bgColorValue: '#B3E283'
  },
  {
    name: 'Teal', bgColorValue: '#CDF0EA'
  },
  {
    name: 'white', bgColorValue: '#ffffff'
  }
 ]
 
  constructor(private note: NotesService,public dialog: MatDialog,private labelservice:LabelService ) { }

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
      this.iconstodisplay.emit(response);

       
    })
    
  }
  
  Archivenote(){

    let reqdata={
      
      notesId: [this.notecard.notesId], 
      
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      this.iconstodisplay.emit(response)
      
        
    })
   
  }

  Unarchive(){
     
    let reqdata={
      
      notesId: [this.notecard.notesId], 
        
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is Unarchived");

      console.log(response);
      this.iconstodisplay.emit(response)
      
       
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
      this.iconstodisplay.emit(response)
      
      

    })
    
  }

    //getall Labels API
    getallLabels(){
      this.labelservice.getallLabels().subscribe((response:any)=>{
        console.log('Getting All Labels List',response)
        this.labelArray=response.data
      })
    }
  
    getlabelById(labelId:number){
      this.labelservice.getlabelById(labelId).subscribe((response:any)=>{
        console.log("Get Label by Id",response);
        
      })
    }
  
    // addLabel(){
    //   let data={
    //     noteId:this.labelArray.noteId,
    //     labelName:this.labelName
    //   }
    //   console.log(data);  
    //   this.labelservice.addLabel(data).subscribe((response:any)=>{
    //     console.log('Label Added',response)
    //     this.getallLabels();
    //   })
    // }
     //Dialog box
  
     
     openDialog(note:any) {
      const dialogRef = this.dialog.open(LabelComponent,{
        
        data:note
      })
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    

    addCollaborator(noteData: any) {
      
        const dialogRef = this.dialog.open(CollabnotesComponent, {
          width: '600Px',
          maxHeight: '650Px',
          data: noteData,
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          console.log('The collab dialog was closed:', result);
          this.collabUserData = result;
          console.log(this.collabUserData)
          this.iconstodisplay.emit(result);
          //this.iconstodisplay.emit(result.slice(1));
        });
      
    }

  

}


