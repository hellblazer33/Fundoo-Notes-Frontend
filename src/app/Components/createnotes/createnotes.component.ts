import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesservice/notes.service';


@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  @Output() autorefreshEvent = new EventEmitter<string>();  //this is child-parent datasharing & is coming from getallnotes.html, we've to import EventEmitter in the imports above 

  createnotesForm!: FormGroup;
  // submitted = false;

  writenote: boolean = false;


  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit(): void {
    this.createnotesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]

    });
  }

  takeanote() {
    console.log(this.writenote);
    return this.writenote === true ? (this.writenote = false) : (this.writenote = true);   // turnary operator is used here
    // this.writenote=true;

  }
  onSubmit() {
    this.writenote = false;

    if (this.createnotesForm.valid) {
      console.log(this.createnotesForm.value)

      let createnote = {
        title: this.createnotesForm.value.title,
        description: this.createnotesForm.value.description
      }
      this.note.usercreatenotes(createnote).subscribe((response: any) => {
        console.log(response);

        this.autorefreshEvent.emit(response)  // you can pass anything inside .emit() parenthesis child-parent data sharing between getallnotes and create notes & is coming from getallnotes.html
      })

    } else {
      console.log("enter data");
    }
  }
}
