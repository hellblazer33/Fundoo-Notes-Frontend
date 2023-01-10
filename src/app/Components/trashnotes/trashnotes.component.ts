import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashNotes:any;
  localnotes:any;  // variable declared/used for storing purpose only 
  
  constructor(private note: NotesService , private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((displayTrashedList:any)=>{
      console.log(displayTrashedList)
      this.getalltrashnotes();
    })
    // this.getalltrashnotes();
  }

  getalltrashnotes(){
    this.note.usergettrashnoteslist().subscribe((response:any) =>{
      console.log(response.data.data);

      this.trashNotes = response.data.data.filter((response:any)=>{
       this.localnotes = response.isDeleted === true
       return this.localnotes
      })
      this.trashNotes.reverse()
      
      
    })
  }
}
