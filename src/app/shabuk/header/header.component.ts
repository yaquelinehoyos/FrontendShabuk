import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() includeBackButton:boolean=false;
  @Input() showSearch:boolean=true;
  @Input() title:String=null;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onBack(){
    this._location.back();
  }

}
