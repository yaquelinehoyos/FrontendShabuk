import { Component, OnInit } from '@angular/core';
import { DummyService } from '../shared/service/dummy.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dummyService:DummyService) { }

  localBooks=[]
  publicBooks=[]

  ngOnInit() {
      this.dummyService.getUserLocalBooks().then(x=>this.localBooks=x);
      this.dummyService.getUserPublicBooks().then(x=>{
        console.log(x);
        this.publicBooks=x;
      });
  }

}
