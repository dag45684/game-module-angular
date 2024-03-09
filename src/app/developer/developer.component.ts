import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent {


  skillOpen: boolean = false;
  midOpen: boolean = false;

  i_me: string = "/assets/images/50.png"
  i_cine: string = "/assets/images/cine.jpg"
  i_comp: string = "/assets/images/comp.jpg"
  i_eng: string = "/assets/images/eng.png"
  i_mbs: string = "/assets/images/mbs.jpg"
  i_tdp: string = "/assets/images/tdp.jpg"

  skills: string[] = [
    "", //0
    "/assets/images/skills/android.png", //1
    "/assets/images/skills/c-.png", //2
    "/assets/images/skills/c-sharp.png", //3
    "/assets/images/skills/creative-cloud.png", //4
    "/assets/images/skills/docker.png", //5
    "/assets/images/skills/git.png", //6
    "/assets/images/skills/icons8-angular-96.png", //7
    "/assets/images/skills/icons8-bash-96.png", //8
    "/assets/images/skills/icons8-flutter-96.png", //9
    "/assets/images/skills/icons8-latex-96.png", //10
    "/assets/images/skills/icons8-rust-96.png", //11
    "/assets/images/skills/java.png", //12
    "/assets/images/skills/mysql.png", //13
    "/assets/images/skills/php.png", //14
    "/assets/images/skills/python.png", //15
    "/assets/images/skills/typescript.png", //16
  ]


}
