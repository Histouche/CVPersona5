import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  public goTo(param:string){
    this.app.theatreMusic.pause();
    this.app.theatreMusic.currentTime = 0.0;
    this.app.navigation(param);
  }

  public toggleMenu(close = true){
    const menu = document.getElementById('menu-bg');
    const homeM = document.getElementById('menu-home');
    const homePr = document.getElementById('menu-pres');
    const exp = document.getElementById('menu-exp');
    const comp = document.getElementById('menu-comp');
    const form = document.getElementById('menu-form');
    const port = document.getElementById('menu-port');
    const cont = document.getElementById('menu-cont');

    const back = document.getElementById('menu-back');
    const icon = document.getElementById('menu-icon');

    const links = document.querySelectorAll('.menu-open-link');
    if(menu?.classList.contains('open') || close == true){
      back?.classList.remove('open');
      menu?.classList.remove('open');
      icon?.classList.remove('open');
      //masquage des menus au fur et à mesure de l'animation
      setTimeout(() => {
        homeM?.classList.add('hide');
        homeM?.classList.remove('show');
      }, 700);
      setTimeout(() => {
        homePr?.classList.add('hide');
        homePr?.classList.remove('show');
      }, 650);
      setTimeout(() => {
        exp?.classList.add('hide');
        exp?.classList.remove('show');
      }, 550);
      setTimeout(() => {
        comp?.classList.add('hide');
        comp?.classList.remove('show');
      }, 450);
      setTimeout(() => {
        form?.classList.add('hide');
        form?.classList.remove('show');
      }, 400);
      setTimeout(() => {
        port?.classList.add('hide');
        port?.classList.remove('show');
      }, 300);
      setTimeout(() => {
        cont?.classList.add('hide');
        cont?.classList.remove('show');
      }, 150);
      setTimeout(() => {
        links?.forEach(element => {
          element.classList.remove('hide');
        });
      }, 850);
    } else{
      icon?.classList.add('open');
      menu?.classList.add('open');
      back?.classList.add('open');
      //affichage des menus au fur et à mesure de l'animation
      setTimeout(() => {
        homeM?.classList.add('show');
      }, 200);
      setTimeout(() => {
        homePr?.classList.add('show');
      }, 250);
      setTimeout(() => {
        exp?.classList.add('show');
      }, 350);
      setTimeout(() => {
        comp?.classList.add('show');
      }, 400);
      setTimeout(() => {
        form?.classList.add('show');
      }, 550);
      setTimeout(() => {
        port?.classList.add('show');
      }, 700);
      setTimeout(() => {
        cont?.classList.add('show');
      }, 750);
    }
  }
}
