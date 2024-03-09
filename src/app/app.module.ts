import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialMenuComponent } from './initial-menu/initial-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeveloperComponent } from './developer/developer.component';
import { RouterOutlet, provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GameListComponent } from './game-list/game-list.component';
import { TttGameComponent } from './ttt-game/ttt-game.component';
import { MswGameComponent } from './msw-game/msw-game.component';
import { CofGameComponent } from './cof-game/cof-game.component';
import { RefGameComponent } from './ref-game/ref-game.component';
import { SprGameComponent } from './spr-game/spr-game.component';
import { GachaGameComponent } from './gacha-game/gacha-game.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { InfoComponent } from './info/info.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    InitialMenuComponent,
    DeveloperComponent,
    GameListComponent,
    TttGameComponent,
    MswGameComponent,
    CofGameComponent,
    RefGameComponent,
    GachaGameComponent,
    SprGameComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    RouterOutlet,
    RouterModule,
    MatCardModule,
    MatExpansionModule,
    MatTreeModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
