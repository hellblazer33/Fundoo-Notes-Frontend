import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { application } from 'express';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor( private httpService: HttpService ) {
    this.token=localStorage.getItem("token")  // this token is taken from backend that is generated & stored in our local storage after we signin & we are setting this token in our signin.ts as localstorage.setitems  
   }

   usercreatenotes(data:any){

    let header = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('notes/create', data, true,header)  // here data written in () is coming from  my .ts file
   }

 
   usergetallnotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' ,
        'Authorization' : 'Bearer '+this.token
      })
    }

    return this.httpService.getService('notes/redisnotes',true,header)
   }


   userdeletenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
     
    }
  
    return this.httpService.putService(`notes/istrash?notesId=${data.notesId}`,data,true,header)

   }

   userarchivenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`notes/isarchive?notesId=${data.notesId}`,data,true,header)
   }

   userupdatenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`notes/update?notesId=${data.notesId}`,data,true,header)
   }


   usercolor(data:any){   
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`notes/color?notesId=${data.notesId}&color=${data.color}`,data,true,header)
   }


   deletenote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.deleteService(`Notes/Delete?id=${data.id}&noteId=${data.notesId}`,true,header)
  }

}

