import {Routes} from '@angular/router';
import { InitialMenuComponent } from './initial-menu/initial-menu.component';
import { DeveloperComponent } from './developer/developer.component';

export const routes = [
    {path: 'home', component: InitialMenuComponent},
    {path: 'developer', component: DeveloperComponent}
]