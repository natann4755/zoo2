import { Component, OnInit } from '@angular/core';
import { WileServiceService } from '../../../services/wile-service.service';

@Component({
  selector: 'app-wild-panel',
  templateUrl: './wild-panel.component.html',
  styleUrls: ['./wild-panel.component.css']
})
export class WildPanelComponent implements OnInit {

  constructor(public srwilds:WileServiceService) { 
    console.log("cunstructor wilds",srwilds);
    
  }

  ngOnInit() {
  }

}
