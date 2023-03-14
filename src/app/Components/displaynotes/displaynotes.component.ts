import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/dataservice/data.service';
import { BooleanLiteral } from 'typescript';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { CollabService } from 'src/app/services/collabServices/collab.service';
import { LabelService } from 'src/app/services/labelservice/label.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        //height: '200px',
        //opacity: 1,
        //backgroundColor: 'yellow'
      })),
      state('closed', style({
        //height: '100px',
        //opacity: 0.8,
        //backgroundColor: 'blue'
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
export class DisplaynotesComponent implements OnInit {


  @Input() notesArraylist:any; 
  @Output() displaytogetallnotes=new EventEmitter<string>();   
  @Output() updatetodisplaytogetall=new EventEmitter<string>(); 
  @Input() changeDisplay:any
  
  public display : boolean = true;
  title:any;
  description:any;
  dialogRef: any;
  searchword = '';
  res: any;
  msg:any;
  isOpen = true;
  isGridLayout: boolean = true;
  collabUsers: any;
  collabUsersList: any;
  labelArray:any

  customStyle = {
    backgroundColor: "transparent",
    border: "1px solid rgba(0,0,0,.6)",
    borderRadius: "50%",
    color: "#202124",
    cursor: "pointer",
  };
  
  

  constructor(public dialog: MatDialog,private data:DataService,private collabService: CollabService,private labelservice:LabelService) {}

  ngOnInit(): void {
    this.data.searchNote.subscribe((res:any )=> {
      console.log(res);
      this.searchword = res
    });
    this.data.recievedNoteDisplay.subscribe((response: any) => {
      console.log("Data Recieved", response);
      this.isGridLayout = response;
    });

    this.getallLabels();
  }
   
 
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '650px',     
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
      
      this.updatetodisplaytogetall.emit(result)

      
    });
    
  }

  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.msg = $event
    this.displaytogetallnotes.emit(this.msg)
  }
 
  // changeDisplay(mode: number): void {
  //   this.display = mode;
  // }
  getAllCollabNotes(){
    this.collabService.getAllCollabUser().subscribe((response: any) => {
      console.log("Got All Collab User", response.data);
      this.collabUsersList = response.data;
      console.log(this.collabUsersList)
    });
      
      // this.snackBar.open(error.error.message, 'Add Some ', {
      //   duration: 4000,
      //   horizontalPosition: this.horizontalPosition,
      //   verticalPosition: this.verticalPosition,
      // })
    
  
}

getallLabels(){
  this.labelservice.getallLabels().subscribe((response:any)=>{
    console.log('Getting All Labels List',response)
    this.labelArray=response;
  })
}



}
