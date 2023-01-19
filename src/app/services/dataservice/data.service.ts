import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  

  private searchData = new BehaviorSubject("default message");
  searchNote = this.searchData.asObservable()
  changeData(message:string){
    this.searchData.next(message)
  
}

}
