import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialMenuComponent } from './initial-menu/initial-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeveloperComponent } from './developer/developer.component'; 
import { RouterOutlet, provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GameListComponent } from './game-list/game-list.component';
import { TttGameComponent } from './ttt-game/ttt-game.component';
import { MswGameComponent } from './msw-game/msw-game.component';
import { CofGameComponent } from './cof-game/cof-game.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialMenuComponent,
    DeveloperComponent,
    GameListComponent,
    TttGameComponent,
    MswGameComponent,
    CofGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
