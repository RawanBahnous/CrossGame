import { Component, OnInit } from '@angular/core';
import { IGames } from 'src/Models/igames';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styles: [
  ]
})
export class GameslistComponent implements OnInit{
  gameslist:IGames []= [];
  constructor(private gameServ:GamesService) {}
  ngOnInit(): void {
    this.gameslist = this.gameServ.getAllGames();
  }
}
