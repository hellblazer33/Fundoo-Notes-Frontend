import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/labelservice/label.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})


export class LabelComponent implements OnInit {

  lblTrashtoggle = true;
  editdeletetoggle = false;
  notesId: any;
  labelName: string = '';
  labelArray:any=[];
  labelId:Number=0;
  newlabelName:string=''
  notelist:any;
  localnotes:any;
  

  // constructor(private labelservice: LabelService,private note: NotesService, public dialogRef: MatDialogRef<LabelComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any) {
      
  //     this.notesId = this.data.notesId
  //     this.labelName = data?.labelName
     
    
  // }

  constructor(public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private labelservice: LabelService,private note: NotesService 
    ) { 
      this.notesId = data.notesId;
      
    }


  ngOnInit(): void {
    //this.getallLabels();
    //this.getallnotes();
    console.log(this.notesId)
  }

  reverseFlag() {
    this.lblTrashtoggle = !this.lblTrashtoggle;
  }

  reverse() {
    this.editdeletetoggle = !this.editdeletetoggle;
  }

  getallLabels(){
    this.labelservice.getallLabels().subscribe((response:any)=>{
      console.log('Getting All Labels List',response)
      this.labelArray=response;
    })
  }

  getallnotes(){
    this.note.usergetallnotes().subscribe((response:any)=> {
      this.notelist = response
      console.log(this.notelist);

       })
      
    
  }

  addLabel() {
    let payload = {
      labelName: this.labelName,
      notesId:this.notesId
    }
    console.log(payload);    
    this.labelservice.addLabel(payload).subscribe((response: any) => {
      console.log('Label Added', response);
      this.dialogRef.close(response) 
      
    })
  }

  updateLabel() {
    let payload = {
      labelName: this.labelName,
      newlabelName:this.newlabelName
    }
    console.log(payload);    
    this.labelservice.updateLabel(payload).subscribe((response: any) => {
      console.log('Label Updated', response);

    })
  }

  deleteLabel(labelId:Number){
    this.labelservice.deleteLabel(labelId).subscribe((response:any)=>{
      console.log('Label Deleted',response);
      this.getallLabels();
      
    })
  }

  closeDialog() {
    this.dialogRef.close();

  }
}
