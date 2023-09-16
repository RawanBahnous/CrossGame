import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { GameslistComponent } from './Components/gameslist/gameslist.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SliderComponent } from './Components/slider/slider.component';
import { GamedetailsComponent } from './Components/gamedetails/gamedetails.component';
import { TopgamesComponent } from './Components/topgames/topgames.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { SearchingComponent } from './Components/searching/searching.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameslistComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    GamedetailsComponent,
    TopgamesComponent,
    CardComponent,
    SearchingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
