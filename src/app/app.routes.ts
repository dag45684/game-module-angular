import {Routes} from '@angular/router';

import { InitialMenuComponent } from './initial-menu/initial-menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { GameListComponent } from './game-list/game-list.component';
import { TttGameComponent } from './ttt-game/ttt-game.component';
import { SprGameComponent } from './spr-game/spr-game.component';
import { MswGameComponent } from './msw-game/msw-game.component';
import { CofGameComponent } from './cof-game/cof-game.component';
import { RefGameComponent } from './ref-game/ref-game.component';
import { GachaGameComponent } from './gacha-game/gacha-game.component';
import { InfoComponent } from './info/info.component';

export const routes = [
    {path: '', component: InitialMenuComponent},
    {path: 'home', component: InitialMenuComponent},
    {path: 'info', component: InfoComponent},
    {path: 'developer', component: DeveloperComponent},
    {path: 'gamelist', component: GameListComponent},
    {path: 'sprgame', component: SprGameComponent},
    {path: 'tttgame', component: TttGameComponent},
    {path: 'mswgame', component: MswGameComponent},
    {path: 'cofgame', component: CofGameComponent},
    {path: 'gachagame', component: GachaGameComponent},
    {path: 'refgame', component: RefGameComponent}
]