import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gacha-game',
  templateUrl: './gacha-game.component.html',
  styleUrls: ['./gacha-game.component.css']
})
export class GachaGameComponent implements OnInit{

  gacha: string[][] = new Array(6).fill([]).map(() => Array(7).fill(""));
  cherries: string[] = [""];
  running: boolean[] = [false, false, false];
  iter: number = 4;
  coins: number = 10;
  allow: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      if (this.running[0]){
        this.gacha[0][2] = this.gacha[0][1];
        this.gacha[0][1] = this.gacha[0][0];
        this.gacha[0][0] = this.cherries[Math.floor(Math.random() * 10)];
      }
      if(this.running[1]){
        this.gacha[1][2] = this.gacha[1][1];
        this.gacha[1][1] = this.gacha[1][0];
        this.gacha[1][0] = this.cherries[Math.floor(Math.random() * 10)];
      }
      if(this.running[2]){
        this.gacha[2][2] = this.gacha[2][1];
        this.gacha[2][1] = this.gacha[2][0];
        this.gacha[2][0] = this.cherries[Math.floor(Math.random() * 10)];
      }
    }, 
    50);
  }

  actuate(){
      if (this.iter > 2) {
        this.iter = 0
        this.running = [true, true, true]
        return;
      }
      if (this.running[this.iter]){
        this.running[this.iter]=false;
        this.iter++;
        this.checkGacha();
      }
  }

  checkGacha() {
    let r = ""
    if (this.gacha[0][0] == this.gacha[0][1] && this.gacha[0][1] == this.gacha[0][2]) r = this.gacha[0][0];
    if (this.gacha[1][0] == this.gacha[1][1] && this.gacha[1][1] == this.gacha[1][2]) r = this.gacha[1][0];
    if (this.gacha[2][0] == this.gacha[2][1] && this.gacha[2][1] == this.gacha[2][2]) r = this.gacha[2][0];
    if (this.gacha[0][0] == this.gacha[1][1] && this.gacha[1][1] == this.gacha[2][2]) r = this.gacha[0][0];
    if (this.gacha[2][0] == this.gacha[1][1] && this.gacha[1][1] == this.gacha[0][2]) r = this.gacha[2][0];
    if (r != ""){
      switch(r){
        case this.cherries[0]:
          this.coins *= 2;
          break;
        case this.cherries[1]:
          this.coins *= 3;
          break;
        case this.cherries[2]:
          this.coins *= 2;
          break;
        case this.cherries[3]:
          this.coins *= 3;
          break;
        case this.cherries[4]:
          this.coins *= 2;
          break;
        case this.cherries[5]:
          this.coins *= 3;
          break;
      }
    } else{
      if(this.coins == 0) this.allow = false;
    }
  }

}
