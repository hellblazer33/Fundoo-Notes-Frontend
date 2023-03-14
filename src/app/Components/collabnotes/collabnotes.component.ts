import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabService } from 'src/app/services/collabServices/collab.service';
import { CollabUserModel } from 'src/app/models/collabModel';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-collabnotes',
  templateUrl: './collabnotes.component.html',
  styleUrls: ['./collabnotes.component.scss'],
})
export class CollabnotesComponent implements OnInit {
  customStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(0,0,0,.6)",
    borderRadius: "50%",
    color: "#202124",
    cursor: "pointer",
  };

  ownerName: any = "";
  collabUserName: any = "";
  ownerEmail: any = "";
  noteId: any;
  collabUsersData: any;
  tempCollabUsersList: any;
  searchEmail: string = "";
  isSearchActive: boolean = false;
  snackBarRef: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  email:any
  collabUser!: CollabUserModel;

  collabType(): CollabUserModel {
    return this.collabUser = {
      noteId: "",
      email: "",
    }
  }

  @Input() collabUserInput: CollabUserModel = this.collabType();

  constructor(public dialogRef: MatDialogRef<CollabnotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private collabService: CollabService, 
    ) { 
      this.noteId = data.notesId;
      
    }

  ngOnInit(): void {

    console.log(this.noteId);
    this.getCollabUsers();
  }

  addCollabEmail() {
    //console.log(collabEmail);
    this.collabUserInput.noteId = this.noteId;
    this.collabUserInput.email = "pk110495@gmail.com";// confirm:this.registerForm.value.confirm,
    
    this.collabService.addCollabUser(this.collabUserInput).subscribe((response: any) => {
      console.log("Added Collab Email Id Sucessfully : ", response);
       
    
      this.getCollabUsers();
    
    });
  }

  recieveEmailId(event: any){ 
    this.searchEmail = event.target.value;
    this.isSearchActive = true;
    if (this.searchEmail.length == 0) {
      this.diableAddCollab();
    }
  }

  diableAddCollab() {
    this.searchEmail = "";
    this.isSearchActive = false;
  }

  getCollabUsers() {
    this.collabService.getCollabUser().subscribe((response: any) => {
        console.log(response);
      this.collabUsersData = response.data;
      this.tempCollabUsersList = response.data;
      // this.ownerName = `${this.collabUsersData[0]?.firstName} ${this.collabUsersData[0]?.lastName}`;
      // this.ownerEmail = `${this.collabUsersData[0]?.collabEmail}`;
      //this.collabUsersData = this.collabUsersData.slice(1);
      console.log(this.ownerName);
      console.log("collaborators list:", this.collabUsersData);
    });
  
  }

  removeCollabUsers(collabId: any) {
    console.log(collabId);
    this.collabService.deleteCollabUser(collabId, this.noteId).subscribe((response: any) => {
  
      this.getCollabUsers();
    
    });
  }

  collabData(collabDataList: any){ 
    console.log(collabDataList)
    this.dialogRef.close(collabDataList)
  }
}
