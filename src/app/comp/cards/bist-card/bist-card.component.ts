import { Component, OnInit } from '@angular/core';
import { BirdServiceService } from '../../../services/bird-service.service';

@Component({
  selector: 'app-bist-card',
  templateUrl: './bist-card.component.html',
  styleUrls: ['./bist-card.component.css']
})
export class BistCardComponent implements OnInit {

  constructor(public srvbird:BirdServiceService) { }

  ngOnInit() {
  }

}
