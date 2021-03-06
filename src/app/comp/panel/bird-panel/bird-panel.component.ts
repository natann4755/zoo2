import { Component, OnInit } from '@angular/core';
import { BirdServiceService } from '../../../services/bird-service.service';

@Component({
  selector: 'app-bird-panel',
  templateUrl: './bird-panel.component.html',
  styleUrls: ['./bird-panel.component.css']
})
export class BirdPanelComponent implements OnInit {

  constructor(public srvbirds:BirdServiceService) { }

  ngOnInit() {
  }
  corect(num:number):void{
    this.srvbirds.currentbirdindex=num
    this.srvbirds.currentbird=this.srvbirds.birds[num]
  }
}
