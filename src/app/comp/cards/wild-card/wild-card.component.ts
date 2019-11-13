import { Component, OnInit } from '@angular/core';
import { WileServiceService } from '../../../services/wile-service.service';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public srvwild:WileServiceService) {
    
   }

  ngOnInit() {
  }

}
