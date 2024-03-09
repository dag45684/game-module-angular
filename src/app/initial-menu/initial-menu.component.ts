import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-initial-menu',
  templateUrl: './initial-menu.component.html',
  styleUrls: ['./initial-menu.component.css']
})
export class InitialMenuComponent {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(msg: string, act: string) {
    this._snackBar.open(msg, act);
  }

  exit() {
    if (confirm('Deseas cerrar la web?')) {
      window.close(); //No se puede hacer esto, pero no se que intencion tenia este boton...
    }
  }

}
