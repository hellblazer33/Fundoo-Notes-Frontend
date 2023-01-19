import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  @Input() notesArraylist:any; 
  @Output() displaytogetallnotes=new EventEmitter<string>();   
  
  title:any;
  description:any;
  dialogRef: any;
  searchword = '';
  res: any;
  msg:any

  constructor(public dialog: MatDialog,private data:DataService) {}

  ngOnInit(): void {
    this.data.searchNote.subscribe((res:any )=> {
      console.log(res);
      this.searchword = res
    });
  }
   
 
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '650px',     
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.title=result;
      this.description=result;
      
    });
    
  }

  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.msg = $event
    this.displaytogetallnotes.emit(this.msg)
  }
 

}
