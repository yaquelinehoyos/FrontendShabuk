import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-create-book',
  templateUrl: './edit-create-book.component.html',
  styleUrls: ['./edit-create-book.component.css']
})
export class EditCreateBookComponent implements OnInit {
  frmEditCreate: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmEditCreate = this.formBuilder.group(
      {
        txtName: ['', [Validators.required]],
        txtAuthor: ['', [Validators.required]],
        txtEdition: ['', [Validators.required]]
      }
    );
  }

}
