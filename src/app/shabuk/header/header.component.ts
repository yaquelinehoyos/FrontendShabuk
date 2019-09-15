import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/service/auth/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private _location: Location) {
  }

  @Input() includeBackButton:boolean=false;
  @Input() showSearch:boolean=true;
  @Input() title:String=null;


  ngOnInit() {
  }

  doLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  onBack(){
    this._location.back();
  }

}
