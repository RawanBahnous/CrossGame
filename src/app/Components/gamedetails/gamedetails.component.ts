import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IGames } from 'src/Models/igames';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styles: []
})
export class GamedetailsComponent implements OnInit {
  game: IGames | undefined;
  gameID: any; // We'll assume game IDs are always numbers

  constructor(
    private gameServ: GamesService,
    private router: ActivatedRoute,
    private route: Router

  ) {}

  //if we used observable
  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); 
      }
    });

    this.router.paramMap.subscribe((params) => {
        this.gameID = params.get('id');
        console.log(this.gameID);
        this.gameServ.getById(+this.gameID).subscribe(
          (res: IGames | undefined) => {
            if (res) {
              console.log(res);
              this.game = res;
            } else {
              console.error(`game with Id ${this.gameID} msh hnaa`);
            }
          },
          (error) => {
            console.error('An error occurred while fetching the game:', error);
          }
        );
  });
  }

  //if we not
  // ngOnInit(): void {
  //   this.router.paramMap.subscribe((params) => {
  //       this.gameID = params.get('id');
  //       console.log(this.gameID);
  //       this.game = this.gameServ.getById(+this.gameID);
  //       console.log(this.game);
  // });
  // }
}
