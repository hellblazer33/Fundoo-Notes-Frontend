import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-remindernotes',
  templateUrl: './remindernotes.component.html',
  styleUrls: ['./remindernotes.component.scss']
})
export class RemindernotesComponent implements OnInit {
  reminderNotes:any;

  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getallremindernotes();
  }

  getallremindernotes(){
   
    this.note.usergetallreminder().subscribe((response:any) => {
      console.log(response.data.data);
      
      this.reminderNotes = response.data.data
      this.reminderNotes.reverse()
    })
  }
}
