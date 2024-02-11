import { Component } from '@angular/core';

@Component({
  selector: 'app-ref-game',
  templateUrl: './ref-game.component.html',
  styleUrls: ['./ref-game.component.css']
})
export class RefGameComponent {

  reacting: boolean = false;
  timer: number = 0;
  lock: boolean = false;
  colors: String[] = ["#34a1eb", "#1db534", "#cf4b44"];
  currentColor: String = this.colors[0];
  msg: String = "Click para empezar.";

  async reaction(){
    if(!this.lock){
      this.lock = true;

      if(!this.reacting){
        this.currentColor = this.colors[0];
        this.msg = "Atento..."
        this.reacting = true;
        await new Promise ( e => setTimeout(e, Math.floor(Math.random() * 5000) + 400));
        if(this.reacting){
          this.currentColor = this.colors[1];
          this.msg = "Click!"
          this.timer = performance.now();
        }
      }else{
        let t = performance.now() - this.timer;
        this.currentColor = this.colors[0];
        this.msg = "Tu tiempo ha sido de " + t.toString() + "ms!"
        this.reacting = false;
        await new Promise ( e => setTimeout(e, 1000));
      }

      this.lock=false;
    }else{
      this.currentColor = this.colors[2];
      this.msg = "Espera a que cambie a verde! Haz click para intentarlo de nuevo."
      this.reacting = false;
    }
  }
}
