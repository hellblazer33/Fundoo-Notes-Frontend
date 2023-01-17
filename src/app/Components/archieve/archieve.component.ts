import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  token:any;
  archiveNotes:any;
  localnotes:any;
  public subscription:any;

  constructor(private notes:NotesService) { 
    this.token = localStorage.getItem('token');
  }
  

  ngOnInit(): void {
    this.getAllArchiveNotes();
  }

  getAllArchiveNotes(){
    this.notes.usergetallnotes().subscribe((response:any)=> {
      this.archiveNotes = response.filter((response:any)=>{
        this.localnotes = response.isArchive === true
        return this.localnotes
       })
       this.archiveNotes.reverse()
      })
  }

  

}
