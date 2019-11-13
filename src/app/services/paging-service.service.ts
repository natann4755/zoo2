import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingServiceService {
  public currentPanel = 'birds'
  constructor() { 
    console.log(this.currentPanel)
  }
}
