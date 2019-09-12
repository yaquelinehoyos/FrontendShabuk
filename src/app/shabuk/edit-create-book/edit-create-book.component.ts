import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-create-book',
  templateUrl: './edit-create-book.component.html',
  styleUrls: ['./edit-create-book.component.css']
})
export class EditCreateBookComponent implements OnInit {
  frmEditCreate: FormGroup;
  book={authors:[]}
  editionMode=false;
  constructor(private formBuilder: FormBuilder, public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.frmEditCreate = this.formBuilder.group(
      {
        txtName: ['', [Validators.required]],
        txtAuthor: ['', [Validators.required]],
        txtEdition: ['', [Validators.required]]
      }
    );
    this.activatedRoute.paramMap;
    if(window.history.state && window.history.state.book){
      this.editionMode=true;
      this.book=window.history.state.book;
    }
  }

}
