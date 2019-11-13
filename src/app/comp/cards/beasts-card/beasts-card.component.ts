import { Component, OnInit } from '@angular/core';
import { BeastsServiceService } from '../../../services/beasts-service.service';

@Component({
  selector: 'app-beasts-card',
  templateUrl: './beasts-card.component.html',
  styleUrls: ['./beasts-card.component.css']
})
export class BeastsCardComponent implements OnInit {

  constructor(public srvbeasts:BeastsServiceService) {
  
  }
   
    
  ngOnInit() {
  }

}
