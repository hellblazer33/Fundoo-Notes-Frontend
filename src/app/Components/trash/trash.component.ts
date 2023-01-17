import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  token:any;
  trashNotes:any;
  localnotes:any;
  

  constructor(private notes:NotesService) { 
    this.token = localStorage.getItem('token');
  }
  

  ngOnInit(): void {
    this.getAllTrashNotes();
  }

  getAllTrashNotes(){
    this.notes.usergetallnotes().subscribe((response:any)=> {
      this.trashNotes = response.filter((response:any)=>{
        this.localnotes = response.isTrash === true
        return this.localnotes
       })
       this.trashNotes.reverse()
      })
  }

  

}
