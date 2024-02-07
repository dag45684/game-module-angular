import {Routes} from '@angular/router';

import { InitialMenuComponent } from './initial-menu/initial-menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { GameListComponent } from './game-list/game-list.component';
import { TttGameComponent } from './ttt-game/ttt-game.component';

export const routes = [
    {path: '', component: InitialMenuComponent},
    {path: 'home', component: InitialMenuComponent},
    {path: 'developer', component: DeveloperComponent},
    {path: 'gamelist', component: GameListComponent},
    {path: 'tttgame', component: TttGameComponent}
]