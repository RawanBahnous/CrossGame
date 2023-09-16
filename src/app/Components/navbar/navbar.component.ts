import { Component } from '@angular/core';
import { IGames } from 'src/Models/igames';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  selectedGameType: string = 'Select Type'; // Default selection
  gameTypes: any;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gameTypes = this.gamesService.getGamesByType(this.selectedGameType);
    console.log(this.gameTypes);

  }
  onGameTypeChange(){}

  showLogin = false;
  showReg = false;

  openLogin(){
    this.showLogin = true;
  }
  closeLogin(){
    this.showLogin = false;
  }
  openReg(){
    this.showReg = !this.showReg;
  }
  closeReg(){
    this.showReg = false;
  }

}
