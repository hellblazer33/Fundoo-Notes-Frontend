import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  

  private searchData = new BehaviorSubject("default message");
  searchNote = this.searchData.asObservable()
  private noteDisplay = new BehaviorSubject('');
  recievedNoteDisplay = this.noteDisplay.asObservable();

  changeData(message:string){
    this.searchData.next(message)
  
} 
SendDisplayData(layout: any){
  this.noteDisplay.next(layout)
}


}
