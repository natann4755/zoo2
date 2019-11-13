import { Component } from '@angular/core';
import { PagingServiceService } from './services/paging-service.service';
import { BirdServiceService } from './services/bird-service.service';
import { WileServiceService } from './services/wile-service.service';
import { BeastsServiceService } from './services/beasts-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoo';
  constructor(public paging:PagingServiceService, public bird:BirdServiceService, public wild:WileServiceService,public beast:BeastsServiceService){}

  getup(event){
    console.log("getup "+event)
    switch (this.paging.currentPanel) {
      case 'birds':
          let getnewindex = this.getindex(this.bird.currentbirdindex,event,this.bird.birds)
          this.bird.currentbirdindex=getnewindex;
          this.bird.currentbird=this.bird.birds[getnewindex]
        
        break;
      case 'wilds':
          let getnewindex2 = this.getindex(this.wild.currentwildindex,event,this.wild.wiles);
          this.wild.currentwildindex=getnewindex2;
          this.wild.currentwild=this.wild.wiles[getnewindex2]
        
        break;
      case 'beasts':
          let getnewindex3 = this.getindex(this.beast.currentbeastindex,event,this.beast.beasts)
          this.beast.currentbeastindex=getnewindex3
          this.beast.currentbeast=this.beast.beasts[getnewindex3]
        
        break;    
    
      default:
        break;
    }
  }

  getindex(corectindex:number,delta:number,arrey:{}[]):number{
    let max = arrey.length-1;
    let newindex = corectindex + delta
      if (newindex>max){
        newindex=0
      }
      if(newindex<0){
        newindex=max
      }

      return newindex

  }
      
}
