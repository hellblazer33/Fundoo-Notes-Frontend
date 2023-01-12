import { Component, OnInit } from '@angular/core';
import { response } from 'express';

import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
 notelist:any

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getallnotes()
    
  }

  getallnotes(){
    this.note.usergetallnotes().subscribe((response:any)=>{
      console.log(response)
      this.notelist=response
  })
    
    
  }

 

}
