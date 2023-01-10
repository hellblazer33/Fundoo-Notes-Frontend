import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;  //  this notelist is called as parentmessage which is taken from getallnotes.html
  // trash:any;

  constructor( private note: NotesService, private dataservice:DataService) { }

  ngOnInit(): void {
    this.getallnotes()  //we are calling this method written below to see it in browser in our UI

    this.dataservice.receivedData.subscribe((response:any)=>{  // this received Data is coming from data service.ts for unrelated data sharing as our icons.ts and getall notes dont have any relationship
      console.log(response)
      this.getallnotes();
    })
  }

  receiveMessage(e:any){  // this is child-parent data sharing between create notes & getall notes used for autorefresh & is coming from getallnotes.html
    console.log(e)
    this.getallnotes()
  }

  getallnotes(){

    this.note.usergetallnotes().subscribe((response:any) => {

      console.log(response.data.data)   // .data.data is used because our notes in console is fetching from data inside data
      this.notelist= response.data.data  //this notelist is coming from above which  is called as parentmessage which is taken from getallnotes.html
      this.notelist.reverse()

      this.notelist =this.notelist.filter((data:any) => {  //
        console.log(data.isDeleted)
        return data.isDeleted === false && data.isArchived === false;
        
      })
      

    })
  }

}
