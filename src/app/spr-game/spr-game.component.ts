import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spr-game',
  templateUrl: './spr-game.component.html',
  styleUrls: ['./spr-game.component.css']
})
export class SprGameComponent {

  images: string[] = ["assets/images/piedra.png", "assets/images/papel.png", "assets/images/tijeras.png", "assets/images/heart.png", "assets/images/white.jpg"];
  pickIA: number = 4;
  pick: number = 4;
  msg: String = "IA Vs. Player!";
  scoreIA: number = 5;
  scoreP1: number = 5;
  playing: boolean = true;
  imgpick: boolean = false;

  userPick(pick:number){
    this.imgpick = true;
    this.pick = pick - 1;
    this.pickIA = Math.floor(Math.random() * 3);
    switch(this.pickIA){
      case 0:
        this.msg = this.pick == 0 ? "Draw!" : this.pick == 1 ? "Player wins!" : "IA wins!";
        break;
      case 1:
        this.msg = this.pick == 1 ? "Draw!" : this.pick == 2 ? "Player wins!" : "IA wins!";
        break;
      case 2:
        this.msg = this.pick == 2 ? "Draw!" : this.pick == 0 ? "Player wins!" : "IA wins!";
        break;
    }
    if (!this.msg.includes("Draw")) this.msg.includes("IA") ? this.scoreP1-- : this.scoreIA--;
    this.checkGameOver();
  }

  checkGameOver(){
    if (this.scoreIA!=0 && this.scoreP1!=0) return;
    this.msg = this.scoreIA == 0 ? "Player wins the game!" : "IA wins the game!";
    this.playing = false;
  }

}

