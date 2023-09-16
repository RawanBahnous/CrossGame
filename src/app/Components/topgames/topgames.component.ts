import { Component, OnInit } from '@angular/core';
import { IGames } from 'src/Models/igames';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-topgames',
  templateUrl: './topgames.component.html',
  styles: [
  ]
})
export class TopgamesComponent implements OnInit{
  gameslist:IGames []= [];
  constructor(private gameServ:GamesService) {}
  ngOnInit(): void {
    this.gameslist = this.gameServ.getTopGames();
  }


}
