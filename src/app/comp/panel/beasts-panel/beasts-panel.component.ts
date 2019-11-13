import { Component, OnInit } from '@angular/core';
import { BeastsServiceService } from '../../../services/beasts-service.service';

@Component({
  selector: 'app-beasts-panel',
  templateUrl: './beasts-panel.component.html',
  styleUrls: ['./beasts-panel.component.css']
})
export class BeastsPanelComponent implements OnInit {

  constructor(public srvbeasts:BeastsServiceService) { 
  }

  ngOnInit() {
  }

}
