import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit{
  lastgame:any;
  constructor(private serv:GamesService){}
  ngOnInit(): void {
      let res = this.serv.getAllGames();
      console.log("game last",res);
      // to get last element
      // if (Array.isArray(res)) {
      //    this.lastgame = res[res.length - 1];
      //    console.log(this.lastgame);
      // }
      // to get first element
      if (Array.isArray(res)) {
        this.lastgame = res[0];
        console.log(this.lastgame);
     }
  }

  hiddenText = false;
  hide(){
    this.hiddenText = true;
  }
  show(){
    this.hiddenText = false;
  }
}
