

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { fade } from '../animations';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss'],
  animations:[fade]
})
export class GetallnotesComponent implements OnInit {
 
  notelist:any
  trashNotes:any
  localnotes:any
  isGridLayout: boolean = true;
  @Input() changeDisplay:any
  

  constructor(private note: NotesService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getallnotes()
    this.dataService.recievedNoteDisplay.subscribe((response: any) => {
      console.log("Data Recieved", response);
      this.isGridLayout = response;
    })
  }

  getallnotes(){
    this.note.usergetallnotes().subscribe((response:any)=> {
      this.notelist = response.filter((response:any)=>{
        this.localnotes = response.isTrash === false && response.isArchive == false
        return this.localnotes
       })
       console.log(response)
       this.notelist.reverse()
      })
  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getallnotes()
  }
  autocreatenote(event:any){
    console.log(event);
    this.getallnotes();
  }

  }





