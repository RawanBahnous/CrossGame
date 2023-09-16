import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGames } from 'src/Models/igames';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: IGames[] = [
    {
      Id: 1,
      Name: "Bard",
      Type: "Support",
      Desc: "Bard is a mystical wandering spirit,guardian of cosmic secrets. With his magical chimes and cosmic powers.",
      ImgSRC: "assets/images/3-removebg-preview.png",
      Price: 19.99,
      Display: false,
      topGame: true
    },
    {
      Id: 2,
      Name: "Blitzcrank",
      Type: "Support",
      Desc: "Blitzcrank is a hulking steam golem with a singular purpose: to grab and disrupt. His Rocket Grab is infamous for its ability to snatch enemies from a distance and bring them into the fray. Blitzcrank excels at crowd control and initiating fights, making him a staple pick for support players.",
      ImgSRC: "assets/images/8.png",
      Price: 29.99,
      Display: false ,
      topGame: true
    },

    {
      Id: 3,
      Name: "Camille",
      Type: "Top",
      Desc: "Camille is a precision-based assassin and a master of the hextech-powered Hextech Ultimatum. She can quickly dive onto her target and lock them down, making her a formidable duelist in the top lane. Camille excels at isolating and eliminating her foes, and her mobility makes her difficult to escape from." ,
      ImgSRC: "assets/images/3.jpg",
      Price: 9.99,
      Display: false ,
      topGame: true

    },
    {
      Id: 4,
      Name: "Brand",
      Type: "Mid",
      Desc: "Brand is a fiery pyromancer, wielding the destructive power of fire magic. He leaves a trail of blazing destruction in his wake, setting his enemies ablaze with his spells. Brand is a burst mage with powerful area-of-effect abilities, making him a dangerous opponent in team fights. Watch out for his fiery explosions!" ,
      ImgSRC: "assets/images/7f7b30e968ce400713537641ab0e7988.jpg",
      Price: 24.99,
      Display: false ,
      topGame: true
    },
    {
      Id: 5,
      Name: "Corki",
      Type: "ADC",
      Desc: "Corki is a daring yordle pilot who soars above the battlefield in his trusty gyrocopter. He deals mixed damage with his abilities, making him a unique ADC choice. Corki's arsenal includes missiles, bombs, and Gatling guns, allowing him to harass and burst down his opponents in the bot lane." ,
      ImgSRC: "assets/images/oo.jpg",
      Price: 39.99,
      Display: false,
      topGame: false
    },
    {
      Id: 6,
      Name: "Darius",
      Type: "Top",
      Desc: "Darius is a ruthless Noxian warrior known for his executioner's axe, Noxian Guillotine. He excels at close combat and thrives in the top lane. Darius's abilities stack bleeding effects on his enemies, and when fully stacked, he can execute foes with his ultimate. He's a formidable duelist and a true juggernaut on the battlefield." ,
      ImgSRC: "assets/images/1.jpeg",
      Price: 14.99,
      Display: false ,
      topGame: false
    },

    {
      Id: 7,
      Name: "Cho'Gath",
      Type: "Top",
      Desc: "Cho'Gath is a voracious void creature, growing in size and strength with every meal. He is a tanky top laner with a unique mechanic that allows him to grow in size and gain additional health when he consumes minions, monsters, or champions. Cho'Gath's Rupture and Feral Scream abilities provide crowd control and disruption in team fights." ,
      ImgSRC: "assets/images/c5cfba92dfa842e3028b58e863d419d3.jpg",
      Price: 49.99,
      Display: false ,
      topGame: false
    },
    {
      Id: 8,
      Name: "Blitzcrank",
      Type: "Support",
      Desc: "Blitzcrank is a hulking steam golem with a singular purpose: to grab and disrupt. His Rocket Grab is infamous for its ability to snatch enemies from a distance and bring them into the fray. Blitzcrank excels at crowd control and initiating fights, making him a staple pick for support players." ,
      ImgSRC: "assets/images/22.jpg",
      Price: 29.99,
      Display: false ,
      topGame: false
    },
    {
      Id: 9,
      Name: "Cassiopeia",
      Type: "Mid",
      Desc: "Cassiopeia is a serpent sorceress cursed with a snakelike lower body. Her powerful poison abilities can whittle down her enemies over time, and her ultimate, Petrifying Gaze, can stun those who look into her eyes. Cassiopeia excels at sustained damage and controlling the mid lane with her area-of-effect poison spells.",
      ImgSRC: "assets/images/kk.jpg",
      Price: 19.99,
      Display: false ,
      topGame: false
    }
  ];
  constructor() { }
  getAllGames(){
    return this.games;
  }
  getTopGames(){
    return this.games.filter((g)=>g.topGame === true).slice(0,3);
  }
  // getById(id:any) {
  //   return this.games.find((g)=>g.Id === id);
  // }
  getById(id: number): Observable<IGames | undefined> {
    const game = this.games.find((g) => g.Id === id);
    if (game) {
      return of(game);
    } else {
      console.error(`Game with Id ${id} not found.`);
      return of(undefined);
    }
  }

  getGamesByType(gameType:any){
    return this.games.find((g)=>g.Type === gameType);
  }

}
