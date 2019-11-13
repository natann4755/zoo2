import { Component, OnInit } from '@angular/core';
import { PagingServiceService } from '../../../services/paging-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public pagg:PagingServiceService) { }

  ngOnInit() {
  }
  navTo(pagename:string):void{
    // console.log(`func nuv to with( ?{pagename} )`)
    console.log(`nav to work ${pagename} now`)
    this.pagg.currentPanel = pagename
  }

}
