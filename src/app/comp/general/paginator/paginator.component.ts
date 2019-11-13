import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @Output() moveItem:EventEmitter <number> = new EventEmitter <number>()
  @Output() movitem:EventEmitter<number>=new EventEmitter<number>()
  
  moveitenpage(dalta:number):void{
    console.log(dalta)
    this.movitem.emit(dalta)
  }

}
