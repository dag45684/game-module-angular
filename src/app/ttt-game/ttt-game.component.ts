import { Component } from '@angular/core';

@Component({
  selector: 'app-ttt-game',
  templateUrl: './ttt-game.component.html',
  styleUrls: ['./ttt-game.component.css']
})
export class TttGameComponent {

  playerTurn: boolean = true;
  plays: number = 0;
  winner: string = "";
  used: boolean[] = Array(9).fill(false);
  content: String[] = Array(9).fill("");
  lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];  

  choice(idx: number):boolean {
    if (!this.used[idx]){
      this.used[idx] = true;
      this.content[idx] = this.playerTurn ? "X" : "O";
      if (this.checkweiner()) {
        this.winner = this.playerTurn ? "Crosses Wins" : "Circles Wins";
      } 
      if(this.used.every(e => e) ) this.winner = "It's a draw" // Lol i hate this line
      this.playerTurn = !this.playerTurn;
    }
    if (!this.playerTurn) {
      while ( !this.choice(Math.floor(Math.random() * 9))) {}
    }
    return true;
  }

  checkweiner(): boolean {
    let ok: boolean = false;
    this.lines.forEach( wc => {
      if (this.content[wc[0]] == this.content[wc[1]] && 
        this.content[wc[1]] == this.content[wc[2]] &&
        this.content[wc[0]] != "") ok = true;
    })
    return ok;
  }

}
