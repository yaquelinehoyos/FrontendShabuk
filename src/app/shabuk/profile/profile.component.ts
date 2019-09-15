import { Component, OnInit } from '@angular/core';
import { DummyService } from '../shared/service/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dummyService:DummyService, private router:Router) { }

  localBooks=[];
  publicBooks=[];

  ngOnInit() {
      this.dummyService.getUserLocalBooks().then(x=>this.localBooks=x);
      this.dummyService.getUserPublicBooks().then(x=>this.publicBooks=x);
  }

  editBook(book){
    console.log("edit book",book);
    this.router.navigateByUrl('/edit-create-book',{state:{book:book}});
  }

}
