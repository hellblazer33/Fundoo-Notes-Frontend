import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  archiveNotes:any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getallarchivenotes();
  }


  getallarchivenotes(){
    this.note.usergetarchivenoteslist().subscribe((response:any) =>{
      console.log(response.data.data);
      
      this.archiveNotes = response.data.data
      this.archiveNotes.reverse()
    })
  }
}
