import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msw-game',
  templateUrl: './msw-game.component.html',
  styleUrls: ['./msw-game.component.css']
})
export class MswGameComponent implements OnInit {

  exp: number[] = Array(12).fill(0);
  spaces: boolean[] = Array(100).fill(false);
  content: number[] = Array(100).fill(0);
  neighbours: number[] = [1, -1, 9, -9, 10, -10, 11, -11];
  gameover: boolean = false;
  msg: String = "Evita las minas!"

  ngOnInit(): void {
    this.exp.forEach( _ => this.content[Math.floor(Math.random() * 100)] = -1);
    for(let i=0; i<100; i++){
      this.neighbours.forEach(n => {
        if (n+i < 0 || n+i > this.content.length || this.content[i] ==- 1) return;
        if ((n == -1 || n == -11 || n == 9) && i%10 == 0) return;
        if ((n == 1 || n == 11 || n == -9) && i%10 == 9) return;
        this.content[i] = this.content[i+n] == -1 ? this.content[i]+1 : this.content[i];
      });
    }
  }

  step(idx: number) {
    if(!this.spaces[idx] && !this.gameover){
      this.spaces[idx] = true;
      if (this.content[idx] == -1) {
        this.msg = "Has perdido!"
        this.gameover = true;
      }
      else if (this.content[idx] == 0) this.propagate(idx);
    }
  }

  propagate(idx: number){
    this.neighbours.forEach(n => {
      if (n+idx < 0 || n+idx > this.content.length) return;
      if ((n == -1 || n == -11 || n == 9) && idx%10 == 0) return;
      if ((n == 1 || n == 11 || n == -9) && idx%10 == 9) return;
      this.step(idx+n);
    });
  }

  reset() {
    this.spaces = Array(100).fill(false);
    this.content = Array(100).fill(0);
    this.gameover = false;
    this.msg = "Evita las minas!";
    this.ngOnInit();
  }
}
