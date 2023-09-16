import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GamedetailsComponent } from './Components/gamedetails/gamedetails.component';
import { GameslistComponent } from './Components/gameslist/gameslist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"gameslist",component:GameslistComponent},
  {path:"gamedetails/:id",component:GamedetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
