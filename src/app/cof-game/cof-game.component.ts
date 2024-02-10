import { Component } from '@angular/core';

@Component({
  selector: 'app-cof-game',
  templateUrl: './cof-game.component.html',
  styleUrls: ['./cof-game.component.css']
})

export class CofGameComponent {

  holes: String[][] = new Array(6).fill([]).map(() => Array(7).fill("#FBFBFB"));
  full: boolean[] = new Array(6).fill(false);
  player: boolean = true;
  win: boolean = false;
  msg: String = "";

  insert(col:number): boolean{
    if(this.full[col]) return false;
    this.holes[col][this.holes[col].lastIndexOf("#FBFBFB")] = this.player ? "#0000FF" : "#FF0000";
    this.validate(this.player ? "#0000FF" : "#FF0000");
    if (this.win) return true;
    this.player = !this.player;
    if(this.player) return true;
    if (this.holes[col].lastIndexOf("#FBFBFB") == -1) this.full[col] = true;
    while(!this.insert(Math.floor(Math.random()*6))){}
    return true;
  }

  validate(hex: String){
    //Horizontal
    for(let i=0; i<this.holes.length; i++){
      for(let j=0; j<this.holes[0].length - 3; j++){
        if(this.holes[i][j] === hex && this.holes[i][j+1] === hex && this.holes[i][j+2] === hex && this.holes[i][j+3] === hex) this.winner(hex == "#0000FF" ? true : false);
      }
    }
    //Vertical
    for(let i=0; i<this.holes.length - 3; i++){
      for(let j=0; j<this.holes[0].length; j++){
        if(this.holes[i][j] === hex && this.holes[i+1][j] === hex && this.holes[i+2][j] === hex && this.holes[i+3][j] === hex) this.winner(hex == "#0000FF" ? true : false);
      }
    }
    //Ascending
    for(let i=3; i<this.holes.length; i++){
      for(let j=0; j<this.holes[0].length-3; j++){
        if(this.holes[i][j] === hex && this.holes[i-1][j+1] === hex && this.holes[i-2][j+2] === hex && this.holes[i-3][j+3] === hex) this.winner(hex == "#0000FF" ? true : false);
      }
    }
    //Descending
    for(let i=3; i<this.holes.length; i++){
      for(let j=3; j<this.holes[0].length; j++){
        if(this.holes[i][j] === hex && this.holes[i-1][j-1] === hex && this.holes[i-2][j-2] === hex && this.holes[i-3][j-3] === hex) this.winner(hex == "#0000FF" ? true : false);
      }
    }
  }

  winner(p: boolean){
    this.full = new Array(6).fill(true);
    this.win = true;
    this.msg = p ? "Player wins!" : "IA Wins!";
  }

  restart(){
    this.holes = new Array(6).fill([]).map(() => Array(7).fill("#FBFBFB"));
    this.full = new Array(6).fill(false);
    this.player = true;
    this.win = false;
    this.msg = "";
  }


}
