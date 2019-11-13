import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdServiceService {

  constructor() { }
  birds = [
    {name:'blue tail',whit:6.6,food:'bred',life:'1y',growingPlace:'ysreal',img:'https://www.hbw.com/sites/default/files/styles/ibc_2k/public/ibc/p/Himalayan_Bluetail.jpg?itok=dlEPqwR3'},
    {name:'pink tail',whit:6.7,food:'tommato',life:'2y',growingPlace:'america',img:'https://ae01.alicdn.com/kf/HTB1QNxsLFXXXXXLXVXXq6xXFXXXl/new-simulation-dark-pink-Bird-toy-plastic-furs-wings-long-tail-bird-gift-about-50cm-1489.jpg'},
    {name:'black tail',whit:1,food:'cucember',life:'3y',growingPlace:'mexico',img:'https://www.thespruce.com/thmb/EZOVsULXPxHRhh11VrzZajnjJtc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-billed-magpie-5a66065de258f800378ace19.jpg'},
    {name:'yello tail',whit:3,food:'cake',life:'4y',growingPlace:'maroko',img:'https://ae01.alicdn.com/kf/HTB16IFnRXXXXXbeXVXXq6xXFXXX2/new-simulation-Phoenix-bird-model-foam-furs-yellow-long-tail-bird-doll-gift-about-60x32cm-1702.jpg'},
    {name:'brown tail',whit:5,food:'onyen',life:'5y',growingPlace:'warsa',img:'https://i.pinimg.com/originals/f4/a1/c7/f4a1c75030e1f26ea27a2b0d1f7574af.jpg'},
    {name:'red tail',whit:3.6,food:'coofe',life:'6y',growingPlace:'mitsraim',img:'https://blog.nationalgeographic.org/wp-content/uploads/2019/11/The-red-avadavat-Gujarat-India-by-Sathish-Poojari-960x450.jpg'},
    {name:'green tail',whit:19.9,food:'oil',life:'7y',growingPlace:'jarden',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVwB0QZh-duHLMkh5L-RDPsdwerlTduJO4mxjR9V7eGfPE-DLI'}
  ]
  currentbirdindex=0
  currentbird=this.birds[this.currentbirdindex]
}
 
